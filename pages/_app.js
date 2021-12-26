import '../styles/_globals.scss'
import '../styles/_colors.scss'
import '../styles/_fonts.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { hotjar } from 'react-hotjar'

import * as ga from '../utils/ga'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    hotjar.initialize(2761204, 6)
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <Component {...pageProps} />
}

export default MyApp
