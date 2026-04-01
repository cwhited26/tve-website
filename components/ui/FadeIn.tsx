'use client'

import { useRef, useEffect, type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
  threshold?: number
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.1,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const dirMap = {
      up: 'translateY(28px)',
      left: 'translateX(-28px)',
      right: 'translateX(28px)',
      none: 'none',
    }

    // Set initial state
    el.style.opacity = '0'
    el.style.transform = dirMap[direction]
    el.style.transition = `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = direction === 'none' ? 'none' : direction === 'up' ? 'translateY(0)' : 'translateX(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
