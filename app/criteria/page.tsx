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
      title: "Innovation",
      percentage: 30,
      color: "bg-primary/10 text-primary ring-primary/25",
      description: "How novel and creative is your approach to solving cybersecurity challenges?",
      details: [
        "Novel approach to existing problems",
        "Creative use of emerging technologies",
        "Unique perspective on security challenges",
        "Potential to influence industry practices"
      ],
      examples: [
        "Using AI/ML in unexpected ways for threat detection",
        "Novel cryptographic approaches",
        "Creative social engineering prevention methods",
        "Innovative user experience for security tools"
      ]
    },
    {
      icon: Code,
      title: "Technical Execution",
      percentage: 30,
      color: "bg-accent/10 text-accent ring-accent/25",
      description: "How well is your solution implemented from a technical standpoint?",
      details: [
        "Code quality and architecture",
        "Technical feasibility and scalability",
        "Security best practices implementation",
        "Performance and efficiency"
      ],
      examples: [
        "Clean, well-documented code",
        "Proper error handling and edge cases",
        "Efficient algorithms and data structures",
        "Secure coding practices"
      ]
    },
    {
      icon: Palette,
      title: "Design/UX",
      percentage: 20,
      color: "bg-primary/10 text-primary ring-primary/25",
      description: "How user-friendly and well-designed is your solution?",
      details: [
        "User interface design quality",
        "User experience and usability",
        "Accessibility considerations",
        "Visual design and branding"
      ],
      examples: [
        "Intuitive user interface",
        "Clear user flows and interactions",
        "Responsive design across devices",
        "Accessible design principles"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Value",
      percentage: 20,
      color: "bg-accent/10 text-accent ring-accent/25",
      description: "What real-world impact and commercial potential does your solution have?",
      details: [
        "Market need and problem validation",
        "Commercial viability and scalability",
        "Real-world impact potential",
        "Business model and monetization"
      ],
      examples: [
        "Clear target market identification",
        "Validated problem-solution fit",
        "Scalable business model",
        "Measurable impact metrics"
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
      category: "Technical Excellence",
      items: [
        "Clean, maintainable code",
        "Proper security practices",
        "Scalable architecture",
        "Performance optimization"
      ]
    },
    {
      category: "Innovation Factor",
      items: [
        "Novel problem-solving approach",
        "Creative use of technology",
        "Unique market positioning",
        "Potential for industry impact"
      ]
    },
    {
      category: "User Experience",
      items: [
        "Intuitive interface design",
        "Clear user workflows",
        "Accessibility compliance",
        "Mobile responsiveness"
      ]
    },
    {
      category: "Business Potential",
      items: [
        "Clear value proposition",
        "Market validation",
        "Scalable business model",
        "Competitive advantage"
      ]
    }
  ]

  const trackSpecificCriteria = [
    {
      track: "Core Cybersecurity",
      focus: "Traditional security domains",
      emphasis: ["Threat detection accuracy", "Incident response efficiency", "Security architecture", "Compliance adherence"]
    },
    {
      track: "AI + Security", 
      focus: "AI/ML in security applications",
      emphasis: ["Model accuracy and reliability", "Bias and fairness", "Explainability", "Adversarial robustness"]
    },
    {
      track: "Fintech Security",
      focus: "Financial technology security",
      emphasis: ["Regulatory compliance", "Fraud detection", "Data privacy", "Transaction security"]
    },
    {
      track: "Open Innovation",
      focus: "High-impact innovative solutions",
      emphasis: ["Market disruption potential", "Technical innovation", "User adoption", "Scalability"]
    }
  ]

  return (
    <main>
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
                  <a href="/judges">
                    View Judges
                    <Users className="ml-2 size-4" />
                  </a>
                </Button>
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
