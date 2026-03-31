export const COMPANY = {
  name: 'Tennessee Valley Exteriors',
  shortName: 'TVE',
  tagline: "Chattanooga's Trusted Roofing & Exterior Contractor",
  description:
    'Tennessee Valley Exteriors is a veteran-owned roofing and exterior contracting company serving Chattanooga, TN and North Georgia. We specialize in roof replacement, roof repair, gutters, siding, decks, and exterior painting.',
  phone: '423-364-5752',
  phoneTel: 'tel:+14233645752',
  email: 'chase@tnvex.com',
  website: 'https://tnvex.com',
  address: {
    city: 'Chattanooga',
    state: 'TN',
    stateShort: 'TN',
    region: 'East Tennessee & North Georgia',
  },
  social: {
    facebook: 'https://facebook.com/tnvex',
    instagram: 'https://instagram.com/tnvex',
    google: 'https://g.page/tennesseevalleyexteriors',
  },
  hours: {
    weekdays: 'Monday–Friday: 7am–6pm',
    saturday: 'Saturday: 8am–4pm',
    sunday: 'Sunday: Closed',
  },
  founded: '2024',
  supabaseProjectId: 'ewugdptjuhbljqnecjdm',
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '/services/' },
  { label: 'Service Areas', href: '/service-areas/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Contact', href: '/contact/' },
] as const

export const SERVICES = [
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    shortDesc: 'Full roof replacement with premium materials and expert installation.',
    icon: 'Home',
  },
  {
    slug: 'roof-repair',
    name: 'Roof Repair',
    shortDesc: 'Emergency and routine repairs to stop leaks and extend roof life.',
    icon: 'Wrench',
  },
  {
    slug: 'gutters',
    name: 'Gutters & Downspouts',
    shortDesc: 'Seamless gutters, guards, and downspouts that protect your foundation.',
    icon: 'Droplets',
  },
  {
    slug: 'siding',
    name: 'Siding',
    shortDesc: 'Hardie Board, LP SmartSide, CraneBoard vinyl, and more.',
    icon: 'Layers',
  },
  {
    slug: 'decks',
    name: 'Composite Decks',
    shortDesc: 'Beautiful, low-maintenance composite deck construction.',
    icon: 'Square',
  },
  {
    slug: 'painting',
    name: 'Exterior Painting',
    shortDesc: 'Professional exterior painting — prep, prime, and paint done right.',
    icon: 'Paintbrush',
  },
  {
    slug: 'storm-damage',
    name: 'Storm Damage',
    shortDesc: 'Insurance claim assistance and emergency storm damage repair.',
    icon: 'CloudLightning',
  },
  {
    slug: 'inspections',
    name: 'Roof Inspections',
    shortDesc: 'Free 25-point roof inspection with detailed written report.',
    icon: 'Search',
  },
] as const

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tnvex.com'
export const QUOTE_WIDGET_URL =
  process.env.NEXT_PUBLIC_QUOTE_WIDGET_URL || 'https://quote.tnvex.com'
