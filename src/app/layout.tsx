import { formatPhoneNumber } from '@/helpers'
import type { Metadata } from 'next'
import { Rubik, Rubik_Mono_One } from 'next/font/google'
import Image from 'next/image'
import email from '../../public/email.svg'
import location from '../../public/location.svg'
import menu from '../../public/menu.svg'
import phone from '../../public/phone.svg'
import telegram from '../../public/telegram.svg'
import vk from '../../public/vk.svg'
import whatsapp from '../../public/whatsapp.svg'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })
const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <main className="bg-neutral-800 w-full">
          <nav className="flex justify-between bg-neutral-950 p-4 absolute w-full">
            <a className={`${rubikMono.className}`}>Квесты в Калининграде</a>
            <button>
              <Image src={menu} alt="menu" />
            </button>
          </nav>
          {children}
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
                <span>
                  {formatPhoneNumber(process.env.REACT_APP_PHONE_NUMBER)}
                </span>
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
      </body>
    </html>
  )
}
