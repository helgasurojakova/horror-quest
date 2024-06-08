import React from 'react'
import { quests } from '@/config'
import { Rubik_Mono_One } from 'next/font/google'
import Carousel from '@/components/Carousel'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

export default function Quest({ params }: { params: { slug: string } }) {
  const quest = quests.find((el) => el.key === params.slug)

  return (
    <main className="bg-neutral-800 w-full">
      <section
        className="grayscale-[50%] h-screen flex flex-col justify-center items-center 
        px-4 2xl:px-60 lg:px-40 md:px-20 sm:px-4
        "
      >
        <div
          style={{ backgroundImage: `url(/${quest?.key}.jpg)` }}
          className="bg-center bg-no-repeat bg-cover absolute w-full h-full brightness-50"
        ></div>
        <div
          className="flex flex-col justify-evenly w-full h-full z-10
          pt-20
          "
        >
          <div>
            <div>
              <span className="text-lg">{quest?.type}</span>
              <h1
                className={`${rubikMono.className} text-2xl mb-8 2xl:text-4xl md:text-4xl`}
              >
                {quest?.title}
              </h1>
            </div>
            <div className="flex flex-col gap-4 w-full 2xl:flex-row md:flex-row 2xl:gap-12 md:gap-12">
              {quest?.previewData.map((i) => {
                return (
                  <span
                    className="border-b border-inherit 2xl:border-none md:border-none 
                    flex gap-4 flex-row 2xl:flex-col md:flex-col 2xl:gap-0 md:gap-0
                    pb-4"
                    key={i.key}
                  >
                    <h2>{i.title}</h2>
                    <strong className="2xl:text-2xl md:text-2xl">
                      {i.value}
                    </strong>
                  </span>
                )
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="#description"
              className="bottom-20 border-2 rounded-md py-4 px-10 transition ease-in-out delay-150 active:bg-white active:text-neutral-950 hover:bg-white hover:text-neutral-950"
            >
              Перейти к описанию
            </a>
          </div>
        </div>
      </section>
      <section
        id="description"
        className="px-4 py-8 2xl:px-60 lg:px-40 md:px-20 sm:px-4 
        pt-8 2xl:pt-16 lg:pt-16 md:pt-12
        "
      >
        <div className="flex 2xl:gap-16 xl:gap-12 md:gap-8 gap-8 xl:flex-row md:flex-col flex-col">
          <div className="xl:w-1/2">
            <Carousel data={quest?.carouselData ?? []} />
          </div>
          <div className="xl:w-1/2">
            {quest?.data.map((i) => {
              return (
                <div key={i.key}>
                  <h2 className="text-2xl mb-4">{i.title}</h2>
                  <p
                    className="mb-4 text-neutral-300"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {i.value}
                  </p>
                </div>
              )
            })}
            <strong>Возрастные ограничения:</strong>{' '}
            <span className="text-neutral-300">
              {quest?.ageComment ?? quest?.ageLimit}
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
