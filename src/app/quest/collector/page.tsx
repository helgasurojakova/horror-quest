import React from 'react'
import { quests } from '@/config'

export default function Quest() {
  const quest = quests.find((el) => el.key === 'collector')

  return (
    <main className="bg-neutral-800 w-full">
      <section
        className={`${quest?.backgroundImage} h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center`}
      >
        <a
          href="#quest"
          className="absolute bottom-20 border-2 rounded-md py-4 px-10 active:bg-white active:text-neutral-950"
        >
          Перейти к описанию
        </a>
      </section>
      <section id="quest" className="px-4 py-8">
        <h2 className="text-2xl mb-4">Описание</h2>
        <p className="mb-4">{quest?.description}</p>
        <strong>Возрастные ограничения:</strong>{' '}
        <span>{quest?.ageComment}</span>
        <h2 className="text-2xl mb-4 mt-8">Особенности</h2>
        <p className="mb-4">{quest?.comment}</p>
        <h2 className="text-2xl mb-4 mt-8">Цены</h2>
        <p>{quest?.priceComment}</p>
      </section>
    </main>
  )
}
