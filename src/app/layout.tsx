import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { Suspense } from "react";
import { Metrika } from "@/components/Metrika";

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Клуб квестов Калининград',
  description: 'Погрузитесь в захватывающие приключения с лучшими перформанс хоррор квестами для всей семьи в Калининграде! Ощутите незабываемые эмоции!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" /> */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://questkaliningrad.ru/main.jpg" />
        <meta property="og:url" content="https://questkaliningrad.ru/" />
        <meta property="og:site_name" content="questkaliningrad.ru" />
        <meta property="og:description" content={metadata.description} />
        <meta name="keywords" content="хоррор квесты, Калининград, приключения, развлечения, игры, тимбилдинг, командные игры, адреналин, решение головоломок, поиск выхода, тайны, загадки, интеллектуальные игры, развивающие игры, приключенческие игры, командная работа, ужасы, триллер, экстрим, испытание, выживание, зловещий, загадочный, темный, интрига, ужасающий, напряжение" />
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
