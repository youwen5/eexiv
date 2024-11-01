import { Document } from '@/app/db/data'
import cardEffects from '@/app/styles/cardEffects.module.css'
import { epoch2datestring } from '@/app/utils/epoch2datestring'
import { Zilla_Slab } from 'next/font/google'
import Link from 'next/link'
import { ItemBadge, Status } from './Badges'
import { Authors, Topics } from './DataDisplay'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

const DocumentCard = ({ doc, href }: { doc: Document; href: string }) => {
  const { manifest, abstract } = doc
  const { title, authors, topics, dates, status, type } = manifest
  return (
    <Link href={href} className='no-link-style'>
      <button
        className={`${cardEffects['card-large']} border-4 rounded-lg border-gray-300 hover:border-blue-500 p-5 my-4 w-full cursor-pointer shadow-slate-300 shadow-md text-left`}
      >
        <h2 className={`${zillaSlab.className} text-3xl`}>{title}</h2>
        <p className='text-slate-500 py-2 text-md mt-2'>
          <Authors authors={authors} noLink />
        </p>
        <p className='mb-2 text-slate-700 text-md'>
          Last updated on {epoch2datestring(dates[dates.length - 1])}
        </p>
        <p className='mb-2'>
          <Topics topics={topics} showTitle />
        </p>
        <div className='mb-4 flex flex-wrap gap-2'>
          <ItemBadge itemName={type} /> <Status statusName={status} />
        </div>
        <h2 className={`${zillaSlab.className} text-2xl`}>Abstract</h2>
        <p className='py-2 text-md text-slate-700 font-serif text-lg text-balance'>
          {abstract.substring(0, 500) + (abstract.length > 500 ? '...' : '')}
        </p>
      </button>
    </Link>
  )
}

export default DocumentCard
