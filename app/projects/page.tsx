"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      id: "nova-legal",
      name: "Nova Legal",
      description: "A comprehensive legal management system that streamlines case management, client records, billing, and document workflows.",
      image: "/images/lawyer-novalegal.png",
      companyLogo: "/logos/nova-legal.png",
      companyName: "Nova Generation"
    },
    {
      id: "nova-suite",
      name: "Nova Suite",
      description: "Hotel management system that streamlines reservations, front desk operations, billing, and guest management in one powerful platform.",
      image: "/images/reservation.png",
      companyLogo: "/logos/nova-suite.png",
      companyName: "Nova Generation"
    },
    {
      id: "nova-coding",
      name: "Nova Coding Club",
      description: "Providing hands-on coding lessons that build creativity and problem-solving skills, and a strong foundation in technology.",
      image: "/images/coding-nova-club.png",
      companyLogo: "/images/NOVA GEN.svg",
      companyName: "Nova Generation"
    },
    {
      id: "sprint",
      name: "Sprint Internet Uganda",
      description: "Developed a modern, responsive website for Sprint Internet, Uganda's leading internet service provider, featuring service showcases, customer portals, and seamless online experiences that improved user engagement by 40%.",
      image: "/images/network-sprinttz.png",
      companyLogo: "/logos/SprintUG PNG.png",
      companyName: "Sprint Internet"
    },
    {
      id: "inventory",
      name: "Inventory Management System",
      description: "Developed a comprehensive inventory management system with real-time stock tracking, automated reordering, barcode scanning, multi-location support, and detailed analytics dashboard for efficient warehouse and retail operations.",
      image: "/images/mobile-app-screenshot.png",
      companyLogo: "/images/NOVA GEN.svg",
      companyName: "Nova Generation"
    },
    {
      id: "sprint-tz",
      name: "Sprint Internet Tanzania",
      description: "Built a comprehensive corporate website for Sprint Internet Tanzania, featuring advanced service packages, online billing integration, customer support portals, and localized content that enhanced digital presence and customer engagement across Tanzania.",
      image: "/images/saas-screenshot.png",
      companyLogo: "/logos//sprint-tz.png",
      companyName: "Sprint Internet"
    },
    {
      id: "sprint-sa",
      name: "Sprint Internet South Africa",
      description: "Created a modern, localized website for Sprint Internet South Africa, incorporating region-specific service offerings, multi-language support, integrated payment systems, customer service platforms, and SEO optimization that boosted online visibility and customer acquisition in the South African market.",
      image: "/images/SprintSA.jpg",
      companyLogo: "/logos/SprintRSA.png",
      companyName: "Sprint Internet"
    }
  ]


  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
     {/* Hero Section */}
     <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/code-novagen.png')`,
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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="text-white block mb-2">Our Projects</span>
              </h1>
              <p className="text-xl text-white max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              Explore our projects showcasing innovative software solutions, practical applications, and technology-driven impact.
              </p>
            </motion.div>

            {/* Right Content - Stats/Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
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
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our diverse range of successful projects across web development, mobile apps, SaaS platforms, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project List - Left Side */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Projects</h3>
                <div className="space-y-2">
                  {projects.map((project, index) => (
                    <motion.button
                      key={project.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onClick={() => setSelectedProject(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        selectedProject === index
                          ? 'bg-[#009696] text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">{project.name}</div>
                        <div className={`text-sm ${
                          selectedProject === index ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {project.companyName}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Project Details - Right Side */}
            <div className="lg:col-span-2">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={projects[selectedProject].companyLogo}
                        alt={projects[selectedProject].companyName}
                        className="w-16 h-16 object-contain rounded-lg bg-white p-3 shadow-sm"
                      />
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {projects[selectedProject].name}
                        </h2>
                        <div className="flex items-center text-[#009696] font-medium">
                          <span>by {projects[selectedProject].companyName}</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        const urls = {
                          "nova-legal": "https://novalegal.app",
                          "nova-suite": "https://novasuite.app",
                          "nova-coding": "https://club.novageneration.tech/",
                          "sprint": "https://sprintug.com",
                          "inventory": "https://nova-mobile.app",
                          "sprint-tz": "https://sprinttz.co.tz",
                          "sprint-sa": "https://sprintsa.co.za"
                        };
                      }}
                      className="bg-[#009696] hover:bg-[#009696]/90 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {projects[selectedProject].description}
                  </p>

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined process ensures efficient project delivery from concept to completion.
            </p>
          </motion.div>

          {/* Horizontal Process Timeline */}
          <div className="relative">

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {[
                { id: 1, title: "Discovery", description: "Gathering requirements" },
                { id: 2, title: "Planning", description: "Creating project roadmap" },
                { id: 3, title: "Design", description: "UI/UX design & prototype phase" },
                { id: 4, title: "Development", description: "Building your solution" },
                { id: 5, title: "Testing", description: "Quality assurance & revisions" },
                { id: 6, title: "Launch", description: "Deployment & support" }
              ].map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-[#009696]/5 transition-colors duration-300">
                    <div className="bg-[#009696] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {step.id}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free consultation and quote for your next project
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-apps">Mobile Apps</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#009696] hover:bg-[#009696]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Get Free Quote
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  We'll get back to you within 24 hours with a detailed proposal.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
