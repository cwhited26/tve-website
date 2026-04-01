'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Phone, ChevronDown } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '@/lib/constants'
import { MobileNav } from './MobileNav'

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={[
          'sticky top-0 z-30 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)] border-b border-[#E2E8F0]'
            : 'bg-white border-b border-[#E2E8F0]/50',
        ].join(' ')}
        style={{ height: '72px' }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
            aria-label="Tennessee Valley Exteriors — Home"
          >
            <TVELogo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[14px] font-semibold text-[#475569] rounded-lg hover:text-[#0A1628] hover:bg-[#F8F9FA] transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={COMPANY.phoneTel}
              className="flex items-center gap-2 text-[#334155] font-semibold text-sm hover:text-[#2563EB] transition-colors px-3 py-2 rounded-lg hover:bg-[#F8F9FA]"
              aria-label={`Call us at ${COMPANY.phone}`}
            >
              <Phone size={15} className="text-[#2563EB]" aria-hidden="true" />
              {COMPANY.phone}
            </a>
            <Link
              href="/quote/"
              className="flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#2563EB] text-white font-bold text-sm hover:bg-[#1d4ed8] transition-all duration-200 shadow-sm shadow-[#2563EB]/20 min-h-[44px] whitespace-nowrap"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-1">
            <a
              href={COMPANY.phoneTel}
              className="flex items-center justify-center w-11 h-11 rounded-xl hover:bg-[#F8F9FA] transition-colors text-[#2563EB]"
              aria-label={`Call ${COMPANY.phone}`}
            >
              <Phone size={20} aria-hidden="true" />
            </a>
            <button
              onClick={() => setMobileNavOpen(true)}
              className="flex items-center justify-center w-11 h-11 rounded-xl hover:bg-[#F8F9FA] transition-colors text-[#334155]"
              aria-label="Open navigation menu"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
            >
              <Menu size={22} aria-hidden="true" />
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
    <div className="flex items-center gap-2.5">
      {/* Icon mark */}
      <div className="w-9 h-9 bg-[#0A1628] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 2.5L1.5 10H4V17.5H16V10H18.5L10 2.5Z" fill="#2563EB" />
          <path d="M8 17.5V13.5H12V17.5H8Z" fill="white" />
        </svg>
      </div>
      {/* Wordmark */}
      <div className="hidden sm:flex flex-col leading-none">
        <span className="text-[#0A1628] font-black text-[13px] tracking-wide uppercase">
          Tennessee Valley
        </span>
        <span className="text-[#2563EB] font-black text-[13px] tracking-wider uppercase">
          Exteriors
        </span>
      </div>
    </div>
  )
}
