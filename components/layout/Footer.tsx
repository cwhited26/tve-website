import Link from 'next/link'
import { Phone, Mail, Star, Shield, MapPin, Clock, ArrowRight } from 'lucide-react'
import { COMPANY, SERVICES } from '@/lib/constants'

const TOP_CITIES = [
  { name: 'Chattanooga, TN', href: '/service-areas/tennessee/chattanooga/' },
  { name: 'Signal Mountain, TN', href: '/service-areas/tennessee/signal-mountain/' },
  { name: 'Hixson, TN', href: '/service-areas/tennessee/hixson/' },
  { name: 'Ooltewah, TN', href: '/service-areas/tennessee/ooltewah/' },
  { name: 'Lookout Mountain, TN', href: '/service-areas/tennessee/lookout-mountain/' },
  { name: 'Cleveland, TN', href: '/service-areas/tennessee/cleveland/' },
  { name: 'Dalton, GA', href: '/service-areas/georgia/dalton/' },
  { name: 'Ringgold, GA', href: '/service-areas/georgia/ringgold/' },
]

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Get Free Estimate', href: '/quote/' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0A1628] text-white" aria-label="Site footer">

      {/* Pre-footer CTA bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-white font-black text-xl md:text-2xl">
                Ready to get started? Let&apos;s talk.
              </p>
              <p className="text-white/60 text-sm mt-1">
                Free inspection. Same-week scheduling. No obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/quote/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] text-white font-bold hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
              >
                Get Free Estimate <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href={COMPANY.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/25 text-white font-bold hover:bg-white/10 transition-colors min-h-[44px]"
              >
                <Phone size={16} aria-hidden="true" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Company info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2.5L1.5 10H4V17.5H16V10H18.5L10 2.5Z" fill="white" />
                  <path d="M8 17.5V13.5H12V17.5H8Z" fill="#0A1628" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-[13px] tracking-wide uppercase">Tennessee Valley</span>
                <span className="text-[#2563EB] font-black text-[13px] tracking-wider uppercase">Exteriors</span>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Veteran-owned roofing and exterior contracting serving Chattanooga, TN and North
              Georgia. Quality craftsmanship, transparent communication, no surprises.
            </p>

            {/* Veteran badge */}
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-5">
              <Shield size={18} className="text-[#C0392B] flex-shrink-0" aria-hidden="true" />
              <div className="leading-tight">
                <p className="text-white font-bold text-xs">Veteran-Owned &amp; Operated</p>
                <p className="text-white/50 text-[11px]">US Military Service</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <a
                href={COMPANY.phoneTel}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm group"
                aria-label={`Call us at ${COMPANY.phone}`}
              >
                <Phone size={14} className="text-[#2563EB] group-hover:text-white transition-colors" aria-hidden="true" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <Mail size={14} className="text-[#2563EB] group-hover:text-white transition-colors" aria-hidden="true" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="text-[#2563EB] flex-shrink-0 mt-0.5" aria-hidden="true" />
                Chattanooga, TN &amp; North Georgia
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a
                href={COMPANY.social.facebook}
                className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center hover:bg-[#2563EB] transition-colors border border-white/10"
                aria-label="Facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={COMPANY.social.instagram}
                className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center hover:bg-[#2563EB] transition-colors border border-white/10"
                aria-label="Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={COMPANY.social.google}
                className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center hover:bg-[#2563EB] transition-colors border border-white/10"
                aria-label="Google Reviews"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Star size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#2563EB] rounded-full" aria-hidden="true" />
              Services
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-white/60 text-sm hover:text-white hover:pl-1 transition-all duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#2563EB] rounded-full" aria-hidden="true" />
              Service Areas
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {TOP_CITIES.map((city) => (
                <li key={city.href}>
                  <Link
                    href={city.href}
                    className="text-white/60 text-sm hover:text-white hover:pl-1 transition-all duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas/"
                  className="text-[#2563EB] text-sm hover:text-white transition-colors font-semibold flex items-center gap-1 mt-1"
                >
                  View All Areas <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company + Hours */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#2563EB] rounded-full" aria-hidden="true" />
              Company
            </h3>
            <ul className="flex flex-col gap-2 mb-8" role="list">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white hover:pl-1 transition-all duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hours */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <Clock size={12} className="text-[#2563EB]" aria-hidden="true" />
                Business Hours
              </h4>
              <address className="not-italic flex flex-col gap-1.5">
                <p className="text-white/60 text-xs">{COMPANY.hours.weekdays}</p>
                <p className="text-white/60 text-xs">{COMPANY.hours.saturday}</p>
                <p className="text-white/60 text-xs">{COMPANY.hours.sunday}</p>
              </address>
            </div>

            {/* Cert badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                { label: 'GAF', bg: 'bg-[#E87722]' },
                { label: 'OC', bg: 'bg-[#C0392B]' },
                { label: 'IKO', bg: 'bg-[#1a3554]' },
                { label: 'BBB A+', bg: 'bg-[#003A79]' },
              ].map(({ label, bg }) => (
                <span
                  key={label}
                  className={`${bg} text-white text-[10px] font-black px-2.5 py-1 rounded-lg`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>
            &copy; {year} {COMPANY.name}. All rights reserved. Chattanooga, TN.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
