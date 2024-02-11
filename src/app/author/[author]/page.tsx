import { authors, affiliations, nationalities } from '../../db/data'
import { Zilla_Slab } from 'next/font/google'
import Link from 'next/link'
import { Fragment } from 'react'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

export default function Page({
  params,
}: Readonly<{
  params: { author: string }
}>) {
  const authorData = authors[params.author]
  // console.log(authorData)
  if (!authorData) {
    return
  }

  const { name, affiliation, image, nationality, formerAffiliations } =
    authorData

  const MainPosition = () => {
    const mainAffiliationShort = affiliation[0].split('@')[1]
    const mainPosition = affiliation[0].split('@')[0]
    const mainAffiliation = affiliations[mainAffiliationShort]
    return (
      <>
        <span>{mainPosition} at </span>
        <Link href={`/affiliation/${mainAffiliationShort}`}>
          {mainAffiliation.name}
        </Link>
      </>
    )
  }

  const OtherPositions = () => {
    if (affiliation.length === 1) return
    return (
      <>
        <h1 className='text-3xl md:my-6 my-4 font-serif'>Other Positions:</h1>
        {affiliation.slice(1).map((a: string, i: number) => {
          const position = a.split('@')[0]
          const affiliation = affiliations[a.split('@')[1]].name
          return (
            <Fragment key={`${position}@${affiliation}`}>
              <span className='text-slate-500 text-lg'>
                {position} at{' '}
                <Link href={`/affiliation/${a.split('@')[1]}`}>
                  {affiliation}
                </Link>
              </span>
            </Fragment>
          )
        })}
      </>
    )
  }

  const FormerPositions = () => {
    if (!formerAffiliations) return null
    return (
      <>
        <h1 className='text-3xl md:my-6 my-4 font-serif'>Former Positions:</h1>
        {formerAffiliations?.map((a: string, i: number) => {
          const position = a.split('@')[0]
          const affiliation = affiliations[a.split('@')[1]].name

          return (
            <Fragment key={`${position}@${affiliation}`}>
              <span className='text-slate-500 text-lg'>
                {position} at{' '}
                <Link href={`/affiliation/${a.split('@')[1]}`}>
                  {affiliation}
                </Link>
              </span>
            </Fragment>
          )
        })}
      </>
    )
  }

  const NationalityDisplay = ({
    nationality,
  }: Readonly<{ nationality: string }>) => {
    const nationalityData = nationalities[nationality]
    const { demonym, flag } = nationalityData
    return (
      <div className='flex items-center'>
        <img src={flag} className='w-10 border-2 border-slate-200' />
        <span className='mx-3 font-semibold'>{demonym}</span>
      </div>
    )
  }

  const Bio = () => {
    const { bio } = authorData
    if (!bio) return null

    return (
      <>
        <h1 className='text-3xl md:my-6 my-4 font-serif'>Bio:</h1>
        {authorData.website ? (
          <h2 className='mb-4 text-lg'>
            You can visit me at:{' '}
            <a href={authorData.website}>{authorData.website}</a>
          </h2>
        ) : null}
        <p>{authorData.bio}</p>
      </>
    )
  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center max-w-3xl mx-auto'>
        <div className='aspect-square w-[60vw] md:w-[30vw] lg:w-[20vw] 2xl:w-[15vw] overflow-hidden mx-auto mb-4'>
          <img
            alt='profile picture'
            className='rounded-full mx-auto object-cover w-full h-full border-slate-800 border-4'
            src={image}
          />
        </div>
        <div>
          <div className='grid grid-cols-1 grid-rows-2 mx-auto gap-y-3 sm:max-w-[60vw]'>
            <span
              className={`${zillaSlab.className} font-bold text-5xl text-center md:text-left`}
            >
              {name.first}
              {name.nickname ? ` "${name.nickname}"` : null} {name.last}
            </span>
            <div className='text-slate-600 text-md sm:text-lg'>
              <MainPosition />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-3xl mx-auto grid grid-cols-1 justify-center'>
        <hr className='mx-auto w-full h-1 border-0 bg-slate-200 my-2 rounded-md' />
        <OtherPositions />
        <FormerPositions />
        <h1 className='text-3xl md:my-6 my-4 font-serif'>
          Ethnicity and Nationality:
        </h1>
        <div className='flex gap-2 flex-wrap'>
          {nationality.map((n: string) => (
            <Fragment key={n}>
              <NationalityDisplay nationality={n} />
            </Fragment>
          ))}
        </div>
        <Bio />
      </div>
    </div>
  )
}
