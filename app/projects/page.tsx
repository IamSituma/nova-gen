"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  ExternalLink,
  Shield,
  CheckCircle,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      id: "nova-legal",
      name: "Nova Legal",
      category: "web",
      status: "completed",
      completion: 100,
      rating: 5,
      description: "Bay Area glass repair service platform with mobile booking and expert technician network",
      image: "/images/glasspatch-screenshot.png",
      logo: "/images/glasspatch-logo-new.png",
      tags: ["legal management", "SAAS legal software", "Uganda", "Professional", "Kampala", "Matters"],
      metrics: {
        users: "12K+",
        satisfaction: "97%",
      },
      featured: true,
      previewUrl: "https://glasspatch.us",
      hasLivePreview: true,
      details: {
        overview: "Professional glass repair service platform connecting customers with certified technicians.",
        features: ["Mobile booking", "Real-time tracking", "Expert network", "Insurance claims"],
        technologies: ["React", "Node.js", "Google Maps API", "Stripe"],
        milestones: [
          { name: "Platform Architecture", date: "2023-03", status: "completed" },
          { name: "Booking System", date: "2023-05", status: "completed" },
          { name: "Technician Network", date: "2023-07", status: "completed" },
          { name: "Launch", date: "2023-08", status: "completed" },
        ],
      },
    },
    {
      id: "nova-suite",
      name: "Nova Suite",
      category: "web",
      status: "completed",
      completion: 100,
      rating: 5,
      description: "Professional auto repair website with booking system and service management for Santa Cruz",
      image: "/images/norams-auto-screenshot.png",
      logo: "/images/norams-logo-new.png",
      tags: ["Auto Services", "Booking System", "Local Business", "Reviews"],
      metrics: {
        users: "8K+",
        satisfaction: "95%",
      },
      featured: true,
      previewUrl: "https://noramauto.com",
      hasLivePreview: true,
      details: {
        overview: "Complete digital solution for auto repair shop with online booking and customer management.",
        features: ["Online booking", "Service tracking", "Customer reviews", "Mobile optimization"],
        technologies: ["Next.js", "Stripe", "Google APIs", "Tailwind CSS"],
        milestones: [
          { name: "Website Design", date: "2023-08", status: "completed" },
          { name: "Booking System", date: "2023-10", status: "completed" },
          { name: "Payment Integration", date: "2023-11", status: "completed" },
          { name: "Launch", date: "2023-12", status: "completed" },
        ],
      },
    },
    {
      id: "nova-coding",
      name: "Nova Coding Club",
      category: "web",
      status: "completed",
      completion: 100,
      rating: 5,
      description: "AI platform for creating cinematic episodes from scripts with automated video generation",
      image: "/images/dreambox-screenshot.png",
      logo: "/images/dreambox-logo-new.png",
      tags: ["AI", "Video Generation", "React", "Machine Learning"],
      metrics: {
        users: "12K+",
        satisfaction: "97%",
      },
      featured: true,
      previewUrl: "https://v0-advanced-ai-video-app.vercel.app/",
      hasLivePreview: false,
      details: {
        overview:
          "Revolutionary AI platform that transforms scripts into cinematic episodes using advanced machine learning.",
        features: ["Script analysis", "Automated video generation", "Character creation", "Scene composition"],
        technologies: ["React", "Python", "TensorFlow", "AWS", "FFmpeg"],
        milestones: [
          { name: "AI Model Training", date: "2023-01", status: "completed" },
          { name: "Platform Development", date: "2023-03", status: "completed" },
          { name: "Video Pipeline", date: "2023-05", status: "completed" },
          { name: "Launch", date: "2023-06", status: "completed" },
        ],
      },
    },
    {
      id: "nova-ecommerce",
      name: "Nova E-Commerce Hub",
      category: "web",
      status: "completed",
      completion: 100,
      rating: 5,
      description: "Full-featured e-commerce platform with advanced inventory management and payment processing",
      image: "/images/ecommerce-screenshot.png",
      logo: "/images/ecommerce-logo.png",
      tags: ["E-Commerce", "Inventory Management", "Payments", "Analytics"],
      metrics: {
        users: "25K+",
        satisfaction: "96%",
      },
      featured: true,
      previewUrl: "https://nova-ecommerce.com",
      hasLivePreview: true,
      details: {
        overview: "Comprehensive e-commerce solution with multi-vendor support and advanced analytics.",
        features: ["Multi-vendor marketplace", "Advanced inventory", "Payment gateways", "Order tracking", "Analytics dashboard"],
        technologies: ["Next.js", "Prisma", "Stripe", "AWS", "PostgreSQL"],
        milestones: [
          { name: "Platform Design", date: "2023-04", status: "completed" },
          { name: "Core Development", date: "2023-06", status: "completed" },
          { name: "Payment Integration", date: "2023-08", status: "completed" },
          { name: "Launch", date: "2023-09", status: "completed" },
        ],
      },
    },
    {
      id: "nova-mobile",
      name: "Nova Mobile Solutions",
      category: "mobile",
      status: "completed",
      completion: 100,
      rating: 5,
      description: "Cross-platform mobile application for fitness tracking and health monitoring",
      image: "/images/mobile-app-screenshot.png",
      logo: "/images/mobile-logo.png",
      tags: ["Mobile App", "Fitness", "Health Tracking", "Cross-platform"],
      metrics: {
        users: "50K+",
        satisfaction: "98%",
      },
      featured: true,
      previewUrl: "https://nova-mobile.app",
      hasLivePreview: true,
      details: {
        overview: "Comprehensive mobile fitness app with workout tracking, nutrition planning, and social features.",
        features: ["Workout tracking", "Nutrition planning", "Social challenges", "Progress analytics", "Wearable integration"],
        technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
        milestones: [
          { name: "App Design", date: "2023-02", status: "completed" },
          { name: "iOS Development", date: "2023-04", status: "completed" },
          { name: "Android Development", date: "2023-05", status: "completed" },
          { name: "Launch", date: "2023-06", status: "completed" },
        ],
      },
    },
    {
      id: "nova-saas",
      name: "Nova SaaS Platform",
      category: "web",
      status: "completed",
      completion: 100,
      rating: 5,
      description: "Cloud-based project management platform with team collaboration and reporting tools",
      image: "/images/saas-screenshot.png",
      logo: "/images/saas-logo.png",
      tags: ["SaaS", "Project Management", "Collaboration", "Cloud"],
      metrics: {
        users: "15K+",
        satisfaction: "94%",
      },
      featured: true,
      previewUrl: "https://nova-saas.com",
      hasLivePreview: true,
      details: {
        overview: "Enterprise-grade project management platform with advanced collaboration features.",
        features: ["Task management", "Team collaboration", "Time tracking", "Reporting dashboard", "API integrations"],
        technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "AWS"],
        milestones: [
          { name: "Platform Planning", date: "2023-01", status: "completed" },
          { name: "MVP Development", date: "2023-03", status: "completed" },
          { name: "Feature Expansion", date: "2023-05", status: "completed" },
          { name: "Launch", date: "2023-07", status: "completed" },
        ],
      },
    },
    {
      id: "nova-blockchain",
      name: "Nova Blockchain Wallet",
      category: "web",
      status: "completed",
      completion: 100,
      rating: 5,
      description: "Secure cryptocurrency wallet with multi-currency support and DeFi integration",
      image: "/images/blockchain-screenshot.png",
      logo: "/images/blockchain-logo.png",
      tags: ["Blockchain", "Cryptocurrency", "DeFi", "Security"],
      metrics: {
        users: "30K+",
        satisfaction: "95%",
      },
      featured: true,
      previewUrl: "https://nova-wallet.com",
      hasLivePreview: true,
      details: {
        overview: "Advanced cryptocurrency wallet with institutional-grade security and DeFi features.",
        features: ["Multi-currency support", "Hardware wallet integration", "DeFi staking", "Portfolio tracking", "Security audit"],
        technologies: ["React", "Web3.js", "Solidity", "Node.js", "MongoDB"],
        milestones: [
          { name: "Security Architecture", date: "2023-03", status: "completed" },
          { name: "Core Development", date: "2023-05", status: "completed" },
          { name: "DeFi Integration", date: "2023-07", status: "completed" },
          { name: "Launch", date: "2023-08", status: "completed" },
        ],
      },
    },
    {
      id: "nova-healthcare",
      name: "Nova Healthcare Portal",
      category: "web",
      status: "completed",
      completion: 100,
      rating: 5,
      description: "HIPAA-compliant healthcare management platform for clinics and patients",
      image: "/images/healthcare-screenshot.png",
      logo: "/images/healthcare-logo.png",
      tags: ["Healthcare", "HIPAA", "Patient Portal", "Medical"],
      metrics: {
        users: "20K+",
        satisfaction: "99%",
      },
      featured: true,
      previewUrl: "https://nova-healthcare.com",
      hasLivePreview: true,
      details: {
        overview: "Comprehensive healthcare management platform ensuring patient privacy and care coordination.",
        features: ["Patient portal", "Appointment scheduling", "Medical records", "Telemedicine", "HIPAA compliance"],
        technologies: ["React", "Django", "PostgreSQL", "AWS", "Docker"],
        milestones: [
          { name: "Compliance Setup", date: "2023-02", status: "completed" },
          { name: "Platform Development", date: "2023-04", status: "completed" },
          { name: "Testing & Audit", date: "2023-06", status: "completed" },
          { name: "Launch", date: "2023-07", status: "completed" },
        ],
      },
    },
    {
      id: "nova-education",
      name: "Nova Learning Platform",
      category: "web",
      status: "completed",
      completion: 100,
      rating: 5,
      description: "Interactive e-learning platform with course management and student progress tracking",
      image: "/images/education-screenshot.png",
      logo: "/images/education-logo.png",
      tags: ["Education", "E-Learning", "Course Management", "Progress Tracking"],
      metrics: {
        users: "40K+",
        satisfaction: "97%",
      },
      featured: true,
      previewUrl: "https://nova-learning.com",
      hasLivePreview: true,
      details: {
        overview: "Modern e-learning platform with advanced course delivery and student engagement features.",
        features: ["Course creation", "Video streaming", "Progress tracking", "Certification", "Discussion forums"],
        technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
        milestones: [
          { name: "Platform Design", date: "2023-03", status: "completed" },
          { name: "Course System", date: "2023-05", status: "completed" },
          { name: "Video Integration", date: "2023-07", status: "completed" },
          { name: "Launch", date: "2023-08", status: "completed" },
        ],
      },
    },
    {
      id: "nova-real-estate",
      name: "Nova Property Portal",
      category: "web",
      status: "completed",
      completion: 100,
      rating: 5,
      description: "Real estate marketplace with advanced search, virtual tours, and agent management",
      image: "/images/real-estate-screenshot.png",
      logo: "/images/real-estate-logo.png",
      tags: ["Real Estate", "Marketplace", "Virtual Tours", "Property Search"],
      metrics: {
        users: "18K+",
        satisfaction: "93%",
      },
      featured: true,
      previewUrl: "https://nova-properties.com",
      hasLivePreview: true,
      details: {
        overview: "Comprehensive real estate platform connecting buyers, sellers, and agents with modern features.",
        features: ["Property listings", "Virtual tours", "Advanced search", "Agent dashboard", "Mortgage calculator"],
        technologies: ["React", "Express.js", "MongoDB", "Cloudinary", "Stripe"],
        milestones: [
          { name: "Market Analysis", date: "2023-04", status: "completed" },
          { name: "Platform Development", date: "2023-06", status: "completed" },
          { name: "Virtual Tour Integration", date: "2023-08", status: "completed" },
          { name: "Launch", date: "2023-09", status: "completed" },
        ],
      },
    },
  ]


  const [selectedProject, setSelectedProject] = useState<any>(projects[0]) // Set first project as default

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
              backgroundImage: `url('/images/projects-hero.jpg')`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio of 10 successful client projects and digital solutions that drive real business results.
            </p>
            <div className="mt-12">
              <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm opacity-90">Projects Completed</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm opacity-90">Client Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
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

      {/* Projects Layout */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Projects List */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">All Projects ({projects.length})</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={`cursor-pointer rounded-lg border p-4 transition-all duration-300 ${
                        selectedProject?.id === project.id
                          ? "bg-[#009696]/10 border-[#009696] shadow-md"
                          : "bg-gray-50 border-gray-200 hover:border-[#009696]/50 hover:bg-[#009696]/5"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={project.logo || "/placeholder.svg"}
                          alt={project.name}
                          className="w-10 h-10 object-contain rounded"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900 text-sm">{project.name}</h4>
                            {project.featured && (
                              <span className="px-2 py-0.5 bg-[#009696] text-white text-xs rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-1 mt-1">{project.description}</p>
                          <div className="mt-2">
                            <span className="text-xs text-gray-500">{project.metrics.users} users</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Project Details */}
            <div className="lg:w-2/3">
              {selectedProject ? (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Project Header */}
                  <div className="p-8 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <img
                          src={selectedProject.logo || "/placeholder.svg"}
                          alt={selectedProject.name}
                          className="w-20 h-20 object-contain bg-gray-50 rounded-xl p-4"
                        />
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.name}</h2>
                          <p className="text-lg text-gray-600 mb-3">{selectedProject.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="space-y-8">
                      {/* Full Width - Project Overview */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">{selectedProject.details.overview}</p>

                        {selectedProject.hasLivePreview && (
                          <div className="mb-8">
                            <Button
                              onClick={() => window.open(selectedProject.previewUrl, "_blank")}
                              className="bg-[#009696] hover:bg-[#009696]/90 text-white"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visit Live Project
                            </Button>
                          </div>
                        )}

                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {selectedProject.details.technologies.map((tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#009696]/10 text-[#009696] rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                        <div className="space-y-3">
                          {selectedProject.details.features.map((feature: string, index: number) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-[#009696] mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-16 text-center">
                  <Eye className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Select a Project</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Click on any project from the list on the left to view detailed information and see it live in action.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
