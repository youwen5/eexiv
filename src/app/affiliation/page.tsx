import { affiliations } from '@/app/db/data'
import cardEffects from '@/app/styles/cardEffects.module.css'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
import getAffiliations from './getAffiliations'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

const AffiliationCard = ({
  params,
}: Readonly<{ params: { shortName: string } }>) => {
  const { shortName } = params
  const { name, short, image } = affiliations[shortName]
  if (!name) {
    notFound()
  }

  return (
    <Link
      className={`${cardEffects['card-large']} border-4 rounded-lg border-gray-300 hover:border-blue-500 p-5 my-4 w-full cursor-pointer shadow-slate-300 shadow-md text-left m-4 no-link-style pb-8`}
      href={`/affiliation/${shortName}`}
    >
      <div className='grid grid-cols-1 max-w-3xl mx-auto'>
        <div className='mx-auto mb-4 max-w-3xl md:w-auto md:h-[40vw] lg:h-[20vw] rounded-lg'>
          <Image
            alt='profile'
            width={1000}
            height={1000}
            className='rounded-lg mx-auto p-8 object-contain w-full h-full'
            src={image}
          />
        </div>
        <br />
        <span
          className={`${zillaSlab.className} font-bold text-4xl text-center`}
        >
          {short}
        </span>
        <div className='text-slate-600 text-2xl mt-4 text-center'>{name}</div>
      </div>
    </Link>
  )
}

const Page = () => {
  const allAffiliations = getAffiliations()

  return (
    <div className='p-6'>
      <h1 className={`${zillaSlab.className} text-6xl text-center mb-10`}>
        Affiliations
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-8'>
        {allAffiliations.map((affiliationShortName) => {
          const { name, short } = affiliations[affiliationShortName]
          return (
            <Fragment key={name}>
              <AffiliationCard
                key={short}
                params={{ shortName: affiliationShortName }}
              />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Page
