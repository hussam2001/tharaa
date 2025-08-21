import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thara Global - Leading Investment Company in Oman',
  description: 'Pioneering sustainable investment solutions in Oman. Licensed by CMA with 50+ years experience. Driving Vision 2040 through strategic investments.',
  keywords: 'investment company Oman, REIT investment, Muscat investment firm, public private partnerships Oman, sustainable investment',
  authors: [{ name: 'Thara Investment LLC' }],
  creator: 'Thara Investment LLC',
  publisher: 'Thara Investment LLC',
  robots: 'index, follow',
  openGraph: {
    title: 'Thara Global - Leading Investment Company in Oman',
    description: 'Pioneering sustainable investment solutions in Oman. Licensed by CMA with 50+ years experience.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Thara Global',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thara Global - Leading Investment Company in Oman',
    description: 'Pioneering sustainable investment solutions in Oman. Licensed by CMA with 50+ years experience.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

