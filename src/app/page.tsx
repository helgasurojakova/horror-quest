import Image from 'next/image'
import menu from '../../public/menu.svg'
import { Rubik_Mono_One } from 'next/font/google'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

const quests = [
  {
    key: 'collector',
    title: 'Коллекционер',
    description: `На улице Клинической в заброшенном здании обнаружили логово маньяка
    с телами жертв. Последнюю пропавшую девушку найти не удалось.
    Возможно, она еще жива... Мы надеемся, что вам удастся ее отыскать и
    не стать очередной жертвой маньяка.`,
    backgroundImage: 'bg-collector',
  },
  {
    key: 'meggi',
    title: 'Проклятие Мэгги',
    description: `Окунись в атмосферу страха и стань главным персонажем жуткой истории
    о проклятой Мэгги. Какие тайны она скрывает? Пройди все испытания,
    проявив свои лучшие качества!`,
    backgroundImage: 'bg-meggi',
  },
]

export default function Home() {
  return (
    <main className="bg-neutral-800 w-screen">
      <nav className="flex justify-between bg-neutral-950 p-4 absolute w-full">
        <a className={`${rubikMono.className}`}>Квесты в Калининграде</a>
        <button>
          <Image src={menu} alt="menu" />
        </button>
      </nav>
      <section className="bg-hero-pattern h-screen bg-center bg-no-repeat bg-cover"></section>
      <section className="flex flex-col">
        {quests.map((i, index) => {
          return (
            <div key={index} className="m-4 bg-neutral-900">
              <div
                className={`${i.backgroundImage} h-80 bg-no-repeat bg-cover bg-center relative`}
              >
                <h1 className={`absolute bottom-0 p-4 ${rubikMono.className}`}>
                  {i.title}
                </h1>
              </div>
              <p className="p-4 leading-relaxed">{i.description}</p>
            </div>
          )
        })}
      </section>
    </main>
  )
}
