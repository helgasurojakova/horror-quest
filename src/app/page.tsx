import { Rubik_Mono_One } from 'next/font/google'
import { quests } from '@/config'
import Link from 'next/link'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section className="bg-hero-pattern h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center px-4 xl:px-60 lg:px-40 md:px-20 sm:px-4">
        <h1 className={`${rubikMono.className} w-full text-2xl 2xl:text-6xl md:text-4xl sm:text-4xl`}>
          Склад<br/>квестов в<br/>Калининграде
        </h1>
        <a
          href="#quests"
          className="absolute bottom-20 border-2 rounded-md py-4 px-10 active:bg-white active:text-neutral-950"
        >
          Перейти к просмотру
        </a>
      </section>
      <section id="quests" className="flex flex-col px-4 w-full gap-6 py-8">
        {quests.map((i, index) => {
          return (
            <Link href={`/quest/${i.key}`} key={index}>
              <div className="bg-neutral-900">
                <div
                  className={`${i.backgroundImage} h-80 bg-no-repeat bg-cover bg-center relative`}
                >
                  <h1
                    className={`absolute bottom-0 p-4 ${rubikMono.className}`}
                  >
                    {i.title}
                  </h1>
                </div>
                <p className="p-4 leading-relaxed">{i.description}</p>
              </div>
            </Link>
          )
        })}
      </section>
    </main>
  )
}
