/*
documents db schema
documents {
    slug: {
        manifest: {
            title: string
            authors: string[]
            date: unix epoch integer[] -> if multiple revisions, put the earlier dates first
            type: presentation | report | white paper | other
            latest: integer >= 1 -> the latest revision of the document (earliest = 1)
            keywords: string[]
            topics: string[]
            references: string[],
            code: url[]
        },
        abstract: string,
        file: pdf | docx | pptx | targz | other, named file[rev].[ext]
        (eg. revision 1 = file1.pdf, revision 2 = file2.pdf, etc)
        the "latest" should be the latest revision
        citation: a string that can be used to cite the document
        reviewers: an array of reviewers, following the reviewer format. if you specify a local
                  profile username, it will link to the author's profile, and take priority over the link
        status: draft | under review | reviewed | published no review
          note: published no review should be used for documents where peer review 
          is not appropriate or unnecessary
    }
}
*/
export type FileType = 'pdf' | 'docx' | 'pptx' | 'tar.gz' | 'other'
export type DocumentType =
  | 'presentation'
  | 'report'
  | 'white paper'
  | 'dwm'
  | 'datasheet'
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
export interface DocumentDB {
  [key: string]: {
    manifest: {
      title: string
      authors: string[]
      topics: string[]
      dates: number[]
      references?: string[]
      code?: string[]
      type: DocumentType
      latest: number
      keywords?: string[]
      status: DocumentStatus
      reviewers?: reviewer[]
    }
    abstract: string
    file: FileType
    citation?: string
  }
}
export const documents: DocumentDB = {
  'day-5-principles': {
    manifest: {
      title: 'Day 5 Principles',
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
    abstract:
      'This guide to mechanical engineering covers gears and gear ratios, gear types, gear diagrams and measurements and sprockets and chains. It also introduces a discussion of power in the context of gears and mechanical engineering specific to FRC robotics.',
    file: 'pdf',
  },
  '2024-controls-programming-dwm': {
    manifest: {
      title: '2024 Controls/Programming DWM',
      authors: ['mbohsali', 'avenkatesh', 'ywu'],
      topics: ['frc', 'eecs'],
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
        'https://github.com/Team-1280/Swerve',
        'https://github.com/Team-1280/Jankboard',
        'https://github.com/Team-1280/identity',
      ],
      status: 'published no review',
    },
    abstract:
      'This document outlines the first two weeks of prototyping conducted by the EECS subteam for Team 1280. Action items are presented in a doing/working/moving format to keep track of new developments related to EECS projects.',
    file: 'pdf',
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
      topics: ['frc', 'eecs', 'ai'],
      dates: [1706513504],
      code: ['https://github.com/Team-1280/DeepBozo'],
      type: 'report',
      latest: 1,
      status: 'reviewed',
      reviewers: [{ first: 'Youwen', last: 'Wu', profile: 'ywu' }],
    },
    file: 'pdf',
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
      topics: ['frc', 'eecs', 'econ'],
      latest: 1,
      status: 'reviewed',
      reviewers: [
        { first: 'Youwen', last: 'Wu', profile: 'ywu' },
        { first: 'Youwen', last: 'Wu', profile: 'ywu' },
        { first: 'Youwen', last: 'Wu', profile: 'ywu' },
      ],
    },
    abstract:
      'The toughbook is a rugged, industrial computer intended for low-performance, scalable, and cheap computational operations. The robotics storage cabinet contained a Lenovo ThinkPad toughbook which was, at the time of its discovery, severely damaged, both internally (software) and externally (hardware). The programming team invested significant time, energy, resources, and capital into the revival of this storied piece of digital infrastructure, thus restoring the ThinkPad and, by extension, the robotics team, to its former glory.',
    file: 'pdf',
  },
}

