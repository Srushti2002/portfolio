import '@/styles/globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
