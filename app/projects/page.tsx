"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ExternalLink, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwjmN1IyIpoUOSnqQJtsUnoxBnzEvFNBTXjgC-mZmtUAQ-X6ow5Ze6u05HyzwAwYk9D/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, formType: "project-quote" })
        }
      )
      setSubmitStatus("success")
      setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" })
    } catch (error) {
      console.error("Submission failed:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const projects = [
    { id: "nova-legal", name: "Nova Legal", description: "A comprehensive legal management system that streamlines case management, client records, billing, and document workflows.", image: "/images/lawyer-novalegal.png"},
    { id: "nova-suite", name: "Nova Suite", description: "Hotel management system that streamlines reservations, front desk operations, billing, and guest management in one powerful platform.", image: "/images/reservation.png"},
    { id: "sprint", name: "Sprint Internet Uganda", description: "Developed a modern, responsive website for Sprint Internet, Uganda's leading internet service provider, featuring service showcases, customer portals, and seamless online experiences that improved user engagement by 40%.", image: "/images/network-sprinttz.png"},
    { id: "inventory", name: "Inventory Management System", description: "Developed a comprehensive inventory management system with real-time stock tracking, automated reordering, barcode scanning, multi-location support, and detailed analytics dashboard for efficient warehouse and retail operations.", image: "/images/mobile-app-screenshot.png" },
    { id: "sprint-tz", name: "Sprint Internet Tanzania", description: "Built a comprehensive corporate website for Sprint Internet Tanzania, featuring advanced service packages, online billing integration, customer support portals, and localized content that enhanced digital presence and customer engagement across Tanzania.", image: "/images/saas-screenshot.png" },
    { id: "sprint-sa", name: "Sprint Internet South Africa", description: "Created a modern, localized website for Sprint Internet South Africa, incorporating region-specific service offerings, multi-language support, integrated payment systems, customer service platforms, and SEO optimization that boosted online visibility and customer acquisition in the South African market.", image: "/images/SprintSA.jpg"}
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden w-full max-w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/nova-contact-hero.webp')" }}
        />
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#009696]/30 via-white-300/90 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white"> Projects </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                From web platforms to enterprise systems, we design and build practical solutions that solve real problems and create measurable impact. 
              </motion.p>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl"
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"
              animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Projects</h3>
                <div className="space-y-2">
                  {projects.map((project, index) => (
                    <motion.button key={project.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} onClick={() => setSelectedProject(index)} className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${selectedProject === index ? 'bg-[#009696] text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'}`}>
                      <div>
                        <div className="font-semibold">{project.name}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div key={selectedProject} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={projects[selectedProject].image} alt={projects[selectedProject].name} className="w-full h-full object-cover" />
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <Button className="bg-[#009696] hover:bg-[#009696]/90 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" /> Visit Website
                    </Button>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{projects[selectedProject].description}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Our streamlined process ensures efficient project delivery from concept to completion.</p>
          </motion.div>

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
                <motion.div key={step.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="text-center">
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-[#009696]/5 transition-colors duration-300">
                    <div className="bg-[#009696] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">{step.id}</div>
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8">Get a free consultation and quote for your next project</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors" placeholder="Enter your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                      if (value.length <= 10) {
                        setFormData({ ...formData, phone: value });
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors"
                    placeholder="0712345678"
                  />
                  <p className="text-xs text-gray-500 mt-1">Enter 10 digits (e.g., 0712345678)</p>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors appearance-none">
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-apps">Mobile Apps</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors resize-none" placeholder="Tell us about your project..." />
              </div>

              <div className="text-center">
                <button type="submit" disabled={isSubmitting} className="bg-[#009696] hover:bg-[#009696]/90 disabled:opacity-50 disabled:cursor-not-allowed text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Get Free Quote"
                  )}
                </button>
                {submitStatus === "success" && <p className="text-green-600 mt-3">Thank you! We'll get back to you soon.</p>}
                {submitStatus === "error" && <p className="text-red-600 mt-3">Oops! Something went wrong. Try again.</p>}
                {submitStatus === "idle" && <p className="text-gray-500 mt-3">We'll get back to you within 24 hours with a detailed proposal.</p>}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
