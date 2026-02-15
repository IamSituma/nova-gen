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
    id: "legal-services",
    name: "Legal Services",
    icon: Briefcase,
    description: "Legal practice management systems, case management platforms, document automation tools, and compliance solutions that streamline legal workflows and enhance client service delivery.",
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "finance",
    name: "Finance & FinTech",
    icon: DollarSign,
    description: "Secure financial applications, banking platforms, payment gateways, and blockchain solutions that meet the highest security standards and regulatory requirements.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingCart,
    description: "Custom online stores, marketplace platforms, inventory management systems, and payment integrations that drive sales and enhance customer experiences.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50"
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Learning management systems, student portals, virtual classrooms, and educational apps that make learning more accessible and engaging for students and educators.",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50"
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building,
    description: "Property management systems, real estate marketplaces, virtual tours, and CRM solutions that streamline property transactions and tenant management.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50"
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    description: "Hotel booking systems, restaurant management platforms, travel apps, and customer experience solutions that enhance guest satisfaction and operational efficiency.",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50"
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
          <h2 className="text-l sm:text-xl lg:text-4xl font-black mb-6 text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-l sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
        {/* Icon and Title - same line for all screens */}
        <div className="flex flex-row items-center mb-4">
          <div
            className={`inline-flex items-center justify-center 
                        w-10 h-10 md:w-14 md:h-14 
                        rounded-xl bg-gradient-to-r ${industry.color} 
                        text-white mr-4 
                        group-hover:scale-110 transition-transform duration-300`}
          >
            <IconComponent className="w-5 h-5 md:w-7 md:h-7" />
          </div>

          <h3 className="text-xl font-bold text-gray-900">
            {industry.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {industry.description}
        </p>

        {/* Hover Effect */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
        />
      </motion.div>
    )
  })}
</div>

      </div>
    </section>
  )
}
