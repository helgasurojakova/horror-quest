'use client'
import Image from 'next/image'
import { FC, useState } from 'react'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Autoplay, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CaroselDataItem } from '@/types'

interface Props {
  data: CaroselDataItem[]
}

const Carousel: FC<Props> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Thumbs, Navigation, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        autoplay
        loop
      >
        {data.map((item: CaroselDataItem, index: number) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image
              src={`/${item.name}`}
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
        {data.map((item: CaroselDataItem, index: number) => (
          <SwiperSlide key={index} style={{ cursor: 'pointer' }}>
            <Image
              src={`/${item.name}`}
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

export default Carousel
