'use client'
import { toast } from 'react-toastify'
export default function SearchBar() {
  const handleClick = () => {
    toast.warn('This feature is currently under active development!')
  }
  return (
    <div className='width-[40vw]'>
      <input
        type='text'
        className='py-3 px-5 rounded-xl text-slate-800'
        name='q'
        placeholder='Search...'
      />
      <button
        type='submit'
        className='p-2.5 mx-4 border-2 rounded-xl hover:bg-blue-300'
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  )
}
