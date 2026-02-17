import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Aurora from "@/components/aurora"
import "./globals.css"

export const metadata: Metadata = {
  title: "CODORRA 2026 | Global Cybersecurity & AI Hackathon",
  description: "Join 1000+ builders worldwide for a 72-hour international intensive. 48h Coding + 24h expert learning. Fully Online, Global Participation.",
  keywords: ["international hackathon", "cybersecurity", "AI security", "global tech event", "coding competition", "CODORRA", "security builders", "online hackathon 2026"],
  authors: [{ name: "CODORRA Team" }],
  openGraph: {
    title: "CODORRA 2026 | Cybersecurity Hackathon",
    description: "48-hour build-fest for security innovators. Join us in Bengaluru or Online.",
    url: "https://codorra.purplerain.tech",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        {/* Top Aurora background - Refined for Vercel aesthetic */}
        <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[600px] overflow-hidden">
          <div className="absolute inset-0 opacity-25 blur-3xl">
            <Aurora
              colorStops={["#000000", "#1a1a2e", "#7c3aed"]}
              blend={0.5}
              amplitude={1.2}
              speed={0.15}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        </div>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
