import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import { Header, Footer } from '../components'
import { NotificationsProvider } from '@mantine/notifications'
import AffixButton from '../components/Affix/Affix'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Hydrated>
      <NotificationsProvider position="bottom-right" zIndex={2077}>
        <ThemeProvider attribute="class">
          <Header />
          <Component {...pageProps} />
          <AffixButton />
          <Footer />
        </ThemeProvider>
      </NotificationsProvider>
    </Hydrated>
  )
}

export default MyApp

const Hydrated = ({ children }: { children?: any }) => {
  const [hydration, setHydration] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true)
    }
  }, [])
  return hydration ? children : <div></div>
}
