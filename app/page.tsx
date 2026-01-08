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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] =
    useState<"idle" | "success" | "error">("idle")

  // ---------------------------
  // INPUT HANDLER
  // ---------------------------
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // ---------------------------
  // SUBMIT HANDLER (FIXED)
  // ---------------------------
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzdkuPbAde2dF3NB8vBlXXrqOHwCSpMTk81lebxj-bF_LvGvNMzZpXh2lkAYiC8YWsk/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      )

      // 🔥 CRITICAL FIX
      const text = await response.text()
      const result = JSON.parse(text)

      if (result.status === "success") {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        })
      } else {
        throw new Error(result.message || "Submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
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

        <section className="relative min-h-[75vh] px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/nova-hero.webp')" }}
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 max-w-7xl mx-auto py-32 min-h-[80vh] flex items-end pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

              <Hero onQuoteClick={() => setQuotePopupOpen(true)} />

              <div className="lg:pl-8 flex justify-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10 max-w-lg w-full min-h-[500px] flex flex-col">

                  {submitStatus === "success" ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-green-800">
                          Quote Request Sent!
                        </h3>
                        <p className="text-green-700">
                          We’ll contact you within 24 hours.
                        </p>
                      </div>
                    </div>
                  ) : submitStatus === "error" ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <XCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-red-800">
                          Submission Failed
                        </h3>
                        <p className="text-red-700">
                          Please try again.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4 flex-1">
                      <input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" required />
                      <input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" required />
                      <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                      <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" />
                      <select name="service" value={formData.service} onChange={handleInputChange} required>
                        <option value="">Select Service</option>
                        <option value="website">Website</option>
                        <option value="mobile">Mobile App</option>
                        <option value="enterprise">Enterprise</option>
                      </select>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Project details" required />

                      <button disabled={isSubmitting} className="w-full bg-[#009696] text-white py-3 rounded-lg">
                        {isSubmitting ? "Sending..." : "Get Quote"}
                      </button>
                    </form>
                  )}

                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesViewportSection />
        <IndustriesSection />
        <TechnologiesSection />
        <WhyWorkWithUsSection />
        <ProcessTimelineSection />
        <FAQSection />
        <ContactFormSection />
        <Footer />
      </div>
    </main>
  )
}
