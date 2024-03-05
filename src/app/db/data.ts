export type FileType = 'pdf' | 'docx' | 'pptx' | 'tar.gz' | 'other'
export type DocumentType =
  | 'presentation'
  | 'report'
  | 'whitepaper'
  | 'paper'
  | 'dwm'
  | 'datasheet'
  | 'guide'
  | 'other'

export type reviewer = {
  first: string
  last: string
  profile?: string
  url?: string
}

export type DocumentStatus =
  | 'draft'
  | 'under review'
  | 'reviewed'
  | 'published no review'

export interface Document {
  manifest: DocumentManifest
  abstract: string
  file: FileType
  citation?: string
  doi?: string
}
export interface DocumentManifest {
  title: string
  authors: string[]
  topics: string[]
  dates: number[]
  references?: string[]
  code?: string[]
  type: DocumentType
  latest: number
  keywords: string[]
  status: DocumentStatus
  reviewers?: reviewer[]
}
export const documents: Readonly<{ [key: string]: Document }> = {
  'day-5-principles': {
    manifest: {
      title: 'Day 5: Principles of Mechanical Engineering',
      authors: ['shasan'],
      topics: ['frc', 'mech'],
      dates: [1707281608],
      type: 'presentation',
      latest: 1,
      keywords: [
        'torque and speed',
        'gear ratio',
        'rotational speed',
        'driven torque',
        'power',
      ],
      status: 'published no review',
    },
    file: 'pdf',
    doi: '10.5281/zenodo.10668880',
    abstract:
      'This guide to mechanical engineering covers gears and gear ratios, gear types, gear diagrams and measurements and sprockets and chains. It also introduces a discussion of power in the context of gears and mechanical engineering specific to FRC robotics.',
  },
  '2024-controls-programming-dwm': {
    manifest: {
      title: '2024 Controls/Programming DWM',
      authors: ['mbohsali', 'avenkatesh', 'ywu'],
      reviewers: [{ first: 'Matthew', last: 'Fletcher', profile: 'mfletcher' }],
      topics: ['eecs', 'frc'],
      dates: [1706080618],
      type: 'dwm',
      latest: 1,
      keywords: [
        'team 1280/identity and branding',
        'servo mount for lidar',
        'rgb gamer lights',
        'quick access apps',
        'fully documented code',
        'field oriented swerve',
        'rotating servo mount',
        'specific autonomous routine',
        'media player',
        'massive dejankification',
        'github projects',
        'dwm programming',
        'swerve controls',
        'lidar subsystem',
        'branding guidelines',
        'jankboard performance',
        'electrical underglow',
        'crescendo prototype',
        'jankboard',
        'limelight',
        'lidar',
      ],
      code: [
        'https://github.com/Team-1280/programming-dwm',
        'https://github.com/Team-1280/Swerve',
        'https://github.com/Team-1280/Jankboard',
        'https://github.com/Team-1280/identity',
      ],
      status: 'reviewed',
    },
    file: 'pdf',
    doi: '10.5281/zenodo.10672616',
    abstract:
      'This document outlines the first two weeks of prototyping conducted by the EECS subteam for Team 1280. Action items are presented in a doing/working/moving format to keep track of new developments related to EECS projects.',
  },
  'deepbozo-report': {
    manifest: {
      title: 'The DeepBozo Report',
      authors: ['ywu', 'avenkatesh'],
      keywords: [
        'feature description feasibility',
        'rog zephyrus',
        'pre planned path',
        'autonomous mode',
        'coral tpu',
        'allocative efficiency',
        'depth model',
        'driver station laptop',
        'suboptimal performance',
        'difficult to implement features',
        'teleoperated period',
        'intelligent path planning',
        'deepbozo analysis',
        'limelight',
        'large language model',
        'deepbozo subroutines',
        'occupancy network',
        'decision making',
        'autonomous mode',
        'planned features',
        'grunt work',
        'vision',
      ],
      topics: ['ai', 'frc', 'eecs'],
      dates: [1706513504],
      code: ['https://github.com/Team-1280/DeepBozo'],
      type: 'report',
      latest: 1,
      status: 'reviewed',
      reviewers: [{ first: 'Youwen', last: 'Wu', profile: 'ywu' }],
    },
    file: 'pdf',
    doi: '10.5281/zenodo.10677128',
    abstract:
      'DeepBozo is designed to incorporate various AI-enhanced driver assistance features and autonomous technologies. In order to meet our 1 month deadline for a prototype that’s ready to scrimmage and train with, Team 1280 EECS needs to conduct a thorough analysis of the goals and limitations of DeepBozo and its various subroutines. In this report, we explore the various possible capabilities of DeepBozo and the feasibility of each.',
  },
  'toughbook-expense-report': {
    manifest: {
      title: 'Toughbook Expense Report',
      authors: ['avenkatesh'],
      dates: [1697265104],
      keywords: [
        'programming team',
        'robotics team',
        'toughbook cost',
        'external fan array',
        'programming investments',
        'software modifications',
        'cooling system',
        'high performance',
        'opportunity cost',
        'hardware',
        'battery',
        'software',
        'damages',
        'overheating',
        'dogecoin',
        'power',
        'computer',
        'bloatware',
        'upgrade',
        'thinkpad',
        'windows',
        'distribution',
        'purchasing',
      ],
      type: 'report',
      topics: ['econ', 'frc', 'eecs'],
      latest: 1,
      status: 'reviewed',
      reviewers: [
        { first: 'Youwen', last: 'Wu', profile: 'ywu' },
        { first: 'Warren', last: 'Lin', profile: 'wlin' },
      ],
    },
    file: 'pdf',
    doi: '10.5281/zenodo.10677150',
    abstract:
      'The toughbook is a rugged, industrial computer intended for low-performance, scalable, and cheap computational operations. The robotics storage cabinet contained a Lenovo ThinkPad toughbook which was, at the time of its discovery, severely damaged, both internally (software) and externally (hardware). The programming team invested significant time, energy, resources, and capital into the revival of this storied piece of digital infrastructure, thus restoring the ThinkPad and, by extension, the robotics team, to its former glory.',
  },
  'lidar-whitepaper': {
    manifest: {
      title: 'The LiDAR Whitepaper',
      authors: ['ywu', 'avenkatesh'],
      dates: [1707129199, 1707215599],
      keywords: [
        'lidar',
        'programming team',
        'eecs',
        'whitepaper',
        'engineering',
        'design',
        'electrical',
        'mechanical',
        'cad',
        'project',
        'bozovision',
        'deepbozo',
        'bozoassist',
        'vision',
        'sensors',
        'sensing',
        'collision',
      ],
      type: 'whitepaper',
      topics: ['ai', 'frc', 'eecs'],
      latest: 2,
      status: 'under review',
    },
    file: 'pdf',
    doi: '10.5281/zenodo.10677158',
    abstract: `Approximately 1 month ago, the Team 1280 Electrical Engineering and Computer Science 
      Department (henceforth referred to as just EECS), an independent organ of the Team 1280 official
      organization which operates extrajudicially and without congressional oversight, requisitioned a
      LiDAR capable of generating a 3-D depth map of the area ahead in order to supplement and
      enhance the BozoVision subroutine with additional sensory input. However, a SNAFU (or deliberately 
      malicious incompetence) led to the acquisition of a 1-D LiDAR sensor manufactured by
      garmin. This LiDAR acts as a glorified uss rangefinder, and has a resolution of just 1cm. This
      LiDAR, out of the box, would not have been able to support anything approximating a depth
      map that met EECS’s stringent specifications and standards. `,
  },
  '2023-ee-training': {
    manifest: {
      title: `2023 Team 1280 Electrical Training`,
      authors: ['wlin'],
      dates: [1702377199],
      latest: 1,
      type: 'guide',
      topics: ['eecs', 'frc'],
      status: 'published no review',
      keywords: [
        'electrical',
        'electrical training',
        'training',
        'electrical book',
        'brain damage',
        'ee',
        'ee guide',
        'ee instruction',
        'instructions',
      ],
    },
    file: 'docx',
    doi: '10.5281/zenodo.10677178',
    abstract: `This is the Electrical Sub team Training. Firstly, we discuss the requirements and suggestions, we require everyone to bring your own device/Chromebook, we also require students to join GitHub and join the GitHub organization. We recommend students bring their own tools such as a precision screwdriver set and a multimeter should cover everything from basic repairs and learning to use these devices.
On Day 1 we will discuss the ins and outs of the robot. The Electrical Sub team in FRC is the cauldron between the Mechanical moving parts of CAD and the witchcraft that is programming. We will be talking about the serial busses used in the robot and basic Electrical knowledge needed to do basic repairs on daily items. On Day 2 we will discuss wiring the robot and prototyping (for people who want to do more).
`,
  },
  'eexiv-white-paper': {
    manifest: {
      title: 'eeXiv Whitepaper',
      authors: ['avenkatesh', 'ywu'],
      topics: ['eecs', 'frc'],
      dates: [1707811359, 1707891311, 1709406373],
      type: 'whitepaper',
      latest: 3,
      status: 'published no review',
      keywords: [
        'eexiv',
        'whitepaper',
        'paper repository',
        'arxiv',
        'proposal',
        '1280',
        'eecs',
        'teachers',
        'stipends',
      ],
      code: [
        'https://github.com/team-1280/eexiv',
        'https://github.com/team-1280/eexiv-2',
        'https://github.com/couscousdude/eexiv-2',
      ],
    },
    file: 'pdf',
    doi: '10.5281/zenodo.10668656',
    abstract: `In this paper, we present eeXiv, an open-source, open-access project hosted by Team
    1280 EECS ("Electrical Engineering and Computer Science"), independent of the department of
    the same name at UC Berkeley. We aim to rival arXiv as the single largest open-source and
    open-access research paper repository and as the largest research paper repository on the West
    Coast, transforming San Ramon Valley High School into a tier-1 research institution. Similar to
    arXiv, we host electronic preprints and postprints (known as e-prints) approved for posting
    after a rigorous peer review process. Our repository consists of scientific papers in the
    fields of mathematics, physics, astronomy, electrical engineering, computer science,
    quantitative biology, statistics, mathematical finance, and economics, with a focus on papers
    specific to the FIRST Robotics Competition. eeXiv bypasses the traditional bureaucracy of
    research publication, which involves lengthy peer review processes and journal approval, by
    enabling "libre" and "open" publication, dissemination, and consumption of research artifacts.`,
  },
  'moscow-to-kabul': {
    manifest: {
      title: 'Moscow to Kabul',
      authors: ['slevel'],
      type: 'report',
      topics: ['polisci'],
      dates: [1684911599],
      status: 'published no review',
      keywords: [
        'soviet military intervention in afghanistan roots & causes',
        'afghan archive dramatic politburo meeting',
        'milton park asian affairs an american review',
        'uzbeks try to live the way russians do',
        'decline of soviet military strategy and political status',
        'afghanistan war and breakdown of the soviet union',
        'park the journal of slavic military studies 1999',
        'soviet union and afghan communists',
        'prelude to invasion',
        'new york the new york times',
        'cambridge review of international studies',
        'geopolitics of the afghan war',
        'digital center for european studies',
        'reform in post communist europe',
        'afghan communists 1978 1979',
        'democratic republic of afghanistan',
        'red army',
        'soviet union',
        'soviet afghan',
        'invasion of afghanistan',
        'withdrawal from afghanistan',
        'soviet forces',
        'central asia',
      ],
      latest: 1,
    },
    file: 'pdf',
    doi: '10.5281/zenodo.10677190',
    abstract: `Although ethnic nationalism and democratization contributed greatly to the downfall of
    the Soviet Union, the primary catalyst of Soviet collapse was the Soviet-Afghan War. The
    conflict exacerbated existing ethnic and cultural divides in the hinterlands of the Soviet empire,
    and the dramatic Russian loss broadcasted the fact that the Red Army was not invincible to
    foreign powers and internal dissidents alike, emboldening the first breakaway republics and
    enabling the eventual dissolution of the Soviet Union. To understand the Soviet-Afghan war—its
    causes and its effects—is to understand the collapse of the world’s largest superpower.`,
  },
  'free-adversarial-robustness': {
    manifest: {
      title:
        'One Less Reason for Filter-Pruning: Gaining Free Adversarial Robustness with Structured Grouped Kernel Pruning',
      authors: [
        'zleclaire',
        'szhong',
        'zyou',
        'jzhang',
        'szhao',
        'zliu',
        'dzha',
        'vchaudhary',
        'sxu',
        'xhu',
      ],
      type: 'paper',
      topics: ['eecs', 'ai'],
      dates: [1695279600],
      reviewers: [{ first: 'NeurIPS 2023 Conference', last: 'Area Chair' }],
      status: 'reviewed',
      keywords: [
        'conference on computer vision and pattern recognition cvpr',
        'model checkpoint performance',
        'model performance',
        'baseline model',
        'cost smoothness balancer',
        'densely structured pruning methods',
        'absence of dimensionality',
        'method criterion',
        'snaking greedy best benign',
        'adversarial robustness boosting kernel',
        'cifar 10',
        'distance based cost',
        'computer vision foundation',
        'study of cost smoothness',
        'adversarial attacks',
      ],
      latest: 1,
    },
    file: 'pdf',
    doi: '10.5281/zenodo.10677218',
    abstract: `Densely structured pruning methods utilizing simple pruning heuristics are
    capable of delivering immediate compression and acceleration benefits with
    acceptable benign performances. However, empirical findings indicate such
    naively pruned networks are extremely fragile under simple adversarial attacks.
    Naturally, we would be interested in knowing if such phenomenon also hold true
    to carefully designed modern structured pruning methods. If so, then to what
    extent the severity? And what kind of remedies are available? Unfortunately,
    both the questions and the solution remain largely unaddressed: no prior art
    is able to provide a thorough investigation on the adversarial performance of
    modern structured pruning methods (spoiler: it is not good), yet the few works
    that attempt to provide mitigation often done so at various extra costs with only
    to-be-desired performance. In this work, we answer both questions by fairly
    and comprehensively investigate the adversarial performance of 10+ popular
    structured pruning methods. Solution-wise, we take advantage of Grouped Kernel
    Pruning (GKP)’s recent success in pushing densely structured pruning freedom
    to a more fine-grained level. By mixing up kernel smoothness — a classic
    robustness-related kernel-level metric — into a modified GKP procedure, we
    hereby present an one-shot-post-train-data-free GKP method capable of advancing
    SOTA performance on both benign and adversarial scale, while requiring no extra
    (in fact, often less) cost than a standard pruning procedure.`,
  },
}

