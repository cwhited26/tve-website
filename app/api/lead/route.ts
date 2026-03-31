import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const ALLOWED_SERVICES = [
  'roof-replacement',
  'roof-repair',
  'gutters',
  'siding',
  'decks',
  'painting',
  'storm-damage',
  'inspections',
  'other',
] as const

interface LeadPayload {
  name: string
  phone: string
  service: string
  message?: string
}

function sanitize(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str.trim().slice(0, 500)
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const raw = body as Record<string, unknown>

  // Honeypot — bots fill this; humans don't
  if (raw.website) {
    return NextResponse.json({ ok: true })
  }

  const payload: LeadPayload = {
    name: sanitize(raw.name),
    phone: sanitize(raw.phone),
    service: sanitize(raw.service),
    message: sanitize(raw.message),
  }

  if (!payload.name || payload.name.length < 2) {
    return NextResponse.json({ error: 'Name is required' }, { status: 422 })
  }

  // Basic phone validation: at least 10 digits
  const digitsOnly = payload.phone.replace(/\D/g, '')
  if (digitsOnly.length < 10) {
    return NextResponse.json({ error: 'Valid phone number is required' }, { status: 422 })
  }

  if (!ALLOWED_SERVICES.includes(payload.service as (typeof ALLOWED_SERVICES)[number])) {
    return NextResponse.json({ error: 'Invalid service type' }, { status: 422 })
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (supabaseUrl && supabaseServiceKey) {
    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    try {
      const { error } = await Promise.race([
        supabase.from('leads').insert({
          name: payload.name,
          phone: payload.phone,
          notes: [payload.service, payload.message].filter(Boolean).join(' — '),
          source: 'website_hero',
          status: 'new',
        }),
        new Promise<{ data: null; error: Error }>((resolve) =>
          setTimeout(
            () => resolve({ data: null, error: new Error('Supabase insert timed out') }),
            8000,
          ),
        ),
      ])
      if (error) {
        console.error('Supabase lead insert error:', error.message)
      }
    } catch (err) {
      console.error('Supabase lead insert exception:', err)
    }
  }

  return NextResponse.json({ ok: true })
}
