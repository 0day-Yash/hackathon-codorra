import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Aurora from "@/components/aurora"
import "./globals.css"

export const metadata: Metadata = {
  title: "CODORRA Hackathon 2026",
  description: "48-hour cybersecurity-focused hackathon in Bengaluru + Online.",
  generator: "v0.app",
}

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${jakarta.variable} ${GeistMono.variable} antialiased`}>
        {/* Top Aurora background */}
        <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[420px] md:h-[520px] overflow-hidden">
          <div className="absolute inset-0 opacity-80 blur-xl">
            <Aurora
              colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
