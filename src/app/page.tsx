import Link from 'next/link'
import {
  documents,
  authors,
  affiliations,
  Author,
  Affiliation,
} from './db/data'
import News from './components/News'
import RandomDocs from './components/RandomDocs'
import RecentDocuments from './components/RecentDocuments'

function sortAuthorsByDocumentsPublished(authors: {
  [key: string]: Author
}): { id: string; author: Author }[] {
  // Initialize a map to count documents for each author
  const authorDocumentCount: { [key: string]: number } = {}

  // Iterate over documents to count the number for each author
  Object.values(documents).forEach((document) => {
    document.manifest.authors.forEach((authorId) => {
      if (authorDocumentCount[authorId]) {
        authorDocumentCount[authorId] += 1
      } else {
        authorDocumentCount[authorId] = 1
      }
    })
  })

  // Convert the authors object into an array of objects including the author ID
  const authorsWithId = Object.keys(authors).map((id) => ({
    id,
    author: authors[id],
    count: authorDocumentCount[id] || 0, // Include the count for sorting
  }))

  // Sort authors by their document count in descending order
  authorsWithId.sort((a, b) => b.count - a.count)

  // Return the sorted array, excluding the count property
  return authorsWithId.map(({ id, author }) => ({ id, author }))
}

interface AuthorDisplayProps {
  authors: { [key: string]: Author }
  affiliations: { [key: string]: Affiliation }
}
const AuthorDisplay = ({ authors, affiliations }: AuthorDisplayProps) => {
  return (
    <ol className='list-decimal pl-4 space-y-2'>
      {sortAuthorsByDocumentsPublished(authors)
        .slice(0, 10)
        .map(({ id, author }) => {
          let data = author
          let affiliationSlug = data.affiliation[0].split('@')[1]
          let affiliation = affiliations[affiliationSlug]
          return (
            <li key={id}>
              <Link href={`/author/${id}`}>
                {data.name.first}
                {data.name.nickname ? ` "${data.name.nickname}" ` : ' '}
                {data.name.last}
              </Link>{' '}
              of{' '}
              <Link href={`/affiliation/${affiliationSlug}`}>
                {affiliation.short}
              </Link>
            </li>
          )
        })}
    </ol>
  )
}

export default function Home() {
  return (
    <div className='text-slate-800 flex flex-wrap md:flex-row justify-center'>
      <p className='font-serif text-lg basis-full md:basis-1/2 grow mr-1 text-balance'>
        eeXiv, like arXiv, is a free distribution service and an open-access
        archive for over {Object.keys(documents).length} scholarly articles in
        the fields of physics, mathematics, computer science, quantitative
        biology, quantitative finance, statistics, electrical engineering and
        systems science, and economics, but mainly related to the{' '}
        <Link href='./topic/frc' target='_blank'>
          FIRST Robotics Competition (FRC)
        </Link>
        . Materials on this site may be published independently through other
        channels. Read more about us <Link href='/about'>here</Link>. eeXiv can
        be accessed from its primary domain at{' '}
        <a href='https://eexiv.org'>eexiv.org</a> or at our mirror at{' '}
        <a href='https://eexiv.vercel.app'>eexiv.vercel.app</a>.
      </p>
      <News />
      <div className='grid grid-cols-1 space-y-2 mt-4 basis-full'>
        <br />
        <div className='font-serif text-xl my-2'>
          Recently released documents
        </div>
        <RecentDocuments />
        <hr className='mx-auto w-full h-1 border-0 bg-slate-200 my-2 rounded-md' />
        <br />
        <div className='font-serif text-xl my-2'>
          Selected documents in various disciplines
        </div>
        <RandomDocs />
        <hr className='mx-auto w-full h-1 border-0 bg-slate-200 my-2 rounded-md' />
        <br />
        <div className='font-serif text-xl'>
          Our esteemed faculty and alumni (ranked by research output)
        </div>
        <AuthorDisplay authors={authors} affiliations={affiliations} />
      </div>
    </div>
  )
}
