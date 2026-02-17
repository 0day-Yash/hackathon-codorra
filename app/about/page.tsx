"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHeader, PageSection, TwoColumnLayout, CardGrid, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import { Navbar, Footer } from "@/components/navigation"
import {
  Shield,
  Users,
  Clock,
  Building2,
  Wifi,
  MessageSquare,
  Trophy,
  BadgeCheck,
  Target,
  Lightbulb,
  Globe,
  Code,
  Zap,
  Smartphone,
  BrainCircuit,
  Rocket,
  Mic,
  Video,
} from "lucide-react"

export default function AboutPage() {
  const missionPoints = [
    {
      icon: Rocket,
      title: "Tech Innovation",
      description: "Addressing the critical need for innovation across AI, Web, Mobile, and Security in a digital-first world."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Bringing together students, professionals, and enthusiasts to collaborate and learn."
    },
    {
      icon: Lightbulb,
      title: "Innovation Catalyst",
      description: "Fostering breakthrough ideas that can make a real impact across multiple tech domains."
    },
    {
      icon: Globe,
      title: "100% Online",
      description: "A fully digital-first approach allowing global participation and building without borders."
    }
  ]

  const hackathonStructure = [
    {
      icon: Clock,
      title: "72-Hour Intensive",
      description: "May 29-31, 2026: 48 hours for core coding and 24 hours for learning sessions."
    },
    {
      icon: Globe,
      title: "Digital Venue",
      description: "Participate from anywhere in the world via our live-streamed platform and Discord."
    },
    {
      icon: Users,
      title: "Team Formation",
      description: "Teams of 2-4 members with diverse skill sets and backgrounds"
    },
    {
      icon: Code,
      title: "Submission Process",
      description: "Devpost integration with GitHub links for code and project documentation"
    }
  ]

  const whatToExpect = [
    {
      icon: Video,
      title: "Workshops & Talks",
      description: "Expert-led sessions on AI, Mobile development, Web performance, and Security"
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with industry professionals, mentors, and fellow participants"
    },
    {
      icon: Trophy,
      title: "Demo Day",
      description: "Present your solutions to judges and showcase your innovation"
    },
    {
      icon: Zap,
      title: "Real-time Support",
      description: "Get instant technical help and project guidance from our mentors on Discord."
    }
  ]

  const themeExplanation = [
    {
      title: "Growing Threat Landscape",
      description: "With cyber attacks increasing by 38% year-over-year, we need innovative solutions more than ever."
    },
    {
      title: "Skills Gap",
      description: "The cybersecurity workforce gap is projected to reach 3.5 million unfilled positions by 2026."
    },
    {
      title: "Innovation Opportunity",
      description: "Emerging technologies like AI, IoT, and cloud computing create new security challenges and opportunities."
    },
    {
      title: "Real-World Impact",
      description: "Solutions that directly improve lives, protect systems, and push the boundaries of technology."
    }
  ]

  return (
    <main>
      <Navbar />
      <PageHeader
        title="About CODORRA"
        description="A high-intensity 72-hour online hackathon focusing on Mobile, AI, Web, and Cybersecurity. 48 hours to build, 24 hours to learn."
      />

      <PageSection>
        <SectionHeader
          eyebrow="Our Mission"
          title="Why This Hackathon?"
          desc="We believe in the power of multidisciplinary innovation to build a better digital future."
          className="cursor-target"
        />
        <CardGrid cols={4}>
          {themeExplanation.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <Card className="glass border-white/10 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-xs leading-relaxed flex-grow">
                  {item.description}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </CardGrid>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Our Vision"
          title="Mission & Values"
          desc="Building a stronger, more secure digital ecosystem through innovation and collaboration."
          className="cursor-target"
        />
        <CardGrid cols={4}>
          {missionPoints.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <Card className="glass border-white/10 h-full flex flex-col group">
                <CardHeader className="pb-4 flex items-center gap-3">
                  <div className="bg-brand-gradient text-white rounded-lg p-2 border border-white/10">
                    <item.icon className="size-4" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-xs leading-relaxed flex-grow">
                  {item.description}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </CardGrid>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Event Structure"
          title="Hackathon Format"
          desc="A comprehensive 72-hour digital journey designed for global impact and accessibility."
          className="cursor-target"
        />
        <TwoColumnLayout
          left={
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Core Structure</h3>
              <div className="space-y-4">
                {hackathonStructure.map((item, i) => (
                  <Reveal key={item.title} delay={i * 100}>
                    <Card className="glass cursor-target">
                      <CardHeader className="pb-2 flex items-center gap-3">
                        <div className="bg-white/5 border border-white/10 text-white/50 rounded-lg p-2">
                          <item.icon className="size-4" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-muted-foreground">
                        {item.description}
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          }
          right={
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">What to Expect</h3>
              <div className="space-y-4">
                {whatToExpect.map((item, i) => (
                  <Reveal key={item.title} delay={i * 100}>
                    <Card className="glass cursor-target">
                      <CardHeader className="pb-2 flex items-center gap-3">
                        <div className="bg-white/5 border border-white/10 text-white/50 rounded-lg p-2">
                          <item.icon className="size-4" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-muted-foreground">
                        {item.description}
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          }
        />
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Participation"
          title="Build • Learn • Lead"
          desc="Experience a unified digital journey designed for maximum impact and growth."
          className="cursor-target"
        />
        <TwoColumnLayout
          left={
            <Card className="glass border-white/10 h-full flex flex-col group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 italic">
                  <Shield className="size-5 text-brand-gradient" />
                  48-Hour Coding Marathon
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 flex-grow">
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <div className="mt-1.5 size-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                  <span className="group-hover:text-foreground transition-colors">Non-stop building window</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <div className="mt-1.5 size-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                  <span className="group-hover:text-foreground transition-colors">Technical mentor support on Discord</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <div className="mt-1.5 size-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                  <span className="group-hover:text-foreground transition-colors">Multiple tech tracks for specialized focus</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <div className="mt-1.5 size-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                  <span className="group-hover:text-foreground transition-colors">Devpost + GitHub submission workflow</span>
                </div>
              </CardContent>
            </Card>
          }
          right={
            <Card className="glass border-white/10 h-full flex flex-col group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 italic">
                  <Mic className="size-5 text-brand-gradient" />
                  24-Hour Learning & Growth
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 flex-grow">
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <div className="bg-brand-gradient size-4 rounded-full mt-0.5 shrink-0 border border-white/10" />
                  <span className="group-hover:text-foreground transition-colors">Expert-led keynotes and tech talks</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <div className="mt-1.5 size-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                  <span className="group-hover:text-foreground transition-colors">Hands-on workshops with industry partners</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <div className="mt-1.5 size-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                  <span className="group-hover:text-foreground transition-colors">Virtual networking and community meetups</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <div className="mt-1.5 size-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                  <span className="group-hover:text-foreground transition-colors">Post-event mentorship opportunities</span>
                </div>
              </CardContent>
            </Card>
          }
        />
      </PageSection>

      <PageSection>
        <div className="flex flex-col items-center gap-8 text-center max-w-2xl mx-auto">
          <SectionHeader
            eyebrow="Secure your spot"
            title="Join the Global Movement"
            desc="Registration is free and open to students and professionals worldwide. All forms on this site are for demonstration; please use the official links below."
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-brand-gradient border-none px-8 h-14 text-white font-black text-lg shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
              <a href="https://codorra1.devpost.com/" target="_blank" rel="noopener">Register on Devpost</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 px-8 h-14 font-bold text-lg hover:scale-105 transition-all">
              <a href="https://discord.gg/9QpwAmX4Ke" target="_blank" rel="noopener">Join Discord</a>
            </Button>
          </div>
        </div>
      </PageSection>

      <div className="absolute right-6 top-10 pointer-events-none">
        <OrnamentRings className="h-64 w-64" />
      </div>
      <Footer />
    </main>
  )
}
