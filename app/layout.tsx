import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Aurora from "@/components/aurora"
import "./globals.css"

export const metadata: Metadata = {
  title: "CODORRA 2026 | India's Premier Cybersecurity Hackathon",
  description: "Join 500+ builders for a 48-hour cybersecurity-focused hackathon in Bengaluru + Online. Solve AI, Network, and Infrastructure security challenges. win prizes and internships.",
  keywords: ["hackathon", "cybersecurity", "AI security", "Bengaluru tech events", "coding competition", "CODORRA", "security builders"],
  authors: [{ name: "CODORRA Team" }],
  openGraph: {
    title: "CODORRA 2026 | Cybersecurity Hackathon",
    description: "48-hour build-fest for security innovators. Join us in Bengaluru or Online.",
    url: "https://codorra.tech",
    siteName: "CODORRA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CODORRA 2026 Hackathon Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODORRA 2026 | Cybersecurity Hackathon",
    description: "Build the future of security. Bengaluru + Online.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
}

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} ${jakarta.variable} ${GeistMono.variable} antialiased`} style={{ fontFamily: 'var(--font-roboto-mono), "Roboto Mono", monospace' }}>
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
