"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PageHeader, PageSection, CardGrid, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import {
  Linkedin,
  Twitter,
  Globe,
  Award,
  Shield,
  BrainCircuit,
  Building2,
  Users,
  ExternalLink,
} from "lucide-react"

export default function JudgesPage() {
  const judges = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Security Officer",
      company: "TechCorp Security",
      bio: "Leading cybersecurity expert with 15+ years in threat intelligence and incident response. Former NSA analyst and current CSO at a Fortune 500 company.",
      image: "/placeholder-user.jpg",
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      specialties: ["Threat Intelligence", "Incident Response", "Security Architecture"],
      track: "Core Cybersecurity"
    },
    {
      name: "Alex Rodriguez",
      role: "AI Security Researcher",
      company: "DeepMind Security",
      bio: "Pioneer in AI safety and adversarial machine learning. Published researcher with focus on securing AI systems and detecting AI-generated threats.",
      image: "/placeholder-user.jpg",
      linkedin: "https://linkedin.com/in/alexrodriguez",
      specialties: ["AI Security", "Machine Learning", "Adversarial AI"],
      track: "AI + Security"
    },
    {
      name: "Priya Sharma",
      role: "Fintech Security Lead",
      company: "PaySecure",
      bio: "Expert in financial technology security with deep experience in fraud prevention, compliance, and secure payment systems. Former banking security consultant.",
      image: "/placeholder-user.jpg",
      linkedin: "https://linkedin.com/in/priyasharma",
      specialties: ["Fintech Security", "Fraud Prevention", "Compliance"],
      track: "Fintech Security"
    },
    {
      name: "Marcus Johnson",
      role: "Startup Founder & CTO",
      company: "SecureVault",
      bio: "Serial entrepreneur and technical leader who built three successful cybersecurity startups. Expert in product development and go-to-market strategies.",
      image: "/placeholder-user.jpg",
      linkedin: "https://linkedin.com/in/marcusjohnson",
      twitter: "https://twitter.com/marcusjohnson",
      specialties: ["Product Development", "Startup Strategy", "Technical Leadership"],
      track: "Open Innovation"
    },
    {
      name: "Dr. Elena Petrov",
      role: "Security Research Director",
      company: "CyberDefense Labs",
      bio: "Leading researcher in network security and cryptography. PhD in Computer Science with 50+ publications and multiple security patents.",
      image: "/placeholder-user.jpg",
      linkedin: "https://linkedin.com/in/elenapetrov",
      specialties: ["Cryptography", "Network Security", "Research"],
      track: "Core Cybersecurity"
    },
    {
      name: "David Kim",
      role: "Venture Partner",
      company: "SecureVentures",
      bio: "Investor focused on cybersecurity startups with $200M+ in deployed capital. Former security engineer turned VC with deep industry connections.",
      image: "/placeholder-user.jpg",
      linkedin: "https://linkedin.com/in/davidkim",
      specialties: ["Venture Capital", "Startup Investment", "Market Analysis"],
      track: "Open Innovation"
    }
  ]

  const trackIcons = {
    "Core Cybersecurity": Shield,
    "AI + Security": BrainCircuit,
    "Fintech Security": Building2,
    "Open Innovation": Users
  }

  const trackColors = {
    "Core Cybersecurity": "bg-accent/10 text-accent ring-accent/25",
    "AI + Security": "bg-primary/10 text-primary ring-primary/25",
    "Fintech Security": "bg-accent/10 text-accent ring-accent/25",
    "Open Innovation": "bg-primary/10 text-primary ring-primary/25"
  }

  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Meet Our Judges"
        description="Industry experts and thought leaders who will evaluate your innovative cybersecurity solutions."
      />

      <PageSection>
        <SectionHeader
          eyebrow="Expert Panel"
          title="Judging Committee"
          desc="Our diverse panel of judges brings together decades of experience in cybersecurity, AI, fintech, and entrepreneurship."
          className="cursor-target"
        />
        
        <CardGrid cols={3}>
          {judges.map((judge, i) => {
            const TrackIcon = trackIcons[judge.track as keyof typeof trackIcons]
            const trackColor = trackColors[judge.track as keyof typeof trackColors]
            
            return (
              <Reveal key={judge.name} delay={i * 100}>
                <Card className="glass cursor-target group hover:translate-y-[-2px] transition-all">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={judge.image} alt={judge.name} />
                        <AvatarFallback className="text-lg">
                          {judge.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-xl">{judge.name}</CardTitle>
                    <p className="text-accent font-semibold">{judge.role}</p>
                    <p className="text-muted-foreground text-sm">{judge.company}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{judge.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {judge.specialties.map((specialty, j) => (
                        <Badge key={j} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <div className={`${trackColor} rounded-lg p-2 ring-1`}>
                        <TrackIcon className="size-4" />
                      </div>
                      <span className="text-sm font-medium">{judge.track} Judge</span>
                    </div>

                    <div className="flex gap-2 pt-2">
                      {judge.linkedin && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={judge.linkedin} target="_blank" rel="noopener">
                            <Linkedin className="size-4" />
                          </a>
                        </Button>
                      )}
                      {judge.twitter && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={judge.twitter} target="_blank" rel="noopener">
                            <Twitter className="size-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </CardGrid>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Judging Process"
          title="How Judging Works"
          desc="Our judges will evaluate your projects based on innovation, technical execution, and real-world impact."
          className="cursor-target"
        />
        
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="size-5 text-primary" />
                  Judging Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Innovation</span>
                    <span className="text-sm font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Technical Execution</span>
                    <span className="text-sm font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Design/UX</span>
                    <span className="text-sm font-semibold">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Business Value</span>
                    <span className="text-sm font-semibold">20%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="size-5 text-accent" />
                  Track-Specific Judges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="size-4 text-accent" />
                    <span className="text-sm">Core Cybersecurity: Dr. Sarah Chen, Dr. Elena Petrov</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="size-4 text-primary" />
                    <span className="text-sm">AI + Security: Alex Rodriguez</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="size-4 text-accent" />
                    <span className="text-sm">Fintech Security: Priya Sharma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="size-4 text-primary" />
                    <span className="text-sm">Open Innovation: Marcus Johnson, David Kim</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Demo Day"
          title="Final Presentations"
          desc="Finalists will present their solutions to our judges and the broader community at Demo Day."
          className="cursor-target"
        />
        
        <Reveal>
          <Card className="glass cursor-target">
            <CardHeader>
              <CardTitle>Demo Day Format</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-semibold">Presentation Structure</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 5-minute live demo</li>
                    <li>• 3-minute Q&A with judges</li>
                    <li>• Technical architecture overview</li>
                    <li>• Business impact discussion</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Evaluation Process</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Live scoring by judges</li>
                    <li>• Community voting component</li>
                    <li>• Track-specific awards</li>
                    <li>• Overall winner selection</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </PageSection>

      <div className="absolute right-6 top-10">
        <OrnamentRings className="h-64 w-64" />
      </div>
      <Footer />
    </main>
  )
}
