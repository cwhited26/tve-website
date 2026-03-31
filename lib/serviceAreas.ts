/**
 * Service area data — all 14 cities TVE serves.
 * Used by service-areas hub, state pages, city pages, and matrix pages.
 */

export type StateSlug = 'tennessee' | 'georgia'

export interface ServiceArea {
  slug: string
  name: string
  state: StateSlug
  stateShort: 'TN' | 'GA'
  stateName: string
  /** Approximate lat/lng for map pins */
  lat: number
  lng: number
  /** Notable neighborhoods/areas within the city for SEO copy */
  neighborhoods: string[]
  /** Common weather/roofing issues specific to this area */
  weatherNotes: string
  /** Brief locally-relevant description for the city page hero */
  intro: string
}

export const SERVICE_AREAS: ServiceArea[] = [
  // ── Tennessee ──────────────────────────────────────────────────────────────
  {
    slug: 'chattanooga',
    name: 'Chattanooga',
    state: 'tennessee',
    stateShort: 'TN',
    stateName: 'Tennessee',
    lat: 35.0456,
    lng: -85.3097,
    neighborhoods: [
      'North Chattanooga',
      'East Brainerd',
      'St. Elmo',
      'Highland Park',
      'Missionary Ridge',
      'Brainerd',
      'Red Bank',
      'Lookout Valley',
      'Hixson',
      'Riverview',
    ],
    weatherNotes:
      'Chattanooga sits in a river valley surrounded by Lookout and Signal mountains, creating localized storm cells. Hail events are frequent from April through June. High summer humidity accelerates algae growth on roofs.',
    intro:
      'Tennessee Valley Exteriors is based in the Chattanooga metro and serves homeowners throughout the city — from the historic homes of St. Elmo to the newer builds in East Brainerd.',
  },
  {
    slug: 'signal-mountain',
    name: 'Signal Mountain',
    state: 'tennessee',
    stateShort: 'TN',
    stateName: 'Tennessee',
    lat: 35.1231,
    lng: -85.3487,
    neighborhoods: ['Walden', 'Falling Water', 'Timesville', 'Summertown'],
    weatherNotes:
      'Higher elevation means more severe wind events and ice accumulation in winter. Steeper roof pitches are common. Ice dams and wind-driven rain are the most frequent issues.',
    intro:
      'Signal Mountain homeowners deal with unique challenges — steeper pitches, higher wind exposure, and heavier winter ice loads. TVE has experience with the full range of Signal Mountain roof styles.',
  },
  {
    slug: 'lookout-mountain',
    name: 'Lookout Mountain',
    state: 'tennessee',
    stateShort: 'TN',
    stateName: 'Tennessee',
    lat: 35.0089,
    lng: -85.3568,
    neighborhoods: ['Fairyland', 'Sunset Rock', 'McFarland'],
    weatherNotes:
      'Lookout Mountain receives heavier precipitation than the valley below and is prone to ice storms and high wind events. Many homes have historic roofs requiring careful material matching.',
    intro:
      'From the historic estates near Fairyland to newer construction on the ridge, TVE handles all roofing and exterior work on Lookout Mountain with the care these distinctive homes deserve.',
  },
  {
    slug: 'red-bank',
    name: 'Red Bank',
    state: 'tennessee',
    stateShort: 'TN',
    stateName: 'Tennessee',
    lat: 35.1123,
    lng: -85.2971,
    neighborhoods: ['Daisy Hills', 'Riverview', 'Battlefield Parkway area'],
    weatherNotes:
      'Red Bank sees the full range of Tennessee weather events. Many homes are from the 1960s–1980s with aging roofing systems due for replacement.',
    intro:
      'Red Bank is one of TVE\'s most active service areas — close to our Chattanooga home base with a mix of established neighborhoods and aging roofing systems ready for upgrades.',
  },
  {
    slug: 'hixson',
    name: 'Hixson',
    state: 'tennessee',
    stateShort: 'TN',
    stateName: 'Tennessee',
    lat: 35.1287,
    lng: -85.2452,
    neighborhoods: ['Chester Frost Park area', 'Shallowford', 'Middle Valley', 'Northgate'],
    weatherNotes:
      'Hixson sits along the Tennessee River corridor and is exposed to severe thunderstorms tracking up the river valley. Wind damage and hail are the primary storm concerns.',
    intro:
      'Hixson homeowners trust TVE for everything from emergency storm repairs to full roof replacements. We serve all of Hixson from Middle Valley to the Chester Frost Park corridor.',
  },
  {
    slug: 'soddy-daisy',
    name: 'Soddy Daisy',
    state: 'tennessee',
    stateShort: 'TN',
    stateName: 'Tennessee',
    lat: 35.2312,
    lng: -85.1906,
    neighborhoods: ['Soddy', 'Daisy', 'Sale Creek area', 'Hamilton Place area'],
    weatherNotes:
      'Soddy Daisy is located in a valley corridor that funnels severe storms from the northwest. Tornado watches and damaging wind events are not uncommon in spring and fall.',
    intro:
      'From the lakefront communities along Lake Chickamauga to the established neighborhoods throughout town, TVE provides dependable roofing and exterior services to Soddy Daisy homeowners.',
  },
  {
    slug: 'ooltewah',
    name: 'Ooltewah',
    state: 'tennessee',
    stateShort: 'TN',
    stateName: 'Tennessee',
    lat: 35.0812,
    lng: -85.0598,
    neighborhoods: ['Cambridge Square', 'Snow Hill', 'Georgetown', 'Collegedale area'],
    weatherNotes:
      "Ooltewah is one of Chattanooga's fastest-growing suburbs with many new builds in the 2010s–2020s that are now entering their first major repair or replacement cycle.",
    intro:
      "Ooltewah's rapid growth means a mix of newer homes under warranty and early 2000s builds now showing their age. TVE serves the full spectrum of Ooltewah's housing stock.",
  },
  {
    slug: 'cleveland',
    name: 'Cleveland',
    state: 'tennessee',
    stateShort: 'TN',
    stateName: 'Tennessee',
    lat: 35.1595,
    lng: -84.8766,
    neighborhoods: ['Westside', 'Mouse Creek', 'Georgetown Pike area', 'Keith Street'],
    weatherNotes:
      'Cleveland sits in the broad Hiwassee River valley and receives frequent severe thunderstorm events. Being 30 miles east of Chattanooga, it sees its own storm patterns independent of the metro.',
    intro:
      'TVE serves Cleveland homeowners with the same quality and communication our Chattanooga customers expect. From historic downtown homes to newer subdivisions west of town — we cover it all.',
  },

  // ── Georgia ────────────────────────────────────────────────────────────────
  {
    slug: 'dalton',
    name: 'Dalton',
    state: 'georgia',
    stateShort: 'GA',
    stateName: 'Georgia',
    lat: 34.7698,
    lng: -84.9702,
    neighborhoods: ['Dawnville', 'Tunnel Hill', 'Carbondale', 'North Dalton'],
    weatherNotes:
      'Dalton sits in the Conasauga River valley and sees intense spring storm seasons with significant hail events. The carpet industry heritage means many older warehouse-style buildings alongside residential neighborhoods.',
    intro:
      'TVE is the go-to roofing contractor for Dalton homeowners in North Georgia. We handle insurance claims, full replacements, and repairs throughout the Dalton area.',
  },
  {
    slug: 'ringgold',
    name: 'Ringgold',
    state: 'georgia',
    stateShort: 'GA',
    stateName: 'Georgia',
    lat: 34.9159,
    lng: -85.1079,
    neighborhoods: ['Boynton', 'Graysville', 'Tunnel Hill area'],
    weatherNotes:
      "Ringgold is directly in the path of severe storm systems tracking northeast from Alabama. The 2011 tornado outbreak caused significant damage in this area — many homes were rebuilt and are now 13+ years old.",
    intro:
      "Ringgold homeowners have seen severe weather firsthand. TVE helps navigate insurance claims and provides quality repairs and replacements throughout Catoosa County's largest city.",
  },
  {
    slug: 'fort-oglethorpe',
    name: 'Fort Oglethorpe',
    state: 'georgia',
    stateShort: 'GA',
    stateName: 'Georgia',
    lat: 34.9495,
    lng: -85.2596,
    neighborhoods: ['Battlefield area', 'Chickamauga Battlefield vicinity', 'LaFayette Road corridor'],
    weatherNotes:
      'Fort Oglethorpe shares Catoosa and Walker Counties with neighbors Ringgold and Chickamauga. Spring hail and summer wind events are the primary roofing concerns.',
    intro:
      'TVE serves Fort Oglethorpe and the surrounding Catoosa County communities. Whether you need a full replacement or a targeted repair, our team is just minutes away.',
  },
  {
    slug: 'chickamauga',
    name: 'Chickamauga',
    state: 'georgia',
    stateShort: 'GA',
    stateName: 'Georgia',
    lat: 34.8698,
    lng: -85.2907,
    neighborhoods: ['Gordon Lee area', 'Battlefield Parkway', 'Walker County'],
    weatherNotes:
      'Chickamauga is a smaller Walker County community with mostly older housing stock. Metal roofs are more common here than in the Chattanooga suburbs.',
    intro:
      'TVE serves the Chickamauga community in Walker County, GA. Our team handles everything from metal roof repairs to full shingle replacements on the historic homes throughout town.',
  },
  {
    slug: 'rossville',
    name: 'Rossville',
    state: 'georgia',
    stateShort: 'GA',
    stateName: 'Georgia',
    lat: 34.9831,
    lng: -85.2843,
    neighborhoods: ['Lakeview', 'Cloud Springs Road area', 'Alabama-Georgia border area'],
    weatherNotes:
      'Rossville sits at the Tennessee-Georgia state line and shares weather patterns with the Chattanooga metro. Many older homes in the area have roofs that are decades overdue for replacement.',
    intro:
      'Just across the Georgia state line from Chattanooga, Rossville homeowners get the same expert service and fair pricing as our Tennessee customers. TVE serves Rossville and all of Walker County.',
  },
  {
    slug: 'east-ridge',
    name: 'East Ridge',
    state: 'tennessee',
    stateShort: 'TN',
    stateName: 'Tennessee',
    lat: 35.0006,
    lng: -85.2281,
    neighborhoods: ['Glascock Hill', 'Camp Jordan area', 'McBrien Road area'],
    weatherNotes:
      'East Ridge is a suburban Tennessee community bordering Chattanooga to the southeast. It shares weather patterns with the metro and has a mix of housing ages typical of mid-century suburban development.',
    intro:
      'East Ridge homeowners are right in TVE\'s backyard. We serve all of East Ridge for roofing, siding, gutters, and exterior work — fast response times and local pricing.',
  },
]

/** Get all cities for a given state */
export function getCitiesByState(state: StateSlug): ServiceArea[] {
  return SERVICE_AREAS.filter((a) => a.state === state)
}

/** Get a city by its slug */
export function getCityBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((a) => a.slug === slug)
}

/** Get all adjacent cities (same state, excluding self) as internal link targets */
export function getNearbyCities(slug: string, limit = 4): ServiceArea[] {
  const city = getCityBySlug(slug)
  if (!city) return []
  return SERVICE_AREAS.filter((a) => a.state === city.state && a.slug !== slug).slice(0, limit)
}

export const STATES: { slug: StateSlug; name: string; short: 'TN' | 'GA' }[] = [
  { slug: 'tennessee', name: 'Tennessee', short: 'TN' },
  { slug: 'georgia', name: 'Georgia', short: 'GA' },
]