export interface Topic {
  name: string
  description: string
  wiki: string
}
export const topics: Readonly<{ [key: string]: Topic }> = {
  frc: {
    name: 'FIRST Robotics Competition',
    description:
      'FRC is an international robotics competition that was founded by FIRST in 1983 and is currently one of the largest professional robotics competitions in the world.',
    wiki: 'https://en.wikipedia.org/wiki/FIRST_Robotics_Competition',
  },
  mech: {
    name: 'Mechanical Engineering',
    description:
      'Mechanical engineering is a branch of engineering that involves the design, development, and use of machines, mechanisms, and other devices.',
    wiki: 'https://en.wikipedia.org/wiki/Mechanical_engineering',
  },
  eecs: {
    name: 'Electrical Engineering and Computer Science',
    description:
      'Electrical engineering and computer science are fields that combine engineering, science, and computing. The acronym EECS is derived from their world-renowned electrical engineering and computer science program at the University of California, Berkeley.',
    wiki: 'https://en.wikipedia.org/wiki/Computer_science_and_engineering',
  },
  ai: {
    name: 'Artificial Intelligence',
    description:
      'Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.',
    wiki: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  },
  econ: {
    name: 'Economics',
    description:
      'Economics is the study of the production, distribution, consumption, and trade of goods and services. Economics is classified as a social science, but it is inherently related to mathematical and political disciplines as well.',
    wiki: 'https://en.wikipedia.org/wiki/Economics',
  },
  polisci: {
    name: 'Political Science',
    description:
      'Political science is the study of politics. It is a broad field, encompassing all aspects of government, politics, and international relations.',
    wiki: 'https://en.wikipedia.org/wiki/Political_science',
  },
}

