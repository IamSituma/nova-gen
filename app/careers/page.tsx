"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  Code,
  Users,
  Target,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle,
  Mail,
  FileText,
  AlertCircle,
} from "lucide-react"

interface JobListing {
  id: string
  title: string
  category: string
  type: string
  location: string
  salary: string
  experience: string
  description: string
  requirements: string[]
  benefits: string[]
}

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const resumeInputRef = useRef<HTMLInputElement>(null)

  const jobCategories = [
    { id: "all", label: "All Roles", count: 0 },
    { id: "development", label: "Development", count: 0 },
    { id: "design", label: "Design", count: 0 },
    { id: "product", label: "Product", count: 0 },
  ]

  const jobListings: JobListing[] = [] // Currently empty

  const filteredJobs: JobListing[] = selectedCategory === "all"
    ? jobListings
    : jobListings.filter(job => job.category === selectedCategory)

  // -------------------------
  // CV Submission Handler
  // -------------------------
  const handleResumeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    const target = e.currentTarget
    const fullName = (target.fullName as HTMLInputElement).value
    const email = (target.email as HTMLInputElement).value
    const phone = (target.phone as HTMLInputElement).value
    const position = (target.position as HTMLSelectElement).value

    if (!selectedFile) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024 // 10MB in bytes
    if (selectedFile.size > maxSize) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(selectedFile.type)) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onloadend = async () => {
      const base64Resume = reader.result as string

      const payload = {
        formType: "cv-submission",
        fullName,
        email,
        phone,
        position,
        resume: base64Resume,
        fileName: selectedFile.name,
        fileType: selectedFile.type
      }

      try {
        await fetch("https://script.google.com/macros/s/AKfycbwjmN1IyIpoUOSnqQJtsUnoxBnzEvFNBTXjgC-mZmtUAQ-X6ow5Ze6u05HyzwAwYk9D/exec",
           {
          method: "POST",
          mode: "no-cors", // ✅ bypass CORS
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        })

        // ✅ Assume success even with no-cors
        setSubmitStatus("success")
        target.reset()
        // Clear file input and state
        setSelectedFile(null)
        if (resumeInputRef.current) {
          resumeInputRef.current.value = ''
        }

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } catch (error) {
        console.error("Submission failed:", error)
        setSubmitStatus("error")
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[25vh] sm:min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/job-novagen.jpg")' }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-8 leading-tight">
                <span className="text-white block mb-2">Join Our Team</span>
              </h1>
              <p className="text-base sm:text-lg text-white max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
                Help us build the future of digital innovation. We're always looking for talented individuals who are passionate about creating exceptional software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/60 rounded-full px-10 py-3">
                  <span className="text-base font-semibold whitespace-nowrap">Remote-First Culture</span>
                </div>
                <div className="bg-white/60 rounded-full px-10 py-3">
                  <span className="text-base font-semibold whitespace-nowrap">Innovative Projects</span>
                </div>
                <div className="bg-white/60 rounded-full px-10 py-3">
                  <span className="text-base font-semibold whitespace-nowrap">Growth Opportunities</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover exciting career opportunities and be part of our mission to transform businesses through technology.
            </p>
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#009696] text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-[#009696] hover:text-[#009696]"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Job Listings */}
          {filteredJobs.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center"><Briefcase className="w-4 h-4 mr-1" />{job.type}</div>
                          <div className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{job.location}</div>
                          <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{job.experience}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-bold text-[#009696]">{job.salary}</div>
                        <div className="text-sm text-gray-500">per year</div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div className="text-center py-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Open Positions</h3>
                <p className="text-gray-600 mb-8">
                  We're always growing our team! Send us your resume for future opportunities.
                </p>
                <button
                  onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#009696] hover:bg-[#009696]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center mx-auto"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Resume Anyway
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Join NovaGen Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Why Join NovaGen?
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  We're more than just a workplace – we're a community of innovators building the future together.
                  Here's what you can expect when you join our team.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#009696]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#009696]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mission-Driven Work</h3>
                    <p className="text-gray-600">
                      Work on projects that make a real impact. Every solution we build helps businesses grow and succeed in the digital world.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#009696]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#009696]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Culture</h3>
                    <p className="text-gray-600">
                      Join a supportive team where your ideas matter. We value diverse perspectives and foster an inclusive environment for everyone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#009696]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-[#009696]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">
                      Stay at the forefront of technology trends. Work with the latest tools, frameworks, and methodologies in software development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#009696]/20 to-[#007a7a]/20">
                <img
                  src="/images/novagen-hero.png"
                  alt="NovaGen Team Collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Send Resume Form Section */}
      <section id="partnership-form" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white text-left">Join Our Talent Pool</h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed text-left">
                Even if we don't have open positions that match your profile, we'd love to hear from you. Send us your resume and we'll keep it on file for future opportunities.
              </p>
            </div>

            {/* Right Column - Form */}
            <motion.div className="bg-white rounded-2xl shadow-lg p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <form className="space-y-6" onSubmit={handleResumeSubmit}>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors" placeholder="Enter your full name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors" placeholder="0700 123 456" />
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">Position of Interest</label>
                  <select id="position" name="position" className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors appearance-none">
                    <option value="">Select a position (optional)</option>
                    <option value="frontend-developer">Frontend Developer</option>
                    <option value="backend-developer">Backend Developer</option>
                    <option value="fullstack-developer">Full-Stack Developer</option>
                    <option value="mobile-developer">Mobile Developer</option>
                    <option value="ui-ux-designer">UI/UX Designer</option>
                    <option value="devops-engineer">DevOps Engineer</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
                  {!selectedFile ? (
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#009696] transition-colors">
                      <div className="space-y-1 text-center">
                        <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="resume" className="relative cursor-pointer bg-white rounded-md font-medium text-[#009696] hover:text-[#007a7a]">
                            <span>Upload your resume</span>
                            <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className="sr-only" ref={resumeInputRef} onChange={handleFileChange} />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-green-300 border-dashed rounded-lg bg-green-50 transition-colors">
                      <div className="space-y-1 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                          <FileText className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="text-sm text-green-700 font-medium">
                          {selectedFile.name}
                        </div>
                        <div className="text-xs text-green-600">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • Ready to upload
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedFile(null)
                            if (resumeInputRef.current) {
                              resumeInputRef.current.value = ''
                            }
                          }}
                          className="text-xs text-red-600 hover:text-red-800 underline mt-2"
                        >
                          Remove file
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#009696] hover:bg-[#009696]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: [1, 1.01, 1] } : {}}
                    whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <motion.div
                            className="absolute inset-0 w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Sending Resume...
                        </motion.span>
                      </div>
                    ) : (
                      <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Mail className="w-5 h-5" />
                        </motion.div>
                        <span>Send Resume</span>
                      </motion.div>
                    )}
                  </motion.button>
                  <p className="text-sm text-gray-500 mt-3">
                    By submitting this form, you agree to our privacy policy and consent to being contacted about future opportunities.
                  </p>
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg mt-4"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0"/>
                      <p className="text-green-700 dark:text-green-300">Thank you! Your resume has been submitted successfully.</p>
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg mt-4"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0"/>
                      <p className="text-red-700 dark:text-red-300">Sorry, there was an error submitting your resume. Please try again.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
