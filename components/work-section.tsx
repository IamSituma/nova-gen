"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function WorkSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the quality and innovation that defines our digital solutions.
            Each project reflects our commitment to excellence and client success.
          </p>
        </motion.div>

        {/* Work Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Work Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/work.png"
              alt="Our Work Showcase"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Content Overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Transforming Ideas into Digital Reality
                </h3>
                <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-2xl">
                  From concept to completion, we bring your vision to life with cutting-edge technology
                  and unparalleled attention to detail.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    Web Development
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    Mobile Apps
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    UI/UX Design
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats or Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#009696] mb-2">150+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#009696] mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#009696] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our portfolio of success stories?
          </p>
          <div className="inline-flex items-center space-x-2 text-[#009696] font-semibold">
            <span>Let's discuss your next project</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