/* 
Authors data format:
authorName (as a slug): {
  name: {
    first: first name
    last: last name
    optional nickname: nickname
  }

  affiliation: an array of affiliation "slugs". this should correspond to affiliations in the affiliations data.
  The first affiliation will be considered the primary affiliation

  image: image url, can store in public/eexiv/img/profiles or link to a web resource

  nationality: an array of ISO 3 letter country codes corresponding to your nationalities

  formerAffiliations: an array of former affiliation "slugs." they should also correspond to affiliations 
  in the affiliations data
  
  bio: biography string

  website: website url
}
*/
export interface Author {
  name: {
    first: string
    last: string
    nickname?: string
  }
  affiliation: string[]
  image: string
  nationality: string[]
  formerAffiliations?: string[]
  bio?: string
  website?: string
}
export const authors: Readonly<{ [key: string]: Author }> = {
  shasan: {
    name: {
      first: 'Saim',
      last: 'Hasan',
    },
    affiliation: ['Undergraduate@usc-viterbi'],
    formerAffiliations: ['Lead Mechanical Engineer@1280-mech', 'Student@srvhs'],
    image: '/img/profiles/shasan.jpg',
    nationality: ['pak', 'usa'],
    website: 'https://www.linkedin.com/in/saimhasan/',
  },
  mbohsali: {
    name: {
      first: 'Majd',
      last: 'Bohsali',
    },
    affiliation: ['Lead Programming Engineer@1280-eecs', 'Student@srvhs'],
    image: '/img/profiles/mbohsali.jpg',
    nationality: ['lbn', 'usa'],
  },
  avenkatesh: {
    name: {
      first: 'Ananth',
      last: 'Venkatesh',
    },
    affiliation: ['Lead Controls Engineer@1280-eecs'],
    formerAffiliations: ['Programming Lead@1280-programming'],
    image: '/img/profiles/avenkatesh.png',
    nationality: ['ind', 'eth', 'usa'],
    bio: 'King of jank. Hacker in JS, TS, R, and Python. Capitalist innovator. EECS creator. eeXiv co-founder.',
    website: 'https://github.com/quantum9Innovation',
  },
  ywu: {
    name: {
      first: 'Youwen',
      last: 'Wu',
    },
    affiliation: ['Artificial Intelligence Lead@1280-eecs'],
    image: '/img/profiles/ywu.webp',
    nationality: ['chn'],
    bio: 'The kingpin of jank. Never before has so much jank been so distilled in one place.',
    website: 'https://github.com/couscousdude',
  },
  wlin: {
    name: {
      first: 'Warren',
      last: 'Lin',
      nickname: 'Ren',
    },
    affiliation: [
      'Electrical Engineer@1280-eecs',
      'General Affairs@1280-business',
      'Student@srvhs',
    ],
    image: '/img/profiles/wlin.jpg',
    nationality: ['twn', 'usa'],
    formerAffiliations: ['Intern@raid-zero'],
    bio: 'Hi, I am Kaito or Warren. I am a Self-taught programmer and engineer. I go around doing dumb things such as my projects. I have a dream of building a community. I am currently part of many projects.',
    website: 'https://kaitotlex.carrd.co/',
  },
  gostler: {
    name: {
      first: 'Gavin',
      last: 'Ostler',
    },
    affiliation: ['Vision Researcher@1280-eecs', 'Student@srvhs'],
    image: '/img/profiles/gostler.jpg',
    nationality: ['fra', 'usa'],
    website: 'https://github.com/gavinostler',
    bio: `I'm Gavin, a high school student from the Bay Area. I am a fullstack developer and love making random things to fill my day. I'm interested in creating useful tools and software in the future.`,
  },
  edanko: {
    name: {
      first: 'Elliot',
      last: 'Danko',
    },
    affiliation: [
      'Undergraduate in Mechanical Engineering@cal-poly-slo',
      'Member@cpss',
      'Mentor@team-1280',
    ],
    formerAffiliations: ['Captain@team-1280', 'Student@srvhs'],
    nationality: ['irl', 'usa'],
    image: '/img/profiles/edanko.jpg',
  },
  arvenkatesh: {
    name: {
      first: 'Arvind',
      last: 'Venkatesh',
    },
    affiliation: ['Intern@1280-eecs', 'Rookie@team-1280', 'Student@srvhs'],
    nationality: ['ind', 'eth', 'usa'],
    image: '/img/profiles/arvenkatesh.png',
    website: 'https://github.com/Quantalabs',
  },
  mfletcher: {
    name: {
      first: 'Matthew',
      last: 'Fletcher',
    },
    affiliation: ['Captain@team-1280', 'Student@srvhs'],
    nationality: ['usa'],
    image: '/img/profiles/mfletcher.jpg',
  },
  vkorneev: {
    name: {
      first: 'Vladislav',
      last: 'Korneev',
      nickname: 'Vlad',
    },
    affiliation: ['Undergraduate@gu'],
    formerAffiliations: ['Business Lead@1280-business'],
    nationality: ['rus'],
    image: '/img/profiles/vkorneev.jpg',
    website: 'https://www.linkedin.com/in/vladislav-korneev-0573a71b1/',
    bio: `Highly suspect. Responsible for our close relationship with the international military-industrial complex. Tactical genius. Geopolitical strategist. Business tycoon.`,
  },
  nluo: {
    name: {
      first: 'Nicholas',
      last: 'Luo',
    },
    affiliation: ['Software Engineer@1280-eecs', 'Student@srvhs'],
    nationality: ['chn', 'usa'],
    image: '/img/profiles/nluo.png',
    website: 'https://github.com/Nluo923',
  },
  jchan: {
    name: {
      first: 'Jason',
      last: 'Chan',
    },
    affiliation: [
      'Chief Executive Officer@fia',
      'Intern@1280-eecs',
      'Student@srvhs',
    ],
    nationality: ['jpn', 'chn', 'usa'],
    image: '/img/profiles/jchan.jpg',
    website: 'https://futureinspireacademy.com',
    bio: 'Programming is great... Three years Unity game development C#, Html, Css, Js, Java, Go, C++, Python, Dart, Json, Xml, Binary',
  },
  cbordalo: {
    name: {
      first: 'Christian',
      last: 'Bordalo',
      nickname: 'CB12',
    },
    affiliation: ['Wage Slave@primos', 'Student@srvhs'],
    nationality: ['phl', 'usa'],
    image: '/img/profiles/cbordalo.jpg',
  },
  bgraham: {
    name: {
      first: 'Benjamin',
      last: 'Graham',
    },
    affiliation: ['Student@srvhs'],
    image: '/img/profiles/bgraham.jpg',
    nationality: ['usa'],
    website: 'https://www.linkedin.com/in/benjamin-graham-967a1b26b',
    bio: 'Unrelated to Ben Garrison. Maintains a Signal profile. Most likely to become President of the United States.',
  },
  achawla: {
    name: {
      first: 'Ayaan',
      last: 'Chawla',
      nickname: 'Chowler',
    },
    affiliation: ['Student@srvhs'],
    image: '/img/profiles/achawla.jpg',
    nationality: ['ind', 'usa'],
    website: 'https://www.instagram.com/ayaan_c_07/?hl=en',
    bio: 'President of the Helping Hands Club. EC farmer. Business magnate. Visionary.',
  },
  slevel: {
    name: {
      first: 'Spencer',
      last: 'Level',
    },
    affiliation: ['Technical intern @sandia-labs', 'Undergraduate@ucsb'],
    formerAffiliations: [
      'Captain @team-1280',
      'Programming lead @1280-programming',
    ],
    image: '/img/profiles/slevel.jpg',
    nationality: ['usa'],
    website: 'https://www.linkedin.com/in/spencer-level/',
    bio: 'Actively engaged in the international arms trade; part-time defense contractor and part-time UCSB student working to secure greater rights for defense corporations.',
  },
  zleclaire: {
    name: {
      first: 'Zach',
      last: 'LeClaire',
    },
    affiliation: ['Undergraduate @cwru'],
    formerAffiliations: ['Programming lead @1280-programming'],
    image: '/img/profiles/zleclaire.jpg',
    website: 'https://www.linkedin.com/in/zachary-leclaire-18b69b162/',
    bio: 'Team programming legend; Zach is to Team 1280 programming what Ben is to electrical.',
    nationality: ['fra', 'usa'],
  },
  szhong: {
    name: {
      first: 'Shaochen',
      last: 'Zhong',
      nickname: 'Henry',
    },
    affiliation: ['PhD student @rice'],
    formerAffiliations: ['Undergraduate @cwru'],
    image: '/img/profiles/szhong.jpg',
    nationality: ['usa', 'unknown'],
    website: 'https://www.linkedin.com/in/shaochen-henry-zhong-96a941249/',
  },
  zyou: {
    name: {
      first: 'Zaichuan',
      last: 'You',
    },
    affiliation: ["Master's degree holder @nyu"],
    formerAffiliations: ['Undergraduate @cwru'],
    image: '/img/profiles/zyou.jpg',
    nationality: ['chn', 'usa'],
    website: 'https://www.linkedin.com/in/zaichuanyou/',
  },
  jzhang: {
    name: {
      first: 'Jiamu',
      last: 'Zhang',
    },
    affiliation: ['Undergraduate @cwru'],
    image: '/img/profiles/jzhang.jpg',
    nationality: ['chn', 'usa'],
    website: 'https://www.linkedin.com/in/jiamu-zhang-morris/',
  },
  szhao: {
    name: {
      first: 'Sebastian',
      last: 'Zhao',
    },
    affiliation: ['ML research intern @berkeley-eecs'],
    formerAffiliations: [
      'Part-time ML research intern @cwru',
      'Undergraduate @berkeley-eecs',
    ],
    image: '/img/profiles/szhao.jpg',
    nationality: ['usa', 'unknown'],
    website: 'https://www.linkedin.com/in/sebbyzhao/',
  },
  zliu: {
    name: {
      first: 'Zirui',
      last: 'Liu',
    },
    affiliation: ['PhD student @rice'],
    image: '/img/profiles/zliu.jpg',
    nationality: ['chn', 'usa'],
    website: 'https://scholar.google.com/citations?user=0i1w_egAAAAJ&hl=zh-CN',
  },
  dzha: {
    name: {
      first: 'Daochen',
      last: 'Zha',
    },
    affiliation: ['ML engineer @airbnb'],
    formerAffiliations: ['PhD student @rice'],
    image: '/img/profiles/dzha.jpg',
    nationality: ['chn', 'usa'],
    website: 'https://www.linkedin.com/in/daochen-zha/',
  },
  vchaudhary: {
    name: {
      first: 'Vipin',
      last: 'Chaudhary',
    },
    affiliation: ['CS dept chair @cwru'],
    formerAffiliations: [
      'PhD student @ut-austin',
      'Undergraduate @iit-kharagpur',
    ],
    image: '/img/profiles/vchaudhary.jpg',
    nationality: ['ind', 'usa'],
    website:
      'https://engineering.case.edu/about/school-directory/vipin-chaudhary',
  },
  sxu: {
    name: {
      first: 'Shuai',
      last: 'Xu',
    },
    affiliation: ['Assistant Professor @cwru'],
    image: '/img/profiles/sxu.jpg',
    nationality: ['chn', 'usa'],
    website: 'https://engineering.case.edu/about/school-directory/shuai-xu',
  },
  xhu: {
    name: {
      first: 'Xia',
      last: 'Hu',
      nickname: 'Ben',
    },
    affiliation: ['Associate Professor of CS@rice'],
    image: '/img/profiles/xhu.jpg',
    nationality: ['sgp', 'usa'],
    website: 'https://cs.rice.edu/~xh37/index.html',
  },
  rgawde: {
    name: {
      first: 'Rohan',
      last: 'Gawde',
    },
    affiliation: ['CAD Lead@1280-mech'],
    image: '/img/profiles/rgawde.jpg',
    nationality: ['ind', 'usa'],
    bio: `I am Rohan, a Mechanical Engineering student from India. I am passionate about designing and developing robots. I love to learn new things. I am currently a CAD Lead at Team 1280.`,
  },
}

