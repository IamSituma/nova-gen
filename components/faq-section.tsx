"use client"

import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How long does a typical software development project take?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 6-12 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web and mobile technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Docker, and more. Our team stays current with the latest technologies to deliver cutting-edge solutions."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We can create a custom support plan based on your needs."
  },
  {
    question: "How do you handle project communication and updates?",
    answer: "We believe in transparent communication. You'll have a dedicated project manager and regular check-ins via your preferred communication channel. We use project management tools to keep you updated on progress, milestones, and any potential challenges."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. The best approach depends on your project type and requirements. We provide detailed quotes after understanding your needs."
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We understand the unique challenges faced by startups and offer flexible payment terms and scalable solutions that grow with your business."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about our services, process, and partnership approach.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#009696]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
