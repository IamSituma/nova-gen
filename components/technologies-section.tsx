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
    bgColor: "bg-[#009696]/10",
    technologies: [
      { name: "React", color: "bg-teal-100 text-teal-800" },
      { name: "Next.js", color: "bg-teal-100 text-teal-800" },
      { name: "TypeScript", color: "bg-teal-100 text-teal-800" },
      { name: "Tailwind CSS", color: "bg-teal-100 text-teal-800" },
      { name: "JavaScript", color: "bg-teal-100 text-teal-800" },
    ]
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    description: "Scalable server-side solutions",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-[#009696]/10",
    technologies: [
      { name: "Node.js", color: "bg-teal-100 text-teal-800" },
      { name: "Python", color: "bg-teal-100 text-teal-800" },
      { name: "Express.js", color: "bg-teal-100 text-teal-800" },
      { name: "GraphQL", color: "bg-teal-100 text-teal-800" },
      { name: "REST APIs", color: "bg-teal-100 text-teal-800" },
    ]
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    description: "Data storage and management",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-[#009696]/10",
    technologies: [
      { name: "PostgreSQL", color: "bg-teal-100 text-teal-800" },
      { name: "MongoDB", color: "bg-teal-100 text-teal-800" },
      { name: "Redis", color: "bg-teal-100 text-teal-800" },
      { name: "MySQL", color: "bg-teal-100 text-teal-800" },
      { name: "Prisma", color: "bg-teal-100 text-teal-800" },
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Infrastructure and deployment",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-[#009696]/10",
    technologies: [
      { name: "AWS", color: "bg-teal-100 text-teal-800" },
      { name: "Docker", color: "bg-teal-100 text-teal-800" },
      { name: "Kubernetes", color: "bg-teal-100 text-teal-800" },
      { name: "Vercel", color: "bg-teal-100 text-teal-800" },
      { name: "Git", color: "bg-teal-100 text-teal-800" },
    ]
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    description: "Cross-platform mobile applications",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-[#009696]/10",
    technologies: [
      { name: "React Native", color: "bg-teal-100 text-teal-800" },
      { name: "Flutter", color: "bg-teal-100 text-teal-800" },
      { name: "Swift", color: "bg-teal-100 text-teal-800" },
      { name: "Kotlin", color: "bg-teal-100 text-teal-800" },
      { name: "Ionic", color: "bg-teal-100 text-teal-800" },
    ]
  },
  {
    id: "design",
    title: "Design & Tools",
    icon: Palette,
    description: "Creative tools and design systems",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-[#009696]/10",
    technologies: [
      { name: "Figma", color: "bg-teal-100 text-teal-800" },
      { name: "Adobe XD", color: "bg-teal-100 text-teal-800" },
      { name: "Sketch", color: "bg-teal-100 text-teal-800" },
      { name: "Illustrator", color: "bg-teal-100 text-teal-800" },
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
          <h2 className="text-l sm:text-xl font-black mb-6 text-gray-900">
            Technologies We Master
          </h2>
          <p className="text-l sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
        {/* Icon and Title - same line for all screens */}
        <div className="flex flex-row items-center mb-4">
          <div
            className={`inline-flex items-center justify-center 
                        w-10 h-10 md:w-16 md:h-16 
                        rounded-xl bg-[#009696] text-white 
                        mr-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <IconComponent className="w-5 h-5 md:w-8 md:h-8" />
          </div>

          <h3 className="text-xl font-bold text-gray-900">
            {category.title}
          </h3>
        </div>

        {/* Description */}
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
                className={`${tech.color} px-3 py-1 text-xs font-medium border-0 shadow-sm hover:shadow-md hover:text-white transition-all cursor-default`}
              >
                {tech.name}
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* Hover Effect Overlay */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
        />
      </motion.div>
    )
  })}
</div>

      </div>
    </section>
  )
}