export interface Affiliation {
  name: string
  short: string
  image: string
  description: string
}

export const affiliations: Readonly<{ [key: string]: Affiliation }> = {
  '1280-mech': {
    name: "Team 1280, the Ragin' C-Biscuits, Mechanical Subteam",
    short: '1280 Mech',
    image: '/img/logos/1280-main.png',
    description: `The mechanical subteam is the backbone of Team 1280, focusing on the physical design, construction, and mechanical integrity of their robots. This subteam is where concepts and designs become tangible, transforming ideas into the moving parts and structural components that give the robots their form and function. The Mechanical subteam's work encompasses a broad range of activities, from drafting initial sketches and CAD modeling to machining parts and assembling complex mechanical systems.
[linebreak]
Members of the Mechanical subteam are adept in applying principles of mechanical engineering to solve practical problems, ensuring that the robot is not only capable of performing the tasks required by the competition but is also robust, efficient, and adaptable to the dynamic environment of a FIRST Robotics match. They work closely with materials, tools, and manufacturing processes, gaining hands-on experience in fabrication techniques such as welding, 3D printing, and CNC machining.
[linebreak]
Collaboration is key within the Mechanical subteam, as its members must coordinate closely with the EECS subteam to integrate mechanical and electrical components seamlessly. This interdisciplinary approach ensures that the robot's design is holistic, with each system working harmoniously to achieve optimal performance.
[linebreak]
The Mechanical subteam fosters a culture of creativity, innovation, and excellence, encouraging its members to push the boundaries of what is possible. Through their participation in the FIRST Robotics Competition, students develop not only technical skills in mechanical design and engineering but also soft skills such as teamwork, problem-solving, and project management. With access to advanced tools and guided by mentors from various engineering fields, the Mechanical subteam of Team 1280 is a place where future mechanical engineers are nurtured, ready to make their mark in the world of robotics and beyond.`,
  },
  '1280-eecs': {
    name: "Team 1280, the Ragin' C-Biscuits, Electrical Engineering and Computer Science Subteam",
    short: '1280 EECS',
    image: '/img/logos/eecs-wordmark.png',
    description: `The Team 1280 EECS (Electrical Engineering and Computer Science) subteam is an autonomous organization within Team 1280, specializing in the design, programming, and electrical systems that bring their robots to life. As the nerve center of Team 1280, the EECS subteam combines the disciplines of electrical engineering and computer science to develop sophisticated control systems, autonomous functionalities, and robust electrical infrastructures that enable their robots to perform complex tasks and maneuvers in the competitive arena.
[linebreak]
Team 1280 EECS is composed of highly skilled and passionate students who are keen on applying theoretical knowledge to practical challenges. They are responsible for everything from circuit design and sensor integration to software development and debugging, ensuring that the robot can effectively communicate, navigate, and interact with its environment.
[linebreak]
Team 1280 EECS benefits from mentorship by experienced professionals and alumni, access to state-of-the-art tools and technologies, and a culture that encourages creativity, experimentation, and continuous improvement. As a result, the EECS subteam plays a crucial role in driving Team 1280's success in competitions and inspiring the next generation of engineers and computer scientists.`,
  },
  '1280-programming': {
    name: "Team 1280, the Ragin' C-Biscuits, Programming Subteam",
    short: '1280 Programming',
    image: '/img/logos/1280-main.png',
    description: `The former programming subteam of Team 1280, which combined with the Team 1280 electrical subteam in a historic merger to form Team 1280 EECS.`,
  },
  'usc-viterbi': {
    name: 'University of Southern California, Viterbi School of Engineering',
    short: 'USC Viterbi',
    image: '/img/logos/usc-viterbi.jpg',
    description: `The University of Southern California (USC) Viterbi School of
          Engineering is a cornerstone of innovation and excellence in the
          engineering field. Established in 1905, it has grown into a leading
          institution recognized globally for its pioneering research,
          distinguished faculty, and diverse, talented student body.
          [linebreak]
          Named after Andrew J. Viterbi, co-founder of Qualcomm Inc. and
          inventor of the Viterbi Algorithm, the school underscores its
          commitment to advancing technology for societal benefits. USC Viterbi
          offers a wide range of undergraduate, graduate, and doctoral programs
          covering various engineering disciplines, including aerospace,
          biomedical, chemical, civil, computer science, electrical, and
          environmental engineering, among others. It is renowned for its
          cutting-edge research in areas such as artificial intelligence,
          cybersecurity, energy sustainability, and health systems.
          [linebreak]
          Located in Los Angeles, California, USC Viterbi benefits from its
          proximity to leading tech companies, providing ample opportunities for
          internships, collaborations, and employment for its graduates. With
          its strong emphasis on innovation, entrepreneurship, and global
          impact, USC Viterbi continues to shape the future of engineering,
          making significant contributions to both the academic community and
          the wider world.`,
  },
  '1280-business': {
    name: "Team 1280, the Ragin' C-Biscuits, Business Subteam",
    short: '1280 Business',
    image: '/img/logos/1280-main.png',
    description: `The Business subteam of Team 1280 plays a crucial role in ensuring the team's operational success and sustainability. Unlike the engineering-focused subteams, the Business subteam focuses on the financial, organizational, and community aspects of the team's operations. They are responsible for fundraising, sponsorship outreach, budget management, and public relations, ensuring that the team has the necessary resources and support to thrive in their endeavors.
[linebreak]
Members of the Business subteam develop and execute strategies to engage with corporate sponsors, local businesses, and individual donors, crafting compelling sponsorship proposals and maintaining ongoing relationships with stakeholders. They also manage the team's finances, meticulously planning and tracking expenditures to ensure that resources are allocated efficiently and effectively.
[linebreak]
In addition to financial management, the Business subteam plays a key role in promoting Team 1280's achievements and activities. They handle all aspects of communication, from social media management and website content to press releases and community outreach events. Their efforts not only raise the team's profile but also foster a positive image of STEM education and robotics within the broader community.
[linebreak]
Through their work, the Business subteam members gain valuable experience in business administration, marketing, and communication, skills that are highly transferable and beneficial in any career path. They learn the importance of leadership, teamwork, and strategic planning, all while contributing to the success of Team 1280 in a meaningful way.
[linebreak]
By bridging the gap between engineering innovation and business acumen, the Business subteam ensures that Team 1280 is not only competitive in robotics challenges but also sustainable and impactful in its mission to inspire and educate future generations in STEM fields.`,
  },
  'raid-zero': {
    name: 'Team 4253, Raid Zero',
    short: 'Raid Zero',
    image: '/img/logos/raid-zero.png',
    description: `Team 4253, Raid Zero, hailing from Taipei American School in Taipei, Taipei Special Municipality, Chinese Taipei, has been a formidable presence in the world of robotics since its rookie year in 2012. As a participant in the international FIRST Robotics Competition, Raid Zero exemplifies innovation, teamwork, and the pursuit of excellence in science, technology, engineering, and mathematics (STEM).
[linebreak]
Since its inception, Raid Zero has dedicated itself to designing, building, and programming competitive robots that can perform complex tasks and compete at high levels. The team's journey through the FIRST Robotics Competition has been marked by continuous learning, adaptation, and growth, reflecting their commitment to not only compete but also to embody the ideals of gracious professionalism and cooperation.
[linebreak]
Beyond the technical skills gained through robotics design and competition, Team 4253 is deeply committed to spreading the excitement and appreciation for STEM within their local community and beyond. Through outreach programs, workshops, and participation in events, Raid Zero aims to inspire younger students and peers, encouraging them to explore their interests in technology and engineering.
[linebreak]
Operating within the vibrant educational environment of Taipei American School, Team 4253 benefits from a supportive network of mentors, educators, and alumni who provide guidance and support. This nurturing ecosystem fosters creativity, critical thinking, and problem-solving skills among team members, preparing them for future challenges and opportunities in STEM fields.
[linebreak]
Raid Zero's influence extends beyond the technical achievements in robotics competitions. The team's efforts to promote STEM education, engage with the community, and develop sustainable practices demonstrate a holistic approach to their mission. As Team 4253 continues to evolve and impact the world of robotics and STEM education, Raid Zero remains a beacon of innovation and inspiration for students and enthusiasts around the globe.`,
  },
  srvhs: {
    name: 'San Ramon Valley High School',
    short: 'SRVHS',
    image: '/img/logos/srvhs.jpg',
    description: `A relatively average high school located in Danville, California. It has no standout features besides being the base of operations for Team 1280 and Team 1280 EECS.`,
  },
  'cal-poly-slo': {
    name: 'California Polytechnic State University, San Luis Obispo',
    short: 'Cal Poly SLO',
    image: '/img/logos/cal-poly-slo.png',
    description: `California Polytechnic State University, San Luis Obispo (Cal Poly SLO) is renowned for its learn-by-doing philosophy that stands at the core of its engineering education. Founded in 1901, Cal Poly SLO's College of Engineering is recognized as one of the premier engineering schools in the nation, offering a hands-on approach to education that prepares students for the practical challenges they will face in the workforce.
                  [linebreak]
                  With a wide array of undergraduate and graduate programs, the College of Engineering at Cal Poly SLO covers disciplines such as aerospace, biomedical, civil and environmental, computer science and software engineering, electrical, industrial and manufacturing, and mechanical engineering, among others. This diversity ensures that students can find their niche and develop specialized skills in their chosen field.
                  [linebreak]
                  Cal Poly SLO prides itself on its state-of-the-art laboratories and facilities, which allow students to engage directly with the material they are learning. This hands-on experience is supplemented by a curriculum that encourages interdisciplinary collaboration, critical thinking, and problem-solving skills, ensuring that graduates are well-equipped to contribute to their fields effectively.
                  [linebreak]
                  The university's location in San Luis Obispo, a hub of technological innovation and natural beauty, offers students unique opportunities for internships, cooperative education, and employment with leading engineering firms and tech companies. Cal Poly SLO maintains strong connections with industry partners, enhancing the practical and relevant education that students receive.
                  [linebreak]
                  Beyond academics, Cal Poly SLO's College of Engineering is committed to fostering a diverse, inclusive community where all students can thrive. Through clubs, organizations, and leadership opportunities, students can engage with the community, develop soft skills, and prepare for leadership roles in their future careers.
                  [linebreak]
                  With its blend of rigorous academics, practical experience, and a supportive community, Cal Poly SLO stands out as a leader in engineering education, preparing the next generation of engineers to face global challenges with innovation and expertise.`,
  },
  'team-1280': {
    name: `Team 1280, the Ragin' C-Biscuits`,
    short: 'Team 1280',
    image: '/img/logos/1280-main.png',
    description: `We are the San Ramon Valley High School Robotics Team (FRC Team 1280) and we have been competing in the FIRST Robotics Challenge for 16 years. With just 6 weeks to design, build, program, and fundraise for a robot, FRC teaches us teamwork, business, engineering, machinery, and computer design. We are a team of over 50 students with 1 full time mentor, 2 part time mentors, and 1 staff liaison.
      [linebreak]
      Throughout our FRC career, we have won several regional events and numerous awards including: the Rookie Inspiration Award, both the Radio Shack and Rockwell Automation Innovation in Control Awards, the Imagery Award, the Engineering Excellence Award, and the Creativity Award. While we do focus on the competitive aspect of robotics, we also strive to spread the knowledge of STEM through our outreach programs to those who might not otherwise have access to these opportunities.
      [linebreak]
      We have impacted over 21,000 K-12 students alone through our assemblies and workshops.`,
  },
  cpss: {
    name: `California Polytechnic University, San Luis Obispo, Space Systems`,
    short: 'CPSS',
    image: '/img/logos/cal-poly-space-systems.jpg',
    description: `Cal Poly Space Systems (CPSS) is a dynamic club originally conceived as an Aerospace Engineering club, CPSS now welcomes students and volunteers from all majors, colleges and backgrounds. As our projects grow more complex and sophisticated, we continue to expand our pool of resources in order to design, build, launch and test to our limits. CPSS embraces Cal Poly’s “Learn by Doing” philosophy, and offers hands-on training in all areas of rocketry design including propulsion, structures, controls, and electronics. Members become familiar with how rockets work, how to build them, and use that knowledge to create more advanced club projects. `,
  },
  gu: {
    name: 'Gonzaga University',
    short: 'GU',
    image: '/img/logos/gonzaga-university.jpg',
    description: `Gonzaga University, nestled in the heart of Spokane, Washington, offers a distinctive engineering education that combines rigorous academics with a strong foundation in Jesuit values. The School of Engineering and Applied Science (SEAS) at Gonzaga is dedicated to developing innovative leaders who are committed to serving others and addressing global challenges through the lens of social justice and ethical responsibility.
      [linebreak]
      Established in 1934, SEAS provides a comprehensive education across various engineering disciplines, including civil, electrical, mechanical, computer science, and engineering management. The school emphasizes a holistic approach to engineering education, where students not only gain technical proficiency but also develop critical thinking, communication, and leadership skills.
      [linebreak]
      Gonzaga's engineering programs are characterized by small class sizes, which foster a close-knit community and individualized attention from faculty. This personalized approach ensures that students are not only seen as future engineers but as whole persons with unique talents and aspirations. The curriculum is designed to offer hands-on learning experiences from the very beginning, with students engaging in laboratory work, design projects, and research opportunities that apply classroom theory to real-world problems.
      [linebreak]
      A key feature of the Gonzaga engineering experience is the senior design project, which challenges students to work in teams to develop solutions for actual engineering problems, often in partnership with local industries, nonprofit organizations, and community groups. This capstone experience encapsulates the Gonzaga ethos of service and innovation, preparing students for the ethical and practical challenges they will face in their professional lives.
      [linebreak]
      Beyond academics, Gonzaga SEAS encourages students to engage with the world around them, offering study abroad programs, service-learning projects, and community engagement initiatives that enrich their educational experience. The school's location in Spokane provides ample opportunities for internships and collaborations with leading engineering firms and tech companies, enhancing students' readiness for the job market.
      [linebreak]
      Gonzaga University's School of Engineering and Applied Science stands out for its commitment to excellence, ethics, and the holistic development of its students. Graduates leave Gonzaga not only as skilled engineers but as compassionate leaders ready to make meaningful contributions to society.`,
  },
  fia: {
    name: 'Future Inspire Academy',
    short: 'FIA',
    image: '/img/logos/fia.jpg',
    description: `
      Future Inspire Academy (FIA) is a non-profit organization that strives to teach students how to apply their coding skills to game development in a fun and efficient way. Our mission is to create a platform to reward members who start their game development journey early. We give members all the resources to learn quickly and reward their efforts with points which can be used to upgrade their game jam prizes. Become a member today and reap all the benefits by joining our Discord Server!
      [linebreak]
      Our organization not only impacts our members from around the world but also our partners as we help promote their business and improve their products. Our new vision has been to help develop companies that would contribute to the future of game development and promote accessibility. Recently, we launched exclusive early access to Rosebud’s game maker platform for all of our members to try. In the future, we plan to host more exclusive events that revolve around our partners. 
    `,
  },
  primos: {
    name: `Primo's Pizzeria & Pub`,
    short: 'Primos',
    image: '/img/logos/primos.png',
    description: `
    Welcoming, family-run restaurant pairs straightforward pizzas, pasta & sandwiches with beers on tap.
    [linebreak]
      Service options: Serves happy hour food · Serves vegetarian dishes · Good for watching sports
      [linebreak]
      Address: 298 Hartz Ave, Danville, CA 94526
      [linebreak]
      Phone: (925) 838-8214`,
  },
  ucsb: {
    name: 'University of California, Santa Barbara',
    short: 'UCSB',
    image: '/img/logos/ucsb.png',
    description: `University of California, Santa Barbara is a top ranked university in Santa Barbara, California. Established in 1901, it is one of the top 100 universities in California.
    [linebreak]
    Welcome to UC Santa Barbara, where the land meets the sea, where brilliant minds meet each other, and where academic excellence and social engagement unite to spark creativity and discovery.
    `,
  },
  'sandia-labs': {
    name: 'Sandia National Laboratories',
    short: 'Sandia Labs',
    image: '/img/logos/sandia-labs.jpg',
    description: `Sandia National Laboratories is the nation’s premier DOE science and engineering lab for national security and technology innovation. Our team of scientists, engineers, researchers, and business specialists apply their knowledge and skill toward delivering cutting-edge technology in an array of areas. 
    [linebreak]
    Across our main sites in Albuquerque, NM, and Livermore, CA, our research ranges from nuclear defense and homeland and global security to innovative work in biotechnology, environmental preservation, energy, and cyber security. 
    [linebreak]
    Our teams have shared some of the reasons they enjoy working at Sandia (among them the fact that much of our funding is derived from IDF offshore investments):  
    [linebreak]
    [linebreak]
    [linebreak]
    • Challenging work with amazing impact that contributes to security, peace, and freedom worldwide
    [linebreak]
    • Extraordinary co-workers
    [linebreak]
    • Access to some of the best tools, equipment, and research facilities in the world (tours.sandia.gov)
    [linebreak]
    • Career advancement and enrichment opportunities
    [linebreak]
    • Work-life balance with flexible work schedules, competitive benefits, and convenient on-site amenities`,
  },
  cwru: {
    name: 'Case Western Reserve University',
    short: 'CWRU',
    image: '/img/logos/cwru.png',
    description: `At Case Western Reserve University, we're a community of innovators, knowledge-seekers and groundbreakers. As a leading national research university located in the nation's #1 arts district and within walking distance of three major hospitals, we offer ample opportunities for you to excel.
    [linebreak]
    With programs spanning the arts and sciences, engineering, health sciences, law, management, and social work, our research and educational opportunities allow our students, faculty, staff and alumni to tackle today’s toughest problems—and transform the future.
    [linebreak]
    Learn from renowned faculty across Case Western Reserve’s more than 100 undergraduate degree programs, about 160 graduate and professional options, and over 145 dual-degree programs. Plus, we have more than 100 interdisciplinary academic and research centers and institutes where you can explore just about any area of interest.
    [linebreak]
    At Case Western Reserve, we help dreamers become doers. Whether you’re a student with a bright idea or a professor with a breakthrough, we have the programs, people and resources you need to bring it to others. The Larry Sears and Sally Zlotnick Sears think[box], for example, is a 50,000-square-foot innovation center where you can plan, prototype and even 3D-print your product. Plus, it’s home to the Veale Institute for Entrepreneurship—where you'll find the advisors and assistance you need to help you move your concept to market.
    [linebreak]
    When you enroll at Case Western Reserve, you join a network of more than 121,000 graduates across the globe who have gone on to incredible success. Our alumni launch companies, win Nobel Prizes, reform politics, fight for social justice, transform the ways we watch movies, pound pavement and protect computers, and so much more.
    `,
  },
  rice: {
    name: 'Rice University',
    short: 'Rice',
    image: '/img/logos/rice.jpg',
    description: `Located in an urban environment on a 300-acre tree-lined campus, Rice University seizes its advantageous position to pursue pathbreaking research and create innovative collaboration opportunities that contribute to the betterment of our world.
    [linebreak]
    Boasting a 300-acre tree-lined campus in Houston, Rice University is ranked among the nation’s top 20 universities by U.S. News & World Report. Rice has a 6-to-1 undergraduate student-to-faculty ratio, and a residential college system, which supports students intellectually, emotionally and culturally through social events, intramural sports, student plays, lectures series, courses and student government. Developing close-knit, diverse college communities is a strong campus tradition, which is why Rice is highly ranked for best quality of life and best value among private universities.
    [linebreak]
    The William M. Rice Institute for the Advancement of Literature, Science and Art filed its state charter in the Texas capital May 19, 1891. The original charter stipulated that the institute charge no tuition and would be for “the instruction and improvement of the white inhabitants of the City of Houston and State of Texas.” The institute was founded with a bequest of $4.6 million from the estate of William Marsh Rice, a merchant who arrived in Texas in 1838 and soon thereafter moved to the newly founded city of Houston. In the 1840s and 1850s, he accumulated his wealth by providing supplies to plantation owners and selling cotton and sugar crops, produced in large part by enslaved labor. Rice, too, owned and benefited from their labor. After the Civil War, he took the oath of loyalty to the restored United States and lived thereafter in New Jersey and New York, while keeping a close eye on his many ongoing profitable endeavors in Texas. The childless Rice was murdered September 23, 1900, in New York by his butler and lawyer in an attempt to steal his fortune. After considerable litigation, Rice’s bequest in 1904 was deployed toward the purpose he intended — his namesake institute in the rapidly growing city of Houston. After selecting Edgar Odell Lovett, a mathematician from Princeton University, to serve as the first president, the institute’s trustees sent Lovett on an international trip in search of the best pedagogical practices, ideas and personnel.
    [linebreak]
    From October 10 to 12, 1912, the Rice Institute celebrated its opening with lectures by eminent guests from around the world. President Lovett proclaimed that he and his colleagues planned “to assign no upper limit to its educational endeavor.” With 77 male and female students and a faculty of about a dozen in its opening year, the institute quickly grew in size and importance, led by Lovett and James Addison Baker Jr., who chaired Rice’s Board of Trustees from 1891 to 1941. By the time Lovett stepped down as president in 1946, the institute was a key part of a booming city of more than half a million residents.
    [linebreak]
    From its beginning, the Rice Institute’s goals included graduate programs, with the first doctorate degree awarded in 1918. In the 1950s, under President William Vermillion Houston, who served from 1946 to 1960 (during which the residential college system and the annual Beer Bike competition began in 1957), the institute expanded its ambitions. The graduate offerings steadily developed in the sciences and engineering and came to include the humanities and social sciences. On July 1, 1960, the Rice Institute was renamed William Marsh Rice University. In 1962, Rice celebrated its semicentennial led by President Kenneth Sanborn Pitzer, who throughout his leadership from 1961 to 1968, deepened the university’s commitment to research and guided the founding of the School of Architecture in 1965.
    [linebreak]
    From its founding until the early 1960s, the university prohibited the admission of Black students. Growing national pressure from funding and accrediting agencies, alongside the larger moral and political pressures of the civil rights movement, compelled the Rice trustees to desegregate the university and to begin a legal process to remove racial barriers from its charter. The first Black student to be enrolled in 1964 was mathematics graduate student Raymond Lewis Johnson. In fall 1965, the first two Black undergraduate students arrived — Charles Edward Freeman III and Jacqueline Elizabeth McCauley. These first three students were subsequently joined by an increasing number of Black students who brought further distinction to the university and who continued to push for full acceptance by the rest of the Rice community. That same year, Rice began charging tuition for the first time and launched a $33 million development campaign.
    [linebreak]
    During and after the Cold War, Rice took advantage of the boom in available research funding. President Norman Hackerman, who served from 1970 to 1985, oversaw the debut of the Shepherd School of Music and the Jones Graduate School of Administration (now the Jones Graduate School of Business). In 1975, the Division of Science and Engineering divided into the George R. Brown School of Engineering and the School of Natural Sciences (now the Wiess School of Natural Sciences). The Division of the Humanities and Social Sciences separated into two schools in 1979. In 1985, Rice joined the Association of American Universities, an invitation-only group of leading research universities in North America. Rice President George Erik Rupp, who served from 1985 to 1993, led the creation of several interdisciplinary centers. Innovative faculty forged into new fields such as nanotechnology, where Professors Robert F. Curl and Richard E. Smalley shared the Nobel Prize in chemistry in 1996. As a result of these continued advancements, Rice has consistently earned a ranking among the nation’s top 20 research universities.
    [linebreak]
    Under the administration of President S. Malcolm Gillis (1993 to 2004), the university dramatically expanded its international character, by welcoming more students from abroad and building partnerships with institutions around the world. At the same time, the university continued to deepen its commitment to its home city of Houston, expanding partnerships with local industry and the Texas Medical Center. The Susanne M. Glasscock School of Continuing Studies brings thousands of Houstonians to campus each year for learning opportunities and personal and professional development. The James A. Baker III Institute for Public Policy, founded in 1993, provides vital insight to local and national policymakers on the important questions of the day.
    [linebreak]
    For nearly two decades, under the leadership of President David W. Leebron (2004 to 2022), the university continued to expand its local and global footprint under a period of tremendous growth, punctuated by new programs and facilities like the Kinder Institute for Urban Research (2010), the Boniuk Institute for Religious Tolerance (2013), the Doerr Institute for New Leaders (2015), the Moody Center for the Arts (2017), the Liu Idea Lab for Innovation and Entrepreneurship (2017), the Brockman Hall for Opera (2022) and the Ion (2021).
    [linebreak]
    In 2019, the university launched a new financial aid policy, The Rice Investment, that deepens and extends its ongoing commitment to need-based scholarships for low- and middle-income students. With the generosity of untold individuals and foundations, Rice’s endowment has kept pace with its burgeoning enrollment and expanding infrastructure and programming. The endowment of $10 million in 1913 grew to $7.8 billion as President Reginald DesRoches, Rice University’s first Black president, took office July 1, 2022.
    [linebreak]
    As its resources have increased, Rice has served a flourishing and diverse student population. For fall 2022, degree-seeking undergraduate students totaled 4,480, alongside 4,085 degree-seeking graduate students. At matriculation, Asian Americans composed 29 percent of the Class of 2026. Students identifying as Hispanic or Latino were 17 percent of that group, and Black students made up 8 percent. A growing segment of undergraduate and graduate students at Rice hail from more than 60 countries around the world. Rice has 749 full-time faculty members and 147 part-time faculty members. Already in the midst of a strategic planning process and a $2 billion fundraising campaign, the university will continue to build and evolve, aiming for a bolder future.
    [linebreak]
    Every Rice student is a member of one of our 11 residential colleges and maintains membership throughout their undergraduate years. Spirited communities where students live, dine and interact with peers, faculty, staff and alumni, the resident college system allows students to develop strong relationships and contribute to the betterment of each other’s lives and intellectual achievement. Within our colleges, legacies are born, traditions are celebrated and student spirit thrives.
    `,
  },
  nyu: {
    name: 'New York University',
    short: 'NYU',
    image: '/img/logos/nyu.jpg',
    description: `The chance to meet leading professionals in a variety of industries and apply classroom learning in the workplace is one of the biggest advantages of studying at NYU.
    [linebreak]
    Since its founding in 1831, NYU has been an innovator in higher education, reaching out to an emerging middle class, embracing an urban identity and professional focus, and promoting a global vision that informs its 20 schools and colleges.
    [linebreak]
    Today, that trailblazing spirit makes NYU one of the most prominent and respected research universities in the world, featuring top-ranked academic programs and accepting fewer than one in eight undergraduates. Anchored in New York City and with degree-granting campuses in Abu Dhabi and Shanghai as well as 12 study away sites throughout the world, NYU is a leader in global education, with more international students and more students studying abroad than any other US university.
    [linebreak]
    NYU students come from nearly every state and 133 countries, and the university draws upon the diverse backgrounds of our faculty, staff, and students, ensuring its scholarship and teaching benefit from a wide range of perspectives. NYU takes seriously its role as an engine of social mobility, and stands out among the top US universities in its representation of low-income and first-generation students within its community.
    [linebreak]
    The largest private research university in the US, NYU provides a rigorous, demanding education to more than 65,000 students and undertakes $1.27 billion in research annually. It counts among its faculty recipients of the highest scholarly honors and is a top producer of patents and revenue from licensing among US universities. NYU has a vast network of alumni who have gone on to succeed across professions, from the sciences to the arts and government, throughout the world.
    [linebreak]
    Great cities are engines of creativity, and NYU takes its name and spirit from one of the busiest, diverse, and dynamic cities of all...
    From a student body of 158 during NYU's very first semester, enrollment has grown to more than 50,000 students at five major centers in Manhattan and in sites in Africa, Asia, Europe, and South America.
    [linebreak]
    Located in the cultural and political center of the United Arab Emirates.
    [linebreak]
    Message from the President
    [linebreak]
    As someone who has experienced New York University from several different perspectives—as a professor, an administrator, a proud parent of a Gallatin graduate, and now as President—I can confidently say that NYU offers an unrivaled setting to learn and grow.
    Great cities are engines of creativity, and New York University takes its name and spirit from one of the busiest, most diverse and dynamic cities of all. The University lives within New York and other great cities, from Abu Dhabi to Shanghai, Paris to Prague, Sydney to Buenos Aires—all magnets for talented, ambitious people.
    [linebreak]
    Thriving beyond borders and across academic disciplines, NYU has emerged as one of the most networked and extensive worldwide platforms for learning, teaching, researching, building knowledge, and inventing new ways to meet humanity’s challenges. Its students, faculty and alumni feed off the stimulating power of swirling intellectual and cultural experiences by mastering academic disciplines, expressing themselves in the arts, and excelling in demanding professions.
    [linebreak]
    New York University’s mission is to be a top quality international center of scholarship, teaching and research. This involves retaining and attracting outstanding faculty who are leaders in their fields, encouraging them to create programs that draw outstanding students, and providing an intellectually rich environment. NYU seeks to take academic and cultural advantage of its location and to embrace diversity among faculty, staff and students to ensure a wide range of perspectives, including international perspectives, in the educational experience.
    `,
  },
  'berkeley-eecs': {
    name: 'University of California, Berkeley, Electrical Engineering and Computer Science',
    short: 'Berkeley EECS',
    image: '/img/logos/berkeley-eecs.jpg',
    description: `Berkeley EECS is the original Electrical Engineering and Computer Science department, paving the way for future visionaries and enabling massive progress in these areas. It is, without question, the best school for these disciplines in the entire world.
    There are many reasons to think seriously about UC Berkeley. It is one of the most distinguished institutions of higher learning, with a leading EECS department, a world-renowned faculty, a strong commitment to excellence in undergraduate education, and a beautiful campus situated opposite the Golden Gate Bridge near the San Francisco Bay. We are also a short distance from Silicon Valley, and a number of high-tech companies are also based in the Berkeley and Alameda areas. This close proximity to the latest technologies enlivens our curriculum, provides many research and summer job opportunities for our students, and makes this a very exciting place to study electrical engineering and computer sciences.
    [linebreak]
    There is, and will continue to be, a high demand for EE and CS engineers. Due to the rapid pace of change, Berkeley’s academic program is flexible and emphasizes fundamentals. You will use up-to-date undergraduate computer and laboratory facilities. Distinguished teachers from the Berkeley campus will be your lecturers, advisors, and mentors. You can participate in undergraduate research projects.  Engineers usually work in teams, so we also encourage our students to take courses to sharpen their communication skills.
    The impact of Berkeley research on the practical end of computer science has been significant. During the 1970s, theoretical research led by Professors R. A. Karp and S. A. Cook established fundamental concepts and limits of computational complexity. Former student Steve Wozniak co-founded Apple Computer with Steve Jobs. Berkeley faculty and students, led by Profs. R. Fabry and D. Ferrari, obtained source code and rights to the early Bell Labs UNIX operating system, and added networking features and virtual memory support for the DEC VAX. Berkeley UNIX on VAX became the standard for DARPA researchers of this period. The INGRES database system, developed by Professors M. Stonebraker and E. Wong, established the feasibility of implementing the relational data model on small computers. Berkeley INGRES was the first complete implementation of a relational database management system.
    [linebreak]
    Innovation accelerated in the 1980s. Berkeley UNIX, including the Internet’s TCP/IP protocol suite, was publicly released as BSD 4.2. The work on computer-aided design broke new ground with demonstrations of design synthesis from logic specifications, producing chip designs that are “correct by construction.” Yet there also were many new activities and achievements.
    [linebreak]
    The development of Reduced Instruction Set computers by David Patterson and Carlo Sequin, the Redundant Array of Inexpensive Disks project led by Randy Katz and David Patterson, and the INGRES relational database system led by Mike Stonebraker, Larry Rowe and Eugene Wong, can be directly connected to multi-billion dollar industries. In the area of system software, the impact of Berkeley Unix on minicomputers and subsequently on workstations and, through LINUX, on personal computers, is self-evident. Nor can we forget the role of Berkeley alumni in sparking the workstation and personal computer industry—pioneers such as Butler Lampson (Xerox PARC), Bill Joy (Sun), and Steve Wozniak (Apple). Numerical computations would not have been reliable had it not been for adoption of the IEEE 754 floating point standard, largely due to William Kahan, who received a Turing Award in 1989 for this work. In the area of programming languages and software engineering, Berkeley research has been noted for its flair for combining theory and practice.
    [linebreak]
    UC Berkeley led the development of computational complexity theory with the foundational work of Richard Karp who showed the hardness of well-known algorithmic problems, such as finding the minimum cost tour for a traveling salesperson, could be related to NP-completeness—a concept proposed earlier by former Berkeley mathematics professor Stephen A. Cook. The resulting P vs. NP question has since been accepted as one of the ten most important open problems in mathematics, along with such classics as the Riemann Hypothesis. Berkeley computer scientists continue to lead the field of computational complexity, with work such as that on probabilistically checkable proofs and the hardness of approximation problems by Sanjeev Arora and Madhu Sudan in the early 1990s, and on quantum complexity theory by Ethan Bernstein and Umesh Vazirani a few years later. Two Turing Awards (Richard Karp, Manuel Blum) and four ACM Ph.D. Dissertation Awards (Eric Bach, Noam Nisan, Madhu Sudan, and Sanjeev Arora) are just a few of the honors garnered by the research in theoretical computer science at Berkeley.
    [linebreak]
    Berkeley’s AI effort grew largely in the 1980s and 1990s, at a time when problems with this paradigm were becoming evident, and researchers at Berkeley played a major role in developing the new, more probabilistic and learning-oriented AI. This new synthesis brought traditional AI together with control theory, pattern recognition, neural networks, and statistical learning theory. Stuart Russell and Peter Norvig’s bestselling textbook has become the canonical exemplar of this synthesis, and research at Berkeley in fields such as vision, robotics and learning is bringing us ever closer to the dream of truly intelligent machines.
    `,
  },
  airbnb: {
    name: 'Airbnb, Inc.',
    short: 'Airbnb',
    image: '/img/logos/airbnb.png',
    description: `Airbnb was born in 2007 when two Hosts welcomed three guests to their San Francisco home, and has since grown to over 5 million Hosts who have welcomed over 1.5 billion guest arrivals in almost every country across the globe. Every day, Hosts offer unique stays and experiences that make it possible for guests to connect with communities in a more authentic way.`,
  },
  'ut-austin': {
    name: 'University of Texas at Austin',
    short: 'UT Austin',
    image: '/img/logos/ut-austin.png',
    description: `The University of Texas at Austin, founded in 1883, ranks among the 40 best universities in the world.
    [linebreak]
    Like the state it calls home, The University of Texas at Austin is a bold, ambitious leader supporting some 52,000 diverse students, 3,000 teaching faculty, and top national programs across 19 colleges and schools. As Texas’ leading research university, UT attracts more than $650 million annually for discovery. Amid the backdrop of Austin, Texas, a city recognized for its creative and entrepreneurial spirit, the university provides a place to explore countless opportunities for tomorrow’s artists, scientists, athletes, doctors, entrepreneurs and engineers.
    [linebreak]
    The mission of The University of Texas at Austin is to achieve excellence in the interrelated areas of undergraduate education, graduate education, research and public service.
    Nearly 140 years ago, The University of Texas at Austin opened with one building, eight professors, and 221 students. Today, UT ranks among the top 40 universities in the world. Here’s the short version of how that happened.
    Why burnt orange and white? Why a longhorn steer. And where did the name “Bevo” really come from? Texas is rich in traditions that tell the story of our past, even as our eyes are always on the future.
    [linebreak]
    UT strives to create a community that fosters an open and supportive learning, teaching, and working environment. Our strength as a university draws from our wide range of perspectives and experiences.
    Longhorns gain a deeper appreciation of our human diversity and perspectives by engaging with peers and institutions around the world. Texas Global creates opportunities for global connectedness and welcomes a cadre of impressive international students and scholars to campus.
    We’re stronger when we work together. That’s why Texas values partnerships in education, research and community service — with businesses, our military and veteran connections, community groups and other non-profits to make an even bigger impact on our city, state and world.
    [linebreak]
    Spend just a minute on our campus and you'll quickly see how The University of Texas at Austin is an immense and beautiful world all its own. And with our dozens of museums, libraries, centers, institutes and special venues spread across the campus and the city, each with its own unique exhibits and programming, you'll never be bored.
    Imagine a city bursting with an entrepreneurial spirit, a commitment to personal freedom and a passion for unearthing new discoveries. Add a vibrant, internationally renowned music, film and art scene, along with a thriving economy that leads the way in the technology, engineering and health care industries. This is the city we're proud to call home.
    `,
  },
  'iit-kharagpur': {
    name: 'Indian Institute of Technology Kharagpur',
    short: 'IIT Kharagpur',
    image: '/img/logos/iit-kharagpur.png',
    description: `Indian Institute of Technology Kharagpur (IIT Kharagpur) is a public institute of technology research university established by the Government of India in Kharagpur, West Bengal, India. Established in 1951, the institute is the first of the IITs to be established and is recognised as an Institute of National Importance. In 2019 it was awarded the status of Institute of Eminence by the Government of India. IIT Kharagpur is ranked among the most prestigious academic institutions in India.
    [linebreak]
    The institute was initially established to train engineers after India attained independence in 1947. However, over the years, the institute's academic capabilities diversified with offerings in management, law, architecture, humanities, etc. IIT Kharagpur has an 8.7-square-kilometre (2,100-acre) campus and has about 22,000 residents.`,
  },
}

