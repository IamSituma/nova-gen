"use client"

import Link from "next/link"
import { CodeRain } from "@/components/code-rain"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ExpertiseSection } from "@/components/expertise-section"
import { SpinningEarth } from "@/components/spinning-earth"
import { TypingHero } from "@/components/typing-hero"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { ServicesViewportSection } from "@/components/services-viewport-section"

export default function Home() {
  return (
    <html lang="en" className="dark">
      <body>
        <main className="relative min-h-screen text-foreground overflow-x-hidden">
          {/* Background layers */}
          <div className="fixed inset-0 z-0">
            <div className="opacity-10">
              <SpinningEarth />
            </div>
            <div className="opacity-10">
              <CodeRain />
            </div>
          </div>

          {/* Content container */}
          <div className="relative z-10">
            <NavBar />
            <ProfileDropdown />

            {/* Hero section */}
            <section className="relative flex flex-col items-center justify-center min-h-[100vh] px-4 sm:px-6 overflow-hidden">
              {/* Hero Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "contrast(1.2) brightness(0.5) grayscale(100%)" }}
              >
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp%20%283%29%20%281%29%20%282%29%20%282%29-i8U3zTcWrQss8nKM5ekseP7qFR5KVP.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Hero Content */}
              <div className="relative z-10 max-w-4xl text-center space-y-6">
                <TypingHero />

                <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8"></div>

                <p className="text-muted-foreground max-w-xl mx-auto font-medium">
                  Transforming ideas into powerful digital solutions that drive growth and innovation for forward-thinking businesses.
                </p>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/services"
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
                  >
                    Services
                  </Link>

                  <Link
                    href="/support"
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium text-base hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                  >
                    <Zap className="w-5 h-5 inline-block mr-1" />
                    Get in Touch
                  </Link>
                </div>
              </div>
            </section>

            {/* Other sections with dark gradient blue background */}
            <div className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b]">
              {/* Expertise section */}
              <ExpertiseSection />

              {/* Services viewport section */}
              <ServicesViewportSection />

              {/* Contact section */}
              <section id="contact" className="py-20 px-4 sm:px-6 relative">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                  <motion.h2
                    className="text-4xl sm:text-5xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-foreground">Ready to </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                      innovate?
                    </span>
                  </motion.h2>
                  <motion.div
                    className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <motion.p
                    className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Let's discuss how we can transform your vision into reality with cutting-edge technology and strategic innovation.
                  </motion.p>

                  <motion.div
                    className="pt-8 flex flex-col items-center space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <Link
                        href="/services"
                        className="px-6 py-3 bg-[#009699] text-white rounded-lg font-medium text-base hover:bg-[#00b3b3] transition-all duration-300 transform hover:scale-105 border border-[#009699]"
                      >
                        Services
                      </Link>

                      <Link
                        href="/support"
                        className="px-6 py-3 bg-[#009699] text-white rounded-lg font-medium text-base hover:bg-[#00b3b3] transition-all duration-300 transform hover:scale-105 border border-[#009699] hover:shadow-[0_0_20px_rgba(0,150,153,0.3)]"
                      >
                        <Zap className="w-5 h-5 inline-block mr-1" />
                        Get in Touch
                      </Link>

                      <Link
                        href="/consultation"
                        className="px-6 py-3 bg-[#009699] text-white rounded-lg font-medium text-base hover:bg-[#009699] transition-all duration-300 transform hover:scale-105 border border-[#009699] hover:shadow-[0_0_20px_rgba(0,150,153,0.3)]"
                      >
                        <Zap className="w-5 h-5 inline-block mr-1" />
                        Free Consultation
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-2xl">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">1</span>
                        </div>
                        <p className="text-sm text-muted-foreground">No commitment required</p>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">2</span>
                        </div>
                        <p className="text-sm text-muted-foreground">30-minute strategy session</p>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">3</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Expert guidance</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
