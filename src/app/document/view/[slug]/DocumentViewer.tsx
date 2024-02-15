'use client'
import { Zilla_Slab } from 'next/font/google'
import { epoch2datestring } from '@/app/utils/epoch2datestring'
import {
  Code,
  References,
  Topics,
  Authors,
  Reviewers,
} from '@/app/components/DataDisplay'
import { ItemBadge, Status } from '@/app/components/Badges'
import VersionChooser from './VersionChooser'
import crypto from 'crypto'
import generateHash from '@/app/utils/hash'
import { Suspense } from 'react'
import { loadDocument } from '@/app/db/loaders'
import { useSuspenseQuery } from '@tanstack/react-query'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

const DocumentViewer = ({ slug }: Readonly<{ slug: string }>) => {
  const { data, error } = useSuspenseQuery({
    queryKey: [slug],
    queryFn: () => {
      const data = loadDocument(slug)
      return data
    },
  })
  if (error) throw error
  let doc = data

  const { manifest, abstract, citation, doi } = doc

  const {
    title,
    authors,
    topics,
    dates,
    references,
    code,
    type,
    latest,
    reviewers,
    status,
  } = manifest

  // git style hash
  const hash = generateHash(slug)

  return (
    <div className='max-w-4xl lg:max-w-6xl mx-auto'>
      <h1
        className={`
            text-slate-800 text-5xl mb-4
            ${zillaSlab.className}
            text-wrap break-words hyphens-auto
          `}
      >
        {title}
      </h1>
      <p className={`text-slate-800 mt-2`}>
        <Authors authors={authors} />
      </p>
      <p className='mt-4 mb-2'>
        Latest revision published{' '}
        <span className='font-bold'>
          {epoch2datestring(dates[dates.length - 1])}
        </span>
      </p>
      <div className='flex flex-wrap gap-2'>
        <ItemBadge itemName={type} />
        <Status statusName={status} />
        <span className='border-gray-200 border-2 rounded px-2 py-1.5 mr-2 shadow-sm shadow-slate-300'>
          Revision {latest}
        </span>
      </div>
      <hr className='my-4' />
      <h4 className='text-2xl mt-5 font-serif font-semibold'>Abstract</h4>
      <p className='my-4 text-xl text-slate-600 font-serif text-balance'>
        {abstract}
      </p>
      <p className='my-2'>
        <Topics topics={topics} />
      </p>
      <p className='my-2'>
        <Code code={code} />
      </p>
      <p className='my-2'>
        <References references={references} />
      </p>
      <p className='my-2'>
        <Reviewers reviewers={reviewers} />
      </p>
      <p className='my-2'>
        <span className='font-bold'>Cite as: </span>
        {citation ? <>{citation}</> : <>eeXiv:{hash}</>}
      </p>
      {doi && (
        <p className='my-2'>
          <span className='font-bold'>DOI: </span>
          {doi}
        </p>
      )}
      <Suspense
        fallback={
          <div className='max-w-sm animate-pulse flex flex-wrap gap-2'>
            <div className='rounded-sm h-10 bg-gray-300 w-3 flex-grow basis-1 mt-2 mb-2'></div>
            <div className='rounded-sm h-10 bg-gray-300 w-3 flex-grow basis-1.5 mt-2 mb-2'></div>
            <div className='rounded-sm h-10 bg-gray-300 w-1 flex-grow basis-1 mt-2 mb-2'></div>
          </div>
        }
      >
        <VersionChooser doc={doc} slug={slug} />
      </Suspense>
    </div>
  )
}

export default DocumentViewer
