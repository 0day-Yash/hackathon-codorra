"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PageHeader, PageSection, CardGrid, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import Lightning from "@/components/lightning"
import {
  Building2,
  Award,
  Users,
  MessageSquare,
  ExternalLink,
  Mail,
  Star,
  CheckCircle,
  ArrowRight,
  Trophy,
  Presentation,
  Briefcase,
} from "lucide-react"

export default function SponsorsPage() {
  const confirmedSponsors = [
    {
      name: "TechCorp Security",
      tier: "Gold",
      logo: "/placeholder-logo.png",
      description: "Leading provider of enterprise security solutions and threat intelligence platforms.",
      website: "https://techcorpsecurity.com",
      perks: ["Main Stage Sponsor", "Workshop: Advanced Threat Detection", "Hiring Booth"]
    },
    {
      name: "SecureVentures",
      tier: "Gold", 
      logo: "/placeholder-logo.png",
      description: "Venture capital firm focused on cybersecurity startups and emerging security technologies.",
      website: "https://secureventures.com",
      perks: ["Investor Panel", "Startup Pitch Session", "Mentorship Program"]
    },
    {
      name: "CyberDefense Labs",
      tier: "Silver",
      logo: "/placeholder-logo.png", 
      description: "Research organization specializing in cybersecurity innovation and threat analysis.",
      website: "https://cyberdefenselabs.com",
      perks: ["Research Workshop", "Technical Challenge"]
    },
    {
      name: "PaySecure",
      tier: "Silver",
      logo: "/placeholder-logo.png",
      description: "Fintech security company providing fraud prevention and compliance solutions.",
      website: "https://paysecure.com",
      perks: ["Fintech Track Sponsor", "Compliance Workshop"]
    },
    {
      name: "DevTools Pro",
      tier: "Community",
      logo: "/placeholder-logo.png",
      description: "Developer tools company offering security-focused development platforms.",
      website: "https://devtoolspro.com",
      perks: ["Tool Credits", "Developer Resources"]
    }
  ]

  const sponsorTiers = [
    {
      name: "Gold Partner",
      investment: "$2,000+",
      icon: Star,
      color: "bg-primary/10 text-primary ring-primary/25",
      perks: [
        "Main stage mentions + logo on hero section",
        "Dedicated talk/workshop slot (30-45 min)",
        "Booth space + hiring access to participants",
        "Custom challenge track with dedicated prizes",
        "Logo on all marketing materials",
        "Social media mentions and coverage"
      ]
    },
    {
      name: "Silver Partner", 
      investment: "$1,000+",
      icon: Award,
      color: "bg-accent/10 text-accent ring-accent/25",
      perks: [
        "Logo on website and social media",
        "Workshop or lightning talk slot (15-20 min)",
        "Access to participant shortlist for hiring",
        "Logo on event materials",
        "Social media mentions"
      ]
    },
    {
      name: "Community Partner",
      investment: "$500+",
      icon: Users,
      color: "bg-primary/10 text-primary ring-primary/25",
      perks: [
        "Logo in partners section",
        "Social media mentions",
        "Optional ticket discounts for participants",
        "Community recognition"
      ]
    }
  ]

  const sponsorBenefits = [
    {
      icon: Users,
      title: "Talent Access",
      description: "Connect with top cybersecurity talent from students to professionals"
    },
    {
      icon: MessageSquare,
      title: "Brand Visibility",
      description: "Reach 500+ participants and 10,000+ community members"
    },
    {
      icon: Briefcase,
      title: "Business Development",
      description: "Network with industry leaders and potential partners"
    },
    {
      icon: Trophy,
      title: "Innovation Pipeline",
      description: "Discover cutting-edge solutions and emerging technologies"
    }
  ]

  const challengeTracks = [
    {
      sponsor: "TechCorp Security",
      title: "Advanced Threat Detection Challenge",
      description: "Build AI-powered systems to detect sophisticated cyber threats in real-time.",
      prize: "$2,000 + Internship Opportunity"
    },
    {
      sponsor: "PaySecure", 
      title: "Fintech Security Innovation",
      description: "Create solutions for fraud prevention, KYC/AML, or secure payment processing.",
      prize: "$1,500 + Mentorship Program"
    },
    {
      sponsor: "CyberDefense Labs",
      title: "Research Innovation Award",
      description: "Develop novel approaches to cybersecurity research and threat analysis.",
      prize: "$1,000 + Research Collaboration"
    }
  ]

  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Our Sponsors"
        description="Industry leaders and innovators supporting the next generation of cybersecurity talent."
      />

      <PageSection>
        <SectionHeader
          eyebrow="Confirmed Partners"
          title="Current Sponsors"
          desc="Meet the organizations making CODORRA 2026 possible through their support and partnership."
          className="cursor-target"
        />
        
        <CardGrid cols={3}>
          {confirmedSponsors.map((sponsor, i) => (
            <Reveal key={sponsor.name} delay={i * 100}>
              <Card className="glass cursor-target group hover:translate-y-[-2px] transition-all">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center">
                      <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} logo`}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{sponsor.name}</CardTitle>
                  <Badge 
                    variant={sponsor.tier === "Gold" ? "default" : sponsor.tier === "Silver" ? "secondary" : "outline"}
                    className="w-fit mx-auto"
                  >
                    {sponsor.tier} Partner
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Sponsor Benefits:</h4>
                    <ul className="space-y-1">
                      {sponsor.perks.map((perk, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="size-3 text-accent mt-0.5" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button size="sm" variant="outline" asChild className="w-full">
                    <a href={sponsor.website} target="_blank" rel="noopener">
                      Visit Website
                      <ExternalLink className="ml-2 size-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </CardGrid>
      </PageSection>

      <PageSection className="relative overflow-hidden">
        {/* Lightning background effect */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <Lightning hue={220} center={0.3} xOffset={0} speed={1} intensity={0.7} size={1.1} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        </div>
        
        <SectionHeader
          eyebrow="Sponsorship Opportunities"
          title="Become a Sponsor"
          desc="Join industry leaders in supporting cybersecurity innovation and gain access to top talent."
          className="cursor-target relative z-10"
        />
        
        <div className="grid gap-8 md:grid-cols-3 relative z-10">
          {sponsorTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <Card className="glass cursor-target group hover:translate-y-[-2px] transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`${tier.color} rounded-lg p-2 ring-1`}>
                        <tier.icon className="size-4" />
                      </div>
                      <span>{tier.name}</span>
                    </div>
                    <span className="text-accent font-bold">{tier.investment}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.perks.map((perk, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="size-4 text-accent mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Why Sponsor?"
          title="Sponsor Benefits"
          desc="Partner with us to support cybersecurity innovation while gaining valuable business opportunities."
          className="cursor-target"
        />
        
        <CardGrid cols={4}>
          {sponsorBenefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 100}>
              <Card className="glass cursor-target">
                <CardHeader className="pb-2 flex items-center gap-3">
                  <div className="bg-accent/10 ring-accent/25 text-accent rounded-lg p-2 ring-1">
                    <benefit.icon className="size-4" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {benefit.description}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </CardGrid>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Custom Challenges"
          title="Sponsor Challenge Tracks"
          desc="Gold sponsors can create custom challenge tracks with dedicated prizes and judging criteria."
          className="cursor-target"
        />
        
        <div className="space-y-6">
          {challengeTracks.map((challenge, i) => (
            <Reveal key={challenge.title} delay={i * 100}>
              <Card className="glass cursor-target">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{challenge.title}</span>
                    <Badge variant="outline">{challenge.sponsor}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{challenge.description}</p>
                  <div className="flex items-center gap-2">
                    <Trophy className="size-4 text-primary" />
                    <span className="font-semibold text-primary">{challenge.prize}</span>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Get Involved"
          title="Ready to Sponsor?"
          desc="Join us in supporting the next generation of cybersecurity innovators."
          className="cursor-target"
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="size-5" />
                  Contact Our Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Ready to discuss sponsorship opportunities? Our team is here to help you find the perfect partnership level.
                </p>
                <Button asChild className="w-full">
                  <a href="mailto:team@codorra.dev?subject=Sponsor%20CODORRA%20Hackathon">
                    Email Our Team
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Presentation className="size-5" />
                  Apply Online
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Submit your sponsorship application through our online form for a streamlined process.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="/apply#sponsor">
                    Apply as Sponsor
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </PageSection>

      <div className="absolute right-6 top-10">
        <OrnamentRings className="h-64 w-64" />
      </div>
      <Footer />
    </main>
  )
}
