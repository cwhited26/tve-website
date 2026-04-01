import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Home,
  Wrench,
  Droplets,
  Layers,
  Square,
  Paintbrush,
  CloudLightning,
  Search,
  Phone,
  ArrowRight,
  CheckCircle,
  Shield,
  Star,
  Award,
  Zap,
  Clock,
} from 'lucide-react'
import { generatePageMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/seo'
import { COMPANY, SERVICES } from '@/lib/constants'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FadeIn } from '@/components/ui/FadeIn'
import type { BreadcrumbItem } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roofing & Exterior Services',
  description:
    'Tennessee Valley Exteriors offers roof replacement, roof repair, gutters, siding, decks, exterior painting, storm damage, and free roof inspections in Chattanooga TN and North Georgia.',
  path: '/services/',
  keywords: [
    'roofing services Chattanooga',
    'exterior contractor Chattanooga TN',
    'siding gutters roof replacement',
  ],
})

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>> = {
  Home,
  Wrench,
  Droplets,
  Layers,
  Square,
  Paintbrush,
  CloudLightning,
  Search,
}

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Free Inspection',
    desc: 'We perform a thorough 25-point inspection and document every finding with photos.',
  },
  {
    step: '02',
    title: 'Written Estimate',
    desc: 'You receive a detailed, itemized estimate before any work begins. No surprises.',
  },
  {
    step: '03',
    title: 'Scheduled Work',
    desc: 'Most projects are on the calendar within a week. We confirm the day before.',
  },
  {
    step: '04',
    title: 'Clean Completion',
    desc: 'Full cleanup at the end of every day and a final walkthrough when we\'re done.',
  },
]

export default function ServicesPage() {
  const schemas = [
    buildLocalBusinessSchema(),
    buildBreadcrumbSchema(BREADCRUMBS),
  ]

  return (
    <>
      <JsonLd schema={schemas} />
      <Breadcrumbs items={BREADCRUMBS} />

      {/* Hero */}
      <section className="relative bg-[#0A1628] py-20 px-6 overflow-hidden" aria-label="Services hero">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#2563EB]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#C0392B] text-white rounded-full px-5 py-2.5 mb-8 text-sm font-bold">
            <Shield size={14} aria-hidden="true" />
            Veteran-Owned &amp; Operated
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Roofing &amp; Exterior Services
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From a leaky roof to a full exterior renovation, Tennessee Valley Exteriors handles it.
            Backed by warranties that actually mean something.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2563EB] text-white font-bold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-[#2563EB]/30 min-h-[52px]"
            >
              Get Free Estimate <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 hover:border-white/50 transition-colors min-h-[52px]"
            >
              <Phone size={18} aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/10">
            {[
              { icon: Star, text: '4.9★ Google Rating' },
              { icon: CheckCircle, text: 'Free Inspection' },
              { icon: Award, text: '5-Year Warranty' },
              { icon: Clock, text: 'Same-Week Scheduling' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                <Icon size={14} className="text-[#2563EB]" aria-hidden="true" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-6 bg-[#F8F9FA]" aria-labelledby="services-grid-heading">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="text-center mb-14">
            <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 id="services-grid-heading" className="text-[#0A1628] font-black text-4xl md:text-5xl">
              Our Services
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon] ?? Home
              return (
                <FadeIn key={service.slug} delay={i * 60}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="group flex flex-col rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden hover:border-[#2563EB]/40 hover:shadow-xl transition-all duration-300 card-lift"
                  >
                    {/* Icon header */}
                    <div className="relative h-24 bg-[#0A1628] flex items-center justify-center overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                        style={{ background: 'radial-gradient(circle at center, #2563EB 0%, transparent 70%)' }}
                        aria-hidden="true"
                      />
                      <div className="relative z-10 w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2563EB]/40 transition-all duration-300">
                        <Icon size={26} className="text-white" aria-hidden />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-[#0A1628] font-black text-lg mb-2 group-hover:text-[#2563EB] transition-colors">
                        {service.name}
                      </h2>
                      <p className="text-[#64748B] text-sm leading-relaxed flex-1">
                        {service.shortDesc}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-[#2563EB] text-sm font-bold">
                        Learn more
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-24 px-6 bg-white" aria-labelledby="process-heading">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="text-center mb-14">
            <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 id="process-heading" className="text-[#0A1628] font-black text-4xl md:text-5xl mb-5">
              Our Simple 4-Step Process
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              No surprises, no confusion. Here&apos;s exactly what to expect when you work with TVE.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map(({ step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 100}>
                <div className="relative">
                  {/* Connector line */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-[calc(50%+32px)] right-0 h-0.5 bg-[#E2E8F0]"
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#0A1628] flex items-center justify-center mb-4 flex-shrink-0 shadow-lg">
                      <span className="text-[#2563EB] font-black text-lg">{step}</span>
                    </div>
                    <h3 className="text-[#0A1628] font-black text-base mb-2">{title}</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why TVE section */}
      <section className="py-20 px-6 bg-[#F8F9FA]" aria-labelledby="why-heading">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="text-center mb-12">
            <h2 id="why-heading" className="text-3xl md:text-4xl font-black text-[#0A1628] mb-4">
              Why Chattanooga Homeowners Choose TVE
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              We started TVE because we watched too many homeowners get burned by contractors who
              over-promised and under-delivered.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: 'Honest Assessments',
                body: 'We tell you what you actually need — not what generates the biggest invoice. Sometimes that means recommending a repair over a replacement.',
              },
              {
                icon: Zap,
                title: 'Real Communication',
                body: 'You hear from us proactively — before something becomes a problem. We answer calls, return texts, and show up when we say we will.',
              },
              {
                icon: Award,
                title: 'Warranty-Backed Work',
                body: 'Our 5-year workmanship warranty covers what we install. Combined with manufacturer material warranties, you have real protection.',
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0] hover:border-[#2563EB]/30 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#2563EB]" aria-hidden="true" />
                  </div>
                  <h3 className="font-black text-[#0A1628] text-lg mb-3">{title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bar */}
      <section className="bg-[#2563EB] py-16 px-6 relative overflow-hidden" aria-label="Get started CTA">
        <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white font-black text-2xl md:text-3xl">Ready to get started?</p>
            <p className="text-white/75 text-sm mt-1">Free estimate — no obligation, no pressure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#2563EB] font-black hover:bg-[#EFF6FF] transition-colors min-h-[52px] shadow-lg"
            >
              Get Free Estimate
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-colors min-h-[52px]"
            >
              <Phone size={18} aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
