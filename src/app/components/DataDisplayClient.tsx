// these variants of the data display compnents are designed for client side components
// and fetch data asynchronously
import { loadAllTopics, loadAllAuthors } from '@/app/db/loaders'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import Link from 'next/link'

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
