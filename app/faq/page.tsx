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
  Coffee,
  Pizza,
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
          a: "CODORRA is open to students, professionals, and cybersecurity enthusiasts. Teams must have 2-4 members. No prior cybersecurity experience is required, but basic programming knowledge is recommended."
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
      title: "Venue & Facilities",
      icon: MapPin,
      color: "border border-white/10 bg-white/5 text-white/50",
      questions: [
        {
          q: "Where is the hackathon venue located?",
          a: "Round 1 is fully online. Round 2 Demo Day is in Bengaluru, India. The exact location will be shared with finalists closer to the event date."
        },
        {
          q: "What facilities are available at the venue?",
          a: "The venue provides 24/7 access, high-speed WiFi, backup 4G routers, air conditioning, security personnel, and dedicated spaces for hacking, workshops, and networking."
        },
        {
          q: "Is the venue accessible for people with disabilities?",
          a: "Yes, our venue is fully accessible with wheelchair ramps, accessible restrooms, and other necessary accommodations. Please let us know about any specific needs during registration."
        },
        {
          q: "Can I leave and re-enter the venue?",
          a: "Yes, you can leave and re-enter the venue at any time. However, we recommend staying for the full experience to maximize networking and learning opportunities."
        },
        {
          q: "What about parking?",
          a: "Limited parking is available at the venue. We recommend using public transport or ride-sharing services. Detailed parking information will be provided to registered participants."
        }
      ]
    },
    {
      title: "Online Participation",
      icon: Globe,
      color: "border border-white/10 bg-white/5 text-white/50",
      questions: [
        {
          q: "How does online participation work?",
          a: "Online participants have access to all workshops, sessions, and judging through live streaming. They can submit projects via Devpost and participate in virtual networking through Discord."
        },
        {
          q: "Do online participants get the same prizes?",
          a: "Yes! Online participants are eligible for all prizes and there's a dedicated 'Best Online' category. Digital certificates and swag are shipped to online participants."
        },
        {
          q: "What technology do I need for online participation?",
          a: "You'll need a stable internet connection, a computer with development tools, and access to Discord for community interaction. All sessions are streamed on multiple platforms."
        },
        {
          q: "Can online participants attend workshops?",
          a: "Absolutely! All workshops and sessions are live-streamed and recorded. Online participants can ask questions through Discord and interact with speakers."
        },
        {
          q: "How do online participants present their projects?",
          a: "Online participants present their projects through video calls during Demo Day. The same judging criteria apply, and presentations are streamed live to the community."
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
          a: "Prizes include cash awards, internship opportunities, cloud credits, gadgets, and certificates. We have overall winners, track-specific awards, and special recognition categories."
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
      value: "Two-Phase",
      description: "Round 1: Online (Free) • Round 2: Demo Day"
    },
    {
      icon: Users,
      title: "Team Size",
      value: "2-4 Members",
      description: "Optimal collaboration"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru + Online",
      description: "Hybrid participation"
    },
    {
      icon: Trophy,
      title: "Prizes",
      value: "₹2L+ Value",
      description: "Cash, internships, credits"
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
