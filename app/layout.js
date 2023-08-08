import './globals.css'
import { Inter } from 'next/font/google'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '株式会社グルーヴィーメディア',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
