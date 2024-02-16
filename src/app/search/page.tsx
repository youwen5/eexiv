'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { Zilla_Slab } from 'next/font/google'
import { Topics, Authors } from '@/app/components/DataDisplay'
import { Status, ItemBadge } from '@/app/components/Badges'
import { epoch2datestring } from '../utils/epoch2datestring'
import searchDocs, { CustomSearchResult } from '@/app/utils/searchDocs'
import { useSuspenseQuery } from '@tanstack/react-query'
import cardEffects from '@/app/styles/cardEffects.module.css'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { hash as fnv } from 'fnv-plus'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500', '700'] })

const SearchResult = ({
  result,
  redirect,
}: {
  result: CustomSearchResult
  redirect: (input: string) => void
}) => {
  const { manifest, abstract, id } = result
  const { title, authors, topics, dates, status, type } = manifest

  /* 
  this is not a recommended design pattern for creating a clickable object,
  as it's terrible for accessibility. we should add accessibility tags to make it
  recognizable as a clickable item.
  the reason we aren't simply wrapping the search result in a <Link> tag is because
  React does not support nested <a> tags and it overrides the links displayed inside.
  this click handling logic simply checks to see if the element clicked is a nested link
  and fires a redirect if not, to avoid overriding links in the children
  */
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    let target = event.target as HTMLElement
    while (target != null) {
      if (target.nodeName === 'A') {
        return
      }
      target = target.parentNode as HTMLElement
    }
    redirect(`/document/view/${id}`)
  }

  return (
    <div
      className={`${cardEffects['card-large']} border-4 rounded-lg border-gray-300 hover:border-blue-500 p-5 my-4 w-full cursor-pointer`}
      onClick={handleClick}
      role='button' // this is a critical DEI concern as we have marked this element as a button with ARIA role, yet we have not supported button accessiblity features
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
    </div>
  )
}

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = decodeURIComponent(searchParams.get('q') as string)

  let invalid = false

  if (search.toLowerCase().startsWith('eexiv')) {
    const id = search.slice(6)

    if (id.length !== 12) {
      invalid = true
    } else {
      const base = id.slice(0, 10)
      const ending = id.slice(10, 12)
      const e_ending = fnv(base).str().substring(0, 2)

      if (ending !== e_ending) {
        invalid = true
      }
    }
  }

  useEffect(() => {
    if (invalid) {
      toast.error('Invalid eeXiv identifier')
    }
  }, [invalid])

  const { data, error } = useSuspenseQuery({
    queryKey: [search],
    queryFn: () => {
      const data = searchDocs(search)
      return data
    },
  })
  if (error) throw error

  const handleRedirect = (input: string) => {
    router.push(input)
  }

  if (data.length === 1) {
    // auto redirect if only one result
    handleRedirect(`/document/view/${data[0].id}`)
  }

  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-xl mb-4 p-2'>
        <span className='font-bold'>Showing results for: </span>
        {`"`}
        {search}
        {`"`}
      </h1>
      {data.length === 0 || invalid ? (
        <p className='text-lg px-2'>No results found.</p>
      ) : (
        data.map((result) => (
          <SearchResult
            key={result.id}
            result={result}
            redirect={handleRedirect}
          />
        ))
      )}
    </div>
  )
}
