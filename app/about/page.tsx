"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  Users,
  Target,
  Code,
  Heart,
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Zap,
  TrendingUp
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/novagen-hero.png')`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight">
                <span className="text-white block mb-2">About NovaGen</span>
              </h1>
              <p className="text-lg text-white max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
                Nova Gen is a dynamic and innovative technology solutions provider, offering a comprehensive suite of services tailored to meet the evolving needs of businesses in the digital era. Specializing in mobile app development, Nova Gen excels in creating cutting-edge and user-friendly applications that elevate the mobile experience for clients and end-users.
              </p>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">5+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80">Client Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/80">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-gray-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leaders, discover how NovaGen came to be and our journey in transforming digital landscapes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We build functional and engaging web and mobile products for businesses in diverse industries. Our broad scope of technologies allows us to select the best-fit approach for your specific project. Our engineers create progressive web apps, desktop apps, e-commerce stores, and more.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We stay updated with the latest technology and follow best practices to ensure our solutions are strong, scalable, and fit your unique requirements. Whether you want to improve your online presence, streamline your operations, or develop a new product from scratch, we have the expertise to make your vision a reality.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-500 shadow-2xl">
                  <img
                    src="/images/novagen-hero.png"
                    alt="NovaGen Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              A Message from Our CEO
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-[#009696] rounded-2xl p-8 text-white shadow-2xl">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-white/80 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-xl leading-relaxed mb-6 italic">
                  "At Nova Gen, we believe technology should empower businesses, not complicate them. Our mission is to deliver innovative solutions that drive real results and transform how our clients operate in the digital world.
                  <br /><br />
                  With over 5 years of experience and a team of passionate experts, we've helped countless businesses achieve their digital transformation goals. We don't just build software – we build partnerships that last.
                  <br /><br />
                  Choose Nova Gen for excellence, innovation, and results that matter."
                </blockquote>
                <div className="border-t border-white/30 pt-6">
                  <div className="font-bold text-xl">Nabilah Kitiibwa</div>
                  <div className="text-white/80">Chief Executive Officer</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                  <img
                    src="/images/ceo-nabilah.jpg"
                    alt="Nabilah Kitiibwa - CEO"
                    className="w-72 h-72 object-cover object-top rounded-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-black mb-2">Nabilah Kitiibwa</h3>
                <p className="text-lg text-black mb-4">Nova Generation Limited</p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a
                    href="https://linkedin.com/company/nova-generation-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black hover:text-[#009696] transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <div className="flex items-center text-black">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    5+ Years Leading Tech Innovation
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Excellence",
                description: "We strive for perfection in every project, delivering high-quality solutions that exceed expectations."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Integrity",
                description: "Honesty, transparency, and ethical practices are at the core of all our relationships."
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Innovation",
                description: "We embrace cutting-edge technologies and creative solutions to solve complex problems."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                description: "We believe in the power of teamwork and building strong partnerships with our clients."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NovaGen – Image + Progress Style */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE CARD */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/why-novagen.jpg"
                  alt="Why Choose NovaGen"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 bg-[#0B1C3F] text-white p-6 rounded-2xl w-64 shadow-xl">
                <div className="mb-3">
                  <TrendingUp className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold leading-snug">
                  IT Solutions For<br />The Modern Business.
                </h4>
                <ArrowRight className="w-6 h-6 mt-4 text-emerald-400" />
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-white bg-[#006969] rounded-full">
                WHY CHOOSE NOVAGEN
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                We Build Scalable Solutions <br className="hidden sm:block" />
                That Grow Your Business
              </h2>

              <p className="text-gray-600 text-lg mb-10 max-w-xl">
                Our consultants provide high-quality technical expertise and strategic
                guidance, helping organizations adopt the best long-term digital
                solutions tailored to their unique goals.
              </p>

              {/* PROGRESS BARS */}
              <div className="space-y-8">
                {[
                  { label: "Strategic Analysis", value: 85 },
                  { label: "Development Experience", value: 90 },
                  { label: "Enterprise Solutions", value: 95 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        {item.label}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {item.value}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-[#006969] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-flex items-center bg-[#006969] hover:bg-[#006969]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                >
                  Discover More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
