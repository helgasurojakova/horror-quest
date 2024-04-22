'use client'
import React, { FC } from 'react'
import { Rubik_Mono_One } from 'next/font/google'
import { Quest } from '@/types'
import { useRouter } from 'next/navigation'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

interface Props {
  data: Quest
}

const Card: FC<Props> = (props) => {
  const { data } = props
  const router = useRouter()

  const isActive = data.status === 'active'

  return (
    <div
      onClick={() => router.push(`quest/${data.key}`)}
      className={`${
        isActive && 'cursor-pointer'
      } quest-card relative shadow-xl hover:grayscale-[0%] transition grayscale-[0%] xl:grayscale-[100%] lg:grayscale-[100%] md:grayscale-[0%] sm:grayscale-[0%] 
      xl:w-4/12 lg:w-4/12 h-fit
      2xl:h-full lg:h-full
      pb-0 2xl:pb-48 lg:pb-48
      `}
    >
      <div
        style={{ backgroundImage: `url(/${data.key}.jpg)` }}
        className="h-80 2xl:h-full lg:h-full md:h-64 sm:h-80 bg-no-repeat bg-cover bg-center relative"
      >
        <div className="absolute bottom-0 inside-card">
          <h1 className={`p-4 ${rubikMono.className}`}>{data.title}</h1>
          {isActive && (
            <div className="shadow-xl intro-holder static overflow-hidden hidden 2xl:block lg:block">
              <p className="p-4 bg-neutral-900 leading-relaxed text-sm bg-opacity-70">
                {data.intro}
              </p>
            </div>
          )}
        </div>
      </div>
      {isActive && (
        <div className="shadow-xl intro-holder static xl:absolute lg:absolute md:static sm:static overflow-hidden">
          <p className="p-4 bg-neutral-900 leading-relaxed text-sm">
            {data.intro}
          </p>
        </div>
      )}
    </div>
  )
}

export default Card
