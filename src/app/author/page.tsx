import { affiliations, authors, documents } from '@/app/db/data'
import cardEffects from '@/app/styles/cardEffects.module.css'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

const AuthorCard = ({
  params,
}: Readonly<{ params: { shortName: string } }>) => {
  const { shortName } = params
  const { name, image, affiliation } = authors[shortName]
  if (!name) {
    notFound()
  }

  const mainAffiliationShort = affiliation[0].split('@')[1]
  const mainPosition = affiliation[0].split('@')[0]
  const mainAffiliation = affiliations[mainAffiliationShort]

  return (
    <Link
      className={`${cardEffects['card-large']} border-4 rounded-lg border-gray-300 hover:border-blue-500 p-5 my-4 w-full cursor-pointer shadow-slate-300 shadow-md text-left m-4 no-link-style pb-8`}
      href={`/author/${shortName}`}
    >
      <div className='grid grid-cols-1 max-w-3xl mx-auto'>
        <div className='mx-auto mb-4 max-w-3xl md:w-auto md:h-[40vw] lg:h-[20vw] rounded-lg'>
          <Image
            alt='profile'
            width={1000}
            height={1000}
            className='rounded-lg mx-auto p-8 object-contain w-full h-full'
            src={image}
          />
        </div>
        <br />
        <span
          className={`${zillaSlab.className} font-bold text-4xl text-center`}
        >
          {name.first} {name.last}
        </span>
        <div className='text-slate-600 text-lg mt-4 text-center'>
          {mainPosition} at{' '}
          <Link href={`/affiliation/${mainAffiliationShort}`}>
            {mainAffiliation.name}
          </Link>
        </div>
      </div>
    </Link>
  )
}

const getNumberOfDocumentsByAuthor = (authorId: string) => {
  // Filter documents by author
  const filteredDocuments = Object.entries(documents)
    .filter(([_, doc]) => doc.manifest.authors.includes(authorId))
    .map(([slug, doc]) => ({ slug, doc }))

  return filteredDocuments.length
}

const Page = () => {
  const sortedAuthors = Object.entries(authors).sort((a, b) => {
    const numDocsA = getNumberOfDocumentsByAuthor(a[0])
    const numDocsB = getNumberOfDocumentsByAuthor(b[0])
    return numDocsB - numDocsA
  })

  return (
    <div className='p-0 md:p-6'>
      <h1 className={`${zillaSlab.className} text-6xl text-center mb-10`}>
        Authors
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-8'>
        {sortedAuthors.map((entry) => {
          return (
            <Fragment key={entry[0]}>
              <AuthorCard key={entry[0]} params={{ shortName: entry[0] }} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Page
