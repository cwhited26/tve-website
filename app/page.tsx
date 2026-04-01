import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Home,
  Wrench,
  Droplets,
  Layers,
  Square,
  Paintbrush,
  CloudLightning,
  Search,
  MapPin,
  Clock,
  Award,
  Zap,
  ThumbsUp,
  Calendar,
  MessageSquare,
  BadgeCheck,
} from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildAggregateRatingSchema,
} from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { HeroLeadForm } from '@/components/home/HeroLeadForm'
import { QuoteWidgetEmbed } from '@/components/QuoteWidgetEmbed'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { FadeIn } from '@/components/ui/FadeIn'
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roofing & Exterior Contractor Chattanooga TN',
  description:
    'Tennessee Valley Exteriors — veteran-owned roofing, siding, gutters, and exterior contracting in Chattanooga, TN and North Georgia. Free estimates. Call 423-762-7728.',
  path: '/',
  keywords: [
    'roofing contractor Chattanooga TN',
    'exterior contractor Chattanooga',
    'roof replacement Chattanooga',
    'roofing company near me',
  ],
})

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { end: 200, suffix: '+', label: 'Projects Completed', icon: Home },
  { end: 49, suffix: '', prefix: '', label: 'Google Rating', display: '4.9★', icon: Star },
  { end: 100, suffix: '%', label: 'Satisfaction Guarantee', icon: ThumbsUp },
  { end: 5, suffix: '-Year', label: 'Workmanship Warranty', icon: BadgeCheck },
]

const SERVICES = [
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    desc: 'Full tear-off and replacement with premium Owens Corning and IKO shingles. Lifetime material warranty.',
    icon: Home,
    color: 'from-blue-600 to-blue-800',
  },
  {
    slug: 'roof-repair',
    name: 'Roof Repair',
    desc: 'Emergency and routine repairs to stop leaks fast and extend the life of your existing roof.',
    icon: Wrench,
    color: 'from-slate-600 to-slate-800',
  },
  {
    slug: 'gutters',
    name: 'Gutters & Downspouts',
    desc: 'Seamless aluminum gutters, gutter guards, and downspout systems that protect your foundation.',
    icon: Droplets,
    color: 'from-cyan-600 to-cyan-800',
  },
  {
    slug: 'siding',
    name: 'Siding',
    desc: 'Hardie Board, LP SmartSide, CraneBoard vinyl — durable siding that looks great for decades.',
    icon: Layers,
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    slug: 'decks',
    name: 'Composite Decks',
    desc: 'Beautiful, low-maintenance composite deck construction built to handle Tennessee seasons.',
    icon: Square,
    color: 'from-amber-600 to-amber-800',
  },
  {
    slug: 'painting',
    name: 'Exterior Painting',
    desc: 'Professional exterior painting with proper surface prep, priming, and premium paint systems.',
    icon: Paintbrush,
    color: 'from-purple-600 to-purple-800',
  },
  {
    slug: 'storm-damage',
    name: 'Storm Damage',
    desc: 'Insurance claim assistance and emergency storm damage repair — we work with all major carriers.',
    icon: CloudLightning,
    color: 'from-red-600 to-red-800',
  },
  {
    slug: 'inspections',
    name: 'Free Roof Inspection',
    desc: 'Thorough 25-point roof inspection with a detailed written report. No cost, no pressure.',
    icon: Search,
    color: 'from-teal-600 to-teal-800',
  },
]

