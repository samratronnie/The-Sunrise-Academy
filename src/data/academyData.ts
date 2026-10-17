export interface ImpactArea {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface FocusArea {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface ProgrammeCategory {
  id: string;
  title: string;
  tagline: string;
  items: string[];
}

export interface WBYEFData {
  brand: {
    name: string;
    acronym: string;
    tagline: string;
    phone: string;
    alternatePhone: string;
    email: string;
    website: string;
    address: string;
    regNumber: string;
    taxExemption: string;
  };
  hero: {
    mainHeading: string;
    subHeading: string;
    buttons: {
      join: string;
      volunteer: string;
      donate: string;
    };
    highlights: string[];
  };
  impactAreas: ImpactArea[];
  about: {
    heading: string;
    lead: string;
    body: string;
    pillars: { title: string; desc: string }[];
  };
  visionMission: {
    visionHeading: string;
    visionQuote: string;
    visionSubtext: string;
    missionHeading: string;
    missionPillars: string;
    missionContent: string;
    focusAreas: FocusArea[];
  };
  programmes: {
    title: string;
    tagline: string;
    categories: ProgrammeCategory[];
  };
  ruralInitiative: {
    title: string;
    heading: string;
    objective: string;
    activities: string[];
    quote: string;
  };
  womenEmpowerment: {
    heading: string;
    motto: string;
    initiatives: string[];
  };
  youthLeadership: {
    heading: string;
    tagline: string;
    activities: string[];
  };
  volunteer: {
    heading: string;
    subHeading: string;
    banner: string;
    activities: string[];
  };
  approach: {
    framework: string[];
    metrics: { label: string; value: string; desc: string }[];
  };
  partners: {
    heading: string;
    subHeading: string;
    partnerTypes: string[];
  };
  donation: {
    heading: string;
    subHeading: string;
    banner: string;
    impactPoints: string[];
  };
  contact: {
    heading: string;
    subHeading: string;
    address: string;
    phone: string;
    email?: string;
    website?: string;
  };
}

export const WBYEF_DATA: WBYEFData = {
  brand: {
    name: 'West Bengal Youth Empowerment Foundation',
    acronym: 'WBYEF',
    tagline: 'Empowering Youth, Transforming Futures',
    phone: '+91 79803 44722',
    alternatePhone: '+91 (033) 2445-8910',
    email: 'contact@wbyef.in',
    website: 'www.wbyef.in',
    address: 'Behala, Kolkata - 700034, West Bengal, India',
    regNumber: 'WB/NGO/YOUTH/2016/0942',
    taxExemption: 'Section 80G & 12A Certified',
  },

  hero: {
    mainHeading: "Empowering Bengal's Youth. Building Tomorrow's Leaders.",
    subHeading:
      'The West Bengal Youth Empowerment Foundation (WBYEF) is a youth-centric social welfare organisation committed to enabling educational, professional, and social advancement for young people across West Bengal through education, skill development, career guidance, mentorship, entrepreneurship, and community engagement.',
    buttons: {
      join: 'Join Our Mission',
      volunteer: 'Become a Volunteer',
      donate: 'Donate Now',
    },
    highlights: [
      'Youth-Centric Social Welfare Organisation',
      'Operating Across 23 Districts of West Bengal',
      'Free Coaching, Mentorship & Guidance',
      'Section 80G Tax-Deductible Contributions',
    ],
  },

  impactAreas: [
    {
      id: 'ia-1',
      title: 'Education & Guidance',
      icon: '🎓',
      description: 'Free academic support, scholarship counseling, and foundational coaching for school and college students.',
    },
    {
      id: 'ia-2',
      title: 'Career Development',
      icon: '💼',
      description: 'Specialized preparation for government exams, competitive tests, corporate interviews, and workplace readiness.',
    },
    {
      id: 'ia-3',
      title: 'Digital Literacy',
      icon: '💻',
      description: 'Hands-on training in computer fundamentals, internet safety, coding, data tools, and modern AI literacy.',
    },
    {
      id: 'ia-4',
      title: 'Entrepreneurship',
      icon: '🚀',
      description: 'Incubation, seed guidance, business plan formulation, and mentorship to transform youth into job creators.',
    },
    {
      id: 'ia-5',
      title: "Women's Empowerment",
      icon: '👩',
      description: 'Targeted scholarships, self-reliance workshops, financial independence, and leadership opportunities for young women.',
    },
    {
      id: 'ia-6',
      title: 'Rural Youth Upliftment',
      icon: '🌾',
      description: 'Taking career camps, digital labs, and educational opportunities directly to the remote villages of Bengal.',
    },
    {
      id: 'ia-7',
      title: 'Community Development',
      icon: '❤️',
      description: 'Civic action drives, environmental awareness, health camps, and grassroots youth-led social initiatives.',
    },
    {
      id: 'ia-8',
      title: 'Mentorship & Leadership',
      icon: '🧑‍🏫',
      description: 'One-on-one guidance connecting Bengal youth with civil servants, industry leaders, university professors, and educators.',
    },
  ],

  about: {
    heading: 'Who We Are',
    lead:
      'The West Bengal Youth Empowerment Foundation (WBYEF) is a social welfare organisation working toward creating opportunities for young people to learn, grow, lead, and succeed. We believe that youth empowerment is the foundation of sustainable social and economic development.',
    body:
      'Through strategic partnerships with educational institutions, professionals, academicians, government agencies, civil society organisations, industries, and socially responsible institutions, we aim to create an ecosystem where every youth can access quality education, career opportunities, mentorship, skills, and support.',
    pillars: [
      {
        title: 'Equality of Opportunity',
        desc: 'Ensuring youth from low-income, marginalized, and rural families receive equal access to high-impact career pathways.',
      },
      {
        title: 'Institutional Rigor',
        desc: 'Structured curricula delivered by experienced faculty, civil services rank-holders, and industry specialists.',
      },
      {
        title: 'Generational Impact',
        desc: 'Empowering one young person economically elevates an entire family and uplifts their local village ecosystem.',
      },
    ],
  },

  visionMission: {
    visionHeading: 'Our Vision',
    visionQuote:
      '“A skilled, educated, empowered and socially responsible youth community that contributes to a prosperous and inclusive West Bengal.”',
    visionSubtext:
      'We envision a Bengal where talent is never limited by economic circumstances and every young person has access to knowledge, opportunity and dignified livelihoods.',
    missionHeading: 'Our Mission',
    missionPillars: 'Educate • Empower • Skill • Employ • Encourage',
    missionContent:
      'We work to bridge the gap between education and opportunity by equipping young people with the knowledge, practical skills, mentorship, and opportunities necessary to build successful careers and meaningful lives.',
    focusAreas: [
      {
        id: 'cfa-1',
        title: 'Education For All',
        icon: '📚',
        description:
          'Promoting access to quality education, career awareness, college guidance, scholarships and informed decision-making.',
      },
      {
        id: 'cfa-2',
        title: 'Employability & Career Development',
        icon: '💼',
        description:
          'Supporting youth through career guidance, government job preparation and professional development.',
      },
      {
        id: 'cfa-3',
        title: 'Skill Development',
        icon: '💻',
        description:
          'Training in communication skills, digital literacy, workplace readiness, financial literacy and entrepreneurship.',
      },
      {
        id: 'cfa-4',
        title: 'Entrepreneurship Development',
        icon: '🚀',
        description:
          'Encouraging young people to become job creators through mentoring, awareness and enterprise support.',
      },
      {
        id: 'cfa-5',
        title: 'Women & Youth Empowerment',
        icon: '👩',
        description:
          'Building opportunities for women and disadvantaged youth to participate meaningfully in education, employment and entrepreneurship.',
      },
      {
        id: 'cfa-6',
        title: 'Rural Youth Development',
        icon: '🌾',
        description:
          'Taking opportunities directly to rural communities and underserved areas of West Bengal.',
      },
      {
        id: 'cfa-7',
        title: 'Mentorship & Leadership',
        icon: '🧑‍🏫',
        description:
          'Connecting youth with mentors, educators, professionals and industry leaders.',
      },
      {
        id: 'cfa-8',
        title: 'Community Development',
        icon: '❤️',
        description:
          'Encouraging civic responsibility, social participation and sustainable community initiatives.',
      },
    ],
  },

  programmes: {
    title: 'Youth Career Mission',
    tagline: '“From Classroom to Career”',
    categories: [
      {
        id: 'prog-gov',
        title: 'Government Examination Preparation',
        tagline: 'Comprehensive coaching and test series for competitive exams',
        items: [
          'Staff Selection Commission (SSC CGL, CHSL, MTS)',
          'Banking Services (IBPS PO, Clerk, SBI, RBI Assistant)',
          'Indian Railways (RRB NTPC, Group D, ALP)',
          'West Bengal Police & Kolkata Police Services',
          'Civil Services (WBCS & UPSC Foundation)',
          'Teaching Services (WB TET, SLST, CTET)',
          'Other State & Central Competitive Examinations',
        ],
      },
      {
        id: 'prog-prof',
        title: 'Professional Development',
        tagline: 'Equipping youth with industry-standard corporate workplace skills',
        items: [
          'Communication Skills & Public Speaking',
          'Spoken English & Corporate Vocabulary',
          'Interview Preparation & Mock Board Panels',
          'Professional Resume Building & LinkedIn Profiling',
          'Workplace Readiness, Professional Ethics & Grooming',
          'Digital Literacy & Workplace Productivity Tools',
        ],
      },
      {
        id: 'prog-counsel',
        title: 'Career Counselling & Guidance',
        tagline: 'Scientific aptitude assessment and guided educational pathways',
        items: [
          'Course Selection (Vocational, Degree & Professional)',
          'College Selection & Higher Education Pathways',
          'Career Mapping & Personalized Mentorship Roadmaps',
          'National & State Scholarship Guidance (SVMCM, Aikyashree, NSP)',
          'Post-Graduate & Overseas Opportunities Guidance',
        ],
      },
    ],
  },

  ruralInitiative: {
    title: 'Rural Bengal Initiative',
    heading: 'Empowering Rural Youth',
    objective: 'Bringing education, awareness and opportunities to every village of West Bengal.',
    quote: '“Your village should never limit your dreams.”',
    activities: [
      'Career Awareness Camps',
      'Higher Education Awareness Drives',
      'Free One-on-One Counselling Sessions',
      'Skill Development Workshops',
      'Digital Literacy Programmes on Mobile Wheels',
      'Entrepreneurship Awareness Camps in Gram Panchayats',
      'College Admission & Scholarship Guidance Desks',
    ],
  },

  womenEmpowerment: {
    heading: 'Women Empowerment',
    motto: 'Educate. Empower. Enable.',
    initiatives: [
      'Higher Education Awareness for Adolescent Girls',
      'Career Counselling & Professional Guidance',
      'Digital Literacy & Internet Safety Workshops',
      'Financial Literacy & Micro-Savings Education',
      'Skill Development & Tailored Vocational Training',
      'Women Entrepreneurship Incubation & Micro-Grant Support',
      'Corporate & Public Sector Employment Guidance',
      'Leadership Development & Youth Advocacy',
      'Self-Reliance & Community Rights Programmes',
    ],
  },

  youthLeadership: {
    heading: 'Youth Leadership Programme',
    tagline: "Creating Tomorrow's Leaders",
    activities: [
      'Leadership Workshops & Public Speaking',
      'Social-Service Projects in Local Communities',
      'Community Awareness & Cleanliness Campaigns',
      'Youth Conferences & Parliamentary Debate Formats',
      'Volunteer Exchange Programmes Across Districts',
      'Civic Engagement & Environmental Drives',
      'Youth Entrepreneurship & Micro-Venture Challenges',
    ],
  },

  volunteer: {
    heading: 'Be The Change',
    subHeading:
      'Young people can contribute their time, skills and expertise to create positive change.',
    banner: 'One Volunteer. One Student. One Transformation.',
    activities: [
      'Teaching & Mentoring Underprivileged Students',
      'Career Guidance & Academic Mentorship',
      'Conducting Community & Household Educational Surveys',
      'Rural Outreach & Village Camp Coordination',
      'Digital Awareness & Cyber Safety Training',
      'Event Management & Youth Conference Hosting',
      'Social Campaigns & Public Outreach Drives',
      'Youth Leadership & Peer Mentorship Activities',
    ],
  },

  approach: {
    framework: [
      'Identify',
      'Educate',
      'Counsel',
      'Skill',
      'Connect',
      'Empower',
      'Measure',
    ],
    metrics: [
      { label: 'Students Counselled', value: '14,200+', desc: 'Across schools and colleges' },
      { label: 'Admitted to Higher Education', value: '3,850+', desc: 'Secured college and university seats' },
      { label: 'Youth Trained', value: '9,400+', desc: 'In competitive and digital skills' },
      { label: 'Employment Opportunities', value: '2,150+', desc: 'Placed in public and private sectors' },
      { label: 'Entrepreneurs Supported', value: '420+', desc: 'Micro-enterprises and startups' },
      { label: 'Volunteers Engaged', value: '850+', desc: 'Active across Bengal districts' },
      { label: 'Villages Reached', value: '160+', desc: 'Grassroots panchayat outreach' },
    ],
  },

  partners: {
    heading: 'Together We Can Do More',
    subHeading: 'We welcome collaboration across sectors to maximize our youth impact throughout West Bengal.',
    partnerTypes: [
      'Schools',
      'Colleges',
      'Universities',
      'Government Institutions',
      'Corporates',
      'CSR Foundations',
      'NGOs',
      'Training Organisations',
      'Industry Experts',
      'Entrepreneurs',
      'Community Organisations',
    ],
  },

  donation: {
    heading: 'Your Contribution Can Change A Life',
    subHeading: 'Every rupee directly fuels free career camps, exam coaching, digital labs, and rural youth scholarships.',
    banner: 'Give Opportunity. Give Hope. Give a Future.',
    impactPoints: [
      'Sponsor Educational Programmes for low-income students',
      'Conduct Rural Career Camps in underserved blocks',
      'Provide Free Learning Resources, Books & Test Materials',
      'Organise Hands-On Skill Development Workshops',
      'Support Free Individual Career Counselling Sessions',
      'Train & Equip Youth Volunteers Across Districts',
      'Expand Digital Literacy Outreach into Remote Villages',
    ],
  },

  contact: {
    heading: 'Get In Touch',
    subHeading:
      'Have inquiries regarding student enrollment, rural career camps, institutional partnerships, or corporate CSR? Contact our desk today.',
    address: 'Behala, Kolkata - 700034, West Bengal, India',
    phone: '+91 79803 44722',
  },
};
