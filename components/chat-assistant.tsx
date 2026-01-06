"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Sparkles, Minimize2 } from "lucide-react"

// Function to generate unique IDs using timestamp + random
const generateMessageId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateMessageId(),
      content: "Hello! I’m Nova Gen’s Online Assistant. I’m here to guide you through our web development, mobile app, and digital transformation services. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Enhanced AI response function with NovaGen-specific information
  const generateAdvancedBotResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase()

    // Company information
    if (lowerMessage.includes("about") || lowerMessage.includes("company") || lowerMessage.includes("who")) {
      return "Nova Generation Limited is a leading technology company based in Kampala, Uganda, with a global reach. We specialize in transforming businesses through innovative web development, mobile applications, and digital solutions. With over 5 years of experience and 100+ successful projects, we've helped businesses across Africa, Europe, and North America achieve their digital transformation goals. Our mission is to empower businesses with technology that drives real results."
    }

    // Contact information
    if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email") || lowerMessage.includes("reach") || lowerMessage.includes("call")) {
      return "Here are our contact details:\n\n📧 Email: info@novageneration.tech\n📱 Phone: +256 741 004 466\n🏢 Location: Bandali Rise, Studio House, Level 4, Kampala, Uganda\n🌐 Website: novageneration.tech\n\nWe're available Monday to Friday, 9AM-5PM EAT (East African Time). For urgent inquiries, you can also reach us via WhatsApp at the same phone number. We typically respond within 24 hours!"
    }

    // Location and contact
    if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("uganda") || lowerMessage.includes("kampala")) {
      return "We're proudly based in Kampala, Uganda, in the Bandali Rise area at Studio House. While our roots are in Uganda, we serve clients worldwide with the same high-quality service. You can reach us at info@novageneration.tech or call +256 741 004 466. We also offer remote collaboration and have successfully delivered projects across Africa, Europe, and North America."
    }

    // Services overview
    if (lowerMessage.includes("services") || lowerMessage.includes("what do you do")) {
      return "At NovaGen, we offer comprehensive digital solutions: Enterprise Web Development (custom websites and web applications), Mobile App Development (iOS/Android cross-platform apps), UI/UX Design (user-centered design solutions), and Technical Consultation. Our services are tailored to transform your business operations and drive growth. Which service interests you most?"
    }

    // Web development specific
    if (lowerMessage.includes("web") || lowerMessage.includes("website")) {
      return "Our web development services range from simple business websites to complex enterprise applications. We build custom solutions using modern technologies like React, Next.js, and Node.js. Our web projects typically include responsive design, SEO optimization, performance optimization, and scalability features. Recent projects include e-commerce platforms, SaaS applications, and corporate websites. Would you like to see our portfolio or discuss your web development needs?"
    }

    // Mobile app specific
    if (lowerMessage.includes("mobile") || lowerMessage.includes("app") || lowerMessage.includes("ios") || lowerMessage.includes("android")) {
      return "We develop native and cross-platform mobile applications for iOS and Android. Our mobile solutions include fitness tracking apps, e-commerce platforms, business management tools, and custom applications. We use React Native and Flutter for cross-platform development, ensuring consistent user experience across devices. Our mobile apps have been downloaded by over 50K users with a 98% satisfaction rate."
    }

    // Pricing responses
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("budget") || lowerMessage.includes("quote")) {
      if (lowerMessage.includes("web") || lowerMessage.includes("website")) {
        return "Web development projects at NovaGen range from $5,000 for basic business websites to $50,000+ for complex enterprise applications. Our pricing includes: custom design, responsive development, SEO optimization, performance optimization, and 3 months free support. We offer transparent pricing with no hidden costs. Would you like to schedule a free consultation for a detailed quote?"
      }
      if (lowerMessage.includes("mobile") || lowerMessage.includes("app")) {
        return "Mobile app development costs range from $8,000 for simple apps to $80,000+ for feature-rich applications. Our pricing covers: native/cross-platform development, custom UI/UX design, backend integration, testing, deployment, and ongoing support. Factors include platform choice, complexity, and third-party integrations. We can provide accurate estimates during a technical consultation."
      }
      return "Our pricing is tailored to your specific requirements and business goals. Basic projects start at $5K, medium complexity $15K-$50K, and enterprise solutions $50K+. All projects include 3 months free maintenance and support. We offer flexible payment terms and transparent pricing. Contact us at info@novageneration.tech or schedule a free consultation for a personalized quote."
    }

    // Technology stack
    if (lowerMessage.includes("technology") || lowerMessage.includes("tech stack") || lowerMessage.includes("framework") || lowerMessage.includes("tools")) {
      return "NovaGen uses cutting-edge technologies: Frontend (React, Next.js, TypeScript, Tailwind CSS), Backend (Node.js, Python, PostgreSQL, MongoDB), Mobile (React Native, Flutter), Cloud (AWS, Azure, Vercel), and AI/ML solutions. We stay current with industry best practices and choose the right technology stack for each project's specific requirements. Our expertise spans web development, mobile apps, UI/UX design, and digital transformation."
    }

    // Project timeline
    if (lowerMessage.includes("time") || lowerMessage.includes("timeline") || lowerMessage.includes("deadline") || lowerMessage.includes("how long")) {
      return "Our project timelines are realistic and efficient: Simple websites (2-4 weeks), Custom web applications (6-12 weeks), Mobile apps (8-16 weeks), Enterprise solutions (12-24 weeks). We use agile methodology with weekly updates, early previews, and regular client communication. Our process includes: Discovery & Planning → Design & Prototyping → Development & Testing → Launch & Support. Rush projects are available with dedicated teams."
    }

    // Team and process
    if (lowerMessage.includes("team") || lowerMessage.includes("process") || lowerMessage.includes("methodology") || lowerMessage.includes("experience")) {
      return "Our team consists of senior developers, UX/UI designers, project managers, and QA specialists with 5+ years average experience. We've successfully delivered 100+ projects with 98% client satisfaction. Our proven process: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Launch & Support. We follow agile methodology with continuous integration, automated testing, and transparent communication throughout the project lifecycle."
    }

    // Portfolio and projects
    if (lowerMessage.includes("portfolio") || lowerMessage.includes("projects") || lowerMessage.includes("work") || lowerMessage.includes("examples")) {
      return "Our portfolio includes 10+ successful projects: Nova Legal (legal management platform), Nova Auto (repair shop website), DreamBox AI (cinematic video generation), Nova E-Commerce (multi-vendor marketplace), Nova Mobile (fitness tracking app), and more. We've built solutions for healthcare, education, real estate, blockchain, and SaaS platforms. All projects feature modern design, scalable architecture, and excellent user experience. Visit our projects page to explore detailed case studies."
    }

    // Support and maintenance
    if (lowerMessage.includes("support") || lowerMessage.includes("maintenance") || lowerMessage.includes("update") || lowerMessage.includes("after")) {
      return "We provide comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. All projects include 3 months free maintenance. Our support packages: Basic (monthly updates), Premium (24/7 monitoring), Enterprise (dedicated technical account manager). We ensure your solution remains secure, fast, and up-to-date. Contact us anytime at info@novageneration.tech."
    }

    // Careers and jobs
    if (lowerMessage.includes("career") || lowerMessage.includes("job") || lowerMessage.includes("work with") || lowerMessage.includes("join")) {
      return "We're always looking for talented individuals to join our growing team! We offer remote-first culture, innovative projects, and growth opportunities. Our current openings span web development, mobile apps, UI/UX design, and technical consulting. We provide competitive salaries, professional development, and the chance to work on cutting-edge projects. Visit our Careers page to see current openings or send us your resume for future opportunities."
    }

    // Partnership information
    if (lowerMessage.includes("partnership") || lowerMessage.includes("partner") || lowerMessage.includes("reseller")) {
      return "Our partnership program offers exclusive benefits: 15% discount on development projects, 3 months free maintenance, priority support, and flexible terms. We have reseller, referral, technology, and strategic partnership options. While based in Uganda, our partnerships extend globally. Apply through our partnership page or contact us at info@novageneration.tech to learn about partnership opportunities."
    }

    // Consultation and meeting
    if (lowerMessage.includes("consultation") || lowerMessage.includes("meeting") || lowerMessage.includes("call") || lowerMessage.includes("discuss")) {
      return "We offer free 30-minute technical consultations to understand your requirements and provide accurate project estimates. During the consultation, we'll discuss your goals, technical approach, timeline, and budget. We can meet via Zoom, phone, or in-person at our Kampala office. Contact us at info@novageneration.tech or +256 741 004 466 to schedule your consultation. We respond within 24 hours!"
    }

    // General greeting
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! Welcome to Nova Generation Limited. We're a technology company based in Kampala, Uganda, specializing in web development, mobile apps, and digital transformation solutions. We've helped 100+ businesses worldwide achieve their digital goals. How can I help you today? I can provide information about our services, pricing, portfolio, or schedule a consultation."
    }

    // Default response
    return "That's a great question! I'd be happy to provide detailed information about NovaGen's services, pricing, portfolio, or process. You can reach our team directly at info@novageneration.tech or +256 741 004 466. We offer free consultations and respond within 24 hours. What specific aspect of our services would you like to explore further?"
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: generateMessageId().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(async () => {
      const botResponse: Message = {
        id: generateMessageId().toString(),
        content: await generateAdvancedBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 2000)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => {
            setIsOpen(true)
            setIsMinimized(false)
          }}
          className="w-14 h-14 bg-gradient-to-r from-primary to-emerald-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
        </motion.button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{
                opacity: 1,
                scale: isMinimized ? 0.3 : 1,
                y: isMinimized ? 100 : 0,
              }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`fixed bottom-24 right-6 z-50 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden max-w-[calc(100vw-3rem)] ${
                isMinimized ? "w-80 h-16" : "w-96 h-[600px]"
              }`}
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-primary/10 to-emerald-500/10 border-b border-border p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-r from-primary to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 0 15px rgba(52,211,153,0.3)",
                        "0 0 25px rgba(52,211,153,0.5)",
                        "0 0 15px rgba(52,211,153,0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Bot className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-bold">NovaGen AI Assistant</h3>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                      </motion.div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <p className="text-xs text-muted-foreground">Online • Responds Instantly</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="w-8 h-8 rounded-lg hover:bg-muted/50 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Minimize2 className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-lg hover:bg-muted/50 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Chat Messages */}
              {!isMinimized && (
                <>
                  <div className="h-[440px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background/30 to-background/50">
                    <AnimatePresence>
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-lg ${
                              message.sender === "user"
                                ? "bg-gradient-to-r from-primary to-emerald-500 text-white"
                                : "bg-gradient-to-r from-muted to-muted/80 text-foreground border border-border/50"
                            }`}
                          >
                            <div className="flex items-start space-x-2">
                              {message.sender === "bot" && (
                                <motion.div
                                  animate={{ rotate: [0, 5, -5, 0] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                >
                                  <Bot className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                </motion.div>
                              )}
                              {message.sender === "user" && <User className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />}
                              <div className="flex-1">
                                <p className="text-sm leading-relaxed">{message.content}</p>
                                <p
                                  className={`text-xs mt-1 ${
                                    message.sender === "user" ? "text-white/70" : "text-muted-foreground"
                                  }`}
                                >
                                  {message.timestamp.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-gradient-to-r from-muted to-muted/80 px-4 py-3 rounded-2xl border border-border/50 shadow-lg">
                          <div className="flex items-center space-x-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                              <Bot className="w-4 h-4 text-primary" />
                            </motion.div>
                            <div className="flex space-x-1">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 bg-primary rounded-full"
                                  animate={{ y: [0, -4, 0] }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.2,
                                  }}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">Agent is Responding...</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="border-t border-border p-4 bg-background/80">
                    <form onSubmit={handleSendMessage} className="flex space-x-3">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          placeholder="Type your message..."
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm shadow-inner"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={!inputMessage.trim()}
                        className="px-4 py-3 bg-gradient-to-r from-primary to-emerald-500 text-white rounded-xl hover:from-primary/90 hover:to-emerald-500/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Send className="w-4 h-4" />
                      </motion.button>
                    </form>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