const WHY_US = [
  {
    icon: Search,
    title: 'Free 25-Point Inspection',
    desc: 'No cost, no pressure. We document every issue with photos and give you a written report.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Pricing',
    desc: 'Exact quotes before any work starts. No hidden fees, no surprise invoices after the job.',
  },
  {
    icon: Shield,
    title: 'Veteran-Led Team',
    desc: 'We operate with military discipline. When we say 8am, we are there at 8am. Every time.',
  },
  {
    icon: Award,
    title: 'Insurance Claim Help',
    desc: 'We work directly with your carrier on storm and hail claims so you get what you\'re owed.',
  },
  {
    icon: BadgeCheck,
    title: 'Warranty-Backed Work',
    desc: '5-year workmanship warranty plus manufacturer material warranties up to lifetime coverage.',
  },
  {
    icon: Calendar,
    title: 'Same-Week Scheduling',
    desc: 'Most projects are on the calendar within 7 days. We don\'t leave you waiting for weeks.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Mike T.',
    city: 'Signal Mountain, TN',
    rating: 5,
    text: "Chase and his crew replaced our entire roof in one day and left the yard cleaner than they found it. Couldn't believe the turnaround. Highly recommend TVE to anyone in the area.",
    service: 'Roof Replacement',
    initials: 'MT',
  },
  {
    name: 'Sarah K.',
    city: 'Chattanooga, TN',
    rating: 5,
    text: 'After the hailstorm last spring, TVE helped us navigate the entire insurance claim process. They handled everything — we just had to approve the work. Roof looks brand new.',
    service: 'Storm Damage',
    initials: 'SK',
  },
  {
    name: 'David R.',
    city: 'Hixson, TN',
    rating: 5,
    text: 'Got three quotes — TVE was the most transparent about what we actually needed. No upselling, no surprises. The Hardie Board siding they installed looks incredible.',
    service: 'Siding',
    initials: 'DR',
  },
  {
    name: 'Jennifer M.',
    city: 'Lookout Mountain, TN',
    rating: 5,
    text: 'I was dreading the whole process but they made it painless. Showed up on time every day, kept me updated, and cleaned up perfectly. The new gutters look amazing.',
    service: 'Gutters',
    initials: 'JM',
  },
  {
    name: 'Robert H.',
    city: 'Ooltewah, TN',
    rating: 5,
    text: 'Best contractor experience I have ever had. As a veteran myself, I appreciated the professionalism and straight talk. No games, just quality work done right.',
    service: 'Roof Replacement',
    initials: 'RH',
  },
]

const RECENT_PROJECTS = [
  {
    title: 'Roof Replacement',
    location: 'Signal Mountain, TN',
    material: 'Owens Corning Duration Shingles',
    image: '/images/projects/roof-replacement.jpg',
    alt: 'Completed roof replacement with Owens Corning Duration shingles on a home in Signal Mountain, Tennessee',
    color: 'bg-slate-700',
  },
  {
    title: 'Hardie Board Siding',
    location: 'Lookout Mountain, TN',
    material: 'James Hardie HardiePlank',
    image: '/images/projects/hardie-board-siding.jpg',
    alt: 'New James Hardie HardiePlank siding installation on a home in Lookout Mountain, Tennessee',
    color: 'bg-stone-600',
  },
  {
    title: 'Storm Damage Repair',
    location: 'Hixson, TN',
    material: 'IKO Dynasty Shingles',
    image: '/images/projects/storm-damage-repair.jpg',
    alt: 'Completed storm damage roof repair with IKO Dynasty shingles on a home in Hixson, Tennessee',
    color: 'bg-neutral-700',
  },
]

const SERVICE_AREA_CITIES = [
  { name: 'Chattanooga', state: 'TN', href: '/service-areas/tennessee/chattanooga/' },
  { name: 'Signal Mountain', state: 'TN', href: '/service-areas/tennessee/signal-mountain/' },
  { name: 'Lookout Mountain', state: 'TN', href: '/service-areas/tennessee/lookout-mountain/' },
  { name: 'Red Bank', state: 'TN', href: '/service-areas/tennessee/red-bank/' },
  { name: 'Hixson', state: 'TN', href: '/service-areas/tennessee/hixson/' },
  { name: 'Soddy Daisy', state: 'TN', href: '/service-areas/tennessee/soddy-daisy/' },
  { name: 'Ooltewah', state: 'TN', href: '/service-areas/tennessee/ooltewah/' },
  { name: 'Cleveland', state: 'TN', href: '/service-areas/tennessee/cleveland/' },
  { name: 'Dalton', state: 'GA', href: '/service-areas/georgia/dalton/' },
  { name: 'Ringgold', state: 'GA', href: '/service-areas/georgia/ringgold/' },
  { name: 'Fort Oglethorpe', state: 'GA', href: '/service-areas/georgia/fort-oglethorpe/' },
  { name: 'Chickamauga', state: 'GA', href: '/service-areas/georgia/chickamauga/' },
]

