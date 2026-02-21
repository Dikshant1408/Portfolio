import { NextRequest, NextResponse } from 'next/server'

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || ''
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || 'mistralai/mistral-7b-instruct:free'

const RESUME_SYSTEM_PROMPT = `You are an AI assistant for Dikshant Rajput's portfolio website. \
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
politely redirect the conversation back to his professional background.`

interface HistoryMessage {
  role: 'user' | 'assistant'
  content: string
}

export async function POST(request: NextRequest) {
  if (!OPENROUTER_API_KEY) {
    return NextResponse.json(
      { error: 'Chat service is not configured. Please set OPENROUTER_API_KEY.' },
      { status: 503 }
    )
  }

  try {
    const body = await request.json()
    const { message, history = [] }: { message: string; history?: HistoryMessage[] } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
    }

    const messages = [
      { role: 'system', content: RESUME_SYSTEM_PROMPT },
      ...history,
      { role: 'user', content: message },
    ]

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://dikshantrajput.dev',
        'X-Title': 'Dikshant Portfolio AI Chat',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || 'Failed to get a response from the chat service' },
        { status: response.status }
      )
    }

    const choices = data.choices
    if (!Array.isArray(choices) || !choices[0]?.message?.content) {
      return NextResponse.json(
        { error: 'Unexpected response format from chat service' },
        { status: 502 }
      )
    }

    return NextResponse.json({ response: choices[0].message.content })
  } catch {
    return NextResponse.json(
      { error: 'Could not reach the chat service. Please try again later.' },
      { status: 503 }
    )
  }
}
