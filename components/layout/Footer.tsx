import Link from 'next/link'
import { Phone, Mail, Star } from 'lucide-react'
import { COMPANY, SERVICES } from '@/lib/constants'

const TOP_CITIES = [
  { name: 'Chattanooga, TN', href: '/service-areas/tennessee/chattanooga/' },
  { name: 'Signal Mountain, TN', href: '/service-areas/tennessee/signal-mountain/' },
  { name: 'Hixson, TN', href: '/service-areas/tennessee/hixson/' },
  { name: 'Ooltewah, TN', href: '/service-areas/tennessee/ooltewah/' },
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
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Company info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <TVEFooterLogo />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Veteran-owned roofing and exterior contracting serving Chattanooga, TN and North
              Georgia. Quality craftsmanship, transparent communication, no surprises.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={COMPANY.phoneTel}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm group"
                aria-label={`Call us at ${COMPANY.phone}`}
              >
                <Phone
                  size={16}
                  className="text-[#2563EB] group-hover:text-white transition-colors"
                  aria-hidden="true"
                />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm group"
              >
                <Mail
                  size={16}
                  className="text-[#2563EB] group-hover:text-white transition-colors"
                  aria-hidden="true"
                />
                {COMPANY.email}
              </a>
            </div>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a
                href={COMPANY.social.facebook}
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                aria-label="Facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* Facebook */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              </a>
              <a
                href={COMPANY.social.instagram}
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                aria-label="Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* Instagram */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={COMPANY.social.google}
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                aria-label="Google Reviews"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Star size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {TOP_CITIES.map((city) => (
                <li key={city.href}>
                  <Link
                    href={city.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas/"
                  className="text-[#2563EB] text-sm hover:text-white transition-colors font-medium"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2 mb-8" role="list">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Hours */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                Hours
              </h4>
              <address className="not-italic flex flex-col gap-1">
                <p className="text-white/70 text-sm">{COMPANY.hours.weekdays}</p>
                <p className="text-white/70 text-sm">{COMPANY.hours.saturday}</p>
                <p className="text-white/70 text-sm">{COMPANY.hours.sunday}</p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <p>
            © {year} {COMPANY.name}. All rights reserved. Chattanooga, TN.
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

function TVEFooterLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 3L2 10H4.5V17H15.5V10H18L10 3Z" fill="white" />
          <path d="M8 17V13H12V17H8Z" fill="#0A1628" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-white font-bold text-sm tracking-wide uppercase">
          Tennessee Valley
        </span>
        <span className="text-[#2563EB] font-bold text-sm tracking-wider uppercase">
          Exteriors
        </span>
      </div>
    </div>
  )
}
