import { Rubik_Mono_One } from 'next/font/google'
import { quests } from '@/config'
import Card from '@/components/Card'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section className="bg-hero-pattern h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center px-4 xl:px-60 lg:px-40 md:px-20 sm:px-4">
        <h1
          className={`${rubikMono.className} w-full text-2xl 2xl:text-6xl md:text-4xl sm:text-4xl`}
        >
          Склад
          <br />
          квестов в<br />
          Калининграде
        </h1>
        <a
          href="#quests"
          className="absolute bottom-20 border-2 rounded-md py-4 px-10 transition ease-in-out delay-150 active:bg-white active:text-neutral-950 hover:bg-white hover:text-neutral-950"
        >
          Перейти к просмотру
        </a>
      </section>
      <section
        id="quests"
        className="
        flex flex-col xl:flex-row lg:flex-row md:flex-col xs:flex-col gap-6 
        w-full px-4 py-8 xl:px-60 lg:px-40 md:px-20 sm:px-4
        xl:h-screen lg:h-screen
        "
      >
        {quests.map((i, index) => {
          return <Card key={index} data={i} />
        })}
      </section>
    </main>
  )
}
