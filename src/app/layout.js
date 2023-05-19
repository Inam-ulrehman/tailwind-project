import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'

const inter = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  manifest: '/manifest.json',
  themeColor: '#ffffff',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
