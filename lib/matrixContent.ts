/**
 * Service × City matrix page content.
 * Each combination gets unique copy targeting "[service] in [city]" keywords.
 */

export interface MatrixContent {
  serviceSlug: string
  citySlug: string
  heroSubhead: string
  bodyParagraphs: string[]
  faqs: { q: string; a: string }[]
}

export const MATRIX_CONTENT: MatrixContent[] = [
  // ── Roof Replacement × Chattanooga ────────────────────────────────────────
  {
    serviceSlug: 'roof-replacement',
    citySlug: 'chattanooga',
    heroSubhead:
      'Full roof replacements in Chattanooga, TN — IKO and Owens Corning shingles, veteran-owned, no subcontractors.',
    bodyParagraphs: [
      "Roof replacement in Chattanooga is one of TVE's highest-volume services — and for good reason. The combination of intense summer UV exposure, frequent hail events in the spring, and the humidity that accelerates shingle degradation means Chattanooga roofs age faster than in many other markets. If your home is 15+ years old and hasn't had a professional inspection, there's a good chance replacement is on the horizon.",
      "TVE installs IKO Dynasty and Owens Corning Duration shingles on most Chattanooga roof replacements. Both products carry strong impact resistance ratings (Class 4) that can qualify Chattanooga homeowners for insurance discounts of 15–30% depending on your carrier. We walk every customer through the material selection process — there's no pressure to upgrade, but we do make sure you understand your options.",
      "Our Chattanooga roof replacement process starts with a thorough deck inspection before new materials go on. We document any soft spots, rot, or damaged decking boards and replace them at cost — no hidden markups. We install a full course of ice and water shield in all valleys and along the lower roof edge, self-sealing underlayment throughout, and properly-flashed penetrations at every pipe, vent, and chimney. The job isn't done until the cleanup is done.",
      "TVE doesn't use subcontractors on Chattanooga roofing projects. The crew that shows up on day one is the crew that finishes the job and cleans up afterward. That accountability matters when something needs to be addressed after the install — you deal directly with the people who did the work, not a call center.",
    ],
    faqs: [
      {
        q: 'How much does a roof replacement cost in Chattanooga, TN?',
        a: 'Most Chattanooga residential roof replacements range from $8,000 to $18,000 depending on roof size, pitch complexity, material selection, and deck condition. A standard 1,800 sq ft single-story home typically runs $10,000–$13,000 with mid-grade architectural shingles. Use our quote widget for a quick estimate, then schedule an in-person visit for a precise number.',
      },
      {
        q: 'How long does a roof replacement take in Chattanooga?',
        a: 'Most Chattanooga residential roof replacements are completed in one day for homes up to about 25 squares. Larger or more complex homes typically take 1.5–2 days. We schedule based on a full crew to ensure the job is completed before nightfall whenever possible.',
      },
      {
        q: "What is the best roofing shingle for Chattanooga's climate?",
        a: "For Chattanooga's combination of heat, humidity, hail, and UV exposure, we most often recommend IKO Dynasty or Owens Corning Duration shingles — both carry Class 4 impact resistance and AR (algae-resistant) granule formulations. The algae resistance is particularly important in Chattanooga's humid climate, where black streaking on roofs is common within 5–7 years without it.",
      },
      {
        q: "Will my insurance cover a roof replacement in Chattanooga?",
        a: "It depends on the cause and your policy. Storm damage (hail, wind) is typically covered minus your deductible. Age-related wear is generally not. TVE provides free storm damage assessments and works directly with insurance adjusters on your behalf. Many Chattanooga homeowners are surprised at what their adjuster approves when damage is properly documented.",
      },
    ],
  },

  // ── Roof Repair × Chattanooga ─────────────────────────────────────────────
  {
    serviceSlug: 'roof-repair',
    citySlug: 'chattanooga',
    heroSubhead:
      'Roof repair in Chattanooga — leak diagnosis, flashing repair, and targeted fixes that actually last.',
    bodyParagraphs: [
      "Roof repair in Chattanooga is a service we take seriously — not as a revenue opportunity to upsell a replacement, but as a legitimate solution when repair is genuinely the right answer. If your roof is less than 15 years old and the damage is localized, repair is almost always more economical than replacement. We'll give you an honest assessment.",
      "The most common Chattanooga roof repair calls we receive involve flashing failures at chimneys, skylights, and roof-to-wall intersections. These are the spots that even well-installed roofs eventually fail at — sealant dries out, metal flashing corrodes, and step flashing loses its seal at mortar joints. A properly executed flashing repair, using the right materials and techniques, can extend a roof's life by 5–10 years.",
      "Leak diagnosis is a skill in itself. Many Chattanooga homeowners have had a contractor out to 'fix the leak' only to have it return in the next heavy rain. We take a systematic approach — starting with the most likely entry points and working outward, looking at the whole drainage path, not just the obvious spot. We don't leave until we're confident we've found the source.",
      "TVE provides written repair estimates before touching anything. You'll know exactly what we're doing, why, and what it costs before we start. After the repair, we document the work with photos for your records and for any future insurance purposes.",
    ],
    faqs: [
      {
        q: 'How do I know if I need a roof repair or a full replacement in Chattanooga?',
        a: "The decision typically comes down to roof age, extent of damage, and economics. If your roof is under 15 years old and the damage is localized (one area of missing shingles, a failed flashing detail, a single leak point), repair is usually the right call. If the roof is 20+ years old, has widespread granule loss, or has had multiple repairs that haven't held, replacement is likely more cost-effective. TVE gives you an honest recommendation either way.",
      },
      {
        q: 'Can TVE fix a roof leak during rainy season in Chattanooga?',
        a: "Yes — we prioritize active leak repairs. If you have a leak, call us. We can often assess the source and provide an emergency temporary fix (caulk, sealant, or tarping) within 24 hours, then schedule the permanent repair when conditions allow.",
      },
      {
        q: 'Why did my Chattanooga roof leak again after being repaired?',
        a: "The most common reason is misdiagnosis — the repair addressed a symptom rather than the actual entry point. Water travels along structural members before dripping, so the visible leak often appears feet away from where water is entering. TVE uses a systematic diagnostic approach to find the actual source, not just the nearest suspect.",
      },
    ],
  },

  // ── Storm Damage × Chattanooga ────────────────────────────────────────────
  {
    serviceSlug: 'storm-damage',
    citySlug: 'chattanooga',
    heroSubhead:
      'Storm damage roof repair in Chattanooga — hail, wind, and insurance claim expertise.',
    bodyParagraphs: [
      "Chattanooga sits in a geographic bowl that concentrates storm energy between Lookout Mountain and Signal Mountain. Spring hail events are annual, and the Tennessee Valley's storm season runs from March through October with real intensity. TVE has processed dozens of Chattanooga insurance claims and knows what adjusters look for, what they try to minimize, and how to advocate for the full coverage our clients have been paying for.",
      "The insurance claim process intimidates many Chattanooga homeowners into accepting less than they're entitled to. They get an adjuster's estimate, it seems low, but they don't know enough to push back. TVE is your advocate in that process — we know the language, we document damage to adjuster standards from day one, and we follow up until the claim is resolved fairly.",
      "After a severe storm event, TVE deploys inspection teams throughout Chattanooga to document damage while it's fresh. Time matters in storm damage claims — the longer you wait, the easier it is for an insurer to attribute existing wear as the cause. If Chattanooga has had a major storm event recently, call us now even if you don't see obvious damage. Hail damage often isn't visible from the ground.",
      "We handle all phases of storm restoration: emergency tarping to prevent further damage, full documentation for the insurance claim, replacement installation once the claim is approved, and final inspection to ensure everything meets manufacturer specifications for the warranty to be valid.",
    ],
    faqs: [
      {
        q: 'How do I file a roof insurance claim in Chattanooga?',
        a: "Start by calling TVE for a free damage assessment before you contact your insurance company. We document everything properly — photos, measurements, written scope — then help you file the claim with accurate documentation. Once the adjuster comes out, we meet them on-site to ensure all damage is accounted for. We handle the back-and-forth so you don't have to.",
      },
      {
        q: 'What does hail damage look like on a Chattanooga roof?',
        a: "Hail damage typically appears as random circular impact points on shingles where the granule coating has been knocked away, exposing the darker asphalt below. It may also appear on metal components — flashing, gutters, HVAC vents — as small dents. It's often not visible from the ground, which is why a professional inspection after any significant hail event is worthwhile.",
      },
      {
        q: "Is it worth filing a storm damage claim for my Chattanooga roof?",
        a: "Get the damage assessed first. If there's legitimate storm damage that would cost more than your deductible to repair, filing is generally worth it — especially since storm damage claims typically don't raise your premium the same way fault claims (like auto accidents) do in Tennessee. TVE can help you understand the economics before you commit to filing.",
      },
    ],
  },

  // ── Gutters × Chattanooga ─────────────────────────────────────────────────
  {
    serviceSlug: 'gutters',
    citySlug: 'chattanooga',
    heroSubhead:
      'Seamless gutter installation in Chattanooga, TN — 5" and 6" aluminum, same-day installs.',
    bodyParagraphs: [
      "Gutter installation and replacement is one of TVE's highest-frequency services in Chattanooga. The city's annual rainfall averages 54 inches — among the highest in Tennessee — which means gutter system performance is genuinely critical. Undersized, improperly sloped, or poorly-attached gutters lead to foundation erosion, basement moisture intrusion, and fascia board rot that compounds into much more expensive repairs.",
      "We install seamless aluminum gutters fabricated on-site from coil stock — no joints along the run except at corners and downspout connections. Seamless gutters eliminate the leaking seams that plagued older sectional systems and are the industry standard for a reason. We carry standard 5-inch K-style and 6-inch K-style gutters, as well as half-round profiles for homes where aesthetics demand it.",
      "Proper gutter installation in Chattanooga isn't just about hanging the material — it's about sizing downspouts correctly for the roof area they drain, routing water away from foundation areas, and ensuring slope is consistent throughout the run. We calculate the required downspout capacity for every Chattanooga home we work on and install accordingly.",
      "For Chattanooga homes with heavy tree canopy, we often recommend micro-mesh leaf guards — particularly in the neighborhoods around North Chattanooga and the wooded lots in Lookout Valley and Hixson. Clean gutters don't overflow, and they don't require bi-annual cleaning service calls.",
    ],
    faqs: [
      {
        q: "What size gutters do I need for my Chattanooga home?",
        a: "Most Chattanooga homes benefit from 5-inch K-style gutters, which handle adequate water volume for typical residential roof areas. Larger homes, steeply-pitched roofs, or homes with extended overhangs often warrant 6-inch gutters or an additional downspout. TVE calculates the appropriate sizing based on your specific roof geometry — not a one-size-fits-all answer.",
      },
      {
        q: 'Are seamless gutters worth it in Chattanooga?',
        a: "Yes — seamless gutters are the only type TVE installs in Chattanooga. With 54+ inches of annual rainfall, leaking seams in sectional gutters are a real problem. Seamless gutters eliminate that failure point and typically last 20+ years with minimal maintenance when properly installed.",
      },
      {
        q: 'Do I need gutter guards in Chattanooga?',
        a: "If your property has significant tree canopy — common in North Chattanooga, Lookout Valley, Hixson, and older Brainerd neighborhoods — gutter guards are a worthwhile investment. Micro-mesh guards prevent the debris accumulation that causes overflows and ice dams without restricting water flow. We install them on roughly half of our Chattanooga gutter projects.",
      },
    ],
  },

  // ── Siding × Chattanooga ──────────────────────────────────────────────────
  {
    serviceSlug: 'siding',
    citySlug: 'chattanooga',
    heroSubhead:
      'Siding replacement in Chattanooga — Hardie Board, LP SmartSide, and vinyl siding done right.',
    bodyParagraphs: [
      "Siding replacement in Chattanooga is increasingly popular as the wave of 1990s–2000s vinyl-sided homes ages out. Original vinyl siding from that era is often warped, faded, cracked, or simply dated — and homeowners who have lived with it for 20 years are ready for something better. TVE does a lot of Chattanooga siding work, and the transformation from old vinyl to fresh Hardie Board is dramatic.",
      "James Hardie HardiePlank fiber cement siding is our most-specified product for Chattanooga homes. It's resistant to Chattanooga's combination of heat, humidity, wood-boring insects, and the severe hail that passes through the area annually. It holds paint for 15+ years, it doesn't warp or buckle in summer heat, and it carries a 30-year warranty. For the long-term homeowner who wants to be done with siding maintenance, it's the right choice.",
      "LP SmartSide is our second-most common recommendation for Chattanooga siding. It's engineered wood — stronger than fiber cement in impact tests, with a more natural wood grain texture that some homeowners prefer aesthetically. It's also slightly more cost-effective than Hardie Board. For Chattanooga homeowners who want the look of wood siding without the wood maintenance, LP SmartSide is an excellent option.",
      "Our Chattanooga siding installations start with a full assessment of the existing wall system — sheathing condition, moisture barrier integrity, and any rot at corner trim or window surrounds that needs to be addressed before new siding goes on. New siding over a compromised wall system is money wasted.",
    ],
    faqs: [
      {
        q: 'How much does siding replacement cost in Chattanooga, TN?',
        a: "Full siding replacement on a Chattanooga home typically ranges from $12,000 to $35,000 depending on home size, material selection, and the condition of existing sheathing and trim. Hardie Board and LP SmartSide projects typically run $14,000–$28,000 for a 1,800–2,400 sq ft home. Vinyl siding is less expensive. Use our quote widget for a range, then schedule an in-person assessment for a firm price.",
      },
      {
        q: 'Is Hardie Board worth the cost over vinyl siding in Chattanooga?',
        a: "For most Chattanooga homeowners planning to stay in their home long-term, yes. Hardie Board costs 30–50% more than vinyl upfront, but it lasts significantly longer, holds paint 2–3x longer, is far more impact-resistant, and requires less maintenance. The total cost of ownership over 20–30 years typically favors Hardie Board. Vinyl is the better choice for a flip or a shorter ownership horizon.",
      },
    ],
  },

  // ── Roof Replacement × Dalton ─────────────────────────────────────────────
  {
    serviceSlug: 'roof-replacement',
    citySlug: 'dalton',
    heroSubhead:
      'Roof replacement in Dalton, GA — quality installation, insurance claim expertise, no storm chasers.',
    bodyParagraphs: [
      "Dalton homeowners have seen too many out-of-town roofing contractors blow through after storm events, collect deposits, and deliver mediocre work before moving to the next storm. TVE is not that. We're based in Chattanooga, 30 minutes away, and we intend to be doing roofing in Dalton for years to come. Our reputation in this market matters to us.",
      "Roof replacement in Dalton typically follows hail events from the spring storm season that tracks northeast through the Conasauga River valley. We see significant hail activity in the Dalton area annually, and many homeowners don't realize they have claimable damage until a leak develops — by then, insurance is harder to invoke. TVE offers free post-storm inspections throughout the Dalton area.",
      "We install Owens Corning and IKO shingles in Dalton, both of which carry strong manufacturer warranties and impact resistance ratings that can qualify Georgia homeowners for insurance discounts. We are licensed and insured for Georgia residential roofing work, and we pull all required permits through the City of Dalton Building Department as part of our standard process.",
      "For Dalton property managers with multiple residential units, TVE offers coordination services — we can inspect multiple properties in a single trip, sequence the replacements, and provide a unified invoicing structure. Call us to discuss multi-property arrangements.",
    ],
    faqs: [
      {
        q: 'Does TVE pull building permits for roof replacements in Dalton, GA?',
        a: "Yes — permit pulling is part of our standard process in Dalton. The City of Dalton requires a building permit for full roof replacements. TVE handles the permitting process, and the cost is included in your project quote. Never hire a Dalton roofer who wants to skip the permit — it's a red flag for quality and can create issues when you sell.",
      },
      {
        q: 'Is TVE licensed for roofing in Georgia?',
        a: "Yes — TVE carries Georgia residential contractor licensing and maintains workers compensation and general liability insurance coverage. We can provide proof of licensing and insurance with any Dalton project quote.",
      },
      {
        q: 'How do I know if my Dalton roof was damaged in the last storm?',
        a: "Most hail damage isn't visible from the ground. Call TVE for a free inspection after any significant storm event in the Dalton area. We'll get up on the roof, document what we find, and give you an honest assessment of whether the damage warrants an insurance claim.",
      },
    ],
  },

  // ── Roof Repair × Signal Mountain ─────────────────────────────────────────
  {
    serviceSlug: 'roof-repair',
    citySlug: 'signal-mountain',
    heroSubhead:
      'Roof repair on Signal Mountain — steep pitches, mountain exposure, fixed right.',
    bodyParagraphs: [
      "Roof repair on Signal Mountain requires different skills than valley roofing. The steep pitches common on Signal Mountain homes mean proper fall protection, toe boards, and elevated safety protocols are necessary — not optional. TVE's crew is equipped for steep-pitch work and approaches every Signal Mountain repair job with that in mind.",
      "The most common repair needs we see on Signal Mountain are related to ice damage and wind exposure. Ice dam formation along the lower roof edge — where ice backs up under shingles when the snow melts faster on the warm upper deck than at the cold eaves — can force water into the structure even with a good roof. Ice and water shield installation, extended up the slope beyond what's typically required, is the preventive solution. We address ice dam damage thoroughly when we encounter it.",
      "Wind damage repair on Signal Mountain often involves resetting lifted shingles and re-nailing wind-lifted ridge caps. The elevation means Signal Mountain sees higher sustained winds than the valley, particularly in winter storm systems. If shingles are lifting in wind events, the sealing strip may have failed — an addressable repair that prevents the shingles from becoming a larger problem.",
      "We also handle chimney and skylight flashing repairs on Signal Mountain homes — these are disproportionately common due to the ice and wind cycles that stress the seals around penetrations more aggressively than in lower elevations.",
    ],
    faqs: [
      {
        q: 'Can you repair a roof on a steep-pitched home on Signal Mountain?',
        a: "Yes — steep-pitch repair work is a core TVE capability. We carry the proper fall protection equipment and follow OSHA safety standards for steep-slope roofing. We do not send crews onto Signal Mountain roofs without proper protection — and you should be skeptical of any contractor who would.",
      },
      {
        q: 'What causes ice dams on Signal Mountain roofs?',
        a: "Ice dams form when heat from the living space warms the upper roof deck, melting snow that then refreezes at the cold overhang where there's no heat from below. The resulting ice dam forces meltwater up and under shingles. The root cause is usually inadequate attic insulation or ventilation — the repair addresses the damage, but the real fix is improving the thermal performance of the attic.",
      },
    ],
  },

  // ── Roof Replacement × Cleveland ──────────────────────────────────────────
  {
    serviceSlug: 'roof-replacement',
    citySlug: 'cleveland',
    heroSubhead:
      'Roof replacement in Cleveland, TN — Bradley County homeowners, same TVE quality.',
    bodyParagraphs: [
      "TVE extends its full roof replacement service to Cleveland and all of Bradley County. We made the decision to serve Cleveland because the homeowners there deserved access to a contractor who brings Chattanooga-quality standards without the drive to Chattanooga to find them. We're on-site in Cleveland regularly and maintain strong local references throughout the community.",
      "Cleveland sees its own storm patterns that are distinct from the Chattanooga metro. The river corridors running through Bradley County produce intense convective storms in the spring and summer. We've responded to significant hail events in the Cleveland area and have the insurance claim experience to help Cleveland homeowners navigate the process effectively.",
      "Our Cleveland roof replacements follow the same process as every TVE project: full deck assessment, ice and water shield in all valleys, self-sealing underlayment, properly-flashed penetrations, and a thorough final inspection. We pull permits through the City of Cleveland Building Department on all replacement projects as part of our standard scope.",
      "Cleveland homeowners with questions about what roofing products are best for the Bradley County climate — and what insurance rating benefits certain products might unlock — are welcome to call us. We take the time to walk through the options at no cost and no obligation.",
    ],
    faqs: [
      {
        q: "Does TVE service Cleveland, TN for roof replacements?",
        a: "Yes — Cleveland is fully within our service area. We schedule Cleveland roof replacements regularly and can typically get you on the schedule within 1–2 weeks for non-emergency projects. Storm damage response is faster.",
      },
      {
        q: "What permits are needed for a roof replacement in Cleveland, TN?",
        a: "The City of Cleveland requires a building permit for full roof replacements. TVE pulls permits as part of our standard process — it's included in your quote. The permit requirement also means an inspection by the city building department, which is your independent verification that the work meets code.",
      },
      {
        q: "Can TVE install metal roofing in Cleveland, TN?",
        a: "Yes — metal roofing is an option we offer in Cleveland. Standing seam metal roofs are increasingly popular in the Bradley County area for their longevity (50+ years), hail resistance, and energy efficiency. The upfront cost is higher than shingles, but the long-term value case is strong.",
      },
    ],
  },
]

/** Get content for a specific service × city combination */
export function getMatrixContent(serviceSlug: string, citySlug: string): MatrixContent | undefined {
  return MATRIX_CONTENT.find(
    (m) => m.serviceSlug === serviceSlug && m.citySlug === citySlug
  )
}
