"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Services", href: "/services" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.process"), href: "/process" },
    { name: "Partnership", href: "/partnership" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <motion.nav
      initial={false}               // 👈 prevents hiding on reload
      animate={{ y: 0 }}            // keep it visible
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-gray-800/50"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <Image
              src="/images/NOVA GEN.svg"
              alt="Nova Logo"
              width={100}
              height={30}
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={scrollToTop}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-emerald-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/consultation" onClick={scrollToTop}>
              <Button className="bg-[#009699] hover:bg-[#00b3b3] text-white font-medium">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center space-x-3">
            <Link href="/consultation" onClick={scrollToTop}>
              <Button
                size="sm"
                className="bg-[#009699] hover:bg-[#00b3b3] text-white font-medium text-xs px-3 py-2"
              >
                Free
              </Button>
            </Link>

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b border-gray-800 ${
                scrolled ? "bg-black/70" : "bg-black/30"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false)
                      scrollToTop()
                    }}
                    className={`flex items-center space-x-2 text-base font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? "text-emerald-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                ))}

                <div className="pt-4 border-t border-gray-700">
                  <Link
                    href="/consultation"
                    onClick={() => {
                      setIsOpen(false)
                      scrollToTop()
                    }}
                  >
                    <Button className="w-full bg-[#009699] hover:bg-[#00b3b3] text-white font-medium">
                      Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
