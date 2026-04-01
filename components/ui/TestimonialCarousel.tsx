'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  city: string
  rating: number
  text: string
  service?: string
  initials?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlayInterval?: number
}

export function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 6000,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (paused) return
    const interval = setInterval(next, autoPlayInterval)
    return () => clearInterval(interval)
  }, [paused, next, autoPlayInterval])

  const t = testimonials[current]

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Quote icon */}
      <div className="flex justify-center mb-8">
        <div className="w-14 h-14 rounded-full bg-[#2563EB]/20 flex items-center justify-center">
          <Quote size={28} className="text-[#2563EB]" aria-hidden="true" />
        </div>
      </div>

      {/* Stars */}
      <div className="flex justify-center gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={22}
            fill={i < t.rating ? '#F59E0B' : 'transparent'}
            stroke={i < t.rating ? '#F59E0B' : '#475569'}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote text with transition */}
      <div className="min-h-[120px] flex items-center justify-center px-4">
        <blockquote
          key={current}
          className="tve-fade-in text-white text-xl md:text-2xl font-medium text-center leading-relaxed"
        >
          &ldquo;{t.text}&rdquo;
        </blockquote>
      </div>

      {/* Attribution */}
      <div className="flex flex-col items-center mt-8 gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {t.initials ?? t.name.charAt(0)}
        </div>
        <div className="text-center">
          <p className="text-white font-semibold text-lg">{t.name}</p>
          <p className="text-white/60 text-sm">{t.city}</p>
          {t.service && (
            <span className="mt-2 inline-block px-3 py-1 rounded-full bg-[#2563EB]/25 text-[#93c5fd] text-xs font-semibold">
              {t.service}
            </span>
          )}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={() => { setPaused(true); prev() }}
          className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        {/* Progress dots */}
        <div className="flex gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              onClick={() => { setPaused(true); setCurrent(i) }}
              className={[
                'rounded-full transition-all duration-300',
                i === current
                  ? 'bg-[#2563EB] w-7 h-2.5'
                  : 'bg-white/30 w-2.5 h-2.5 hover:bg-white/60',
              ].join(' ')}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => { setPaused(true); next() }}
          className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

    </div>
  )
}
