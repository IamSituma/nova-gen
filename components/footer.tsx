"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, ExternalLink, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const sections = [
    {
      id: "services",
      title: "Services",
      items: [
        { label: "Enterprise Web Development", href: "/services/web-development" },
        { label: "Mobile App Development", href: "/services/mobile-apps" },
        { label: "Physical Product Development", href: "/services/physical-products" },
        { label: "SEO Optimization", href: "/services/seo" },
        { label: "Google Ads Management", href: "/services/google-ads" },
        { label: "Patent Services", href: "/services/patents" },
      ],
    },
    {
      id: "company",
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Our Process", href: "/process" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      items: [
        { label: "Documentation", href: "/docs" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "White Papers", href: "/white-papers" },
        { label: "Technical Guides", href: "/guides" },
        { label: "API Reference", href: "/api" },
        { label: "Downloads", href: "/downloads" },
      ],
    },
    {
      id: "support",
      title: "Support",
      items: [
        { label: "Help Center", href: "/help" },
        { label: "Free Consultation", href: "/consultation" },
        { label: "Technical Support", href: "/tech-support" },
        { label: "Training", href: "/training" },
        { label: "Community", href: "/community" },
        { label: "System Status", href: "/status" },
      ],
    },
  ]

  const contactInfo = [
    { icon: Mail, value: "info@novageneration.tech", href: "info@novageneration.tech" },
    { icon: Phone, value: "+256 741 004 466", href: "tel:+256 741 004 466" },
    { icon: MapPin, value: "Bandali Rise, Studio House", href: "#" },
  ]

  return (
    <footer className="bg-[#009696] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-10 mb-10">
          {sections.map(section => (
            <div key={section.id}>
              <h4 className="font-semibold text-white text-lg mb-4">{section.title}</h4>
              <div className="space-y-3">
                {section.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center text-sm text-white/80 hover:text-white transition group"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile collapsible */}
        <div className="md:hidden space-y-3 mb-10">
          {sections.map(section => (
            <div key={section.id} className="border border-white/30 rounded-lg">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center p-4"
              >
                <h4 className="font-semibold text-white">{section.title}</h4>
                {expandedSection === section.id ? <ChevronUp /> : <ChevronDown />}
              </button>

              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 border-t border-white/30 space-y-2">
                      {section.items.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="flex items-center text-sm text-white/80 hover:text-white"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/40 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              All Systems Operational
            </span>
            <span className="text-white/80">
              © {new Date().getFullYear()} Nova Generation Limited. All Rights Reserved.
            </span>
          </div>

          <div className="flex flex-wrap gap-6">
            {contactInfo.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <c.icon className="w-4 h-4" />
                {c.value}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
