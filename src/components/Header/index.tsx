import menu from '@/assets/menu.svg'
import { Rubik_Mono_One } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

export default function Header() {
  return (
    <header className="bg-neutral-950 absolute w-full z-10 p-4 xl:px-60 lg:px-40 md:px-20 sm:px-4">
      <div className="flex justify-between">
        <Link className={`${rubikMono.className}`} href="/">
          Квесты в Калининграде
        </Link>
        <button>
          <Image src={menu} alt="menu" />
        </button>
      </div>
    </header>
  )
}
