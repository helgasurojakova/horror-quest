import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Rubik_Mono_One } from 'next/font/google'

const rubikMono = Rubik_Mono_One({ weight: ['400'], subsets: ['latin'] })

export default function MirKvestovWidget() {
  return (
    <div className="flex flex-col xl:flex-row xl:flex-wrap gap-16 items-center">
      <div className="flex flex-col gap-8 items-center">
        <h2
          className={`${rubikMono.className} 
          text-xl sm:text-2xl`}
        >
          Амок
        </h2>
        <Link
          href="https://kaliningrad.mir-kvestov.ru/quests/club-kvestov-amok"
          target="_blank"
        >
          <Image
            src="https://kaliningrad.mir-kvestov.ru/widgets/8401/img"
            width="210"
            height="100"
            alt="Отзывы на Квест в реальности Амок (Клуб квестов)"
            title="Отзывы на Квест в реальности Амок (Клуб квестов)"
          />
        </Link>
        <Link
          href="https://klg.questguild.ru/quests/club-questov-amok"
          target="_blank"
        >
          <Image
            src="https://questguild.ru/assets/widgets/long2-stars-3-4eab0913b89cba7bbe298c10e98e3a116c2ee206653f3d6369613a0fab52b4a8.png"
            width="450"
            height="60"
            alt="Рейтинг квеста на сайте Гильдии Квестов"
            title="Рейтинг квеста на сайте Гильдии Квестов"
            className="rounded-lg"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <h2
          className={`${rubikMono.className} 
          text-xl sm:text-2xl`}
        >
          Гадалка
        </h2>
        <Link
          href="https://kaliningrad.mir-kvestov.ru/quests/club-kvestov-gadalka"
          target="_blank"
        >
          <Image
            src="https://kaliningrad.mir-kvestov.ru/widgets/8401/img"
            width="210"
            height="100"
            alt="Отзывы на Квест в реальности Гадалка (Клуб квестов)"
            title="Отзывы на Квест в реальности Гадалка (Клуб квестов)"
          />
        </Link>
        <Link
          href="https://klg.questguild.ru/quests/club-questov-gadalka"
          target="_blank"
        >
          <Image
            src="https://questguild.ru/assets/widgets/long2-stars-3-4eab0913b89cba7bbe298c10e98e3a116c2ee206653f3d6369613a0fab52b4a8.png"
            width="450"
            height="60"
            alt="Рейтинг квеста на сайте Гильдии Квестов"
            title="Рейтинг квеста на сайте Гильдии Квестов"
            className="rounded-lg"
          />
        </Link>
      </div>
    </div>
  )
}
