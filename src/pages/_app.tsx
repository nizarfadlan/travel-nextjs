import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  variable: "--poppins-font",
})

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
          }
      `}</style>
      <div className={poppins.variable}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
