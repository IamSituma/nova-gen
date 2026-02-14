"use client"

import { motion } from "framer-motion"
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
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "website",
    title: "Web Development",
    description:
      "Transform your digital presence with modern websites that convert visitors into customers. Built with the latest technologies for maximum performance and experience.",
    features: [
      { icon: <Rocket className="w-5 h-5" />, text: "Lightning-fast loading speeds" },
      { icon: <Shield className="w-5 h-5" />, text: "Enterprise-grade security" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
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
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "MongoDB"],
    gradient: "from-purple-500 via-pink-400 to-purple-600",
    bgGradient: "from-purple-500/20 via-pink-400/10 to-purple-600/20",
    accentColor: "text-black",
  },
  {
    id: "enterprise",
    title: "Enterprise Software",
    description:
      "Scalable enterprise solutions including ERP, CRM, and custom business applications tailored to suite your business and customer needs.",
    features: [
      { icon: <Lightbulb className="w-5 h-5" />, text: "ERP Systems" },
      { icon: <Code className="w-5 h-5" />, text: "CRM Solutions" },
      { icon: <Package className="w-5 h-5" />, text: "Business Intelligence" },
      { icon: <Award className="w-5 h-5" />, text: "Workflow" },
    ],
    technologies: [".NET", "Java", "Spring Boot", "SQL Server", "Docker", "Kubernetes"],
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
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    gradient: "from-indigo-500 via-purple-400 to-indigo-600",
    bgGradient: "from-indigo-500/20 via-purple-400/10 to-indigo-600/20",
    accentColor: "text-black",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "We create user-friendly interfaces and engaging experienxes that make your product easy to use and visually appealing.",
    features: [
      { icon: <Lightbulb className="w-5 h-5" />, text: "High Fiedlity UI Designs" },
      { icon: <Layers className="w-5 h-5" />, text: "Wireframing" },
      { icon: <Shield className="w-5 h-5" />, text: "Prototyping" },
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
    gradient: "from-pink-500 via-rose-400 to-pink-600",
    bgGradient: "from-pink-500/20 via-rose-400/10 to-pink-600/20",
    accentColor: "text-black",
  },
  {
    id: "desktop",
    title: "Desktop Software",
    description:
      "We build high-performance desktop applications with intuitive interfaces that are easy to use and visually polished.",
    features: [
      { icon: <Lightbulb className="w-5 h-5" />, text: "Detailed Software Design" },
      { icon: <Layers className="w-5 h-5" />, text: "Software Blueprinting" },
    ],
    technologies: ["Electron", "Qt", "WPF", ".NET", "C#", "Python"],
    gradient: "from-pink-500 via-rose-400 to-pink-600",
    bgGradient: "from-pink-500/20 via-rose-400/10 to-pink-600/20",
    accentColor: "text-black",
  },
]

export function ServicesViewportSection() {
  const router = useRouter()

  const handleNavigateToProjects = () => {
    router.push("/projects")
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 text-gray-900">
            Services We Excel In
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of digital solutions,
            each crafted to deliver exceptional results and drive growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Service Card */}
              <div className={`relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden ${service.bgGradient}`}>
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Service Number */}
                  <div className="flex items-center justify-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#009696] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 2).map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#009696] via-teal-900 to-[#009696] flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies on Hover */}
                <motion.div
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${service.gradient} text-white shadow-sm`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
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