export interface Nationality {
  name: string
  demonym: string
  flag: string
}
export const nationalities: Readonly<{ [key: string]: Nationality }> = {
  pak: {
    name: 'Pakistan',
    demonym: 'Pakistani',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/510px-Flag_of_Pakistan.svg.png',
  },
  lbn: {
    name: 'Lebanon',
    demonym: 'Lebanese',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/510px-Flag_of_Lebanon.svg.png',
  },
  ind: {
    name: 'India',
    demonym: 'Indian',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
  },
  eth: {
    name: 'Ethiopia',
    demonym: 'Ethiopian',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/2560px-Flag_of_Ethiopia.svg.png',
  },
  chn: {
    name: 'China',
    demonym: 'Chinese',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
  },
  usa: {
    name: 'United States of America',
    demonym: 'American',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/800px-Flag_of_the_United_States.png?20110131151900',
  },
  twn: {
    name: 'Republic of China (Taiwan)',
    demonym: 'Taiwanese',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1280px-Flag_of_the_Republic_of_China.svg.png',
  },
  rus: {
    name: 'Russian Federation',
    demonym: 'Russian',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/2560px-Flag_of_Russia.svg.png',
  },
  jpn: {
    name: 'Japan',
    demonym: 'Japanese',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png',
  },
  isr: {
    name: 'State of Israel',
    demonym: 'Israeli',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Israel_flag_300.png?20050629023821',
  },
  phl: {
    name: 'Republic of the Philippines',
    demonym: 'Filipino',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/2880px-Flag_of_the_Philippines.svg.png',
  },
  irl: {
    name: 'Republic of Ireland',
    demonym: 'Irish',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
  },
  fra: {
    name: 'France',
    demonym: 'French',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png',
  },
  sgp: {
    name: 'Singapore',
    demonym: 'Singaporean',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1280px-Flag_of_Singapore.svg.png',
  },
  unknown: {
    name: 'Undetermined',
    demonym: 'Undetermined',
    flag: '/img/flags/unknown.png',
  },
  stateless: {
    name: 'Stateless',
    demonym: 'Stateless',
    flag: '/img/flags/stateless.png',
  },
}
