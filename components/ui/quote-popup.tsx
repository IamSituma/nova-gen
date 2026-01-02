"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Building, Target, DollarSign, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

type ConsultationData = {
  businessType: string
  companySize: string
  budget: string
  projectType: string[]
  timeline: string
  goals: string[]
  name: string
  email: string
  company: string
  phone: string
  message: string
}

interface QuotePopupProps {
  isOpen: boolean
  onClose: () => void
}

export function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [consultationData, setConsultationData] = useState<ConsultationData>({
    businessType: "",
    companySize: "",
    budget: "",
    projectType: [],
    timeline: "",
    goals: [],
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  // Update header dropdown when data changes
  useEffect(() => {
    const updateData = {
      service: consultationData.projectType.join(", "),
      businessName: consultationData.company,
      businessType: consultationData.businessType,
      companySize: consultationData.companySize,
      budget: consultationData.budget,
      timeline: consultationData.timeline,
      contactName: consultationData.name,
      email: consultationData.email,
    }

    if (Object.values(updateData).some((val) => val && val.trim() !== "")) {
      window.dispatchEvent(new CustomEvent("showProfileDropdown", { detail: updateData }))
      window.dispatchEvent(new CustomEvent("updateProfileDropdown", { detail: updateData }))
    }
  }, [consultationData])

  // ESC key to close popup and prevent body scroll
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    if (isOpen) {
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscKey)
    } else {
      // Restore body scroll when popup is closed
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      // Cleanup: restore scroll when component unmounts
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const steps = [
    { id: "business", title: "Business", icon: Building },
    { id: "project", title: "Project", icon: Target },
    { id: "budget", title: "Budget", icon: DollarSign },
    { id: "timeline", title: "Timeline", icon: Clock },
    { id: "contact", title: "Contact", icon: Send },
  ]

  const businessTypes = [
    { id: "startup", label: "Startup", description: "Early-stage innovation", icon: "🚀" },
    { id: "smb", label: "Small Business", description: "Established enterprise", icon: "🏢" },
    { id: "enterprise", label: "Enterprise", description: "Large corporation", icon: "🏛️" },
    { id: "agency", label: "Agency", description: "Creative & marketing", icon: "🎨" },
  ]

  const projectTypes = [
    { id: "website", label: "Website Development", icon: "🌐" },
    { id: "mobile", label: "Mobile App", icon: "📱" },
    { id: "ecommerce", label: "E-Commerce", icon: "🛒" },
    { id: "enterprise", label: "Enterprise Software", icon: "⚙️" },
  ]

  const budgets = [
    { id: "5k-15k", label: "$5K - $15K", description: "Basic projects" },
    { id: "15k-50k", label: "$15K - $50K", description: "Medium complexity" },
    { id: "50k-150k", label: "$50K - $150K", description: "Enterprise solutions" },
    { id: "150k+", label: "$150K+", description: "Custom enterprise" },
  ]

  const timelines = [
    { id: "1-3", label: "1-3 months", description: "Quick delivery" },
    { id: "3-6", label: "3-6 months", description: "Standard timeline" },
    { id: "6-12", label: "6-12 months", description: "Complex projects" },
    { id: "12+", label: "12+ months", description: "Enterprise scale" },
  ]

  const handleNext = () => { if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1) }
  const handleBack = () => { if (currentStep > 0) setCurrentStep(currentStep - 1) }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    onClose()
    setConsultationData({
      businessType: "",
      companySize: "",
      budget: "",
      projectType: [],
      timeline: "",
      goals: [],
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    })
    setCurrentStep(0)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Business
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What type of business are you?</h3>
              <p className="text-sm text-gray-600">Help us understand your business context</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setConsultationData({ ...consultationData, businessType: type.id })}
                  className={`p-3 border rounded-lg text-center transition-all ${
                    consultationData.businessType === type.id
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  <div className="text-xl mb-1">{type.icon}</div>
                  <div className="text-sm font-medium">{type.label}</div>
                </button>
              ))}
            </div>
          </div>
        )
      case 1: // Project
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What type of project interests you?</h3>
              <p className="text-sm text-gray-600">Select all that apply</p>
            </div>
            <div className="space-y-2">
              {projectTypes.map((project) => (
                <button
                  key={project.id}
                  onClick={() => {
                    const updated = consultationData.projectType.includes(project.id)
                      ? consultationData.projectType.filter(id => id !== project.id)
                      : [...consultationData.projectType, project.id]
                    setConsultationData({ ...consultationData, projectType: updated })
                  }}
                  className={`w-full p-3 border rounded-lg text-left transition-all ${
                    consultationData.projectType.includes(project.id)
                      ? "border-purple-500 bg-purple-50 text-purple-700"
                      : "border-gray-300 hover:border-purple-300 hover:bg-purple-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{project.icon}</span>
                      <span className="font-medium">{project.label}</span>
                    </div>
                    {consultationData.projectType.includes(project.id) && (
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )
      case 2: // Budget
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's your budget range?</h3>
              <p className="text-sm text-gray-600">This helps us match you with appropriate solutions</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {budgets.map((budget) => (
                <button
                  key={budget.id}
                  onClick={() => setConsultationData({ ...consultationData, budget: budget.id })}
                  className={`p-4 border rounded-lg text-center transition-all ${
                    consultationData.budget === budget.id
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-gray-300 hover:border-green-300 hover:bg-green-50"
                  }`}
                >
                  <div className="font-semibold text-lg">{budget.label}</div>
                  <div className="text-sm opacity-75">{budget.description}</div>
                </button>
              ))}
            </div>
          </div>
        )
      case 3: // Timeline
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's your preferred timeline?</h3>
              <p className="text-sm text-gray-600">When would you like to launch your project?</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {timelines.map((timeline) => (
                <button
                  key={timeline.id}
                  onClick={() => setConsultationData({ ...consultationData, timeline: timeline.id })}
                  className={`p-4 border rounded-lg text-center transition-all ${
                    consultationData.timeline === timeline.id
                      ? "border-orange-500 bg-orange-50 text-orange-700"
                      : "border-gray-300 hover:border-orange-300 hover:bg-orange-50"
                  }`}
                >
                  <div className="font-semibold text-lg">{timeline.label}</div>
                  <div className="text-sm opacity-75">{timeline.description}</div>
                </button>
              ))}
            </div>
          </div>
        )
      case 4: // Contact
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Let's get in touch!</h3>
              <p className="text-sm text-gray-600">We'll reach out within 24 hours with a personalized quote</p>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name *"
                value={consultationData.name}
                onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={consultationData.email}
                onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                value={consultationData.company}
                onChange={(e) => setConsultationData({ ...consultationData, company: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={consultationData.phone}
                onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                placeholder="Tell us about your project... *"
                value={consultationData.message}
                onChange={(e) => setConsultationData({ ...consultationData, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
            </div>
          </div>
        )
      default: return null
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div className="w-full max-w-2xl relative">
              {/* Modal Content */}
              <div
                className="bg-white rounded-2xl shadow-2xl overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button - Inside modal, top right */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-[102] text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100 shadow-md bg-white"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="min-h-[400px] flex flex-col justify-center"
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {steps[currentStep].title}
                        </h3>
                      </div>

                      {renderStepContent()}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                    <Button onClick={handleBack} disabled={currentStep === 0} variant="outline" className="disabled:opacity-50">
                      Back
                    </Button>

                    {currentStep < steps.length - 1 ? (
                      <Button
                        onClick={handleNext}
                        disabled={
                          (currentStep === 0 && !consultationData.businessType) ||
                          (currentStep === 1 && consultationData.projectType.length === 0) ||
                          (currentStep === 2 && !consultationData.budget) ||
                          (currentStep === 3 && !consultationData.timeline)
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        disabled={!consultationData.name || !consultationData.email || !consultationData.message || isSubmitting}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="w-4 h-4 mr-2" />
                            Send Quote Request
                          </div>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
