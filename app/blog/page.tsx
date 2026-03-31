import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { getAllBlogPosts, BLOG_CATEGORIES } from '@/lib/blog'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roofing & Exterior Blog — Expert Tips for Homeowners',
  description:
    'Roofing, siding, gutters, and exterior tips from Tennessee Valley Exteriors. Helpful guides for Chattanooga, TN and North Georgia homeowners.',
  path: '/blog/',
  keywords: [
    'roofing tips Chattanooga',
    'roof replacement guide Tennessee',
    'exterior contractor blog',
    'homeowner roofing advice',
  ],
})

export default function BlogPage() {
  const posts = getAllBlogPosts()

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog' },
  ]

  const localBusinessSchema = buildLocalBusinessSchema()
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={breadcrumbSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] pt-16 pb-12" aria-labelledby="blog-hero-heading">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={breadcrumbs}
            className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white"
          />
          <h1
            id="blog-hero-heading"
            className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            The TVE Blog
          </h1>
          <p className="mt-4 text-[#94A3B8] text-lg max-w-2xl">
            Helpful guides, honest advice, and local expertise from the TVE team. Written by
            contractors who actually do this work — not AI-generated fluff.
          </p>
        </div>
      </section>

      {/* ── Category Nav ──────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-20 bg-white border-b border-[#E2E8F0] py-3 px-6 overflow-x-auto"
        aria-label="Blog categories"
      >
        <div className="max-w-4xl mx-auto flex gap-2">
          <Link
            href="/blog/"
            className="shrink-0 px-4 py-2 rounded-full bg-[#0A1628] text-white text-sm font-medium min-h-[36px] flex items-center"
          >
            All Posts
          </Link>
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat.value}
              href={`/blog/category/${cat.value}/`}
              className="shrink-0 px-4 py-2 rounded-full border border-[#E2E8F0] text-[#475569] text-sm font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition-colors min-h-[36px] flex items-center"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── Posts ─────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#F8F9FA]" aria-label="Blog posts">
        <div className="max-w-4xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[#64748B] text-lg">
                Blog posts are coming soon. Check back shortly!
              </p>
              <Link
                href="/contact/"
                className="mt-6 inline-flex items-center gap-2 text-[#2563EB] font-medium hover:underline"
              >
                Contact us with questions <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          ) : (
            <div className="grid gap-6">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} featured={index === 0} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0A1628]" aria-labelledby="blog-cta-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="blog-cta-heading" className="text-2xl font-bold text-white mb-3">
            Have a Specific Question?
          </h2>
          <p className="text-[#94A3B8] mb-6">
            Call us or use the contact form — we answer real homeowner questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
            >
              Call {COMPANY.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors min-h-[44px]"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Blog Card ────────────────────────────────────────────────────────────────

import type { BlogPost } from '@/lib/blog'

function BlogCard({ post, featured }: { post: BlogPost; featured: boolean }) {
  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.value === post.category)?.label ?? post.category

  if (featured) {
    return (
      <article className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm md:grid md:grid-cols-5 group">
        <div className="md:col-span-2 relative aspect-[16/9] md:aspect-auto bg-[#F8F9FA]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
        <div className="md:col-span-3 p-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-full bg-[#F0F7FF] text-[#2563EB] text-xs font-semibold">
              {categoryLabel}
            </span>
            <span className="text-[#94A3B8] text-xs font-medium uppercase tracking-wide">
              Featured
            </span>
          </div>
          <h2 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#2563EB] transition-colors">
            <Link href={`/blog/${post.slug}/`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed mb-4">{post.excerpt}</p>
          <PostMeta post={post} />
        </div>
      </article>
    )
  }

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm sm:grid sm:grid-cols-4 group">
      <div className="sm:col-span-1 relative aspect-[16/9] sm:aspect-auto bg-[#F8F9FA]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="sm:col-span-3 p-5 flex flex-col justify-center">
        <span className="inline-block px-2.5 py-1 rounded-full bg-[#F0F7FF] text-[#2563EB] text-xs font-semibold mb-2 w-fit">
          {categoryLabel}
        </span>
        <h2 className="text-base font-bold text-[#0A1628] mb-2 group-hover:text-[#2563EB] transition-colors">
          <Link href={`/blog/${post.slug}/`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="text-[#475569] text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
        <PostMeta post={post} />
      </div>
    </article>
  )
}

function PostMeta({ post }: { post: BlogPost }) {
  const dateObj = new Date(post.date)
  const dateLabel = dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="flex items-center gap-3 text-[#94A3B8] text-xs">
      <span className="flex items-center gap-1">
        <Calendar size={11} aria-hidden />
        <time dateTime={post.date}>{dateLabel}</time>
      </span>
      <span className="flex items-center gap-1">
        <Clock size={11} aria-hidden />
        {post.readTime} min read
      </span>
      <span className="flex items-center gap-1">
        <Tag size={11} aria-hidden />
        {post.author}
      </span>
    </div>
  )
}
