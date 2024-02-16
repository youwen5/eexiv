'use client'
import Konami from 'react-konami-code'
import { Snowfall } from 'react-snowfall'
import { useEffect, useState } from 'react'
import { nationalities } from '@/app/db/data'
import { Fragment } from 'react'

export default function KonamiSnowfall({
  nationalityList,
}: Readonly<{
  nationalityList: string[]
}>) {
  const [snowfallActivated, setSnowfallActivated] = useState<boolean>(false)
  const [images, setImages] = useState<HTMLImageElement[]>([])

  const handleKonami = () => {
    setSnowfallActivated(!snowfallActivated)
  }

  useEffect(() => {
    const imagesTemp: HTMLImageElement[] = []
    nationalityList.forEach((n) => {
      const { flag } = nationalities[n]
      const image = new Image()
      image.src = flag
      imagesTemp.push(image)
    })
    setImages(imagesTemp)
  }, [nationalityList])

  const NationalityDisplay = ({
    nationality,
  }: Readonly<{ nationality: string }>) => {
    const nationalityData = nationalities[nationality]
    const { demonym, flag } = nationalityData
    return (
      <div className='flex items-center'>
        <img
          src={flag}
          className='w-10 shadow-md shadow-slate-300'
          alt={`${demonym} flag`}
        />
        <span className='mx-3 font-semibold'>{demonym}</span>
      </div>
    )
  }

  return (
    <>
      <Konami action={handleKonami} />
      {snowfallActivated && (
        <div>
          <div className='nationalities-list'>
            {nationalityList.map((n: string) => (
              <Fragment key={n}>
                <NationalityDisplay nationality={n} />
              </Fragment>
            ))}
          </div>
          <Snowfall
            snowflakeCount={500}
            color='white'
            images={images}
            radius={[20, 60]}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
              pointerEvents: 'none',
              height: `${document.documentElement.scrollHeight}px`,
            }}
          />
        </div>
      )}
    </>
  )
}
