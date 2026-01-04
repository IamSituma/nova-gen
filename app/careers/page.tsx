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

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const jobCategories = [
    { id: "all", label: "All Roles", count: 0 },
    { id: "development", label: "Development", count: 0 },
    { id: "design", label: "Design", count: 0 },
    { id: "product", label: "Product", count: 0 },
  ]

  // Sample job listings - currently empty to show "No roles" message
  const jobListings = [
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

  const filteredJobs = selectedCategory === "all"
    ? jobListings
    : jobListings.filter(job => job.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#009696] to-[#007a7a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              Help us build the future of digital innovation. We're always looking for talented individuals who are passionate about creating exceptional software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-lg font-semibold">🌍 Remote-First Culture</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-lg font-semibold">🚀 Innovative Projects</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-lg font-semibold">📈 Growth Opportunities</span>
              </div>
            </div>
          </motion.div>
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
                  <button className="bg-[#009696] hover:bg-[#009696]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center mx-auto">
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

      {/* Why Join Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join NovaGen?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than just a workplace – we're a community of innovators building the future together.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="text-center p-8 rounded-xl bg-gray-50">
              <div className="w-16 h-16 bg-[#009696]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-[#009696]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mission-Driven Work</h3>
              <p className="text-gray-600">
                Work on projects that make a real impact. Every solution we build helps businesses grow and succeed in the digital world.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gray-50">
              <div className="w-16 h-16 bg-[#009696]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#009696]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Culture</h3>
              <p className="text-gray-600">
                Join a supportive team where your ideas matter. We value diverse perspectives and foster an inclusive environment for everyone.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gray-50">
              <div className="w-16 h-16 bg-[#009696]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-[#009696]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-600">
                Stay at the forefront of technology trends. Work with the latest tools, frameworks, and methodologies in software development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
