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
    { icon: Mail, value: "hello@weltivation.com", href: "mailto:hello@weltivation.com" },
    { icon: Phone, value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, value: "San Francisco, CA", href: "#" },
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
          <div className="flex items-center space-x-4">
            <img src="/images/weltivation-logo.png" alt="Weltivation" className="h-12" />
            <p className="text-sm text-muted-foreground">
              Ready to build the future together?
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-10 mb-10">
          {sections.map(section => (
            <div key={section.id}>
              <h4 className="font-semibold text-primary text-lg mb-4">{section.title}</h4>
              <div className="space-y-3">
                {section.items.map((item, i) => (
                  <a key={i} href={item.href}
                     className="flex items-center text-sm text-muted-foreground hover:text-primary transition group">
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
            <div key={section.id} className="border border-border/30 rounded-lg">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center p-4"
              >
                <h4 className="font-semibold text-primary">{section.title}</h4>
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
                    <div className="p-4 border-t border-border/30 space-y-2">
                      {section.items.map((item, i) => (
                        <a key={i} href={item.href}
                           className="flex items-center text-sm text-muted-foreground hover:text-primary">
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
        <div className="pt-6 border-t border-border/50 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              All systems operational
            </span>
            <span className="text-muted-foreground">
              © {new Date().getFullYear()} Weltivation. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap gap-6">
            {contactInfo.map((c, i) => (
              <a key={i} href={c.href}
                 className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
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
