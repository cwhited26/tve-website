/**
 * Customer review data — placeholder until real Google reviews are imported.
 */

export interface Review {
  id: string
  name: string
  city: string
  state: string
  rating: 1 | 2 | 3 | 4 | 5
  date: string // ISO date string
  text: string
  service?: string
  /** Google review URL — leave empty until real reviews are linked */
  sourceUrl?: string
}

export const REVIEWS: Review[] = [
  {
    id: 'r-001',
    name: 'Michael T.',
    city: 'Chattanooga',
    state: 'TN',
    rating: 5,
    date: '2025-09-14',
    service: 'Roof Replacement',
    text: "TVE replaced our entire roof after a bad hail storm and the experience was night and day compared to the other companies we got quotes from. Chase was upfront about everything — pricing, timeline, what to expect. The crew showed up on time every day, cleaned up completely, and the roof looks incredible. Our insurance adjuster even commented on how clean the job was. Highly recommend.",
  },
  {
    id: 'r-002',
    name: 'Sarah K.',
    city: 'Signal Mountain',
    state: 'TN',
    rating: 5,
    date: '2025-08-22',
    service: 'Siding',
    text: 'Had TVE install Hardie Board siding on our whole house and we could not be happier. From the first call to the final walkthrough, the communication was excellent. They answered every question we had and never made us feel rushed. The craftsmanship is beautiful — neighbors keep asking who did the work. Will definitely use them again for our deck next year.',
  },
  {
    id: 'r-003',
    name: 'Robert & Linda M.',
    city: 'Ooltewah',
    state: 'TN',
    rating: 5,
    date: '2025-07-30',
    service: 'Storm Damage',
    text: 'After the spring storms we had no idea where to start with the insurance claim process. TVE handled everything — they worked directly with our adjuster, documented all the damage, and got us a full roof replacement approved. The whole process took about 3 weeks and the result is a brand new roof. We would have been completely lost without them.',
  },
  {
    id: 'r-004',
    name: 'Jennifer W.',
    city: 'Hixson',
    state: 'TN',
    rating: 5,
    date: '2025-06-18',
    service: 'Gutters',
    text: 'Very professional from start to finish. Got three quotes for seamless gutters and TVE was competitively priced but clearly had the best process. The install team was fast and thorough — they even re-sloped a section of the old gutters that was draining wrong. Six months later and zero issues. Zero.',
  },
  {
    id: 'r-005',
    name: 'David C.',
    city: 'Dalton',
    state: 'GA',
    rating: 5,
    date: '2025-05-10',
    service: 'Roof Replacement',
    text: 'I manage properties around Dalton and TVE is now my go-to roofing contractor. They have done two full replacements for me this year. Consistent quality, reliable scheduling, and they keep me in the loop throughout the job. Hard to find a contractor this reliable in the current market.',
  },
  {
    id: 'r-006',
    name: 'Amanda P.',
    city: 'Red Bank',
    state: 'TN',
    rating: 5,
    date: '2025-04-05',
    service: 'Composite Decks',
    text: 'Chase built us a Trex deck and we are obsessed with how it turned out. He helped us choose the right decking color, suggested the cable railing which looks so much better than wood, and even added a built-in planter box we did not expect. The deck has become our favorite room in the house. 10 out of 10.',
  },
  {
    id: 'r-007',
    name: 'Tom H.',
    city: 'Lookout Mountain',
    state: 'TN',
    rating: 5,
    date: '2025-03-12',
    service: 'Roof Repair',
    text: 'Had a stubborn leak that two other contractors had already tried (and failed) to fix. TVE found the actual source immediately — flashing around a dormer that had never been installed correctly. Fixed it in one day for a fair price. That was over a year ago and we have had zero leaks since. Should have called them first.',
  },
  {
    id: 'r-008',
    name: 'Karen S.',
    city: 'Ringgold',
    state: 'GA',
    rating: 5,
    date: '2024-11-20',
    service: 'Exterior Painting',
    text: 'TVE painted the entire exterior of our older home and transformed it completely. The prep work was thorough — they scraped, primed, and caulked everything before a single drop of paint went on. The finish is smooth and even. Neighbors thought we had the house resided. Great crew, great results.',
  },
  {
    id: 'r-009',
    name: 'Chris B.',
    city: 'Cleveland',
    state: 'TN',
    rating: 5,
    date: '2024-10-08',
    service: 'Roof Replacement',
    text: 'Solid company with solid values. Chase is a veteran and it shows in how he runs his business — organized, accountable, and honest. Got our roof replaced before winter and the crew was phenomenal. Left the yard cleaner than they found it. Already recommended TVE to two of our neighbors.',
  },
]

/** Aggregate stats derived from review data */
export const REVIEW_STATS = {
  count: REVIEWS.length,
  average: parseFloat(
    (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1)
  ),
  fiveStarCount: REVIEWS.filter((r) => r.rating === 5).length,
}
