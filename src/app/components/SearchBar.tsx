'use client'
import { create } from 'zustand'
import { navigate } from '@/app/actions'

interface SearchBarState {
  searchInput: string
  setSearchInput: (newInput: string) => void
}

const useSearchBarStore = create<SearchBarState>((set) => ({
  searchInput: '',
  setSearchInput: (newInput) => set({ searchInput: newInput }),
}))

export default function SearchBar() {
  const searchBarStore = useSearchBarStore((state) => state.searchInput)
  const setSearchBarStore = useSearchBarStore((state) => state.setSearchInput)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    navigate(`/search?q=${searchBarStore.split(' ').join('+')}`)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarStore(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      navigate(`/search?q=${searchBarStore.split(' ').join('+')}`)
    }
  }

  return (
    <div className='w-full flex flex-nowrap'>
      <input
        type='text'
        className='py-3 px-5 rounded-xl text-slate-800 flex-grow'
        name='q'
        placeholder='Search...'
        onChange={handleInputChange}
        value={searchBarStore}
        onKeyDown={handleKeyPress}
      />
      <button
        type='submit'
        className='p-2.5 mx-4 border-2 rounded-xl hover:bg-blue-300 flex-shrink'
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  )
}
