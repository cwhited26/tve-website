import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'
import { google } from 'googleapis'
import { createServiceClient } from '@/lib/supabase'

interface ContactPayload {
  name: string
  email: string
  phone: string
  address?: string
  serviceType: string
  message: string
  hp_field?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone: string): boolean {
  return phone.replace(/\D/g, '').length >= 10
}

async function sendTwilioSMS(body: string): Promise<void> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN
  const fromNumber = process.env.TWILIO_PHONE_NUMBER
  const toNumber = process.env.CHASE_PHONE_NUMBER

  if (!accountSid || !authToken || !fromNumber || !toNumber) {
    throw new Error('Twilio environment variables not configured')
  }

  const client = twilio(accountSid, authToken)
  await client.messages.create({ body, from: fromNumber, to: toNumber })
}

function buildRawEmail(params: {
  to: string
  from: string
  subject: string
  textBody: string
  htmlBody: string
}): string {
  const { to, from, subject, textBody, htmlBody } = params

  const boundary = 'boundary_tve_' + Date.now().toString(36)
  const lines = [
    `To: ${to}`,
    `From: Tennessee Valley Exteriors <${from}>`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset=UTF-8',
    '',
    textBody,
    '',
    `--${boundary}`,
    'Content-Type: text/html; charset=UTF-8',
    '',
    htmlBody,
    '',
    `--${boundary}--`,
  ]

  return Buffer.from(lines.join('\r\n')).toString('base64url')
}

async function sendGmailConfirmation(
  recipientEmail: string,
  recipientName: string,
  serviceType: string
): Promise<void> {
  const clientId = process.env.GMAIL_CLIENT_ID
  const clientSecret = process.env.GMAIL_CLIENT_SECRET
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN
  const fromEmail = process.env.GMAIL_FROM_EMAIL || 'chase@tnvex.com'

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Gmail API environment variables not configured')
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret)
  oauth2Client.setCredentials({ refresh_token: refreshToken })

  const gmail = google.gmail({ version: 'v1', auth: oauth2Client })

  const serviceLabel = serviceType
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

  const textBody = [
    `Hi ${recipientName},`,
    '',
    `Thanks for reaching out to Tennessee Valley Exteriors! We received your message about ${serviceLabel} and will get back to you within one business day — usually the same day.`,
    '',
    `In the meantime, if you need to reach us directly:`,
    `  Phone: 423-762-7728`,
    `  Email: chase@tnvex.com`,
    '',
    `We appreciate you considering TVE for your project.`,
    '',
    `Chase Whited`,
    `Tennessee Valley Exteriors`,
    `423-762-7728 | chase@tnvex.com`,
    `https://tnvex.com`,
  ].join('\n')

  const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f8f9fa;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fa;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">
        <tr><td style="background:#0A1628;padding:28px 32px;">
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">Tennessee Valley Exteriors</h1>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.6);font-size:13px;">Chattanooga, TN &amp; North Georgia</p>
        </td></tr>
        <tr><td style="padding:32px;">
          <p style="margin:0 0 16px;color:#334155;font-size:16px;">Hi ${recipientName},</p>
          <p style="margin:0 0 16px;color:#334155;font-size:16px;line-height:1.6;">
            Thanks for reaching out to Tennessee Valley Exteriors! We received your message about
            <strong>${serviceLabel}</strong> and will get back to you within one business day — usually the same day.
          </p>
          <p style="margin:0 0 24px;color:#334155;font-size:16px;line-height:1.6;">
            In the meantime, if you need to reach us directly:
          </p>
          <table cellpadding="0" cellspacing="0" style="background:#f8f9fa;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
            <tr><td style="padding:4px 0;">
              <span style="color:#64748b;font-size:14px;">Phone: </span>
              <a href="tel:+14237627728" style="color:#2563EB;font-weight:600;font-size:14px;text-decoration:none;">423-762-7728</a>
            </td></tr>
            <tr><td style="padding:4px 0;">
              <span style="color:#64748b;font-size:14px;">Email: </span>
              <a href="mailto:chase@tnvex.com" style="color:#2563EB;font-weight:600;font-size:14px;text-decoration:none;">chase@tnvex.com</a>
            </td></tr>
          </table>
          <p style="margin:0 0 8px;color:#334155;font-size:15px;">We appreciate you considering TVE for your project.</p>
          <p style="margin:0;color:#334155;font-size:15px;font-weight:600;">Chase Whited<br>
          <span style="font-weight:400;color:#64748b;">Tennessee Valley Exteriors</span></p>
        </td></tr>
        <tr><td style="background:#f8f9fa;padding:20px 32px;border-top:1px solid #e2e8f0;">
          <p style="margin:0;color:#94a3b8;font-size:12px;text-align:center;">
            Tennessee Valley Exteriors &bull; Chattanooga, TN &bull;
            <a href="https://tnvex.com" style="color:#94a3b8;">tnvex.com</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

  const rawEmail = buildRawEmail({
    to: recipientEmail,
    from: fromEmail,
    subject: `We received your message — Tennessee Valley Exteriors`,
    textBody,
    htmlBody,
  })

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw: rawEmail },
  })
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, phone, address, serviceType, message, hp_field } = payload

  // Honeypot — silently discard bot submissions
  if (hp_field) {
    return NextResponse.json({ success: true })
  }

  // Validate required fields
  const missing: string[] = []
  if (!name?.trim()) missing.push('name')
  if (!email?.trim()) missing.push('email')
  if (!phone?.trim()) missing.push('phone')
  if (!serviceType?.trim()) missing.push('serviceType')
  if (!message?.trim()) missing.push('message')

  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(', ')}.` },
      { status: 400 }
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 })
  }

  if (message.trim().length < 10) {
    return NextResponse.json({ error: 'Message is too short.' }, { status: 400 })
  }

  // Write lead to Supabase (service role — bypasses RLS)
  const supabase = createServiceClient()
  const { error: dbError } = await supabase.from('leads').insert({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    property_address: address?.trim() || null,
    notes: `Service requested: ${serviceType}\n\n${message.trim()}`,
    source: 'website_contact',
    status: 'new',
  })

  if (dbError) {
    console.error('[contact] Supabase insert error:', dbError)
    return NextResponse.json(
      { error: 'Failed to submit your message. Please call us directly at 423-762-7728.' },
      { status: 500 }
    )
  }

  // Twilio SMS notification to Chase (non-blocking — don't fail submission if this errors)
  const smsBody = [
    '📬 New lead from tnvex.com/contact/',
    `Name: ${name.trim()}`,
    `Phone: ${phone.trim()}`,
    `Email: ${email.trim()}`,
    `Service: ${serviceType}`,
    address?.trim() ? `Address: ${address.trim()}` : null,
    `Message: ${message.trim().slice(0, 200)}${message.trim().length > 200 ? '…' : ''}`,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    await sendTwilioSMS(smsBody)
  } catch (smsErr) {
    console.error('[contact] Twilio SMS error:', smsErr)
  }

  // Gmail confirmation to visitor (non-blocking)
  try {
    await sendGmailConfirmation(email.trim(), name.trim(), serviceType)
  } catch (emailErr) {
    console.error('[contact] Gmail send error:', emailErr)
  }

  return NextResponse.json({ success: true })
}
