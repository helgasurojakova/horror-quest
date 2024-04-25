import React from 'react'
import { quests } from '@/config'
import { Rubik_Mono_One } from 'next/font/google'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

export default function Quest({ params }: { params: { slug: string } }) {
  const quest = quests.find((el) => el.key === params.slug)

  return (
    <main className="bg-neutral-800 w-full">
      <section className="grayscale-[50%] h-screen flex flex-col justify-center items-center px-4 xl:px-60 lg:px-40 md:px-20 sm:px-4">
        <div
          style={{ backgroundImage: `url(/${quest?.key}.jpg)` }}
          className="bg-center bg-no-repeat bg-cover absolute w-full h-full brightness-50"
        ></div>
        <div className="flex flex-col justify-start w-full p-4 z-10">
          <span className="text-lg">{quest?.type}</span>
          <h1 className={`${rubikMono.className} text-2xl mb-8`}>
            {quest?.title}
          </h1>
          <div className="flex flex-col gap-4">
            {quest?.previewData.map((i) => {
              return (
                <span className="border-b pb-4 border-inherit" key={i.key}>
                  {i.title}
                  <strong className="pl-4">{i.value}</strong>
                </span>
              )
            })}
          </div>
        </div>
        <a
          href="#description"
          className="absolute bottom-20 border-2 rounded-md py-4 px-10 transition ease-in-out delay-150 active:bg-white active:text-neutral-950 hover:bg-white hover:text-neutral-950"
        >
          Перейти к описанию
        </a>
      </section>
      <section
        id="description"
        className="px-4 py-8 xl:px-60 lg:px-40 md:px-20 sm:px-4"
      >
        {quest?.data.map((i) => {
          return (
            <div key={i.key}>
              <h2 className="text-2xl mb-4">{i.title}</h2>
              <p className="mb-4" style={{ whiteSpace: 'pre-line' }}>
                {i.value}
              </p>
            </div>
          )
        })}
        <strong>Возрастные ограничения:</strong>{' '}
        <span>{quest?.ageComment ?? quest?.ageLimit}</span>
      </section>
    </main>
  )
}
