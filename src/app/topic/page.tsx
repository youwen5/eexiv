import { documents, topics } from '@/app/db/data'
import cardEffects from '@/app/styles/cardEffects.module.css'
import string2hex from '@/app/utils/string2hex'
import { Zilla_Slab } from 'next/font/google'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

const TopicCard = ({ params }: Readonly<{ params: { shortName: string } }>) => {
  const { shortName } = params
  const { name, description } = topics[shortName]
  if (!name) {
    notFound()
  }

  return (
    <Link
      className={`${cardEffects['card-large']} border-4 rounded-lg border-gray-300 hover:border-blue-500 p-8 my-4 w-full cursor-pointer shadow-slate-300 shadow-md text-left m-4 no-link-style`}
      href={`/topic/${shortName}`}
      style={{ backgroundColor: string2hex(description) }}
    >
      <div className='grid grid-cols-1 max-w-3xl mx-auto'>
        <span className={`${zillaSlab.className} font-bold text-4xl`}>
          {name}
        </span>
        <div className='text-slate-600 text-lg mt-4'>{description}</div>
      </div>
    </Link>
  )
}

const getNumberOfDocumentsByTopic = (topicId: string) => {
  // Filter documents by author
  const filteredDocuments = Object.entries(documents)
    .filter(([_, doc]) => doc.manifest.topics.includes(topicId))
    .map(([slug, doc]) => ({ slug, doc }))

  return filteredDocuments.length
}

const Page = () => {
  const sortedTopics = Object.entries(topics).sort((a, b) => {
    const numDocsA = getNumberOfDocumentsByTopic(a[0])
    const numDocsB = getNumberOfDocumentsByTopic(b[0])
    return numDocsB - numDocsA
  })

  return (
    <div className='p-0 md:p-6'>
      <h1 className={`${zillaSlab.className} text-6xl text-center mb-10`}>
        Topics
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-8'>
        {sortedTopics.map((entry) => {
          return (
            <Fragment key={entry[0]}>
              <TopicCard key={entry[0]} params={{ shortName: entry[0] }} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Page
