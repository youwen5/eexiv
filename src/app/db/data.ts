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
export type FileType = 'pdf' | 'docx' | 'pptx' | 'targz' | 'other'
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
    },
    abstract:
      'This guide to mechanical engineering covers gears and gear ratios, gear types, gear diagrams and measurements and sprockets and chains. It also introduces a discussion of power in the context of gears and mechanical engineering specific to FRC robotics.',
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
    }
    affiliation: string[]
    image: string
    nationality: string[]
  }
}

export const authors: Authors = {
  shasan: {
    name: {
      first: 'Saim',
      last: 'Hasan',
    },
    affiliation: [
      'Lead Mechanical Engineer @1280-mech',
      'Undergraduate @usc-viterbi',
    ],
    image: 'https://team-1280.vercel.app/assets/img/gallery6.jpg',
    nationality: ['pak'],
  },
  mbohsali: {
    name: {
      first: 'Majd',
      last: 'Bohsali',
    },
    affiliation: ['Lead Programming Engineer @1280-eecs'],
    image: 'https://cdn-icons-png.freepik.com/512/3177/3177440.png',
    nationality: ['lbn'],
  },
  avenkatesh: {
    name: {
      first: 'Ananth',
      last: 'Venkatesh',
    },
    affiliation: [
      'Programming Lead @1280-programming',
      'Lead Controls Engineer @1280-eecs',
    ],
    image: 'https://cdn-icons-png.freepik.com/512/3177/3177440.png',
    nationality: ['ind', 'eth'],
  },
  ywu: {
    name: {
      first: 'Youwen',
      last: 'Wu',
    },
    affiliation: ['Artificial Intelligence Lead @1280-eecs'],
    image:
      'https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/9/95/Portrait_evrart.png/revision/latest?cb=20191028100247',
    nationality: ['chn'],
  },
}
