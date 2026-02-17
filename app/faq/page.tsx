"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import {
  HelpCircle,
  Users,
  MapPin,
  Globe,
  CreditCard,
  Shield,
  Trophy,
  Building2,
  Clock,
  Wifi,
  MessageSquare,
  Award,
  Zap,
  Activity,
} from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Registration & Eligibility",
      icon: Users,
      questions: [
        {
          q: "Who can participate in CODORRA?",
          a: "CODORRA is open to students, professionals, and tech enthusiasts. Teams must have 2-4 members. No prior specific experience is required, but basic programming knowledge is recommended."
        },
        {
          q: "How do I register for the hackathon?",
          a: "You can register through our Devpost page or by filling out the application form on our website."
        },
        {
          q: "What is the registration fee?",
          a: "The hackathon is completely free for everyone. There are no registration or participation fees for any round of the event."
        },
        {
          q: "Can I participate as an individual?",
          a: "While we encourage team participation, solo participants are welcome. We'll help you find teammates during the team formation session."
        }
      ]
    },
    {
      title: "Online Participation",
      icon: Globe,
      questions: [
        {
          q: "How does the hackathon work?",
          a: "Codorra 2026 is fully online. Participants have access to all workshops, sessions, and judging through live streaming. Projects are submitted via Devpost and communication happens on Discord."
        },
        {
          q: "Where is the venue?",
          a: "There is no physical venue. The hackathon is 100% virtual, allowing anyone from across the globe to participate from the comfort of their home."
        }
      ]
    },
    {
      title: "Judging & Presentations",
      icon: Award,
      questions: [
        {
          q: "How do we present our projects?",
          a: "Finalists will present their projects through live video calls during the closing ceremony. Presentations are limited to 3 minutes plus Q&A."
        },
        {
          q: "What are the judging criteria?",
          a: "Projects are evaluated on innovation, technical execution, design/UX, and real-world impact."
        }
      ]
    }
  ]

  const quickFacts = [
    { icon: Clock, title: "Format", value: "72-Hour Event" },
    { icon: Users, title: "Team Size", value: "2-4 Members" },
    { icon: Globe, title: "Location", value: "100% Online" },
    { icon: Trophy, title: "Prizes", value: "Value Packs" }
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <div className="pt-32 pb-16">
        <Container>
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gradient mb-4">FAQ</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Everything you need to know about the CODORRA 2026 marathon.
            </p>
          </Reveal>
        </Container>
      </div>

      <PageSection className="border-t border-white/5">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact, i) => (
              <Reveal key={fact.title} delay={i * 100}>
                <Card className="glass p-8 flex flex-col gap-4 border-white/5 hover:border-white/20 transition-all group">
                  <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-white/10 group-hover:text-white transition-colors">
                    <fact.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold tracking-tight text-white">{fact.value}</p>
                    <p className="text-sm text-white/50 font-medium">{fact.title}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection className="border-t border-white/5 bg-zinc-950/50">
        <Container>
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <Reveal key={category.title} delay={categoryIndex * 100}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                      <category.icon className="size-5" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">{category.title}</h2>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-black overflow-hidden shadow-2xl">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`} className="border-white/5 last:border-0 px-6">
                          <AccordionTrigger className="text-left font-semibold py-6 hover:no-underline hover:text-white transition-colors text-white/90">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-white/60 pb-6 leading-relaxed font-medium">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection className="border-t border-white/5">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="glass p-10 flex flex-col gap-6 border-white/10">
                <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MessageSquare className="size-6 text-white/40" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-white">Contact Support</h3>
                  <p className="text-white/70 leading-relaxed font-medium">
                    Have specific questions? Reach out to our support team for personalized assistance at <span className="text-white/90">codorra@yahoo.com</span>
                  </p>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={100}>
              <Card className="glass p-10 flex flex-col gap-6 border-white/10">
                <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Globe className="size-6 text-white/40" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-white">Join Community</h3>
                  <p className="text-white/70 leading-relaxed font-medium">
                    Connect with other participants and get real-time updates through our community channels on Discord.
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </PageSection>

      <Footer />
    </main>
  )
}
