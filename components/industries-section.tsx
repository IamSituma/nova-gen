"use client"

import { motion } from "framer-motion"
import {
  Heart,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Building,
  Factory,
  Hotel,
  Users,
  Building2,
  Truck,
  Briefcase,
} from "lucide-react"

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    description: "We create secure, standards-compliant healthcare solutions for Uganda, including patient management, telemedicine, and medical data analytics to improve care and efficiency while meeting local regulations.",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    stats: "10+ Projects"
  },
  {
    id: "finance",
    name: "Finance & FinTech",
    icon: DollarSign,
    description: "Secure financial applications, banking platforms, payment gateways, and blockchain solutions that meet the highest security standards and regulatory requirements.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    stats: "20+ Projects"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingCart,
    description: "Custom online stores, marketplace platforms, inventory management systems, and payment integrations that drive sales and enhance customer experiences.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    stats: "15+ Projects"
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Learning management systems, student portals, virtual classrooms, and educational apps that make learning more accessible and engaging for students and educators.",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
    stats: "25+ Projects"
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building,
    description: "Property management systems, real estate marketplaces, virtual tours, and CRM solutions that streamline property transactions and tenant management.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    stats: "18+ Projects"
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    description: "Hotel booking systems, restaurant management platforms, travel apps, and customer experience solutions that enhance guest satisfaction and operational efficiency.",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    stats: "10+ Projects"
  },
]

export function IndustriesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We bring deep industry expertise and tailored solutions to businesses across diverse sectors,
            helping organizations of all sizes achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${industry.bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${industry.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-start pt-4 border-t border-gray-200">
                  <div className={`text-sm font-semibold bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                    {industry.stats}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
