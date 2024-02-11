'use client'
export default function SearchBar() {
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
      >
        Search
      </button>
    </div>
  )
}
