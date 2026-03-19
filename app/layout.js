import './globals.css'
import Watermark from './components/watermark'
import { Playfair_Display, Inter } from 'next/font/google'

const displayFont = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })


export const metadata = {
  title:       "Simhaavatar — Premium Men's Temple Jewellery Rental, Mysore",
  description: 'Royal Heritage meets High-Tech Minimalism. Rent authentic Mysore temple jewellery for weddings, photoshoots, and performances.',
  keywords:    'men temple jewellery rental mysore, groom jewellery mysore, ganda berunda necklace, baju band rental',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=IM+Fell+English:ital@0;1&family=Montserrat:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">
        {/* The watermark is initialized here to be present on all pages */}
        <Watermark />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}