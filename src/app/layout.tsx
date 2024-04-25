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
  description: 'Перформанс хоррор квесты для всей семьи',
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
