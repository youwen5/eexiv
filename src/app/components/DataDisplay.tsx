import { Fragment } from 'react'
import Link from 'next/link'
import {
  reviewer,
  authors as authorList,
  topics as topicList,
} from '@/app/db/data'

const getRepo = (link: string) => {
  if (link.includes('github.com')) {
    const owner = link.split('/')[3]
    const name = link.split('/')[4]
    return `git:${owner}/${name}`
  }
}

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
              {getRepo(c)}
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
  return (
    <>
      {showTitle ? <span className='font-bold'>Topics: </span> : null}
      {topics.map((t: string, i) => (
        <Fragment key={t}>
          <Link href={`/topic/${t}`}>{topicList[t].name}</Link>
          {i !== topics.length - 1 ? ', ' : null}
        </Fragment>
      ))}
    </>
  )
}

export const Authors = ({
  authors,
}: Readonly<{ authors: string[]; noLink?: boolean }>) => {
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

export const Reviewers = ({
  reviewers,
  showTitle = true,
}: Readonly<{ reviewers: reviewer[] | undefined; showTitle?: boolean }>) => {
  if (!reviewers) return null

  return (
    <>
      {showTitle ? <span className='font-bold'>Reviewed by: </span> : null}
      {reviewers.map((r: reviewer, i) => (
        <Fragment key={r.first}>
          <ReviewerDisplay r={r} />
          {i !== reviewers.length - 1 && reviewers.length > 2 ? ', ' : null}
          {i === reviewers.length - 2 ? ' and ' : null}
        </Fragment>
      ))}
    </>
  )
}
