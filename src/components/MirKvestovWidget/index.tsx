import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MirKvestovWidget() {
  return (
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
  )
}
