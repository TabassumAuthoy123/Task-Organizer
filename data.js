/* ═══════════════════════════════════════════════════════════════════════════════
 *  data.js — Career Dashboard Data Layer for S.M. Rahat
 *  ─────────────────────────────────────────────────────────────────────────────
 *  BUTEX Textile Engineering Graduate | Assistant Merchandiser @ Interstoff
 *  Marks & Spencer Account | Targeting Merchandiser / Sr. Merchandiser roles
 *
 *  Last scraped / updated: 2 June 2026
 *  All constants are global (no ES-module export) — consumed by app.js
 * ═══════════════════════════════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────────────────────────────────────────
 * 1. JOB_PORTAL_LINKS — organized by category
 * ───────────────────────────────────────────────────────────────────────────── */
const JOB_PORTAL_LINKS = {

  /* ── A. Job Portals ─────────────────────────────────────────────────────── */
  portals: [
    {
      name: 'bdjobs',
      label: 'BDJobs — Garments/Textile',
      url: 'https://jobs.bdjobs.com/jobsearch.asp?fcatId=6',
      icon: '🔍',
      priority: 'high',
      description: "BD's #1 portal. Garments/Textile category → Merchandiser → Dhaka filter."
    },
    {
      name: 'linkedin_jobs',
      label: 'LinkedIn Jobs (BD)',
      url: 'https://bd.linkedin.com/jobs/merchandising-jobs',
      icon: '💼',
      priority: 'high',
      description: 'Set job alert for Merchandiser Dhaka.'
    },
    {
      name: 'atb_jobs',
      label: 'atB Jobs',
      url: 'https://www.atb-jobs.com',
      icon: '📋',
      priority: 'medium',
      description: 'Newer BD portal. Register + alert on.'
    },
    {
      name: 'atb_register',
      label: 'atB Jobs — Register',
      url: 'https://atb-jobs.com/candidate-register',
      icon: '📝',
      priority: 'medium',
      description: 'Create profile, upload CV.'
    },
    {
      name: 'nextjobz',
      label: 'NextJobz BD',
      url: 'https://nextjobz.com.bd',
      icon: '🚀',
      priority: 'medium',
      description: 'Aggregator — many buying house listings.'
    },
    {
      name: 'dhakacareers_merch',
      label: 'DhakaCareers — Merchandising',
      url: 'https://dhakacareers.com/industries/merchandising',
      icon: '🏢',
      priority: 'high',
      description: '37 active merchandising jobs in Dhaka right now.'
    },
    {
      name: 'dhakacareers_apparel',
      label: 'DhakaCareers — Apparel',
      url: 'https://dhakacareers.com/industries/apparel',
      icon: '👔',
      priority: 'high',
      description: '32 active apparel jobs including merch roles.'
    },
    {
      name: 'careerjet',
      label: 'Careerjet BD',
      url: 'https://www.careerjet.com.bd/merchandiser-jobs-in-dhaka.html',
      icon: '🌐',
      priority: 'low',
      description: 'International aggregator.'
    },
    {
      name: 'shomvob',
      label: 'Shomvob',
      url: 'https://shomvob.co',
      icon: '🇧🇩',
      priority: 'low',
      description: 'BD private sector portal.'
    },
    {
      name: 'glassdoor',
      label: 'Glassdoor',
      url: 'https://www.glassdoor.com/Job/dhaka-merchandiser-jobs-SRCH_IL.0,5_IC3225793_KO6,18.htm',
      icon: '⭐',
      priority: 'medium',
      description: 'Salary data + reviews + listings.'
    }
  ],

  /* ── B. Facebook Groups ─────────────────────────────────────────────────── */
  facebookGroups: [
    {
      name: 'JobsGtbm',
      label: 'Jobs Garments/Textiles/Buying & Merchandising',
      url: 'https://www.facebook.com/JobsGtbm/',
      icon: '👥',
      members: '1.6 lakh+',
      description: 'THE best niche group. Daily new merchandiser jobs. Join + All Posts notification ON.'
    },
    {
      name: 'atb_fb',
      label: 'atB Jobs Bangladesh',
      url: 'https://www.facebook.com/atBJobsBangladesh/',
      icon: '📱',
      members: 'Growing',
      description: 'Official atB Jobs page — new listings.'
    }
  ],

  /* ── C. LinkedIn Recruiter / Decision-Maker Search ──────────────────────── */
  recruiterSearch: [
    {
      label: 'Merchandising Manager / GM — Dhaka',
      url: 'https://www.linkedin.com/search/results/people/?keywords=merchandising%20manager%20dhaka',
      icon: '🎯',
      tip: 'These are decision-makers. Personalized connect = referral chance.'
    },
    {
      label: 'HR / Talent Acquisition — Apparel Dhaka',
      url: 'https://www.linkedin.com/search/results/people/?keywords=talent%20acquisition%20apparel%20dhaka',
      icon: '🤝',
      tip: 'They post & screen. Getting on their radar = shortlist.'
    },
    {
      label: 'BUTEX Senior Merchandiser (Alumni)',
      url: 'https://www.linkedin.com/search/results/people/?keywords=BUTEX%20merchandiser',
      icon: '🎓',
      tip: 'Same uni = 3x reply rate. Mama-bhai network = strongest.'
    },
    {
      label: 'BUTEX Alumni Page',
      url: 'https://www.linkedin.com/school/bangladesh-university-of-textiles/',
      icon: '🏫',
      tip: 'Use Alumni tab → filter by Merchandiser + Dhaka.'
    }
  ],

  /* ── D. Company Career Pages ────────────────────────────────────────────── */
  companyCareerPages: [
    { company: 'PVH (Calvin Klein, Tommy Hilfiger)', url: 'https://careers.pvh.com/', region: 'BD Sourcing' },
    { company: 'Marks & Spencer Sourcing', url: 'https://careers.marksandspencer.com/', region: 'Dhaka' },
    { company: 'Li & Fung', url: 'https://www.lifung.com/careers/', region: 'BD Office' },
    { company: 'Levi Strauss & Co.', url: 'https://www.levistrauss.com/careers/', region: 'South Asia' },
    { company: 'Hameem Group', url: 'https://www.hameemgroup.com/career', region: 'Dhaka/Gazipur' },
    { company: 'Inditex (Zara) Sourcing', url: 'https://www.inditex.com/itxcomweb/en/careers', region: 'BD' },
    { company: 'H&M Bangladesh', url: 'https://career.aboutyou.de/en/', region: 'Dhaka' },
    { company: 'Next Sourcing', url: 'https://careers.nextplc.co.uk/', region: 'BD' },
    { company: 'VF Corporation', url: 'https://vfc.wd5.myworkdayjobs.com/', region: 'BD' },
    { company: 'DEKKO Legacy Group', url: 'https://dhakacareers.com/jobs/merchandisersenior-merchandiser-dhaka-dekko-legacy-group/', region: 'Dhaka' },
    { company: 'Centric Brands', url: 'https://dhakacareers.com/jobs/specialist-operations-dhaka-centric-brands/', region: 'Dhaka' },
    { company: 'C&A Sourcing', url: 'https://dhakacareers.com/jobs/product-costing-engineer-dhaka-ca-sourcing-jobs-asia/', region: 'Dhaka' }
  ]
};


/* ─────────────────────────────────────────────────────────────────────────────
 * 2. LIVE_JOBS — scraped 2 June 2026
 * ───────────────────────────────────────────────────────────────────────────── */
const LIVE_JOBS = [
  {
    id: 1,
    title: 'Manager – Marketing & Merchandising',
    company: 'Q Collection',
    location: 'Gulshan, Dhaka',
    experience: '3-5 years',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/manager-marketing-merchandising-gulshan-q-collection/',
    source: 'DhakaCareers',
    matchLevel: 'stretch'
  },
  {
    id: 2,
    title: 'Executive/Senior Executive – Marketing & Merchandising',
    company: 'Q Collection',
    location: 'Gulshan, Dhaka',
    experience: '3-5 years',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/executive-senior-executive-marketing-merchandising-gulshan-q-collection/',
    source: 'DhakaCareers',
    matchLevel: 'good'
  },
  {
    id: 3,
    title: 'Senior Executive – Woven Fabric Sourcing',
    company: 'HZK TEX',
    location: 'Uttara, Dhaka',
    experience: 'Not specified',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/sr-executive-uttara-hzk-tex/',
    source: 'DhakaCareers',
    matchLevel: 'good'
  },
  {
    id: 4,
    title: 'Senior Merchandiser',
    company: 'Ayra Trading',
    location: 'Dhaka',
    experience: 'Not specified',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/senior-merchandiser-dhaka-ayra-trading/',
    source: 'DhakaCareers',
    matchLevel: 'target'
  },
  {
    id: 5,
    title: 'Assistant Merchandiser/Merchandiser (NEXT, OTCF, C&A, GUESS)',
    company: 'NextJobz Listing',
    location: 'Narayanganj',
    experience: 'Entry',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/assistant-merchandiser-merchandiser-nextotcfcaguess-narayanganj-nextjobz/',
    source: 'DhakaCareers',
    matchLevel: 'perfect'
  },
  {
    id: 6,
    title: 'Assistant Merchandiser',
    company: 'Texgroup Ltd',
    location: 'Dhaka',
    experience: '3 years',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/assistant-merchendiser-dhaka-texgroup-ltd/',
    source: 'DhakaCareers',
    matchLevel: 'good'
  },
  {
    id: 7,
    title: 'Sr. Merchandiser (NEXT buyer – Knit Garments)',
    company: 'Bengal Hurricane Group',
    location: 'Gazipur',
    experience: '5 years',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/sr-merchandiser-for-knit-garments-next-buyer-gazipur-bengal-hurricane-group/',
    source: 'DhakaCareers',
    matchLevel: 'stretch'
  },
  {
    id: 8,
    title: 'Merchandiser/Senior Merchandiser',
    company: 'DEKKO Legacy Group',
    location: 'Dhaka',
    experience: 'Not specified',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/merchandisersenior-merchandiser-dhaka-dekko-legacy-group/',
    source: 'DhakaCareers',
    matchLevel: 'target'
  },
  {
    id: 9,
    title: 'Merchandising Manager – Apparels (Buying House)',
    company: 'Stap Management Consultants',
    location: 'Dhaka',
    experience: '10+ years',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/merchandising-manager-apparels-for-reputed-buying-house-based-in-dhaka-dhaka-stap-management-consultants/',
    source: 'DhakaCareers',
    matchLevel: 'future'
  },
  {
    id: 10,
    title: 'Specialist, Operations',
    company: 'Centric Brands',
    location: 'Dhaka',
    experience: 'Not specified',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/specialist-operations-dhaka-centric-brands/',
    source: 'DhakaCareers',
    matchLevel: 'good'
  },
  {
    id: 11,
    title: 'Business Development Executive',
    company: 'NITEX',
    location: 'Dhaka',
    experience: '3 years',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/business-development-executive-dhaka-nitex/',
    source: 'DhakaCareers',
    matchLevel: 'alternative'
  },
  {
    id: 12,
    title: 'Product Costing Engineer',
    company: 'C&A Sourcing Jobs Asia',
    location: 'Dhaka',
    experience: 'Not specified',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/product-costing-engineer-dhaka-ca-sourcing-jobs-asia/',
    source: 'DhakaCareers',
    matchLevel: 'good'
  },
  {
    id: 13,
    title: 'Apprentice – Merchandising/Garment Tech/Fabric Tech',
    company: 'Dongyi Sourcing HK Limited',
    location: 'Dhaka',
    experience: 'Entry',
    type: 'Full Time',
    url: 'https://dhakacareers.com/jobs/apprentice-merchandising-garment-technology-fabric-technology-dhaka-dongyi-sourcing-hk-limited/',
    source: 'DhakaCareers',
    matchLevel: 'below'
  }
];


/* ─────────────────────────────────────────────────────────────────────────────
 * 3. INTERVIEW_QUESTIONS — 35 Q&A for merchandiser interviews
 * ───────────────────────────────────────────────────────────────────────────── */
