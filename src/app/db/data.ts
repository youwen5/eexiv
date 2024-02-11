/*
documents db schema
documents {
    slug: {
        manifest: {
            title: string
            authors: string[]
            date: unix epoch integer[]
            type: presentation | report | white paper | other
            latest: integer >= 1
            keywords: string[]
            topics: string[]
            references: string[],
            code: url[]
        },
        abstract: string,
        file: pdf | docx | pptx | targz | other, named file[rev].[ext]
        (eg. revision 1 = file1.pdf, revision 2 = file2.pdf, etc)
        the "latest" should be the latest revision
    }
}
*/
export type FileType = 'pdf' | 'docx' | 'pptx' | 'tar.gz' | 'other'
export type DocumentType = 'presentation' | 'report' | 'white paper' | 'other'
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
    }
    abstract: string
    file: FileType
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
      type: 'report',
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
    formerAffiliations: ['Lead Mechanical Engineer @1280-mech'],
    image: 'https://team-1280.vercel.app/assets/img/gallery6.jpg',
    nationality: ['pak', 'usa'],
  },
  mbohsali: {
    name: {
      first: 'Majd',
      last: 'Bohsali',
    },
    affiliation: ['Lead Programming Engineer@1280-eecs'],
    image: 'https://cdn-icons-png.freepik.com/512/3177/3177440.png',
    nationality: ['lbn', 'usa'],
  },
  avenkatesh: {
    name: {
      first: 'Ananth',
      last: 'Venkatesh',
    },
    affiliation: ['Lead Controls Engineer@1280-eecs'],
    formerAffiliations: ['Programming Lead @1280-programming'],
    image: 'https://cdn-icons-png.freepik.com/512/3177/3177440.png',
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
    ],
    image: '/img/profiles/wlin.jpg',
    nationality: ['twn', 'chn', 'usa'],
    formerAffiliations: ['Intern@raid-zero'],
    bio: 'Hi, I am Kaito or Warren. I am a Self-taught programmer and engineer. I go around doing dumb things such as my projects. I have a dream of building a community. I am currently part of many projects.',
    website: 'https://kaitotlex.carrd.co/',
  },
}

export interface Affiliations {
  [key: string]: {
    name: string
    short: string
    image: string
  }
}

export const affiliations: Affiliations = {
  '1280-mech': {
    name: "Team 1280, the Ragin' C Biscuits, Mechanical Subteam",
    short: '1280 Mech',
    image:
      'https://raw.githubusercontent.com/Team-1280/identity/main/assets/img/figurehead/figurehead-primary.png',
  },
  '1280-eecs': {
    name: "Team 1280, the Ragin' C Biscuits, Electrical Engineering and Computer Science Subteam",
    short: '1280 EECS',
    image:
      'https://raw.githubusercontent.com/Team-1280/identity/main/assets/img/eecs/eecs.png',
  },
  '1280-programming': {
    name: "Team 1280, the Ragin' C Biscuits, Programming Subteam (now defunct)",
    short: '1280 Programming',
    image:
      'https://raw.githubusercontent.com/Team-1280/identity/main/assets/img/eecs/eecs.png',
  },
  'usc-viterbi': {
    name: 'University of Southern California, Viterbi School of Engineering',
    short: 'USC Viterbi',
    image:
      'https://pbs.twimg.com/profile_images/1006996145212551169/HaqpwHNY_400x400.jpg',
  },
  '1280-business': {
    name: "Team 1280, the Ragin' C Biscuits, Business Subteam",
    short: '1280 Business',
    image:
      'https://raw.githubusercontent.com/Team-1280/identity/main/assets/img/figurehead/figurehead-primary.png',
  },
  'raid-zero': {
    name: 'Team 4253 - Raid Zero',
    short: 'Raid 0',
    image:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/299113446_475020107964742_4855015622304877578_n.png?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=f-tZdWsVEzQAX_9HeIZ&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDRrS-nRH8uMBH9tpG7g8RNEO1AEtNso5EQMgJ5NaneaQ&oe=65CD858E',
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
