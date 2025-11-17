import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import SessionProvider from '@/components/SessionProvider'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Примірочна AI - Віртуальна примірка одягу онлайн',
  description: 'Примірте будь-який одяг онлайн за 30 секунд. Штучний інтелект покаже, як на вас виглядає будь-який образ. Технологія Google Gemini AI.',
  keywords: ['віртуальна примірка', 'AI', 'примірочна', 'Gemini', 'онлайн примірка', 'штучний інтелект', 'одяг онлайн'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}