const BLOG_POSTS = [
  {
    slug: 'roof-replacement-cost-chattanooga',
    title: 'How Much Does a Roof Replacement Cost in Chattanooga in 2026?',
    excerpt:
      'A full breakdown of what drives roofing costs in the Chattanooga market — materials, labor, and what to watch out for.',
    date: 'March 15, 2026',
    category: 'Roofing',
    readTime: '7',
  },
  {
    slug: 'signs-you-need-roof-repair',
    title: '5 Signs You Need a Roof Repair (And When to Replace Instead)',
    excerpt:
      "Not every roof problem means a full replacement. Here's how to tell the difference and what to do about each one.",
    date: 'March 8, 2026',
    category: 'Roofing',
    readTime: '5',
  },
  {
    slug: 'hardie-board-vs-lp-smartside-chattanooga-homes',
    title: 'Hardie Board vs. LP SmartSide: Best Siding for Chattanooga Homes',
    excerpt:
      "Both are fiber cement siding options built to last — but they perform differently in East Tennessee's climate.",
    date: 'February 28, 2026',
    category: 'Siding',
    readTime: '6',
  },
]

// ─── Schema ──────────────────────────────────────────────────────────────────

const schemas = [
  buildLocalBusinessSchema({
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '47',
    },
  }),
  buildOrganizationSchema(),
  buildWebSiteSchema(),
  buildAggregateRatingSchema(4.9, 47),
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <JsonLd schema={schemas} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]"
        aria-label="Hero"
      >
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-roof.jpg"
            alt="Professional roofing crew completing a roof replacement on a Chattanooga home"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </div>

        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#0A1628]/80 to-[#0f2040]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-70" />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />

        {/* Accent glow */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#2563EB]/10 blur-3xl"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 md:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: Copy */}
            <div>
              {/* Veteran badge */}
              <div className="inline-flex items-center gap-2.5 bg-[#C0392B] text-white rounded-full px-5 py-2.5 mb-8 shadow-lg">
                <Shield size={16} aria-hidden="true" />
                <span className="font-bold text-sm tracking-wide">Veteran-Owned &amp; Operated</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-black text-white leading-[1.05] mb-6 tracking-tight">
                Chattanooga&apos;s{' '}
                <span className="relative inline-block">
                  <span className="text-[#2563EB]">Most Trusted</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-[#2563EB]/40 rounded-full"
                    aria-hidden="true"
                  />
                </span>
                <br />
                Roofing &amp; Exterior
                <br />
                Contractor
              </h1>

              <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Quality craftsmanship, transparent pricing, and real communication — from a local,
                veteran-led team that actually shows up on time.
              </p>

              {/* Trust bullets */}
              <ul className="flex flex-col gap-3 mb-10" aria-label="Key benefits">
                {[
                  'Free 25-point roof inspection — no obligation',
                  'Licensed, bonded & insured — we handle insurance claims',
                  'Same-week scheduling on most projects',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/90">
                    <span className="w-5 h-5 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={12} className="text-[#2563EB]" aria-hidden="true" />
                    </span>
                    <span className="text-sm md:text-base">{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#get-estimate"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2563EB] text-white font-bold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-[#2563EB]/30 min-h-[52px]"
                >
                  Schedule Free Inspection
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  href={COMPANY.phoneTel}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 hover:border-white/50 transition-colors min-h-[52px]"
                >
                  <Phone size={18} aria-hidden="true" />
                  {COMPANY.phone}
                </a>
              </div>

              {/* Google rating strip */}
              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" stroke="#F59E0B" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-white/80 text-sm font-medium">
                  <strong className="text-white">4.9</strong> rating &bull; 47 Google reviews
                </span>
              </div>
            </div>

            {/* Right: Lead form card */}
            <div id="get-estimate" className="scroll-mt-24">
              <div className="bg-white rounded-2xl p-8 shadow-2xl ring-1 ring-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                    <Zap size={20} className="text-[#2563EB]" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-[#0A1628] font-black text-xl leading-tight">Get Your Free Estimate</h2>
                    <p className="text-[#64748B] text-xs mt-0.5">We call back within 2 hours</p>
                  </div>
                </div>
                <HeroLeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
          aria-hidden="true"
        />
      </section>

      {/* ── Cert / Trust Strip ───────────────────────────────────────────── */}
      <section className="bg-white pt-4 pb-10 border-b border-[#E2E8F0]" aria-label="Certifications and trust indicators">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-center text-[#94A3B8] text-xs font-semibold uppercase tracking-widest mb-6">
            Certified by the Brands Homeowners Trust
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {/* GAF Certified */}
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-lg bg-[#E87722] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xs">GAF</span>
              </div>
              <div className="leading-tight">
                <p className="text-[#0A1628] font-bold text-sm">GAF Certified</p>
                <p className="text-[#64748B] text-xs">Contractor</p>
              </div>
            </div>

            {/* Owens Corning */}
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-lg bg-[#C0392B] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-[9px] text-center leading-tight">OC</span>
              </div>
              <div className="leading-tight">
                <p className="text-[#0A1628] font-bold text-sm">Owens Corning</p>
                <p className="text-[#64748B] text-xs">Preferred Contractor</p>
              </div>
            </div>

            {/* IKO */}
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-lg bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xs">IKO</span>
              </div>
              <div className="leading-tight">
                <p className="text-[#0A1628] font-bold text-sm">IKO Certified</p>
                <p className="text-[#64748B] text-xs">Roofing Pro</p>
              </div>
            </div>

            {/* BBB */}
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-lg bg-[#003A79] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xs">BBB</span>
              </div>
              <div className="leading-tight">
                <p className="text-[#0A1628] font-bold text-sm">A+ Rated</p>
                <p className="text-[#64748B] text-xs">Better Business Bureau</p>
              </div>
            </div>

            {/* Google */}
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                <Star size={16} fill="#F59E0B" stroke="#F59E0B" aria-hidden="true" />
              </div>
              <div className="leading-tight">
                <p className="text-[#0A1628] font-bold text-sm">4.9 Stars</p>
                <p className="text-[#64748B] text-xs">47 Google Reviews</p>
              </div>
            </div>

            {/* Veteran-Owned */}
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#FEF2F2] border border-[#C0392B]/20">
              <div className="w-8 h-8 rounded-lg bg-[#C0392B] flex items-center justify-center flex-shrink-0">
                <Shield size={16} className="text-white" aria-hidden="true" />
              </div>
              <div className="leading-tight">
                <p className="text-[#0A1628] font-bold text-sm">Veteran-Owned</p>
                <p className="text-[#64748B] text-xs">US Military Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Animated Stats ───────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] py-20 relative overflow-hidden" aria-label="Company statistics">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-pattern" aria-hidden="true" />
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#2563EB]/8 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">
              By The Numbers
            </p>
            <h2 className="text-white font-black text-4xl md:text-5xl">
              Proof Is in the Work
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { end: 200, suffix: '+', label: 'Projects Completed', sub: 'Across TN & GA', icon: Home },
              { end: 49, suffix: '/5', label: 'Average Google Rating', sub: '47 verified reviews', icon: Star, display: '4.9' },
              { end: 100, suffix: '%', label: 'Satisfaction Rate', sub: 'Or we make it right', icon: ThumbsUp },
              { end: 5, suffix: '-Year', label: 'Workmanship Warranty', sub: 'On every project', icon: BadgeCheck },
            ].map(({ end, suffix, label, sub, icon: Icon, display }, i) => (
              <FadeIn key={label} delay={i * 120} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/8 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-[#2563EB]" aria-hidden="true" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">
                    {display ? (
                      <span>{display}</span>
                    ) : (
                      <AnimatedCounter end={end} suffix={suffix} />
                    )}
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">{label}</p>
                  <p className="text-white/40 text-xs">{sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F9FA]" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 id="services-heading" className="text-[#0A1628] font-black text-4xl md:text-5xl mb-5">
              Roofing &amp; Exterior Services
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
              From a simple repair to a complete exterior transformation — every project gets the
              same attention to detail.
            </p>
          </FadeIn>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
            {SERVICES.map(({ slug, name, desc, icon: Icon }, i) => (
              <FadeIn key={slug} delay={i * 60} className="h-full">
                <li className="h-full">
                  <Link
                    href={`/services/${slug}/`}
                    className="group flex flex-col h-full bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:border-[#2563EB]/40 hover:shadow-xl transition-all duration-300"
                    aria-label={`${name} — learn more`}
                  >
                    {/* Icon header */}
                    <div className="relative h-24 bg-[#0A1628] flex items-center justify-center overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                        style={{
                          background: 'radial-gradient(circle at center, #2563EB 0%, transparent 70%)',
                        }}
                        aria-hidden="true"
                      />
                      <div className="relative z-10 w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2563EB]/30 transition-all duration-300">
                        <Icon size={26} className="text-white" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-[#0A1628] font-bold text-base mb-2 group-hover:text-[#2563EB] transition-colors">
                        {name}
                      </h3>
                      <p className="text-[#64748B] text-sm leading-relaxed flex-1 line-clamp-3">{desc}</p>
                      <div className="mt-4 flex items-center gap-1.5 text-[#2563EB] text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                        Learn More <ArrowRight size={14} aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                </li>
              </FadeIn>
            ))}
          </ul>

          <FadeIn className="text-center mt-12">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[#0A1628] text-[#0A1628] font-bold hover:bg-[#0A1628] hover:text-white transition-colors min-h-[52px]"
            >
              View All Services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Why Choose TVE ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: headline + comparison */}
            <FadeIn direction="left">
              <p className="text-[#C0392B] font-bold text-sm uppercase tracking-widest mb-3">
                Why TVE?
              </p>
              <h2 id="why-heading" className="text-[#0A1628] font-black text-4xl md:text-5xl mb-6 leading-tight">
                The Contractor You&nbsp;Wished You'd Found&nbsp;First
              </h2>
              <p className="text-[#64748B] text-lg leading-relaxed mb-10">
                Most homeowners don't realize how much a contractor's character matters until something
                goes wrong. We built TVE to be the company that makes that a non-issue.
              </p>

              {/* Comparison table */}
              <div className="rounded-2xl border border-[#E2E8F0] overflow-hidden">
                <div className="grid grid-cols-3 bg-[#F8F9FA] px-5 py-3 border-b border-[#E2E8F0]">
                  <span className="text-[#64748B] text-xs font-bold uppercase tracking-wide col-span-1">Feature</span>
                  <span className="text-[#2563EB] text-xs font-bold uppercase tracking-wide text-center">TVE</span>
                  <span className="text-[#94A3B8] text-xs font-bold uppercase tracking-wide text-center">Others</span>
                </div>
                {[
                  'Free Inspection & Written Report',
                  'Upfront Transparent Pricing',
                  'Insurance Claim Assistance',
                  'Same-Week Scheduling',
                  '5-Year Workmanship Warranty',
                  'On-Time Every Day',
                ].map((feature, i) => (
                  <div
                    key={feature}
                    className={`grid grid-cols-3 px-5 py-3.5 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]/50'}`}
                  >
                    <span className="text-[#334155] text-sm">{feature}</span>
                    <div className="flex justify-center">
                      <CheckCircle size={18} className="text-[#16A34A]" aria-label="Yes" />
                    </div>
                    <div className="flex justify-center">
                      <span className="w-4 h-0.5 bg-[#CBD5E1] rounded-full" aria-label="No" />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right: icon feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_US.map(({ icon: Icon, title, desc }, i) => (
                <FadeIn key={title} delay={i * 80} direction="right">
                  <div className="bg-[#F8F9FA] rounded-xl p-5 border border-[#E2E8F0] hover:border-[#2563EB]/30 hover:bg-[#EFF6FF]/50 transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-3">
                      <Icon size={20} className="text-[#2563EB]" aria-hidden="true" />
                    </div>
                    <h3 className="text-[#0A1628] font-bold text-sm mb-1.5">{title}</h3>
                    <p className="text-[#64748B] text-xs leading-relaxed">{desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Our Story ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F9FA]" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Photo */}
            <FadeIn direction="left" className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden bg-[#0A1628] min-h-[420px] shadow-2xl">
                <Image
                  src="/images/chase-team.jpg"
                  alt="Chase Whited, founder of Tennessee Valley Exteriors, on a roofing project in Chattanooga, Tennessee"
                  fill
                  className="object-cover opacity-85"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />

                {/* Veteran badge overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#C0392B] rounded-xl px-5 py-4 flex items-center gap-4 shadow-xl">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Shield size={24} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white font-black text-base leading-none">Veteran-Owned & Operated</p>
                      <p className="text-white/80 text-xs mt-1">US Military Service — Discipline you can count on</p>
                    </div>
                  </div>
                </div>

                {/* Founded badge */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-center">
                  <p className="text-white font-black text-2xl leading-none">2024</p>
                  <p className="text-white/70 text-xs">Est.</p>
                </div>
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn direction="right" className="order-1 lg:order-2">
              <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 id="about-heading" className="text-[#0A1628] font-black text-4xl md:text-5xl mb-7 leading-tight">
                Built on the Standard We Wished Existed
              </h2>
              <div className="flex flex-col gap-5 text-[#64748B] leading-relaxed">
                <p>
                  Tennessee Valley Exteriors was founded in 2024 by Chase Whited after watching too
                  many Chattanooga homeowners get burned by contractors who over-promised,
                  under-delivered, and went silent the moment a check was cashed.
                </p>
                <p>
                  We set out to do it differently: straight answers, fair pricing, and craftsmanship
                  you can see. Every project — whether it&apos;s a 30-year shingle replacement or a
                  gutter repair — gets the same attention to detail.
                </p>
                <p>
                  As a veteran-led company, we bring discipline and accountability to every job site.
                  When we say we&apos;ll be there at 8am, we&apos;re there at 8am.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 my-8">
                {[
                  { value: '200+', label: 'Happy Homeowners' },
                  { value: '4.9★', label: 'Google Rating' },
                  { value: '50mi', label: 'Service Radius' },
                  { value: 'Same-Wk', label: 'Avg Scheduling' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white rounded-xl p-4 border border-[#E2E8F0] text-center">
                    <p className="text-[#0A1628] font-black text-xl">{value}</p>
                    <p className="text-[#64748B] text-xs">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A1628] text-white font-bold hover:bg-[#1e3a5f] transition-colors min-h-[48px]"
                >
                  Read Our Story <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a
                  href={COMPANY.phoneTel}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#E2E8F0] text-[#334155] font-bold hover:border-[#2563EB] hover:text-[#2563EB] transition-colors min-h-[48px]"
                >
                  <Phone size={16} aria-hidden="true" />
                  {COMPANY.phone}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA Banner ───────────────────────────────────────────── */}
      <section className="bg-[#2563EB] py-14 relative overflow-hidden" aria-label="Free inspection offer">
        <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-2">
                No Cost. No Obligation.
              </p>
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight">
                Get Your Free Roof Inspection Today
              </h2>
              <p className="text-white/75 mt-2 text-base">
                We document every issue with photos and give you a detailed written report.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/quote/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#2563EB] font-black text-base hover:bg-[#EFF6FF] transition-colors min-h-[52px] shadow-lg"
              >
                Schedule Now <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href={COMPANY.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 hover:border-white/70 transition-colors min-h-[52px]"
              >
                <Phone size={18} aria-hidden="true" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Carousel ────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden" aria-labelledby="testimonials-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2563EB]/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">
              Real Homeowners, Real Results
            </p>
            <h2 id="testimonials-heading" className="text-white font-black text-4xl md:text-5xl mb-5">
              What Our Customers Say
            </h2>
            <div className="inline-flex items-center gap-3 bg-white/8 border border-white/15 rounded-full px-6 py-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" stroke="#F59E0B" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white font-bold">4.9</span>
              <span className="text-white/50 text-sm">average across 47 Google reviews</span>
            </div>
          </FadeIn>

          <TestimonialCarousel testimonials={TESTIMONIALS} />

          <FadeIn className="text-center mt-14">
            <Link
              href="/reviews/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/25 text-white font-bold hover:bg-white/10 hover:border-white/50 transition-colors min-h-[48px]"
            >
              Read All Reviews <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Recent Projects (Gallery Teaser) ─────────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <FadeIn direction="left">
              <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">
                Our Work
              </p>
              <h2 id="projects-heading" className="text-[#0A1628] font-black text-4xl md:text-5xl">
                Recent Projects
              </h2>
            </FadeIn>
            <FadeIn direction="right">
              <Link
                href="/gallery/"
                className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:gap-3 transition-all text-sm flex-shrink-0"
              >
                View Full Gallery <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </FadeIn>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {RECENT_PROJECTS.map(({ title, location, material, image, alt, color }, i) => (
              <FadeIn key={title + location} delay={i * 100}>
                <li>
                  <div className="group rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-2xl transition-all duration-300 card-lift">
                    <div className={`relative h-56 ${color} overflow-hidden`}>
                      <Image
                        src={image}
                        alt={alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                          Completed
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-[#0A1628] font-bold text-lg mb-1">{title}</h3>
                      <div className="flex items-center gap-1.5 text-[#64748B] text-sm mb-1">
                        <MapPin size={13} aria-hidden="true" />
                        {location}
                      </div>
                      <p className="text-[#94A3B8] text-xs">{material}</p>
                    </div>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Quote Widget ─────────────────────────────────────────────────── */}
      <QuoteWidgetEmbed
        heading="Get Your Instant Estimate"
        subheading="Answer a few quick questions about your project and get a realistic price range in minutes — no phone call required."
      />

      {/* ── Service Areas ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F9FA]" aria-labelledby="areas-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">
              Where We Work
            </p>
            <h2 id="areas-heading" className="text-[#0A1628] font-black text-4xl md:text-5xl mb-5">
              Serving East TN &amp; North GA
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
              Based in Chattanooga, we serve a 50-mile radius — from Signal Mountain to Dalton, GA.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-6">
            {/* City grid — 4 columns */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SERVICE_AREA_CITIES.map(({ name, state, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center gap-2 p-3.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:shadow-sm transition-all text-sm card-lift"
                  >
                    <MapPin
                      size={13}
                      className="text-[#2563EB] flex-shrink-0 group-hover:text-[#1d4ed8]"
                      aria-hidden="true"
                    />
                    <span className="text-[#334155] font-medium group-hover:text-[#2563EB] transition-colors leading-tight">
                      {name},&nbsp;
                      <span className="text-[#64748B] font-normal group-hover:text-[#2563EB]">{state}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-5">
                <Link
                  href="/service-areas/"
                  className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:gap-3 transition-all text-sm"
                >
                  View Full Service Area Map <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Coverage card — 2 columns */}
            <FadeIn direction="right" className="md:col-span-2">
              <div className="bg-[#0A1628] rounded-2xl p-8 text-white h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 flex items-center justify-center mb-5">
                    <MapPin size={22} className="text-[#2563EB]" aria-hidden="true" />
                  </div>
                  <h3 className="font-black text-xl mb-3">Not Sure If We Cover You?</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-6">
                    We serve most of the greater Chattanooga area — Hamilton County, Bradley County,
                    and Walker County, GA. Within ~50 miles of downtown Chattanooga, we&apos;re
                    likely already in your neighborhood.
                  </p>

                  {/* Coverage stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { value: '50mi', label: 'Service Radius' },
                      { value: '2', label: 'States Covered' },
                      { value: '14+', label: 'Active Cities' },
                      { value: 'Free', label: 'Travel to You' },
                    ].map(({ value, label }) => (
                      <div key={label} className="bg-white/8 rounded-lg px-3 py-2 text-center">
                        <p className="text-white font-black text-lg leading-none">{value}</p>
                        <p className="text-white/50 text-xs mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={COMPANY.phoneTel}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] text-white font-bold text-sm hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
                  >
                    <Phone size={16} aria-hidden="true" />
                    Call to Confirm Coverage
                  </a>
                  <Link
                    href="/contact/"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors min-h-[44px]"
                  >
                    Send Us a Message
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Partner / Manufacturer Logos ─────────────────────────────────── */}
      <section className="py-16 bg-white border-y border-[#E2E8F0]" aria-label="Partner manufacturers and certifications">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-center text-[#94A3B8] text-xs font-semibold uppercase tracking-widest mb-8">
            We Install Products from the Industry&apos;s Most Trusted Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {[
              { name: 'Owens Corning', color: 'bg-[#C0392B]', abbr: 'OC' },
              { name: 'GAF Roofing', color: 'bg-[#E87722]', abbr: 'GAF' },
              { name: 'IKO Shingles', color: 'bg-[#1a3554]', abbr: 'IKO' },
              { name: 'James Hardie', color: 'bg-[#2563EB]', abbr: 'JH' },
              { name: 'LP SmartSide', color: 'bg-[#16A34A]', abbr: 'LP' },
              { name: 'CertainTeed', color: 'bg-[#475569]', abbr: 'CT' },
            ].map(({ name, color, abbr }) => (
              <div key={name} className="flex flex-col items-center gap-2 group">
                <div
                  className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200`}
                >
                  <span className="text-white font-black text-sm">{abbr}</span>
                </div>
                <span className="text-[#64748B] text-xs font-medium text-center leading-tight max-w-[72px]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F9FA]" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <FadeIn direction="left">
              <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">
                From the Blog
              </p>
              <h2 id="blog-heading" className="text-[#0A1628] font-black text-4xl md:text-5xl">
                Roofing Tips &amp; Guides
              </h2>
            </FadeIn>
            <FadeIn direction="right">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:gap-3 transition-all text-sm flex-shrink-0"
              >
                Read the Blog <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map(({ slug, title, excerpt, date, category, readTime }, i) => (
              <FadeIn key={slug} delay={i * 100} className="h-full">
                <article className="h-full flex flex-col rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden group hover:shadow-xl transition-all duration-300 card-lift">
                  {/* Image area */}
                  <div className="relative h-44 bg-[#0A1628] overflow-hidden">
                    <Image
                      src={`/images/blog/${slug}.jpg`}
                      alt={`Blog post: ${title}`}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[#94A3B8] text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Clock size={11} aria-hidden="true" />
                        {readTime} min read
                      </span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={date}>{date}</time>
                    </div>
                    <h3 className="text-[#0A1628] font-bold text-base leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                      <Link href={`/blog/${slug}/`} className="hover:underline">
                        {title}
                      </Link>
                    </h3>
                    <p className="text-[#64748B] text-sm leading-relaxed flex-1">{excerpt}</p>
                    <Link
                      href={`/blog/${slug}/`}
                      className="mt-4 flex items-center gap-1.5 text-[#2563EB] text-sm font-semibold group-hover:gap-2.5 transition-all"
                      aria-label={`Read more: ${title}`}
                    >
                      Read More <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden bg-[#0A1628]"
        aria-labelledby="final-cta-heading"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#2563EB]/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#C0392B]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#C0392B] text-white rounded-full px-5 py-2.5 mb-8 text-sm font-bold">
              <Clock size={14} aria-hidden="true" />
              Same-Week Scheduling Available
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 id="final-cta-heading" className="text-white font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-white/75 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
              Call us today or schedule your free inspection online. Most projects are on the
              calendar within the week.
            </p>
          </FadeIn>

          <FadeIn delay={200} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-[#2563EB] text-white font-black text-lg hover:bg-[#1d4ed8] transition-colors shadow-xl shadow-[#2563EB]/25 min-h-[60px]"
            >
              Schedule Free Inspection
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-xl border-2 border-white/30 text-white font-black text-lg hover:bg-white/10 hover:border-white/60 transition-colors min-h-[60px]"
            >
              <Phone size={20} aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </FadeIn>

          <FadeIn delay={300} className="mt-10 flex items-center justify-center gap-6 flex-wrap">
            {[
              'Free inspection',
              'No obligation',
              'Licensed & insured',
              'Veteran-owned',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle size={14} className="text-[#2563EB]" aria-hidden="true" />
                {item}
              </div>
            ))}
          </FadeIn>
        </div>
      </section>
    </>
  )
}
