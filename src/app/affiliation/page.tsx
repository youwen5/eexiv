import { affiliations } from '@/app/db/data'
import { notFound } from 'next/navigation'
import { Zilla_Slab } from 'next/font/google'
import getAffiliations from './getAffiliations'
import { Fragment } from 'react'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

export function generateStaticParams() {
  const affiliationsList = Object.keys(affiliations)
  return affiliationsList.map((shortName) => ({ shortName }))
}

const AffiliationCard = ({
  params,
}: Readonly<{ params: { shortName: string } }>) => {
  const { shortName } = params
  const { name, short, image } = affiliations[shortName]
  if (!name) {
    notFound()
  }

  return (
    <div className='m-4'>
      <div className='grid grid-cols-1 max-w-3xl mx-auto'>
        <div className='mx-auto mb-4 max-w-3xl md:w-auto md:h-[40vw] lg:h-[20vw] rounded-lg shadow-lg shadow-slate-400'>
          <img
            alt='profile'
            className='rounded-lg mx-auto p-8 object-cover w-full h-full'
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
    </div>
  )
}

const Page = () => {
  const allAffiliations = getAffiliations()

  return (
    <div className='p-6'>
      <h1 className={`${zillaSlab.className} text-6xl text-center mb-10`}>
        Affiliations
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
