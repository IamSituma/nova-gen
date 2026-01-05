"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  Code,
  Smartphone,
  Globe,
  Users,
  Target,
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Mail,
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

  const jobCategories = [
    { id: "all", label: "All Roles", count: 0 },
    { id: "development", label: "Development", count: 0 },
    { id: "design", label: "Design", count: 0 },
    { id: "product", label: "Product", count: 0 },
  ]

  // Sample job listings - currently empty to show "No roles" message
  const jobListings: JobListing[] = [
    // Uncomment below to add job listings
    /*
    {
      id: "senior-fullstack",
      title: "Senior Full-Stack Developer",
      category: "development",
      type: "Full-time",
      location: "Remote",
      salary: "$80,000 - $120,000",
      experience: "3-5 years",
      description: "We are looking for a Senior Full-Stack Developer to join our team and help build amazing digital experiences.",
      requirements: [
        "3+ years of experience with React and Node.js",
        "Experience with modern web technologies",
        "Strong problem-solving skills",
        "Excellent communication skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Remote work flexibility",
        "Health insurance",
        "Professional development budget"
      ]
    }
    */
  ]

  const filteredJobs: JobListing[] = selectedCategory === "all"
    ? jobListings
    : jobListings.filter(job => job.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/job-novagen.jpg")' }}
          />
          <div className="absolute inset-0 bg-black/60" />
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
                <span className="text-white block mb-2">Join Our Team</span>
              </h1>
              <p className="text-xl text-white max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
                Help us build the future of digital innovation. We're always looking for talented individuals who are passionate about creating exceptional software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-lg font-semibold">Remote-First Culture</span>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-lg font-semibold">Innovative Projects</span>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-lg font-semibold">Growth Opportunities</span>
                </div>
              </div>
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
      </section>

      {/* Job Listings Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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

          {/* Job Listings or No Roles Message */}
          {filteredJobs.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {filteredJobs.map((job, index) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Job Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.experience}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#009696]">{job.salary}</div>
                        <div className="text-sm text-gray-500">per year</div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{job.description}</p>
                  </div>

                  {/* Job Details */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Requirements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#009696] mr-2" />
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.slice(0, 3).map((req: string, reqIndex: number) => (
                            <li key={reqIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-[#009696] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Users className="w-5 h-5 text-[#009696] mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {job.benefits.slice(0, 3).map((benefit: string, benefitIndex: number) => (
                            <li key={benefitIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-[#009696] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="flex justify-end">
                      <button className="bg-[#009696] hover:bg-[#009696]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* No Roles Available */
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Open Positions</h3>
                <p className="text-gray-600 mb-8">
                  We're always growing our team! While we don't have any open positions right now, we encourage you to check back soon or send us your resume for future opportunities.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#009696] hover:bg-[#009696]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center mx-auto"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Resume Anyway
                  </button>
                  <p className="text-sm text-gray-500">
                    We'll keep your application on file for future opportunities.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Join NovaGen? Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Join NovaGen?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
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
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white text-left">
                Join Our Talent Pool
              </h3>
              <p className="text-xl text-white/90 leading-relaxed text-left">
                Even if we don't have open positions that match your profile, we'd love to hear from you.
                Send us your resume and we'll keep it on file for future opportunities.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/80 font-medium">Get Notified</p>
                  <p className="text-white/60 text-sm">About future opportunities</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
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

                  {/* Phone */}
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

                {/* Position of Interest */}
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position of Interest
                  </label>
                  <select
                    id="position"
                    name="position"
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009696] focus:border-transparent transition-colors appearance-none"
                  >
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
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#009696] transition-colors">
                    <div className="space-y-1 text-center">
                      <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="resume"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-[#009696] hover:text-[#007a7a] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#009696]"
                        >
                          <span>Upload your resume</span>
                          <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#009696] hover:bg-[#009696]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center mx-auto"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Resume
                  </button>
                  <p className="text-sm text-gray-500 mt-3">
                    By submitting this form, you agree to our privacy policy and consent to being contacted about future opportunities.
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
