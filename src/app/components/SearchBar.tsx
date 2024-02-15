'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchBar({
  onSubmit,
}: Readonly<{ onSubmit?: () => void }>) {
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push(`/search?q=${encodeURIComponent(searchInput)}`)
    onSubmit && onSubmit()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`)
      onSubmit && onSubmit()
    }
  }

  return (
    <div className='mx-2 flex flex-nowrap gap-2'>
      <input
        type='text'
        className='py-3 px-5 rounded-xl text-slate-800 flex-grow flex-shrink min-w-0'
        name='q'
        placeholder='Search...'
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        value={searchInput}
      />
      <button
        type='submit'
        className='p-2.5 border-2 rounded-xl hover:bg-blue-300 flex-shrink'
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  )
}
