import Image from 'next/image'
import menu from '../../public/menu.svg'

export default function Home() {
  return (
    <main className="bg-neutral-700">
      <nav className="flex justify-between bg-neutral-950 p-4 absolute w-screen">
        <a className="text-white">Квесты в Калининграде</a>
        <button>
          <Image src={menu} alt="menu" />
        </button>
      </nav>
      <section className="bg-hero-pattern h-screen bg-center bg-no-repeat bg-cover"></section>
    </main>
  )
}
