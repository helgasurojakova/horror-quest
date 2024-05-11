'use client'
import React, { FC } from 'react'
import { Carousel } from 'antd'
import Image from 'next/image'
// import { Image } from 'antd'

interface Props {
  data: string[]
}

const QuestCarousel: FC<Props> = (props) => {
  console.log(props.data[0])

  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <Carousel
      style={{ padding: '0 0 16px 0', width: '800px' }}
      className="p-4 2xl:px-60 lg:px-40 md:px-20 sm:px-4"
      afterChange={onChange}
      arrows
      autoplay
    >
      {props.data.map((image: string, index: number) => {
        return (
          <div
            key={index}
            className="pb-4"
            style={{
              height: '600px',
            }}
          >
            <Image
              width={800}
              height={500}
              src={`/${image}.png`}
              alt={image}
              style={{
                objectFit: 'cover',
                height: '600px',
              }}
            />
          </div>
        )
      })}
    </Carousel>
  )
}

export default QuestCarousel
