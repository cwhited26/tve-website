import type { Metadata } from 'next'
import { COMPANY, SITE_URL } from './constants'

// Re-export so existing imports from @/lib/seo still resolve
export type { BreadcrumbItem } from './schema'
export {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildAggregateRatingSchema,
  buildServiceSchema,
  buildFAQSchema,
  buildArticleSchema,
  buildBlogPostingSchema,
} from './schema'

interface PageSEOProps {
  title: string
  description: string
  path: string
  image?: string
  noIndex?: boolean
  keywords?: string[]
}

/**
 * Generate standard page metadata with all required SEO fields.
 * Every page must call this and export the result as `metadata`.
 */
export function generatePageMetadata({
  title,
  description,
  path,
  image = '/images/og-default.jpg',
  noIndex = false,
  keywords = [],
}: PageSEOProps): Metadata {
  const url = `${SITE_URL}${path}`
  const fullTitle = `${title} | ${COMPANY.name}`

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${COMPANY.name} — ${title}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}
