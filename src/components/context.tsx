import { useRouter } from "next/router"
import { createContext, useCallback, useContext, useEffect, useState } from "react"

type toggleContextType = {
  open: boolean;
  toggle: () => void;
  sticky: boolean;
}

const Context = createContext<toggleContextType>({} as toggleContextType)

export default function ProviderMain({
  children
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const router = useRouter()

  const toggle = useCallback(() => {
    setOpen((prevState) => !prevState)
  }, [setOpen])

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = ""
    }

    window.addEventListener("resize", () => {
      if (open && window.innerWidth > 767) {
        setOpen(false)
        document.documentElement.style.overflow = ""
      }
    })

    window.addEventListener("scroll", () => {
      setSticky(window.scrollY >= 5)
    })

    return () => {
      window.removeEventListener("resize", () => {
        if (open && window.innerWidth > 767) {
          setOpen(false)
          document.documentElement.style.overflow = ""
        }
      })

      window.removeEventListener("scroll", () => {
        setSticky(window.scrollY >= 5)
      })
    }
  }, [open, router])

  return (
    <Context.Provider value={{ open, toggle, sticky }}>
      {children}
    </Context.Provider>
  )
}

export function useToggleNavbarMain() {
  return useContext(Context)
}
