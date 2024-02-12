import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className={`flex flex-col sm:flex-row justify-center p-5 m-2 items-center`}
    >
      <h1 className='text-5xl md:text-8xl font-bold m-2'>404</h1>
      <div className='border-2 border-black h-20 rounded-md m-2 hidden sm:inline text-center sm:text-left' />
      <hr className='border-2 border-black w-40 rounded-md sm:hidden' />
      <div className='grid grid-cols-1 m-2 text-center sm:text-left'>
        <p>Could not find requested resource</p>
        <Link href='/'>Return Home</Link>
      </div>
    </div>
  )
}
