"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PageHeader, PageSection, TwoColumnLayout, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import {
  Lightbulb,
  Code,
  Palette,
  TrendingUp,
  Download,
  CheckCircle,
  Star,
  Target,
  Award,
  Users,
  Clock,
  FileText,
} from "lucide-react"

export default function CriteriaPage() {
  const criteria = [
    {
      icon: Lightbulb,
      title: "Problem & Idea Quality",
      percentage: 20,
      color: "bg-primary/10 text-primary ring-primary/25",
      description: "How strong and meaningful the core idea is.",
      details: [
        "Is the problem real and relevant?",
        "Is the solution novel or significantly better than existing solutions?",
        "Does the team clearly explain why the problem matters?"
      ],
      examples: [
        "1–3: Generic idea, unclear problem",
        "4–7: Reasonable idea but common",
        "8–10: Unique or deeply relevant concept"
      ]
    },
    {
      icon: Code,
      title: "Technical Execution",
      percentage: 30,
      color: "bg-accent/10 text-accent ring-accent/25",
      description: "Working prototype, code quality, and technical difficulty.",
      details: [
        "Working prototype",
        "Code quality and architecture",
        "Security practices",
        "Technical difficulty",
        "Effective use of frameworks / APIs"
      ],
      examples: [
        "1–3: Barely functional or mostly theoretical",
        "4–7: Working prototype with moderate complexity",
        "8–10: Robust, technically impressive implementation"
      ]
    },
    {
      icon: Target,
      title: "Real-World Impact",
      percentage: 20,
      color: "bg-primary/10 text-primary ring-primary/25",
      description: "Deployable solutions and practical tools.",
      details: [
        "Can this realistically be used in production?",
        "Does it solve a real-world security / AI / web problem?",
        "Is it scalable?"
      ],
      examples: [
        "1–3: Mostly conceptual",
        "4–7: Could be useful with improvements",
        "8–10: Immediately valuable or highly scalable"
      ]
    },
    {
      icon: Palette,
      title: "Innovation & Creativity",
      percentage: 15,
      color: "bg-accent/10 text-accent ring-accent/25",
      description: "How original the solution is.",
      details: [
        "New approach to a known problem",
        "Clever technical design",
        "Creative use of technology"
      ],
      examples: [
        "1–3: Common or obvious",
        "4–7: Some creativity",
        "8–10: Truly innovative"
      ]
    },
    {
      icon: Users,
      title: "Demo & Presentation",
      percentage: 10,
      color: "bg-primary/10 text-primary ring-primary/25",
      description: "How well the team explains their project.",
      details: [
        "Clarity of explanation",
        "Demo quality",
        "Ability to answer technical questions"
      ],
      examples: [
        "1–3: Confusing demo",
        "4–7: Clear but basic",
        "8–10: Excellent explanation and live demo"
      ]
    },
    {
      icon: FileText,
      title: "Documentation & Open Source",
      percentage: 5,
      color: "bg-accent/10 text-accent ring-accent/25",
      description: "GitHub + Devpost submission quality.",
      details: [
        "Clear README",
        "Setup instructions",
        "Code documentation",
        "GitHub structure"
      ],
      examples: [
        "1–3: Minimal documentation",
        "4–7: Acceptable documentation",
        "8–10: Professional open-source quality"
      ]
    }
  ]

  const judgingProcess = [
    {
      phase: "Initial Review",
      duration: "2 hours",
      description: "Judges review all submissions and score based on criteria",
      icon: FileText
    },
    {
      phase: "Shortlisting",
      duration: "1 hour", 
      description: "Top projects are selected for final presentation round",
      icon: Target
    },
    {
      phase: "Demo Day",
      duration: "4 hours",
      description: "Finalists present live to judges and community",
      icon: Users
    },
    {
      phase: "Final Scoring",
      duration: "30 minutes",
      description: "Judges finalize scores and select winners",
      icon: Award
    }
  ]

  const whatJudgesLookFor = [
    {
      category: "Technical Depth",
      items: [
        "Working and functional prototype",
        "Clean, well-architected codebase",
        "Implementation of security best practices",
        "Effective use of modern frameworks and APIs"
      ]
    },
    {
      category: "Problem Relevance",
      items: [
        "Addressing real-world security challenges",
        "Clear explanation of why the problem matters",
        "Novelty of the proposed solution",
        "Significantly better than existing alternatives"
      ]
    },
    {
      category: "Practicality & Impact",
      items: [
        "Realistic production implementation",
        "Scalable architecture and design",
        "Immediate value to the security community",
        "Practicality over mere gimmicks"
      ]
    },
    {
      category: "Presentation Quality",
      items: [
        "Clarity and confidence in explanation",
        "High-quality, stable live demo",
        "Ability to handle technical deep-dives",
        "Professional documentation and README"
      ]
    }
  ]

  const trackSpecificCriteria = [
    {
      track: "AI + Security", 
      focus: "AI/ML in security applications",
      emphasis: ["Defensive AI systems", "AI-assisted monitoring", "Model safety", "Robustness tooling"]
    },
    {
      track: "Network Security",
      focus: "Network and infrastructure security",
      emphasis: ["Software security", "Infrastructure tools", "Protocol security", "Physical network security"]
    },
    {
      track: "Tomfoolery",
      focus: "Fun, absurd, but working solutions",
      emphasis: ["Creative execution", "Working prototypes", "Humor and innovation", "Technical depth despite absurdity"]
    },
    {
      track: "Open Innovation",
      focus: "High-impact innovative solutions",
      emphasis: ["Real-world applicability", "Technical innovation", "Market impact", "Scalability"]
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Judging Criteria"
        description="Transparent evaluation framework ensuring fair and comprehensive assessment of all submissions."
      />

      <PageSection>
        <SectionHeader
          eyebrow="Evaluation Framework"
          title="Scoring Breakdown"
          desc="Our judges evaluate projects across four key dimensions, each weighted to reflect their importance in cybersecurity innovation."
          className="cursor-target"
        />
        
        <div className="space-y-8">
          {criteria.map((criterion, i) => (
            <Reveal key={criterion.title} delay={i * 100}>
              <Card className="glass cursor-target">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`${criterion.color} rounded-lg p-3 ring-1`}>
                        <criterion.icon className="size-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{criterion.title}</CardTitle>
                        <p className="text-muted-foreground">{criterion.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-accent">{criterion.percentage}%</div>
                      <Progress value={criterion.percentage} className="w-24 mt-2" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="size-4 text-accent" />
                        Evaluation Points
                      </h4>
                      <ul className="space-y-2">
                        {criterion.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Star className="size-3 text-primary mt-1" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="size-4 text-primary" />
                        Examples
                      </h4>
                      <ul className="space-y-2">
                        {criterion.examples.map((example, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="size-3 text-accent mt-1" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Judging Process"
          title="How Judging Works"
          desc="A structured evaluation process ensuring every project receives fair and thorough assessment."
          className="cursor-target"
        />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {judgingProcess.map((step, i) => (
            <Reveal key={step.phase} delay={i * 100}>
              <Card className="glass cursor-target">
                <CardHeader className="text-center">
                  <div className="bg-accent/10 ring-accent/25 text-accent rounded-lg p-3 ring-1 w-fit mx-auto mb-4">
                    <step.icon className="size-6" />
                  </div>
                  <CardTitle className="text-lg">{step.phase}</CardTitle>
                  <Badge variant="outline">{step.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="What Judges Look For"
          title="Key Evaluation Areas"
          desc="Understanding what makes a winning project across different aspects of cybersecurity innovation."
          className="cursor-target"
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          {whatJudgesLookFor.map((category, i) => (
            <Reveal key={category.category} delay={i * 100}>
              <Card className="glass cursor-target">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-accent mt-0.5" />
                        <span className="text-sm">{item}</span>
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
          eyebrow="Track-Specific Focus"
          title="Specialized Criteria"
          desc="Each track has specific emphasis areas while maintaining the core evaluation framework."
          className="cursor-target"
        />
        
        <div className="space-y-6">
          {trackSpecificCriteria.map((track, i) => (
            <Reveal key={track.track} delay={i * 100}>
              <Card className="glass cursor-target">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{track.track}</span>
                    <Badge variant="outline">{track.focus}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Track Focus</h4>
                      <p className="text-sm text-muted-foreground">{track.focus}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Special Emphasis</h4>
                      <ul className="space-y-1">
                        {track.emphasis.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Star className="size-3 text-primary mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Resources"
          title="Additional Information"
          desc="Download detailed judging criteria and find answers to common questions about the evaluation process."
          className="cursor-target"
        />
        
        <TwoColumnLayout
          left={
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="size-5 text-primary" />
                  Download Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Get the complete judging criteria document with detailed explanations and examples.
                </p>
                <Button asChild className="w-full">
                  <a href="/judging-criteria.pdf" download>
                    Download PDF
                    <Download className="ml-2 size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          }
          right={
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="size-5 text-accent" />
                  Meet the Judges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Learn about our expert panel of judges and their backgrounds in cybersecurity.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="/speakers">
                    View Speakers & Judges
                    <Users className="ml-2 size-4" />
                  </a>
                </Button>
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
            desc="Registration is free and open to builders worldwide. Join 1000+ others in the ultimate security marathon."
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-brand-gradient border-none px-8 h-14 text-white font-black text-lg shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
              <a href="https://unstop.com/hackathons/hackathon-2026-codorra-1669522" target="_blank" rel="noopener">Register on Devpost</a>
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
