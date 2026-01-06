"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, Users, Shield, Zap, Target, Star } from "lucide-react"

const reasons = [
  { icon: Clock, text: "Fast turnaround times without compromising quality" },
  { icon: Users, text: "Dedicated team of experts committed to your success" },
  { icon: Shield, text: "Enterprise-grade security and data protection" },
  { icon: Zap, text: "Cutting-edge technology and innovative approaches" },
  { icon: Target, text: "Goal-oriented development with measurable outcomes" },
  { icon: Star, text: "98% client satisfaction and ongoing support" },
  { icon: CheckCircle, text: "End-to-end project management from concept to launch" }
]

export function WhyWorkWithUsSection() {
  // Available logos
  const logos = [
    { name: 'artfield', alt: 'Artfield' },
    { name: 'scooby', alt: 'Scooby' },
    { name: 'uhoa', alt: 'UHOA' },
    { name: 'uls', alt: 'ULS' },
    { name: 'SprintUG PNG', alt: 'SprintUG'}
  ]

  // Layout: 3,2 logos
  const logoRows = [
    ['artfield', 'scooby', 'uhoa'],
    ['uls', 'SprintUG PNG']
  ]

  return (
    <section className="py-20 px-4 sm:px-6 bg-white text-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Title and Logos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-6 leading-tight">
                Why Work With Us
              </h2>
              <div className="w-20 h-1 bg-black/50 rounded-full mb-6"></div>

              {/* Logos Displayed in 3,2 Layout */}
              <div className="space-y-4">
                {logoRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex gap-4"
                  >
                    {row.map((logoName, logoIndex) => {
                      const logo = logos.find(l => l.name === logoName)
                      return (
                      <motion.div
                          key={logoName}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: (rowIndex * 2 + logoIndex) * 0.1 }}
                        viewport={{ once: true }}
                          className="flex items-center justify-start p-3 bg-transparent rounded-md hover:bg-transparent transition-all duration-300"
                      >
                        <img
                            src={`/logos/${logoName}.png`}
                            alt={logo?.alt || logoName}
                            className="max-h-12 object-contain transition-all duration-300"
                            style={{
                              filter: 'sepia(1) hue-rotate(25deg) brightness(0.4)',
                              opacity: 0.6
                            }}
                            onMouseEnter={(e) => {
                              (e.target as HTMLImageElement).style.filter = 'none';
                              (e.target as HTMLImageElement).style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                              (e.target as HTMLImageElement).style.filter = 'sepia(1) hue-rotate(25deg) brightness(0.4)';
                              (e.target as HTMLImageElement).style.opacity = '0.6';
                            }}
                        />
                      </motion.div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Paragraph and Bullet Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              Choose NovaGen for unparalleled digital excellence. Our proven track record,
              innovative solutions, and commitment to your success make us the perfect partner
              for your next project.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-black/20 rounded-full flex items-center justify-center mt-0.5">
                      <IconComponent className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{reason.text}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
