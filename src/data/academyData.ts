export interface ImpactStat {
  id: string;
  metric: string;
  label: string;
  description: string;
  iconName: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'academic' | 'technology' | 'wellness' | 'arts';
  categoryLabel: string;
  summary: string;
  features: string[];
  specs: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  category: 'student' | 'parent' | 'volunteer' | 'partner';
  year: string;
  highlight: string;
}

export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  tagline: string;
  description: string;
  keyOutcomes: string[];
  beneficiaries: string;
}

export const ACADEMY_DATA = {
  brand: {
    name: 'The Sunrise Academy',
    shortName: 'Sunrise Academy',
    tagline: 'Empowering Communities Through Education and Hope',
    established: '2016',
    registrationNumber: 'NGO/WB/2016/04981',
    taxExemption: '80G & 12A Certified',
    phone: '+91 79803 44722',
    alternatePhone: '+91 (033) 2445-8910',
    email: 'thesunriseacademyin@gmail.com',
    secondaryEmail: 'contact@mysunriseacademy.in',
    address: 'Behala, Kolkata - 700034, West Bengal, India',
    visitingHours: 'Monday – Saturday: 9:00 AM – 6:30 PM (IST)',
  },

  hero: {
    mainHeading: 'Empowering Communities Through Education and Hope',
    subHeading:
      'Sunrise Academy is a non-profit organization dedicated to providing quality education, skill development, and opportunities to underprivileged children and communities.',
    primaryButton: 'Donate Now',
    secondaryButton: 'Become a Volunteer',
    trustPoints: [
      '100% Non-Profit Registered NGO',
      '80G Tax Deductible Receipts',
      'Direct Community Impact',
      'Child Safeguarding Compliant',
    ],
  },

  mission: {
    heading: 'Building Brighter Futures',
    leadParagraph:
      'At Sunrise Academy, we believe that education is a fundamental right. Through our educational programs, community initiatives, and support services, we strive to create opportunities for children and families to achieve a better future.',
    pillars: [
      {
        id: 'p1',
        title: 'Foundational & Remedial Education',
        description:
          'Structured academic curriculum with specialized remedial learning to ensure no student falls behind in literacy, numeracy, and science.',
      },
      {
        id: 'p2',
        title: 'Digital Literacy & Modern Skills',
        description:
          'Providing hands-on access to modern computers, basic coding, internet safety, and functional English for underprivileged youth.',
      },
      {
        id: 'p3',
        title: 'Holistic Health & Midday Nutrition',
        description:
          'Ensuring hunger never hinders learning through balanced midday meals, clean drinking water, and regular medical checkups.',
      },
      {
        id: 'p4',
        title: 'Community Mentorship & Inclusion',
        description:
          'Engaging parents, local mentors, and social workers to foster a safe, resilient ecosystem that prevents school dropouts.',
      },
    ],
  },

  impactStats: [
    {
      id: 'stat-1',
      metric: '5000+',
      label: 'Lives Impacted',
      description: 'Children, parents, and community members touched through our educational and welfare interventions.',
      iconName: 'Users',
    },
    {
      id: 'stat-2',
      metric: '1000+',
      label: 'Students Supported',
      description: 'Children enrolled across remedial coaching, formal schooling assistance, and digital learning classes.',
      iconName: 'GraduationCap',
    },
    {
      id: 'stat-3',
      metric: '50+',
      label: 'Community Programs',
      description: 'Free literacy drives, health awareness camps, vocational workshops, and youth leadership initiatives.',
      iconName: 'Sparkles',
    },
    {
      id: 'stat-4',
      metric: '100+',
      label: 'Dedicated Volunteers',
      description: 'Educators, university scholars, and professionals offering their time and passion weekly.',
      iconName: 'HeartHandshake',
    },
  ] as ImpactStat[],

  aboutUs: {
    heading: 'Who We Are',
    content:
      'Sunrise Academy is a charitable organization committed to making education accessible to all. We work towards empowering underprivileged children through learning opportunities, mentorship, life skills training, and community development programs.',
    detailedStory:
      'Founded in Kolkata, Sunrise Academy emerged from a grassroots desire to eradicate educational inequality. Many children from low-income families drop out due to lack of academic guidance and financial hardship. By creating vibrant, child-safe learning hubs equipped with passionate teachers and modern tools, we bridge the gap between marginalization and opportunity. Our model is deeply rooted in local communities, collaborating with parents and civic partners to guarantee sustainable, generational change.',
    principles: [
      {
        title: 'Uncompromising Quality',
        desc: 'Every child, regardless of economic background, deserves top-tier pedagogical care and contemporary learning materials.',
      },
      {
        title: 'Radical Transparency',
        desc: 'Over 85% of every donated rupee directly funds classroom programs, teaching aids, and nutritional sustenance.',
      },
      {
        title: 'Dignity & Equity',
        desc: 'We cultivate an environment of unconditional respect, empowering girls, first-generation learners, and neurodivergent children.',
      },
    ],
  },

  facilities: [
    {
      id: 'fac-1',
      title: 'Smart Digital Computer Lab',
      category: 'technology',
      categoryLabel: 'Technology',
      summary:
        'A fully equipped 25-seat computer center with high-speed internet, offering introductory coding, office tools, and digital literacy classes.',
      features: [
        'Dedicated workstations with updated learning software',
        'Certified digital trainers and weekend coding clubs',
        'Safe, supervised internet research stations',
      ],
      specs: '25 Modern Terminals · High-Speed Fiber · Power Backup',
      badge: 'Digital Inclusion',
    },
    {
      id: 'fac-2',
      title: 'Interactive Modern Classrooms',
      category: 'academic',
      categoryLabel: 'Academic',
      summary:
        'Sunlit, well-ventilated classrooms with ergonomic desks, audiovisual aids, interactive whiteboards, and child-safe furnishings.',
      features: [
        'Low student-to-teacher ratio (1:15) for individual attention',
        'Multilingual visual charts and STEM manipulative kits',
        'Clean air circulation and natural daylight design',
      ],
      specs: '6 Dedicated Classrooms · Smart AV Equipment · Ergonomic Seating',
      badge: 'Foundational Learning',
    },
    {
      id: 'fac-3',
      title: 'The Hope Library & Resource Center',
      category: 'academic',
      categoryLabel: 'Academic',
      summary:
        'A warm sanctuary housing over 3,500 curated books in Bengali, English, and Hindi, spanning science, folklore, poetry, and biographies.',
      features: [
        'Weekly storytelling circles and reading buddy programs',
        'Borrowing privileges for students and family members',
        'Quiet study alcoves for competitive exam preparations',
      ],
      specs: '3,500+ Books · Daily Reading Hours · Reference Section',
      badge: 'Literacy Hub',
    },
    {
      id: 'fac-4',
      title: 'Nutrition & Child Health Center',
      category: 'wellness',
      categoryLabel: 'Health & Wellness',
      summary:
        'Equipped with industrial RO water filtration, a hygienic kitchen serving wholesome midday snacks, and a first-aid wellness room.',
      features: [
        'Daily fortified midday meals for all enrolled students',
        'Quarterly health, vision, and dental screenings by volunteer doctors',
        'Nutritional monitoring and growth tracking records',
      ],
      specs: 'RO Filtered Drinking Station · First Aid Station · Meal Counter',
      badge: 'Holistic Care',
    },
    {
      id: 'fac-5',
      title: 'Creative Arts & Performance Hall',
      category: 'arts',
      categoryLabel: 'Creative & Sports',
      summary:
        'A vibrant multipurpose space for painting, Indian classical and folk music, theatre, debate competitions, and indoor games.',
      features: [
        'Free art supplies, canvases, and musical instruments',
        'Annual cultural showcase celebrating local folk traditions',
        'Yoga mats and indoor sports equipment (carrom, chess, table tennis)',
      ],
      specs: 'Multipurpose Stage · Sound System · Art Exhibition Railings',
      badge: 'Creative Expression',
    },
    {
      id: 'fac-6',
      title: 'Safe, Accessible & Inclusive Campus',
      category: 'wellness',
      categoryLabel: 'Infrastructure',
      summary:
        'Barrier-free infrastructure designed to welcome children of all physical abilities with dedicated girl-friendly sanitation amenities.',
      features: [
        'Wheelchair-accessible ramps and wide entrance pathways',
        'Separate, sanitized washrooms with sanitary hygiene dispensers',
        '24/7 CCTV surveillance and verified staff background checks',
      ],
      specs: 'Ramp Access · Sanitized Restrooms · Secure Gated Entry',
      badge: 'Child Safety First',
    },
  ] as Facility[],

  programs: [
    {
      id: 'prog-1',
      title: 'Neev: Foundational Learning & Numeracy',
      ageGroup: 'Ages 5 – 10 (Grades 1 – 5)',
      tagline: 'Igniting curiosity through phonics, joyful arithmetic, and creative play.',
      description:
        'Focuses on building solid basic reading and counting skills so children transition smoothly into mainstream public or subsidized schools without anxiety.',
      keyOutcomes: [
        '100% of enrolled students achieve basic grade-level literacy within 9 months',
        'Daily interactive phonics and math laboratory sessions',
        'Free distribution of uniforms, bags, notebooks, and geometry sets',
      ],
      beneficiaries: '350+ Children Annually',
    },
    {
      id: 'prog-2',
      title: 'Udaan: Secondary Remedial & Board Exam Prep',
      ageGroup: 'Ages 11 – 16 (Grades 6 – 10)',
      tagline: 'Preventing school dropout and nurturing academic excellence for state boards.',
      description:
        'Provides after-school coaching in Science, Mathematics, and English for adolescents whose parents are unable to afford private tutors.',
      keyOutcomes: [
        '96% pass rate in Secondary Board Examinations (Madhyamik / CBSE)',
        'Weekly mock tests and personalized doubt-clearing sessions',
        'Career counseling seminars with university scholars',
      ],
      beneficiaries: '420+ Adolescents Annually',
    },
    {
      id: 'prog-3',
      title: 'Disha: Digital Literacy & Youth Career Readiness',
      ageGroup: 'Ages 16 – 22 (Young Adults)',
      tagline: 'Bridging the economic divide with computers, spoken English, and vocational skills.',
      description:
        'Intensive 12-week certificate courses in computer fundamentals, data entry, customer service, resume building, and workplace communication.',
      keyOutcomes: [
        'Over 180 youth placed in entry-level administrative and IT support roles',
        'Spoken English and professional etiquette training',
        'Basic exposure to AI tools and modern digital productivity',
      ],
      beneficiaries: '200+ Youth Annually',
    },
    {
      id: 'prog-4',
      title: 'Kanya Shakti: Girls’ Education & Retention',
      ageGroup: 'Ages 8 – 18 (Girls)',
      tagline: 'Ensuring zero female dropouts through scholarships, mentorship, and hygiene kits.',
      description:
        'A targeted intervention addressing economic and social barriers that disproportionately impact young girls in suburban and rural fringes.',
      keyOutcomes: [
        'Full tuition and transportation sponsorships for at-risk girls',
        'Monthly distribution of adolescent hygiene and sanitation kits',
        'Self-defense and leadership development workshops',
      ],
      beneficiaries: '300+ Girls Annually',
    },
  ] as Program[],

  testimonials: [
    {
      id: 'test-1',
      quote:
        'Before Sunrise Academy opened its remedial center in our neighborhood, I was terrified of failing my Class 10 board exams. The mentors sat with me patiently every evening to explain mathematics and English concepts. This year, I scored 84% and received a scholarship to pursue Science!',
      author: 'Riya Mondal',
      role: 'Student & Board Scholar',
      location: 'Behala, Kolkata',
      category: 'student',
      year: 'Class of 2025',
      highlight: 'Scored 84% in Madhyamik Examination',
    },
    {
      id: 'test-2',
      quote:
        'As a daily wage earner, I always feared my two children would be forced into the same cycle of hardship. Sunrise Academy gave them free school uniforms, books, and computer classes. Seeing my son comfortably operate a computer and speak fluent English brings tears to my eyes.',
      author: 'Rajesh Sharma',
      role: 'Parent of Class 4 & 7 Students',
      location: 'Thakurpukur, Kolkata',
      category: 'parent',
      year: 'Associated since 2021',
      highlight: 'First-Generation Learners in the Family',
    },
    {
      id: 'test-3',
      quote:
        'Volunteering as an English mentor at Sunrise Academy has been the most transformative chapter of my life. The enthusiasm in these young students is palpable. In just six months, children who previously struggled to speak one sentence are now confidently reading storybooks aloud.',
      author: 'Ananya Sen',
      role: 'Volunteer Educator & IT Professional',
      location: 'South Kolkata',
      category: 'volunteer',
      year: 'Volunteer for 2 Years',
      highlight: 'Mentored 45+ Middle Schoolers',
    },
    {
      id: 'test-4',
      quote:
        'What sets Sunrise Academy apart from typical charity efforts is their disciplined, holistic care. They do not just hand out books; they track health indicators, provide clean drinking water, and nurture the emotional resilience of every student.',
      author: 'Dr. Subhasis Banerjee',
      role: 'Consulting Pediatrician & Health Partner',
      location: 'Kolkata Medical Services',
      category: 'partner',
      year: 'Partner since 2019',
      highlight: 'Conducted 12+ Community Health Drives',
    },
    {
      id: 'test-5',
      quote:
        'I joined the Disha Digital Literacy batch after finishing high school without any job prospects. The academy taught us Excel, typing, and workplace communication. Within two months of graduating, I was hired as a front-desk coordinator at a healthcare firm.',
      author: 'Priya Das',
      role: 'Alumna & Junior Support Coordinator',
      location: 'Tollygunge, Kolkata',
      category: 'student',
      year: 'Disha Batch of 2024',
      highlight: 'Now Financially Supporting Her Family',
    },
    {
      id: 'test-6',
      quote:
        'The teachers at Sunrise Academy don’t treat our children like charity cases—they treat them as future leaders. Whenever my daughter was hesitant to speak up, her teacher encouraged her to join the debate team. Today, she speaks with utter confidence.',
      author: 'Meera Mukherjee',
      role: 'Parent & Community Advisory Member',
      location: 'Behala, Kolkata',
      category: 'parent',
      year: 'Community Leader',
      highlight: 'Parent-Teacher Council Member',
    },
  ] as Testimonial[],

  callToAction: {
    heading: 'Together We Can Transform Lives',
    subHeading:
      'Every contribution, volunteer effort, and act of support helps create a brighter future for children and communities.',
    primaryButton: 'Donate Now',
    secondaryButton: 'Contact Us',
    donationTiers: [
      { amount: 500, label: 'Stationery & Study Pack', impact: '10 nutritious meals & study stationery' },
      { amount: 1000, label: 'Sponsor a Student Month', impact: 'Full month of books, uniform, and remedial tuition' },
      { amount: 2500, label: 'Digital Lab Access', impact: 'Quarterly computer literacy kit for 2 students' },
      { amount: 5000, label: 'Term Scholarship', impact: 'Full semester tuition & nutrition for an adolescent girl' },
    ],
  },

  faqs: [
    {
      q: 'Is my donation tax-deductible?',
      a: 'Yes. The Sunrise Academy is registered under Section 12A and Section 80G of the Indian Income Tax Act. All Indian taxpayers receive a formal 80G tax exemption receipt instantly upon contribution.',
    },
    {
      q: 'How does The Sunrise Academy utilize donor funds?',
      a: 'We operate with strict financial transparency. Over 85% of incoming donations directly fund student education, digital lab hardware, and midday meals. Only 10% supports facility operations, and 5% covers basic administrative compliance.',
    },
    {
      q: 'How can I volunteer if I work full-time?',
      a: 'We offer flexible weekend mentorship circles, weekday evening coaching, and remote digital mentoring roles. Whether you can give 2 hours on a Sunday or conduct a monthly workshop, your presence makes an enormous impact.',
    },
    {
      q: 'Where are your physical learning centers located?',
      a: 'Our primary facility and administrative campus is located in Behala, Kolkata-700034, West Bengal. We welcome donors, parents, and prospective volunteers to visit during our open hours (Mon-Sat, 9 AM - 6:30 PM).',
    },
  ],
};