const INTERVIEW_QUESTIONS = [

  /* ══════════════════════════════════════════════════════════════════════════
   * A. General & Behavioral  (10 questions)
   * ══════════════════════════════════════════════════════════════════════════ */
  {
    id: 'gb-01',
    question: 'Tell me about yourself.',
    category: 'General & Behavioral',
    answer: `I am S.M. Rahat, a Textile Engineering graduate from Bangladesh University of Textiles (BUTEX). I currently work as an Assistant Merchandiser at Interstoff Apparels Ltd, handling the Marks & Spencer woven-bottoms account. My journey started as a Management Trainee in December 2024, and I was promoted to Assistant Merchandiser within six months based on my performance in costing, sampling coordination, and buyer communication.

On the M&S account, I manage the full product lifecycle — from tech-pack analysis and consumption calculation through sample development, lab-dip approval, T&A monitoring, and final shipment documentation. I work daily with FlexPLM for product data management and AlgoERP for order tracking. My BUTEX education gave me deep fabric and garment construction knowledge, which helps me catch quality issues early.

Beyond my day job, I built a machine-learning-based fabric fault detection system during university, and I maintain a portfolio at smrahat-hub.github.io. I am now ready to step up to a Merchandiser or Senior Merchandiser role where I can independently manage buyer accounts and lead order execution from start to finish.`,
    tips: [
      'Keep to 90 seconds maximum',
      'Follow the Present → Past → Future structure',
      'Mention BUTEX + M&S account immediately for credibility',
      'End with what you are looking for (Merchandiser role)'
    ]
  },
  {
    id: 'gb-02',
    question: 'Why do you want to work in a buying house instead of a factory?',
    category: 'General & Behavioral',
    answer: `A buying house gives me direct exposure to international buyers, which is exactly what excites me about merchandising. At Interstoff, I have already experienced this — I coordinate directly with M&S product development teams, handle their compliance requirements, and manage communications across time zones. In a factory, the merchandiser often works through a buying house intermediary, but I prefer the direct line to the buyer because it lets me understand their brand DNA, quality expectations, and seasonal strategy firsthand.

Buying houses also offer broader exposure. Instead of working with one factory's production capacity, I get to work with multiple suppliers, compare their strengths, and make sourcing decisions. This strategic thinking — matching the right product to the right factory — is the part of merchandising I find most intellectually stimulating.

Additionally, buying houses tend to offer more structured career progression and exposure to multiple buyer accounts over time. My goal is to eventually manage an entire buyer account independently, and a buying house is the best environment for that growth.`,
    tips: [
      'Show you understand the structural difference',
      'Reference your current buying-house experience at Interstoff',
      'Never badmouth factories — frame it as preference for buyer proximity',
      'Mention multi-supplier strategic sourcing as an advantage'
    ]
  },
  {
    id: 'gb-03',
    question: 'What are your greatest strengths and weaknesses?',
    category: 'General & Behavioral',
    answer: `My greatest strength is my technical foundation combined with commercial sense. Because I studied Textile Engineering at BUTEX, I understand fabric construction, dyeing chemistry, and garment technology at a level that most merchandisers don't. When I do a costing sheet, I can independently verify fabric consumption, wastage, and process loss rather than relying blindly on factory inputs. This has saved Interstoff from quoting errors multiple times on the M&S account.

My second strength is systematic follow-up. I use T&A trackers religiously and flag delays 48 hours before they become critical. My manager has noted that I am "the person who never lets a deadline slip without escalation." I also pick up software quickly — I became proficient in FlexPLM and AlgoERP within my first two months.

For weakness, I would say I sometimes over-focus on technical accuracy and spend too much time perfecting a cost sheet when "good enough" would suffice for an initial quotation. I have been actively working on this by setting time-boxes for myself — for example, I now cap initial costing at 45 minutes and refine only after buyer shows interest. This has improved my speed without sacrificing quality.`,
    tips: [
      'Strengths should directly relate to the merchandiser role',
      'Quantify where possible (saved from errors, 48 hours early, 45-minute cap)',
      'Weakness must be genuine but not disqualifying',
      'Always show you are actively fixing your weakness'
    ]
  },
  {
    id: 'gb-04',
    question: 'How do you handle pressure and tight deadlines?',
    category: 'General & Behavioral',
    answer: `In merchandising, pressure is not occasional — it is the default. On the M&S account at Interstoff, I have managed situations where a lab dip was rejected three times and the buyer's deadline was just five days away. My approach is to immediately triage: what is the critical path? I break the problem into what I can control (re-submitting with adjusted recipe, coordinating with the dyeing lab directly) versus what needs escalation (requesting a deadline extension from the buyer with a clear revised timeline).

I also proactively build buffer into my T&A plans. I typically set internal deadlines 3-5 days ahead of buyer deadlines, so when something goes wrong — and something always goes wrong — I have room to maneuver. This habit has meant that in my time at Interstoff, we have not missed a single committed shipment date on my orders.

Beyond systems, I manage my own stress through prioritization. I start each morning by identifying the top three "fires" for the day and address those first before moving to routine follow-ups. I have found that handling the hardest thing first gives me mental clarity for the rest of the day.`,
    tips: [
      'Give a specific example from M&S account',
      'Show your system — T&A buffers, prioritization, escalation protocol',
      'Mention zero missed shipment dates as a proof point',
      'Stay calm while answering — tone matters here'
    ]
  },
  {
    id: 'gb-05',
    question: 'Why did you choose merchandising as a career?',
    category: 'General & Behavioral',
    answer: `When I entered BUTEX, I expected to end up in a factory production role like most textile engineers. But during my internship at Esquire Knit Composite Ltd, I observed the merchandising team and was fascinated by how they sat at the intersection of business, creativity, and technical knowledge. They were negotiating prices, reviewing design concepts, solving quality problems, and coordinating with people across continents — all in the same day. No two days were the same, and that variety hooked me.

What sealed it was realizing that merchandising is the only role in the apparel value chain where you see the full picture — from the buyer's initial concept through fabric sourcing, sample development, production, quality control, and final shipment. A production manager sees one factory; a merchandiser sees the entire supply chain. That holistic view, combined with the commercial responsibility of managing millions of taka in orders, is what makes this career deeply satisfying to me.

My BUTEX background actually gives me a competitive edge in merchandising — I understand the "why" behind fabric behavior, not just the "what." When a buyer asks for a specific hand-feel or drape, I can translate that into fiber blend and construction parameters, which earns trust.`,
    tips: [
      'Connect your BUTEX education to merchandising logically',
      'Reference your Esquire Knit internship as the turning point',
      'Show passion — this should not sound like a default choice',
      'Highlight the holistic supply-chain view'
    ]
  },
  {
    id: 'gb-06',
    question: 'Where do you see yourself in 3-5 years?',
    category: 'General & Behavioral',
    answer: `In three years, I see myself as a Senior Merchandiser independently managing a major buyer account — ideally a European retailer with complex compliance and sustainability requirements, similar to M&S. I want to be the person the buyer trusts to handle their seasonal orders end-to-end, from development through shipment, with minimal supervision.

In five years, I aim to be in a Merchandising Manager role, leading a team of 3-5 merchandisers across multiple buyer accounts. I want to build a team that combines technical rigor with proactive communication — the two things I believe separate great merchandising teams from average ones. I would also like to contribute to sustainability initiatives, such as implementing better traceability systems and preferred fiber sourcing, because that is where the industry is heading and buyers like M&S are already demanding it.

Longer term, I am interested in how technology can transform merchandising — my university project on ML-based fabric fault detection showed me the potential of data-driven quality management. I believe the next generation of merchandising leaders will need both commercial acumen and tech fluency, and I am positioning myself for that.`,
    tips: [
      'Show ambition but keep it realistic for BD market',
      'Tie your goals to the company\'s growth — "I want to grow here"',
      'Mention sustainability and tech as forward-thinking differentiators',
      'Avoid saying "I want your job" — frame as team leadership'
    ]
  },
  {
    id: 'gb-07',
    question: 'Give an example of successful teamwork.',
    category: 'General & Behavioral',
    answer: `During my time handling the M&S woven-bottoms account at Interstoff, we had a critical situation where a bulk fabric shipment arrived with shade variation across multiple rolls, and the production start date was just three days away. This required coordination across merchandising, quality, sourcing, and the factory floor.

I took the lead in organizing a cross-functional meeting within two hours of the issue being identified. I worked with the fabric QC team to classify the shade bands and determine which rolls could be used together. I then coordinated with the factory's cutting department to create a shade-wise cutting plan that would prevent visible shade differences within individual garments. Simultaneously, I communicated with the M&S product development team, sharing photos and our remediation plan, to get their advance approval before we cut.

The result was that we started production only one day late instead of the expected one-week delay, saved approximately 8 lakh BDT in potential re-ordering costs, and received positive feedback from M&S for our transparent and proactive handling. This experience taught me that effective teamwork is not about everyone doing their part independently — it is about someone connecting the dots across functions, and I naturally gravitate toward that connector role.`,
    tips: [
      'Use the STAR format: Situation → Task → Action → Result',
      'Quantify the result (1 day vs 1 week, 8 lakh saved)',
      'Position yourself as the coordinator, not the hero',
      'Show cross-functional collaboration'
    ]
  },
  {
    id: 'gb-08',
    question: 'How do you handle conflict with a colleague or supplier?',
    category: 'General & Behavioral',
    answer: `I approach conflict as a problem-solving exercise, not a personal battle. At Interstoff, I once had a situation where a fabric supplier consistently pushed back on our consumption requirements for M&S orders, claiming our calculations were inflated. Instead of escalating immediately or accepting their numbers blindly, I sat down with the supplier's technical team with actual marker plans and consumption worksheets.

I walked them through our calculation methodology — body fabric, contrast, pocket lining, wastage, end-bits, and the M&S-specific additional allowance for re-cuts. Once they saw the breakdown with supporting data, they acknowledged that their standard consumption template did not account for M&S's more conservative cutting approach. We agreed on a revised consumption figure that was fair to both sides — slightly lower than our original but higher than their initial pushback.

The key lesson I have learned is to always separate the person from the problem. In BD's apparel industry, relationships are everything — you will work with the same suppliers and colleagues for years. So I never make it personal. I focus on data, shared goals, and finding a middle ground. If the conflict is interpersonal rather than technical, I address it directly and privately rather than letting it fester.`,
    tips: [
      'Show you are data-driven, not emotional',
      'Give a supplier conflict example — very relevant for merchandising',
      'Emphasize relationship preservation in BD context',
      'Mention direct communication over avoidance'
    ]
  },
  {
    id: 'gb-09',
    question: 'Why are you looking to leave your current job?',
    category: 'General & Behavioral',
    answer: `I want to be clear — I have great respect for Interstoff Apparels and the team I work with. They gave me my start in the industry, promoted me from Management Trainee to Assistant Merchandiser, and the M&S account has taught me immensely about compliance, product development, and buyer management. I am not running away from anything negative.

What I am looking for is growth acceleration. I have developed strong foundations in costing, sampling, T&A management, and buyer communication. I now want a role where I can independently manage orders end-to-end as a Merchandiser, take ownership of pricing decisions, and have direct accountability for shipment targets. My current role, while excellent for learning, still positions me in a supporting capacity. I believe I am ready for the next level.

Additionally, I am interested in gaining exposure to multiple buyer accounts and product categories. Working with a larger buying house or one with diverse buyer portfolios would accelerate my development in ways that my current single-buyer focus cannot. It is a move driven by ambition and readiness, not dissatisfaction.`,
    tips: [
      'NEVER badmouth your current employer — ever',
      'Frame it as growth, not escape',
      'Acknowledge what Interstoff taught you — shows gratitude',
      'Position the move as "ready for more responsibility"'
    ]
  },
  {
    id: 'gb-10',
    question: 'What are your salary expectations?',
    category: 'General & Behavioral',
    answer: `I am primarily focused on finding the right role and the right team — a position where I can grow into a Senior Merchandiser within 2-3 years. That said, I have done my market research and understand the current compensation landscape for Merchandiser-level roles in Dhaka buying houses.

Based on my qualifications — BUTEX Textile Engineering degree, hands-on M&S account experience covering costing, sampling, T&A, and compliance, plus proficiency in FlexPLM and AlgoERP — I would like to understand what the budgeted range is for this position. I am confident we can find a number that reflects the value I bring while being fair to the company.

If pressed for a number, I would say that based on market data and my skill set, I am targeting a package in the range of 65,000 to 80,000 BDT per month, inclusive of basic and allowances. However, I am flexible and would consider the total package — transport, meal allowance, medical, bonus structure, and career progression path all factor into my decision.`,
    tips: [
      'Try to get THEM to say a number first',
      'If pushed, give a range (65-80k) rather than a single number',
      'Always mention total package, not just basic salary',
      'Reference market research to justify your range',
      'Never reveal your current salary if it is low — deflect to "target range"'
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
   * B. Technical — Costing & Commercial  (8 questions)
   * ══════════════════════════════════════════════════════════════════════════ */
  {
    id: 'tc-01',
    question: 'Explain the garment costing process step by step.',
    category: 'Technical - Costing & Commercial',
    answer: `The garment costing process starts with receiving the buyer's tech pack or specification sheet, which contains the style details, fabric requirements, construction specifications, and any special finishes or treatments. At Interstoff on the M&S account, I begin by analyzing the tech pack to identify all cost components: fabric (body, lining, contrast), trims (buttons, zippers, labels, threads, hangtags), accessories (polybag, carton, tissue), embellishments (print, embroidery, wash), CMT (Cut-Make-Trim), and commercial costs (testing, inspection, inland freight, port charges).

For each component, I calculate consumption first. Fabric consumption is derived from the marker plan or estimated using body measurements plus allowances (seam, hem, shrinkage, end-bits, wastage). I then multiply consumption by unit price to get the per-garment cost for each item. I compile all component costs, add factory CM (cost of manufacturing), testing charges, inspection fees, inland transport, and the buying house commission or margin. This gives the FOB price.

If the buyer requires CIF or C&F terms, I add freight and insurance on top. Once I have the preliminary costing, I cross-check it against the buyer's target price. If there is a gap, I work with the sourcing team to negotiate fabric prices, explore alternative suppliers, adjust specifications within buyer tolerance, or negotiate CM rates with factories. The final cost sheet is reviewed by my senior merchandiser before submission to the buyer through FlexPLM.`,
    tips: [
      'Walk through it sequentially — tech pack → consumption → costing → negotiation',
      'Mention specific components (CM, testing, inland freight) to show depth',
      'Reference FlexPLM as the tool you use for submission',
      'Show you verify factory-provided data independently'
    ]
  },
  {
    id: 'tc-02',
    question: 'What is included in an FOB price breakdown?',
    category: 'Technical - Costing & Commercial',
    answer: `FOB (Free On Board) is the most common pricing term in Bangladesh's RMG export industry. The FOB price breakdown includes all costs up to the point where goods are loaded onto the vessel at the port of export. Here is the typical structure I use at Interstoff for M&S orders:

Fabric Cost is the largest component, typically 55-65% of FOB. This includes body fabric, lining, contrast fabrics, and interlining, each calculated as consumption (yards/meters per garment) × unit price. Trims & Accessories usually account for 8-12% — this covers sewing thread, buttons, zippers, main labels, care labels, size labels, hangtags, price tickets, poly bags, back boards, cartons, and packing materials. CM (Cost of Manufacturing) covers cutting, sewing, finishing, and packing labor and overhead — typically 15-25% depending on the garment complexity and the factory's efficiency.

Then we add Testing & Inspection charges (usually $0.03-0.08/piece for third-party testing like SGS/Bureau Veritas, plus buyer's QC inspection fees). Commercial costs include inland transportation from factory to port, port handling charges, C&F agent fees, and any duty/bond-related costs. Finally, there is the buying house commission or margin — typically 5-8% for a sourcing office like Interstoff. Profit margin for the factory is built into their CM quote. The sum of all these gives the total FOB price per garment.`,
    tips: [
      'List all components systematically',
      'Give percentage breakdowns to show you understand relative weights',
      'Mention testing and inspection separately — shows attention to detail',
      'Reference your actual M&S experience for credibility'
    ]
  },
  {
    id: 'tc-03',
    question: 'How do you calculate CM (Cost of Manufacturing)?',
    category: 'Technical - Costing & Commercial',
    answer: `CM (Cost of Manufacturing) or sometimes called CMT (Cut-Make-Trim) is calculated based on the factory's production capacity, efficiency, and overhead structure. There are two common methods: the SAM-based method and the line-rate method.

The SAM-based method is more precise. SAM (Standard Allowed Minutes) represents the total minutes required to produce one garment, as determined by the industrial engineering (IE) department through time-and-motion study. CM per piece = (SAM × Cost per Minute). The cost per minute is derived from: (Total factory monthly cost ÷ Total available production minutes per month). Total factory cost includes operator wages, supervisor salary, utilities, rent, depreciation, maintenance, and administrative overhead. For example, if a basic trouser has SAM of 25 minutes and the factory's cost per minute is BDT 3.50, then CM = 25 × 3.50 = BDT 87.50 per piece.

The line-rate method is simpler: CM per piece = (Daily line cost ÷ Daily output). If a line costs BDT 50,000/day to operate and produces 600 pieces, CM = 50,000 ÷ 600 = BDT 83.33. In practice at Interstoff, factories quote us CM rates, and I cross-verify them against SAM estimates and benchmark against similar styles we have done before. If a factory quotes significantly above benchmark, I ask them to justify with their SAM breakdown and negotiate accordingly.`,
    tips: [
      'Know both SAM-based and line-rate methods',
      'Give a worked numerical example',
      'Show you cross-verify factory CM quotes — not just accept them',
      'Mention SAM, IE department — shows factory-floor knowledge'
    ]
  },
  {
    id: 'tc-04',
    question: 'What are the different types of Letter of Credit (L/C)?',
    category: 'Technical - Costing & Commercial',
    answer: `A Letter of Credit is a bank guarantee that the buyer's bank will pay the seller upon presentation of compliant shipping documents. In BD's RMG industry, L/C is the dominant payment mechanism for export orders. The main types I encounter at Interstoff for M&S and other buyers are:

Irrevocable L/C — the most common. Once issued, it cannot be amended or cancelled without agreement from all parties (buyer, seller, and both banks). Almost all BD garment export L/Cs are irrevocable. Confirmed L/C adds a second bank's guarantee on top of the issuing bank's — useful when the buyer's country or bank has credit risk, though rare for M&S since their banks are top-tier. At-sight L/C means payment is made immediately upon presentation of compliant documents — most common in BD garments. Usance (Deferred) L/C allows payment after a specified period (e.g., 60 or 90 days after shipment) — this is becoming more common as buyers push for longer payment terms.

Back-to-back L/C is critical in BD's buying house model. When Interstoff receives the master L/C from M&S's bank, we open back-to-back L/Cs in favor of our fabric and trims suppliers against the master L/C. This allows the supply chain to function without the buying house needing to fund the entire order upfront. Transferable L/C allows the beneficiary to transfer part or all of the credit to another party — sometimes used when a buying house wants to pass the L/C to a factory directly. Revolving L/C automatically reinstates after each utilization — useful for repeat orders.`,
    tips: [
      'Focus on Irrevocable, At-sight, Usance, and Back-to-back — these are the ones you will encounter daily',
      'Explain Back-to-back L/C well — it is fundamental to buying house operations',
      'Mention that BD garment L/Cs are almost always irrevocable at-sight',
      'Show you understand the practical application, not just textbook definitions'
    ]
  },
  {
    id: 'tc-05',
    question: 'Explain the difference between CIF, FOB, and C&F.',
    category: 'Technical - Costing & Commercial',
    answer: `These are Incoterms (International Commercial Terms) that define who bears cost and risk at each stage of shipping. In BD's RMG exports, FOB is the most common, but understanding all three is essential.

FOB (Free On Board) means the seller (exporter/factory) bears all costs and risks until the goods are loaded onto the vessel at the port of export (e.g., Chittagong port). Once the goods cross the ship's rail, risk transfers to the buyer. The FOB price includes everything up to port loading — fabric, trims, CM, testing, inspection, inland transport, and port charges. The buyer arranges and pays for ocean freight and insurance. This is the standard term for most M&S orders I handle at Interstoff.

C&F (Cost and Freight, formally CFR) means the seller pays for everything in FOB plus the ocean freight to the destination port. However, risk still transfers at the port of loading — so if the ship sinks, the buyer bears the loss (which is why buyers usually insist on CIF instead). CIF (Cost, Insurance, and Freight) is C&F plus marine insurance. The seller pays for freight and insures the cargo to the destination port. The buyer only takes risk once goods arrive at the destination port.

In practice, the price progression is: FOB < C&F < CIF. When quoting, I calculate FOB first and then add freight and insurance estimates if the buyer requires C&F or CIF terms. For M&S, we typically work on FOB terms, with M&S arranging their own nominated forwarder for ocean freight.`,
    tips: [
      'Draw the cost/risk transfer points clearly',
      'Know that FOB is the BD standard',
      'Mention that M&S uses nominated forwarders — shows real experience',
      'Understand that CFR is the official Incoterm, C&F is the industry shorthand'
    ]
  },
  {
    id: 'tc-06',
    question: 'How do you calculate fabric consumption for a basic shirt?',
    category: 'Technical - Costing & Commercial',
    answer: `Fabric consumption calculation is one of the most critical skills for a merchandiser because fabric accounts for 55-65% of the garment cost. A small error in consumption directly impacts profitability. Here is my approach for a basic long-sleeve woven shirt:

The precise method uses a marker plan. I take the pattern pieces — front panel (2), back panel, collar, collar band, cuff (2), sleeve (2), yoke, pocket, placket — and arrange them on the fabric width in CAD or manually to get the marker length. Marker efficiency should be 80-85%+ for a well-optimized layout. Consumption = (Marker length × Fabric width) ÷ Number of garments in the marker. But in practice, for initial costing before patterns are available, I use the estimation method.

For estimation, I use body measurements: (Body length + Sleeve length + allowances) × (Chest width + allowances) × 2 (front + back) ÷ Fabric width. For a medium-size shirt with body length 76cm, sleeve length 65cm, chest half 56cm, on 58-inch (147cm) fabric: roughly [(76+65+15) × (56+5) × 2] ÷ 147 ÷ 10000 = approximately 1.35-1.45 meters per piece. Then I add allowances: shrinkage (typically 3-5% for woven cotton), wastage/end-bits (typically 2-3%), and M&S-specific re-cut allowance. Final consumption for costing might be 1.55-1.65 meters/piece.

I always cross-check my estimate against historical data from similar styles in our ERP system before submitting the costing.`,
    tips: [
      'Show you know both marker-based and estimation methods',
      'Give actual numbers — interviewers want to see you can calculate, not just describe',
      'Mention shrinkage and wastage allowances — many candidates forget these',
      'Reference cross-checking against historical data — shows thoroughness'
    ]
  },
  {
    id: 'tc-07',
    question: 'How do you negotiate costs with suppliers and factories?',
    category: 'Technical - Costing & Commercial',
    answer: `Cost negotiation in the BD garment industry requires a combination of market knowledge, relationship management, and data-driven argumentation. At Interstoff, when I need to bring down costs to meet M&S's target price, I follow a structured approach.

First, I benchmark. Before negotiating with any factory, I compare their quoted CM against 2-3 other factories that have produced similar styles for us. I also benchmark fabric prices against at least 3 supplier quotations and check against industry indices like Cotton Outlook for raw material trends. Armed with this data, I can tell a factory, "Your CM quote of BDT 95 for this trouser is 15% above what Factory X quoted for a similar SAM last season. Can you walk me through your SAM breakdown?"

Second, I look for non-price levers. Instead of just pushing for a lower number, I explore: Can we use a slightly lower-GSM fabric that still meets buyer specs? Can we change the button material from horn to corozo to save 5 taka per piece? Can we offer a larger order quantity in exchange for a volume discount? Can we agree to a longer payment term (90 days instead of 60) which reduces the factory's working capital cost?

Third, I always negotiate with respect and long-term perspective. In Bangladesh, the supplier relationship is personal. I make sure suppliers feel valued, pay on time, and share forecasts early. This relationship equity means when I need a cost concession, they are willing to accommodate because they know we are a reliable, long-term partner.`,
    tips: [
      'Show your benchmarking methodology — data, not gut feeling',
      'Mention non-price levers — quantity, payment terms, spec adjustments',
      'Emphasize relationship-based negotiation — critical in BD context',
      'Give specific examples of savings you have achieved'
    ]
  },
  {
    id: 'tc-08',
    question: 'What is a standard wastage percentage and how do you account for it?',
    category: 'Technical - Costing & Commercial',
    answer: `Wastage percentage varies by material type, garment complexity, and buyer requirements. In my experience at Interstoff on M&S orders, the typical wastage allowances are: Body fabric 2-3% for woven, 3-5% for knit (knits stretch and have more spreading waste). Trims like sewing thread typically 5-10% wastage. Buttons and rivets 2-3%. Labels and tags 1-2%. Interlining 3-5%. Elastic 3-5%.

These percentages account for end-bits (fabric left at the beginning and end of each roll that cannot be included in the marker), selvedge waste, defective portions of fabric that must be cut away, re-cuts (garments that need to be re-cut due to fabric defects or cutting errors), and general handling loss. M&S is particularly strict about quality, so we typically add a slightly higher re-cut allowance (1-1.5% additional) compared to some other buyers.

In the costing sheet, I calculate net consumption first (from marker or estimation) and then add wastage on top. For example, if net fabric consumption is 1.50 meters/piece and wastage is 3%, then gross consumption for costing = 1.50 × 1.03 = 1.545 meters/piece. I always round up slightly for safety because under-estimation leads to fabric shortages during production, which can delay shipment and require emergency re-ordering at higher cost.`,
    tips: [
      'Know the standard percentages by material type',
      'Explain why M&S might have higher allowances (quality strictness)',
      'Show the calculation method (net × wastage factor = gross)',
      'Mention the consequences of under-estimation — shows risk awareness'
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
   * C. Technical — Sampling & Production  (7 questions)
   * ══════════════════════════════════════════════════════════════════════════ */
  {
    id: 'ts-01',
    question: 'What are the different types of samples in garment merchandising?',
    category: 'Technical - Sampling & Production',
    answer: `Sample development is a critical stage that bridges the gap between buyer concept and bulk production. At Interstoff on the M&S account, I coordinate multiple sample stages. The typical sequence is:

Proto Sample (Prototype) — the first physical sample made from buyer's tech pack or sketch. It is usually made in available fabric (not actual fabric) to check the design, fit, and construction. This is about getting the concept right. Fit Sample — made after proto comments, focused on achieving the correct measurements, fit, and proportions on a live model or dress form. M&S is extremely particular about fit and may require 2-3 fit sample iterations. Size Set Sample — after fit approval, samples are made in all sizes (S, M, L, XL, etc.) to verify grading across the size range.

Salesman Sample (SMS) or Sales Sample — used by the buyer for retail presentation, showroom display, or sales meetings. Must be in actual fabric and with all correct trims, labeling, and finishing. This is what M&S would show to their retail buying team. Pre-Production Sample (PP Sample) — the final reference sample before bulk cutting begins. Must be in actual production fabric and trims, with all specifications finalized. Once buyer approves PP, it becomes the sealed reference for production. Top of Production (TOP) Sample / Shipment Sample — pulled from the actual production line to show the buyer what bulk production looks like. This is the final quality checkpoint before or during shipment.

Additionally, there are Lab Dip (for color approval), Strike-Off (for print approval), and Wash Sample (for wash effect approval), which run parallel to the garment sample process.`,
    tips: [
      'List them in correct chronological order — proto → fit → size set → SMS → PP → TOP',
      'Mention lab dip, strike-off, and wash samples as parallel processes',
      'Show that M&S requires multiple fit iterations — demonstrates real experience',
      'Know the purpose of each sample — not just the name'
    ]
  },
  {
    id: 'ts-02',
    question: 'What is a T&A (Time & Action) plan and how do you manage it?',
    category: 'Technical - Sampling & Production',
    answer: `A T&A (Time & Action) plan is the master timeline that maps every critical milestone from order confirmation to shipment, with specific dates for each activity and the responsible party. It is the most important planning tool in merchandising — if the T&A is wrong or not followed, the shipment will be late.

At Interstoff for M&S orders, my T&A typically includes 30-40 line items, covering: Order confirmation date → Lab dip submission/approval → Fabric booking → Strike-off/print approval → Fit sample submission/approval → Fabric in-house date → Trims in-house date → PP sample submission/approval → PP meeting → Bulk cutting start → Sewing start → Washing (if applicable) → Finishing → Final inspection date → Ex-factory date → Port stuffing → Vessel sailing → ETD → ETA.

I manage T&A using Excel with conditional formatting (red/amber/green based on delays) and also track key milestones in AlgoERP. My management approach involves three disciplines: First, I review the T&A every morning and flag any activity that is within 48 hours of deadline but not progressing. Second, I hold weekly T&A review meetings with factories and send them formal reminder emails on upcoming deadlines. Third, I escalate immediately when a milestone is at risk — I never wait until it is missed to inform my senior or the buyer.

The most common T&A risks I have experienced on M&S orders are: late fabric arrival (which cascades through the entire plan), extended sample approval cycles (M&S can take 5-7 days for comments), and lab test failures requiring re-submission. Building 3-5 day buffers at critical stages has been my best defense.`,
    tips: [
      'List specific T&A milestones to show you know the detail',
      'Explain your monitoring system — daily review, conditional formatting, weekly meetings',
      'Mention specific risks and buffer strategy',
      'Reference AlgoERP or the actual tools you use'
    ]
  },
  {
    id: 'ts-03',
    question: 'What does AQL mean and how is it used in garment inspection?',
    category: 'Technical - Sampling & Production',
    answer: `AQL stands for Acceptable Quality Level (or Acceptance Quality Limit under ISO 2859-1). It is a statistical sampling method used to determine whether a production lot meets quality standards without inspecting every single garment. AQL defines the maximum percentage of defective items that can be considered acceptable in a sample drawn from the lot.

In garment inspection, AQL is used at three levels: AQL 1.0 (tight) for critical defects — things that make the garment unsafe or completely unusable (broken needle left in garment, sharp exposed metal). AQL 2.5 (normal) for major defects — defects that would likely cause a consumer complaint or return (wrong size label, significant shade variation, major staining, broken seam). AQL 4.0 (relaxed) for minor defects — defects that are noticeable but unlikely to cause a complaint (slight thread trimming issue, minor shade variation within tolerance, small uncut thread).

At M&S, the inspection protocol uses AQL 2.5 for major defects and AQL 4.0 for minor defects, following their P15 inspection standard. The inspection sample size is determined by the lot size using the AQL sampling table (based on ISO 2859-1 / MIL-STD-105E). For example, for a lot of 3,201-10,000 pieces at General Inspection Level II, the sample size is 200 pieces. If the number of defective pieces in the sample exceeds the AQL reject number, the entire lot fails and must be 100% re-inspected and remediated.

As a merchandiser, I ensure factories understand AQL requirements upfront during the PP meeting and monitor in-line inspection results to catch quality trends before final inspection.`,
    tips: [
      'Know the three levels: 1.0 critical, 2.5 major, 4.0 minor',
      'Give examples of defects in each category',
      'Mention the M&S-specific inspection standard (P15)',
      'Show practical application — PP meeting communication, in-line monitoring'
    ]
  },
  {
    id: 'ts-04',
    question: 'What is the difference between lab dip and strike-off?',
    category: 'Technical - Sampling & Production',
    answer: `Lab dip and strike-off are both color/print approval processes, but they serve different purposes and apply to different scenarios.

A Lab Dip is a small swatch of actual production fabric that has been dyed to match the buyer's target color (usually a Pantone reference or a physical standard). The dye house creates 2-3 shade options using different dye recipes, and these are submitted to the buyer for visual and instrumental assessment (using a spectrophotometer for Delta E measurement). The buyer approves the closest match, and that recipe becomes the production standard. At M&S, they require lab dips to be assessed under D65 daylight and CWF (cool white fluorescent) illuminants, and the Delta E should typically be within 1.0 for approval. I coordinate lab dip submissions through M&S's eDiTRAC system.

A Strike-Off is an approval sample for printed fabrics. It involves actually printing the design (whether screen print, digital print, rotary print, or discharge print) on a sample piece of the actual production fabric using the actual production printing method. This allows the buyer to evaluate not just the color accuracy but also the print placement, repeat, registration, hand-feel after printing, and wash durability. For M&S, strike-offs must be submitted with a wash test to show the print holds up after laundering.

In short: Lab dip = dye color approval for solid-dyed fabrics. Strike-off = print design and color approval for printed fabrics. Both must be approved before bulk fabric production begins, and delays in either directly impact the T&A.`,
    tips: [
      'Clearly distinguish: lab dip for dyeing, strike-off for printing',
      'Mention Pantone, Delta E, spectrophotometer — shows technical depth',
      'Reference M&S eDiTRAC system for lab dip submissions',
      'Connect both to T&A impact — shows you think about the bigger picture'
    ]
  },
  {
    id: 'ts-05',
    question: 'What happens in a PP (Pre-Production) meeting?',
    category: 'Technical - Sampling & Production',
    answer: `The PP (Pre-Production) meeting is the final alignment meeting before bulk production begins. It is arguably the most important meeting in the entire order lifecycle because it ensures every stakeholder — factory production team, quality team, merchandising team, and sometimes the buyer's QC — is on the same page about what is to be produced.

At Interstoff, I help organize PP meetings for M&S orders, and the typical agenda covers: Review of approved PP sample against sealed reference — checking construction, measurements, fabric, trims, and finish. Fabric and trims status — confirming all materials are in-house or have confirmed delivery dates. Reviewing the approved BOM (Bill of Materials) — every component with exact specifications, suppliers, and consumption. Production timeline — cutting date, sewing plan, finishing target, inspection dates, and ex-factory date. Quality standards — AQL levels, measurement tolerances, critical quality points for the style (e.g., pattern matching at side seams, stitching SPI requirements, button pull strength). Packing specifications — folding method, polybag size, carton markings, assortment, and ratio packing.

The PP meeting minutes are documented and signed by all parties as a binding reference. Any deviation from what was agreed in the PP meeting requires written approval. I have learned that a well-conducted PP meeting prevents 80% of production-stage quality issues because the factory's production supervisor, line chief, and QC team all hear the requirements directly rather than through filtered communication.`,
    tips: [
      'List the specific agenda items — shows you have attended/organized PP meetings',
      'Emphasize that PP minutes are a binding reference',
      'Mention the "80% prevention" point — shows you understand the meeting\'s strategic value',
      'Reference both merchandising and quality perspectives'
    ]
  },
  {
    id: 'ts-06',
    question: 'How do you follow up on bulk production to ensure on-time delivery?',
    category: 'Technical - Sampling & Production',
    answer: `Bulk production follow-up is where merchandising becomes operations management. At Interstoff, I follow a structured daily/weekly rhythm to ensure M&S orders stay on track.

Daily monitoring includes: Checking the cutting report — how many pieces are cut versus the plan? Is the cutting room on track for the sewing-in date? Reviewing sewing output — daily line output versus target. If the line is producing 500 pieces/day but the plan requires 600, I flag immediately and discuss with the factory PM about adding capacity or overtime. Checking quality reports — in-line defect rates. If the defect rate crosses 5%, I escalate because it signals a systemic issue that will worsen.

Weekly I conduct factory visits (or video calls for remote factories) to physically inspect production quality, check fabric inventory status, and review the updated production schedule. I maintain a production tracker in Excel that shows daily output versus plan, color-coded for ahead/on-track/behind status. This tracker is shared with my senior merchandiser and the buyer's production team at M&S.

When delays happen — and they will — my escalation protocol is: First, quantify the delay (how many days?). Second, identify the root cause (machine breakdown? operator shortage? fabric shortage?). Third, propose a recovery plan (overtime? adding a second line? partial shipment?). Fourth, communicate proactively to the buyer with the problem, root cause, and proposed solution — never just the problem alone. M&S respects transparency and proactive communication far more than last-minute surprises.`,
    tips: [
      'Show your daily and weekly monitoring rhythm',
      'Mention specific metrics — cutting completion, daily output vs target, defect rate',
      'Demonstrate your escalation protocol',
      'Emphasize proactive buyer communication with problem + solution'
    ]
  },
  {
    id: 'ts-07',
    question: 'Describe the garment shipment process from factory to port.',
    category: 'Technical - Sampling & Production',
    answer: `The shipment process from factory gate to vessel departure involves multiple coordinated steps, and a merchandiser must ensure every document and deadline aligns. Here is the process I follow for M&S orders at Interstoff:

After bulk production is complete and final inspection is passed (AQL 2.5 major / 4.0 minor), the factory's packing team prepares the goods according to the approved packing list — correct assortment, ratio packing, carton marking, and total carton count. I verify the packing list against the purchase order to ensure quantities, sizes, and colors match exactly.

Next, I coordinate with the C&F (Clearing & Forwarding) agent to arrange transport. For Dhaka-based factories shipping through Chittagong port, inland transport by covered truck takes approximately 6-8 hours. For orders going through Dhaka ICD (Inland Container Depot), the container is stuffed at the ICD. I prepare or verify the shipping documents: Commercial Invoice, Packing List, Bill of Lading (B/L), Certificate of Origin (CO/GSP), Beneficiary's Certificate, and any buyer-specific documents. For M&S, we also need to ensure the goods are booked on M&S's nominated vessel through their freight forwarder.

The container is stuffed, sealed (I record the seal number), and the truck moves to port or ICD. At the port, the C&F agent handles customs clearance, port charges, and vessel loading. Once the vessel sails, I obtain the on-board B/L and submit all L/C documents to the bank for negotiation within the L/C's stipulated presentation period (typically 21 days from B/L date). Finally, I update the buyer with the sailing confirmation, ETD, ETA, and tracking details.`,
    tips: [
      'Walk through the process chronologically — post-inspection → packing → transport → port → documents → bank',
      'List the specific shipping documents by name',
      'Mention L/C document presentation deadline — shows commercial awareness',
      'Reference M&S nominated forwarder — shows buyer-specific knowledge'
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
   * D. Technical — Fabric & Quality  (5 questions)
   * ══════════════════════════════════════════════════════════════════════════ */
  {
    id: 'tf-01',
    question: 'What is GSM and how do you test it?',
    category: 'Technical - Fabric & Quality',
    answer: `GSM stands for Grams per Square Meter — it is the standard measurement of fabric weight or density. GSM tells you how heavy or light a fabric is per unit area, which directly impacts the garment's hand-feel, drape, durability, and cost. A higher GSM means a heavier, denser fabric.

For reference, typical GSM ranges in garments: Single jersey t-shirt fabric: 140-180 GSM. Interlock polo: 180-220 GSM. Fleece/sweatshirt: 280-350 GSM. Woven shirting (poplin): 100-130 GSM. Woven trouser (twill/chino): 200-280 GSM. Denim: 250-400+ GSM (often expressed in oz/yard² — 1 oz/yd² ≈ 33.9 GSM). For M&S woven bottoms at Interstoff, we typically work with 200-280 GSM cotton twill or stretch twill fabrics.

Testing GSM is straightforward. The standard method uses a GSM cutter (a circular die cutter with an area of 100 cm²). You cut a sample, weigh it on a precision scale, and multiply by 100 to get GSM. For example, if the cut sample weighs 2.30 grams, the GSM = 2.30 × 100 = 230 GSM. I always take readings from at least 3 different positions on the fabric (away from selvedge, beginning/middle/end of roll) and average them, because GSM can vary within a roll due to tension during weaving/knitting or finishing.

Buyer specifications will state the target GSM with a tolerance (e.g., 230 GSM ±5%). If incoming fabric falls outside tolerance, it must be flagged and the buyer notified before production proceeds.`,
    tips: [
      'Know the formula: weight of 100 cm² sample × 100 = GSM',
      'Give GSM ranges for common fabric types — shows practical knowledge',
      'Mention multiple readings and averaging — shows testing rigor',
      'Connect GSM to cost and garment performance'
    ]
  },
  {
    id: 'tf-02',
    question: 'What are the common fabric faults and how do you identify them?',
    category: 'Technical - Fabric & Quality',
    answer: `Fabric faults are defects in the fabric that can affect garment appearance, performance, or both. As a BUTEX textile engineer working in merchandising, I have a strong advantage in identifying and classifying fabric defects. The common faults I encounter in woven and knit fabrics are:

Weaving faults (for woven fabrics like the M&S bottoms I handle): Missing end/pick — a warp or weft yarn is absent, creating a thin line. Broken end/pick — a yarn breaks and leaves a gap. Reed mark — visible lines caused by damaged or incorrectly set reed wires. Temple mark — holes or marks near the selvedge from temple pins. Slub — a thick, uneven section of yarn. Float — a yarn passing over multiple yarns without interlacing. Oil stain — lubricant marks from weaving machinery.

Knitting faults: Needle line — a vertical line caused by a damaged needle. Drop stitch — a missed stitch creating a hole or run. Barre — horizontal bands of shade variation caused by yarn inconsistency. Hole — from broken yarn or needle. Lycra out — missing elastane yarn in stretch fabric.

Finishing faults (both woven and knit): Shade variation — color difference across the width or length. Crease mark — permanent fold marks from processing. Pin hole — holes along the selvedge from stenter pins. Bowing/skewing — the weft or courses not running perpendicular to warp/wales. Shrinkage exceeding tolerance.

For inspection, I use the 4-point grading system: 1 point for defects up to 3 inches, 2 points for 3-6 inches, 3 points for 6-9 inches, and 4 points for defects over 9 inches. M&S accepts fabric with a maximum of 28-30 points per 100 linear yards. My BUTEX fabric fault detection ML project was designed to automate this visual inspection process using computer vision.`,
    tips: [
      'Categorize faults logically: weaving, knitting, finishing',
      'Know the 4-point grading system — it is the industry standard',
      'Mention M&S-specific acceptance criteria (28-30 points/100 yards)',
      'Reference your ML project as a differentiator'
    ]
  },
  {
    id: 'tf-03',
    question: 'How is fabric shrinkage tested and why does it matter?',
    category: 'Technical - Fabric & Quality',
    answer: `Fabric shrinkage testing measures the dimensional change in fabric after washing and drying, expressed as a percentage. It matters enormously because if shrinkage is not accounted for in pattern making, the finished garment will be smaller than intended after the consumer washes it — leading to returns, complaints, and buyer chargebacks.

The standard test method I am familiar with from both BUTEX and Interstoff is AATCC 135 (or ISO 6330 for European buyers like M&S). The process: Cut a fabric sample (typically 50cm × 50cm or as per the standard). Mark three pairs of benchmark points — two pairs in the warp/lengthwise direction and one pair in the weft/widthwise direction, each 35cm apart (for AATCC) or 25cm apart. Record the initial distances. Wash the sample according to the specified wash condition (M&S typically specifies 40°C or 60°C wash with a specific detergent and cycle type). Tumble dry or line dry as specified. After conditioning, re-measure the distances between the benchmark points.

Shrinkage % = [(Original length - After-wash length) ÷ Original length] × 100. A positive value indicates shrinkage; a negative value indicates growth (stretching). Typical acceptable shrinkage limits for M&S are: Woven cotton ±3% in both directions. Woven stretch (with elastane) ±3% warp, ±5% weft. Knit cotton ±5% in length, ±5% in width.

As a merchandiser, I ensure shrinkage test results are obtained from the fabric supplier before bulk approval. If shrinkage exceeds tolerance, I flag it immediately because the factory will need to adjust pattern dimensions (adding shrinkage allowance) or the fabric mill needs to adjust finishing parameters (heat-setting, compacting).`,
    tips: [
      'Know the test method (AATCC 135 / ISO 6330)',
      'Give the formula and typical tolerance limits',
      'Explain the practical impact on garment sizing',
      'Mention that you check shrinkage before bulk approval — proactive quality management'
    ]
  },
  {
    id: 'tf-04',
    question: 'What is colorfastness and what tests are commonly done?',
    category: 'Technical - Fabric & Quality',
    answer: `Colorfastness measures a dyed fabric's resistance to color change or color transfer when exposed to various agents like washing, light, rubbing, perspiration, and water. Poor colorfastness means the garment will fade, stain other clothes, or change color during the consumer's use — a serious quality failure that leads to returns and brand damage.

The common colorfastness tests I encounter on M&S orders at Interstoff are: Colorfastness to Washing (ISO 105-C06) — the most critical test. Fabric is washed with multi-fiber adjacent fabric (MFF) to check both color change of the specimen and staining of the adjacent fabrics. M&S typically requires Grade 4 (out of 5) minimum for color change and Grade 3-4 for staining. Colorfastness to Rubbing/Crocking (ISO 105-X12) — tests color transfer when fabric is rubbed with dry and wet cotton cloth. Dry rubbing usually requires Grade 4+; wet rubbing Grade 3+ (wet is always worse). Colorfastness to Light (ISO 105-B02) — tests fade resistance under xenon arc light. Requires Grade 4+ for M&S. Particularly important for light colors and outdoor/summer garments.

Additional tests include: Colorfastness to Perspiration (ISO 105-E04) — acidic and alkaline solutions simulating human sweat. Colorfastness to Water (ISO 105-E01) — simple water spotting test. Colorfastness to Chlorinated Water — important for swimwear and activewear.

Results are assessed using the Grey Scale for color change (1-5, where 5 = no change) and the Grey Scale for staining (1-5, where 5 = no staining). These tests are conducted by accredited labs like SGS, Bureau Veritas, or Intertek, and the results must be approved before bulk production begins.`,
    tips: [
      'Know the main tests by ISO standard number',
      'Understand the Grey Scale grading system (1-5)',
      'Give M&S-specific minimum grades',
      'Mention that testing happens before bulk — shows process understanding'
    ]
  },
  {
    id: 'tf-05',
    question: 'What is fabric count (EPI/PPI) and how does it affect quality?',
    category: 'Technical - Fabric & Quality',
    answer: `Fabric count refers to the number of yarns per unit length in a woven fabric, measured as EPI (Ends Per Inch — warp yarns) and PPI (Picks Per Inch — weft yarns). Together, they are expressed as, for example, "130 × 70" meaning 130 ends per inch and 70 picks per inch. This is a fundamental parameter that determines fabric density, weight, hand-feel, strength, and appearance.

Higher thread count generally means: Denser, smoother fabric surface. Better printing and dyeing uniformity. Higher tensile and tear strength. More refined hand-feel. But also higher cost (more yarn used per meter). For the M&S woven bottom fabrics I work with at Interstoff, typical counts are: Cotton twill (chino): 108 × 58 to 132 × 68. Stretch twill: 128 × 68 with elastane in the weft. Poplin (for shirts): 130 × 70 or higher.

Testing EPI/PPI is done using a pick counter (also called a counting glass or linen tester) — a small magnifying device placed on the fabric surface. I count the number of warp yarns (ends) and weft yarns (picks) in one inch. At BUTEX, we learned to do this manually, and in industry, it is still the primary method. Modern digital fabric analysis systems can also measure this automatically.

As a merchandiser, I verify EPI/PPI during fabric sourcing because it directly affects: Fabric GSM (weight) and therefore cost. Fabric strength — a low thread count may fail tear-strength testing. Fabric appearance — buyers can visually detect low-count fabric as looking "coarse" or "open." If a supplier delivers fabric with lower-than-specified thread count, it is a legitimate rejection cause because the fabric's performance properties will not meet the buyer's approved standard.`,
    tips: [
      'Know EPI (warp) and PPI (weft) terminology',
      'Give real count values for common fabrics — shows hands-on knowledge',
      'Explain the quality impact of thread count',
      'Mention pick counter as the testing tool'
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
   * E. Buying House Specific  (5 questions)
   * ══════════════════════════════════════════════════════════════════════════ */
  {
    id: 'bh-01',
    question: 'What is the role of a buying house and how does it differ from a factory merchandiser?',
    category: 'Buying House Specific',
    answer: `A buying house (also called a sourcing office or buying agency) acts as the intermediary between international buyers/retailers and local manufacturers. The buying house's core function is to represent the buyer's interests — finding the right factories, managing product development, ensuring quality and compliance, and guaranteeing on-time delivery. At Interstoff Apparels, we serve as M&S's local sourcing partner in Bangladesh.

The buying house merchandiser's role differs from a factory merchandiser in several key ways. A buying house merchandiser works on behalf of the buyer — my primary loyalty is to M&S's requirements, and I evaluate factory performance objectively. I manage multiple factories for a single buyer, making sourcing decisions about which factory gets which order based on capability, capacity, and pricing. I also handle the commercial side — price negotiation, L/C management, and documentation — which factory merchandisers typically do not. My communication is directly with the buyer's product development and sourcing teams, often in English through formal channels.

A factory merchandiser works on behalf of the manufacturer. They receive orders (often through a buying house), coordinate internal production, manage material sourcing within the factory's approved supplier base, and ensure production meets the buyer's specifications. Their focus is more on internal coordination — production planning, material procurement, quality control on the floor, and loading/shipment from their specific factory.

The skill sets overlap significantly, but buying house merchandising requires stronger buyer communication skills, commercial/costing expertise, multi-factory management capability, and strategic sourcing knowledge.`,
    tips: [
      'Show you clearly understand the structural difference',
      'Position buying house as the buyer\'s representative — that is the key insight',
      'Highlight multi-factory management as a unique buying-house skill',
      'Mention commercial/L/C management — factory merchandisers typically do not handle this'
    ]
  },
  {
    id: 'bh-02',
    question: 'What do you know about M&S (Marks & Spencer) compliance requirements?',
    category: 'Buying House Specific',
    answer: `M&S has one of the most rigorous compliance frameworks in the global apparel industry. Working on the M&S account at Interstoff has given me firsthand experience with their requirements, which span ethical, environmental, and product quality dimensions.

On the ethical/social compliance side, M&S requires all supplier factories to be audited against their Global Sourcing Principles (GSP). This covers: working hours (max 48 regular + 12 overtime per week), minimum wage compliance, no child labor, no forced labor, freedom of association, health & safety standards (fire safety, building structural integrity, electrical safety, emergency exits). Factories must pass a SEDEX/SMETA audit or equivalent. M&S also has their own "Plan A" sustainability commitments which include targets for reducing carbon emissions, zero waste to landfill, and sustainable sourcing of raw materials.

On the product compliance side, M&S has comprehensive testing requirements documented in their P-standards (e.g., P15 for inspection, P18 for testing protocols). Every fabric and garment must pass testing at M&S-approved labs covering: dimensional stability (shrinkage), colorfastness (wash, rub, light, perspiration), tensile and tear strength, pilling resistance, fiber content verification, and chemical compliance (REACH, RSL — Restricted Substance List). For children's wear, additional requirements include cord/drawstring restrictions, small parts testing, and flammability.

M&S uses specific technology platforms: FlexPLM for product lifecycle management, eDiTRAC for lab dip/color management, and their own grading and measurement systems. As someone who has worked with these systems daily, I can transition seamlessly to any role requiring M&S compliance knowledge.`,
    tips: [
      'Demonstrate deep knowledge — M&S compliance is a selling point',
      'Cover both ethical/social AND product compliance',
      'Name specific M&S systems (FlexPLM, eDiTRAC, Plan A, P-standards)',
      'Position this experience as transferable to other premium buyers'
    ]
  },
  {
    id: 'bh-03',
    question: 'How do you manage communication with international buyers across time zones?',
    category: 'Buying House Specific',
    answer: `Effective buyer communication is the backbone of buying house merchandising. At Interstoff, I communicate with M&S teams based in London (GMT+0/+1), which means Bangladesh (GMT+6) is 5-6 hours ahead. This time difference actually works in our favor — I can prepare updates and reports in the morning BD time, and they arrive in the buyer's inbox at the start of their workday.

My communication approach follows three principles. First, structured updates: I send a weekly status report every Sunday evening (BD time, arriving Monday morning UK time) covering order-wise progress, T&A updates, any risks/delays with mitigation plans, and sample/testing status. This proactive reporting builds trust because the buyer does not have to chase me for information. Second, response time discipline: I respond to buyer emails within 4 hours during BD working hours, and for urgent issues, within 1 hour. If I need time to gather information, I send an acknowledgment ("Received, will revert with details by EOD") so the buyer knows their email was not lost.

Third, clarity and documentation: Every buyer communication is in clear, professional English with specific data points — no vague statements like "the order is progressing well." Instead: "Cutting completed 2,340/5,000 pcs (46.8%), sewing output at 520 pcs/day, on track for ex-factory June 15." I also follow up important phone conversations or Teams calls with an email summary capturing agreed action items and deadlines.

For urgent issues (shipment risk, quality failure, compliance concern), I escalate immediately via phone/Teams to M&S's sourcing manager rather than waiting for email. Speed of escalation is critical — buyers would rather hear about a problem early when it can be solved than late when it cannot.`,
    tips: [
      'Show your communication rhythm — weekly reports, response time standards',
      'Give an example of a clear, data-driven update format',
      'Mention the time zone advantage for BD merchandisers',
      'Emphasize proactive escalation for urgent issues'
    ]
  },
  {
    id: 'bh-04',
    question: 'How do you manage multiple orders simultaneously?',
    category: 'Buying House Specific',
    answer: `Managing multiple orders simultaneously is a core merchandising competency. At Interstoff, I typically handle 8-12 active orders at any given time across different stages — some in sampling, some in fabric sourcing, some in production, and some nearing shipment. Here is my system:

I maintain a Master Order Tracker — an Excel workbook where each order has a row with key milestone dates, current status (color-coded: green/amber/red), and next action required. I review this tracker every morning before anything else. This gives me a 30-second overview of where every order stands. In AlgoERP, I track detailed order data — PO numbers, quantities, prices, L/C status, and material in-house status. The two tools complement each other: Excel for big-picture monitoring, ERP for detailed data.

My prioritization framework is simple: shipment-nearest orders get first attention, followed by orders at critical milestones (fabric approval, PP sample, final inspection), and then orders in early development. Within each priority tier, I focus on orders that are behind schedule or have unresolved issues. I use a physical sticky-note system on my desk — three columns: "Fire" (urgent/behind), "Monitor" (on track but at critical stage), and "Coast" (ahead of schedule). This keeps me mentally organized.

For each order, I maintain a checklist of milestones and check them off as completed. I also set calendar reminders for key deadlines — 3 days before every critical milestone. When I was managing 10 orders during a peak season, I found that blocking 30 minutes at the end of each day for "next-day planning" — reviewing what needs to happen tomorrow and pre-drafting emails — made me 40% more efficient the following morning.`,
    tips: [
      'Describe your actual tools and system — Excel tracker, ERP, sticky notes',
      'Show your prioritization framework — shipment-nearest first',
      'Mention handling 8-12 orders — gives a quantified sense of capacity',
      'Share the daily planning habit — shows maturity and organization'
    ]
  },
  {
    id: 'bh-05',
    question: 'Do you have experience with FlexPLM? How do you use it?',
    category: 'Buying House Specific',
    answer: `Yes, I use FlexPLM (by PTC) daily at Interstoff for the M&S account. FlexPLM is a Product Lifecycle Management system that M&S uses to manage their entire product development process digitally. It is the single source of truth for all product-related information, and every buying house and supplier working with M&S must use it.

In my daily work, I use FlexPLM for several key functions. Product specification management: M&S creates the tech pack and product spec in FlexPLM, and I access it there. All details — construction, measurements, fabric specs, trim specs, labeling requirements, and packaging instructions — are in the system. I refer to FlexPLM specs rather than relying on emailed documents, ensuring I always have the latest revision. Sample tracking: When I submit samples (proto, fit, PP, etc.), I update the sample status in FlexPLM. The buyer reviews samples and posts their comments directly in the system, and I action those comments for the next iteration.

Costing: Initial cost breakdowns and price negotiations are documented in FlexPLM. I input our FOB quotation with a detailed cost breakdown, and the buyer's sourcing team reviews and negotiates through the platform. BOM (Bill of Materials) management: The complete BOM — fabric, trims, labels, packaging — is maintained in FlexPLM with supplier details, prices, and lead times. Color and material approvals: Lab dip submissions, strike-off approvals, and material test results are uploaded and tracked in FlexPLM (though M&S also uses eDiTRAC specifically for color management).

My proficiency with FlexPLM is a significant advantage because many merchandisers in Bangladesh are still learning the system, while I have been using it since my MTO days at Interstoff. I can train team members on FlexPLM navigation, which adds value in any M&S-supplying organization.`,
    tips: [
      'Name specific FlexPLM modules you use — specs, samples, costing, BOM',
      'Show it is part of your daily workflow, not just occasional use',
      'Mention you can train others — positions you as an expert',
      'Note that FlexPLM proficiency is relatively rare in BD market — it is a selling point'
    ]
  }
];


/* ─────────────────────────────────────────────────────────────────────────────
 * 4. SALARY_DATA
 * ───────────────────────────────────────────────────────────────────────────── */
const SALARY_DATA = {
  benchmarks: [
    { role: 'Assistant Merchandiser', min: 25000, max: 36000, avg: 30000, level: 'current' },
    { role: 'Merchandiser', min: 30000, max: 73000, avg: 48000, level: 'target' },
    { role: 'Senior Merchandiser', min: 54000, max: 111000, avg: 79000, level: 'stretch' },
    { role: 'Merchandising Manager', min: 80000, max: 150000, avg: 110000, level: 'future' }
  ],
  rahatTarget: { min: 65000, max: 100000, ideal: 80000 },
  tips: [
    'Buying house/sourcing office pays 20-40% more than factory for same role.',
    'M&S account experience commands premium — M&S compliance is complex.',
    'BUTEX degree adds 10-15% salary premium over non-textile grads.',
    'FlexPLM + AlgoERP experience is rare — highlight in negotiation.',
    'Never say first number. Ask: "What is the budgeted range for this role?"',
    'If pushed: "Based on market research, I am targeting 65-80k for this level."',
    'Counter-offer your current (even if lower) by framing growth: "I am looking for a 40-60% growth."',
    'Benefits to negotiate beyond salary: transport, meal, medical, bonus months, leave.'
  ]
};


/* ─────────────────────────────────────────────────────────────────────────────
 * 5. LINKEDIN_CHECKLIST
 * ───────────────────────────────────────────────────────────────────────────── */
const LINKEDIN_CHECKLIST = [
  {
    id: 'headline',
    label: 'Update Headline',
    description: 'Change to: Apparel Merchandiser | Marks & Spencer Product Development @ Interstoff Apparels | BUTEX Textile Engineer | Costing · Sampling · TNA | Open to Merchandiser roles',
    priority: 'critical',
    done: false
  },
  {
    id: 'about',
    label: 'Rewrite About Section',
    description: 'BUTEX-trained textile engineer and apparel merchandiser. I take products from buyer tech-pack to shipment for global retail — currently on the Marks & Spencer account at Interstoff Apparels, where I was promoted from Management Trainee to Assistant Merchandiser. My day-to-day covers sample development, costing & consumption, Time & Action planning, fabric/trims sourcing and quality compliance. I also built a machine-learning fabric fault-detection project, because I believe the next generation of merchandising will be data-driven. Open to Merchandiser / Senior Merchandiser opportunities with leading buying houses and export-oriented manufacturers. Portfolio: smrahat-hub.github.io',
    priority: 'critical',
    done: false
  },
  {
    id: 'open_to_work',
    label: 'Enable "Open to Work"',
    description: 'Toggle ON → Merchandiser, Senior Merchandiser, Product Developer. Location: Dhaka. On-site/Hybrid. Set to Recruiter-only if you don\'t want current employer to see.',
    priority: 'critical',
    done: false
  },
  {
    id: 'photo',
    label: 'Upload Professional Photo',
    description: 'Plain background, shoulder up, 60% face in frame. Formal shirt (white/light blue), collar. Smiling, soft. Use remove.bg to clean background.',
    priority: 'high',
    done: false
  },
  {
    id: 'banner',
    label: 'Add Banner Image',
    description: 'Go to Canva → search "LinkedIn banner textile" → pick one with fabric/garment texture. Free.',
    priority: 'medium',
    done: false
  },
  {
    id: 'experience',
    label: 'Add Full Experience Bullets',
    description: 'Copy from CV: Interstoff Assistant Merchandiser (Jun 2025-Present), MTO (Dec 2024-May 2025), Esquire Knit Internship (Jan-Mar 2024). Add achievement bullets under each.',
    priority: 'critical',
    done: false
  },
  {
    id: 'skills',
    label: 'Add & Pin Top Skills',
    description: 'Pin top 3: Apparel Merchandising, Costing, Product Development. Then add: Textile Engineering, TNA, FlexPLM, Sourcing, Quality Compliance, AlgoERP, M&S eDiTRAC. Ask colleagues for endorsements.',
    priority: 'high',
    done: false
  },
  {
    id: 'featured',
    label: 'Add Featured Section',
    description: 'Add portfolio link (smrahat-hub.github.io) + GitHub fabric fault detection project.',
    priority: 'medium',
    done: false
  },
  {
    id: 'recommendation',
    label: 'Request Recommendations',
    description: 'Ask Interstoff senior/manager for 1-2 short recommendations. This adds huge credibility.',
    priority: 'high',
    done: false
  },
  {
    id: 'url',
    label: 'Customize Profile URL',
    description: 'Go to Edit public profile → customize URL to linkedin.com/in/smrahat or similar clean URL.',
    priority: 'low',
    done: false
  },
  {
    id: 'activity',
    label: 'Post/Comment Weekly',
    description: 'Comment on 2-3 industry posts per week. Algorithm boosts active profiles. Share 1 post about merchandising trends per month.',
    priority: 'medium',
    done: false
  }
];


/* ─────────────────────────────────────────────────────────────────────────────
 * 6. COLD_MESSAGES — 5 outreach templates
 * ───────────────────────────────────────────────────────────────────────────── */
const COLD_MESSAGES = [

  /* ── 6-A. Recruiter Connect Request ─────────────────────────────────────── */
  {
    id: 'recruiter_connect',
    type: 'Recruiter Connect',
    subject: 'Merchandiser — M&S Account Experience — Open to Opportunities',
    body: `Hi [Name],

I noticed you recruit for apparel and merchandising roles in Dhaka, and I wanted to connect.

I'm a BUTEX Textile Engineering graduate currently working as Assistant Merchandiser at Interstoff Apparels on the Marks & Spencer woven-bottoms account. My day-to-day covers costing, sample coordination, T&A management, and buyer communication through FlexPLM and eDiTRAC.

I'm actively exploring Merchandiser / Senior Merchandiser opportunities with buying houses and sourcing offices in Dhaka. If any relevant roles come across your desk, I'd love to be considered.

Happy to share my CV at your convenience. Thank you for connecting!

Best regards,
S.M. Rahat`,
    tips: [
      'Personalize the first line — mention their company or a recent post',
      'Keep under 300 characters for LinkedIn connect note (trim to first 2 sentences)',
      'For InMail, use the full version',
      'Always offer to share CV — do not attach unsolicited'
    ]
  },

  /* ── 6-B. BUTEX Alumni Connect ──────────────────────────────────────────── */
  {
    id: 'alumni_connect',
    type: 'BUTEX Alumni Connect',
    subject: 'Fellow BUTEX Graduate — Seeking Career Guidance in Merchandising',
    body: `Assalamu Alaikum [Name] bhai/apu,

I'm S.M. Rahat, a recent BUTEX Textile Engineering graduate (Batch [XX]). I saw that you're working as [their role] at [their company], and as a fellow BUTEX alumni, I'd love to connect.

I'm currently at Interstoff Apparels as an Assistant Merchandiser handling the M&S woven account. I'm looking to grow into a Merchandiser / Senior Merchandiser role and would deeply appreciate any guidance or advice you might share about your career journey.

If you have 10 minutes for a quick chat or coffee, I would be truly grateful. No pressure at all — even a brief connection would mean a lot.

Thank you and best regards,
S.M. Rahat
BUTEX Textile Engineering`,
    tips: [
      'Use "bhai/apu" — this activates the deshi-senior respect dynamic',
      'Mention your BUTEX batch number for immediate connection',
      'Ask for "guidance" not "job referral" — less transactional, more genuine',
      'Offering "coffee" (or "cha") works better than a formal meeting request',
      'Follow up once after 5 days if no response — then stop'
    ]
  },

  /* ── 6-C. Hiring Manager Connect ────────────────────────────────────────── */
  {
    id: 'hiring_manager',
    type: 'Hiring Manager Connect',
    subject: 'Experienced Merchandiser — M&S Account — Interested in Your Team',
    body: `Dear [Name],

I came across [Company Name]'s merchandising team and was impressed by your work with [Buyer Name / specific detail]. I'd like to connect and introduce myself.

I'm S.M. Rahat, currently an Assistant Merchandiser at Interstoff Apparels managing the Marks & Spencer woven-bottoms account. My core strengths are in costing, sample development, T&A management, and M&S compliance systems (FlexPLM, eDiTRAC, AlgoERP).

I have a B.Sc. in Textile Engineering from BUTEX, which gives me strong fabric and garment technical knowledge — I can independently verify consumption, assess quality, and troubleshoot production issues.

I'm exploring Merchandiser-level opportunities and would welcome the chance to discuss how my skills could contribute to your team. Would you be open to a brief conversation?

Best regards,
S.M. Rahat`,
    tips: [
      'Research the company and mention something specific — shows genuine interest',
      'Position yourself as a problem-solver, not a job-seeker',
      'Keep it professional but warm — hiring managers are busy',
      'End with a soft CTA — "would you be open to" is less demanding than "can we meet"'
    ]
  },

  /* ── 6-D. After-Applying Follow-Up ──────────────────────────────────────── */
  {
    id: 'post_application',
    type: 'After Applying Follow-Up',
    subject: 'Following Up — [Job Title] Application — S.M. Rahat',
    body: `Dear [Hiring Manager / HR Name],

I recently applied for the [Job Title] position at [Company Name] through [Platform — BDJobs/LinkedIn/DhakaCareers], and I wanted to follow up to express my strong interest.

With my background as a BUTEX Textile Engineering graduate and current experience as Assistant Merchandiser on the M&S account at Interstoff Apparels, I believe I can bring immediate value to your merchandising team — particularly in costing accuracy, buyer communication, and T&A management.

I have attached my updated CV for your reference. I would welcome the opportunity to discuss how my experience aligns with your requirements. Please feel free to reach me at [phone] or [email] at your convenience.

Thank you for your time and consideration.

Best regards,
S.M. Rahat`,
    tips: [
      'Send 3-5 business days after applying — not immediately',
      'Find the HR person or hiring manager on LinkedIn and send directly',
      'Mention the specific platform you applied through — helps them find your application',
      'Keep it concise — they are scanning, not reading novels',
      'Attach CV only if sending via email, not on LinkedIn'
    ]
  },

  /* ── 6-E. After-Interview Thank-You ─────────────────────────────────────── */
  {
    id: 'post_interview',
    type: 'After Interview Thank-You',
    subject: 'Thank You — [Job Title] Interview — S.M. Rahat',
    body: `Dear [Interviewer Name],

Thank you so much for taking the time to interview me today for the [Job Title] position at [Company Name]. I truly enjoyed our conversation and learning more about the role and your team.

I was particularly excited about [specific aspect discussed — e.g., "the opportunity to manage the H&M account independently" or "your team's focus on sustainable sourcing"]. It reinforced my confidence that this role is an excellent fit for my skills and career goals.

As we discussed, my experience managing the M&S account at Interstoff — covering costing, sampling, T&A, compliance, and buyer communication — has prepared me well for the responsibilities of this position. I am also eager to bring my BUTEX textile engineering knowledge and FlexPLM proficiency to contribute from day one.

Please do not hesitate to reach out if you need any additional information. I look forward to hearing from you.

Warm regards,
S.M. Rahat`,
    tips: [
      'Send within 2-4 hours of the interview — same day, while you are fresh in their mind',
      'Reference something SPECIFIC from the conversation — shows you listened',
      'Restate your key selling points briefly',
      'If you interviewed with multiple people, send personalized notes to each',
      'Keep it under 200 words — gratitude, not a sales pitch'
    ]
  }
];


/* ─────────────────────────────────────────────────────────────────────────────
 * 7. ACTION_PLAN_WEEKS — 4-week job search battle plan
 * ───────────────────────────────────────────────────────────────────────────── */
const ACTION_PLAN_WEEKS = [

  /* ═══════════════════════════════════ WEEK 1 ═══════════════════════════════ */
  {
    week: 1,
    title: 'Foundation — Profile, CV & Portal Setup',
    theme: 'Get your weapons ready before going to battle.',
    color: '#7c3aed',
    days: [
      {
        day: 'Day 1 (Mon)',
        focus: 'CV Finalization',
        tasks: [
          { id: 'w1d1t1', text: 'Finalize 2-page CV with M&S, Interstoff, BUTEX highlights', done: false },
          { id: 'w1d1t2', text: 'Add quantified achievements (e.g., "Managed 10+ M&S orders/season")', done: false },
          { id: 'w1d1t3', text: 'Export as PDF — filename: SM_Rahat_Merchandiser_CV.pdf', done: false },
          { id: 'w1d1t4', text: 'Ask a senior colleague to review CV and give feedback', done: false }
        ]
      },
      {
        day: 'Day 2 (Tue)',
        focus: 'LinkedIn Overhaul',
        tasks: [
          { id: 'w1d2t1', text: 'Update LinkedIn headline (from checklist)', done: false },
          { id: 'w1d2t2', text: 'Rewrite About section (from checklist)', done: false },
          { id: 'w1d2t3', text: 'Add all experience entries with bullets', done: false },
          { id: 'w1d2t4', text: 'Pin top skills: Apparel Merchandising, Costing, Product Development', done: false },
          { id: 'w1d2t5', text: 'Enable "Open to Work" (recruiter-only)', done: false }
        ]
      },
      {
        day: 'Day 3 (Wed)',
        focus: 'LinkedIn Polish + Photo',
        tasks: [
          { id: 'w1d3t1', text: 'Take professional photo (white/light blue shirt, plain background)', done: false },
          { id: 'w1d3t2', text: 'Edit photo with remove.bg → upload to LinkedIn', done: false },
          { id: 'w1d3t3', text: 'Create Canva banner with textile theme → upload', done: false },
          { id: 'w1d3t4', text: 'Add Featured section with portfolio + GitHub links', done: false },
          { id: 'w1d3t5', text: 'Customize profile URL to linkedin.com/in/smrahat', done: false }
        ]
      },
      {
        day: 'Day 4 (Thu)',
        focus: 'Job Portal Registration',
        tasks: [
          { id: 'w1d4t1', text: 'Register on BDJobs — upload CV, set Garments/Textile alert for Dhaka', done: false },
          { id: 'w1d4t2', text: 'Register on atB Jobs — complete profile, upload CV', done: false },
          { id: 'w1d4t3', text: 'Register on NextJobz — set merchandiser alert', done: false },
          { id: 'w1d4t4', text: 'Set LinkedIn job alert: "Merchandiser Dhaka"', done: false },
          { id: 'w1d4t5', text: 'Bookmark DhakaCareers merchandising + apparel pages', done: false }
        ]
      },
      {
        day: 'Day 5 (Fri)',
        focus: 'Facebook + Recruiter Research',
        tasks: [
          { id: 'w1d5t1', text: 'Join Facebook group: Jobs Garments/Textiles/Buying & Merchandising', done: false },
          { id: 'w1d5t2', text: 'Follow atB Jobs Bangladesh page on Facebook', done: false },
          { id: 'w1d5t3', text: 'Turn on "All Posts" notification for both', done: false },
          { id: 'w1d5t4', text: 'Identify 20 recruiters/HR on LinkedIn using recruiter search links', done: false },
          { id: 'w1d5t5', text: 'Identify 10 BUTEX alumni in merchandising roles', done: false }
        ]
      },
      {
        day: 'Day 6-7 (Sat-Sun)',
        focus: 'Review & Rest',
        tasks: [
          { id: 'w1d6t1', text: 'Review all profiles — LinkedIn, BDJobs, atB — for consistency', done: false },
          { id: 'w1d6t2', text: 'Prepare connect request templates (personalize later)', done: false },
          { id: 'w1d6t3', text: 'Read 5 job listings carefully — note common requirements', done: false },
          { id: 'w1d6t4', text: 'Request recommendation from Interstoff senior/manager', done: false }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════ WEEK 2 ═══════════════════════════════ */
  {
    week: 2,
    title: 'Mass Outreach — Connect, Apply, Repeat',
    theme: 'Volume creates luck. Apply broadly, follow up relentlessly.',
    color: '#10b981',
    days: [
      {
        day: 'Day 8 (Mon)',
        focus: 'Application Blitz — Round 1',
        tasks: [
          { id: 'w2d1t1', text: 'Apply to 5 jobs from LIVE_JOBS list (start with "perfect" and "target" matches)', done: false },
          { id: 'w2d1t2', text: 'Send 10 LinkedIn connect requests to recruiters (personalized)', done: false },
          { id: 'w2d1t3', text: 'Customize cover letter template for buying house roles', done: false },
          { id: 'w2d1t4', text: 'Track all applications in a spreadsheet (company, date, status)', done: false }
        ]
      },
      {
        day: 'Day 9 (Tue)',
        focus: 'Alumni Outreach',
        tasks: [
          { id: 'w2d2t1', text: 'Send 5 connect requests to BUTEX alumni in merchandising', done: false },
          { id: 'w2d2t2', text: 'Apply to 3 more jobs from job portals', done: false },
          { id: 'w2d2t3', text: 'Comment on 3 LinkedIn posts about merchandising/apparel industry', done: false },
          { id: 'w2d2t4', text: 'Check Facebook group for new job postings — apply if relevant', done: false }
        ]
      },
      {
        day: 'Day 10 (Wed)',
        focus: 'Company Career Pages',
        tasks: [
          { id: 'w2d3t1', text: 'Check all 12 company career pages for open positions', done: false },
          { id: 'w2d3t2', text: 'Apply directly on company websites where relevant', done: false },
          { id: 'w2d3t3', text: 'Send 10 more LinkedIn connect requests (hiring managers this time)', done: false },
          { id: 'w2d3t4', text: 'Share a LinkedIn post about a merchandising trend or M&S insight', done: false }
        ]
      },
      {
        day: 'Day 11 (Thu)',
        focus: 'Follow-Up Round',
        tasks: [
          { id: 'w2d4t1', text: 'Send follow-up messages for Day 8 applications (use template)', done: false },
          { id: 'w2d4t2', text: 'Apply to 3 more jobs from BDJobs/DhakaCareers new listings', done: false },
          { id: 'w2d4t3', text: 'Respond to any recruiter messages or connection acceptances', done: false },
          { id: 'w2d4t4', text: 'Send 5 more alumni connect requests', done: false }
        ]
      },
      {
        day: 'Day 12 (Fri)',
        focus: 'Expand Search Radius',
        tasks: [
          { id: 'w2d5t1', text: 'Search Glassdoor and Careerjet for additional listings', done: false },
          { id: 'w2d5t2', text: 'Apply to "good" match and "stretch" jobs — do not be too selective', done: false },
          { id: 'w2d5t3', text: 'Send connect requests to 5 people at companies you applied to', done: false },
          { id: 'w2d5t4', text: 'Ask any responding alumni for internal referrals', done: false }
        ]
      },
      {
        day: 'Day 13-14 (Sat-Sun)',
        focus: 'Weekend Hustle',
        tasks: [
          { id: 'w2d6t1', text: 'Tally: total applications sent, connections made, responses received', done: false },
          { id: 'w2d6t2', text: 'Refresh job portal searches for new listings posted this week', done: false },
          { id: 'w2d6t3', text: 'Prepare for interviews: review INTERVIEW_QUESTIONS (10 per day)', done: false },
          { id: 'w2d6t4', text: 'Update application tracker with status changes', done: false }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════ WEEK 3 ═══════════════════════════════ */
  {
    week: 3,
    title: 'Interview Prep & Active Follow-Up',
    theme: 'Prepare like a professional, follow up like a closer.',
    color: '#f59e0b',
    days: [
      {
        day: 'Day 15 (Mon)',
        focus: 'Deep Interview Prep — General',
        tasks: [
          { id: 'w3d1t1', text: 'Practice "Tell me about yourself" — record and review (90 seconds)', done: false },
          { id: 'w3d1t2', text: 'Practice all 10 General & Behavioral questions aloud', done: false },
          { id: 'w3d1t3', text: 'Prepare 3 STAR stories (teamwork, conflict, deadline pressure)', done: false },
          { id: 'w3d1t4', text: 'Apply to 2-3 new listings that appeared over the weekend', done: false }
        ]
      },
      {
        day: 'Day 16 (Tue)',
        focus: 'Deep Interview Prep — Technical',
        tasks: [
          { id: 'w3d2t1', text: 'Review all Costing & Commercial questions — practice costing calculation on paper', done: false },
          { id: 'w3d2t2', text: 'Review all Sampling & Production questions — draw the sample sequence', done: false },
          { id: 'w3d2t3', text: 'Practice calculating fabric consumption for a basic trouser', done: false },
          { id: 'w3d2t4', text: 'Review FOB breakdown — be able to list all components from memory', done: false }
        ]
      },
      {
        day: 'Day 17 (Wed)',
        focus: 'Deep Interview Prep — Fabric & Buying House',
        tasks: [
          { id: 'w3d3t1', text: 'Review Fabric & Quality questions — GSM, faults, shrinkage, colorfastness', done: false },
          { id: 'w3d3t2', text: 'Review Buying House Specific questions — especially M&S compliance', done: false },
          { id: 'w3d3t3', text: 'Practice explaining FlexPLM workflow to a non-user', done: false },
          { id: 'w3d3t4', text: 'Research 3 companies you applied to — know their buyers, products, team size', done: false }
        ]
      },
      {
        day: 'Day 18 (Thu)',
        focus: 'Mock Interview + Continued Outreach',
        tasks: [
          { id: 'w3d4t1', text: 'Do a mock interview with a friend or in front of a mirror (30 mins)', done: false },
          { id: 'w3d4t2', text: 'Send follow-ups for Week 2 applications that haven\'t responded', done: false },
          { id: 'w3d4t3', text: 'Apply to 3 more new listings', done: false },
          { id: 'w3d4t4', text: 'Send thank-you notes for any interviews completed this week', done: false }
        ]
      },
      {
        day: 'Day 19 (Fri)',
        focus: 'Salary Research + Negotiation Prep',
        tasks: [
          { id: 'w3d5t1', text: 'Review SALARY_DATA — know your target range cold (65-80k)', done: false },
          { id: 'w3d5t2', text: 'Practice salary negotiation dialogue — "What is the budgeted range?"', done: false },
          { id: 'w3d5t3', text: 'List your non-salary priorities (transport, medical, bonus months)', done: false },
          { id: 'w3d5t4', text: 'Research Glassdoor salary data for companies you are interviewing with', done: false }
        ]
      },
      {
        day: 'Day 20-21 (Sat-Sun)',
        focus: 'Reflection & Course Correction',
        tasks: [
          { id: 'w3d6t1', text: 'Review application tracker — how many callbacks/interviews so far?', done: false },
          { id: 'w3d6t2', text: 'If < 3 callbacks: revise CV, expand search criteria, increase daily applications', done: false },
          { id: 'w3d6t3', text: 'If interviews scheduled: company-specific research for each', done: false },
          { id: 'w3d6t4', text: 'Plan Week 4 calendar around any confirmed interview dates', done: false }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════ WEEK 4 ═══════════════════════════════ */
  {
    week: 4,
    title: 'Close — Negotiate, Accept & Transition',
    theme: 'The finish line is not the interview — it\'s the signed offer letter.',
    color: '#ef4444',
    days: [
      {
        day: 'Day 22 (Mon)',
        focus: 'Interview Execution',
        tasks: [
          { id: 'w4d1t1', text: 'Attend scheduled interviews — arrive 15 mins early, bring 3 printed CVs', done: false },
          { id: 'w4d1t2', text: 'Wear formal: light shirt, dark trousers, polished shoes, minimal accessories', done: false },
          { id: 'w4d1t3', text: 'Bring a notebook — write down interviewer names and key discussion points', done: false },
          { id: 'w4d1t4', text: 'Send thank-you email within 4 hours of each interview', done: false }
        ]
      },
      {
        day: 'Day 23 (Tue)',
        focus: 'Continued Applications + Follow-Ups',
        tasks: [
          { id: 'w4d2t1', text: 'Do not stop applying — even if interviews are going well', done: false },
          { id: 'w4d2t2', text: 'Apply to 3-5 more positions (maintain pipeline)', done: false },
          { id: 'w4d2t3', text: 'Follow up with companies where interviews are done but no feedback yet', done: false },
          { id: 'w4d2t4', text: 'Prepare comparison table if multiple offers expected (salary, benefits, growth)', done: false }
        ]
      },
      {
        day: 'Day 24 (Wed)',
        focus: 'Offer Evaluation Framework',
        tasks: [
          { id: 'w4d3t1', text: 'If offer received: do NOT accept on the spot — ask for 2-3 days to decide', done: false },
          { id: 'w4d3t2', text: 'Compare offer against SALARY_DATA benchmarks', done: false },
          { id: 'w4d3t3', text: 'Evaluate: salary + transport + meal + medical + bonus + leave + growth path', done: false },
          { id: 'w4d3t4', text: 'If below target: negotiate using the tips from SALARY_DATA', done: false }
        ]
      },
      {
        day: 'Day 25 (Thu)',
        focus: 'Negotiation Execution',
        tasks: [
          { id: 'w4d4t1', text: 'Call or email the hiring manager with your counter-proposal if negotiating', done: false },
          { id: 'w4d4t2', text: 'Frame it positively: "I am very excited about this opportunity. To make it work..."', done: false },
          { id: 'w4d4t3', text: 'If multiple offers: use the stronger one as leverage (tastefully)', done: false },
          { id: 'w4d4t4', text: 'Get the final offer in WRITING (offer letter with salary, designation, joining date)', done: false }
        ]
      },
      {
        day: 'Day 26 (Fri)',
        focus: 'Decision & Acceptance',
        tasks: [
          { id: 'w4d5t1', text: 'Accept the best offer in writing — email confirmation', done: false },
          { id: 'w4d5t2', text: 'Politely decline other offers — maintain relationships for the future', done: false },
          { id: 'w4d5t3', text: 'Inform Interstoff — give proper notice (as per contract, usually 1-2 months)', done: false },
          { id: 'w4d5t4', text: 'Update LinkedIn: new position (but don\'t announce until you actually join)', done: false }
        ]
      },
      {
        day: 'Day 27-28 (Sat-Sun)',
        focus: 'Transition Planning',
        tasks: [
          { id: 'w4d6t1', text: 'Prepare handover document for current M&S orders at Interstoff', done: false },
          { id: 'w4d6t2', text: 'Thank your Interstoff manager and team — leave on excellent terms', done: false },
          { id: 'w4d6t3', text: 'Connect with future colleagues on LinkedIn before joining', done: false },
          { id: 'w4d6t4', text: 'Celebrate! You earned it. 🎉', done: false }
        ]
      }
    ]
  }
];


/* ─────────────────────────────────────────────────────────────────────────────
 * 8. PROFILE_PHOTO_GUIDE — tips for the perfect LinkedIn / CV photo
 * ───────────────────────────────────────────────────────────────────────────── */
const PROFILE_PHOTO_GUIDE = {
  title: 'Professional Photo Guide for LinkedIn & CV',
  subtitle: 'First impressions are visual. Your photo is the first thing a recruiter sees — make it count.',
  sections: [
    {
      heading: '📸 Camera & Setup',
      tips: [
        'Use a smartphone with a good front camera (any modern phone works — iPhone, Samsung, Xiaomi all fine).',
        'Shoot in natural daylight — stand near a window, face the light source. Avoid harsh overhead fluorescent lights.',
        'Use the rear camera (higher quality) with a friend taking the photo, or use a tripod/stack of books + timer.',
        'Shoot in portrait mode if available — this blurs the background and keeps focus on your face.',
        'Frame: head and shoulders only. Your face should fill 60-70% of the frame.',
        'Keep the camera at eye level — not looking up (double chin) or down (arrogant).'
      ]
    },
    {
      heading: '👔 What to Wear',
      tips: [
        'Formal shirt with collar — white or light blue is safest and most professional.',
        'Ensure the shirt is pressed and wrinkle-free — iron before the photoshoot.',
        'Avoid loud patterns, checks, or bright colors — they distract from your face.',
        'If wearing a tie, keep it simple — solid color or subtle pattern.',
        'For Bangladesh\'s apparel industry, a neat formal shirt (no blazer needed) is perfect.',
        'Grooming: fresh haircut, trimmed beard/clean-shaven, clean face. Simple is best.'
      ]
    },
    {
      heading: '😊 Expression & Posture',
      tips: [
        'Smile naturally — a gentle, warm smile (not a grin, not a frown). Think "approachable professional."',
        'Eyes should be open and looking directly at the camera lens — this creates connection.',
        'Slight head tilt (5-10°) is acceptable — it looks natural. Straight-on can look stiff.',
        'Shoulders should be visible and slightly angled (not square to camera) — this is more flattering.',
        'Sit or stand up straight — good posture conveys confidence.',
        'Take 20-30 shots and pick the best one — do not settle for the first take.'
      ]
    },
    {
      heading: '🎨 Background & Editing',
      tips: [
        'Ideal: plain, solid background (white, light gray, or light blue wall).',
        'If no plain wall available: use remove.bg (free) to remove background and replace with solid color.',
        'Alternatively: stand in front of a well-organized bookshelf or office setting — keep it tidy.',
        'Edit minimally: adjust brightness/contrast slightly if needed. Do NOT over-filter or beautify.',
        'No selfie filters, no Snapchat effects, no heavy editing. Keep it authentic.',
        'Final image should be at least 400×400 pixels (LinkedIn minimum) but ideally 800×800+.',
        'Save as high-quality JPEG — not a screenshot or compressed WhatsApp image.'
      ]
    },
    {
      heading: '🚫 Common Mistakes to Avoid',
      tips: [
        'No sunglasses or regular glasses with glare — clean glasses are fine.',
        'No group photos cropped — recruiters can tell, and it looks unprofessional.',
        'No casual photos (t-shirts, party settings, travel selfies).',
        'No photos with watermarks, borders, or text overlays.',
        'No old photos — if you look noticeably different now, retake.',
        'No photos where you are looking away from camera or in deep shadow.',
        'No full-body photos — LinkedIn is shoulder-up.',
        'No background clutter — messy rooms, other people, or distracting objects.'
      ]
    },
    {
      heading: '✅ Quick Checklist Before Uploading',
      tips: [
        '☐ Face clearly visible and well-lit',
        '☐ Professional attire (formal shirt with collar)',
        '☐ Plain or clean background',
        '☐ Gentle, natural smile',
        '☐ Eyes looking at camera',
        '☐ High resolution (800×800+ pixels)',
        '☐ No filters or heavy editing',
        '☐ Cropped to head and shoulders',
        '☐ Looks like the current you',
        '☐ Would you hire this person? If yes → upload.'
      ]
    }
  ]
};


/* ─────────────────────────────────────────────────────────────────────────────
 * 9. MATCH_LEVEL_CONFIG — styling & labels for job match badges
 * ───────────────────────────────────────────────────────────────────────────── */
const MATCH_LEVEL_CONFIG = {
  perfect: {
    label: '🎯 Perfect Match',
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.15)',
    description: 'Exact role & experience match — apply immediately.'
  },
  target: {
    label: '✅ Target Role',
    color: '#22d3ee',
    bg: 'rgba(34, 211, 238, 0.15)',
    description: 'Core target — strong fit for your profile.'
  },
  good: {
    label: '👍 Good Fit',
    color: '#7c3aed',
    bg: 'rgba(124, 58, 237, 0.15)',
    description: 'Relevant role — worth applying with a strong cover note.'
  },
  stretch: {
    label: '🔺 Stretch',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.15)',
    description: 'Above current level — apply to aim high.'
  },
  alternative: {
    label: '↗️ Alternative Path',
    color: '#6366f1',
    bg: 'rgba(99, 102, 241, 0.15)',
    description: 'Different title but transferable skills.'
  },
  future: {
    label: '🔮 Future Goal',
    color: '#ec4899',
    bg: 'rgba(236, 72, 153, 0.15)',
    description: 'Aspirational — bookmark for 3-5 years.'
  },
  below: {
    label: '⬇️ Below Level',
    color: '#6b7280',
    bg: 'rgba(107, 114, 128, 0.15)',
    description: 'Entry-level — only if nothing else available.'
  }
};


/* ─────────────────────────────────────────────────────────────────────────────
 * 10. APP_CONFIG — global app settings
 * ───────────────────────────────────────────────────────────────────────────── */
const APP_CONFIG = {
  appName: 'Rahat Career Hub',
  version: '1.0.0',
  lastUpdated: '2026-06-02',
  owner: {
    name: 'S.M. Rahat',
    title: 'Assistant Merchandiser',
    company: 'Interstoff Apparels Ltd',
    account: 'Marks & Spencer',
    university: 'BUTEX (Bangladesh University of Textiles)',
    degree: 'B.Sc. in Textile Engineering',
    portfolio: 'https://smrahat-hub.github.io',
    targetRole: 'Merchandiser / Senior Merchandiser',
    targetLocation: 'Dhaka',
    targetIndustry: 'Buying House / Sourcing Office'
  },
  colors: {
    deepNavy: '#0a0e27',
    accentPurple: '#7c3aed',
    accentEmerald: '#10b981',
    warmGold: '#f59e0b',
    textPrimary: '#f1f5f9',
    textSecondary: '#94a3b8',
    cardBg: 'rgba(255, 255, 255, 0.05)',
    cardBorder: 'rgba(255, 255, 255, 0.1)',
    glassBg: 'rgba(255, 255, 255, 0.08)',
    glassBorder: 'rgba(255, 255, 255, 0.15)'
  },
  localStorage: {
    prefix: 'rahat_career_',
    keys: {
      linkedinChecklist: 'rahat_career_linkedin_checklist',
      actionPlan: 'rahat_career_action_plan',
      appliedJobs: 'rahat_career_applied_jobs',
      theme: 'rahat_career_theme',
      lastVisit: 'rahat_career_last_visit'
    }
  }
};


/* ─────────────────────────────────────────────────────────────────────────────
 * 11. PRIORITY_CONFIG — styling for priority badges
 * ───────────────────────────────────────────────────────────────────────────── */
const PRIORITY_CONFIG = {
  critical: { label: '🔴 Critical', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.15)' },
  high:     { label: '🟠 High',     color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
  medium:   { label: '🟡 Medium',   color: '#eab308', bg: 'rgba(234, 179, 8, 0.15)' },
  low:      { label: '🟢 Low',      color: '#22c55e', bg: 'rgba(34, 197, 94, 0.15)' }
};


/* ═══════════════════════════════════════════════════════════════════════════════
 *  END OF DATA LAYER
 *  Total constants exported: 11
 *  ─ JOB_PORTAL_LINKS      (portals, FB groups, recruiter search, career pages)
 *  ─ LIVE_JOBS              (13 active listings, June 2026)
 *  ─ INTERVIEW_QUESTIONS    (35 Q&A across 5 categories)
 *  ─ SALARY_DATA            (benchmarks, target, negotiation tips)
 *  ─ LINKEDIN_CHECKLIST     (11 optimization tasks)
 *  ─ COLD_MESSAGES          (5 outreach templates)
 *  ─ ACTION_PLAN_WEEKS      (4-week plan with 108 daily tasks)
 *  ─ PROFILE_PHOTO_GUIDE    (6-section visual guide)
 *  ─ MATCH_LEVEL_CONFIG     (7 match-level badge styles)
 *  ─ APP_CONFIG             (global settings, colors, localStorage keys)
 *  ─ PRIORITY_CONFIG        (4 priority badge styles)
 * ═══════════════════════════════════════════════════════════════════════════════ */
