import type { AppProps } from 'next/app'
import { NavBar } from '../src/components/NavBar'

import '../styles/output.css'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className=' overflow-hidden w-screen h-screen' >
      <NavBar />
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
