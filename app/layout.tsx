import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { BusinessProfileHeader } from "@/components/business-profile-header"
import ChatAssistant from "@/components/chat-assistant"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nova Generation - Automate, Innovate, Empower",
  description: "At Nova Generation we convey a transition to digital solutions to streamline various aspects of business operations, processes, and services.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
   }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <BusinessProfileHeader />
            {children}
            <ChatAssistant />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
