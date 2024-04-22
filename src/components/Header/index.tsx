'use client'
import { useState } from 'react'
import menu from '@/assets/menu.svg'
import phone from '@/assets/phone.svg'
import telegram from '@/assets/telegram.svg'
import vk from '@/assets/vk.svg'
import whatsapp from '@/assets/whatsapp.svg'
import { formatPhoneNumber } from '@/helpers'
import { Rubik_Mono_One } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { contacts } from '@/config'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

export default function Header() {
  const [isCollapsed, setCollapsed] = useState(true)

  return (
    <header className="bg-neutral-950 absolute w-full z-10 p-4 2xl:px-60 lg:px-40 md:px-20 sm:px-4">
      <div className="flex justify-between">
        <Link className={`${rubikMono.className}`} href="/">
          Квесты в Калининграде
        </Link>
        <button
          className="block 2xl:hidden md:hidden"
          onClick={() => setCollapsed(!isCollapsed)}
        >
          <Image src={menu} alt="menu" />
        </button>
        <div className="hidden 2xl:flex md:flex flex items-center gap-4">
          <a
            className="flex gap-4 items-center"
            href={contacts.phoneLink}
            target="_blank"
          >
            <Image src={phone} alt="Мобильный телефон" className="w-4" />
            <span>{formatPhoneNumber(contacts.phone)}</span>
          </a>
          <a
            className="flex gap-4 items-center"
            href={contacts.vk}
            target="_blank"
          >
            <Image src={vk} alt="VK" className="w-6" />
          </a>
          <a
            className="flex gap-4 items-center"
            href={contacts.telegram}
            target="_blank"
          >
            <Image src={telegram} alt="Telegram" className="w-6" />
          </a>
          <a
            className="flex gap-4 items-center"
            href={contacts.whatsapp}
            target="_blank"
          >
            <Image src={whatsapp} alt="WhatsApp" className="w-6" />
          </a>
        </div>
      </div>
      <div
        className={`mobile-contacts flex flex-col gap-4 2xl:hidden md:hidden overflow-hidden ${
          isCollapsed && 'collapsed'
        }`}
      >
        <a
          className="flex gap-4 items-center mt-6"
          href={contacts.phoneLink}
          target="_blank"
        >
          <Image src={phone} alt="Мобильный телефон" className="w-6" />
          <span>{formatPhoneNumber(contacts.phone)}</span>
        </a>
        <div className="flex items-center gap-4">
          <a
            className="flex gap-4 items-center"
            href={contacts.vk}
            target="_blank"
          >
            <Image src={vk} alt="VK" className="w-8" />
          </a>
          <a
            className="flex gap-4 items-center"
            href={contacts.telegram}
            target="_blank"
          >
            <Image src={telegram} alt="Telegram" className="w-8" />
          </a>
          <a
            className="flex gap-4 items-center"
            href={contacts.whatsapp}
            target="_blank"
          >
            <Image src={whatsapp} alt="WhatsApp" className="w-8" />
          </a>
        </div>
      </div>
    </header>
  )
}
