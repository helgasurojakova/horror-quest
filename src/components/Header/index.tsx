import menu from '@/assets/menu.svg'
import phone from '@/assets/phone.svg'
import telegram from '@/assets/telegram.svg'
import vk from '@/assets/vk.svg'
import whatsapp from '@/assets/whatsapp.svg'
import { formatPhoneNumber } from '@/helpers'
import { Rubik_Mono_One } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

export default function Header() {
  return (
    <header className="bg-neutral-950 absolute w-full z-10 p-4 2xl:px-60 lg:px-40 md:px-20 sm:px-4">
      <div className="flex justify-between">
        <Link className={`${rubikMono.className}`} href="/">
          Квесты в Калининграде
        </Link>
        <button className="block 2xl:hidden md:hidden">
          <Image src={menu} alt="menu" />
        </button>
        <div className="hidden 2xl:flex md:flex flex items-center gap-4">
          <a
            className="flex gap-4 items-center"
            href={`tel:+${process.env.REACT_APP_PHONE_NUMBER}`}
            target="_blank"
          >
            <Image src={phone} alt="Мобильный телефон" className="w-4" />
            <span>{formatPhoneNumber(process.env.REACT_APP_PHONE_NUMBER)}</span>
          </a>
          <a
            className="flex gap-4 items-center"
            href={process.env.REACT_APP_VK_LINK}
            target="_blank"
          >
            <Image src={vk} alt="VK" className="w-6" />
          </a>
          <a
            className="flex gap-4 items-center"
            href={`https://t.me/+${process.env.REACT_APP_PHONE_NUMBER}`}
            target="_blank"
          >
            <Image src={telegram} alt="Telegram" className="w-6" />
          </a>
          <a
            className="flex gap-4 items-center"
            href={`https://wa.me/+${process.env.REACT_APP_PHONE_NUMBER}`}
            target="_blank"
          >
            <Image src={whatsapp} alt="WhatsApp" className="w-6" />
          </a>
        </div>
      </div>
    </header>
  )
}
