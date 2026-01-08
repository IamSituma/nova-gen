"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Search,
  Palette,
  Code,
  TestTube,
  Rocket,
  Headphones,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const processSteps = [
  {
    id: 1,
    title: "Discovery & Planning",
    icon: Search,
    description: "We start by understanding your business goals, target audience, and project requirements through in-depth consultation and research.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Design & Prototyping",
    icon: Palette,
    description: "Our designers create wireframes, mockups, and interactive prototypes to visualize the user experience and interface.",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Development",
    icon: Code,
    description: "Our expert developers build your solution using cutting-edge technologies, following best practices and agile methodologies.",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    icon: TestTube,
    description: "Rigorous testing ensures your application is bug-free, secure, and performs optimally across all devices and browsers.",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Deployment & Launch",
    icon: Rocket,
    description: "We handle the deployment process, ensuring a smooth launch with minimal downtime and maximum performance.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Support & Maintenance",
    icon: Headphones,
    description: "Ongoing support, updates, and maintenance to keep your application running smoothly and evolving with your needs.",
    color: "from-teal-500 to-green-500"
  }
]

export function ProcessTimelineSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white text-gray-900">
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
            Our Software Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we follow a proven methodology to deliver exceptional
            digital solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-900 rounded-full shadow-lg z-10">
                    <div className="w-full h-full bg-gray-900 rounded-full animate-pulse"></div>
                  </div>

                  {/* Step Number - Mobile */}
                  <div className="lg:hidden flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full font-bold mb-4">
                    {step.id}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Icon and Title */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <div className={`hidden lg:flex items-center space-x-2 text-sm font-medium bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                            <span>Step {step.id}</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Mobile Step Indicator */}
                      <div className="lg:hidden flex items-center justify-center mt-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Step {step.id} of 6</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block w-2/12"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <div className="inline-flex items-center space-x-4 bg-gray-900 text-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <span className="font-semibold">Ready to start your project?</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
