/**
 * Gallery data — placeholder projects until real photos are uploaded.
 * Service slugs match lib/services.ts slugs.
 */

export type ServiceType =
  | 'roof-replacement'
  | 'roof-repair'
  | 'gutters'
  | 'siding'
  | 'decks'
  | 'painting'
  | 'storm-damage'
  | 'inspections'

export interface GalleryProject {
  id: string
  title: string
  service: ServiceType
  serviceLabel: string
  city: string
  state: string
  year: number
  /** Materials used / brief project detail */
  detail: string
  /** Placeholder image (before) */
  imageBefore: string
  /** Placeholder image (after) */
  imageAfter: string | null
  /** Alt text for the after (or main) image */
  altText: string
}

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'p-001',
    title: 'Full Roof Replacement — Hixson Ranch Home',
    service: 'roof-replacement',
    serviceLabel: 'Roof Replacement',
    city: 'Hixson',
    state: 'TN',
    year: 2025,
    detail: 'IKO Dynasty shingles in Weathered Wood. 28 squares. New ice & water shield, ridge vent.',
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: '/images/gallery/placeholder-after.jpg',
    altText: 'Completed roof replacement on a ranch home in Hixson, TN using IKO Dynasty shingles',
  },
  {
    id: 'p-002',
    title: 'Storm Damage Repair — Ooltewah Colonial',
    service: 'storm-damage',
    serviceLabel: 'Storm Damage',
    city: 'Ooltewah',
    state: 'TN',
    year: 2025,
    detail: 'Insurance claim repair after April hail storm. 14 squares, new gutters, 3 skylights resealed.',
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: '/images/gallery/placeholder-after.jpg',
    altText: 'Storm damage roof repair on a colonial home in Ooltewah, TN after hail damage',
  },
  {
    id: 'p-003',
    title: 'Hardie Board Siding — Chattanooga Craftsman',
    service: 'siding',
    serviceLabel: 'Siding',
    city: 'Chattanooga',
    state: 'TN',
    year: 2025,
    detail: 'James Hardie HardiePlank lap siding in Arctic White. Full house + trim replacement.',
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: '/images/gallery/placeholder-after.jpg',
    altText: 'James Hardie HardiePlank siding installation on a craftsman home in Chattanooga, TN',
  },
  {
    id: 'p-004',
    title: 'Seamless Gutter Installation — Signal Mountain',
    service: 'gutters',
    serviceLabel: 'Gutters',
    city: 'Signal Mountain',
    state: 'TN',
    year: 2025,
    detail: '6-inch seamless K-style gutters in Musket Brown. 180 linear feet + leaf guards.',
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: null,
    altText: 'Seamless gutter installation on a home in Signal Mountain, TN with leaf guard protection',
  },
  {
    id: 'p-005',
    title: 'Composite Deck Build — Red Bank Backyard',
    service: 'decks',
    serviceLabel: 'Composite Decks',
    city: 'Red Bank',
    state: 'TN',
    year: 2025,
    detail: 'Trex Transcend composite decking in Spiced Rum. 400 sq ft, cable railing, built-in lighting.',
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: '/images/gallery/placeholder-after.jpg',
    altText: 'New Trex composite deck with cable railing built in Red Bank, TN',
  },
  {
    id: 'p-006',
    title: 'Full Roof Replacement — Dalton New Build',
    service: 'roof-replacement',
    serviceLabel: 'Roof Replacement',
    city: 'Dalton',
    state: 'GA',
    year: 2025,
    detail: "Owens Corning Duration shingles in Estate Gray. 32 squares. OC's SureNail Technology.",
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: '/images/gallery/placeholder-after.jpg',
    altText: 'Roof replacement on a new construction home in Dalton, GA using Owens Corning Duration shingles',
  },
  {
    id: 'p-007',
    title: 'Exterior Painting — Lookout Mountain Victorian',
    service: 'painting',
    serviceLabel: 'Exterior Painting',
    city: 'Lookout Mountain',
    state: 'TN',
    year: 2025,
    detail: 'Benjamin Moore Aura exterior paint. Full prep, prime, 2 coats. Trim + shutters included.',
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: '/images/gallery/placeholder-after.jpg',
    altText: 'Exterior painting project on a Victorian home in Lookout Mountain, TN',
  },
  {
    id: 'p-008',
    title: 'Roof Repair — Ringgold Leak Fix',
    service: 'roof-repair',
    serviceLabel: 'Roof Repair',
    city: 'Ringgold',
    state: 'GA',
    year: 2024,
    detail: 'Valley flashing replacement, 8 squares of shingle replacement, resealed chimney flashing.',
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: null,
    altText: 'Roof repair and flashing replacement on a home in Ringgold, GA',
  },
  {
    id: 'p-009',
    title: 'LP SmartSide Install — Cleveland Bi-Level',
    service: 'siding',
    serviceLabel: 'Siding',
    city: 'Cleveland',
    state: 'TN',
    year: 2024,
    detail: 'LP SmartSide ExpertFinish lap siding in Navajo Beige. Entire exterior + garage.',
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: '/images/gallery/placeholder-after.jpg',
    altText: 'LP SmartSide siding installation on a bi-level home in Cleveland, TN',
  },
  {
    id: 'p-010',
    title: 'Roof Replacement — Soddy Daisy Two-Story',
    service: 'roof-replacement',
    serviceLabel: 'Roof Replacement',
    city: 'Soddy Daisy',
    state: 'TN',
    year: 2024,
    detail: 'IKO Cambridge shingles in Dual Black. 24 squares. Complete underlayment and ridge cap replacement.',
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: '/images/gallery/placeholder-after.jpg',
    altText: 'Roof replacement on a two-story home in Soddy Daisy, TN with IKO Cambridge shingles',
  },
  {
    id: 'p-011',
    title: 'Gutter Guards — Hixson Estate',
    service: 'gutters',
    serviceLabel: 'Gutters',
    city: 'Hixson',
    state: 'TN',
    year: 2024,
    detail: 'LeafFilter micro-mesh gutter guards installed on 220 linear feet of existing 5-inch gutters.',
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: null,
    altText: 'Micro-mesh gutter guard installation on a large home in Hixson, TN',
  },
  {
    id: 'p-012',
    title: 'Storm Damage Claim — East Ridge',
    service: 'storm-damage',
    serviceLabel: 'Storm Damage',
    city: 'East Ridge',
    state: 'TN',
    year: 2024,
    detail: 'Full insurance claim management. 18 squares replacement + new gutters. Adjuster coordination included.',
    imageBefore: '/images/gallery/placeholder-before.jpg',
    imageAfter: '/images/gallery/placeholder-after.jpg',
    altText: 'Storm damage roof replacement and gutter repair in East Ridge, TN after severe weather',
  },
]

export const SERVICE_FILTER_OPTIONS: { value: ServiceType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'roof-replacement', label: 'Roof Replacement' },
  { value: 'roof-repair', label: 'Roof Repair' },
  { value: 'storm-damage', label: 'Storm Damage' },
  { value: 'gutters', label: 'Gutters' },
  { value: 'siding', label: 'Siding' },
  { value: 'decks', label: 'Decks' },
  { value: 'painting', label: 'Exterior Painting' },
]

export const CITY_FILTER_OPTIONS = [
  { value: 'all', label: 'All Cities' },
  ...Array.from(new Set(GALLERY_PROJECTS.map((p) => p.city)))
    .sort()
    .map((city) => ({ value: city, label: city })),
]
