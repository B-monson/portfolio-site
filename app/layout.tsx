import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Brett Monson — Product-Minded Engineer & UX Specialist',
  description:
    'Portfolio of Brett Monson. Product-minded engineer and UX specialist building eCommerce tools that bridge design thinking with technical execution.',
  openGraph: {
    title: 'Brett Monson — Product-Minded Engineer & UX Specialist',
    description:
      'Building eCommerce tools that bridge design thinking with technical execution.',
    url: 'https://brettmonson.dev',
    siteName: 'Brett Monson',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}
