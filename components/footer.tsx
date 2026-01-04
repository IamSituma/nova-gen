"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react"

export function Footer() {
  const services = [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "Consultation", href: "/services" },
  ]

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { label: "LinkedIn", href: "#", icon: "💼" },
    { label: "Twitter", href: "#", icon: "🐦" },
    { label: "GitHub", href: "#", icon: "💻" },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@novageneration.tech", href: "mailto:info@novageneration.tech" },
    { icon: Phone, label: "Phone", value: "+256 741 004 466", href: "tel:+256 741 004 466" },
    { icon: MapPin, label: "Location", value: "Kampala, Uganda", href: "#" },
  ]

  return (
    <footer className="bg-[#009696] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <img src="/images/NOVA GEN.svg" alt="NovaGen" className="w-32 h-auto mb-4" />
              <p className="text-white/80 leading-relaxed">
                Transforming businesses through innovative technology solutions.
                Based in Uganda, serving clients worldwide.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#009696] rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span>{service.label}</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-gray-800 group-hover:bg-[#009696] rounded-full flex items-center justify-center transition-colors duration-300">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-medium">{contact.label}</div>
                    <div className="text-sm opacity-90">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-[#009696]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4 text-sm text-white/80">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>All Systems Operational</span>
              </span>
              <span>•</span>
              <span>© {new Date().getFullYear()} Nova Generation Limited. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-white/80">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-white/60">•</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
