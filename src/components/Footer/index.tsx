import { formatPhoneNumber } from '@/helpers'
import Image from 'next/image'
import email from '@/assets/email.svg'
import location from '@/assets/location.svg'
import phone from '@/assets/phone.svg'
import telegram from '@/assets/telegram.svg'
import vk from '@/assets/vk.svg'
import whatsapp from '@/assets/whatsapp.svg'

export default function Footer() {
  return (
    <footer className="w-full p-4 xl:px-60 lg:px-40 md:px-20 sm:px-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Image src={location} alt="Локация" className="w-6" />
          <div>
            <span>{process.env.REACT_APP_ADDRESS}</span>
            <br />
            <a
              className="text-rose-400"
              href={process.env.REACT_APP_YANDEX_MAP_LINK}
              target="_blank"
            >
              (Посмотреть на карте)
            </a>
          </div>
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
  )
}
