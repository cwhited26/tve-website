/**
 * Unique SEO content for each of the 14 city pages.
 * Each city gets genuinely distinct copy — not templates with name swapped.
 */

export interface CityContent {
  slug: string
  heroSubhead: string
  /** ~300-500 words of unique, locally-relevant body copy. Split into paragraphs. */
  bodyParagraphs: string[]
  /** Locally-specific reasons to choose TVE */
  localReasons: string[]
  /** Local Q&A pairs for FAQ schema */
  faqs: { q: string; a: string }[]
}

export const CITY_CONTENT: Record<string, CityContent> = {
  chattanooga: {
    slug: 'chattanooga',
    heroSubhead:
      "Chattanooga's hometown roofing and exterior contractor — veteran-owned, locally trusted.",
    bodyParagraphs: [
      "Chattanooga is home to some of the most varied housing stock in the Southeast — Victorian-era homes in St. Elmo and Highland Park, mid-century ranches in Brainerd and East Lake, and newer construction spreading east toward Ooltewah. Each neighborhood has its own roofing challenges, and Tennessee Valley Exteriors knows them all. We're based here. This is our market.",
      "The Tennessee River valley creates weather patterns that can be unpredictable. Storm cells intensify as they funnel between Lookout Mountain and Signal Mountain, dropping hail on one block while the street next door stays dry. We've seen it dozens of times. That's why TVE maintains crews on standby after severe weather alerts — we can respond to your property quickly, document the damage while it's fresh, and begin the insurance claim process the same day.",
      "Our services in Chattanooga cover the full exterior envelope: roof replacements with IKO and Owens Corning shingles, seamless gutter installation, Hardie Board and LP SmartSide siding, composite deck construction, and exterior painting. We don't subcontract roofing work — the crew that shows up on day one is the crew that finishes the job. That accountability is something Chattanooga homeowners have come to expect from us.",
      "TVE founder Chase Whited grew up watching contractors cut corners in this market — rushing installs, skipping ice and water shield, using substandard materials to pad margins. TVE was built in direct response to that. Every project gets a written scope, a clear timeline, and a warranty that means something. We've built our reputation one Chattanooga roof at a time, and we intend to keep earning it.",
    ],
    localReasons: [
      'Based in Chattanooga — we know every neighborhood from St. Elmo to East Brainerd',
      'Fast storm response — crews on standby after severe weather events',
      'Insurance claim expertise — we coordinate directly with adjusters',
      'No subcontractors on roofing — our crew owns every nail and shingle',
    ],
    faqs: [
      {
        q: 'How quickly can TVE respond after a storm in Chattanooga?',
        a: 'We maintain crews on standby after severe weather alerts. For documented storm damage, we can typically schedule a damage inspection within 24–48 hours. Emergency tarping for active leaks is available same-day in most cases.',
      },
      {
        q: 'Does TVE handle insurance claims for Chattanooga homeowners?',
        a: 'Yes — insurance claim coordination is one of our core services. We document all damage, prepare the estimate, and communicate directly with your adjuster throughout the process. Most Chattanooga homeowners see a full roof replacement approved when there is legitimate storm damage.',
      },
      {
        q: 'What roofing materials work best in Chattanooga\'s climate?',
        a: "We typically recommend IKO Dynasty or Owens Corning Duration shingles for Chattanooga homes — both carry strong impact resistance ratings (Class 4) which can lower your insurance premium. For Chattanooga's humidity, we also specify algae-resistant granule options to prevent the black streaking common on area roofs.",
      },
      {
        q: 'Does TVE serve all of Chattanooga including the city limits and surrounding areas?',
        a: 'Yes — we serve all of Chattanooga proper plus the surrounding unincorporated areas of Hamilton County. This includes East Brainerd, Missionary Ridge, North Chattanooga, Lookout Valley, and more. If you are in the greater Chattanooga area, call us.',
      },
    ],
  },

  'signal-mountain': {
    slug: 'signal-mountain',
    heroSubhead:
      'Expert roofing and exterior services for Signal Mountain homes — steep pitches, mountain weather, done right.',
    bodyParagraphs: [
      "Signal Mountain sits at over 1,900 feet elevation on the Cumberland Plateau, and the homes here reflect it. Steeper roof pitches, more complex rooflines, and exposure to higher wind loads than anything in the valley below. Most Signal Mountain homes were built in the 1970s through 1990s and are now entering their second or third roofing cycle — and the original installers are long gone. TVE has the equipment, safety training, and experience to work these pitches safely and correctly.",
      "Winter weather on Signal Mountain is a different animal than in Chattanooga proper. Ice storms, freezing rain, and heavy snow loads are real concerns here. Proper ice and water shield installation — not just in the valleys but extended across the lower roof edge — is non-negotiable for Signal Mountain homes. We've repaired too many roofs installed by valley contractors who didn't understand mountain conditions.",
      "The wooded lots and mature tree canopy that make Signal Mountain so desirable also create gutter maintenance headaches. Debris loads are heavy, and downspout routing on steep terrain requires careful planning. TVE installs seamless gutters with micro-mesh leaf guards on most Signal Mountain projects — it's simply the right choice given the environment.",
      "Beyond roofing, we handle deck construction and exterior painting for Signal Mountain homeowners. The elevation and exposure mean proper surface prep and primer selection are critical for paint longevity. We don't take shortcuts that the mountain will punish you for in two seasons.",
    ],
    localReasons: [
      'Experience with steep-pitch roofing — safety equipment and proper technique',
      'Mountain-specific material specs — ice & water shield beyond code minimum',
      'Gutter systems designed for heavy debris loads from mature tree canopy',
      'Familiar with Signal Mountain HOA requirements in Walden and Falling Water',
    ],
    faqs: [
      {
        q: 'Can TVE work on steep roofs on Signal Mountain?',
        a: 'Yes — steep-pitch roofing is something we do regularly. Our crews are equipped with proper fall protection systems and have extensive experience on the complex, high-pitch rooflines common on Signal Mountain. We never cut corners on safety on elevated work.',
      },
      {
        q: 'Do I need special roofing for the ice and snow on Signal Mountain?',
        a: "Signal Mountain homes should have ice and water shield installed at minimum 6 feet from the eave — more on north-facing slopes. We also recommend a proper drip edge and sealed ridge vent systems rated for high-wind zones. We'll spec the right protection for your specific roof geometry.",
      },
      {
        q: 'How long does a roof replacement take on a Signal Mountain home?',
        a: 'Most Signal Mountain roof replacements take 1–2 days for standard homes, and 2–4 days for larger or more complex homes. The elevated setting and access logistics occasionally add a day compared to valley projects, but we account for this in our scheduling.',
      },
    ],
  },

  'lookout-mountain': {
    slug: 'lookout-mountain',
    heroSubhead:
      'Roofing and exterior services for Lookout Mountain homes — historic properties handled with care.',
    bodyParagraphs: [
      "Lookout Mountain is unlike any other community in the TVE service area. The homes here range from historic Craftsman bungalows and Victorian estates near Fairyland to mid-century moderns perched on the ridge with sweeping valley views. Many of these homes are irreplaceable, and the roofing and exterior work they need demands a contractor who understands that — not one who shows up with a one-size-fits-all approach.",
      "The ridge elevation means Lookout Mountain sees more precipitation than the valley, heavier ice accumulation, and wind that comes at the roof from unexpected angles. We've seen ice dam damage on homes here that were improperly flashed by contractors who didn't account for the mountain's unique exposure. TVE designs roofing systems for Lookout Mountain with those conditions in mind from the first nail.",
      "Exterior painting on Lookout Mountain homes is a specialty. The combination of elevation, humidity, and the dramatic temperature swings between seasons means paint failures happen faster here than anywhere else if the prep work isn't done correctly. We strip, sand, prime, and apply exterior coatings rated for mountain exposure. The results last — and look the part on homes that deserve it.",
      "If your Lookout Mountain home is subject to HOA guidelines or historic district standards, bring them to your estimate — we've worked within those requirements before and we know how to source materials that meet both the aesthetic standards and the performance requirements your home needs.",
    ],
    localReasons: [
      'Experience with historic and unique architectural styles on the mountain',
      'Material matching for historic homes — can source specialty shingles and siding',
      'HOA and historic district compliance experience',
      'Painting prep designed for mountain climate extremes',
    ],
    faqs: [
      {
        q: 'Can TVE match the roofing materials on our historic Lookout Mountain home?',
        a: "Often yes — we work with multiple suppliers and can source specialty architectural shingles, wood-look composites, and metal roofing products that complement historic home aesthetics while providing modern performance. Bring photos and we'll advise on what's achievable.",
      },
      {
        q: 'Does TVE work in the Fairyland area with its HOA restrictions?',
        a: 'Yes — we are familiar with HOA requirements in the Fairyland community and other regulated areas of Lookout Mountain. We review covenants before quoting and specify compliant materials. We can coordinate with your HOA review process if needed.',
      },
    ],
  },

  'red-bank': {
    slug: 'red-bank',
    heroSubhead:
      'Roofing and exterior services in Red Bank, TN — fast response, fair pricing, quality work.',
    bodyParagraphs: [
      "Red Bank is one of TVE's most active service areas — close to our Chattanooga home base, with a dense concentration of homes built in the 1960s through 1980s that are now on their second or third roofing cycle. We're in Red Bank regularly, and the roofing conditions here are well within our wheelhouse.",
      "The neighborhood mix in Red Bank — from the established streets near Riverview to the newer developments near the Battlefield Parkway area — means we handle everything from straightforward 3-tab replacements on older ranch homes to more complex architectural shingle jobs on larger properties. We bring the same care to a 1,200-square-foot starter home as we do to a 3,000-square-foot colonial.",
      "Gutter work is particularly active in Red Bank due to the age of the housing stock. Many homes still have original 4-inch galvanized gutters that were installed decades ago and are long past their useful life. We replace these with 5- or 6-inch seamless aluminum gutters in one day, properly sloped and with correctly-sized downspouts that route water away from foundations.",
      "If you need a contractor who responds quickly, communicates clearly, and doesn't disappear after the deposit — TVE has been building that reputation in Red Bank one job at a time. We're 15 minutes away and we take local reputation seriously.",
    ],
    localReasons: [
      'Close to our Chattanooga base — fast response and easy scheduling',
      'Experience with the older housing stock common in Red Bank neighborhoods',
      'Gutter specialists — many Red Bank homes have original, aging gutter systems',
      'Local references available in Red Bank upon request',
    ],
    faqs: [
      {
        q: 'How old does a roof need to be before it should be replaced in Red Bank?',
        a: 'Most asphalt shingle roofs installed in Red Bank in the 1980s–1990s are well past their design life and should be evaluated. If your roof is 20+ years old, shows granule loss in gutters, has soft spots when you walk on it, or has had multiple repairs, a replacement is likely more cost-effective than continued patching.',
      },
      {
        q: 'Does TVE do free estimates in Red Bank?',
        a: "Yes — all TVE estimates are free. We'll come out, assess your roof or exterior, and give you a written quote within 24 hours of the visit. No pressure, no obligation.",
      },
    ],
  },

  hixson: {
    slug: 'hixson',
    heroSubhead:
      'Hixson, TN roofing and exterior contractor — serving all of Hixson from Middle Valley to Northgate.',
    bodyParagraphs: [
      "Hixson stretches along the north shore of the Tennessee River and Chickamauga Lake, from the established neighborhoods near Shallowford Road to the newer developments in Middle Valley and beyond. TVE serves all of Hixson — from quick repairs on an older ranch home near Chester Frost Park to full exterior overhauls on newer builds in the Northgate corridor.",
      "The river corridor location exposes Hixson homes to severe thunderstorms that track up the Tennessee River valley from the southwest. Hail events in spring and summer are frequent, and the intense downpours of July and August can reveal drainage problems — overflowing gutters, improper grading, and roof-to-wall transitions that weren't detailed correctly. We see these issues regularly in Hixson and know exactly how to address them.",
      "Siding work is increasingly common in Hixson as the stock of 1990s–2000s vinyl-sided homes approaches the end of its useful life. Many of these homes are ideal candidates for Hardie Board or LP SmartSide — products that are more durable, hold paint better, and significantly increase curb appeal and resale value. We've transformed dozens of Hixson homes from dated to modern with a siding replacement.",
      "TVE's response time in Hixson is excellent — we're typically on-site within 24 hours for storm damage and can schedule non-emergency work within 1–2 weeks depending on the season.",
    ],
    localReasons: [
      'Familiar with Hixson weather patterns — particularly the river valley storm corridor',
      'Active siding contractor — experience with Hixson\'s 1990s–2000s housing stock',
      'Strong local references throughout Middle Valley and Northgate areas',
      'Fast response time from our nearby Chattanooga base',
    ],
    faqs: [
      {
        q: 'Is vinyl siding worth replacing with Hardie Board in Hixson?',
        a: 'For most Hixson homeowners with 1990s–2000s vinyl siding, the answer is yes. Hardie Board and LP SmartSide are significantly more durable, don\'t warp or crack in Tennessee heat, and hold paint for 15+ years. The investment pays back in reduced maintenance, better curb appeal, and increased resale value.',
      },
      {
        q: 'What should I do if I have a roof leak during a storm in Hixson?',
        a: 'First, place buckets and protect valuables from water damage. Take photos of all visible damage — interior and exterior. Then call TVE. We can deploy an emergency tarp to stop active leaking until a permanent repair can be scheduled. Document everything with photos for your insurance claim.',
      },
    ],
  },

  'soddy-daisy': {
    slug: 'soddy-daisy',
    heroSubhead:
      'Soddy Daisy, TN roofing and exterior services — from lakefront homes to established neighborhoods.',
    bodyParagraphs: [
      "Soddy Daisy runs along the Chickamauga Lake shoreline and extends into the valleys and ridgelines of Hamilton County's northern edge. The community has a mix of lakefront properties, established neighborhoods built from the 1960s through 1990s, and newer suburban developments that have pushed north from the Hixson corridor. TVE serves the full spectrum.",
      "Lake living in Soddy Daisy is beautiful — but it comes with roofing and exterior considerations that inland homes don't face. Higher moisture exposure, more frequent mold and algae growth on north-facing surfaces, and the corrosive effects of high humidity on metal components (flashing, fasteners, gutters) require careful material selection. We specify accordingly.",
      "The valley corridors around Soddy Daisy funnel severe storm systems from the northwest with surprising intensity. Tornado warnings and wind damage events are more common here than in the Chattanooga city proper. When major storms hit, TVE deploys to Soddy Daisy quickly — our crews know the area well and can get to you fast.",
      "We also do a lot of deck work in Soddy Daisy given the lakefront and wooded lot concentration. Composite decking from Trex or TimberTech is ideal here — it handles the moisture exposure without the rot, splintering, and annual maintenance of pressure-treated wood. We build decks designed to last in the Soddy Daisy environment.",
    ],
    localReasons: [
      'Lakefront expertise — material selection for high-moisture environments',
      'Fast storm response to northern Hamilton County',
      'Deck specialists — composite decks ideal for lakefront and wooded Soddy Daisy lots',
      'Experience with the age range of Soddy Daisy housing stock',
    ],
    faqs: [
      {
        q: 'What kind of roofing is best for a lakefront home in Soddy Daisy?',
        a: 'For lakefront and high-moisture environments, we recommend shingles with strong algae-resistant granules (look for "AR" in the product name) and copper-containing granules where possible. Ridge ventilation and proper attic airflow are especially important near the lake to manage moisture vapor from below.',
      },
      {
        q: 'Can TVE build a deck on a steep lakefront lot in Soddy Daisy?',
        a: 'Yes — steep lots and complex terrain are something we handle regularly. We engineer the framing to accommodate the grade changes, and composite decking from Trex or TimberTech is an excellent choice for lakefront settings where moisture exposure is high year-round.',
      },
    ],
  },

  ooltewah: {
    slug: 'ooltewah',
    heroSubhead:
      "Ooltewah, TN's trusted roofing and exterior contractor — serving Cambridge Square, Snow Hill, and beyond.",
    bodyParagraphs: [
      "Ooltewah has been one of the fastest-growing communities in the Chattanooga metro for the past 15 years. Cambridge Square, Georgetown, Snow Hill — these neighborhoods filled up quickly, and many of those 2008–2015 builds are now entering their first major repair cycle. The original builder-grade roofing products installed during rapid construction boom years are aging faster than homeowners realize.",
      "We see a specific pattern in Ooltewah: homes with architectural shingles installed around 2008–2012 that look fine from the ground but are showing granule loss, cracked tabs, and compromised sealing strips. The product quality during that era was inconsistent, and many of those roofs have 5–8 years left at best. If your Ooltewah home was built during that window, a proactive inspection is worthwhile.",
      "Beyond roofing, Ooltewah's newer housing stock is starting to need exterior painting and gutter upgrades. Builder-grade gutters on many Ooltewah homes are undersized (3.5-inch) and frequently overflow during Tennessee's summer downpours. We upgrade these to proper 5- or 6-inch seamless systems that actually move the water.",
      "TVE has completed projects throughout Ooltewah and maintains strong references in the area. We understand the HOA considerations in Cambridge Square and other planned communities, and we work within your community guidelines.",
    ],
    localReasons: [
      'Experience with 2008–2015 Ooltewah builds and their specific roofing issues',
      'Cambridge Square and HOA community experience',
      'Gutter upgrades from builder-grade to properly-sized systems',
      'Strong local references throughout Ooltewah subdivisions',
    ],
    faqs: [
      {
        q: 'My Ooltewah home was built around 2010 — should I have the roof inspected?',
        a: "Yes, strongly recommended. Builder-grade shingles installed during the 2008–2013 construction boom in Ooltewah are now 12–17 years old and many are showing early failure signs. A free TVE inspection will tell you exactly where you stand and whether repair or replacement is the right next step.",
      },
      {
        q: 'Does TVE work in Cambridge Square and other planned communities in Ooltewah?',
        a: 'Yes — we work in Cambridge Square and other Ooltewah HOA communities regularly. We review your HOA guidelines before quoting and specify compliant products. We can also assist with the HOA approval process for exterior changes.',
      },
    ],
  },

  cleveland: {
    slug: 'cleveland',
    heroSubhead:
      'Cleveland, TN roofing and exterior contractor — Bradley County homeowners, same TVE quality.',
    bodyParagraphs: [
      "Cleveland sits in the Ocoee River corridor of Bradley County, about 30 miles east of Chattanooga. The community has its own identity — a mix of established historic neighborhoods near downtown, mid-century ranches throughout the Westside, and newer subdivisions pushing west toward Charleston Pike. TVE expanded into Cleveland because the demand was there and the quality of local contractors was not meeting it.",
      "Bradley County sees its own storm patterns that are distinct from the Chattanooga metro. The river corridors that run through Cleveland — Mouse Creek, Candies Creek, and the Hiwassee watershed — create localized storm intensity that can produce large hail and intense straight-line wind events. Cleveland homeowners have learned to watch for storm damage on their roofs, and we've responded to dozens of Cleveland insurance claims.",
      "The older housing stock in Cleveland's historic neighborhoods often has rooflines with multiple intersections, dormers, and complex geometry that requires experienced detailing. Valley flashing, step flashing at wall intersections, and chimney caps all need careful attention. TVE crews are experienced with complex rooflines and won't cut corners where cutting corners causes leaks in two years.",
      "We offer the full TVE service menu in Cleveland: roof replacement and repair, gutters, siding, and exterior painting. Response times are excellent — we stage Cleveland jobs from our Chattanooga base and typically schedule within 1–2 weeks of first contact for non-emergency work.",
    ],
    localReasons: [
      'One of the few Chattanooga-quality contractors extending services to Bradley County',
      'Insurance claim expertise for Cleveland storm damage events',
      'Experience with historic Cleveland homes and complex rooflines',
      'Full exterior service menu available in Cleveland — roofing, gutters, siding, painting',
    ],
    faqs: [
      {
        q: 'Does TVE come all the way to Cleveland, TN for roofing work?',
        a: 'Yes — Cleveland is fully within our service area. We schedule Cleveland projects out of our Chattanooga base and can typically get you on the schedule within 1–2 weeks for non-emergency work. Storm damage response is faster.',
      },
      {
        q: 'What roofing brands does TVE install in Cleveland?',
        a: 'We primarily install IKO and Owens Corning shingles — both of which have strong dealer programs in the Bradley County area and carry manufacturer warranties we can register for you. For metal roofing on agricultural or commercial buildings in the Cleveland area, we also work with Fabral and Metal Sales.',
      },
    ],
  },

  dalton: {
    slug: 'dalton',
    heroSubhead:
      "Dalton, GA roofing and exterior contractor — North Georgia's carpet capital gets TVE quality.",
    bodyParagraphs: [
      "Dalton is the carpet capital of the world, but when it comes to roofing, the standard hasn't always matched the industrial reputation. TVE entered the Dalton market because property owners and homeowners here deserved a contractor who brought the same professionalism they expect in every other area of business. We've built a strong client base in Dalton and intend to keep it.",
      "The Conasauga River valley geography around Dalton creates specific storm exposure. Spring hail events tracking northeast from Alabama are the primary driver of roofing damage in this area — Dalton sees some of the highest hail frequency in North Georgia. If you haven't had your roof professionally inspected since the last major storm season, now is the time.",
      "Dalton's housing stock runs the gamut — historic homes in the Dawnville area, mid-century construction throughout the city proper, and newer suburban builds pushing north toward Carbondale. We handle all of it. Property managers with multiple Dalton-area units are welcome — we offer coordination and volume pricing for multi-property clients.",
      "Insurance claim work is a significant part of our Dalton business. We know the insurance process, we document damage correctly from day one, and we advocate for our clients to get the full coverage they've been paying for. Many Dalton homeowners who thought their damage wasn't worth claiming have been surprised at what an experienced contractor can document and substantiate.",
    ],
    localReasons: [
      'One of the most active TVE service areas in North Georgia',
      'Insurance claim expertise for Dalton\'s frequent hail events',
      'Property management and multi-unit coordination available',
      'Strong local references throughout Dalton neighborhoods',
    ],
    faqs: [
      {
        q: 'How common is hail damage to roofs in Dalton, GA?',
        a: "Dalton sits in one of the most active hail corridors in the Southeast. Spring storm systems tracking northeast from Alabama frequently produce golf-ball-sized hail in the Conasauga Valley. If your Dalton home is more than 5 years old and hasn't had a post-storm inspection, there's a good chance there's documented damage that your insurance should cover.",
      },
      {
        q: 'Does TVE handle commercial roofing in Dalton?',
        a: "We focus primarily on residential and light commercial (up to about 10,000 sq ft). For larger commercial roofing projects in Dalton, we can provide a referral. For residential and small commercial — homes, rental properties, small business buildings — we're the right fit.",
      },
    ],
  },

  ringgold: {
    slug: 'ringgold',
    heroSubhead:
      'Ringgold, GA roofing and exterior services — Catoosa County homeowners trust TVE.',
    bodyParagraphs: [
      "Ringgold is Catoosa County's largest city, sitting at the crossroads of I-75 and Highway 151 just 15 miles south of Chattanooga. The community is primarily residential — a mix of older neighborhoods in the city proper, newer subdivisions around Graysville and Boynton, and rural properties throughout the county. TVE serves all of it.",
      "Ringgold has a painful memory of severe weather. The April 2011 tornado outbreak caused catastrophic damage across Catoosa County, and while the community has rebuilt remarkably, many of those 2011–2013 replacements are now 12–15 years old and approaching another decision point. If your home was rebuilt after the 2011 storm, a professional inspection is worth scheduling before the next major storm season.",
      "Beyond storm damage, Ringgold homes age like any other — builder-grade materials from the 1980s and 1990s are well past their design life. We replace roofs, upgrade gutters, and install Hardie Board siding throughout Ringgold regularly. Our crews know the area well and can get to you quickly from our Chattanooga base.",
      "TVE takes pride in being a straightforward contractor in a market where homeowners have too often been taken advantage of by storm chasers and out-of-town operators who disappear after the job. We're local, we're licensed and insured in Georgia, and we stand behind every job with a real warranty.",
    ],
    localReasons: [
      'Licensed and insured for Georgia roofing work',
      'Experience with post-2011 storm rebuild homes approaching second replacement',
      'Fast access from I-75 corridor — excellent response times',
      'Local, not a storm chaser — we stand behind our work in Ringgold long-term',
    ],
    faqs: [
      {
        q: 'Is TVE licensed to do roofing in Georgia?',
        a: 'Yes — TVE is licensed and insured for residential roofing and exterior contracting in Georgia. We carry Georgia contractor licensing and maintain proper insurance coverage including general liability and workers compensation.',
      },
      {
        q: "My Ringgold home was rebuilt after the 2011 tornadoes. Should I have it inspected?",
        a: "If your home was rebuilt in 2011–2013, the roofing products installed are now 12–15 years old. That's a reasonable time for a professional inspection, especially given the storm activity the area sees. A TVE inspection is free and gives you a clear picture of where you stand.",
      },
    ],
  },

  'fort-oglethorpe': {
    slug: 'fort-oglethorpe',
    heroSubhead:
      'Fort Oglethorpe, GA roofing and exterior services — Catoosa County, done right.',
    bodyParagraphs: [
      "Fort Oglethorpe is best known as the gateway to Chickamauga Battlefield, but for TVE it's also one of our most active North Georgia service areas. The community spans the eastern side of Catoosa County along the LaFayette Road corridor, with a mix of older bungalows, mid-century ranches, and newer subdivisions filling in between.",
      "The proximity to the Georgia-Tennessee state line means Fort Oglethorpe homeowners often search for contractors on the Tennessee side of the line — and we work both sides. Our Georgia licensing covers all of our Catoosa County work, and you'll get the same crew, the same materials, and the same TVE standards regardless of which state your property is in.",
      "Roofing in Fort Oglethorpe tends to be straightforward — most homes have simple to moderately complex rooflines with asphalt shingles that are well within the standard replacement or repair scope. Where we add value is in the documentation and insurance work that follows a storm event. We help Fort Oglethorpe homeowners navigate claims that less experienced contractors miss entirely.",
      "In addition to roofing, we install gutters and do exterior painting in Fort Oglethorpe regularly. The older housing stock along the LaFayette Road corridor has significant deferred maintenance in many cases — we work through it systematically and bring these homes back to where they should be.",
    ],
    localReasons: [
      'Licensed for Georgia work — same coverage as Tennessee projects',
      'Insurance claim experience in Catoosa County',
      'Familiar with Fort Oglethorpe neighborhood stock and typical project scope',
      'Close to Chattanooga base — fast response for storm events',
    ],
    faqs: [
      {
        q: 'Do I need a special permit for roofing in Fort Oglethorpe?',
        a: 'In most cases, yes — Georgia requires a permit for full roof replacements. TVE pulls permits as part of our standard process in Fort Oglethorpe and all Georgia service areas. The permit cost is included in our quote.',
      },
      {
        q: 'Can TVE do roofing and exterior painting at the same time in Fort Oglethorpe?',
        a: "Yes — for clients doing multiple exterior projects, we can sequence the work to minimize disruption and maximize efficiency. Roofing typically goes first, followed by siding or painting, followed by gutters. We'll build a project schedule that makes sense.",
      },
    ],
  },

  chickamauga: {
    slug: 'chickamauga',
    heroSubhead:
      'Chickamauga, GA roofing services — Walker County homes, quality you can count on.',
    bodyParagraphs: [
      "Chickamauga is a smaller Walker County community with a strong sense of place — the historic downtown, the proximity to Chickamauga Battlefield, and the character of the older residential neighborhoods make it one of the most distinctive communities in the TVE service area. Many of the homes here are older, and the roofing and exterior work they need requires a contractor who respects what's already there.",
      "Metal roofs are more common in Chickamauga than in most other TVE service communities. Many older homes have standing-seam or exposed-fastener metal roofs that were installed decades ago and need resealing, panel replacement, or full replacement. We have experience with metal roofing repair and replacement — this is not something we subcontract.",
      "The Walker County building department processes permits for roofing work in Chickamauga, and TVE is familiar with their requirements. We pull permits as a standard part of our process here — it protects you as the homeowner and ensures the work meets code.",
      "Insurance claim work in Chickamauga follows the same pattern as the rest of our Georgia service area. Spring hail events and summer wind damage are the primary drivers. If you've had storm damage and haven't had a professional assessment, call us — we'll give you an honest evaluation at no charge.",
    ],
    localReasons: [
      'Metal roof experience — repair and replacement, not just shingles',
      'Walker County permit familiarity',
      'Respect for the character of older Chickamauga homes',
      'Honest inspections — we tell you what you actually need',
    ],
    faqs: [
      {
        q: 'Can TVE repair a metal roof in Chickamauga?',
        a: 'Yes — we handle metal roof repairs and full replacements. Common issues on older Chickamauga metal roofs include loose or missing fasteners, sealant failure at seams and penetrations, and panel corrosion. We assess the condition honestly and recommend repair when it makes sense.',
      },
      {
        q: "Do older homes in Chickamauga need special consideration for roofing?",
        a: 'Often yes — older homes may have roofing decking (the plywood or boards under the shingles) that needs evaluation before new materials go on. They may also have older ventilation systems that should be upgraded. We factor all of this into our assessment and quote.',
      },
    ],
  },

  rossville: {
    slug: 'rossville',
    heroSubhead:
      "Rossville, GA roofing and exterior services — right across the state line, same TVE quality.",
    bodyParagraphs: [
      "Rossville sits at the Tennessee-Georgia state line, bordered by Chattanooga to the north and Fort Oglethorpe to the south. Geographically, it's practically a Chattanooga suburb — and homeowners here often find themselves looking for contractors on both sides of the state line. TVE is licensed in both Tennessee and Georgia, so the state line isn't a factor.",
      "The housing stock in Rossville skews older — many homes were built from the 1940s through the 1970s, and deferred roofing and exterior maintenance is common. Original wood fascia boards, aging gutters, and roofing that hasn't been touched in 20+ years are the norm, not the exception. We've done significant work in Rossville bringing these older homes back up to standard.",
      "The neighborhood around Lakeview and the Cloud Springs Road corridor has seen increased investment in recent years as buyers discover the value in Rossville real estate. Roofing and siding upgrades are a common first step for new owners who want to bring an older home to current standards without a full gut renovation.",
      "TVE brings full-service exterior capabilities to Rossville — roofing, gutters, siding, and painting. If your older Rossville home needs a comprehensive exterior refresh, we can scope and sequence the whole project in one estimate.",
    ],
    localReasons: [
      'Licensed in both Tennessee and Georgia — state line is not a factor',
      'Experience with Rossville\'s older housing stock',
      'Full-exterior refresh capabilities — roofing, siding, gutters, painting in one project',
      'Close proximity to Chattanooga base — fast response',
    ],
    faqs: [
      {
        q: 'Does TVE need a Georgia license to work in Rossville?',
        a: "Yes — and we have it. TVE carries contractor licensing and insurance coverage in Georgia, covering all of our Walker County and Catoosa County service areas including Rossville. You can request our license information as part of your estimate.",
      },
      {
        q: 'My Rossville house is from the 1960s. What should I prioritize for exterior improvements?',
        a: "Start with the roof — a failing roof affects everything else. Then gutters and drainage, because water intrusion accelerates every other form of exterior deterioration. Then siding, then painting. TVE can assess all four in a single visit and help you prioritize by urgency and budget.",
      },
    ],
  },

  'east-ridge': {
    slug: 'east-ridge',
    heroSubhead:
      "East Ridge, TN roofing and exterior services — TVE's backyard, your neighborhood.",
    bodyParagraphs: [
      "East Ridge is directly south of Chattanooga along the Highway 41 corridor, and it's essentially TVE's backyard. We're in East Ridge constantly — between our proximity and the density of residential construction here, East Ridge is one of our most active service communities.",
      "East Ridge developed primarily in the post-WWII era through the 1970s, which means the dominant housing type is the mid-century ranch and brick split-level — solid bones, but with roofing and exterior systems that are well past their intended lifespan. Replacing the roof on a 1960s East Ridge brick ranch is a bread-and-butter job for TVE, and we do it efficiently and correctly.",
      "The Camp Jordan area and the McBrien Road corridor have seen significant commercial and residential reinvestment. New homeowners in East Ridge are often dealing with a to-do list left by the previous owner — deferred roofing and exterior maintenance near the top. TVE is the right call for that kind of comprehensive exterior catch-up.",
      "We also respond quickly to East Ridge storm damage. The community's location on the southeastern edge of Chattanooga puts it in the path of storm systems tracking northeast from Georgia and Alabama. When TVE receives storm alerts, East Ridge is always on our dispatch list.",
    ],
    localReasons: [
      'TVE is headquartered nearby — fastest response times in the area',
      "Expertise with East Ridge's mid-century housing stock",
      'Active in the Camp Jordan area and McBrien Road corridor',
      'Storm response priority — East Ridge is always on our dispatch list',
    ],
    faqs: [
      {
        q: 'How fast can TVE respond to storm damage in East Ridge?',
        a: 'East Ridge is one of our fastest response areas — typically within 24 hours for damage documentation and same-day for emergency tarping when needed. Our proximity makes us the logical choice when you need a contractor quickly.',
      },
      {
        q: 'What is the typical cost to replace a roof on a mid-century ranch in East Ridge?',
        a: "Costs vary by square footage, pitch, and material selection — but a typical 1,500–2,000 sq ft East Ridge ranch ranges from $8,000–$14,000 for a standard architectural shingle replacement. Use our quote widget for a ballpark estimate, then schedule an in-person visit for a precise number.",
      },
    ],
  },
}
