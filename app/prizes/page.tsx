"use client"

import type React from "react"
import { Badge } from "@/components/ui/badge"
import { PageSection, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { OrnamentRings } from "@/components/ornament-rings"
import { Trophy, Star, Gift } from "lucide-react"

const prizes = [
  {
    id: "cash-prize",
    name: "₹5,000 Cash Prize",
    description: "Direct monetary award for winning teams",
    features: ["Top winning teams eligible", "Direct bank transfer", "No conditions"]
  },
  {
    id: "xyz-domain",
    name: "Free .xyz Domain for 1 Year",
    description: "For Top 100 Teams - Complimentary domain registration and hosting",
    features: ["Top 100 teams eligible", "1 year free", "Full domain features", "Easy management"]
  },
  {
    id: "bluetooth-speaker",
    name: "PHILIPS Audio TAS1400BK Wireless Bluetooth Speaker",
    description: "Deep Bass, Passive Radiator, 12W Sound Output, 1200mAh Rechargable Battery, RGB Light Modes, 10H Playtime",
    features: ["12W sound output", "Deep bass", "RGB light modes", "10H playtime", "Multiple connectivity"]
  },
  {
    id: "noise-tag",
    name: "Noise Tag 1: Global Item Tracker",
    description: "Compatible with Android Google Find My Device & Apple Find My Network, 90dB Ring Volume, 30M Outdoor Range, 1 Year Battery",
    features: ["Cross-platform compatibility", "90dB ring volume", "30M outdoor range", "1 year battery", "Perfect for keys & wallets"]
  },
  {
    id: "screwdriver-set",
    name: "Peace Tech 25-in-1 Precision Screwdriver Bits Set",
    description: "Eyeglasses, Computer, Electronic, Watch Repair Kit with Phillips and Star Tiny Screw Driver Home Kit (Metal Pen)",
    features: ["25 in 1 set", "Magnetic bits", "Precision tools", "Metal pen design"]
  },
  {
    id: "internship-interview",
    name: "Internship Interview at PurpleRain.Tech",
    description: "Direct internship interview opportunity with our development team",
    features: ["Exclusive opportunity", "Top teams eligible", "Mentorship potential", "Career development"]
  }
]

export default function PrizesPage() {
  return (
    <main>
      <Navbar />

      {/* Header Section */}
      <PageSection className="border-b" withCursor={false}>
        <Container>
          <Reveal>
            <div className="text-center space-y-6 mb-12">
              <div className="flex items-center justify-center gap-3">
                <Trophy className="size-8 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Hackathon Prizes
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Amazing prizes await the winning teams! These exclusive rewards are ready to be claimed by our top innovators.
              </p>
            </div>
          </Reveal>

          {/* Prize List */}
          <div className="space-y-3 max-w-4xl mx-auto">
            {prizes.map((prize, index) => (
              <Reveal key={prize.id} delay={index * 50}>
                <div className="glass border border-white/10 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Gift className="size-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors mb-1">
                        {prize.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {prize.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {prize.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs bg-white/10 text-white/90 border-white/20"
                          >
                            <Star className="size-2.5 mr-1" />
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Footer Note */}
          <Reveal delay={400}>
            <div className="text-center mt-12 p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Trophy className="size-5 text-primary" />
                <h3 className="text-lg font-semibold">Prize Distribution</h3>
              </div>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Prizes will be awarded to the top-performing teams based on innovation, technical excellence, and impact.
                Winners will be announced during the closing ceremony.
              </p>
            </div>
          </Reveal>
        </Container>
      </PageSection>

      <div className="absolute right-6 top-10">
        <OrnamentRings className="h-64 w-64" />
      </div>
      <Footer />
    </main>
  )
}