export interface Topics {
  [key: string]: {
    name: string
    description: string
    wiki: string
  }
}
export const topics: Topics = {
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
      'Electrical engineering and computer science are fields that combine engineering, science, and computing. The acronym EECS is derived from ther world-renowned electrical engineering and computer science program at the University of California, Berkeley.',
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
      'Economics is the study of the production, distribution, consumption, and trade of goods and services.',
    wiki: 'https://en.wikipedia.org/wiki/Economics',
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

  image: image url, can store in public/eexiv-2/img/profiles or link to a web resource

  nationality: an array of ISO 3 letter country codes corresponding to your nationalities or ethniciities

  formerAffiliations: an array of former affiliation "slugs." they should also correspond to affiliations 
  in the affiliations data
  
  bio: biography string

  website: website url
}
*/
export interface Authors {
  [key: string]: {
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
}
export const authors: Authors = {
  shasan: {
    name: {
      first: 'Saim',
      last: 'Hasan',
    },
    affiliation: ['Undergraduate@usc-viterbi'],
    formerAffiliations: ['Lead Mechanical Engineer@1280-mech', 'Student@srvhs'],
    image: '/img/profiles/shasan.jpg',
    nationality: ['pak', 'usa'],
  },
  mbohsali: {
    name: {
      first: 'Majd',
      last: 'Bohsali',
    },
    affiliation: ['Lead Programming Engineer@1280-eecs', 'Student@srvhs'],
    image: '/img/profiles/default.png',
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
    bio: 'The king of jank.',
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
    nationality: ['twn', 'chn', 'usa'],
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
    nationality: ['usa'],
    website: 'https://github.com/gavinostler',
    bio: `I'm Gavin, a high school student from the Bay Area. I am a fullstack developer and love making random things to fill my day. I'm interested in creating useful tools and software in the future.`,
  },
}

export interface Affiliations {
  [key: string]: {
    name: string
    short: string
    image: string
    description: string
  }
}

export const affiliations: Affiliations = {
  '1280-mech': {
    name: "Team 1280, the Ragin' C Biscuits, Mechanical Subteam",
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
    name: "Team 1280, the Ragin' C Biscuits, Electrical Engineering and Computer Science Subteam",
    short: '1280 EECS',
    image: '/img/logos/eecs-wordmark.png',
    description: `The Team 1280 EECS (Electrical Engineering and Computer Science) subteam is an autonomous organization within Team 1280, specializing in the design, programming, and electrical systems that bring their robots to life. As the nerve center of Team 1280, the EECS subteam combines the disciplines of electrical engineering and computer science to develop sophisticated control systems, autonomous functionalities, and robust electrical infrastructures that enable their robots to perform complex tasks and maneuvers in the competitive arena.
[linebreak]
Team 1280 EECS is composed of highly skilled and passionate students who are keen on applying theoretical knowledge to practical challenges. They are responsible for everything from circuit design and sensor integration to software development and debugging, ensuring that the robot can effectively communicate, navigate, and interact with its environment.
[linebreak]
Team 1280 EECS benefits from mentorship by experienced professionals and alumni, access to state-of-the-art tools and technologies, and a culture that encourages creativity, experimentation, and continuous improvement. As a result, the EECS subteam plays a crucial role in driving Team 1280's success in competitions and inspiring the next generation of engineers and computer scientists.`,
  },
  '1280-programming': {
    name: "Team 1280, the Ragin' C Biscuits, Programming Subteam (now defunct)",
    short: '1280 Programming',
    image: '/img/logos/1280-main.png',
    description: `The former programming subteam of Team 1280, it combined with the Team 1280 electrical subteam in a historic merger to form Team 1280 EECS.`,
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
    name: "Team 1280, the Ragin' C Biscuits, Business Subteam",
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
    name: 'Team 4253 - Raid Zero',
    short: 'Raid 0',
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
}

export interface Nationalities {
  [key: string]: {
    name: string
    demonym: string
    flag: string
  }
}
export const nationalities: Nationalities = {
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
}
