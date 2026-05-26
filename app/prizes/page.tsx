"use client"

import type React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { PageSection, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { OrnamentRings } from "@/components/ornament-rings"
import { Trophy, Star, Gift } from "lucide-react"

const prizes = [
  {
    id: "first-place",
    name: "First Place",
    description: "iPad 11th Generation (128GB, Sky Blue, WiFi)",
    features: ["iPad 11th Gen", "128GB Storage", "Sky Blue Color", "WiFi Version", "Team Leader Award"],
    image: "/prizes/ipad-model-unselect-gallery-2-202503_FMT_WHH.jpg"
  },
  {
    id: "second-place",
    name: "Second Place",
    description: "PHILIPS Audio Speaker + Screwdriver Set",
    features: ["PHILIPS TAS1400BK Speaker", "Peace Tech 25-in-1 Screwdriver Set", "Team Leader Award"],
    image: "/prizes/speaker.webp",
    secondImage: "/prizes/screwdriverset.jpg"
  },
  {
    id: "third-place",
    name: "Third Place",
    description: "Noise Tag 1: Global Item Tracker",
    features: ["Noise Tag 1", "Cross-platform Compatible", "90dB Ring Volume", "Team Leader Award"],
    image: "/prizes/tag1.jpg"
  },
  {
    id: "cash-prizes",
    name: "Cash Prizes",
    description: "₹5,000 awarded to Top 3 Teams",
    features: ["₹5,000 per team", "Top 3 teams eligible", "Direct bank transfer", "Team Leader Award"],
    image: "/prizes/inr.jpg"
  },
  {
    id: "internship",
    name: "Internship Interviews",
    description: "All members of Top 5 teams eligible",
    features: ["Top 5 teams", "All team members", "PurpleRain.Tech", "Career opportunity"],
    image: "/prizes/interns.jpg"
  },
  {
    id: "xyz-domain",
    name: "Free .xyz Domain",
    description: "First 100 participants to claim",
    features: ["1 year free", "First 100 only", "Full domain features", "Easy management"],
    image: "/prizes/xyz-domain.jpg"
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
          <div className="space-y-6 max-w-4xl mx-auto">
            {prizes.map((prize, index) => (
              <Reveal key={prize.id} delay={index * 50}>
                <div className="glass border border-white/10 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 group">
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    {/* Image Section */}
                    <div className="md:col-span-1 flex items-center justify-center">
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white/5 border border-white/10">
                        <Image
                          src={prize.image}
                          alt={prize.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {prize.secondImage && (
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white/5 border border-white/10 ml-4">
                          <Image
                            src={prize.secondImage}
                            alt={`${prize.name} - Item 2`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors mb-2">
                        {prize.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
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

          {/* Prize Distribution Note */}
          <Reveal delay={400}>
            <div className="text-center mt-12 p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Trophy className="size-5 text-primary" />
                <h3 className="text-lg font-semibold">Prize Distribution</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Physical prizes (iPad, Speaker, Screwdriver Set, Noise Tag) are awarded to the <strong>team leader</strong>, who can then distribute them among team members as they see fit. Cash prizes are also awarded to the team leader for distribution.
              </p>
              <p className="text-muted-foreground text-sm">
                Winners will be announced during the closing ceremony. All prizes are subject to verification for plagiarism and adherence to hackathon rules.
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