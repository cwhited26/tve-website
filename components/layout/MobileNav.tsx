'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X, Phone, ChevronRight } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '@/lib/constants'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={[
          'fixed inset-0 z-40 bg-black/50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <nav
        className={[
          'fixed top-0 right-0 z-50 h-full w-80 max-w-[90vw] bg-white shadow-2xl flex flex-col transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0]">
          <span className="font-bold text-[#0A1628] text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#F8F9FA] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <X size={24} className="text-[#334155]" aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex-1 overflow-y-auto py-4" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center justify-between px-6 py-4 text-[#334155] font-medium hover:bg-[#F8F9FA] hover:text-[#2563EB] transition-colors min-h-[44px]"
                onClick={onClose}
              >
                {link.label}
                <ChevronRight size={18} className="text-[#64748B]" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom CTAs */}
        <div className="border-t border-[#E2E8F0] p-6 flex flex-col gap-3">
          <a
            href={COMPANY.phoneTel}
            className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg border border-[#2563EB] text-[#2563EB] font-semibold hover:bg-[#2563EB] hover:text-white transition-colors min-h-[44px]"
          >
            <Phone size={18} aria-hidden="true" />
            {COMPANY.phone}
          </a>
          <Link
            href="/quote/"
            className="flex items-center justify-center w-full py-3 px-6 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
            onClick={onClose}
          >
            Get Free Estimate
          </Link>
        </div>
      </nav>
    </>
  )
}
