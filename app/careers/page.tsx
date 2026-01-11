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
  ArrowRight,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

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
  const [applyModalOpen, setApplyModalOpen] = useState(false)
  const [selectedJobForApplication, setSelectedJobForApplication] = useState<JobListing | null>(null)
  const [applicationFormData, setApplicationFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    githubLink: "",
    portfolioLink: ""
  })
  const [applicationFile, setApplicationFile] = useState<File | null>(null)
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null)
  const [shareToast, setShareToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" })
  const applicationFileInputRef = useRef<HTMLInputElement>(null)
  const coverLetterFileInputRef = useRef<HTMLInputElement>(null)
  const resumeInputRef = useRef<HTMLInputElement>(null)

  const jobCategories = [
    { id: "all", label: "All Roles", count: 3 },
    { id: "development", label: "Development", count: 1 },
    { id: "design", label: "Design", count: 1 },
    { id: "product", label: "Product", count: 1 },
  ]

  const jobListings: JobListing[] = [
    {
      id: "dev-001",
      title: "Senior Full-Stack Developer",
      category: "development",
      type: "Full-time",
      location: "Remote",
      salary: "$80,000 - $120,000",
      experience: "5+ years",
      description: "We're looking for an experienced Full-Stack Developer to join our core development team. You'll work on building scalable web applications using React, Node.js, and cloud technologies. You'll have the opportunity to lead technical initiatives and mentor junior developers.",
      requirements: [
        "5+ years of professional development experience",
        "Expert proficiency in React/Next.js and Node.js",
        "Strong understanding of database design (SQL & NoSQL)",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Git and CI/CD pipeline experience",
        "Excellent problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity options",
        "Remote-first work culture",
        "Professional development budget",
        "Health insurance and wellness programs",
        "Flexible working hours",
        "Annual performance bonuses"
      ]
    },
    {
      id: "design-001",
      title: "UI/UX Designer",
      category: "design",
      type: "Full-time",
      location: "Remote",
      salary: "$60,000 - $90,000",
      experience: "3+ years",
      description: "Join our design team to create beautiful and intuitive user experiences for our suite of digital products. You'll collaborate with product managers and developers to design and prototype innovative solutions. Work with modern design tools and contribute to establishing design systems.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe XD, or similar design tools",
        "Strong portfolio demonstrating design thinking",
        "Understanding of user research and usability principles",
        "Experience with design systems and component libraries",
        "Knowledge of web and mobile design best practices"
      ],
      benefits: [
        "Creative freedom and innovative projects",
        "Collaborative team environment",
        "Design tools and resources stipend",
        "Flexible work schedule",
        "Professional development opportunities",
        "Comprehensive health benefits"
      ]
    },
    {
      id: "product-001",
      title: "Product Manager",
      category: "product",
      type: "Full-time",
      location: "Hybrid (Kampala, Uganda)",
      salary: "$70,000 - $100,000",
      experience: "4+ years",
      description: "Lead product strategy and development for our flagship platforms. You'll work closely with engineering, design, and business teams to define roadmaps, prioritize features, and deliver products that solve real user problems. Drive product vision and ensure successful market launches.",
      requirements: [
        "4+ years of product management experience",
        "Proven track record of launching successful products",
        "Strong analytical and data-driven decision making",
        "Experience with agile development methodologies",
        "Excellent communication and stakeholder management skills",
        "Knowledge of software development lifecycle"
      ],
      benefits: [
        "Competitive compensation and performance bonuses",
        "Stock options and equity",
        "Flexible work arrangement (hybrid)",
        "Professional development budget",
        "Team building and networking events",
        "Comprehensive benefits package"
      ]
    }
  ]

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

  // Handle share job
  const handleShareJob = (job: JobListing) => {
    const jobUrl = `${window.location.origin}/careers?job=${job.id}`
    
    // Try native share if available
    if (navigator.share) {
      navigator.share({
        title: `Join us as a ${job.title}`,
        text: `Check out this job opportunity at NovaGen: ${job.title}`,
        url: jobUrl
      }).catch(err => {
        // User cancelled, which is fine
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(jobUrl).then(() => {
        setShareToast({ show: true, message: "Link copied to clipboard!" })
        setTimeout(() => setShareToast({ show: false, message: "" }), 3000)
      })
    }
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
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      {/* Job Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{job.title}</h3>
                          <span className="px-3 py-1 bg-[#009696]/10 text-[#009696] text-xs font-semibold rounded-full">
                            {job.category.charAt(0).toUpperCase() + job.category.slice(1)}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-700">
                            <Briefcase className="w-5 h-5 text-[#009696] flex-shrink-0" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-700">
                            <MapPin className="w-5 h-5 text-[#009696] flex-shrink-0" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-700">
                            <Clock className="w-5 h-5 text-[#009696] flex-shrink-0" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="font-bold text-[#009696]">{job.salary}</span>
                          </div>
                        </div>

                        {/* Requirements Preview */}
                        <details className="mb-4">
                          <summary className="cursor-pointer text-sm font-semibold text-gray-700 hover:text-[#009696] transition-colors">
                            View Requirements & Benefits →
                          </summary>
                          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-[#009696] mt-0.5 flex-shrink-0" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                              <ul className="space-y-2">
                                {job.benefits.map((benefit, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-[#009696] mt-0.5 flex-shrink-0" />
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {/* Apply Button in Details */}
                          <div className="mt-6 flex gap-3 items-center pt-4 border-t border-gray-200">
                            <Button
                              onClick={() => {
                                setSelectedJobForApplication(job)
                                setApplyModalOpen(true)
                                setApplicationFormData({
                                  fullName: "",
                                  email: "",
                                  phone: "",
                                  githubLink: "",
                                  portfolioLink: ""
                                })
                                setCoverLetterFile(null)
                                setApplicationFile(null)
                                setSubmitStatus("idle")
                              }}
                              className="bg-[#009696] hover:bg-[#009696]/90 text-white font-semibold py-3 px-8 flex items-center justify-center gap-2 whitespace-nowrap h-12"
                            >
                              Apply Now
                              <ArrowRight className="w-5 h-5" />
                            </Button>
                            <button
                              onClick={() => handleShareJob(job)}
                              className="flex-shrink-0 h-12 px-4 rounded-lg border border-gray-300 hover:border-[#009696] hover:bg-[#009696]/5 text-gray-600 hover:text-[#009696] transition-colors duration-200 flex items-center justify-center"
                              title="Share this job"
                            >
                              <Share2 className="w-5 h-5" />
                            </button>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
              <form id="cv-submission-form" className="space-y-6" onSubmit={handleResumeSubmit}>
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
                  <label htmlFor="position-select" className="block text-sm font-medium text-gray-700 mb-2">Position of Interest</label>
                  <select id="position-select" name="position" className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors appearance-none">
                    <option value="">Select a position (optional)</option>
                    <option value="Senior Full-Stack Developer">Senior Full-Stack Developer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="frontend-developer">Frontend Developer</option>
                    <option value="backend-developer">Backend Developer</option>
                    <option value="fullstack-developer">Full-Stack Developer</option>
                    <option value="mobile-developer">Mobile Developer</option>
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

      {/* Application Modal */}
      {applyModalOpen && selectedJobForApplication && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setApplyModalOpen(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto"
          >
            <div className="p-5">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Apply Now</h3>
                  <p className="text-sm text-gray-600">Position: <span className="font-semibold text-[#009696]">{selectedJobForApplication.title}</span></p>
                </div>
                <button
                  onClick={() => setApplyModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 text-3xl font-light"
                >
                  ×
                </button>
              </div>

              {submitStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h4>
                  <p className="text-green-700 mb-6">
                    Thank you for applying to the {selectedJobForApplication.title} position. We've received your application and will review it shortly.
                  </p>
                  <Button
                    onClick={() => setApplyModalOpen(false)}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    Close
                  </Button>
                </div>
              ) : submitStatus === 'error' ? (
                <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-red-800 mb-2">Something Went Wrong</h4>
                  <p className="text-red-700 mb-6">
                    We couldn't submit your application. Please try again or contact us directly.
                  </p>
                  <Button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Try Again
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setIsSubmitting(true)
                    setSubmitStatus("idle")

                    const readFileAsBase64 = (file: File): Promise<string> => {
                      return new Promise((resolve, reject) => {
                        const reader = new FileReader()
                        reader.readAsDataURL(file)
                        reader.onloadend = () => resolve(reader.result as string)
                        reader.onerror = reject
                      })
                    }

                    try {
                      let resumeBase64 = ""
                      let coverBase64 = ""

                      if (applicationFile) {
                        resumeBase64 = await readFileAsBase64(applicationFile)
                      }

                      if (coverLetterFile) {
                        coverBase64 = await readFileAsBase64(coverLetterFile)
                      }

                      const payload = {
                        formType: "job-application",

                        // applicant info
                        fullName: applicationFormData.fullName,
                        email: applicationFormData.email,
                        phone: applicationFormData.phone,
                        position: selectedJobForApplication.title,
                        githubLink: applicationFormData.githubLink || "",
                        portfolioLink: applicationFormData.portfolioLink || "",

                        // resume (FLAT)
                        resume: resumeBase64,
                        resumeName: applicationFile?.name || "",
                        resumeType: applicationFile?.type || "",

                        // cover letter (FLAT)
                        coverLetter: coverBase64,
                        coverName: coverLetterFile?.name || "",
                        coverType: coverLetterFile?.type || ""
                      }

                      await fetch(
                        "https://script.google.com/macros/s/AKfycbwjmN1IyIpoUOSnqQJtsUnoxBnzEvFNBTXjgC-mZmtUAQ-X6ow5Ze6u05HyzwAwYk9D/exec",
                        {
                          method: "POST",
                          mode: "no-cors",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(payload)
                        }
                      )

                      setSubmitStatus("success")
                      setApplicationFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        githubLink: "",
                        portfolioLink: ""
                      })

                      setApplicationFile(null)
                      setCoverLetterFile(null)

                      if (applicationFileInputRef.current) applicationFileInputRef.current.value = ""
                      if (coverLetterFileInputRef.current) coverLetterFileInputRef.current.value = ""

                    } catch (err) {
                      console.error(err)
                      setSubmitStatus("error")
                    } finally {
                      setIsSubmitting(false)
                    }
                  }}
                  className="space-y-4"
                >
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicationFormData.fullName}
                      onChange={(e) => setApplicationFormData({ ...applicationFormData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicationFormData.email}
                        onChange={(e) => setApplicationFormData({ ...applicationFormData, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={applicationFormData.phone}
                        onChange={(e) => setApplicationFormData({ ...applicationFormData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent"
                        placeholder="+256 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  {/* Cover Letter Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter (Optional)</label>
                    {!coverLetterFile ? (
                      <div className="mt-1 flex justify-center px-4 py-3 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#009696] transition-colors cursor-pointer">
                        <div className="space-y-1 text-center">
                          <FileText className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="cover-letter-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#009696] hover:text-[#007a7a]">
                              <span>Upload your cover letter</span>
                              <input
                                id="cover-letter-upload"
                                name="cover-letter-upload"
                                type="file"
                                accept=".pdf,.doc,.docx,.txt"
                                className="sr-only"
                                ref={coverLetterFileInputRef}
                                onChange={(e) => {
                                  const file = e.target.files?.[0] || null
                                  if (file) {
                                    // Validate file size (10MB limit)
                                    const maxSize = 10 * 1024 * 1024
                                    if (file.size > maxSize) {
                                      alert("File size exceeds 10MB limit")
                                      return
                                    }
                                    // Validate file type
                                    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
                                    if (!allowedTypes.includes(file.type)) {
                                      alert("Please upload a PDF, DOC, DOCX, or TXT file")
                                      return
                                    }
                                    setCoverLetterFile(file)
                                  }
                                }}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, DOC, DOCX, TXT up to 10MB</p>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-1 flex justify-center px-4 py-3 border-2 border-green-300 border-dashed rounded-lg bg-green-50">
                        <div className="space-y-1 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                            <FileText className="h-6 w-6 text-green-600" />
                          </div>
                          <div className="text-xs text-green-700 font-medium">
                            {coverLetterFile.name}
                          </div>
                          <div className="text-xs text-green-600">
                            {(coverLetterFile.size / 1024 / 1024).toFixed(2)} MB • Ready to upload
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setCoverLetterFile(null)
                              if (coverLetterFileInputRef.current) {
                                coverLetterFileInputRef.current.value = ""
                              }
                            }}
                            className="text-xs text-red-600 hover:text-red-800 underline mt-1"
                          >
                            Remove file
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* GitHub Link for Developer Roles */}
                  {selectedJobForApplication?.title?.toLowerCase().includes("developer") && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Profile Link</label>
                      <input
                        type="url"
                        value={applicationFormData.githubLink}
                        onChange={(e) => setApplicationFormData({ ...applicationFormData, githubLink: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent"
                        placeholder="https://github.com/yourusername"
                      />
                      <p className="text-xs text-gray-500 mt-1">Share your GitHub profile so we can see your work!</p>
                    </div>
                  )}

                  {/* Portfolio Link for Design Roles */}
                  {selectedJobForApplication?.title?.toLowerCase().includes("designer") && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio Link</label>
                      <input
                        type="url"
                        value={applicationFormData.portfolioLink}
                        onChange={(e) => setApplicationFormData({ ...applicationFormData, portfolioLink: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent"
                        placeholder="https://yourportfolio.com or link to Dribbble, Behance, etc."
                      />
                      <p className="text-xs text-gray-500 mt-1">Show us your design work and creative skills!</p>
                    </div>
                  )}

                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Your CV (Optional)</label>
                    {!applicationFile ? (
                      <div className="mt-1 flex justify-center px-4 py-3 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#009696] transition-colors cursor-pointer">
                        <div className="space-y-1 text-center">
                          <FileText className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="cv-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#009696] hover:text-[#007a7a]">
                              <span>Upload your CV</span>
                              <input
                                id="cv-upload"
                                name="cv-upload"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="sr-only"
                                ref={applicationFileInputRef}
                                onChange={(e) => {
                                  const file = e.target.files?.[0] || null
                                  if (file) {
                                    // Validate file size (10MB limit)
                                    const maxSize = 10 * 1024 * 1024
                                    if (file.size > maxSize) {
                                      alert("File size exceeds 10MB limit")
                                      return
                                    }
                                    // Validate file type
                                    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
                                    if (!allowedTypes.includes(file.type)) {
                                      alert("Please upload a PDF, DOC, or DOCX file")
                                      return
                                    }
                                    setApplicationFile(file)
                                  }
                                }}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-1 flex justify-center px-4 py-3 border-2 border-green-300 border-dashed rounded-lg bg-green-50">
                        <div className="space-y-1 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                            <FileText className="h-6 w-6 text-green-600" />
                          </div>
                          <div className="text-xs text-green-700 font-medium">
                            {applicationFile.name}
                          </div>
                          <div className="text-xs text-green-600">
                            {(applicationFile.size / 1024 / 1024).toFixed(2)} MB • Ready to upload
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setApplicationFile(null)
                              if (applicationFileInputRef.current) {
                                applicationFileInputRef.current.value = ""
                              }
                            }}
                            className="text-xs text-red-600 hover:text-red-800 underline mt-1"
                          >
                            Remove file
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Note */}
                  <p className="text-sm text-gray-500">
                    Your CV will be attached to your application. You can also submit your resume via the "Join Our Talent Pool" form for future opportunities.
                  </p>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#009696] hover:bg-[#009696]/90 text-white font-semibold py-3 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Share Toast Notification */}
      {shareToast.show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
        >
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">{shareToast.message}</span>
        </motion.div>
      )}

      <Footer />
    </div>
  )
}
