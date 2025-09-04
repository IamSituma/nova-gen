"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Send, Bot, User, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ContactUsPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI support assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const faqs = [
    {
      question: "How do I get started with a new project?",
      answer:
        "Getting started is easy! Simply book a free consultation through our website, and we'll discuss your project requirements, timeline, and budget. Our team will then create a custom proposal tailored to your needs.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 8-16 weeks. We'll provide a detailed timeline during your consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes! We offer flexible support and maintenance packages to keep your website or application running smoothly. Contact us for more details.",
    },
  ]

  // ...rest of the support page code...

  return (
    <div>
      <NavBar />
      {/* Contact Us page content (copied from Support) */}
      {/* ...existing code... */}
      <Footer />
    </div>
  )
}
