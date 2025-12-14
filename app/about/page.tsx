"use client"

import type React from "react"
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
  Presentation,
  Pizza,
  Coffee,
  BadgeCheck,
  Target,
  Lightbulb,
  Globe,
  Code,
  Zap,
} from "lucide-react"

export default function AboutPage() {
  const missionPoints = [
    {
      icon: Shield,
      title: "Cybersecurity Focus",
      description: "Addressing the critical need for innovative security solutions in an increasingly digital world."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Bringing together students, professionals, and enthusiasts to collaborate and learn."
    },
    {
      icon: Lightbulb,
      title: "Innovation Catalyst",
      description: "Fostering breakthrough ideas that can make a real impact in cybersecurity."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Supporting both in-person and online participation to reach a diverse global audience."
    }
  ]

  const hackathonStructure = [
    {
      icon: Clock,
      title: "Two-Phase Format",
      description: "Round 1: Online submissions (May 22-31). Round 2: Demo Day in Bengaluru (June 5-7)"
    },
    {
      icon: Building2,
      title: "Hybrid Format",
      description: "Bengaluru venue + online track for maximum accessibility and participation"
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
      icon: Presentation,
      title: "Workshops & Talks",
      description: "Expert-led sessions on cutting-edge cybersecurity topics and tools"
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
      icon: Pizza,
      title: "Community Events",
      description: "Food, coffee, swag, and celebration of the cybersecurity community"
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
      description: "Cybersecurity solutions directly protect businesses, governments, and individuals from digital threats."
    }
  ]

  return (
    <main>
      <Navbar />
      <PageHeader 
        title="About CODORRA"
        description="A two-phase cybersecurity hackathon bringing together innovators, builders, and security experts to create solutions that matter."
      />

      <PageSection>
        <SectionHeader
          eyebrow="Our Mission"
          title="Why Cybersecurity?"
          desc="Cybersecurity isn't just about protecting data—it's about safeguarding our digital future."
          className="cursor-target"
        />
        <CardGrid cols={4}>
          {themeExplanation.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <Card className="glass cursor-target">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
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
              <Card className="glass cursor-target group hover:translate-y-[-2px] transition-all">
                <CardHeader className="pb-2 flex items-center gap-3">
                  <div className="bg-accent/10 ring-accent/25 text-accent rounded-lg p-2 ring-1">
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
        </CardGrid>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Event Structure"
          title="Hackathon Format"
          desc="Designed for maximum impact and accessibility across different participation modes."
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
                        <div className="bg-primary/10 ring-primary/25 text-primary rounded-lg p-2 ring-1">
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
                        <div className="bg-accent/10 ring-accent/25 text-accent rounded-lg p-2 ring-1">
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
          title="In-Person vs Online"
          desc="Choose your preferred participation mode while maintaining the same high-quality experience."
          className="cursor-target"
        />
        <TwoColumnLayout
          left={
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="size-5 text-primary" />
                  Round 2: In-Person (Bengaluru)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <BadgeCheck className="size-4 text-accent mt-0.5" />
                  <span>24/7 venue access with security</span>
                </div>
                <div className="flex items-start gap-2">
                  <Pizza className="size-4 text-accent mt-0.5" />
                  <span>Food and coffee provided</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="size-4 text-accent mt-0.5" />
                  <span>Direct networking and mentorship</span>
                </div>
                <div className="flex items-start gap-2">
                  <Wifi className="size-4 text-accent mt-0.5" />
                  <span>High-speed internet and backup 4G</span>
                </div>
                <div className="flex items-start gap-2">
                  <BadgeCheck className="size-4 text-accent mt-0.5" />
                  <span>Physical swag and certificates</span>
                </div>
              </CardContent>
            </Card>
          }
          right={
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="size-5 text-accent" />
                  Round 1: Online (Free)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Zap className="size-4 text-primary mt-0.5" />
                  <span>Round 1 is completely free for all participants</span>
                </div>
                <div className="flex items-start gap-2">
                  <MessageSquare className="size-4 text-primary mt-0.5" />
                  <span>Discord community and support</span>
                </div>
                <div className="flex items-start gap-2">
                  <Presentation className="size-4 text-primary mt-0.5" />
                  <span>Virtual workshops and sessions</span>
                </div>
                <div className="flex items-start gap-2">
                  <BadgeCheck className="size-4 text-primary mt-0.5" />
                  <span>Digital certificates and swag shipping</span>
                </div>
                <div className="flex items-start gap-2">
                  <Trophy className="size-4 text-primary mt-0.5" />
                  <span>Virtual demo option available for finalists in Round 2</span>
                </div>
              </CardContent>
            </Card>
          }
        />
      </PageSection>

      <div className="absolute right-6 top-10">
        <OrnamentRings className="h-64 w-64" />
      </div>
      <Footer />
    </main>
  )
}
