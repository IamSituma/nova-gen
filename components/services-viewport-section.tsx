"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  Globe,
  Smartphone,
  Cog,
  Package,
  Building2,
  Laptop,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Shield,
  Rocket,
  Target,
  BarChart,
  Lightbulb,
  Layers,
  Code,
  Database,
  Cloud,
  Lock,
  Gauge,
  Activity,
  ShoppingBag,
  CloudDownload,
  CloudUpload,
  LucideCloudUpload,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "website",
    title: "Web Development",
    description:
      "Transform your digital presence with cutting-edge websites that convert visitors into customers. Built with the latest technologies for maximum performance and user experience.",
    features: [
      { icon: <Rocket className="w-5 h-5" />, text: "Lightning-fast loading speeds" },
      { icon: <Shield className="w-5 h-5" />, text: "Enterprise-grade security" },
      { icon: <Target className="w-5 h-5" />, text: "Conversion-optimized design" },
      { icon: <Gauge className="w-5 h-5" />, text: "99.9% uptime guarantee" },
    ],
    stats: [
      { label: "Average Speed Increase", value: "340%" },
      { label: "Conversion Rate Boost", value: "127%" },
      { label: "Client Satisfaction", value: "98%" },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "Javascript"],
    gradient: "from-[#009696] via-teal-900 to-[#009696]",
    bgGradient: "from-gray-400/20 via-gray-400/10 to-gray-400/20",
    accentColor: "text-black",
  },
  {
    id: "mobile",
    title: "App Development",
    description:
      "Create powerful mobile experiences that engage users and drive business growth. From concept to app store, we deliver apps that users love and businesses depend on.",
    features: [
      { icon: <Users className="w-5 h-5" />, text: "Cross-platform compatibility" },
      { icon: <Zap className="w-5 h-5" />, text: "Real-time synchronization" },
      { icon: <Lock className="w-5 h-5" />, text: "Advanced security features" },
      { icon: <BarChart className="w-5 h-5" />, text: "Built-in analytics" },
    ],
    stats: [
      { label: "App Store Rating", value: "4.8★" },
      { label: "User Retention", value: "85%" },
      { label: "Development Speed", value: "2x Faster" },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    gradient: "from-purple-500 via-pink-400 to-purple-600",
    bgGradient: "from-purple-500/20 via-pink-400/10 to-purple-600/20",
    accentColor: "text-black",
  },
  {
    id: "enterprise",
    title: "Enterprise Software",
    description:
      "Scalable enterprise solutions including ERP, CRM, and custom business applications tailored to your needs.",
    features: [
      { icon: <Lightbulb className="w-5 h-5" />, text: "ERP Systems" },
      { icon: <Code className="w-5 h-5" />, text: "CRM Solutions" },
      { icon: <Package className="w-5 h-5" />, text: "Business Intelligence" },
      { icon: <Award className="w-5 h-5" />, text: "Workflow" },
    ],
    stats: [
      { label: "Design Accuracy", value: "99.9%" },
      { label: "Time to Prototype", value: "72hrs" },
      { label: "Manufacturing Ready", value: "100%" },
    ],
    technologies: ["SolidWorks", "AutoCAD", "ANSYS", "3D Printing", "CNC"],
    gradient: "from-orange-500 via-red-400 to-orange-600",
    bgGradient: "from-orange-500/20 via-red-400/10 to-orange-600/20",
    accentColor: "text-black",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Cloud-native applications, migration services, and infrastructure management on AWS, Azure, and Google Cloud.",
    features: [
      { icon: <Target className="w-5 h-5" />, text: "Cloud Migration" },
      { icon: <Rocket className="w-5 h-5" />, text: "Serverless Apps" },
      { icon: <TrendingUp className="w-5 h-5" />, text: "Infrastructure Setup" },
      { icon: <Star className="w-5 h-5" />, text: "DevOps Solutions" },
    ],
    stats: [
      { label: "Success Rate", value: "92%" },
      { label: "Time to Market", value: "40% Faster" },
      { label: "ROI Average", value: "3.2x" },
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Digital Ocean", "Oracle Cloud", "Vercel"],
    gradient: "from-indigo-500 via-purple-400 to-indigo-600",
    bgGradient: "from-indigo-500/20 via-purple-400/10 to-indigo-600/20",
    accentColor: "text-black",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "We create user-friendly interfaces and engaging experienxes that make your product easy to use and visually appealing to your clients. We transform ideas into interactive designs that help drive engagement and growth",
    features: [
      { icon: <Lightbulb className="w-5 h-5" />, text: "High Fiedlity UI Designs" },
      { icon: <Layers className="w-5 h-5" />, text: "Wireframing" },
      { icon: <Shield className="w-5 h-5" />, text: "Prototyping" },
    ],
    stats: [
      { label: "Projects Completed", value: "150+" },
      { label: "Client Satisfaction", value: "96%" },
      { label: "On-Time Delivery", value: "98%" },
    ],
    technologies: ["Adobe XD", "Figma", "Sketch", "InVision"],
    gradient: "from-pink-500 via-rose-400 to-pink-600",
    bgGradient: "from-pink-500/20 via-rose-400/10 to-pink-600/20",
    accentColor: "text-black",
  },
]

export function ServicesViewportSection() {
  const [activeService, setActiveService] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])
  const router = useRouter()

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = serviceRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveService(index)
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" },
    )

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigateToProjects = () => {
    router.push("/projects")
  }

  const nextService = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveService((prev) => (prev + 1) % services.length)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const prevService = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveService((prev) => (prev - 1 + services.length) % services.length)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goToService = (index: number) => {
    if (isAnimating || index === activeService) return
    setIsAnimating(true)
    setActiveService(index)
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <section ref={containerRef} className="relative py-20 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white" />
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-tight text-gray-900">
            <span className="text-gray-900">Services That We Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Innovative software solutions to boost efficiency, drive growth, and transform your business digitally.
          </p>
        </div>

        <div className="relative">
          {/* Services Carousel */}
          <div className="relative min-h-[80vh] flex items-center">
            {/* Navigation Buttons */}
            <button
              onClick={prevService}
              disabled={isAnimating}
              className="absolute left-50 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextService}
              disabled={isAnimating}
              className="absolute right-0 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Current Service Display */}
            <div className="w-full max-w-7xl mx-auto px-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                  {/* Content */}
                  <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div>
                      <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {services[activeService].title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {services[activeService].description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      {services[activeService].features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={services[activeService].accentColor}>{feature.icon}</div>
                          <span className="text-gray-700">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {services[activeService].stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: statIndex * 0.1 }}
                          className={`text-center p-4 bg-gradient-to-br ${services[activeService].bgGradient} rounded-xl border border-white/10`}
                        >
                          <div className={`text-2xl font-bold ${services[activeService].accentColor} mb-1`}>{stat.value}</div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {services[activeService].technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                        >
                          <Badge
                            className={`bg-gradient-to-r ${services[activeService].bgGradient} ${services[activeService].accentColor} border-white/20 hover:border-white/30`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* View Projects Button - Only show on last service */}
                    {activeService === services.length - 1 && (
                      <motion.div
                        className="flex items-center space-x-4 pt-8"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          onClick={handleNavigateToProjects}
                          className="group flex items-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full transition-all duration-300"
                        >
                          <span className="text-gray-900 font-medium">View Our Projects</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <ArrowRight className="w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform" />
                          </motion.div>
                        </button>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Enhanced UI Graphics */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <ServiceUIGraphic service={services[activeService]} index={activeService} />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToService(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeService
                      ? 'bg-gray-900 scale-125'
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Enhanced UI Graphics Components
function ServiceUIGraphic({ service, index }: { service: any; index: number }) {
  const getServiceGraphic = () => {
    switch (service.id) {
      case "website":
        return <WebsiteUIGraphic service={service} />
      case "mobile":
        return <MobileUIGraphic service={service} />
      case "digital":
        return <DigitalSystemsUIGraphic service={service} />
      case "mechanical":
        return <MechanicalUIGraphic service={service} />
      case "product":
        return <ProductUIGraphic service={service} />
      case "architecture":
        return <ArchitectureUIGraphic service={service} />
      default:
        return <WebsiteUIGraphic service={service} />
    }
  }

  return (
    <div className="relative">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-white/5 rounded-3xl blur-3xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Main UI Container */}
      <div className="relative bg-white/95 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 overflow-hidden shadow-2xl">
        {getServiceGraphic()}
      </div>
    </div>
  )
}

function WebsiteUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Browser Window */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl">
        <div className="flex items-center space-x-2 px-4 py-3 bg-gray-200">
          <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-gray-700 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          <div className="flex-1 bg-white rounded px-3 py-1 ml-4 shadow-inner">
            <span className="text-xs text-gray-600">https://club.novageneration.tech</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-4 h-4 bg-gray-300 rounded hover:bg-gray-400 transition-colors"></div>
            <div className="w-4 h-4 bg-gray-300 rounded hover:bg-gray-400 transition-colors"></div>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-br from-white to-gray-50 min-h-[200px]">
          <div className="space-y-4">
            <motion.div
              className="h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded w-3/4 shadow-sm"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>
            <div className="h-3 bg-gray-300 rounded w-full shadow-sm"></div>
            <div className="h-3 bg-gray-300 rounded w-2/3 shadow-sm"></div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-16 bg-gradient-to-br from-gray-200 to-gray-100 rounded shadow-md hover:shadow-lg transition-shadow"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                ></motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Performance Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Speed Score</span>
            <Gauge className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">98/100</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "98%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Uptime</span>
            <Activity className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">99.9%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "99.9%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function MobileUIGraphic({ service }: { service: any }) {
  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Enhanced Phone Mockup */}
      <div className="relative">
        <div className="w-48 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 text-xs">
              <span className="font-medium">9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-4">
              <motion.div
                className="h-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded w-3/4 shadow-sm"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-300 rounded w-full shadow-sm"></div>
                <div className="h-2 bg-gray-300 rounded w-2/3 shadow-sm"></div>
              </div>

              {/* Interactive Cards */}
              <div className="space-y-3 mt-6">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100"
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-sm"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
              <div className="flex justify-around">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`w-6 h-6 rounded ${i === 1 ? "bg-gray-700" : "bg-gray-300"} shadow-sm`}
                    animate={i === 1 ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced App Features */}
      <div className="space-y-4">
        {service.features.slice(0, 3).map((feature: any, index: number) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-md"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-gray-600">{feature.icon}</div>
            <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DigitalSystemsUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced System Architecture */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="grid grid-cols-3 gap-4">
          {/* Data Sources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Data Sources</h4>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded shadow-md flex items-center justify-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Database className="w-4 h-4 text-white" />
              </motion.div>
            ))}
          </div>

          {/* Processing */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Processing</h4>
            <motion.div
              className="h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded shadow-lg flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              whileHover={{ scale: 1.1 }}
            >
              <Cog className="w-8 h-8 text-white animate-spin" style={{ animationDuration: "3s" }} />
            </motion.div>
          </div>

          {/* Outputs */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Outputs</h4>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded shadow-md flex items-center justify-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 + 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Cloud className="w-4 h-4 text-white" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Flow Arrows */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </motion.div>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Performance Dashboard */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Efficiency</span>
            <TrendingUp className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">+250%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Automation</span>
            <Zap className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">95%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "95%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function MechanicalUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced 3D Model Viewer */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">3D Model Viewer</h4>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>

        {/* 3D Viewport */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-40 flex items-center justify-center relative overflow-hidden shadow-inner">
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-xl"
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-2 bg-gradient-to-br from-gray-500 to-gray-700 rounded shadow-inner"></div>
          </motion.div>

          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div
              className="w-full h-full bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M0 0h20v1H0zM0 0v20h1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {["Rotate", "Zoom", "Pan"].map((tool, index) => (
              <motion.button
                key={tool}
                className={`px-3 py-1 text-xs rounded shadow-sm border transition-colors ${index === 0
                    ? "bg-gray-700 text-white border-gray-800"
                    : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tool}
              </motion.button>
            ))}
          </div>
          <div className="text-xs text-gray-500">Precision: 0.01mm</div>
        </div>
      </div>

      {/* Enhanced Specifications */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Tolerance</span>
            <Target className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">±0.01mm</div>
          <div className="text-xs text-gray-500 mt-1">Industry Leading</div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Material</span>
            <Package className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-lg font-bold text-gray-800">Titanium</div>
          <div className="text-xs text-gray-500 mt-1">Grade 5</div>
        </motion.div>
      </div>
    </div>
  )
}

function ProductUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Product Development Pipeline */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Development Pipeline</h4>
        <div className="space-y-4">
          {["Ideation", "Validation", "MVP", "Launch"].map((stage, index) => (
            <motion.div
              key={stage}
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md ${index <= 2 ? "bg-gradient-to-r from-gray-600 to-gray-800 text-white" : "bg-gray-300 text-gray-600"
                  }`}
                animate={index <= 2 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {index <= 2 ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Lightbulb className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <Target className="w-4 h-4" />
                )}
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">{stage}</span>
                  <span className="text-xs text-gray-500">{index <= 2 ? "Complete" : "In Progress"}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1 shadow-inner">
                  <motion.div
                    className={`h-2 rounded-full shadow-sm ${index <= 2 ? "bg-gradient-to-r from-gray-600 to-gray-800" : "bg-gray-300"
                      }`}
                    initial={{ width: 0 }}
                    animate={{ width: index <= 2 ? "100%" : "60%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Success Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Success Rate</span>
            <Star className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">92%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">ROI Average</span>
            <TrendingUp className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">3.2x</div>
          <div className="text-xs text-gray-500 mt-1">Return on Investment</div>
        </motion.div>
      </div>
    </div>
  )
}

function ArchitectureUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Blueprint Viewer */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">Blueprint Viewer</h4>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>

        {/* Blueprint Canvas */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-40 flex items-center justify-center relative overflow-hidden shadow-inner border border-gray-300">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="w-full h-full bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.2'%3E%3Cpath d='M0 0h20v1H0zM0 0v20h1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Building Structure */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Foundation */}
            <motion.div
              className="w-32 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-sm shadow-md"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>

            {/* Walls */}
            <motion.div
              className="w-28 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-t-sm mx-auto -mt-1 shadow-lg relative"
              animate={{ y: [0, -1, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              {/* Windows */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-gray-300 rounded-sm shadow-inner"></div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-gray-300 rounded-sm shadow-inner"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-200 rounded-sm shadow-inner"></div>
            </motion.div>

            {/* Roof */}
            <motion.div
              className="w-32 h-8 bg-gradient-to-r from-gray-600 to-gray-700 transform -skew-y-12 -mt-2 shadow-lg"
              animate={{ rotateZ: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
            ></motion.div>
          </motion.div>
        </div>

        {/* Enhanced Tools */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {["2D", "3D", "VR"].map((view, index) => (
              <motion.button
                key={view}
                className={`px-3 py-1 text-xs rounded shadow-sm border transition-colors ${index === 1
                    ? "bg-gray-700 text-white border-gray-800"
                    : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {view}
              </motion.button>
            ))}
          </div>
          <div className="text-xs text-gray-500">Scale: 1:100</div>
        </div>
      </div>

      {/* Enhanced Project Stats */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Projects</span>
            <Building2 className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">150+</div>
          <div className="text-xs text-gray-500 mt-1">Completed</div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Satisfaction</span>
            <Award className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">96%</div>
          <div className="text-xs text-gray-500 mt-1">Client Rating</div>
        </motion.div>
      </div>
    </div>
  )
}
