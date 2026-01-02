"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import {
  ExternalLink,
  ArrowRight,
  Diamond,
  Star,
  Users,
  Shield,
  Palette,
} from "lucide-react"

export default function SponsorsPage() {
  const confirmedSponsors = [
    {
      name: "PurpleRain Tech",
      tier: "Diamond",
      logo: "/sponsors/purplerain.png",
      bio: "PurpleRain Tech is building the immune system for the digital world. Their advanced engineering and uncompromising standards provide enterprise-grade cybersecurity for networks globally, defending what matters most with real-time monitoring and proactive response.",
      website: "https://www.purplerain.tech/",
    },
    {
      name: "BrowserOS",
      tier: "Silver",
      logo: "/browserOS.svg",
      bio: "BrowserOS is an open-source, AI-native browser designed for the future of web automation. It allows users to build AI agents that automate tedious browser tasks using plain English, all while running locally for maximum privacy.",
      website: "https://browseros.com/",
    },
    {
      name: ".xyz domains",
      tier: "Bronze",
      logo: "/sponsors/xyz_logo.svg.png",
      bio: ".xyz is the go-to domain extension for the next generation of innovators and creators. It provides a unique and flexible namespace for the modern web, supporting a global community of builders.",
      website: "https://gen.xyz/",
    }
  ]

  const tiers = [
    { name: "Diamond", icon: Diamond, label: "Diamond Sponsors" },
    { name: "Gold", icon: Star, label: "Gold Sponsors" },
    { name: "Silver", icon: Shield, label: "Silver Sponsors" },
    { name: "Bronze", icon: Users, label: "Bronze Sponsors" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageSection className="pt-24 pb-12">
        <SectionHeader
          eyebrow="Our Partners"
          title="Current Sponsors"
          desc="Join industry leaders in supporting the next generation of cybersecurity innovators through superior engineering and support."
          className="cursor-target mb-16"
        />

        <div className="space-y-24">
          {tiers.map((tier) => {
            const sponsors = confirmedSponsors.filter(s => s.tier === tier.name)
            if (sponsors.length === 0 && tier.name !== "Diamond") return null // Only show non-empty tiers except Diamond as it's the anchor

            return (
              <div key={tier.name} className="space-y-12">
                {/* Tier Separator */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-grow bg-white/10" />
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                    <tier.icon className="size-4 text-white/40" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{tier.label}</span>
                  </div>
                  <div className="h-px flex-grow bg-white/10" />
                </div>

                <div className={`grid gap-8 ${tier.name === "Diamond" ? "grid-cols-1" :
                  tier.name === "Gold" || tier.name === "Silver" ? "md:grid-cols-2" :
                    "md:grid-cols-3 lg:grid-cols-4"
                  }`}>
                  {sponsors.map((sponsor, i) => (
                    <Reveal key={sponsor.name} delay={i * 100}>
                      <Card className={`glass cursor-target group border-white/10 overflow-hidden relative flex flex-col h-full ${tier.name === "Diamond" ? "md:p-12 p-8" : "p-8"
                        }`}>
                        {tier.name === "Diamond" && (
                          <div className="absolute right-0 top-0 h-full w-[40%] bg-brand-gradient opacity-[0.03] pointer-events-none" />
                        )}

                        <div className={`${tier.name === "Diamond" ? "grid md:grid-cols-[1.5fr_1fr] gap-12 items-center" : "space-y-8 flex-grow"}`}>
                          <div className="space-y-8">
                            <div className="flex flex-col gap-6">
                              {tier.name === "Diamond" && (
                                <span className="w-fit bg-brand-gradient text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded">Diamond Sponsor</span>
                              )}
                              <div className="flex items-center gap-6">
                                <div className="h-20 w-auto min-w-20 md:h-24 md:min-w-24 px-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center py-4 group-hover:border-white/20 transition-all duration-500 shrink-0">
                                  <img
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} logo`}
                                    className="max-h-12 max-w-[120px] md:max-h-16 md:max-w-[160px] h-auto w-auto object-contain filter grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                                  />
                                </div>
                                {tier.name === "Diamond" ? (
                                  <CardTitle className="text-4xl md:text-6xl font-extrabold italic tracking-tighter">
                                    {sponsor.name}
                                  </CardTitle>
                                ) : (
                                  tier.name !== "Diamond" && (
                                    <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded bg-white/5 text-muted-foreground border border-white/10 ml-auto">
                                      {sponsor.tier}
                                    </span>
                                  )
                                )}
                              </div>
                            </div>

                            <div className="space-y-4">
                              {tier.name !== "Diamond" && (
                                <CardTitle className="text-2xl font-extrabold italic tracking-tight">
                                  {sponsor.name}
                                </CardTitle>
                              )}
                              <p className={`${tier.name === "Diamond" ? "text-xl" : "text-sm"} text-muted-foreground leading-relaxed tracking-wide`}>
                                {sponsor.bio}
                              </p>
                            </div>
                          </div>

                          {tier.name === "Diamond" && (
                            <div className="flex justify-center md:justify-end">
                              <div className="h-48 w-48 md:h-80 md:w-full rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-white/20 transition-all duration-500 relative">
                                <div className="absolute inset-0 bg-brand-gradient opacity-10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
                                <img
                                  src="/sponsors/purplerain-device.avif"
                                  alt="PurpleRain Device Mockup"
                                  className="h-full w-full object-cover relative z-10 drop-shadow-2xl scale-105 group-hover:scale-110 transition-transform duration-700"
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        <div className={`mt-10 pt-8 border-t border-white/5 flex ${tier.name === "Diamond" ? "justify-start" : "justify-center"}`}>
                          <Button asChild size={tier.name === "Diamond" ? "lg" : "sm"} className={`rounded-full transition-all border-none font-bold text-white px-8 ${tier.name === "Diamond" ? "h-12 bg-brand-gradient hover:opacity-90 min-w-[200px]" : "h-10 bg-white/10 hover:bg-white/15 w-full"
                            }`}>
                            <a href={sponsor.website} target="_blank" rel="noopener">
                              {tier.name === "Diamond" ? "Launch Website" : "Visit Website"}
                              <ExternalLink className={`ml-2 ${tier.name === "Diamond" ? "size-4" : "size-3.5"}`} />
                            </a>
                          </Button>
                        </div>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Ready?"
          title="Apply to Partner"
          desc="Custom partnership journeys start with a conversation."
          className="cursor-target"
        />

        <div className="max-w-2xl mx-auto">
          <Reveal>
            <Card className="glass border-white/10 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <OrnamentRings className="h-64 w-64" />
              </div>
              <CardContent className="p-10 text-center space-y-8 relative z-10">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold italic tracking-tight">Let's build the immune system of the digital world together.</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Contact us for a custom quote and a sponsorship package tailored specifically to your brand's goals.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="h-12 px-8 rounded-full bg-brand-gradient hover:opacity-90 transition-opacity border-none text-white font-bold min-w-[180px]">
                    <a href="/apply-as-sponsor">
                      Apply as Sponsor
                      <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 min-w-[180px]">
                    <a href="mailto:codorra@yahoo.com?subject=Sponsor%20CODORRA%20Hackathon">
                      Email Our Team
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </PageSection>

      <div className="absolute right-6 top-10 pointer-events-none">
        <OrnamentRings className="h-64 w-64" />
      </div>
      <Footer />
    </main>
  )
}
