import { formatPhoneNumber } from '@/helpers'
import Image from 'next/image'
import email from '@/assets/email.svg'
import location from '@/assets/location.svg'
import phone from '@/assets/phone.svg'
import telegram from '@/assets/telegram.svg'
import vk from '@/assets/vk.svg'
import whatsapp from '@/assets/whatsapp.svg'
import { contacts } from '@/config'

export default function Footer() {
  return (
    <footer
      className="w-full 
      p-4 2xl:px-60 lg:px-40 md:px-20 sm:px-4
      pb-16 2xl:pb-24 md:pb-20
      pt-8
      "
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Image src={location} alt="Локация" className="w-6" />
          <div className="flex flex-wrap gap-2">
            <span>{contacts.adderss}</span>
            <a
              className="text-main-red"
              href={contacts.yandexMapLink}
              target="_blank"
            >
              (Посмотреть на карте)
            </a>
          </div>
        </div>
        <a
          className="flex gap-4 items-center"
          href={contacts.phoneLink}
          target="_blank"
        >
          <Image src={phone} alt="Мобильный телефон" className="w-6" />
          <span>{formatPhoneNumber(contacts.phone)}</span>
        </a>
        <a
          className="flex gap-4 items-center"
          href={contacts.emailLink}
          target="_blank"
        >
          <Image src={email} alt="Почта" className="w-6" />
          <span>{contacts.email}</span>
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
    </footer>
  )
}
