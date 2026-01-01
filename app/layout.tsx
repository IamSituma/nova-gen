import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { BusinessProfileHeader } from "@/components/business-profile-header"
import ChatAssistant from "@/components/chat-assistant"

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nova Generation - Automate, Innovate, Empower",
  description: "At Nova Generation we convey a transition to digital solutions to streamline various aspects of business operations, processes, and services.",
   }

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={notoSans.className}>
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
