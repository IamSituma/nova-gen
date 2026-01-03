"use client"

import { motion } from "framer-motion"
import { CheckCircle, Award, Clock, Users, Shield, Zap, Target, Star } from "lucide-react"

const reasons = [
  {
    icon: Award,
    text: "Award-winning digital solutions with proven results"
  },
  {
    icon: Clock,
    text: "Fast turnaround times without compromising quality"
  },
  {
    icon: Users,
    text: "Dedicated team of experts committed to your success"
  },
  {
    icon: Shield,
    text: "Enterprise-grade security and data protection"
  },
  {
    icon: Zap,
    text: "Cutting-edge technology and innovative approaches"
  },
  {
    icon: Target,
    text: "Goal-oriented development with measurable outcomes"
  },
  {
    icon: Star,
    text: "98% client satisfaction and ongoing support"
  },
  {
    icon: CheckCircle,
    text: "End-to-end project management from concept to launch"
  }
]


export function WhyWorkWithUsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#009696] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content - 2 Column Layout */}
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
              <div className="w-20 h-1 bg-white/50 rounded-full"></div>
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

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="text-white/70 text-sm mt-6"
            >
              Join hundreds of satisfied clients who trust us with their digital transformation
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
