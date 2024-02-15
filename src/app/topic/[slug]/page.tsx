import { Zilla_Slab } from 'next/font/google'
import { topics } from '@/app/db/data'
import { notFound } from 'next/navigation'
import string2hex from '@/app/utils/string2hex'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

export function generateStaticParams() {
  const topicsList = Object.keys(topics)
  return topicsList.map((topic) => ({ topic }))
}

export default function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const topic = topics[params.slug]
  if (!topic) notFound()
  const { name, description, wiki } = topic

  return (
    <div
      style={{ backgroundColor: string2hex(description) }}
      className='flex p-4 lg:p-8 mx-auto bg-slate-200 shadow-slate-300 shadow-sm rounded-md max-w-2xl flex-col gap-4'
    >
      <h1 className={`${zillaSlab.className} text-5xl`}>{name}</h1>
      <p className='text-slate-700 text-lg'>{description}</p>
      <p>
        <span className='text-slate-800'>Read more at:</span>{' '}
        <a className='text-wrap hyphens-none' href={wiki}>
          {wiki}
        </a>
      </p>
    </div>
  )
}
