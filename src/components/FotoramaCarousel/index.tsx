'use client'
import React, { FC, useEffect } from 'react'
import Image from 'next/image'

interface Props {
  data: string[]
}

const FotoramaCarousel: FC<Props> = ({ data }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Fotorama) {
      window.$('.fotorama').fotorama()
    }
  }, [])

  return (
    <div
      className="fotorama"
      data-width="100%"
      data-ratio="400/265"
      data-autoplay="true"
      data-loop="true"
      data-allowfullscreen="true"
      data-nav="thumbs"
    >
      {data.map((image: string, index: number) => (
        <Image
          key={index}
          src={`/${image}.png`}
          alt={`Slide ${index}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      ))}
    </div>
  )
}

export default FotoramaCarousel
