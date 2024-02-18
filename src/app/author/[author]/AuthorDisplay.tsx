import Link from 'next/link'
import { Fragment, Suspense } from 'react'
import { Author, affiliations, authors } from '../../db/data'
import { Zilla_Slab } from 'next/font/google'
import { notFound } from 'next/navigation'
import DocumentCard from '@/app/components/DocumentCard'
import findDocumentsByAuthor from './findDocumentsByAuthor'
import cardEffects from '@/app/styles/cardEffects.module.css'
import KonamiSnowfall from './KonamiSnowfall'
import Image from 'next/image'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

const MainAuthorPosition = ({ author }: { author: Author }) => {
  const { name, affiliation, website } = author

  const mainAffiliationShort = affiliation[0].split('@')[1]
  const mainPosition = affiliation[0].split('@')[0]
  const mainAffiliation = affiliations[mainAffiliationShort]

  return (
    <>
      <span>{mainPosition} at </span>
      <Link href={`/affiliation/${mainAffiliationShort}`}>
        {mainAffiliation.name}
      </Link>
      {website ? (
        <div className='mt-2'>
          Visit {name.nickname ? name.nickname : name.first} at:{' '}
          <a href={website} target='_blank'>
            {website}
          </a>
        </div>
      ) : null}
      <div className='my-4 max-h-16 flex flex-wrap gap-2'>
        {affiliation.map((a: string) => (
          <Link
            key={a}
            href={`/affiliation/${a.split('@')[1]}`}
            className={`${cardEffects['card-small']} rounded-md`}
          >
            <Image
              src={affiliations[a.split('@')[1]].image}
              alt={affiliations[a.split('@')[1]].name}
              width={100}
              height={100}
              className='h-16 rounded-md p-2 object-contain'
            />
          </Link>
        ))}
      </div>
    </>
  )
}

const OtherAuthorPositions = ({ author }: { author: Author }) => {
  const { affiliation } = author

  if (affiliation.length === 1) return
  return (
    <>
      <h1 className='text-3xl md:mt-6 mt-4 mb-2 font-serif'>Other Positions</h1>
      {affiliation.slice(1).map((a: string, i: number) => {
        const position = a.split('@')[0]
        const affiliation = affiliations[a.split('@')[1]].name
        return (
          <Fragment key={`${position}@${affiliation}`}>
            <span className='text-slate-500 text-lg'>
              {position} at{' '}
              <Link href={`/affiliation/${a.split('@')[1]}`}>
                {affiliation}
              </Link>
            </span>
          </Fragment>
        )
      })}
    </>
  )
}

const FormerAuthorPositions = ({ author }: { author: Author }) => {
  const { formerAffiliations } = author

  if (!formerAffiliations) return null
  return (
    <>
      <h1 className='text-3xl md:mt-6 mt-4 mb-2 font-serif'>
        Former Positions
      </h1>
      {formerAffiliations?.map((a: string, i: number) => {
        const position = a.split('@')[0]
        const affiliation = affiliations[a.split('@')[1]].name

        return (
          <Fragment key={`${position}@${affiliation}`}>
            <span className='text-slate-500 text-lg'>
              {position} at{' '}
              <Link href={`/affiliation/${a.split('@')[1]}`}>
                {affiliation}
              </Link>
            </span>
          </Fragment>
        )
      })}
    </>
  )
}

const AuthorBio = ({ author }: { author: Author }) => {
  const { bio } = author
  if (!bio) return null

  return (
    <>
      <h1 className='text-3xl md:mt-6 mt-4 mb-2 font-serif'>Bio</h1>
      <p className='mb-2'>{bio}</p>
    </>
  )
}

export default function AuthorDisplay({
  author,
}: Readonly<{ author: string }>) {
  const data = authors[author]
  if (!data) {
    notFound()
  }

  const { name, image, nationality } = data

  const authorsDocuments = findDocumentsByAuthor(author)

  return (
    <>
      <Suspense>
        <KonamiSnowfall nationalityList={nationality} />
      </Suspense>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center max-w-3xl mx-auto'>
        <div className='aspect-square w-[60vw] md:w-[30vw] lg:w-[20vw] 2xl:w-[15vw] overflow-hidden mx-auto mb-4'>
          <Image
            alt='profile'
            className='rounded-full mx-auto object-cover w-full h-full border-slate-800 border-4'
            width={500}
            height={500}
            src={image}
          />
        </div>
        <div>
          <div>
            <span
              className={`${zillaSlab.className} font-bold text-5xl text-center md:text-left`}
            >
              {name.first}
              {name.nickname ? ` "${name.nickname}"` : null} {name.last}
            </span>
            <div className='text-slate-600 text-md sm:text-lg mt-4'>
              <MainAuthorPosition author={data} />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-3xl mx-auto grid grid-cols-1 justify-center'>
        <hr className='mx-auto w-full h-1 border-0 bg-slate-200 my-2 rounded-md' />
        <OtherAuthorPositions author={data} />
        <FormerAuthorPositions author={data} />
        <AuthorBio author={data} />
        {authorsDocuments.length > 0 && (
          <>
            <hr className='mx-auto w-full h-1 border-0 bg-slate-200 my-2 rounded-md mt-8' />
            <h1 className='text-3xl md:my-6 my-4 font-serif'>
              Published documents {`(${authorsDocuments.length})`}
            </h1>
            {authorsDocuments.map((d) => (
              <Fragment key={d.slug}>
                <DocumentCard doc={d.doc} href={`/document/view/${d.slug}`} />
              </Fragment>
            ))}
          </>
        )}
      </div>
    </>
  )
}
