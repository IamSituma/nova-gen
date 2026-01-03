"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Database,
  Server,
  Cloud,
  Smartphone,
  Palette,
  Monitor,
  Cpu,
  HardDrive,
  Globe,
  Settings,
  Layers
} from "lucide-react"

const technologyCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Monitor,
    description: "Modern web interfaces and user experiences",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-60",
    technologies: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Next.js", color: "bg-gray-100 text-gray-800" },
      { name: "TypeScript", color: "bg-blue-600 text-white" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
      { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
    ]
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    description: "Scalable server-side solutions",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    technologies: [
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "Python", color: "bg-blue-500 text-white" },
      { name: "Express.js", color: "bg-gray-100 text-gray-800" },
      { name: "GraphQL", color: "bg-pink-100 text-pink-800" },
      { name: "REST APIs", color: "bg-purple-100 text-purple-800" },
    ]
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    description: "Data storage and management",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    technologies: [
      { name: "PostgreSQL", color: "bg-blue-700 text-white" },
      { name: "MongoDB", color: "bg-green-600 text-white" },
      { name: "Redis", color: "bg-red-100 text-red-800" },
      { name: "MySQL", color: "bg-orange-100 text-orange-800" },
      { name: "Prisma", color: "bg-gray-100 text-gray-800" },
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Infrastructure and deployment",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    technologies: [
      { name: "AWS", color: "bg-orange-100 text-orange-800" },
      { name: "Docker", color: "bg-blue-400 text-white" },
      { name: "Kubernetes", color: "bg-blue-600 text-white" },
      { name: "Vercel", color: "bg-black text-white" },
      { name: "Git", color: "bg-red-500 text-white" },
    ]
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    description: "Cross-platform mobile applications",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    technologies: [
      { name: "React Native", color: "bg-blue-100 text-blue-800" },
      { name: "Flutter", color: "bg-blue-400 text-white" },
      { name: "Swift", color: "bg-orange-500 text-white" },
      { name: "Kotlin", color: "bg-purple-600 text-white" },
      { name: "Ionic", color: "bg-blue-500 text-white" },
    ]
  },
  {
    id: "design",
    title: "Design & Tools",
    icon: Palette,
    description: "Creative tools and design systems",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    technologies: [
      { name: "Figma", color: "bg-purple-100 text-purple-800" },
      { name: "Adobe XD", color: "bg-pink-100 text-pink-800" },
      { name: "Sketch", color: "bg-yellow-100 text-yellow-800" },
      { name: "Photoshop", color: "bg-blue-500 text-white" },
      { name: "Illustrator", color: "bg-orange-500 text-white" },
    ]
  },
]

export function TechnologiesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 text-gray-900">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and tools to deliver exceptional digital solutions
            that drive results for your business.
          </p>
        </motion.div>

        {/* Technologies Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologyCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${category.bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + techIndex * 0.05
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        className={`${tech.color} px-3 py-1 text-xs font-medium border-0 shadow-sm hover:shadow-md transition-shadow cursor-default`}
                      >
                        {tech.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
