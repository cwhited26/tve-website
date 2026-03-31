export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceTier {
  name: string
  description: string
  examples: string[]
}

export interface ServiceData {
  slug: string
  name: string
  shortName: string
  heroTagline: string
  metaTitle: string
  metaDescription: string
  h1: string
  /** Primary keyword for schema and internal linking */
  primaryKeyword: string
  /** 2-3 descriptive paragraphs — informative, not fluffy */
  body: string[]
  benefits: string[]
  /** Good/Better/Best tiers — not every service needs these */
  tiers?: ServiceTier[]
  faqs: ServiceFAQ[]
  /** Slugs of 3 related services */
  relatedServices: string[]
  /** Icon name from lucide-react (matches constants.ts) */
  icon: string
}

export const SERVICE_DATA: ServiceData[] = [
  // ─── 1. ROOF REPLACEMENT ──────────────────────────────────────────────────
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortName: "Roof Replacement",
    heroTagline: "A new roof that lasts — installed right the first time.",
    metaTitle: "Roof Replacement Chattanooga TN",
    metaDescription:
      "Full roof replacement in Chattanooga and North Georgia by Tennessee Valley Exteriors. Premium shingles, expert installation, and a workmanship warranty you can count on.",
    h1: "Roof Replacement in Chattanooga & North Georgia",
    primaryKeyword: "roof replacement Chattanooga",
    body: [
      "Your roof is the most critical envelope around your home. When it fails — whether from age, storm damage, or years of deferred maintenance — every room below is at risk. A full roof replacement from Tennessee Valley Exteriors means stripping the old materials down to the deck, inspecting and repairing any rotted sheathing, installing code-compliant underlayment and ice-and-water shield, and finishing with the shingle product that matches your budget, your home's architecture, and Chattanooga's climate demands.",
      "We install roofs using IKO Dynasty, Owens Corning Duration, and GAF Timberline HDZ shingles — all of which carry Class 4 impact resistance ratings that can reduce your homeowner's insurance premium. Our installs follow manufacturer guidelines to the letter, which is what activates the full material warranty (some warranties run 50 years or lifetime). Every job gets proper ventilation assessment — a common step that cut-rate contractors skip, but one that directly determines whether your roof lives its full lifespan or fails prematurely.",
      "We're a small crew, not a storm-chasing franchise. When you hire TVE, Chase and his team are physically on your roof — not subcontracted to whoever was available that week. We communicate proactively, show up when we say we will, and clean up completely before we leave. If something doesn't look right during teardown, you'll hear about it before it becomes a surprise on the invoice.",
    ],
    benefits: [
      "Full deck inspection and repair before new materials go down",
      "Class 4 impact-resistant shingles available — potential insurance savings",
      "Proper ventilation assessment and ridge vent installation",
      "Manufacturer-certified installation activates full material warranty",
      "Magnetic nail sweep for thorough cleanup",
      "Same-crew installation — no subcontracting surprises",
      "Photo documentation of before, during, and after",
    ],
    tiers: [
      {
        name: "Good — 3-Tab / Entry Laminate",
        description:
          "Budget-friendly option suitable for investment properties or when resale is the primary goal. Standard 25-year warranty.",
        examples: ["IKO Cambridge", "Owens Corning Supreme"],
      },
      {
        name: "Better — Architectural Laminate",
        description:
          "Our most popular choice. Dimensional appearance, 30-year warranty, and good wind resistance. The right pick for most Chattanooga homes.",
        examples: ["IKO Dynasty", "Owens Corning Duration", "GAF Timberline HDZ"],
      },
      {
        name: "Best — Impact-Resistant / Designer",
        description:
          "Class 4 IR rating, 50-year or lifetime warranties, and a premium look. Best long-term value and may qualify for insurance discounts.",
        examples: ["IKO Nordic", "Owens Corning Duration Storm", "GAF Camelot II"],
      },
    ],
    faqs: [
      {
        question: "How long does a roof replacement take?",
        answer:
          "Most single-family homes in Chattanooga can be completed in one day. Larger homes, steeper pitches, or decks that need significant repair may take two days. We will give you a realistic timeline during your estimate — not the fastest-sounding number to win the job.",
      },
      {
        question: "When is repair a better option than replacement?",
        answer:
          "If your roof is under 15 years old, the damaged area is isolated (one slope or less than 30% of total), and the underlayment is still sound, repair often makes economic sense. We always tell you honestly which path fits your situation — we are not in the business of upselling replacements when a repair will do.",
      },
      {
        question: "What shingles do you recommend for Chattanooga?",
        answer:
          "Chattanooga sits in a high-hail and wind corridor, so we strongly recommend architectural shingles with at least a Class H wind rating and Class 4 impact resistance. IKO Dynasty and Owens Corning Duration are our go-to mid-range options. They hold up against the spring hail seasons that hit the Tennessee Valley hard.",
      },
      {
        question: "Do you handle the permit?",
        answer:
          "Yes. We pull the permit, schedule the inspection, and make sure everything is signed off before we consider the job closed. Never let a contractor talk you into skipping the permit — it can affect your insurance claim and your ability to sell the home.",
      },
      {
        question: "Will my homeowner's insurance cover replacement?",
        answer:
          "If the damage was caused by a storm event (hail, wind, fallen tree), your policy very likely covers replacement minus your deductible. We work with insurance adjusters regularly and can walk you through the claim process. See our Storm Damage page for more detail.",
      },
      {
        question: "How do I know if I need a new roof?",
        answer:
          "Key signs: curling or missing shingles, granule loss visible in gutters, daylight visible in the attic, water stains on interior ceilings, or a roof age of 20+ years. Our free 25-point inspection will give you a definitive answer with photos.",
      },
    ],
    relatedServices: ["roof-repair", "storm-damage", "inspections"],
    icon: "Home",
  },

  // ─── 2. ROOF REPAIR ───────────────────────────────────────────────────────
  {
    slug: "roof-repair",
    name: "Roof Repair",
    shortName: "Roof Repair",
    heroTagline: "Stop the leak before it becomes a catastrophe.",
    metaTitle: "Roof Repair Chattanooga TN",
    metaDescription:
      "Emergency and routine roof repair in Chattanooga TN by Tennessee Valley Exteriors. We find the source of the leak, fix it right, and back it with a workmanship warranty.",
    h1: "Roof Repair in Chattanooga & North Georgia",
    primaryKeyword: "roof repair Chattanooga",
    body: [
      "A roof leak is never just a wet spot on your ceiling. Water follows structural paths — rafters, insulation, drywall, electrical boxes — and what started as a minor intrusion can become mold, rot, and structural damage within months. Fast, accurate roof repair is the difference between a few hundred dollars and a five-figure remediation project.",
      "Tennessee Valley Exteriors diagnoses leaks correctly. That sounds basic, but it's where a lot of contractors fail. They patch the obvious spot and leave the root cause untouched. We trace the water path back to the actual entry point — which is almost never directly above where it appears inside — and fix the source. Common culprits include failed flashing around chimneys, skylights, and pipe boots; lifted or missing shingles from wind events; cracked ridge cap; and deteriorated valley seals.",
      "We repair roofs using materials that match your existing system. If you have a 10-year-old architectural shingle roof, we use comparable materials that blend in rather than sticking out as an obvious patch. And we back our repair work with a workmanship warranty. If the repaired area leaks again due to our work, we come back and fix it at no charge.",
    ],
    benefits: [
      "Emergency response available for active leaks",
      "Thermal imaging available for hard-to-trace leaks",
      "Source diagnosis, not just symptom patching",
      "Material matching for seamless appearance",
      "Workmanship warranty on all repair work",
      "Interior damage assessment included",
      "Honest assessment — repair vs. replace recommendation",
    ],
    faqs: [
      {
        question: "How quickly can you respond to an emergency roof leak?",
        answer:
          "We prioritize emergency calls and aim to have someone on-site within 24 hours for active leaks in the Chattanooga metro area. For storms that affect multiple homes simultaneously, we triage by severity. We will always give you an honest ETA rather than promising a time we cannot keep.",
      },
      {
        question: "Can you patch my roof temporarily until I can afford a full replacement?",
        answer:
          "Yes, and we will tell you upfront how long a temporary repair is likely to hold. A quality patch using compatible materials can buy you one to three years in many cases. We will document the condition and give you a clear picture of what the full replacement will cost so you can plan accordingly.",
      },
      {
        question: "My ceiling has a water stain but no active drip. Do I still need a repair?",
        answer:
          "Almost certainly yes. A dried stain means water has already entered. The source is still there and will leak again with the next rain event. We recommend getting a free inspection before it becomes an active problem again.",
      },
      {
        question: "What is flashing and why does it fail?",
        answer:
          "Flashing is the metal (usually aluminum or galvanized steel) that seals transitions — where the roof meets a wall, chimney, skylight, or vent pipe. It fails because of thermal expansion and contraction over years, caulk drying out, and improper original installation. Re-flashing is one of the most common and most important repairs we perform.",
      },
      {
        question: "Is roof repair covered by homeowners insurance?",
        answer:
          "If damage was caused by a covered peril — storm, hail, wind, fallen tree — your policy likely applies. Wear and tear or deferred maintenance is generally not covered. We will document the damage thoroughly and work with your adjuster.",
      },
    ],
    relatedServices: ["roof-replacement", "storm-damage", "inspections"],
    icon: "Wrench",
  },

  // ─── 3. GUTTERS ───────────────────────────────────────────────────────────
  {
    slug: "gutters",
    name: "Gutters & Downspouts",
    shortName: "Gutters",
    heroTagline: "Protect your foundation — one raindrop at a time.",
    metaTitle: "Seamless Gutter Installation Chattanooga TN",
    metaDescription:
      "Seamless aluminum gutter installation and gutter guard systems in Chattanooga TN. Tennessee Valley Exteriors — custom-formed gutters, proper slope, no leaky seams.",
    h1: "Seamless Gutter Installation in Chattanooga & North Georgia",
    primaryKeyword: "gutter installation Chattanooga",
    body: [
      "Gutters are the most overlooked exterior system on most homes, and that oversight is expensive. In Chattanooga's climate — averaging 53 inches of rainfall per year — gutters that overflow, leak, or drain too close to the foundation cause basement moisture intrusion, landscaping erosion, wood rot on fascia and soffits, and long-term foundation settlement. A properly installed gutter system collects water off the roof and moves it at least six feet away from the foundation.",
      "We fabricate seamless gutters on-site using a roll-forming machine. That means your gutters are cut to the exact length of each run — no end-to-end seams that leak over time, no mismatched sections, and a cleaner look from the street. We install 5-inch K-style gutters for most residential applications and 6-inch for steep or large roof areas. Downspouts are sized and positioned for the actual drainage load, not just placed wherever is convenient.",
      "Gutter guards are worth the investment on homes surrounded by trees — a common situation in the neighborhoods around Signal Mountain, Lookout Mountain, and Hixson. We install micro-mesh guards that block pine needles, shingle granules, and seed pods while allowing full water flow. We will tell you honestly if guards are worth it for your specific tree situation rather than up-selling them to every customer.",
    ],
    benefits: [
      "Custom on-site seamless fabrication — no seam leaks",
      "Properly sloped installation for drainage (1/4 inch per 10 ft)",
      "Hidden hanger system rated for Tennessee ice loads",
      "Downspout extensions away from foundation",
      "Color-matched to your trim from 30+ color options",
      "Fascia repair included if rotted from old gutter overflow",
      "Micro-mesh gutter guard option for wooded lots",
    ],
    faqs: [
      {
        question: "What is the difference between seamless and sectional gutters?",
        answer:
          "Sectional gutters come in pre-cut lengths joined with connectors — every connector is a potential leak point. Seamless gutters are fabricated from a continuous coil of aluminum on-site, with seams only at corners and downspouts. Seamless gutters look better, last longer, and are significantly less likely to leak.",
      },
      {
        question: "How often should gutters be replaced?",
        answer:
          "Aluminum seamless gutters typically last 20 years or more with basic maintenance. Most gutter replacements we see are due to improper original installation (incorrect slope, inadequate hangers) rather than material failure. If your gutters are pulling away from the fascia, have standing water, or are overflowing at the seams, it is time to replace.",
      },
      {
        question: "Do I need gutter guards?",
        answer:
          "It depends on your tree coverage. Homes under heavy tree cover — especially pine trees, which shed year-round — benefit significantly from micro-mesh guards. Homes in open neighborhoods can often manage with twice-yearly cleaning. We will look at your situation and give you an honest recommendation.",
      },
      {
        question: "Can you repair gutters or do you only replace?",
        answer:
          "We do both. If your gutters are otherwise in good shape but have a sagging section, a failed seam, or a damaged downspout, repair is often the right call. We will give you a side-by-side cost comparison of repair vs. replacement so you can make an informed decision.",
      },
      {
        question: "What size gutters does my home need?",
        answer:
          "5-inch K-style gutters handle most residential applications. Homes with steep roof pitches, large roof areas, or high annual rainfall benefit from 6-inch gutters. Undersized gutters overflow during heavy rain events — which is exactly what you are trying to prevent.",
      },
    ],
    relatedServices: ["roof-replacement", "siding", "painting"],
    icon: "Droplets",
  },

  // ─── 4. SIDING ────────────────────────────────────────────────────────────
  {
    slug: "siding",
    name: "Siding",
    shortName: "Siding",
    heroTagline: "The exterior that defines your home for the next 30 years.",
    metaTitle: "Siding Installation Chattanooga TN — Hardie Board, LP SmartSide & Vinyl",
    metaDescription:
      "Professional siding installation in Chattanooga TN. Tennessee Valley Exteriors installs James Hardie fiber cement, LP SmartSide, CraneBoard vinyl, and more. Free estimates.",
    h1: "Siding Installation in Chattanooga & North Georgia",
    primaryKeyword: "siding contractor Chattanooga",
    body: [
      "Your siding is doing three jobs simultaneously: protecting your home's structural sheathing from moisture and pests, regulating thermal performance, and defining the visual character of your property. When siding fails — whether from impact damage, wood rot behind old vinyl, or simply end-of-life deterioration — the consequences go well beyond curb appeal. Water infiltration behind failed siding is one of the leading causes of structural rot in East Tennessee homes.",
      "We install four primary siding products, each with a distinct set of trade-offs. James Hardie HardiePlank fiber cement is our most-installed product — it holds paint exceptionally well, is dimensionally stable in temperature swings, and resists impact damage from the hail events that hit Chattanooga each spring. LP SmartSide engineered wood offers a warmer, more traditional look with similar durability and is particularly popular in Signal Mountain and Lookout Mountain neighborhoods. CraneBoard solid-core vinyl is our budget-friendly option for investment properties where longevity on a lower initial investment is the priority. For modern or craftsman-style homes, we also install vertical board-and-batten profiles in fiber cement or engineered wood.",
      "Siding installation done right requires attention to flashing at every window and door, proper moisture barrier integration, correct fastening schedules, and caulk application that will actually hold. Cutting corners on any of these steps creates paths for water intrusion that won't show up for two or three years — long after the crew has moved on. We document our installs with photos at every stage, so you have proof of what is behind your walls.",
    ],
    benefits: [
      "Authorized installer for James Hardie and LP SmartSide",
      "Proper moisture barrier and house wrap installation",
      "Flashing at all window, door, and penetration transitions",
      "Full trim replacement included (corner boards, J-channel, rake boards)",
      "Disposal and haul-away of old siding",
      "Paint-ready primer coat on fiber cement products",
      "Photo documentation of sheathing condition before install",
    ],
    tiers: [
      {
        name: "Value — CraneBoard Solid-Core Vinyl",
        description:
          "Solid-core construction (not hollow like big-box vinyl) for better impact resistance. Low maintenance, no painting required. Good choice for rental properties.",
        examples: ["CraneBoard 5-inch Solid Core", "CraneBoard Beaded Soffit"],
      },
      {
        name: "Mid-Range — LP SmartSide Engineered Wood",
        description:
          "Treated engineered wood with a natural grain texture. Holds paint well, resists insects and moisture, and has a warmer look than fiber cement. 5/50 year warranty.",
        examples: ["LP SmartSide 4-inch Lap Siding", "LP SmartSide Trim & Fascia"],
      },
      {
        name: "Premium — James Hardie Fiber Cement",
        description:
          "Industry-standard premium siding. Non-combustible, dimensionally stable, 30-year paint warranty on ColorPlus products. The highest long-term value.",
        examples: ["HardiePlank Lap Siding", "HardiePanel Vertical", "HardieShingle"],
      },
    ],
    faqs: [
      {
        question: "Is fiber cement siding worth the extra cost over vinyl?",
        answer:
          "For most homeowners in Chattanooga who plan to stay in their home 10+ years, yes. Fiber cement holds paint 2-3x longer than vinyl (which cannot be painted), resists hail and impact damage that dents vinyl, and does not fade or chalk in the Tennessee sun. The premium is real but so is the long-term value.",
      },
      {
        question: "How long does siding installation take?",
        answer:
          "A typical single-story home takes 3-5 days. Two-story or multi-elevation homes run 5-8 days. We give you a specific estimate for your home after the site visit, not a generic range designed to set low expectations.",
      },
      {
        question: "Can I paint my new siding any color?",
        answer:
          "Yes, with some product-specific notes. LP SmartSide and plain Hardie come primed for field painting. Hardie ColorPlus products come factory-painted with a 30-year warranty, which most customers prefer because of the durability advantage. Vinyl siding cannot be painted effectively — if you want a color change, replacement is the right path.",
      },
      {
        question: "What happens if there is rot behind my current siding?",
        answer:
          "This is one of the most important reasons to hire an experienced installer. During teardown we inspect the sheathing and framing for moisture damage. Any rotted material gets replaced before the new siding goes on. We document everything and price sheathing repair separately so you can see exactly what you are paying for.",
      },
      {
        question: "Do you install soffit and fascia as well?",
        answer:
          "Yes. Soffits and fascia are part of the siding system and should be replaced at the same time in most cases. We install aluminum soffit and fascia or match the profile to your primary siding material.",
      },
    ],
    relatedServices: ["painting", "gutters", "roof-replacement"],
    icon: "Layers",
  },

  // ─── 5. DECKS ─────────────────────────────────────────────────────────────
  {
    slug: "decks",
    name: "Composite Decks",
    shortName: "Decks",
    heroTagline: "Outdoor living that looks great and requires zero maintenance.",
    metaTitle: "Composite Deck Builder Chattanooga TN",
    metaDescription:
      "Composite deck construction in Chattanooga TN by Tennessee Valley Exteriors. Trex, TimberTech, and Fiberon decking — built to code with a transferable warranty.",
    h1: "Composite Deck Construction in Chattanooga & North Georgia",
    primaryKeyword: "deck builder Chattanooga",
    body: [
      "Chattanooga's outdoor lifestyle — warm springs, long falls, and access to the Tennessee River and surrounding ridges — makes a quality deck one of the highest-ROI projects a homeowner can invest in. According to national remodeling data, a composite deck returns 65-70% of its cost at resale, and for homes in desirable neighborhoods like Lookout Mountain, East Brainerd, or the North Shore, the return is often higher. But the real value is the years of outdoor living before you sell.",
      "We build composite decks using Trex, TimberTech, and Fiberon — the three leading composite deck brands. All three use a capped composite construction that resists fading, staining, and mold in ways that pressure-treated wood simply does not. The key difference from wood: no annual sealing or staining, no splinters, and a surface that looks essentially the same after 15 years with basic cleaning. We build on pressure-treated framing, use hidden fastener systems for a clean look, and install code-compliant railing systems that actually hold when someone leans on them.",
      "Every deck we build is permitted and inspected. Some contractors skip this step because pulling a permit requires meeting setback, footing, and structural code requirements that take more time and material. But an unpermitted deck creates problems at sale time, is not covered by homeowners insurance if something goes wrong, and — most importantly — may not be structurally safe. We build decks that are there to stay.",
    ],
    benefits: [
      "Trex, TimberTech, or Fiberon decking — 25-year fade and stain warranty",
      "Pressure-treated or structural steel framing built to code",
      "Permit pulled and inspected — no shortcuts",
      "Hidden fastener system for clean surface appearance",
      "Cable, glass panel, or composite railing options",
      "Integrated lighting available in railing posts and fascia",
      "Haul-away of old deck material",
    ],
    faqs: [
      {
        question: "Is composite decking worth the premium over pressure-treated wood?",
        answer:
          "For most homeowners, yes. Composite decking costs 30-50% more upfront but eliminates the annual maintenance cost of sealing and staining (typically $300-600 per year on a mid-size deck). Over 15 years, the total cost of ownership often favors composite. It also looks significantly better at year 10.",
      },
      {
        question: "What are the best composite deck brands?",
        answer:
          "Trex, TimberTech, and Fiberon are the three brands we recommend and install. Trex is the most recognized name. TimberTech (AZEK) offers premium capped polymer decking that is essentially impervious to moisture. Fiberon is a strong mid-range option with competitive warranty terms. We will walk you through the specific product options during your estimate.",
      },
      {
        question: "How long does a deck build take?",
        answer:
          "A mid-size deck (200-400 sq ft) typically takes 3-5 days from start to finish, including framing and decking. The permit timeline varies by municipality — Hamilton County and Chattanooga typically process in 5-10 business days. We factor that into your project schedule.",
      },
      {
        question: "Do I need a permit for a deck in Chattanooga?",
        answer:
          "Yes, for any attached deck or freestanding deck over 30 inches above grade. We handle the permit application as part of the project. Any contractor who tells you a permit is not required or optional for a deck this size is giving you bad advice.",
      },
      {
        question: "Can you tear out my old wood deck as part of the project?",
        answer:
          "Yes, full demo and haul-away of the existing deck is included in our deck builds. We will also inspect the ledger board attachment to the house structure, which is the most common failure point on older decks.",
      },
    ],
    relatedServices: ["painting", "siding", "gutters"],
    icon: "Square",
  },

  // ─── 6. PAINTING ──────────────────────────────────────────────────────────
  {
    slug: "painting",
    name: "Exterior Painting",
    shortName: "Exterior Painting",
    heroTagline: "Prep done right means paint that lasts.",
    metaTitle: "Exterior Painting Chattanooga TN",
    metaDescription:
      "Professional exterior painting in Chattanooga TN by Tennessee Valley Exteriors. We pressure wash, prime, caulk, and paint for a finish that lasts 8-12 years.",
    h1: "Exterior Painting in Chattanooga & North Georgia",
    primaryKeyword: "exterior painting Chattanooga",
    body: [
      "A quality exterior paint job is 80% preparation. Anyone can spray paint onto a surface — getting paint to adhere properly and last 8-12 years in East Tennessee's climate requires pressure washing, scraping, sanding, priming bare wood, filling cracks, and caulking every gap where water can infiltrate. Most paint failures we see are preparation failures, not product failures.",
      "We paint wood siding, fiber cement siding, stucco, brick, and trim. Our process: pressure wash the entire exterior at appropriate PSI for the substrate, let it dry for 24-48 hours, scrape all peeling or failing paint, sand rough edges, prime all bare wood and patched areas with an exterior oil-based primer, caulk window and door perimeters, all trim joints, and any penetrations. Two finish coats of Sherwin-Williams Duration, Emerald, or SuperPaint, depending on your budget and the substrate. Brushed and back-rolled rather than spray-only, which is what creates genuine adhesion rather than a surface coating that peels.",
      "We know some homeowners get sticker shock on exterior painting. The honest answer is that quality materials and proper prep cost money. A low-bid painter who skips prep is giving you two to three years of service life before peeling. A quality job done right gives you eight to twelve. Over a ten-year period, the low-bid option is almost always more expensive.",
    ],
    benefits: [
      "Full pressure wash before any paint application",
      "Oil-based primer on all bare wood and repairs",
      "Sherwin-Williams premium products standard",
      "Brushed and back-rolled finish (not spray-only)",
      "Full caulk on all seams, windows, and penetrations",
      "Trim, doors, and shutters painted in scope",
      "2-year workmanship warranty",
    ],
    faqs: [
      {
        question: "How often does exterior paint need to be redone in Chattanooga?",
        answer:
          "A quality job on properly prepared surfaces should last 8-12 years in Chattanooga's climate. Chattanooga's humidity and UV index are moderately demanding on exterior paint. Homes with heavy shade from trees often see faster paint failure on north-facing surfaces due to moisture retention.",
      },
      {
        question: "Can you paint fiber cement or Hardie siding?",
        answer:
          "Yes. Fiber cement paint jobs are some of our best results because the substrate holds paint exceptionally well. We use acrylic latex specifically formulated for cementitious surfaces and apply it according to Hardie manufacturer guidelines, which include specific mil thickness requirements.",
      },
      {
        question: "What paint brands do you use?",
        answer:
          "We use Sherwin-Williams products: Duration for most exterior applications, Emerald for premium projects where maximum durability and color retention is the priority. We do not use big-box store brands on exterior projects — the formulation differences are significant.",
      },
      {
        question: "Do I need to be home during painting?",
        answer:
          "You do not need to be home, but we recommend being available on the first and last day — the first to walk through the scope with us and confirm color selections, and the last to do a walk-around inspection together before we call the job complete.",
      },
      {
        question: "Can exterior painting be combined with a siding or deck project?",
        answer:
          "Absolutely, and this is often the most cost-effective approach. When we are already on a scaffold for siding work, adding trim painting or painting new siding adds minimal mobilization cost.",
      },
    ],
    relatedServices: ["siding", "decks", "gutters"],
    icon: "Paintbrush",
  },

  // ─── 7. STORM DAMAGE ─────────────────────────────────────────────────────
  {
    slug: "storm-damage",
    name: "Storm Damage",
    shortName: "Storm Damage",
    heroTagline: "From emergency tarping to full restoration — we handle it all.",
    metaTitle: "Storm Damage Roof Repair Chattanooga TN",
    metaDescription:
      "Storm damage roof repair and insurance claim assistance in Chattanooga TN. Tennessee Valley Exteriors helps homeowners navigate the claims process and restore their homes fast.",
    h1: "Storm Damage Repair & Insurance Claims in Chattanooga & North Georgia",
    primaryKeyword: "storm damage roof repair Chattanooga",
    body: [
      "Chattanooga sits at the base of the Appalachian Mountains in a region that sees some of the highest hail frequency in Tennessee. The spring storm season — April through June — regularly produces golf-ball sized hail that can shatter 20-year-old shingles in minutes. Wind events associated with supercell storms can lift unsecured or aged roofing, and the tree canopy that makes Chattanooga neighborhoods beautiful creates real risk when limbs come down.",
      "When storm damage happens, there are two urgent priorities: stop the water and document the damage. TVE provides emergency tarping to prevent further water intrusion while we work through your claim. We use a systematic photo and measurement process to document every impact crater, every puncture, and every dented vent cap — the kind of documentation that insurance adjusters need to approve a full replacement rather than a patch.",
      "We work alongside homeowners through the insurance process — but we are always working for you, not for the insurance company. We will help you understand your policy, walk the roof with your adjuster if needed, and make sure that the scope of work approved actually covers the full damage. We do not work with public adjusters on a commission basis, and we never inflate damage claims. Our job is to make sure your legitimate claim gets fully paid.",
    ],
    benefits: [
      "Emergency tarping available 24/7 to stop active water intrusion",
      "Systematic photo documentation of all storm damage",
      "Direct communication with your insurance adjuster",
      "Supplement requests for legitimately missed damage",
      "Work begins within days of insurance approval",
      "Class 4 impact-resistant shingles recommended for future protection",
      "No work performed without insurance approval (no surprise bills)",
    ],
    faqs: [
      {
        question: "How do I know if my roof has hail damage?",
        answer:
          "Hail damage on asphalt shingles appears as circular impact craters that expose the underlying mat — they look like a bruise on the shingle surface. You may also see dented aluminum vents, gutters, or downspouts, which are reliable indicators. Hail damage is not always visible from the ground. A free inspection by a qualified roofer is the only definitive answer.",
      },
      {
        question: "What is the deadline for filing a hail damage insurance claim?",
        answer:
          "Most Tennessee homeowners policies have a one-year filing window from the date of the storm event, though some policies are stricter. Check your specific policy. The sooner you document and file, the clearer the evidence and the smoother the process. Do not wait.",
      },
      {
        question: "Do I have to use the contractor my insurance company recommends?",
        answer:
          "No. Your insurance company's recommendation is just that — a recommendation, not a requirement. You have the right to choose your own licensed contractor in Tennessee. We always recommend choosing based on reputation and credentials, not just whoever the insurer suggests.",
      },
      {
        question: "What if the insurance adjuster misses some of the damage?",
        answer:
          "This happens more often than homeowners realize. We review the adjuster's scope of work against our own documentation. If damage was legitimately missed, we submit a supplement request with supporting photos and measurements. Most insurers will review supplements fairly when the documentation is thorough.",
      },
      {
        question: "What is my deductible responsibility?",
        answer:
          "Your deductible is your out-of-pocket obligation — you are responsible for paying it. Any contractor who offers to waive or cover your deductible is violating Tennessee state law (TCA 56-53-103) and potentially committing insurance fraud. This is a red flag to walk away from immediately.",
      },
      {
        question: "Will filing a claim raise my insurance premiums?",
        answer:
          "A single storm damage claim on a well-maintained home typically has minimal premium impact. Your insurer factors in your overall claims history, your credit score, and local market conditions. The bigger risk is ignoring legitimate damage and letting it deteriorate.",
      },
    ],
    relatedServices: ["roof-replacement", "roof-repair", "inspections"],
    icon: "CloudLightning",
  },

  // ─── 8. INSPECTIONS ───────────────────────────────────────────────────────
  {
    slug: "inspections",
    name: "Roof Inspections",
    shortName: "Roof Inspections",
    heroTagline: "Know exactly what you are dealing with — before it gets worse.",
    metaTitle: "Free Roof Inspection Chattanooga TN — 25-Point Inspection",
    metaDescription:
      "Free 25-point roof inspection in Chattanooga TN by Tennessee Valley Exteriors. We document your roof condition with photos and a written report — no pressure, no sales pitch.",
    h1: "Free 25-Point Roof Inspection in Chattanooga & North Georgia",
    primaryKeyword: "roof inspection Chattanooga",
    body: [
      "A professional roof inspection is the foundation of good roof stewardship — and the starting point for any roofing decision, whether that's catching a small problem before it becomes a big one, documenting condition for an insurance claim, or getting a baseline before buying or selling a home. Our free 25-point inspection covers every system on your roof: shingles, flashing, ridge cap, valleys, underlayment condition (where visible), ventilation, gutters, soffit, and fascia.",
      "We use a systematic inspection process and document everything with photos. When we are done, you get a written report with clear findings: what is in good condition, what needs monitoring, what needs repair, and what is approaching end of life. We categorize findings by urgency so you know what to address immediately versus what can wait. If you need nothing done, we will tell you that. We are not running an inspection process designed to manufacture sales.",
      "We particularly recommend inspections in three situations: after any storm event that produced hail, wind, or falling debris; before a home purchase or sale (a roof inspection is separate from a general home inspection and far more detailed); and annually for roofs over 15 years old. Catching a failing pipe boot or a cracked piece of flashing before it leaks costs far less than dealing with the water damage downstream.",
    ],
    benefits: [
      "25-point systematic inspection covering all roof systems",
      "Photo documentation of all findings",
      "Written report with urgency-tiered recommendations",
      "Attic inspection for signs of ventilation or moisture issues",
      "Gutter and drainage assessment included",
      "No sales pressure — honest findings only",
      "Available same-week scheduling for urgent situations",
    ],
    faqs: [
      {
        question: "Is the roof inspection truly free?",
        answer:
          "Yes. We provide free 25-point inspections with a written photo report, no strings attached. We believe homeowners deserve accurate information about their roof condition without having to pay for it or sit through a sales pitch to get it.",
      },
      {
        question: "How is a professional roof inspection different from a home inspection?",
        answer:
          "A home inspector covers every system in the house from the ground level or low-slope visible areas. A roofing contractor physically walks the roof, inspects the flashing details, checks the attic for signs of moisture or inadequate ventilation, and documents granule loss, impact craters, and installation defects that are only visible up close. For a home purchase, we recommend getting both.",
      },
      {
        question: "How long does the inspection take?",
        answer:
          "A thorough inspection of an average-size home takes 45-90 minutes. We will not rush it. You will have a written report with photos within 24 hours of the inspection.",
      },
      {
        question: "What is included in the 25-point inspection?",
        answer:
          "We check: shingle condition (granule loss, curling, cracking, impact damage), ridge cap, hip and valley condition, all flashing (chimney, step flashing, pipe boots, drip edge), fascia and soffit condition, attic ventilation adequacy, gutter attachment and drainage, visible underlayment at exposed areas, and chimney crown and mortar condition if applicable.",
      },
      {
        question: "Can a roof inspection help with my insurance claim?",
        answer:
          "Absolutely. A professional inspection with photo documentation before and after a storm event is the strongest support for an insurance claim. We provide inspection reports specifically formatted for insurance adjuster review when needed.",
      },
    ],
    relatedServices: ["roof-replacement", "roof-repair", "storm-damage"],
    icon: "Search",
  },
]

/** Look up a single service by slug */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICE_DATA.find((s) => s.slug === slug)
}

/** Get related service objects for a given service */
export function getRelatedServices(service: ServiceData): ServiceData[] {
  return service.relatedServices
    .map((slug) => SERVICE_DATA.find((s) => s.slug === slug))
    .filter((s): s is ServiceData => s !== undefined)
}
