'use client'
import styles from './documentViewer.module.css'
import { Zilla_Slab } from 'next/font/google'
import { saveAs } from 'file-saver'
import {
  DocumentType,
  documents,
  topics as topicList,
  authors as authorList,
} from '../../../db/data'
import { navigate } from './actions'
import Link from 'next/link'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

function epoch2datestring(epoch: number): string {
  // Create a new Date object from the epoch
  const date = new Date(epoch * 1000)

  // Format the date to the specified format
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short', // abbreviated month name
    day: '2-digit', // day as two digits
    year: 'numeric', // four digit year
  })

  return formattedDate
}

export default function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const doc = documents[params.slug]
  if (!doc) {
    navigate('/404')
    return
  }
  const { abstract, file } = doc
  const { title, authors, topics, dates, references, code, type, latest } =
    doc.manifest

  const handleDownloadLatest = () => {
    saveAs(
      `/download/${params.slug}/file${latest}.pdf`,
      `${params.slug}-rev-${latest}.pdf`
    )
  }

  const generateTopics = () => {
    return (
      <>
        <span className='font-bold'>Topics: </span>
        {topics.map((t: string, i) => (
          <>
            <Link href={topicList[t].wiki} target='_blank'>
              {topicList[t].name}
            </Link>
            {i !== topics.length - 1 ? ', ' : null}
          </>
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
            <>
              <Link href={c} target='_blank'>
                {c}
              </Link>
              {i !== code.length - 1 ? ', ' : null}
            </>
          ))}
        </>
      )
    }
  }

  const generateAuthors = () => {
    return (
      <>
        {authors.map((a: string, i) => (
          <>
            <Link href={`/author/${a}`} target='_blank'>
              {authorList[a].name.first} {authorList[a].name.last}
            </Link>
            {i !== authors.length - 1 && authors.length > 2 ? ', ' : null}
            {i === authors.length - 2 ? ' and ' : null}
          </>
        ))}
      </>
    )
  }

  const generateItemBadge = (itemName: DocumentType) => {
    let itemStyle: string = 'px-3 py-1 rounded inline-block w-fit mr-2 mt-4 '
    switch (itemName) {
      case 'report':
        itemStyle += 'bg-green-400 text-slate-50'
        break
      case 'presentation':
        itemStyle += `bg-blue-400 text-slate-50`
        break
      case 'white paper':
        itemStyle += `bg-fuchsia-700 text-slate-50`
        break
      case 'other':
        itemStyle += `bg-gray-400 text-slate-50`
        break
    }
    return (
      <p className={itemStyle}>
        {itemName.charAt(0).toUpperCase()}
        {itemName.slice(1)}
      </p>
    )
  }

  return (
    <div>
      <div>
        <h3
          className={`
            ${styles.itemTitle}
            text-slate-800
            ${zillaSlab.className}
          `}
        >
          {title}
        </h3>
        <p className={`text-slate-800 mt-2`}>{generateAuthors()}</p>
        <p className='mt-4'>
          Latest revision published{' '}
          <span className='font-bold'>
            {epoch2datestring(dates[dates.length - 1])}
          </span>
        </p>
        {generateItemBadge('report')}
        <p className='inline-block'>Revision {latest}</p>
        <hr className='w-10/12 my-4' />
        <h4 className='text-2xl mt-5 font-serif font-semibold'>Abstract</h4>
        <p className='my-4 text-xl text-slate-600 font-serif  '>{abstract}</p>
        <p className='my-2'>{generateTopics()}</p>
        <p className='my-2'>{generateCode()}</p>
        <button
          className='bg-blue-600 text-slate-100 hover:bg-blue-400 font-semibold rounded py-2 px-4 my-2'
          onClick={handleDownloadLatest}
        >
          Download {file !== 'other' ? file.toUpperCase() : null}
        </button>
      </div>
    </div>
  )
}
