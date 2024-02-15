'use client'
import Konami from 'react-konami-code'
import { Snowfall } from 'react-snowfall'
import { useEffect, useState } from 'react'
import { nationalities } from '@/app/db/data'

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
  }, [])

  return (
    <>
      <Konami action={handleKonami} />
      {snowfallActivated && (
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
      )}
    </>
  )
}
