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
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: t("nav.projects"), href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-md border-b border-gray-800/50"
            : "bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" onClick={scrollToTop}>
              <Image
                src="/logos/nova-gen.png"
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
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-emerald-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="https://calendar.app.google/dNPg4ggXu7CQtbMUA"
                target="_blank"
                className="px-4 py-2 rounded-lg bg-[#009696] text-white text-sm font-semibold hover:bg-[#00b3b3]"
              >
                Book a Meeting
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-gray-300 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-50 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between px-5 h-16 border-b">
                <span className="font-semibold text-lg">Nova Gen</span>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <div className="px-5 py-6 space-y-5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false)
                      scrollToTop()
                    }}
                    className={`block text-base font-medium ${
                      pathname === item.href
                        ? "text-emerald-600"
                        : "text-gray-800 hover:text-emerald-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="pt-6 border-t">
                  <Link
                    href="https://calendar.app.google/dNPg4ggXu7CQtbMUA"
                    target="_blank"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button className="w-full bg-[#009699] hover:bg-[#00b3b3] text-white">
                      Book a Meeting
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
