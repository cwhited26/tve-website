import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react'
import { generatePageMetadata, buildLocalBusinessSchema } from '@/lib/seo'
import { COMPANY } from '@/lib/constants'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us | Roofing Contractor Chattanooga TN',
  description:
    'Contact Tennessee Valley Exteriors for a free roofing estimate in Chattanooga, TN and North Georgia. Call 423-762-7728 or fill out our form — we respond same day.',
  path: '/contact/',
  keywords: [
    'contact roofing contractor Chattanooga',
    'roofing estimate Chattanooga TN',
    'Tennessee Valley Exteriors contact',
    'roof repair contact form',
  ],
})

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Contact Us' },
]

const contactSchema = {
  ...buildLocalBusinessSchema(),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY.phone,
    contactType: 'customer service',
    areaServed: ['Chattanooga, TN', 'North Georgia'],
    availableLanguage: 'English',
    hoursAvailable: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00',
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={contactSchema} />

      {/* Interior Hero */}
      <div className="bg-[#0A1628] py-12 md:py-16">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h1>
          <p className="mt-3 text-white/70 text-lg max-w-2xl">
            Ready to get started? We respond to every inquiry within one business day — usually
            the same day. No pressure, no pushy sales calls.
          </p>
        </Container>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#E2E8F0]">
        <Container>
          <div className="py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Contact Form — 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm">
                <h2 className="text-xl font-bold text-[#0A1628] mb-2">Send Us a Message</h2>
                <p className="text-[#64748B] text-sm mb-6">
                  Fill out the form below and Chase will personally follow up with you. Or, skip
                  the form and{' '}
                  <a href={COMPANY.phoneTel} className="text-[#2563EB] hover:underline font-medium">
                    call us directly
                  </a>
                  .
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar — 1/3 width */}
            <aside className="space-y-6">
              {/* Call Us */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="text-base font-bold text-[#0A1628] mb-4">Call or Text</h3>
                <a
                  href={COMPANY.phoneTel}
                  className="flex items-center gap-3 text-[#2563EB] font-semibold text-lg hover:text-[#1d4ed8] transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center group-hover:bg-[#DBEAFE] transition-colors">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  {COMPANY.phone}
                </a>
                <p className="mt-2 text-[#64748B] text-sm pl-[52px]">
                  Click to call or text on mobile
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="text-base font-bold text-[#0A1628] mb-4">Email</h3>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-[#2563EB] font-medium hover:text-[#1d4ed8] transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center group-hover:bg-[#DBEAFE] transition-colors shrink-0">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  {COMPANY.email}
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="text-base font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                  <Clock size={16} className="text-[#2563EB]" aria-hidden="true" />
                  Business Hours
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[#64748B]">Monday – Friday</dt>
                    <dd className="text-[#334155] font-medium">7am – 6pm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#64748B]">Saturday</dt>
                    <dd className="text-[#334155] font-medium">8am – 4pm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#64748B]">Sunday</dt>
                    <dd className="text-[#64748B]">Closed</dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs text-[#64748B] border-t border-[#E2E8F0] pt-3">
                  Emergency storm damage? Call anytime — we pick up.
                </p>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="text-base font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                  <MapPin size={16} className="text-[#2563EB]" aria-hidden="true" />
                  Service Area
                </h3>
                <p className="text-sm text-[#64748B] mb-3">
                  We serve the greater Chattanooga area including:
                </p>
                <ul className="space-y-1.5 text-sm">
                  {[
                    { label: 'Chattanooga, TN', href: '/service-areas/tennessee/chattanooga/' },
                    { label: 'Signal Mountain, TN', href: '/service-areas/tennessee/signal-mountain/' },
                    { label: 'Hixson, TN', href: '/service-areas/tennessee/hixson/' },
                    { label: 'Dalton, GA', href: '/service-areas/georgia/dalton/' },
                    { label: 'Ringgold, GA', href: '/service-areas/georgia/ringgold/' },
                  ].map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-[#2563EB] hover:underline"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/service-areas/"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-[#2563EB] font-medium hover:underline"
                >
                  View all service areas
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>

              {/* Quick Estimate CTA */}
              <div className="bg-[#0A1628] rounded-2xl p-6 text-center">
                <p className="text-white font-bold text-base mb-2">Need a Quick Estimate?</p>
                <p className="text-white/60 text-sm mb-4">
                  Use our instant estimate tool to get a ballpark in minutes.
                </p>
                <Link
                  href="/quote/"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-[#2563EB] text-white font-semibold text-sm min-h-[44px] hover:bg-[#1d4ed8] transition-colors"
                >
                  Get Instant Estimate
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section background="white" id="map">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0A1628]">Our Service Area</h2>
            <p className="mt-2 text-[#64748B]">
              We serve the greater Chattanooga, TN metro area and North Georgia.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209748.9!2d-85.3097!3d35.0456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88605e50a1b94943%3A0xe0f7e44e0e03d2df!2sChattanooga%2C%20TN!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tennessee Valley Exteriors service area — Chattanooga, TN and North Georgia"
            />
          </div>

          <p className="mt-4 text-center text-sm text-[#64748B]">
            Serving Chattanooga and surrounding communities across East Tennessee and North Georgia.{' '}
            <Link href="/service-areas/" className="text-[#2563EB] hover:underline">
              See all service areas →
            </Link>
          </p>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section background="navy">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prefer to Talk? Call Us Direct.
            </h2>
            <p className="text-white/70 text-lg mb-8">
              No hold times. No call center. Chase or a member of our team picks up — every time.
            </p>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#2563EB] text-white font-bold text-xl min-h-[56px] hover:bg-[#1d4ed8] transition-colors"
            >
              <Phone size={22} aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
