'use client'
import { useSearchParams } from 'next/navigation'
import { Zilla_Slab } from 'next/font/google'
import Link from 'next/link'
import { Topics, Authors } from '@/app/components/DataDisplay'
import { Status, ItemBadge } from '@/app/components/Badges'
import { epoch2datestring } from '../utils/epoch2datestring'
import searchDocs, { CustomSearchResult } from '@/app/utils/searchDocs'
import { useEffect } from 'react'
import { create } from 'zustand'
import { navigate } from '@/app/actions'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500', '700'] })

interface SearchState {
  results: CustomSearchResult[]
  setResults: (newResults: CustomSearchResult[]) => void
}
const useSearchStore = create<SearchState>((set) => ({
  results: [],
  setResults: (newResults: CustomSearchResult[]) =>
    set({ results: newResults }),
}))

const SearchResult = ({ result }: { result: CustomSearchResult }) => {
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
    navigate(`/document/view/${id}`)
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
  const searchParams = useSearchParams()
  const search = searchParams.get('q') as string
  const searchStore = useSearchStore((state) => state.results)
  const setSearchStore = useSearchStore((state) => state.setResults)
  useEffect(() => {
    setSearchStore(searchDocs(search))
  }, [search])

  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-xl mb-4 p-2'>
        <span className='font-bold'>Showing results for: </span>
        {`"`}
        {search}
        {`"`}
      </h1>
      {searchStore.length === 0 ? (
        <p className='text-lg px-2'>No results found.</p>
      ) : (
        searchStore.map((result) => (
          <SearchResult key={result.id} result={result} />
        ))
      )}
    </div>
  )
}
