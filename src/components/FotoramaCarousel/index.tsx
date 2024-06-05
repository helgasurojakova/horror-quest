'use client'
import React, { FC, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Thumbs, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

interface Props {
  data: string[]
}

const FotoramaCarousel: FC<Props> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const onSlideChange = (swiper: any) => {
    // console.log(swiper)
  }

  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={onSlideChange}
        modules={[Thumbs, Navigation, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        autoplay
        loop
      >
        {data.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src={`/${image}.png`}
              alt={`Slide ${index}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ height: '8px' }}></div>
      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        slidesPerView={data.length}
        spaceBetween={8}
      >
        {data.map((image: string, index: number) => (
          <SwiperSlide key={index} style={{ cursor: 'pointer' }}>
            <Image
              src={`/${image}.png`}
              alt={`Slide ${index}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default FotoramaCarousel
