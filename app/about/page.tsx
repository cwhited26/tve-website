import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Star, MessageSquare, Award, CheckCircle, ArrowRight } from 'lucide-react'
import { generatePageMetadata, buildOrganizationSchema } from '@/lib/seo'
import { COMPANY } from '@/lib/constants'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Tennessee Valley Exteriors | Roofing Company Chattanooga',
  description:
    'Tennessee Valley Exteriors is a veteran-owned roofing company in Chattanooga, TN. Learn our story, mission, and why homeowners across East TN and North GA trust us.',
  path: '/about/',
  keywords: [
    'Tennessee Valley Exteriors',
    'roofing company Chattanooga',
    'veteran owned roofing contractor',
    'about TVE',
  ],
})

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'About Tennessee Valley Exteriors' },
]

const values = [
  {
    icon: MessageSquare,
    title: 'Radical Transparency',
    description:
      "You'll know what we're doing, why we're doing it, and what it costs before we start. No surprises, no pressure \u2014 just straight talk from people who respect your time and money.",
  },
  {
    icon: Star,
    title: 'Craftsmanship Over Volume',
    description:
      "We'd rather do fewer jobs done right than chase volume and cut corners. Every project gets the same attention to detail whether it's a minor repair or a full roof replacement.",
  },
  {
    icon: Shield,
    title: 'Veteran Standard',
    description:
      'Military service instilled in us a commitment to doing the job right the first time. That standard carries into everything we build \u2014 from the ridge cap to the final clean-up.',
  },
]

