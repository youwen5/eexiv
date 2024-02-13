import { Fragment } from 'react'
import Link from 'next/link'
import { reviewer } from '@/app/db/data'
import { loadAllTopics, loadAllAuthors } from '@/app/db/loaders'
import { useSuspenseQuery } from '@tanstack/react-query'

export const Code = ({
  code,
  showTitle = true,
}: {
  code: string[] | undefined
  showTitle?: boolean
}) => {
  if (code) {
    return (
      <>
        {showTitle ? <span className='font-bold'>Code: </span> : null}
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

export const References = ({
  references,
  showTitle = true,
}: Readonly<{ references: string[] | undefined; showTitle?: boolean }>) => {
  if (!references) return null
  return (
    <>
      {showTitle ? <span className='font-bold'>References: </span> : null}
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

export const Topics = ({
  topics,
  showTitle = true,
}: Readonly<{ topics: string[]; showTitle?: boolean }>) => {
  'use client'

  const { data, error } = useSuspenseQuery({
    queryKey: ['topics_all'],
    queryFn: () => {
      const data = loadAllTopics()
      return data
    },
  })
  if (error) throw error
  const topicList = data

  return (
    <>
      {showTitle ? <span className='font-bold'>Topics: </span> : null}
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

export const Authors = ({
  authors,
}: Readonly<{ authors: string[]; noLink?: boolean }>) => {
  'use client'

  const { data, error } = useSuspenseQuery({
    queryKey: ['authors_all'],
    queryFn: () => {
      const data = loadAllAuthors()
      return data
    },
  })
  if (error) throw error

  const authorList = data

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

export const Reviewers = ({
  reviewers,
  showTitle = true,
}: Readonly<{ reviewers: reviewer[] | undefined; showTitle?: boolean }>) => {
  if (!reviewers) return null
  const ReviewerDisplay = ({ r }: Readonly<{ r: reviewer }>) => {
    if (r.profile) {
      return (
        <Link href={`/author/${r.profile}`} target='_blank'>
          {r.first} {r.last}
        </Link>
      )
    }
    if (r.url) {
      return (
        <a href={r.url} target='_blank'>
          {r.first} {r.last}
        </a>
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
      {showTitle ? <span className='font-bold'>Reviewed by: </span> : null}
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