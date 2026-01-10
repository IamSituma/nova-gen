"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  ShoppingCart,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  ShoppingBag,
  LucideFileQuestion,
  Shield,
  Users,
  Monitor,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  WebDevGraphic,
  MechanicalGraphic,
  SEOGraphic,
  PatentGraphic,
  IoTGraphic,
  DigitalTransformationGraphic,
} from "@/components/animated-service-graphics"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(0)
  const [quotePopupOpen, setQuotePopupOpen] = useState(false)
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // ESC key handler
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && quotePopupOpen) {
        setQuotePopupOpen(false)
        setSubmitStatus('idle')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectDetails: '',
          budget: '',
          timeline: ''
        })
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [quotePopupOpen])

  // Reset form and status when service selection changes
  useEffect(() => {
    setSubmitStatus('idle')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectDetails: '',
      budget: '',
      timeline: ''
    })
  }, [selectedServiceForQuote])

  // Click outside handler
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setQuotePopupOpen(false)
      setSubmitStatus('idle')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectDetails: '',
        budget: '',
        timeline: ''
      })
    }
  }

  const tailoredServices = [
    {
      title: "Enterprise Software Development",
      icon: <Globe className="w-6 h-6" />,
      description: "Scalable, robust enterprise-grade applications designed for large organizations",
      details: [
        "Custom ERP systems with modular architecture",
        "Legacy system modernization and migration",
        "Multi-tenant platform development",
        "Advanced security and compliance features",
        "24/7 technical support and maintenance"
      ]
    },
    {
      title: "MVP Development",
      icon: <Zap className="w-6 h-6" />,
      description: "Rapid prototyping and minimum viable product development to validate your business ideas",
      details: [
        "2-8 week development cycles",
        "Core feature identification and prioritization",
        "Lean development methodology",
        "User feedback integration loops",
        "Scalable architecture foundation"
      ]
    },
    {
      title: "SaaS Development",
      icon: <Cloud className="w-6 h-6" />,
      description: "Cloud-based software-as-a-service solutions with subscription-based business models",
      details: [
        "Multi-tenant architecture design",
        "Automated billing and subscription management",
        "Scalable cloud infrastructure (AWS/Azure/GCP)",
        "RESTful API development and integration",
        "Real-time analytics and reporting dashboards"
      ]
    },
    {
      title: "Product Development",
      icon: <ShoppingBag className="w-6 h-6" />,
      description: "End-to-end product development from concept to market-ready solution",
      details: [
        "Market research and competitive analysis",
        "User experience design and prototyping",
        "Full-stack development and testing",
        "Product roadmap and release planning",
        "Go-to-market strategy development"
      ]
    }
  ]
  const handleServicesQuoteSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    const form = e.currentTarget

    const payload = {
      formType: "services-quote",
      service: (form.service as HTMLInputElement)?.value || "",
      fullName: (form.fullName as HTMLInputElement)?.value || "",
      email: (form.email as HTMLInputElement)?.value || "",
      phone: (form.phone as HTMLInputElement)?.value || "",
      company: (form.company as HTMLInputElement)?.value || "",
      details: (form.details as HTMLTextAreaElement)?.value || "",
      budget: (form.budget as HTMLInputElement)?.value || "",
      timeline: (form.timeline as HTMLInputElement)?.value || ""
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwjmN1IyIpoUOSnqQJtsUnoxBnzEvFNBTXjgC-mZmtUAQ-X6ow5Ze6u05HyzwAwYk9D/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      )

      alert("Request submitted successfully!")
      form.reset()
    } catch (error) {
      alert("Submission failed. Please try again.")
    }
  }

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      features: ["React & Next.js", "Full-Stack Development", "API Integration", "Database Design"],
      graphic: <WebDevGraphic />,
      color: "emerald",
      pricing: {
        usd: { min: 1000, max: 3500 },
      }
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "iOS & Android", "App Store Deployment", "Push Notifications"],
      graphic: <IoTGraphic />,
      color: "blue",
      pricing: {
        usd: { min: 5000, max: 25000 },
      }
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Desktop App Development",
      description: "Designing and building reliable desktop software",
      features: ["Cross-platform compatibility", "High performance", "Secure architecture", "Offline functionality"],
      graphic: <SEOGraphic />,
      color: "purple",
      pricing: {
        usd: { min: 8000, max: 50000 },
      }
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that convert visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      graphic: <DigitalTransformationGraphic />,
      color: "pink",
      pricing: {
        usd: { min: 1500, max: 5000 },
      }
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: ["AWS/Vercel Setup", "CI/CD Pipelines", "Database Hosting", "Performance Monitoring"],
      graphic: <PatentGraphic />,
      color: "cyan",
      pricing: {
        usd: { min: 2000, max: 15000 },
      }
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Development",
      description: "Complete online stores with payment processing and inventory management",
      features: ["Shopify/Custom", "Payment Integration", "Inventory Management", "Order Processing"],
      graphic: <MechanicalGraphic />,
      color: "black",
      pricing: {
        usd: { min: 4000, max: 30000 },
      }
    },
    {
      icon: <LucideFileQuestion className="w-8 h-8" />,
      title: "IT Consultation",
      description: "We offer IT Consultation services to both individuals, SMEs and large organizations",
      features: ["Consultation", "Consultation", "Consultation", "Consultation"],
      graphic: <MechanicalGraphic />,
      color: "Teal",
      pricing: {
        usd: { min: 500, max: 5000 },
      }
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Development",
      description: "Complete online stores with payment processing and inventory management",
      features: ["Shopify/Custom", "Payment Integration", "Inventory Management", "Order Processing"],
      graphic: <MechanicalGraphic />,
      color: "black",
    },
    {
      icon: <LucideFileQuestion className="w-8 h-8" />,
      title: "IT Consultation",
      description: "We offer IT Consultation services to both individuals, SMEs and large organizations",
      features: ["Consultation", "Consultation", "Consultation", "Consultation"],
      graphic: <MechanicalGraphic />,
      color: "Teal",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We discuss your project requirements and goals",
    },
    {
      step: "02",
      title: "Proposal & Planning",
      description: "Detailed project scope and timeline delivered",
    },
    {
      step: "03",
      title: "Development",
      description: "Regular updates and milestone deliveries",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Go live with ongoing maintenance and support",
    },
  ]

  const colorMap: Record<string, string> = {
    emerald: "text-emerald-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
    pink: "text-pink-400",
    cyan: "text-cyan-400",
    black: "text-black",
    Teal: "text-teal-400",
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/novagen-hero.png')`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight">
                <span className="text-white block mb-2">Elevate Your Software Solutions</span>
              </h1>
              <p className="text-lg text-white max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
                From MVPs to enterprise systems, we build scalable software solutions that transform businesses. Our expert developers deliver high-quality code, innovative architectures, and seamless user experiences.
              </p>
            </motion.div>

            {/* Right Content - Stats/Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-gray-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our full range of digital solutions designed to accelerate your business growth
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 h-full relative overflow-hidden">
                  {/* Animated Background Graphic */}
                  {service.graphic}

                  <div className="relative z-10">
                    <div className={`${colorMap[service.color] ?? "text-white"} mb-6`}>{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <Button
                        className="w-full bg-[#009696] hover:bg-[#009696]/90 text-white group-hover:scale-105 transition-transform px-6 py-2"
                        onClick={() => {
                          setSelectedServiceForQuote(service)
                          setQuotePopupOpen(true)
                        }}
                      >
                        Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Development Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
              From MVPs to Enterprise Solutions: Tailored Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in delivering custom software solutions that scale with your business needs, from rapid MVPs to comprehensive enterprise systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left Column - Service Categories */}
            <div className="lg:col-span-1">
              <div className="space-y-3">
                {tailoredServices.map((service, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedService(index)}
                    className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${selectedService === index
                        ? 'bg-emerald-50 border-emerald-300 shadow-lg'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                      }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-1 h-12 rounded-full transition-all duration-300 ${selectedService === index
                          ? 'bg-emerald-600'
                          : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                        }`}></div>
                      <div>
                        <h3 className={`text-lg font-bold transition-colors duration-300 ${selectedService === index ? 'text-emerald-900' : 'text-gray-900'
                          }`}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right Column - Service Details */}
            <div className="lg:col-span-2">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg"
              >
                <div className="mb-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {tailoredServices[selectedService].description}
                  </p>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    What We Deliver:
                  </h4>
                  <div className="space-y-2">
                    {tailoredServices[selectedService].details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: detailIndex * 0.05 }}
                        className="flex items-start space-x-3 p-2 rounded-lg bg-gray-50 hover:bg-emerald-50 transition-colors duration-200"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 font-semibold hover:shadow-lg transition-all duration-300">
                      Get Started with {tailoredServices[selectedService].title}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Isaac Walusimbi",
                company: "Sprint Internet Limited",
                position: "CEO",
                quote: "Nova Gen transformed our outdated website into a modern, high-converting platform. Their team's expertise and attention to detail exceeded our expectations."
              },
              {
                name: "Michael Chen",
                company: "InnovateCorp",
                position: "CTO",
                quote: "The mobile app they developed for us has been a game-changer for our business. User engagement increased by tremendously in the first months alone. I would recommend them to ayone interested in their services."
              },
              {
                name: "Emma Rodriguez",
                company: "GrowthMasters Inc",
                position: "Marketing Director",
                quote: "Working with Nova Gen was a seamless experience from start to finish. They delivered exactly what they promised, on time and within budget.They take customer feedback and reactions seriously"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-lg mb-1">{testimonial.name}</div>
                  <div className="text-sm text-emerald-600 font-medium mb-1">{testimonial.company}</div>
                  <div className="text-sm text-gray-600 mb-3">{testimonial.position}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
              A Message from Our CEO
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-[#009696] rounded-2xl p-8 text-white shadow-2xl">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-white/80 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-xl leading-relaxed mb-6 italic">
                  "At Nova Gen, we believe technology should empower businesses, not complicate them. Our mission is to deliver innovative solutions that drive real results and transform how our clients operate in the digital world.
                  <br /><br />
                  With over 5 years of experience and a team of passionate experts, we've helped countless businesses achieve their digital transformation goals. We don't just build software – we build partnerships that last.
                  <br /><br />
                  Choose Nova Gen for excellence, innovation, and results that matter."
                </blockquote>
                <div className="border-t border-white/30 pt-6">
                  <div className="font-bold text-xl">Nabilah Kitiibwa</div>
                  <div className="text-white/80">Chief Executive Officer</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                  <img
                    src="/images/ceo-nabilah.jpg"
                    alt="Nabilah Kitiibwa - CEO"
                    className="w-72 h-72 object-cover object-top rounded-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-black mb-2">Nabilah Kitiibwa</h3>
                <p className="text-lg text-black mb-4">Nova Generation Limited</p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a
                    href="https://linkedin.com/company/nova-generation-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black hover:text-[#009696] transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <div className="flex items-center text-black">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    5+ Years Leading Tech Innovation
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Control Practices Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
              Our Quality Control Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of quality through rigorous testing and validation processes at every stage of development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Automated Testing",
                description: "Comprehensive automated test suites ensure code quality and prevent regressions across all platforms and devices."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Security Audits",
                description: "Regular security assessments and penetration testing to protect against vulnerabilities and ensure data safety."
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Code Reviews",
                description: "Peer code reviews and pair programming ensure high-quality, maintainable code that follows best practices."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance Testing",
                description: "Load testing and performance optimization to ensure applications perform flawlessly under various conditions."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "User Acceptance Testing",
                description: "Real-user testing and feedback integration to ensure the final product meets user needs and expectations."
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Continuous Integration",
                description: "Automated deployment pipelines with continuous testing ensure rapid, reliable delivery of quality software."
              }
            ].map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {practice.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{practice.title}</h3>
                <p className="text-gray-600 leading-relaxed">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our services, process, and partnership
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How long does a typical software development project take?",
                answer: "Project timelines vary based on complexity and scope. A simple mobile app might take 2-3 months, while a complex enterprise system could take 6-12 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
              },
              {
                question: "Do you provide ongoing maintenance and support after project completion?",
                answer: "Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimizations, and feature enhancements. We recommend ongoing support to ensure your software continues to perform optimally as your business grows."
              },
              {
                question: "What is your development process like?",
                answer: "We follow an agile development methodology with regular client check-ins and iterative development cycles. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support. We emphasize transparent communication and collaboration throughout."
              },
              {
                question: "How do you handle project pricing and payment terms?",
                answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Payment terms are typically structured with milestones - 30% upfront, 40% during development, and 30% upon completion. We can customize payment schedules based on your preferences."
              },
              {
                question: "Can you work with our existing systems and technologies?",
                answer: "Absolutely! We specialize in system integration and can work with most existing technologies. Whether you need to integrate with legacy systems, APIs, databases, or third-party services, our team has extensive experience in seamless integration and migration projects."
              },
              {
                question: "What measures do you take to ensure project security and confidentiality?",
                answer: "Security is paramount in all our projects. We use encrypted communication channels, signed NDAs, secure development environments, and follow industry best practices for data protection. All team members undergo background checks and are bound by confidentiality agreements."
              },
              {
                question: "Do you provide training for our team on the new software?",
                answer: "Yes, comprehensive training is included in all our projects. We provide detailed documentation, video tutorials, live training sessions, and ongoing support to ensure your team can effectively use and maintain the software. We also offer advanced training for administrators and power users."
              },
              {
                question: "What if we need to make changes to the project scope during development?",
                answer: "We understand that requirements can evolve. We use a structured change management process that includes impact assessment, timeline adjustments, and cost implications. Minor changes are typically accommodated within the original scope, while major changes may require contract amendments."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 min-h-[50vh] sm:min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/cta-novagen.jpg')`,
            }}
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-4 py-8"
          >
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project and bring your vision to life with our expert team and cutting-edge solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-emerald-500 text-white hover:bg-emerald-600 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Quote Popup */}
      {quotePopupOpen && selectedServiceForQuote && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={handleBackdropClick}>
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
                    {selectedServiceForQuote.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Get Quote for {selectedServiceForQuote.title}</h3>
                    <p className="text-gray-600">{selectedServiceForQuote.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setQuotePopupOpen(false)
                    setSubmitStatus('idle')
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      projectDetails: '',
                      budget: '',
                      timeline: ''
                    })
                  }}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Service Details */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What We Deliver:</h4>
                    <div className="space-y-3">
                      {selectedServiceForQuote.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Estimated Project Cost</h4>
                    <div className="text-left">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">
                        ${selectedServiceForQuote.pricing.usd.min.toLocaleString()} - ${selectedServiceForQuote.pricing.usd.max.toLocaleString()}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 text-left">
                      * Final pricing depends on project scope and requirements. Fill out the form for a detailed quote.
                    </p>
                  </div>
                </div>

                {/* Right Column - Quote Form */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Request Your Quote</h4>

                  {submitStatus === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Quote Request Sent!</h3>
                      <p className="text-green-700">Thank you for your interest. We'll get back to you within 24 hours with a detailed quote.</p>
                      <Button
                        className="mt-4 bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => setQuotePopupOpen(false)}
                      >
                        Close
                      </Button>
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-xl">!</span>
                      </div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Something went wrong</h3>
                      <p className="text-red-700">Please try again or contact us directly.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault()
                        setIsSubmitting(true)
                        setSubmitStatus("idle")

                        const payload = {
                          formType: "services-quote",
                          service: selectedServiceForQuote.title,
                          fullName: formData.name,
                          email: formData.email,
                          phone: formData.phone,
                          company: formData.company,
                          details: formData.projectDetails,
                          budget: formData.budget,
                          timeline: formData.timeline,
                        }

                        try {
                          console.log("Sending payload:", payload)
                          await fetch(
                            "https://script.google.com/macros/s/AKfycbwjmN1IyIpoUOSnqQJtsUnoxBnzEvFNBTXjgC-mZmtUAQ-X6ow5Ze6u05HyzwAwYk9D/exec",
                            {
                              method: "POST",
                              mode: "no-cors",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(payload),
                            }
                          )

                          console.log("Request sent successfully (no-cors mode)")
                          setSubmitStatus("success")
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            projectDetails: "",
                            budget: "",
                            timeline: "",
                          })
                        } catch (err) {
                          console.error("Fetch error:", err)
                          setSubmitStatus("error")
                        } finally {
                          setIsSubmitting(false)
                        }
                      }}
                      className="space-y-4"
                    >

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            placeholder="+256 XXX XXX XXX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            placeholder="Company name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                        <textarea
                          required
                          rows={4}
                          value={formData.projectDetails}
                          onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range *</label>
                          <select
                            required
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-5k">Under $5,000</option>
                            <option value="5k-15k">$5,000 - $15,000</option>
                            <option value="15k-50k">$15,000 - $50,000</option>
                            <option value="over-50k">Over $50,000</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Timeline *</label>
                          <select
                            required
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1-3-months">1-3 months</option>
                            <option value="3-6-months">3-6 months</option>
                            <option value="6-months-plus">6+ months</option>
                          </select>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#009696] hover:bg-[#009696]/90 text-white py-3"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}