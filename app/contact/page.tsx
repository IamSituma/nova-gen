"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          mode: "no-cors", // ✅ bypass CORS
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, formType: "contact" }),
        }
      )

      // ✅ Assume success even with no-cors
      setSubmitStatus("success")
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 5000)

    } catch (error) {
      console.error("Submission failed:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, title: "Email", description: "info@novageneration.tech" },
    { icon: Phone, title: "Phone", description: "+256 741 004 466" },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">

      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden w-full max-w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/nova-contact-hero.webp')" }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-emerald-500/10 to-transparent"></div>

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
                <span className="text-white">Ready to Build Something Amazing? </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Connect with our expert team and transform your vision into reality.
                From web apps to mobile solutions, we're here to bring your ideas to life.
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

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8">
                Ready to start your project? We'd love to hear from you.
                Send us a message and we'll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your full name"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+256 XXX XXX XXX"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"/>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="What's this about?"/>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."/>
                </div>

                <motion.button type="submit" disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-emerald-500 text-white rounded-lg font-semibold flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <motion.div className="w-5 h-5 border-2 border-white border-t-white rounded-full animate-spin"/>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5"/>
                      <span>Send Message</span>
                    </div>
                  )}
                </motion.button>
              </form>

              {/* Status */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg mt-4">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0"/>
                    <p className="text-green-700 dark:text-green-300">Thank you! Your message has been sent successfully.</p>
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg mt-4">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0"/>
                    <p className="text-red-700 dark:text-red-300">Sorry, there was an error sending your message. Please try again.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center space-x-4 p-6 bg-gradient-to-r from-primary/5 to-emerald-500/5 border border-primary/20 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-emerald-500 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white"/>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}

                {/* Map Section */}
                <div className="mt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Visit Our Office</h2>
                  <div className="h-96 w-full rounded-xl overflow-hidden shadow-xl border border-border">
                    <iframe
                      src="https://maps.google.com/maps?q=Bandali%20Rise%20Studio%20House%20Bugolobi%20Kampala%20Uganda&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Novagen Office Location - Bandali Rise, Studio House, Bugolobi"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-emerald-500/10 px-4 py-2 rounded-full border border-primary/20">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium text-foreground">
                        Bandali Rise, Studio House, Bugolobi, Kampala, Uganda
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
