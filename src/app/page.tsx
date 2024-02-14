import Link from 'next/link'
import { documents, authors, affiliations } from './db/data'
import News from './components/News'
import RandomDocs from './components/RandomDocs'
import RecentDocuments from './components/RecentDocuments'

export default function Home() {
  const AuthorDisplay = () => {
    return Object.entries(authors).map(([author, data], index) => {
      let affiliationSlug = data.affiliation[0].split('@')[1]
      let affiliation = affiliations[affiliationSlug]
      return (
        <div key={author}>
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
        <span className='font-serif text-xl'>Recently released documents</span>
        <RecentDocuments />
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
