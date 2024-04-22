import React, { FC } from 'react'
import { Rubik_Mono_One } from 'next/font/google'
import { Quest } from '@/types'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

interface Props {
  data: Quest
}

const Card: FC<Props> = (props) => {
  const { data } = props

  const isActive = data.status === 'active'

  return (
    <div
      className={`${
        isActive && 'cursor-pointer'
      } quest-card relative hover:grayscale-[0%] transition grayscale-[0%] xl:grayscale-[100%] lg:grayscale-[100%] md:grayscale-[0%] sm:grayscale-[0%] xl:w-4/12 lg:w-4/12 h-fit`}
    >
      <div
        style={{ backgroundImage: `url(/${data.key}.jpg)` }}
        className="h-80 bg-no-repeat bg-cover bg-center relative"
      >
        <h1 className={`absolute bottom-0 p-4 ${rubikMono.className}`}>
          {data.title}
        </h1>
      </div>
      {isActive && (
        <div className="description-holder static xl:absolute lg:absolute md:static sm:static overflow-hidden">
          <p className="p-4 bg-neutral-900 leading-relaxed text-sm">
            {data.description}
          </p>
        </div>
      )}
    </div>
  )
}

export default Card
