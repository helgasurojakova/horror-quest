import { Rubik_Mono_One } from 'next/font/google'
import { quests } from '@/config'
import Link from 'next/link'

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
        w-full px-4 py-8 xl:px-60 lg:px-40 md:px-20 sm:px-4 xl:py-60 lg:py-60 md:py-8 sm:py-8
        xl:h-screen lg:h-screen
        "
      >
        {quests.map((i, index) => {
          return i?.status === 'active' ? (
            <Link
              href={`/quest/${i.key}`}
              key={index}
              className="xl:w-4/12 lg:w-4/12"
            >
              <div className="quest-card relative grayscale-[100%] hover:grayscale-[0%] transition">
                <div
                  style={{ backgroundImage: `url(/${i.key}.jpg)` }}
                  className="h-80 bg-no-repeat bg-cover bg-center relative"
                >
                  <h1
                    className={`absolute bottom-0 p-4 ${rubikMono.className}`}
                  >
                    {i.title}
                  </h1>
                </div>
                <div className="description-holder static xl:absolute lg:absolute md:static sm:static overflow-hidden">
                  <p className="p-4 bg-neutral-900 leading-relaxed text-sm">
                    {i.description}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="relative xl:w-4/12 lg:w-4/12">
              <div
                style={{ backgroundImage: `url(/${i.key}.jpg)` }}
                className="h-80 bg-no-repeat bg-cover bg-center relative grayscale-[100%] hover:grayscale-[0%] transition"
              >
                <h1 className={`absolute bottom-0 p-4 ${rubikMono.className}`}>
                  {i.title}
                </h1>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
