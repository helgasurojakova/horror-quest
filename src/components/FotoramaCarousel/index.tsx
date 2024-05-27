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
      data-ratio="800/530"
      data-autoplay="true"
      data-loop="true"
      data-allowfullscreen="native"
      // data-nav="thumbs"
    >
      {data.map((image: string, index: number) => (
        <div key={index}>
          <Image
            key={index}
            src={`/${image}.png`}
            alt={`Slide ${index}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  )
}

export default FotoramaCarousel
