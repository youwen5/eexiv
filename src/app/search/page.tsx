'use client'
import { useSearchParams } from 'next/navigation'
import { Zilla_Slab } from 'next/font/google'
import { Topics, Authors } from '@/app/components/DataDisplay'
import { Status, ItemBadge } from '@/app/components/Badges'
import { epoch2datestring } from '../utils/epoch2datestring'
import searchDocs, { CustomSearchResult } from '@/app/utils/searchDocs'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

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
      className='border-4 rounded-lg border-gray-300 hover:border-blue-500 p-5 my-4 w-full cursor-pointer'
      onClick={handleClick}
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
      <div className='mb-4'>
        <ItemBadge itemName={type} /> <Status statusName={status} />
      </div>
      <h2 className={`${zillaSlab.className} text-2xl`}>Abstract</h2>
      <p className='py-2 text-md text-slate-700 font-serif text-lg text-balance'>
        {abstract}
      </p>
    </div>
  )
}

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = decodeURIComponent(searchParams.get('q') as string)

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

  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-xl mb-4 p-2'>
        <span className='font-bold'>Showing results for: </span>
        {`"`}
        {search}
        {`"`}
      </h1>
      {data.length === 0 ? (
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
