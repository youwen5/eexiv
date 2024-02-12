import Link from 'next/link'
import {
  documents,
  authors,
  topics as topicsList,
  affiliations,
} from './db/data'
import { epoch2datestring } from './utils/epoch2datestring'
import News from './components/News'

export default function Home() {
  const RandomDocs = (): React.ReactNode[] => {
    // Convert the object keys into an array
    const keys = Object.keys(documents)

    // Determine the number of keys to process (all if fewer than 10)
    const numKeysToProcess = keys.length < 10 ? keys.length : 10

    // Shuffle the keys array if there are more than 10 keys
    if (keys.length > 10) {
      for (let i = keys.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[keys[i], keys[j]] = [keys[j], keys[i]]
      }
    }

    // Select keys based on numKeysToProcess
    const selectedKeys = keys.slice(0, numKeysToProcess)

    // Iterate over each of the selected keys
    return selectedKeys.map((key, index) => {
      const { title, dates, type, topics } = documents[key].manifest
      let dateString = epoch2datestring(dates[dates.length - 1])
      let typeString = ''
      switch (type) {
        case 'report':
          typeString = 'report'
          break
        case 'presentation':
          typeString = 'presentation'
          break
        case 'white paper':
          typeString = 'white paper'
          break
        case 'datasheet':
          typeString = 'datasheet'
          break
        case 'dwm':
          typeString = 'DWM'
          break
        case 'guide':
          typeString = 'guide'
          break
        case 'other':
          typeString = 'document'
          break
      }

      return (
        <div key={index}>
          <Link href={`/document/view/${key}`}>{title}</Link>, a {typeString}{' '}
          about {topicsList[topics[0]]['name']} published on {dateString}
          .
          <br />
        </div>
      )
    })
  }

  const AuthorDisplay = () => {
    return Object.entries(authors).map(([author, data], index) => {
      let affiliationSlug = data.affiliation[0].split('@')[1]
      let affiliation = affiliations[affiliationSlug]
      return (
        <div key={index}>
          <Link href={`/author/${author}`}>
            {data.name.first}
            {data.name.nickname ? ` "${data.name.nickname}" ` : ' '}
            {data.name.last}
          </Link>{' '}
          of{' '}
          <Link href={`/affiliation/${affiliationSlug}`}>
            {affiliation.short}
          </Link>
        </div>
      )
    })
  }

  return (
    <div className='text-slate-800 flex flex-wrap md:flex-row justify-center'>
      <p className='font-serif text-lg basis-full md:basis-1/2 grow mr-1 text-balance'>
        eeXiv, like arXiv, is a free distribution service and an open-access
        archive for nearly {Object.keys(documents).length} scholarly articles in
        the fields of physics, mathematics, computer science, quantitative
        biology, quantitative finance, statistics, electrical engineering and
        systems science, and economics, but mainly related to the{' '}
        <Link
          href='https://en.wikipedia.org/wiki/FIRST_Robotics_Competition'
          target='_blank'
        >
          FIRST Robotics Competition (FRC)
        </Link>
        . Materials on this site may be published independently through other
        channels. Read more about us <Link href='/about'>here</Link>.
      </p>
      <News />
      <div className='grid grid-cols-1 space-y-2 mt-4 basis-full'>
        <hr className='mx-auto w-full h-1 border-0 bg-slate-200 my-2 rounded-md' />
        <span className='font-serif text-xl'>
          Selected documents in various disciplines
        </span>
        <RandomDocs />
        <hr className='mx-auto w-full h-1 border-0 bg-slate-200 my-2 rounded-md' />
        <span className='font-serif text-xl'>
          Our esteemed faculty and alumni
        </span>
        <AuthorDisplay />
      </div>
    </div>
  )
}
