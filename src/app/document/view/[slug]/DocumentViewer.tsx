import { DocumentType, documents } from '@/app/db/data'
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

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

export default function DocumentViewer({ slug }: Readonly<{ slug: string }>) {
  const { manifest, abstract, file, citation } = documents[slug]
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
            text-wrap
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
      <ItemBadge itemName={type as DocumentType} />
      <Status statusName={status} />
      <span className='inline-block border-gray-200 border-2 rounded px-2 py-1.5 mr-2'>
        Revision {latest}
      </span>
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
      <Link
        href={`/download/${slug}/file${latest}${file === 'other' ? '' : `.${file}`}`}
        download={`${slug}-rev-${latest}${file === 'other' ? '' : `.${file}`}`}
        target='_blank'
      >
        <button className='button-default'>
          Download{' '}
          {(() => {
            switch (file) {
              case 'other':
                return <></>
              case 'tar.gz':
                return 'Tarball'
              default:
                return file.toUpperCase()
            }
          })()}
        </button>
      </Link>
    </div>
  )
}
