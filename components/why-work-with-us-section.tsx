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
  // Layout: 3,3,2 logos
  const logoRows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8]
  ]

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#009696] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 leading-tight">
                Why Work With Us
              </h2>
              <div className="w-20 h-1 bg-white/50 rounded-full mb-6"></div>

              {/* Logos Displayed in 3,3,2 Layout */}
              <div className="space-y-4">
                {logoRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex gap-4"
                    // Limit bottom row width to match 3-logo row
                    style={{
                      width: row.length === 2 ? "calc((100% - 2 * 1rem) / 3 * 2 + 1rem)" : "100%"
                    }}
                  >
                    {row.map((logoIdx) => (
                      <motion.div
                        key={logoIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: logoIdx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center p-2 bg-white/20 rounded-md hover:bg-white/30 transition flex-1"
                      >
                        <img
                          src={`/logos/logo-${logoIdx}.png`} // replace with actual logo paths
                          alt={`Logo ${logoIdx}`}
                          className="max-h-10 object-contain"
                        />
                      </motion.div>
                    ))}
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
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
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
                    <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white/90 leading-relaxed">{reason.text}</p>
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
