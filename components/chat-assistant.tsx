"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react"

// -----------------------------
// Utils
// -----------------------------
const generateMessageId = () =>
  `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateMessageId(),
      content:
        "Hello! I’m Nova Gen’s Online Assistant. I’m here to guide you through our services. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])

  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // ======================================================
  // ✅ YOUR ORIGINAL ADVANCED RESPONSES (UNCHANGED)
  // ======================================================
  const generateAdvancedBotResponse = async (
    userMessage: string
  ): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("about") || lowerMessage.includes("company")) {
      return "Nova Generation Limited is a leading technology company based in Kampala, Uganda, specializing in web development, mobile apps, and digital solutions."
    }

    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("phone") ||
      lowerMessage.includes("email")
    ) {
      return "Contact us via 📧 Email: info@novageneration.tech\n📱 Phone: +256 741 004 466\n🏢 Kampala, Uganda"
    }

    if (lowerMessage.includes("services")) {
      return "We offer Web Development, Mobile App Development, UI/UX Design, Technical Consulting, and Digital Transformation services."
    }

    if (lowerMessage.includes("web")) {
      return "We build modern websites and web apps using React, Next.js, and scalable backend systems. Pricing starts at $1,000."
    }

      if (lowerMessage.includes("ui") || lowerMessage.includes("design")) {
      return "We build modern UI interfaces websites, applications, and user experiences that are both beautiful and functional. Our design process focuses on user-centric principles to create intuitive and engaging digital products."
    }

    if (lowerMessage.includes("mobile") || lowerMessage.includes("app")) {
      return "We develop cross-platform mobile apps for iOS and Android using React Native and Flutter."
    }

    if (lowerMessage.includes("location")) {
      return "We are located in Kampala, Bugolobi, Bandali Rise, Studio House, Level 4. Visit us for a coffee and a chat about your project!"
    }

    if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return "Pricing depends on scope. Basic projects start around $5K. Contact us for a custom quote."
    }

    if (lowerMessage.includes("support") || lowerMessage.includes("maintenance")) {
      return "All projects include 3 months free maintenance with optional extended support plans."
    }

    if (lowerMessage.includes("career") || lowerMessage.includes("job")) {
      return "We’re always hiring developers, designers, and tech consultants. Visit our careers page!"
    }

    if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey")
    ) {
      return "Hello! How can NovaGen help you today?"
    }

    return "Thanks for reaching out! Could you clarify your question or contact us at info@novageneration.tech?"
  }

  // ======================================================
  // Send Message
  // ======================================================
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMsg: Message = {
      id: generateMessageId(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInputMessage("")
    setIsTyping(true)

    setTimeout(async () => {
      const botMsg: Message = {
        id: generateMessageId(),
        content: await generateAdvancedBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 1200)
  }

  // ======================================================
  // UI
  // ======================================================
  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-primary to-emerald-500 rounded-full flex items-center justify-center shadow-xl"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed z-50 bg-background border border-border rounded-2xl shadow-2xl flex flex-col
                left-4 right-4 bottom-4 h-[85vh]
                md:left-auto md:right-6 md:bottom-24 md:w-96 md:h-[600px]
              "
            >
              {/* Header */}
              <div className="p-3 md:p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-sm font-bold">NovaGen Assistant</span>
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                </div>

                <button onClick={() => setIsOpen(false)}>
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-3 py-2 md:px-4 md:py-3 rounded-xl text-sm max-w-[85%] ${
                        msg.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-muted border border-border"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <p className="text-xs text-muted-foreground">Typing...</p>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={handleSendMessage}
                className="border-t border-border p-3 md:p-4 flex gap-2"
              >
                <input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 md:px-4 md:py-3 border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary"
                />
                <button className="px-3 md:px-4 py-2 md:py-3 bg-primary text-white rounded-xl">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
