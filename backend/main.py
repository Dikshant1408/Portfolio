from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx
import os
import sqlite3
from typing import Optional
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Portfolio AI Chat Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", "*").split(","),
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["Content-Type", "Authorization"],
)

DB_PATH = os.getenv("DB_PATH", "chat_history.db")
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY", "")
OPENROUTER_MODEL = os.getenv("OPENROUTER_MODEL", "mistralai/mistral-7b-instruct:free")

RESUME_SYSTEM_PROMPT = """You are an AI assistant for Dikshant Rajput's portfolio website. \
Answer questions about his background, skills, projects, and experience using the information below.

## Personal Information
- Name: Dikshant Rajput
- Location: Ghaziabad, India
- Email: dikshantrajput2007087@gmail.com
- Phone: +91 7982650236
- GitHub: github.com/Dikshant1408
- LinkedIn: linkedin.com/in/dikshant-rajput/

## Summary
Versatile Software Developer & Innovator specialising in AI-powered applications, fintech solutions, \
and modern web technologies. Currently pursuing MCA at Birla Institute of Technology, Mesra.

## Education
1. Master of Computer Applications (MCA)
   - Birla Institute of Technology, Mesra, India — 2024–2026
   - Specialising in AI and Machine Learning; active hackathon participant

2. Bachelor of Computer Applications (BCA)
   - Symbiosis Institute of Computer Studies and Research, Pune, India — 2021–2024
   - Strong foundation in programming and software development

## Work Experience
Intern — CoreFinExperts Global Technologies Pvt Ltd (Jan 2024 – Apr 2024)
- Contributed to the go-to-market strategy for DhanXpert (fintech product)
- Conducted comprehensive market research and competitor analysis
- Facilitated user feedback sessions, boosting customer engagement by 25%
- Assisted in crafting business models and pitch decks for product scaling

## Skills
- Programming Languages: Python (90%), Java (85%), JavaScript (80%), SQL (75%)
- AI & Machine Learning: Machine Learning (85%), TensorFlow (80%), Data Science (82%), AI (78%), NLP (75%)
- Tools & Frameworks: Git (90%), Firebase (80%), Django (75%), Flask (70%)
- Soft Skills: Problem Solving, Leadership, Effective Communication, Teamwork, Adaptability

## Projects
1. Campus Sahayak (2026) — Comprehensive campus management system
   Tech: Python, Django, JavaScript, HTML/CSS, SQLite
2. RupeeRadar — AI-Powered Student Budget Guardian (2025)
   Tech: Python, Machine Learning, Flask, AI, Data Analytics
3. CelestAI — AI-Powered Space Chatbot (2025, The Stellar Gateway Hackathon)
   Tech: Python, NLP, AI, Machine Learning, API Integration
4. AstroMedAI — Space Health and Radiation Risk Assessment (2025)
   Tech: Python, AI, Data Science, Health Analytics, Machine Learning
5. DhanXpert Market Research & Strategy (2024) — Fintech go-to-market research
6. AI Foundations & Machine Learning Projects (2025) — Collection of ML/AI projects

## Achievements
- The Stellar Gateway Hackathon Participant (2025)
- AI & Machine Learning Specialist (2024–Present)
- Fintech Innovation Contributor — improved customer engagement by 25% (2024)

## Certifications
- Artificial Intelligence Foundations: Machine Learning — LinkedIn Learning (2025)
- JPMorgan Chase & Co — Software Engineering Job Simulation — Forage (2025)
- Effective Leadership — HP LIFE (2025)

Be friendly, concise, and accurate. If asked something unrelated to Dikshant's resume or portfolio, \
politely redirect the conversation back to his professional background."""


def init_db() -> None:
    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        """CREATE TABLE IF NOT EXISTS chat_messages (
               id        INTEGER PRIMARY KEY AUTOINCREMENT,
               session_id TEXT    NOT NULL,
               role      TEXT    NOT NULL,
               content   TEXT    NOT NULL,
               timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
           )"""
    )
    conn.commit()
    conn.close()


init_db()


class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = "default"


class ChatResponse(BaseModel):
    response: str
    session_id: str


def _get_history(session_id: str, limit: int = 10) -> list[dict]:
    conn = sqlite3.connect(DB_PATH)
    rows = conn.execute(
        "SELECT role, content FROM chat_messages "
        "WHERE session_id = ? ORDER BY timestamp DESC LIMIT ?",
        (session_id, limit),
    ).fetchall()
    conn.close()
    return [{"role": r[0], "content": r[1]} for r in reversed(rows)]


def _save(session_id: str, role: str, content: str) -> None:
    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        "INSERT INTO chat_messages (session_id, role, content) VALUES (?, ?, ?)",
        (session_id, role, content),
    )
    conn.commit()
    conn.close()


@app.get("/api/health")
async def health_check():
    return {"status": "ok"}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not OPENROUTER_API_KEY:
        raise HTTPException(status_code=500, detail="OPENROUTER_API_KEY is not configured")

    history = _get_history(request.session_id)

    messages = [{"role": "system", "content": RESUME_SYSTEM_PROMPT}]
    messages.extend(history)
    messages.append({"role": "user", "content": request.message})

    _save(request.session_id, "user", request.message)

    async with httpx.AsyncClient(timeout=30.0) as client:
        resp = await client.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "HTTP-Referer": "https://dikshantrajput.dev",
                "X-Title": "Dikshant Portfolio AI Chat",
                "Content-Type": "application/json",
            },
            json={
                "model": OPENROUTER_MODEL,
                "messages": messages,
                "max_tokens": 500,
                "temperature": 0.7,
            },
        )

    if resp.status_code != 200:
        raise HTTPException(status_code=resp.status_code, detail="OpenRouter API error")

    resp_data = resp.json()
    choices = resp_data.get("choices")
    if not choices or not isinstance(choices, list) or not choices[0].get("message", {}).get("content"):
        raise HTTPException(status_code=502, detail="Unexpected response format from OpenRouter")

    assistant_message = choices[0]["message"]["content"]
    _save(request.session_id, "assistant", assistant_message)

    return ChatResponse(response=assistant_message, session_id=request.session_id)
