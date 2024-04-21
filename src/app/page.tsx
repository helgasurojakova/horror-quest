import Image from 'next/image'
import menu from '../../public/menu.svg'
import { Rubik_Mono_One } from 'next/font/google'
import email from '../../public/email.svg'
import phone from '../../public/phone.svg'
import telegram from '../../public/telegram.svg'
import vk from '../../public/vk.svg'
import whatsapp from '../../public/whatsapp.svg'
import location from '../../public/location.svg'
import { formatPhoneNumber } from '@/helpers'

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
    <main className="bg-neutral-800 w-full">
      <nav className="flex justify-between bg-neutral-950 p-4 absolute w-full">
        <a className={`${rubikMono.className}`}>Квесты в Калининграде</a>
        <button>
          <Image src={menu} alt="menu" />
        </button>
      </nav>
      <section className="bg-hero-pattern h-screen bg-center bg-no-repeat bg-cover flex flex-col  justify-center items-center pl-4">
        <h1 className={`${rubikMono.className} text-4xl`}>
          Склад квестов в Калининграде
        </h1>
        <a
          href="#quests"
          className="absolute bottom-20 border-2 rounded-md py-4 px-10"
        >
          Перейти к просмотру
        </a>
      </section>
      <section id="quests" className="flex flex-col px-4 w-full gap-6 py-8">
        {quests.map((i, index) => {
          return (
            <div key={index} className="bg-neutral-900">
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
      <footer className="w-full p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <Image src={location} alt="Локация" className="w-6" />
            <span>{process.env.REACT_APP_ADDRESS}</span>
          </div>
          <a
            className="flex gap-4 items-center"
            href={`tel:+${process.env.REACT_APP_PHONE_NUMBER}`}
            target="_blank"
          >
            <Image src={phone} alt="Мобильный телефон" className="w-6" />
            <span>{formatPhoneNumber(process.env.REACT_APP_PHONE_NUMBER)}</span>
          </a>
          <a
            className="flex gap-4 items-center"
            href={`mailto:${process.env.REACT_APP_EMAIL}`}
            target="_blank"
          >
            <Image src={email} alt="Почта" className="w-6" />
            <span>{process.env.REACT_APP_EMAIL}</span>
          </a>
          <div className="flex items-center gap-4">
            <a
              className="flex gap-4 items-center"
              href={process.env.REACT_APP_VK_LINK}
              target="_blank"
            >
              <Image src={vk} alt="VK" className="w-8" />
            </a>
            <a
              className="flex gap-4 items-center"
              href={`https://t.me/+${process.env.REACT_APP_PHONE_NUMBER}`}
              target="_blank"
            >
              <Image src={telegram} alt="Telegram" className="w-8" />
            </a>
            <a
              className="flex gap-4 items-center"
              href={`https://wa.me/+${process.env.REACT_APP_PHONE_NUMBER}`}
              target="_blank"
            >
              <Image src={whatsapp} alt="WhatsApp" className="w-8" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
