import { affiliations } from '@/app/db/data'
import { notFound } from 'next/navigation'
import { Zilla_Slab } from 'next/font/google'
import { Fragment } from 'react'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

export default function Page({
  params,
}: Readonly<{ params: { shortName: string } }>) {
  const { shortName } = params
  const { name, short, image, description } = affiliations[shortName]
  if (!name) {
    notFound()
  }

  const Description = () => {
    return (
      <>
        {description.split('[linebreak]').map((d, i) => (
          <>
            <div key={i} className='text-lg sm:text-md font-serif'>
              {d}
            </div>
            <br className='m-1' />
          </>
        ))}
      </>
    )
  }

  return (
    <div>
      <div className='grid grid-cols-1 max-w-3xl mx-auto'>
        <div className='mx-auto mb-4 w-[90vw] md:w-auto md:h-[40vw] lg:h-[20vw]'>
          <img
            alt='profile picture'
            className='rounded-sm mx-auto object-cover w-full h-full'
            src={image}
          />
        </div>
        <span className={`${zillaSlab.className} font-bold text-4xl text-left`}>
          {name}
        </span>
        <div className='text-slate-600 text-2xl mt-4'>{short}</div>
      </div>
      <div className='max-w-3xl mx-auto grid grid-cols-1'>
        <hr className='mx-auto w-full h-1 border-0 bg-slate-200 my-2 rounded-md' />
        <Description />
      </div>
    </div>
  )
}
