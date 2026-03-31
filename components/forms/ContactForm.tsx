'use client'

import { useState, useId } from 'react'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

interface FormState {
  name: string
  email: string
  phone: string
  address: string
  serviceType: string
  message: string
  // Honeypot — must remain empty
  hp_field: string
}

interface FieldErrors {
  name?: string
  email?: string
  phone?: string
  serviceType?: string
  message?: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  serviceType: '',
  message: '',
  hp_field: '',
}

function validateForm(form: FormState): FieldErrors {
  const errors: FieldErrors = {}

  if (!form.name.trim()) {
    errors.name = 'Your name is required.'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  const phoneDigits = form.phone.replace(/\D/g, '')
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (phoneDigits.length < 10) {
    errors.phone = 'Please enter a valid 10-digit phone number.'
  }

  if (!form.serviceType) {
    errors.serviceType = 'Please select a service type.'
  }

  if (!form.message.trim()) {
    errors.message = 'Please tell us a bit about your project.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

export function ContactForm() {
  const id = useId()
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState<string>('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const fieldErrors = validateForm(form)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      // Focus the first error field
      const firstErrorKey = Object.keys(fieldErrors)[0]
      const el = document.getElementById(`${id}-${firstErrorKey}`)
      el?.focus()
      return
    }

    setStatus('loading')
    setServerError('')

    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setServerError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please call us at 423-762-7728.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-[#F8F9FA] rounded-2xl border border-[#E2E8F0]">
        <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center mb-5">
          <CheckCircle size={32} className="text-white" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-[#0A1628] mb-2">Message Sent!</h3>
        <p className="text-[#64748B] max-w-sm">
          Thanks for reaching out. Chase will personally follow up with you within one business
          day — usually same day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-[#2563EB] text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      {/* Honeypot — hidden from real users, bots fill it */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${id}-hp_field`}>Leave this field blank</label>
        <input
          id={`${id}-hp_field`}
          name="hp_field"
          type="text"
          value={form.hp_field}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor={`${id}-name`}
            className="block text-sm font-semibold text-[#334155] mb-1.5"
          >
            Full Name <span className="text-[#DC2626]" aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            aria-invalid={!!errors.name}
            className={[
              'w-full h-[44px] px-4 rounded-lg border text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-colors',
              errors.name ? 'border-[#DC2626] bg-red-50' : 'border-[#E2E8F0] bg-white',
            ].join(' ')}
          />
          {errors.name && (
            <p id={`${id}-name-error`} className="mt-1.5 text-sm text-[#DC2626] flex items-center gap-1">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor={`${id}-email`}
            className="block text-sm font-semibold text-[#334155] mb-1.5"
          >
            Email Address <span className="text-[#DC2626]" aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
            aria-invalid={!!errors.email}
            className={[
              'w-full h-[44px] px-4 rounded-lg border text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-colors',
              errors.email ? 'border-[#DC2626] bg-red-50' : 'border-[#E2E8F0] bg-white',
            ].join(' ')}
          />
          {errors.email && (
            <p id={`${id}-email-error`} className="mt-1.5 text-sm text-[#DC2626] flex items-center gap-1">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor={`${id}-phone`}
            className="block text-sm font-semibold text-[#334155] mb-1.5"
          >
            Phone Number <span className="text-[#DC2626]" aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(423) 555-0100"
            autoComplete="tel"
            aria-required="true"
            aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
            aria-invalid={!!errors.phone}
            className={[
              'w-full h-[44px] px-4 rounded-lg border text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-colors',
              errors.phone ? 'border-[#DC2626] bg-red-50' : 'border-[#E2E8F0] bg-white',
            ].join(' ')}
          />
          {errors.phone && (
            <p id={`${id}-phone-error`} className="mt-1.5 text-sm text-[#DC2626] flex items-center gap-1">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Property Address */}
        <div className="sm:col-span-2">
          <label
            htmlFor={`${id}-address`}
            className="block text-sm font-semibold text-[#334155] mb-1.5"
          >
            Property Address <span className="text-[#64748B] font-normal text-xs">(optional)</span>
          </label>
          <input
            id={`${id}-address`}
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            placeholder="123 Main St, Chattanooga, TN 37402"
            autoComplete="street-address"
            className="w-full h-[44px] px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-colors"
          />
        </div>

        {/* Service Type */}
        <div className="sm:col-span-2">
          <label
            htmlFor={`${id}-serviceType`}
            className="block text-sm font-semibold text-[#334155] mb-1.5"
          >
            Service Needed <span className="text-[#DC2626]" aria-hidden="true">*</span>
          </label>
          <select
            id={`${id}-serviceType`}
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.serviceType ? `${id}-serviceType-error` : undefined}
            aria-invalid={!!errors.serviceType}
            className={[
              'w-full h-[44px] px-4 rounded-lg border text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-colors appearance-none bg-white',
              errors.serviceType ? 'border-[#DC2626] bg-red-50' : 'border-[#E2E8F0]',
              !form.serviceType ? 'text-[#94A3B8]' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <option value="" disabled>
              Select a service...
            </option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
            <option value="other">Other / Not Sure</option>
          </select>
          {errors.serviceType && (
            <p id={`${id}-serviceType-error`} className="mt-1.5 text-sm text-[#DC2626] flex items-center gap-1">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.serviceType}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor={`${id}-message`}
            className="block text-sm font-semibold text-[#334155] mb-1.5"
          >
            Message <span className="text-[#DC2626]" aria-hidden="true">*</span>
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project — what's happening, when you'd like to get started, any specific concerns..."
            rows={5}
            aria-required="true"
            aria-describedby={errors.message ? `${id}-message-error` : undefined}
            aria-invalid={!!errors.message}
            className={[
              'w-full px-4 py-3 rounded-lg border text-[#334155] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-colors resize-y min-h-[120px]',
              errors.message ? 'border-[#DC2626] bg-red-50' : 'border-[#E2E8F0] bg-white',
            ].join(' ')}
          />
          {errors.message && (
            <p id={`${id}-message-error`} className="mt-1.5 text-sm text-[#DC2626] flex items-center gap-1">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Server error */}
      {status === 'error' && serverError && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-[#DC2626]/20 text-[#DC2626]"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm">{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#2563EB] text-white font-semibold text-base min-h-[44px] hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="mt-3 text-xs text-[#64748B]">
        <span className="text-[#DC2626]">*</span> Required fields. We respect your privacy and
        will never share your information.
      </p>
    </form>
  )
}
