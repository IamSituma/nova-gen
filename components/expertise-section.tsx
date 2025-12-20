"use client"

import { motion, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"

const partnerLogos = [
  { src: "/images/weltivation-logo.png", alt: "Weltivation" },
  { src: "/images/nicfound-logo.png", alt: "NicFound" },
  { src: "/images/google-logo.png", alt: "Google" },
  { src: "/images/fisher-labs.png", alt: "Fisher Labs" },
  { src: "/images/bevel-razors.png", alt: "Bevel Razers" },
  { src: "/images/chatchill.png", alt: "Chatchill" },
  { src: "/images/pufftrak-logo.png", alt: "PuffTrak" },
]

export function ExpertiseSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Our Partners</h3>
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-10"
            animate={isHovered ? { x: "0%" } : { x: ["0%", "-50%"] }}
            transition={
              isHovered
                ? { duration: 0 }
                : { x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }
            }
          >
            {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
