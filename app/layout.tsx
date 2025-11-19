import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  title: 'FMD Africa | Digital & Content Agency in Nairobi, Kenya',
  description: 'FMD Africa is a digital and content agency helping businesses grow through strategic content, social media management, SEO optimization, and digital consulting. Based in Nairobi, Kenya.',
  keywords: 'digital marketing Kenya, social media management Nairobi, content creation Kenya, SEO services Nairobi, digital agency Africa, content agency Kenya, social media marketing, digital consulting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  )
}
