import Link from "next/link"
import { cn } from "@/utils"
import ProviderMain, { useToggleNavbarMain } from "./context"
import { usePathname } from "next/navigation"
import Overlay from "./overlay"
import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

export type routesMainType = {
  name: string;
  link: string;
}

const routesMain: routesMainType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Destination",
    link: "#",
  },
]

function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { open, toggle, sticky } = useToggleNavbarMain()
  const [language, setLanguage] = useState<string>()
  const { t } = useTranslation('common', { keyPrefix: 'navbar' })

  useEffect(() => {
    const { locale } = router

    setLanguage(locale || "id")
  }, [router])

  const handleChangeLanguage = useCallback(() => {
    const { asPath } = router

    router.push(asPath, asPath, { locale: language === "id" ? "en" : "id", scroll: false })
    setLanguage((prevLanguage) => prevLanguage === "id" ? "en" : "id")
  }, [language, router])

  return(
    <>
      <nav
        className={cn(
          "header_fixed w-full z-[99999] transition-all duration-500 ease-out",
          open ?
              "h-full md:h-auto pt-0 px-0"
            :
              (sticky ? "pt-5 pb-2 px-6 md:px-16 lg:px-24" : "pt-3 px-4 md:px-7")
        )}
      >
        <div
          className={cn(
            "relative w-full transition-all duration-500 ease-out z-50",
            sticky
              ? "text-white"
              : (open ? "text-white" : "text-black"),
            open ?
                "bg-indigo-500 rounded-b-md"
              :
                sticky && "bg-indigo-500/80 backdrop-filter backdrop-blur shadow-lg shadow-primary-main/30 rounded-[14px]"
          )}
        >
          <div className="relative flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4 w-full lg:w-1/7">
              <Link href="#" className="tracking-wider focus:outline-none focus:shadow-outline">
                <h4 className="flex flex-col font-extrabold text-2xl lg:text-3xl ml-2">Bless Travel</h4>
              </Link>
              <button
                aria-label="button-navbar"
                className={cn(
                  "md:hidden focus:outline-none focus:shadow-outline transition-all ease-linear",
                  open && "opened",
                  (sticky && !open) && "sticky"
                )}
                onClick={() => toggle()}
              >
                <svg width="35" height="35" viewBox="0 0 100 100">
                  <path className="line line1" fill="none" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
              </button>
            </div>
            <ul
              className={cn(
                "bg-transparent flex-col justify-center py-4 md:pb-5 md:flex md:flex-row md:justify-between w-full",
                !sticky && "pl-2",
                open ? "flex navbar-open pl-0" : "hidden"
              )}
            >
              <div className="flex-col text-center md:flex md:flex-row mx-auto md:mr-8">
                {routesMain.map((item, index) => (
                  <li key={index} className="px-3 md:px-4 lg:px-5 xl:px-6 py-3">
                    <Link
                      href={item.link}
                      className={cn(
                        "relative underscore-nav py-2 mt-2 text-normal md:text-sm md:mt-0 font-medium hover:text-third-main focus:text-third-main focus:border-none focus:outline-none focus:shadow-outline",
                        item.link === pathname && "active"
                      )}
                    >
                      {t(item.name)}
                    </Link>
                  </li>
                ))}
              </div>
              <button
                key={language}
                className="bg-transparent focus:outline-none focus:shadow-outline flex items-center drop-shadow-lg text-sm font-medium justify-center mt-4 md:mt-0 py-2 px-4 border rounded-full border-indigo-300 w-max mx-auto md:mx-0"
                onClick={handleChangeLanguage}
              >
                {language === "en" ? (
                  <>
                    <img src="/images/en.svg" alt="flag-en" className="w-6 h-6 rounded-full mr-2" />
                    EN
                  </>
                ): (
                  <>
                    <img src="/images/id.svg" alt="flag-id" className="w-6 h-6 rounded-full mr-2" />
                    ID
                  </>
                )}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

const MainLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <ProviderMain>
      <Overlay />
      <Navbar />
      <div className="pt-24 lg:pt-18 px-4 sm:px-6 lg:px-14 xl:px-18">{children}</div>
    </ProviderMain>
  );
}

export default MainLayout
