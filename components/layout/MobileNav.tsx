'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X, Phone, ChevronRight, Shield, Star } from 'lucide-react'
import { COMPANY, NAV_LINKS, SERVICES } from '@/lib/constants'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

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
          'fixed inset-0 z-40 bg-[#0A1628]/70 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <nav
        id="mobile-nav"
        className={[
          'fixed top-0 right-0 z-50 h-full w-[320px] max-w-[92vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-[#F8F9FA]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#0A1628] rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2.5L1.5 10H4V17.5H16V10H18.5L10 2.5Z" fill="#2563EB" />
                <path d="M8 17.5V13.5H12V17.5H8Z" fill="white" />
              </svg>
            </div>
            <div className="leading-none">
              <p className="text-[#0A1628] font-black text-[11px] tracking-wide uppercase">Tennessee Valley</p>
              <p className="text-[#2563EB] font-black text-[11px] tracking-wider uppercase">Exteriors</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-[#E2E8F0] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <X size={22} className="text-[#475569]" aria-hidden="true" />
          </button>
        </div>

        {/* Trust badges */}
        <div className="px-5 py-3 border-b border-[#E2E8F0] flex items-center gap-4 bg-white">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill="#F59E0B" stroke="#F59E0B" aria-hidden="true" />
            ))}
          </div>
          <span className="text-[#475569] text-xs font-semibold">4.9 Google · Veteran-Owned</span>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto">
          <ul className="py-2" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-6 py-3.5 text-[#334155] font-semibold text-[15px] hover:bg-[#F8F9FA] hover:text-[#2563EB] transition-colors min-h-[52px]"
                  onClick={onClose}
                >
                  {link.label}
                  <ChevronRight size={16} className="text-[#94A3B8]" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Services quick links */}
          <div className="px-6 py-4 border-t border-[#E2E8F0]">
            <p className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-widest mb-3">
              Quick Service Links
            </p>
            <div className="grid grid-cols-2 gap-2">
              {SERVICES.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="px-3 py-2 rounded-lg bg-[#F8F9FA] border border-[#E2E8F0] text-[#475569] text-xs font-semibold hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-all"
                  onClick={onClose}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="border-t border-[#E2E8F0] p-5 flex flex-col gap-3 bg-[#F8F9FA]">
          <a
            href={COMPANY.phoneTel}
            className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-white border-2 border-[#2563EB] text-[#2563EB] font-bold hover:bg-[#2563EB] hover:text-white transition-all min-h-[52px]"
          >
            <Phone size={18} aria-hidden="true" />
            {COMPANY.phone}
          </a>
          <Link
            href="/quote/"
            className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#2563EB] text-white font-bold hover:bg-[#1d4ed8] transition-colors min-h-[52px] shadow-md shadow-[#2563EB]/20"
            onClick={onClose}
          >
            Get Free Estimate
          </Link>

          {/* Veteran badge */}
          <div className="flex items-center justify-center gap-2 pt-1">
            <Shield size={13} className="text-[#C0392B]" aria-hidden="true" />
            <span className="text-[#64748B] text-xs font-semibold">Veteran-Owned &amp; Operated</span>
          </div>
        </div>
      </nav>
    </>
  )
}
