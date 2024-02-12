'use client'
import { Zilla_Slab } from 'next/font/google'
import {
  DocumentType,
  documents,
  topics as topicList,
  authors as authorList,
  DocumentStatus,
  reviewer,
} from '@/app/db/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Fragment, useEffect } from 'react'
import { epoch2datestring } from '@/app/utils/epoch2datestring'
import { toast } from 'react-toastify'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

export default function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const doc = documents[params.slug]
  if (!doc) {
    notFound()
  }
  const { abstract, file, citation } = doc
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
  } = doc.manifest

  useEffect(() => {
    if (status === 'reviewed' && !reviewers) {
      toast.warn(
        `This document is marked reviewed, but the author 
        forgot to add a list of reviewers.`
      )
    }
  }, [])

  const Topics = () => {
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

  const Code = () => {
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

  const Authors = () => {
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

  const References = () => {
    if (!references) return null
    return (
      <>
        <span className='font-bold'>References: </span>
        {references.map((r: string, i) => (
          <Fragment key={r}>
            <Link href={r} target='_blank'>
              {r}
            </Link>
            {i !== references.length - 1 ? ', ' : null}
          </Fragment>
        ))}
      </>
    )
  }

  const Status = ({ statusName }: Readonly<{ statusName: DocumentStatus }>) => {
    let text = ''
    let itemStyle: string = ''!
    switch (statusName) {
      case 'draft':
        text = 'Draft'
        itemStyle += 'badge-draft'
        break
      case 'published no review':
        text = 'Published'
        itemStyle += 'badge-published'
        break
      case 'reviewed':
        text = 'Peer Reviewed'
        itemStyle += 'badge-reviewed'
        break
      case 'under review':
        text = 'Pending Review'
        itemStyle = 'badge-under-review'
        break
    }
    return <span className={itemStyle}>{text}</span>
  }

  const ItemBadge = ({ itemName }: Readonly<{ itemName: DocumentType }>) => {
    let text = ''
    let itemStyle: string = ''!
    switch (itemName) {
      case 'report':
        itemStyle = 'badge-report'
        text = 'Report'
        break
      case 'presentation':
        text = 'Presentation'
        itemStyle = 'badge-presentation'
        break
      case 'white paper':
        text = 'White Paper'
        itemStyle = 'badge-white-paper'
        break
      case 'datasheet':
        text = 'Datasheet'
        itemStyle = 'badge-datasheet'
        break
      case 'dwm':
        text = 'DWM'
        itemStyle = 'badge-dwm'
        break
      case 'guide':
        text = 'Guide'
        itemStyle = 'badge-guide'
        break
      case 'other':
        text = 'Other'
        itemStyle = 'badge-other'
        break
    }
    return <span className={itemStyle}>{text}</span>
  }

  const Reviewers = () => {
    if (!reviewers) return null
    const ReviewerDisplay = ({ r }: Readonly<{ r: reviewer }>) => {
      if (r.profile) {
        return (
          <>
            <Link href={`/author/${r.profile}`} target='_blank'>
              {r.first} {r.last}
            </Link>
          </>
        )
      }
      if (r.url) {
        return (
          <>
            <a href={r.url} target='_blank'>
              {r.first} {r.last}
            </a>
          </>
        )
      }
      return (
        <span>
          {r.first} {r.last}
        </span>
      )
    }

    return (
      <>
        <span className='font-bold'>Reviewers: </span>
        {reviewers.map((r: reviewer, i) => (
          <Fragment key={i}>
            <ReviewerDisplay r={r} />
            {i !== reviewers.length - 1 && reviewers.length > 2 ? ', ' : null}
            {i === reviewers.length - 2 ? ' and ' : null}
          </Fragment>
        ))}
      </>
    )
  }

  return (
    <div className='max-w-4xl lg:max-w-6xl mx-auto'>
      <h1
        className={`
            text-slate-800 font-bold text-5xl mb-4
            ${zillaSlab.className}
            text-wrap
          `}
      >
        {title}
      </h1>
      <p className={`text-slate-800 mt-2`}>
        <Authors />
      </p>
      <p className='mt-4'>
        Latest revision published{' '}
        <span className='font-bold'>
          {epoch2datestring(dates[dates.length - 1])}
        </span>
      </p>
      <ItemBadge itemName={type as DocumentType} />
      <span className='inline-block border-gray-200 border-2 rounded px-2 py-1.5 mr-2'>
        Revision {latest}
      </span>
      <Status statusName={status} />
      <hr className='my-4' />
      <h4 className='text-2xl mt-5 font-serif font-semibold'>Abstract</h4>
      <p className='my-4 text-xl text-slate-600 font-serif text-balance'>
        {abstract}
      </p>
      <p className='my-2'>
        <Topics />
      </p>
      <p className='my-2'>
        <Code />
      </p>
      <p className='my-2'>
        <References />
      </p>
      <p className='my-2'>
        <Reviewers />
      </p>
      <p className='my-2'>
        <span className='font-bold'>Cite as: </span>
        {citation ? <>{citation}</> : <>eeXiv:{params.slug}</>}
      </p>
      <Link
        href={`/download/${params.slug}/file${latest}${file === 'other' ? '' : `.${file}`}`}
        download={`${params.slug}-rev-${latest}${file === 'other' ? '' : `.${file}`}`}
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
