import { Zilla_Slab } from 'next/font/google'
import {
  DocumentType,
  documents,
  topics as topicList,
  authors as authorList,
} from '@/app/db/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
import { epoch2datestring } from '@/app/utils/epoch2datestring'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

export function generateStaticParams () {
  const documentsList = Object.keys(documents)
  return documentsList.map((slug) => ({ slug }))
}

export default function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const doc = documents[params.slug]
  if (!doc) {
    notFound()
  }
  const { abstract, file } = doc
  const { title, authors, topics, dates, references, code, type, latest } =
    doc.manifest

  const generateTopics = () => {
    return (
      <>
        <span className='font-bold'>Topics: </span>
        {topics.map((t: string, i) => (
          <Fragment key={t}>
            <Link href={topicList[t].wiki} target='_blank'>
              {topicList[t].name}
            </Link>
            {i !== topics.length - 1 ? ', ' : null}
          </Fragment>
        ))}
      </>
    )
  }

  const generateCode = () => {
    if (code) {
      return (
        <>
          <span className='font-bold'>Code: </span>
          {code.map((c: string, i) => (
            <Fragment key={c}>
              <Link href={c} target='_blank'>
                {c}
              </Link>
              {i !== code.length - 1 ? ', ' : null}
            </Fragment>
          ))}
        </>
      )
    }
  }

  const generateAuthors = () => {
    return (
      <>
        {authors.map((a: string, i) => (
          <Fragment key={a}>
            <Link href={`/author/${a}`} target='_blank'>
              {authorList[a].name.first} {authorList[a].name.last}
            </Link>
            {i !== authors.length - 1 && authors.length > 2 ? ', ' : null}
            {i === authors.length - 2 ? ' and ' : null}
          </Fragment>
        ))}
      </>
    )
  }

  const generateItemBadge = (itemName: DocumentType) => {
    let text = ''
    let itemStyle: string =
      'px-3 py-1.5 rounded inline-block w-fit mr-2 mt-4 text-slate-50 border-2 '
    switch (itemName) {
      case 'report':
        itemStyle += 'bg-green-500 border-green-500'
        text = 'Report'
        break
      case 'presentation':
        text = 'Presentation'
        itemStyle += `bg-blue-500 border-blue-500`
        break
      case 'white paper':
        text = 'White Paper'
        itemStyle += `bg-fuchsia-700 border-fuchsia-700`
        break
      case 'datasheet':
        text = 'Datasheet'
        itemStyle += 'bg-amber-600 border-amber-600'
        break
      case 'dwm':
        text = 'DWM'
        itemStyle += 'bg-rose-950 border-rose-950'
        break
      case 'other':
        text = 'Other'
        itemStyle += `bg-gray-400 border-gray-400`
        break
    }
    return <span className={itemStyle}>{text}</span>
  }

  return (
    <div>
      <div>
        <h1
          className={`
            text-slate-800 font-bold text-5xl mb-4
            ${zillaSlab.className}
          `}
        >
          {title}
        </h1>
        <p className={`text-slate-800 mt-2`}>{generateAuthors()}</p>
        <p className='mt-4'>
          Latest revision published{' '}
          <span className='font-bold'>
            {epoch2datestring(dates[dates.length - 1])}
          </span>
        </p>
        {generateItemBadge(type)}
        <p className='inline-block border-gray-200 border-2 rounded px-2 py-1.5'>
          Revision {latest}
        </p>
        <hr className='my-4' />
        <h4 className='text-2xl mt-5 font-serif font-semibold'>Abstract</h4>
        <p className='my-4 text-xl text-slate-600 font-serif  '>{abstract}</p>
        <p className='my-2'>{generateTopics()}</p>
        <p className='my-2'>{generateCode()}</p>
        <Link
          href={`/download/${params.slug}/file${latest}.${file}`}
          download={`${params.slug}-rev-${latest}.pdf`}
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
    </div>
  )
}
