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

  const redirectToQuest = () => {
    if (isActive) {
      router.push(`quest/${data.key}`)
    }
  }

  return (
    <div
      onClick={() => redirectToQuest()}
      className="quest-card relative
      2xl:w-4/12 w-full 
      lg:h-full h-fit
      "
    >
      <div
        style={{ backgroundImage: `url(/${data.key}.jpg)` }}
        className={`${isActive && 'cursor-pointer'} card-image relative
        lg:grayscale-[100%] grayscale-[0%] hover:grayscale-[0%] transition
        bg-cover bg-center bg-no-repeat shadow-xl
        lg:h-full h-80`}
      >
        <div className="inside-card w-full absolute bottom-0">
          <h1
            className={`${rubikMono.className} title-holder p-4 bg-neutral-800 bg-opacity-70`}
          >
            {data.title}
          </h1>
          {isActive && (
            <div className="intro-holder static lg:block overflow-hidden hidden">
              <p className="p-4 text-sm leading-relaxed bg-neutral-800 bg-opacity-70">
                {data.intro}
              </p>
            </div>
          )}
        </div>
      </div>
      {isActive && (
        <div className="intro-holder static lg:absolute shadow-xl overflow-hidden">
          <p className="p-4 text-sm leading-relaxed bg-neutral-900">
            {data.intro}
          </p>
        </div>
      )}
    </div>
  )
}

export default Card
