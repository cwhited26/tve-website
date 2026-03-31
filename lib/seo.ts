import type { Metadata } from 'next'
import { COMPANY, SITE_URL } from './constants'

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

/** Breadcrumb item used in both the visual component and schema */
export interface BreadcrumbItem {
  label: string
  href?: string
}

/** Build a BreadcrumbList JSON-LD object */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  }
}

/** LocalBusiness schema — used on homepage and service area pages */
export function buildLocalBusinessSchema(overrides: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: COMPANY.name,
    url: COMPANY.website,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    description: COMPANY.description,
    foundingDate: COMPANY.founded,
    areaServed: [
      { '@type': 'City', name: 'Chattanooga', containedIn: 'Tennessee' },
      { '@type': 'State', name: 'Tennessee' },
      { '@type': 'State', name: 'Georgia' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chattanooga',
      addressRegion: 'TN',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.0456,
      longitude: -85.3097,
    },
    openingHoursSpecification: [
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
    sameAs: [COMPANY.social.facebook, COMPANY.social.instagram, COMPANY.social.google],
    ...overrides,
  }
}

/** Organization schema — used on About page */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: COMPANY.website,
    logo: `${SITE_URL}/images/tve-logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.phone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: [COMPANY.social.facebook, COMPANY.social.instagram, COMPANY.social.google],
  }
}

/** WebSite schema with SearchAction — used on homepage */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY.name,
    url: COMPANY.website,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${COMPANY.website}/blog/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

/** AggregateRating schema — used on homepage and reviews page */
export function buildAggregateRatingSchema(ratingValue = 5.0, reviewCount = 47) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'RoofingContractor',
      name: COMPANY.name,
    },
    ratingValue: ratingValue.toString(),
    bestRating: '5',
    worstRating: '1',
    reviewCount: reviewCount.toString(),
  }
}

/** Service schema — used on service pages */
export function buildServiceSchema(serviceName: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'RoofingContractor',
      name: COMPANY.name,
      url: COMPANY.website,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 35.0456,
        longitude: -85.3097,
      },
      geoRadius: '80000',
    },
  }
}

/** FAQPage schema — used on service pages */
export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
