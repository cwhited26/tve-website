import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { buildBreadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { getBlogPostsByCategory, BLOG_CATEGORIES } from '@/lib/blog'
import type { BlogCategory } from '@/lib/blog'

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ category: c.value }))
}

type PageProps = { params: Promise<{ category: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  const catData = BLOG_CATEGORIES.find((c) => c.value === category)
  if (!catData) return {}

  return generatePageMetadata({
    title: `${catData.label} Articles — TVE Blog`,
    description: `Read Tennessee Valley Exteriors' ${catData.label.toLowerCase()} articles — expert advice for Chattanooga, TN and North Georgia homeowners.`,
    path: `/blog/category/${category}/`,
  })
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params
  const catData = BLOG_CATEGORIES.find((c) => c.value === category)
  if (!catData) notFound()

  const posts = getBlogPostsByCategory(category as BlogCategory)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog/' },
    { label: catData.label },
  ]

  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] pt-16 pb-12" aria-labelledby="cat-hero-heading">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={breadcrumbs}
            className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white"
          />
          <h1
            id="cat-hero-heading"
            className="mt-6 text-4xl font-bold text-white leading-tight"
          >
            {catData.label} Articles
          </h1>
          <p className="mt-3 text-[#94A3B8]">
            {posts.length} article{posts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* ── Category Nav ──────────────────────────────────────────────────── */}
      <nav className="bg-white border-b border-[#E2E8F0] py-3 px-6 overflow-x-auto" aria-label="Blog categories">
        <div className="max-w-4xl mx-auto flex gap-2">
          <Link
            href="/blog/"
            className="shrink-0 px-4 py-2 rounded-full border border-[#E2E8F0] text-[#475569] text-sm font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition-colors min-h-[36px] flex items-center gap-1"
          >
            <ArrowLeft size={12} aria-hidden /> All
          </Link>
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat.value}
              href={`/blog/category/${cat.value}/`}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium min-h-[36px] flex items-center transition-colors ${
                cat.value === category
                  ? 'bg-[#0A1628] text-white'
                  : 'border border-[#E2E8F0] text-[#475569] hover:border-[#2563EB] hover:text-[#2563EB]'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── Posts ─────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#F8F9FA]" aria-label={`${catData.label} posts`}>
        <div className="max-w-4xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[#64748B] text-lg">
                No {catData.label.toLowerCase()} articles yet. Check back soon!
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center gap-2 text-[#2563EB] font-medium hover:underline min-h-[44px]"
              >
                <ArrowLeft size={14} aria-hidden /> Back to all posts
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm group">
                  <div className="relative aspect-[16/9] bg-[#F8F9FA]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="font-bold text-[#0A1628] mb-2 group-hover:text-[#2563EB] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}/`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-[#475569] text-sm leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-[#94A3B8] text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} aria-hidden />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} aria-hidden />
                        {post.readTime} min read
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
