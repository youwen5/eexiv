import { documents } from '@/app/db/data'
import cardEffects from '@/app/styles/cardEffects.module.css'
import { Zilla_Slab } from 'next/font/google'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
import { ItemBadge, Status } from '../components/Badges'
import { Authors, Topics } from '../components/DataDisplay'
import { epoch2datestring } from '../utils/epoch2datestring'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

const DocumentCardWrapper = ({
  params,
}: Readonly<{ params: { shortName: string } }>) => {
  const { shortName } = params
  const doc = documents[shortName]
  const href = `/document/view/${shortName}`
  if (!doc) {
    notFound()
  }

  const { manifest, abstract } = doc
  const { title, authors, topics, dates, status, type } = manifest
  return (
    <Link href={href} className='no-link-style'>
      <button
        className={`${cardEffects['card-large']} border-4 rounded-lg border-gray-300 hover:border-blue-500 p-5 my-4 w-full cursor-pointer shadow-slate-300 shadow-md text-left h-full flex flex-col`}
      >
        <h2 className={`${zillaSlab.className} text-3xl`}>{title}</h2>
        <p className='text-slate-500 py-2 text-md mt-2'>
          <Authors authors={authors} noLink />
        </p>
        <p className='mb-2 text-slate-700 text-md'>
          Last updated on {epoch2datestring(dates[dates.length - 1])}
        </p>
        <p className='mb-2'>
          <Topics topics={topics} showTitle />
        </p>
        <div className='mb-4 flex flex-wrap gap-2'>
          <ItemBadge itemName={type} /> <Status statusName={status} />
        </div>
        <h2 className={`${zillaSlab.className} text-2xl`}>Abstract</h2>
        <p className='py-2 text-md text-slate-700 font-serif text-lg text-balance'>
          {abstract.substring(0, 500) + (abstract.length > 500 ? '...' : '')}
        </p>
      </button>
    </Link>
  )
}

const getDocumentDate = (id: string) => {
  const dates = documents[id].manifest.dates
  return dates[dates.length - 1]
}

const Page = () => {
  const sortedDocuments = Object.entries(documents).sort((a, b) => {
    const docTimestampA = getDocumentDate(a[0])
    const docTimestampB = getDocumentDate(b[0])
    return docTimestampB - docTimestampA
  })

  return (
    <div className='p-0 md:p-6'>
      <h1 className={`${zillaSlab.className} text-6xl text-center mb-10`}>
        Documents
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {sortedDocuments.map((entry) => {
          return (
            <Fragment key={entry[0]}>
              <DocumentCardWrapper
                key={entry[0]}
                params={{ shortName: entry[0] }}
              />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Page
