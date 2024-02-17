'use client'
import Konami from 'react-konami-code'
import { Snowfall } from 'react-snowfall'
import { Fragment, useEffect, useState } from 'react'
import { nationalities } from '@/app/db/data'
import NextImage from 'next/image'

const NationalityDisplay = ({
  nationality,
}: Readonly<{ nationality: string }>) => {
  const nationalityData = nationalities[nationality]
  const { demonym, flag } = nationalityData
  return (
    <div className='flex items-center'>
      <NextImage
        src={flag}
        width={100}
        height={100}
        className='w-10 shadow-md shadow-slate-300'
        alt={`${demonym} flag`}
      />
      <span className='mx-3 font-semibold'>{demonym}</span>
    </div>
  )
}

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
