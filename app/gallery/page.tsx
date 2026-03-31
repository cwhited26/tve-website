import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { GALLERY_PROJECTS } from '@/lib/gallery'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = generatePageMetadata({
  title: 'Project Gallery — Roofing, Siding & Exterior Work',
  description:
    'Browse completed roofing, siding, gutter, deck, and exterior projects by Tennessee Valley Exteriors across Chattanooga, TN and North Georgia. Before & after photos.',
  path: '/gallery/',
  keywords: [
    'roofing projects Chattanooga',
    'before after roof replacement',
    'siding contractor gallery',
    'exterior contractor photos Chattanooga TN',
  ],
})

export default function GalleryPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' },
  ]

  const localBusinessSchema = buildLocalBusinessSchema()
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={breadcrumbSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] pt-16 pb-12" aria-labelledby="gallery-hero-heading">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white" />
          <h1
            id="gallery-hero-heading"
            className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Our Project Gallery
          </h1>
          <p className="mt-4 text-[#94A3B8] text-lg max-w-2xl">
            Real projects, real results. Browse completed roofing, siding, gutter, and exterior work
            across Chattanooga, TN and North Georgia — before and after photos included.
          </p>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8F9FA]" aria-label="Project photos">
        <div className="max-w-6xl mx-auto px-6">
          <GalleryGrid projects={GALLERY_PROJECTS} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#2563EB]" aria-labelledby="gallery-cta-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="gallery-cta-heading" className="text-3xl font-bold text-white mb-4">
            Ready for Your Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get a free estimate from Tennessee Valley Exteriors. We serve Chattanooga, TN
            and all of East Tennessee and North Georgia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-[#2563EB] font-bold text-lg hover:bg-blue-50 transition-colors min-h-[44px]"
            >
              Get Your Free Estimate
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors min-h-[44px]"
            >
              Call {COMPANY.phone}
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            Also browse our{' '}
            <Link href="/services/" className="underline hover:text-white">
              services
            </Link>{' '}
            or{' '}
            <Link href="/reviews/" className="underline hover:text-white">
              read customer reviews
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
