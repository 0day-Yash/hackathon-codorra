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
      color: "border border-white/10 bg-white/5 text-white/50",
      questions: [
        {
          q: "Who can participate in CODORRA?",
          a: "CODORRA is open to students, professionals, and tech enthusiasts. Teams must have 2-4 members. No prior specific experience is required, but basic programming knowledge is recommended."
        },
        {
          q: "How do I register for the hackathon?",
          a: "You can register through our Devpost page or by filling out the application form on our website. Registration includes team formation, experience level, and motivation statement."
        },
        {
          q: "What is the registration fee?",
          a: "The hackathon is completely free for everyone. There are no registration or participation fees for any round of the event."
        },
        {
          q: "Can I participate as an individual?",
          a: "While we encourage team participation, solo participants are welcome. We'll help you find teammates during the team formation session on Day -1."
        },
        {
          q: "What if I don't have a team?",
          a: "No worries! We have dedicated team formation sessions and networking events to help you connect with other participants. Many successful teams are formed at the event."
        }
      ]
    },
    {
      title: "Online Participation",
      icon: Globe,
      color: "border border-white/10 bg-white/5 text-white/50",
      questions: [
        {
          q: "How does the hackathon work?",
          a: "Codorra 2026 is fully online. Participants have access to all workshops, sessions, and judging through live streaming. Projects are submitted via Devpost and communication happens on Discord."
        },
        {
          q: "Where is the venue?",
          a: "There is no physical venue. The hackathon is 100% virtual, allowing anyone from across the globe to participate from the comfort of their home."
        },
        {
          q: "What facilities do I need?",
          a: "You'll need a stable internet connection, a computer with your development tools, and access to Discord for community interaction and support."
        },
        {
          q: "Can I participate from any time zone?",
          a: "Yes! While the main sessions are scheduled in IST (GMT+5:30), the 48-hour coding window allows teams to work according to their own local schedules."
        }
      ]
    },
    {
      title: "Judging & Presentations",
      icon: Award,
      color: "border border-white/10 bg-white/5 text-white/50",
      questions: [
        {
          q: "How do we present our projects?",
          a: "Finalists will present their projects through live video calls during the closing ceremony on May 31. Presentations are limited to 3 minutes plus Q&A."
        },
        {
          q: "What are the judging criteria?",
          a: "Projects are evaluated on innovation (30%), technical execution (30%), design/UX (20%), and real-world impact (20%)."
        },
        {
          q: "Do we need a video demo?",
          a: "Yes, a 2-minute video demo is required as part of the Devpost submission to help judges understand your project before the finals."
        }
      ]
    },
    {
      title: "Team Formation & Collaboration",
      icon: Users,
      color: "border border-white/10 bg-white/5 text-white/50",
      questions: [
        {
          q: "What is the ideal team size?",
          a: "Teams should have 2-4 members. This size allows for diverse skill sets while maintaining effective communication and collaboration."
        },
        {
          q: "Can I change my team after registration?",
          a: "Yes, you can modify your team composition until the start of the hackathon. We encourage finalizing teams during the team formation session on Day -1."
        },
        {
          q: "What skills should my team have?",
          a: "Ideal teams have a mix of skills: programming, cybersecurity knowledge, design/UX, and business/marketing. However, passion and willingness to learn are more important than specific skills."
        },
        {
          q: "How do we collaborate during the hackathon?",
          a: "Teams can use any collaboration tools they prefer. We recommend GitHub for code collaboration, Discord for communication, and project management tools like Trello or Notion."
        },
        {
          q: "Can we get help from mentors?",
          a: "Yes! We have industry mentors available throughout the event for technical guidance, business advice, and project feedback. Mentors are available both in-person and online."
        }
      ]
    },
    {
      title: "Prizes & Recognition",
      icon: Trophy,
      color: "border border-white/10 bg-white/5 text-white/50",
      questions: [
        {
          q: "What prizes are available?",
          a: "Prizes include cash awards, internship opportunities, cloud credits, gadgets, and certificates. We have overall winners, domain-specific awards (AI, Web, Mobile, Security), and special recognition categories."
        },
        {
          q: "How are winners selected?",
          a: "Winners are selected by our expert panel of judges based on innovation (30%), technical execution (30%), design/UX (20%), and business value (20%)."
        },
        {
          q: "Are there internship opportunities?",
          a: "Yes! Several sponsors offer internship opportunities to winning teams and standout participants. These opportunities are announced during the closing ceremony."
        },
        {
          q: "Do all participants get certificates?",
          a: "Yes, all participants who submit a project receive participation certificates. Winners receive special recognition certificates and additional prizes."
        },
        {
          q: "What happens after the hackathon?",
          a: "We provide follow-up support including mentorship connections, startup accelerator programs, and continued community engagement through our Discord server."
        }
      ]
    },
    {
      title: "Technical & Logistics",
      icon: Shield,
      color: "border border-white/10 bg-white/5 text-white/50",
      questions: [
        {
          q: "What development tools and platforms are provided?",
          a: "We provide access to various cloud platforms, development tools, and APIs. Specific tools and credits are announced closer to the event and shared with registered participants."
        },
        {
          q: "Can I use pre-existing code or projects?",
          a: "You can use open-source libraries and frameworks, but your core project must be built during the hackathon. Pre-existing code should be clearly documented and minimal."
        },
        {
          q: "What about intellectual property?",
          a: "Participants retain full ownership of their projects and intellectual property. We encourage open-source contributions but it's not required."
        },
        {
          q: "How do we submit our projects?",
          a: "Projects are submitted through Devpost with GitHub links to your code repository. You'll also need to provide a demo video and project description."
        },
        {
          q: "What if we encounter technical issues?",
          a: "We have technical support staff available throughout the event. For online participants, support is available through Discord and email."
        }
      ]
    }
  ]

  const quickFacts = [
    {
      icon: Clock,
      title: "Format",
      value: "72-Hour Event",
      description: "24h Sessions • 48h Coding Marathon"
    },
    {
      icon: Users,
      title: "Team Size",
      value: "2-4 Members",
      description: "Collaborative development"
    },
    {
      icon: Globe,
      title: "Location",
      value: "100% Online",
      description: "Participate from anywhere"
    },
    {
      icon: Trophy,
      title: "Prizes",
      value: "Value Packs",
      description: "Cash, internships, & swag"
    }
  ]

  return (
    <main>
      <Navbar />
      <PageHeader
        title="Frequently Asked Questions"
        description="Everything you need to know about CODORRA 2026 - from registration to prizes and everything in between."
      />

      <PageSection>
        <SectionHeader
          eyebrow="Quick Facts"
          title="Event Overview"
          desc="Key information about CODORRA 2026 at a glance."
          className="cursor-target"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact, i) => (
            <Reveal key={fact.title} delay={i * 100}>
              <Card className="glass cursor-target text-center">
                <CardHeader>
                  <div className="bg-white/5 border border-white/10 text-white/40 rounded-lg p-3 w-fit mx-auto mb-4">
                    <fact.icon className="size-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{fact.value}</CardTitle>
                  <p className="text-sm text-muted-foreground">{fact.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Common Questions"
          title="FAQ Categories"
          desc="Browse questions by category to find the information you need quickly."
          className="cursor-target"
        />

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 100}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`${category.color} rounded-lg p-2`}>
                    <category.icon className="size-5" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>

                <Card className="glass cursor-target">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left px-6 py-4">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Still Have Questions?"
          title="Get in Touch"
          desc="Can't find what you're looking for? Our team is here to help."
          className="cursor-target"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="size-5 text-white/40" />
                  Contact Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Have specific questions? Reach out to our support team for personalized assistance.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Email:</strong> codorra@yahoo.com
                  </p>
                  <p className="text-sm">
                    <strong>Response Time:</strong> Within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="size-5 text-white/40" />
                  Join Community
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Connect with other participants and get real-time updates through our community channels.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Discord:</strong> <a href="https://discord.gg/9QpwAmX4Ke" target="_blank" rel="noopener" className="text-primary hover:underline">discord.gg/9QpwAmX4Ke</a>
                  </p>
                  <p className="text-sm">
                    <strong>WhatsApp:</strong> Quick updates and announcements
                  </p>
                </div>
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
