# Portfolio AI Chat — Python Backend

This FastAPI backend powers the AI chat widget on Dikshant Rajput's portfolio website.  
It stores conversation history in SQLite and calls [OpenRouter](https://openrouter.ai/) to generate responses grounded in the portfolio owner's resume.

## Requirements

- Python 3.10+
- An [OpenRouter](https://openrouter.ai/) API key (free tier is enough with a free model)

## Setup

```bash
# 1. Create and activate a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Copy the example env file and fill in your API key
cp .env.example .env
# Edit .env and set OPENROUTER_API_KEY=<your-key>

# 4. Start the server
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.

## Endpoints

| Method | Path          | Description                        |
|--------|---------------|------------------------------------|
| GET    | `/api/health` | Health-check — returns `{"status":"ok"}` |
| POST   | `/api/chat`   | Send a message and receive an AI response |

### POST `/api/chat`

**Request body**
```json
{
  "message": "What projects has Dikshant built?",
  "session_id": "optional-session-identifier"
}
```

**Response**
```json
{
  "response": "Dikshant has built several projects including...",
  "session_id": "optional-session-identifier"
}
```

## Environment Variables

| Variable            | Required | Default                              | Description                        |
|---------------------|----------|--------------------------------------|------------------------------------|
| `OPENROUTER_API_KEY`| **Yes**  | —                                    | Your OpenRouter API key            |
| `OPENROUTER_MODEL`  | No       | `mistralai/mistral-7b-instruct:free` | OpenRouter model to use            |
| `DB_PATH`           | No       | `chat_history.db`                    | SQLite database file path          |
| `ALLOWED_ORIGINS`   | No       | `*`                                  | Comma-separated CORS allowed origins |

## Connecting to the Next.js Frontend

Set the `PYTHON_BACKEND_URL` environment variable in your Next.js project:

```bash
# .env.local (Next.js root)
PYTHON_BACKEND_URL=http://localhost:8000
```

The Next.js API route at `/api/chat` will proxy all requests to this backend.
