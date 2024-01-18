import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { useRouter } from 'next/router'
import { useTranslation, appWithTranslation } from 'next-i18next'
import { useEffect } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  variable: "--poppins-font",
})

function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(locale)
    }
  }, [locale, i18n])

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

export default appWithTranslation(App)
