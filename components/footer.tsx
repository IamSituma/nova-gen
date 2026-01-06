"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Instagram } from "lucide-react"

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
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "X", href: "#", icon: Twitter },
    { label: "Instagram", href: "#", icon: Instagram },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@novageneration.tech", href: "mailto:info@novageneration.tech" },
    { icon: Phone, label: "Phone", value: "+256 741 004 466", href: "tel:+256741004466" },
    { icon: MapPin, label: "Location", value: "Kampala, Uganda", href: "#" },
  ]

  return (
    <footer className="bg-[#009696] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/logo1.png" alt="NovaGen" className="w-28 md:w-32 mb-4" />
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Transforming businesses through innovative technology solutions.
              Based in Uganda, serving clients worldwide.
            </p>

            <div className="flex space-x-3 mt-5">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 hover:bg-[#007f7f] rounded-full flex items-center justify-center transition"
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
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
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              Services
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <a className="text-sm md:text-base text-white/70 hover:text-white flex items-center group">
                    {service.label}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition" />
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
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              Company
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {company.map((item, i) => (
                <li key={i}>
                  <a className="text-sm md:text-base text-white/70 hover:text-white flex items-center group">
                    {item.label}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              Get In Touch
            </h3>

            <div className="space-y-3">
              {contactInfo.map((contact, i) => (
                <a key={i} href={contact.href} className="flex items-center space-x-3 text-white/70 hover:text-white">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center">
                    <contact.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-medium">{contact.label}</div>
                    <div className="text-xs md:text-sm">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-white/80">
            <span>© {new Date().getFullYear()} Nova Generation Limited. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-white">Privacy</a>
              <a href="/terms" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
