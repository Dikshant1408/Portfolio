import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.PYTHON_BACKEND_URL || 'http://localhost:8000'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const response = await fetch(`${BACKEND_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.detail || 'Failed to get a response from the chat service' },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
  } catch {
    return NextResponse.json(
      { error: 'Could not reach the chat service. Please try again later.' },
      { status: 503 }
    )
  }
}
