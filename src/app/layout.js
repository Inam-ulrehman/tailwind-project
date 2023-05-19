import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'
import Header from './components/header/header'
import Footer from './components/footer/footer'

const inter = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Next Title ',
  description: 'Next PWA example using next-pwa and app directory',
  manifest: '/manifest.json',
  themeColor: '#ffffff',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  )
}
