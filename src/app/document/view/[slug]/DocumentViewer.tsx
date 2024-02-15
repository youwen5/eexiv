import { documents } from '@/app/db/data'
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
import Link from 'next/link'
import { notFound } from 'next/navigation'
import VersionChooser from './VersionChooser'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

const DocumentViewer = ({ slug }: Readonly<{ slug: string }>) => {
  const doc = documents[slug]
  const { manifest, abstract, file, citation } = doc

  if (!manifest) return notFound()
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
        {citation ? <>{citation}</> : <>eeXiv:{slug}</>}
      </p>
      <VersionChooser doc={doc} slug={slug} />
    </div>
  )
}

export default DocumentViewer