const certifications = [
  'Owens Corning Preferred Contractor (pending)',
  'GAF Certified Installer (pending)',
  'Better Business Bureau Member',
  'Licensed & Insured — State of Tennessee',
  'Licensed & Insured — State of Georgia',
]

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={buildOrganizationSchema()} />

      {/* Interior Hero */}
      <div className="bg-[#0A1628] py-12 md:py-16">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            About Tennessee Valley Exteriors
          </h1>
          <p className="mt-3 text-white/70 text-lg max-w-2xl">
            Veteran-owned. Chattanooga-based. Built on the belief that homeowners deserve better.
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

      {/* The Story */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Content — 3/5 width */}
            <div className="lg:col-span-3">
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wide mb-3">
                Our Story
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-6">
                We Started TVE Because Homeowners Deserved Better
              </h2>

              <div className="space-y-5 text-[#334155] leading-relaxed text-base md:text-lg">
                <p>
                  Tennessee Valley Exteriors was founded in 2024 by Chase Whited, a Chattanooga
                  native and veteran who spent years watching friends, neighbors, and family members
                  get let down by contractors. The problems were always the same: poor communication,
                  workmanship that didn't hold up, and sales tactics that felt more like pressure than
                  help.
                </p>
                <p>
                  Chase launched TVE with one goal — raise the standard. Not just for roofing, but
                  for what homeowners should expect from any contractor they invite onto their
                  property. That means showing up when we say we will, communicating clearly at every
                  step, and standing behind every job we complete.
                </p>
                <p>
                  Since day one, TVE has served the{' '}
                  <Link
                    href="/service-areas/tennessee/chattanooga/"
                    className="text-[#2563EB] hover:underline font-medium"
                  >
                    Chattanooga, TN
                  </Link>{' '}
                  area and{' '}
                  <Link
                    href="/service-areas/georgia/dalton/"
                    className="text-[#2563EB] hover:underline font-medium"
                  >
                    North Georgia
                  </Link>
                  , handling everything from emergency roof repairs to full exterior renovations. We
                  don't subcontract your job out to the lowest bidder — your project is handled
                  personally by our trained crew from the first nail to the final walk-through.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/services/" variant="primary" size="md">
                  View Our Services
                </Button>
                <Button href="/contact/" variant="secondary" size="md">
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Photo / Visual — 2/5 width */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden bg-[#F8F9FA] border border-[#E2E8F0] aspect-[4/5] flex flex-col items-center justify-center p-8 text-center">
                {/* Placeholder until real team photo is available */}
                <div className="w-20 h-20 bg-[#0A1628] rounded-2xl flex items-center justify-center mb-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M10 3L2 10H4.5V17H15.5V10H18L10 3Z" fill="#2563EB" />
                    <path d="M8 17V13H12V17H8Z" fill="white" />
                  </svg>
                </div>
                <p className="text-[#64748B] font-semibold text-sm">Chase Whited</p>
                <p className="text-[#64748B] text-sm mt-1">Founder, Tennessee Valley Exteriors</p>
                <p className="text-[#64748B] text-xs mt-3 max-w-[200px]">
                  Team photo coming soon
                </p>
              </div>

              {/* Quick facts */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { stat: '2024', label: 'Founded' },
                  { stat: '100+', label: 'Projects Completed' },
                  { stat: '5★', label: 'Average Rating' },
                  { stat: '2 States', label: 'Area Served' },
                ].map(({ stat, label }) => (
                  <div
                    key={label}
                    className="bg-[#F8F9FA] rounded-xl p-4 text-center border border-[#E2E8F0]"
                  >
                    <div className="text-xl font-bold text-[#0A1628]">{stat}</div>
                    <div className="text-xs text-[#64748B] mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Values */}
      <Section background="light">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wide mb-3">
              What Drives Us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-[#64748B] text-lg">
              We exist to be the roofing and exterior contractor in Chattanooga that homeowners
              can actually trust — before, during, and after the job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-[#E2E8F0] hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#0A1628] rounded-xl flex items-center justify-center mb-5">
                  <Icon size={24} className="text-[#2563EB]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1628] mb-3">{title}</h3>
                <p className="text-[#64748B] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why TVE */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wide mb-3">
                Why Choose TVE
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-6">
                Local, Accountable, and Here to Stay
              </h2>
              <p className="text-[#334155] leading-relaxed mb-6 text-base md:text-lg">
                A lot of contractors blow in after a storm and blow out just as fast. TVE is
                headquartered in Chattanooga, and this is our community. We live here, we're
                invested here, and we'll still be here when you need us years from now.
              </p>
              <p className="text-[#334155] leading-relaxed text-base md:text-lg">
                Every project comes with clear communication from estimate to completion, a detailed
                written report, and a final walk-through so you can see exactly what was done and
                why. We use quality materials from manufacturers we trust, and we stand behind our
                work with real warranties.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'Veteran-owned and locally operated in Chattanooga, TN',
                'Serving East Tennessee and North Georgia since 2024',
                'No subcontracting — your crew is our crew',
                'Transparent pricing with written estimates',
                'Full cleanup included on every project',
                'Licensed and insured in TN and GA',
                'Direct line to Chase — no call centers',
                'Insurance claim assistance at no extra charge',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-[#16A34A] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[#334155]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Certifications & Affiliations */}
      <Section background="light" id="certifications">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wide mb-3">
              Credentials
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]">
              Certifications & Affiliations
            </h2>
            <p className="mt-4 text-[#64748B]">
              We hold ourselves to industry-recognized standards. Certifications are updated as
              they are earned.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-[#E2E8F0]"
              >
                <Award
                  size={20}
                  className="text-[#2563EB] shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[#334155] text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Get a free estimate from a contractor who actually shows up, communicates clearly,
              and does the job right. No pressure — just honest answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote/" variant="primary" size="lg">
                Get Your Free Estimate
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button href={COMPANY.phoneTel} variant="ghost" size="lg">
                Call {COMPANY.phone}
              </Button>
            </div>
            <p className="mt-6 text-white/50 text-sm">
              Or{' '}
              <Link href="/contact/" className="text-white/70 hover:text-white underline">
                send us a message
              </Link>{' '}
              and we'll get back to you within one business day.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
