import { Zilla_Slab } from 'next/font/google'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500', '700'] })

export default function Page() {
  return (
    <div className='content text-slate-800'>
      <h1 className='text-3xl text-slate-800 mt-4 mb-4 font-serif'>Status</h1>
      <p
        className={`${zillaSlab.className} p-6 rounded-lg bg-green-600 text-xl text-white text-center`}
      >
        eeXiv is <strong>online</strong>. All systems{' '}
        <strong>operational</strong>.
      </p>
    </div>
  )
}
