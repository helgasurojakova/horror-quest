import { Rubik_Mono_One } from 'next/font/google'
import { quests } from '@/config'
import Card from '@/components/Card'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

export default function Home() {
  const generateTickersItems = (count: number) => {
    const items = []
    for (let i = 0; i < count; i++) {
      items.push(
        <div key={i} className="ticker_item py-2 pr-6 2xl:pr-8 md:pr-8">
          КЛУБ КВЕСТОВ КАЛИНИНГРАД
        </div>
      )
    }
    return items
  }

  const tickerItems = generateTickersItems(10)

  return (
    <main>
      <section
        className="bg-hero-pattern h-screen bg-center bg-no-repeat bg-cover 
        flex flex-col justify-center items-center p-4 2xl:px-60 lg:px-40 md:px-20 sm:px-4
        "
      >
        <h1
          className={`${rubikMono.className} w-full text-3xl 2xl:text-6xl md:text-4xl sm:text-4xl`}
        >
          КЛУБ
          <br />
          КВЕСТОВ
          <br />
          КАЛИНИНГРАД
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
        relative w-full overflow-hidden
        px-4 2xl:px-60 lg:px-40 md:px-20 sm:px-4
        2xl:h-screen lg:h-screen
        pt-8 2xl:pt-16 md:pt-16
        pb-20 2xl:pb-24
        "
      >
        <h2
          className={`${rubikMono.className} 
          text-2xl 2xl:text-2xl md:text-2xl sm:text-xl 
          pb-8 2xl:pb-16 sm:pb-8`}
        >
          Во что поиграем..?
        </h2>
        <div
          className="flex flex-col xl:flex-row lg:flex-row md:flex-col xs:flex-col gap-6 h-full
          pb-0 2xl:pb-48 lg:pb-48
        "
        >
          {quests.map((i, index) => {
            return <Card key={index} data={i} />
          })}
        </div>
        <div className="absolute bottom-0 left-0 bg-neutral-900 mb-0 2xl:mb-14 lg:mb-14 md:mb-0">
          <div className={`${rubikMono.className} ticker`}>
            <div className="ticker_wrapper text-2xl 2xl:text-4xl md:text-4xl sm:text-2xl">
              {tickerItems}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
