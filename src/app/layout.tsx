import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { Suspense } from "react";
import { Metrika } from "@/components/Metrika";

const rubik = Rubik({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Клуб квестов Калининград',
//   description: 'Погрузитесь в захватывающие приключения с лучшими перформанс хоррор квестами для всей семьи в Калининграде! Ощутите незабываемые эмоции!',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Клуб квестов Калининград</title>
        <meta name="description" content="Квесты в Калининграде для всей семьи. Погрузитесь в захватывающие приключения с лучшими перформанс хоррор квестами Калининграда! Ощутите незабываемые эмоции!" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" /> */}
        <meta property="og:title" content="Клуб квестов Калининград" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://questkaliningrad.ru/main.jpg" />
        <meta property="og:url" content="https://questkaliningrad.ru/" />
        <meta property="og:site_name" content="questkaliningrad.ru" />
        <meta property="og:description" content="Квесты в Калининграде для всей семьи. Погрузитесь в захватывающие приключения с лучшими перформанс хоррор квестами Калининграда! Ощутите незабываемые эмоции!" />
        <meta name="keywords" content="квесты, Калининград, хоррор квесты, приключения, развлечения, игры, тимбилдинг, командные игры, адреналин, решение головоломок, поиск выхода, тайны, загадки, интеллектуальные игры, развивающие игры, приключенческие игры, командная работа, ужасы, триллер, экстрим, испытание, выживание, зловещий, загадочный, темный, интрига, ужасающий, напряжение" />
      </head>
      <body className={rubik.className}>
        <main className="bg-neutral-800 w-full">
          <Header />
          {children}
          <Footer />
        </main>
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  )
}
