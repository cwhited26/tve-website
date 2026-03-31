'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Phone } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '@/lib/constants'
import { MobileNav } from './MobileNav'

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={[
          'sticky top-0 z-30 w-full transition-all duration-200',
          'bg-white border-b border-[#E2E8F0]',
          scrolled ? 'shadow-sm' : '',
        ].join(' ')}
        style={{ height: '72px' }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
            aria-label="Tennessee Valley Exteriors — Home"
          >
            <TVELogo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[15px] font-medium text-[#334155] rounded-md hover:text-[#2563EB] hover:bg-[#F8F9FA] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={COMPANY.phoneTel}
              className="flex items-center gap-2 text-[#334155] font-medium text-sm hover:text-[#2563EB] transition-colors"
              aria-label={`Call us at ${COMPANY.phone}`}
            >
              <Phone size={16} className="text-[#2563EB]" aria-hidden="true" />
              {COMPANY.phone}
            </a>
            <Link
              href="/quote/"
              className="flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1d4ed8] transition-colors min-h-[44px] whitespace-nowrap"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile CTAs */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={COMPANY.phoneTel}
              className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-[#F8F9FA] transition-colors text-[#2563EB]"
              aria-label={`Call ${COMPANY.phone}`}
            >
              <Phone size={20} aria-hidden="true" />
            </a>
            <button
              onClick={() => setMobileNavOpen(true)}
              className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-[#F8F9FA] transition-colors text-[#334155]"
              aria-label="Open menu"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  )
}

function TVELogo() {
  return (
    <div className="flex items-center gap-2">
      {/* Icon mark */}
      <div className="w-9 h-9 bg-[#0A1628] rounded-lg flex items-center justify-center flex-shrink-0">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {/* Roof peak shape */}
          <path d="M10 3L2 10H4.5V17H15.5V10H18L10 3Z" fill="#2563EB" />
          <path d="M8 17V13H12V17H8Z" fill="white" />
        </svg>
      </div>
      {/* Wordmark */}
      <div className="hidden sm:flex flex-col leading-none">
        <span className="text-[#0A1628] font-bold text-sm tracking-wide uppercase">
          Tennessee Valley
        </span>
        <span className="text-[#2563EB] font-bold text-sm tracking-wider uppercase">
          Exteriors
        </span>
      </div>
    </div>
  )
}
