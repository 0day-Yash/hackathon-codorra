"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import MuiTimeline from "@/components/mui-timeline"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Monitor,
  Code,
  Trophy,
  Zap,
  Activity,
  Wifi,
  Building2,
  Globe,
  MessageSquare,
  Award,
  Mic,
  Laptop,
  CheckCircle,
} from "lucide-react"

export default function SchedulePage() {
  const scheduleEvents = [
    {
      day: "Day 1 (Speakers & Kickoff)",
      date: "Friday, May 29",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Opening Keynote",
          description: "Welcome address, event overview, and the future of technology.",
          location: "Live Stream",
          type: "keynote",
          icon: Mic,
          online: true
        },
        {
          time: "10:00 AM - 11:30 AM",
          title: "Speaker Session: AI Frontiers",
          description: "Exploring the next wave of generative AI and LLMs.",
          location: "Live Stream",
          type: "workshop",
          icon: Mic,
          online: true
        },
        {
          time: "12:00 PM - 1:30 PM",
          title: "Technical Workshop: DevSecOps",
          description: "Integrating security into your development workflow.",
          location: "Live Stream",
          type: "workshop",
          icon: Laptop,
          online: true
        },
        {
          time: "2:30 PM - 4:00 PM",
          title: "Speaker Session: Mobile Innovation",
          description: "Building world-class mobile experiences in 2026.",
          location: "Live Stream",
          type: "workshop",
          icon: Mic,
          online: true
        },
        {
          time: "5:00 PM - 6:00 PM",
          title: "Hackathon Official Kickoff",
          description: "Theme reveal, rules, and track-specific guidelines.",
          location: "Live Stream",
          type: "ceremony",
          icon: Monitor,
          online: true
        },
        {
          time: "6:00 PM",
          title: "Hacking Begins!",
          description: "The 48-hour coding window officially opens.",
          location: "Global",
          type: "start",
          icon: Code,
          online: true
        }
      ]
    },
    {
      day: "Day 2 (Coding Marathon)",
      date: "Saturday, May 30",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Morning Standup",
          description: "Quick progress check and community announcements.",
          location: "Discord",
          type: "admin",
          icon: Users,
          online: true
        },
        {
          time: "10:00 AM - 1:00 PM",
          title: "Mentor Office Hours",
          description: "Get one-on-one help from industry experts.",
          location: "Discord / Zoom",
          type: "mentoring",
          icon: Users,
          online: true
        },
        {
          time: "3:00 PM - 4:00 PM",
          title: "Lightning Tech Talks",
          description: "Short, high-impact talks from our partners.",
          location: "Live Stream",
          type: "workshop",
          icon: Mic,
          online: true
        },
        {
          time: "8:00 PM - 9:00 PM",
          title: "Late Night Sync",
          description: "Troubleshooting and motivation boost.",
          location: "Discord",
          type: "mentoring",
          icon: Zap,
          online: true
        }
      ]
    },
    {
      day: "Day 3 (Demos & Awards)",
      date: "Sunday, May 31",
      events: [
        {
          time: "9:00 AM - 12:00 PM",
          title: "Final Sprint",
          description: "Polishing code and preparing submissions.",
          location: "Global",
          type: "code",
          icon: Code,
          online: true
        },
        {
          time: "12:00 PM",
          title: "Submission Deadline",
          description: "Projects must be submitted on Devpost.",
          location: "Devpost",
          type: "submission",
          icon: CheckCircle,
          online: true
        },
        {
          time: "2:00 PM - 5:00 PM",
          title: "Project Demos",
          description: "Finalists pitch their solutions to the judges.",
          location: "Live Stream",
          type: "presentation",
          icon: Monitor,
          online: true
        },
        {
          time: "5:00 PM - 6:30 PM",
          title: "Judges Deliberation",
          description: "Final evaluation of the projects.",
          location: "Private Room",
          type: "judging",
          icon: Award,
          online: true
        },
        {
          time: "7:00 PM - 8:30 PM",
          title: "Closing Ceremony",
          description: "Winner announcements and prize distribution.",
          location: "Live Stream",
          type: "ceremony",
          icon: Trophy,
          online: true
        }
      ]
    }
  ]

  const eventTypeColors = {
    workshop: "border border-white/10 text-white/50",
    networking: "border border-white/10 text-white/50",
    ceremony: "border border-white/10 text-white/50",
    admin: "border border-white/10 text-white/50",
    keynote: "border border-white/10 text-white/50",
    announcement: "border border-white/10 text-white/50",
    start: "border border-white/10 text-white/50",
    meal: "border border-white/10 text-white/50",
    mentoring: "border border-white/10 text-white/50",
    panel: "border border-white/10 text-white/50",
    checkin: "border border-white/10 text-white/50",
    submission: "border border-white/10 text-white/50",
    presentation: "border border-white/10 text-white/50",
    judging: "border border-white/10 text-white/50",
    code: "border border-white/10 text-white/50"
  }

  const venueInfo = [
    {
      icon: Globe,
      title: "100% Online Hackathon",
      description: "Join from anywhere in the world. All sessions are live-streamed and coordinated via Discord.",
      features: ["Live Streamed Keynotes", "Virtual Workshops", "Discord Community", "Online Mentorship", "Digital Swag & Certificates"]
    }
  ]

  const importantNotes = [
    "All times are listed in IST (India Standard Time, GMT+5:30).",
    "The hackathon is a single-round, 72-hour international event.",
    "24 hours are dedicated to speaker sessions, workshops, and global networking.",
    "48 hours are dedicated to non-stop coding and building.",
    "Participation is completely free for builders worldwide.",
    "Submissions close May 31, 2026 at 12:00 PM IST."
  ]


  return (
    <main>
      <Navbar />
      <PageHeader
        title="Event Schedule"
        description="Complete timeline for CODORRA 2026 - A 72-hour online intensive featuring 24h of sessions and 48h of hacking (May 29-31)."
      />

      <PageSection>
        <SectionHeader
          eyebrow="72-Hour Timeline"
          title="Speakers & Hackathon Schedule"
          desc="From May 29 to May 31, 2026. 24 hours of expert-led sessions followed by a 48-hour coding marathon."
          className="cursor-target"
        />

        <div className="space-y-12">
          {scheduleEvents.map((day, dayIndex) => (
            <Reveal key={day.day} delay={dayIndex * 100}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-gradient text-white rounded-lg p-3 border border-white/10">
                    <Calendar className="size-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold italic tracking-tight">{day.day}</h2>
                    <p className="text-muted-foreground font-mono text-sm uppercase tracking-wider">{day.date}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {day.events.map((event, eventIndex) => {
                    const EventIcon = event.icon
                    const typeColor = eventTypeColors[event.type as keyof typeof eventTypeColors]

                    return (
                      <Reveal key={event.title} delay={eventIndex * 50}>
                        <Card className="glass cursor-target h-full flex flex-col border-white/10">
                          <CardHeader className="pb-2 flex-grow">
                            <div className="flex items-center justify-between mb-2">
                              <div className={`${typeColor} rounded-lg p-2 ring-1`}>
                                <EventIcon className="size-4" />
                              </div>
                              <div className="flex gap-1">
                                {event.online && (
                                  <Badge variant="outline" className="text-[10px] uppercase border-white/10 bg-white/5">
                                    <Globe className="size-3 mr-1" />
                                    Online
                                  </Badge>
                                )}
                                {!event.online && (
                                  <Badge className="text-[10px] uppercase bg-brand-gradient border-none text-white font-bold">
                                    <MapPin className="size-3 mr-1" />
                                    In-Person
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Clock className="size-3 text-white/40" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <MapPin className="size-3 text-white/40" />
                                {event.location}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-2">
                            <p className="text-xs text-muted-foreground leading-relaxed">{event.description}</p>
                          </CardContent>
                        </Card>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Participation Modes"
          title="Venue Information"
          desc="Details about both in-person and online participation options."
          className="cursor-target"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {venueInfo.map((venue, i) => (
            <Reveal key={venue.title} delay={i * 100}>
              <Card className="glass cursor-target">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <venue.icon className="size-5 text-white/40" />
                    {venue.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{venue.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {venue.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="mt-1.5 size-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Important Information"
          title="Key Notes & Guidelines"
          desc="Essential information to help you make the most of your hackathon experience."
          className="cursor-target"
        />

        <Reveal>
          <Card className="glass cursor-target">
            <CardHeader>
              <CardTitle>Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {importantNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="mt-1.5 size-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Reveal>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Quick Reference"
          title="Timeline Overview"
          desc="High-level view of the hackathon timeline for easy reference."
          className="cursor-target"
        />

        <Reveal>
          <div className="-mx-2">
            <MuiTimeline />
          </div>
        </Reveal>
      </PageSection>

      <div className="absolute right-6 top-10">
        <OrnamentRings className="h-64 w-64" />
      </div>
      <Footer />
    </main>
  )
}
