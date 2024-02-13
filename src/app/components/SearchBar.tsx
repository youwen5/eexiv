'use client'
import { navigate } from '@/app/actions'
import { useState } from 'react'

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/search?q=${searchInput.split(' ').join('+')}`)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${encodeURIComponent(searchInput)}`)
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
