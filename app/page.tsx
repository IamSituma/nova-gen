"use client"

import { useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/ui/animated-hero"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { ServicesViewportSection } from "@/components/services-viewport-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { WhyWorkWithUsSection } from "@/components/why-work-with-us-section"
import { ProcessTimelineSection } from "@/components/process-timeline-section"
import { FAQSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { IndustriesSection } from "@/components/industries-section"

export default function Home() {
  const [quotePopupOpen, setQuotePopupOpen] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Input change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Form submit handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (isSubmitting) return
  
    setIsSubmitting(true)
    setSubmitStatus("idle")
  
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwjmN1IyIpoUOSnqQJtsUnoxBnzEvFNBTXjgC-mZmtUAQ-X6ow5Ze6u05HyzwAwYk9D/exec",
        {
          method: "POST",
          mode: "no-cors", // ✅ VERY IMPORTANT
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      )
  
      // ✅ If fetch completes, assume success
      setSubmitStatus("success")
  
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      })
    } catch (error) {
      console.error("Submission failed:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden">
      <div className="relative z-10 bg-white">
        <NavBar />
        <ProfileDropdown />

        {/* Hero Section */}
        <section className="relative min-h-[75vh] px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/nova-hero.webp')" }}
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10 max-w-7xl mx-auto py-32 min-h-[80vh] flex items-end pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex flex-col justify-start items-start w-full">
              {/* Left Side - Hero */}
              <div className="space-y-8">
                <Hero onQuoteClick={() => setQuotePopupOpen(true)} />
              </div>

              {/* Right Side - Quote Form */}
            {/* Right Side - Quote Form */}
<div className="lg:pl-8 flex justify-center items-start">
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-8 border border-white/10 max-w-md sm:max-w-lg w-full min-h-[500px] flex flex-col">
    
    {submitStatus === 'success' ? (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">Quote Request Sent!</h3>
          <p className="text-green-700">Thank you! We'll get back to you within 24 hours.</p>
        </div>
      </div>
    ) : submitStatus === 'error' ? (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-red-800 mb-2">Something went wrong</h3>
          <p className="text-red-700">Please try again or contact us directly.</p>
        </div>
      </div>
    ) : (
      <>
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-white mb-1">Get a Free Quote</h3>
          <p className="text-sm text-white">We'll respond within 24 hours</p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
          
          {/* First & Last Name in 2 columns */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009696] focus:border-transparent"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009696] focus:border-transparent"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009696] focus:border-transparent"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009696] focus:border-transparent"
          />

          {/* Service */}
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009696] focus:border-transparent bg-white appearance-none"
              required
            >
              <option value="">Select Service</option>
              <option value="website">Website Development</option>
              <option value="mobile">Mobile App</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="enterprise">Enterprise Software</option>
            </select>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Project details..."
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009696] focus:border-transparent resize-none flex-1"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#009696] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Sending...
              </div>
            ) : 'Get Quote'}
          </button>

          <div className="mt-2 sm:mt-3 text-center text-xs text-white">
            By submitting, you agree to our terms.
          </div>
        </form>
      </>
    )}
  </div>
</div>

            </div>
          </div>
        </section>

        {/* Other sections */}
        <div className="bg-white">
          <ServicesViewportSection />
          <IndustriesSection />
          <TechnologiesSection />
          <WhyWorkWithUsSection />
          <ProcessTimelineSection />
          <FAQSection />
          <ContactFormSection />
          <Footer />
        </div>
      </div>
    </main>
  )
}
