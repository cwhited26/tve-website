import { COMPANY, SITE_URL } from './constants'

export interface BreadcrumbItem {
  label: string
  href?: string
}

/** BreadcrumbList JSON-LD */
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

/** LocalBusiness / RoofingContractor schema — homepage + service area pages */
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

/** Organization schema — About page */
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

/** WebSite schema with SearchAction — homepage */
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

/** AggregateRating schema — homepage + reviews page */
export function buildAggregateRatingSchema(ratingValue = 4.9, reviewCount = 47) {
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

/** Service schema — service pages */
export function buildServiceSchema(serviceName: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    url: `${SITE_URL}${path}`,
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

/** FAQPage schema — service pages + service x city pages */
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

interface ArticleSchemaProps {
  title: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  image?: string
  authorName?: string
}

/** Article schema — blog posts */
export function buildArticleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  image = '/images/og-default.jpg',
  authorName = 'Chase Whited',
}: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: `${SITE_URL}${image}`,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: COMPANY.website,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/tve-logo.png`,
      },
    },
  }
}

/** BlogPosting schema — blog posts (more specific than Article) */
export function buildBlogPostingSchema(props: ArticleSchemaProps) {
  return {
    ...buildArticleSchema(props),
    '@type': 'BlogPosting',
  }
}

/** Review schema — individual review */
export interface ReviewData {
  author: string
  reviewBody: string
  ratingValue: number
  datePublished?: string
}

/** ImageGallery schema — gallery page */
export function buildImageGallerySchema(images: Array<{ url: string; caption: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${COMPANY.name} Project Gallery`,
    description: 'Before and after photos of roofing, siding, gutters, and exterior projects.',
    url: `${SITE_URL}/gallery/`,
    image: images.map((img) => ({
      '@type': 'ImageObject',
      url: img.url.startsWith('http') ? img.url : `${SITE_URL}${img.url}`,
      caption: img.caption,
    })),
  }
}

/** ContactPoint schema — contact page */
export function buildContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    url: COMPANY.website,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.phone,
      contactType: 'customer service',
      contactOption: 'TollFree',
      areaServed: ['TN', 'GA'],
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chattanooga',
      addressRegion: 'TN',
      addressCountry: 'US',
    },
  }
}
