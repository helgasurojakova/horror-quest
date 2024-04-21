import React from 'react'
import { quests } from '@/config'

export default function Quest() {
  const collector = quests.find((el) => el.key === 'meggi')

  return (
    <main className="bg-neutral-800 w-full">
      <section
        className={`${collector?.backgroundImage} h-screen bg-center bg-no-repeat bg-cover`}
      ></section>
    </main>
  )
}
