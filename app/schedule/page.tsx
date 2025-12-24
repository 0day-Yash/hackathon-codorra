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
  Presentation,
  Code,
  Trophy,
  Coffee,
  Pizza,
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
      day: "Day -1 (Pre-Event)",
      date: "Friday, March 14",
      events: [
        {
          time: "10:00 AM - 12:00 PM",
          title: "Sponsor Workshops",
          description: "TechCorp Security: Advanced Threat Detection, SecureVentures: Startup Pitch Session",
          location: "Main Hall",
          type: "workshop",
          icon: Mic,
          online: true
        },
        {
          time: "2:00 PM - 4:00 PM",
          title: "Team Formation & Networking",
          description: "Connect with potential teammates, discuss project ideas, and form teams",
          location: "Networking Area",
          type: "networking",
          icon: Users,
          online: true
        },
        {
          time: "6:00 PM - 8:00 PM",
          title: "Opening Ceremony",
          description: "Welcome address, sponsor introductions, and hackathon overview",
          location: "Main Stage",
          type: "ceremony",
          icon: Presentation,
          online: true
        }
      ]
    },
    {
      day: "Day 0 (Kickoff)",
      date: "Saturday, March 15",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Registration & Check-in",
          description: "Final registration, swag distribution, and venue orientation",
          location: "Registration Desk",
          type: "admin",
          icon: Users,
          online: false
        },
        {
          time: "10:00 AM - 11:00 AM",
          title: "Opening Keynote",
          description: "Keynote address by industry leaders on cybersecurity trends and opportunities",
          location: "Main Stage",
          type: "keynote",
          icon: Mic,
          online: true
        },
        {
          time: "11:00 AM - 12:00 PM",
          title: "Challenge Announcements",
          description: "Sponsor challenge tracks and special prizes revealed",
          location: "Main Stage",
          type: "announcement",
          icon: Award,
          online: true
        },
        {
          time: "12:00 PM",
          title: "Hacking Begins!",
          description: "48-hour coding marathon officially starts",
          location: "All Areas",
          type: "start",
          icon: Code,
          online: true
        },
        {
          time: "1:00 PM - 2:00 PM",
          title: "Lunch Break",
          description: "Pizza and networking session",
          location: "Dining Area",
          type: "meal",
          icon: Pizza,
          online: false
        },
        {
          time: "3:00 PM - 4:00 PM",
          title: "Technical Workshop",
          description: "Cybersecurity tools and frameworks introduction",
          location: "Workshop Room A",
          type: "workshop",
          icon: Laptop,
          online: true
        },
        {
          time: "6:00 PM - 7:00 PM",
          title: "Dinner Break",
          description: "Evening meal and team check-ins",
          location: "Dining Area",
          type: "meal",
          icon: Pizza,
          online: false
        },
        {
          time: "8:00 PM - 9:00 PM",
          title: "Mentor Office Hours",
          description: "One-on-one sessions with industry mentors",
          location: "Mentor Lounge",
          type: "mentoring",
          icon: Users,
          online: true
        }
      ]
    },
    {
      day: "Day 1 (Hacking Continues)",
      date: "Sunday, March 16",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Morning Coffee & Check-in",
          description: "Coffee, pastries, and progress updates",
          location: "Dining Area",
          type: "meal",
          icon: Coffee,
          online: false
        },
        {
          time: "10:00 AM - 11:00 AM",
          title: "AI Security Workshop",
          description: "Building secure AI systems and detecting adversarial attacks",
          location: "Workshop Room B",
          type: "workshop",
          icon: Laptop,
          online: true
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Lunch Break",
          description: "Midday meal and team progress sharing",
          location: "Dining Area",
          type: "meal",
          icon: Pizza,
          online: false
        },
        {
          time: "2:00 PM - 3:00 PM",
          title: "Fintech Security Panel",
          description: "Industry experts discuss financial security challenges",
          location: "Main Stage",
          type: "panel",
          icon: Mic,
          online: true
        },
        {
          time: "4:00 PM - 5:00 PM",
          title: "Midpoint Check-in",
          description: "Progress updates and troubleshooting session",
          location: "All Areas",
          type: "checkin",
          icon: Users,
          online: true
        },
        {
          time: "6:00 PM - 7:00 PM",
          title: "Dinner Break",
          description: "Evening meal and final push preparation",
          location: "Dining Area",
          type: "meal",
          icon: Pizza,
          online: false
        },
        {
          time: "8:00 PM - 9:00 PM",
          title: "Late Night Workshop",
          description: "Advanced debugging and optimization techniques",
          location: "Workshop Room A",
          type: "workshop",
          icon: Laptop,
          online: true
        }
      ]
    },
    {
      day: "Day 2 (Demo Day)",
      date: "Monday, March 17",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Final Sprint & Submission",
          description: "Last-minute fixes and final project submissions",
          location: "All Areas",
          type: "submission",
          icon: Code,
          online: true
        },
        {
          time: "10:00 AM - 12:00 PM",
          title: "Project Presentations",
          description: "Teams present their solutions to judges and community",
          location: "Main Stage",
          type: "presentation",
          icon: Presentation,
          online: true
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Lunch & Networking",
          description: "Final networking session and project demos",
          location: "Dining Area",
          type: "meal",
          icon: Pizza,
          online: false
        },
        {
          time: "1:00 PM - 2:00 PM",
          title: "Judging & Deliberation",
          description: "Judges evaluate projects and select winners",
          location: "Judges Room",
          type: "judging",
          icon: Trophy,
          online: false
        },
        {
          time: "2:00 PM - 3:00 PM",
          title: "Closing Ceremony",
          description: "Award announcements, prize distribution, and closing remarks",
          location: "Main Stage",
          type: "ceremony",
          icon: Award,
          online: true
        },
        {
          time: "3:00 PM - 4:00 PM",
          title: "Post-Event Networking",
          description: "Final networking, contact exchange, and celebration",
          location: "Networking Area",
          type: "networking",
          icon: Users,
          online: false
        }
      ]
    }
  ]

  const eventTypeColors = {
    workshop: "bg-primary/10 text-primary ring-primary/25",
    networking: "bg-accent/10 text-accent ring-accent/25",
    ceremony: "bg-primary/10 text-primary ring-primary/25",
    admin: "bg-muted/10 text-muted-foreground ring-muted/25",
    keynote: "bg-accent/10 text-accent ring-accent/25",
    announcement: "bg-primary/10 text-primary ring-primary/25",
    start: "bg-accent/10 text-accent ring-accent/25",
    meal: "bg-muted/10 text-muted-foreground ring-muted/25",
    mentoring: "bg-accent/10 text-accent ring-accent/25",
    panel: "bg-primary/10 text-primary ring-primary/25",
    checkin: "bg-muted/10 text-muted-foreground ring-muted/25",
    submission: "bg-accent/10 text-accent ring-accent/25",
    presentation: "bg-primary/10 text-primary ring-primary/25",
    judging: "bg-accent/10 text-accent ring-accent/25"
  }

  const venueInfo = [
    {
      icon: Building2,
      title: "Main Venue (Bengaluru)",
      description: "24/7 access with security, high-speed internet, and backup power",
      features: ["Air conditioning", "High-speed WiFi", "Backup 4G routers", "Security personnel", "Overnight access"]
    },
    {
      icon: Globe,
      title: "Online Track",
      description: "Full virtual participation with live streaming and Discord community",
      features: ["Live streamed sessions", "Discord community", "Virtual workshops", "Online judging", "Digital swag"]
    }
  ]

  const importantNotes = [
    "All times are in GMT +05:30 (Calcutta timezone)",
    "Round 1 (May 22-31): Fully online, free participation, submissions via Devpost + GitHub",
    "Round 2 (June 5-7): Demo Day in Bengaluru, open for all shortlisted finalists",
    "Round 2 venue provides 24/7 access, internet, power, and basic infrastructure",
    "Round 1 submissions close May 31, 2026 at 10:00 AM",
    "Round 2: 3-minute presentations, live demos, and Q&A with judges"
  ]

  return (
    <main>
      <Navbar />
      <PageHeader
        title="Event Schedule"
        description="Complete timeline for CODORRA 2026 - Round 1: Online (May 22-31) and Round 2: Demo Day (June 5-7)."
      />

      <PageSection>
        <SectionHeader
          eyebrow="Two-Phase Timeline"
          title="Round 1 & Round 2 Schedule"
          desc="Round 1: Online submissions (May 22-31, 2026). Round 2: Demo Day in Bengaluru (June 5-7, 2026)."
          className="cursor-target"
        />

        <div className="space-y-12">
          {scheduleEvents.map((day, dayIndex) => (
            <Reveal key={day.day} delay={dayIndex * 100}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 ring-accent/25 text-accent rounded-lg p-3 ring-1">
                    <Calendar className="size-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{day.day}</h2>
                    <p className="text-muted-foreground">{day.date}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {day.events.map((event, eventIndex) => {
                    const EventIcon = event.icon
                    const typeColor = eventTypeColors[event.type as keyof typeof eventTypeColors]

                    return (
                      <Reveal key={event.title} delay={eventIndex * 50}>
                        <Card className="glass cursor-target">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between mb-2">
                              <div className={`${typeColor} rounded-lg p-2 ring-1`}>
                                <EventIcon className="size-4" />
                              </div>
                              <div className="flex gap-1">
                                {event.online && (
                                  <Badge variant="outline" className="text-xs">
                                    <Globe className="size-3 mr-1" />
                                    Online
                                  </Badge>
                                )}
                                {!event.online && (
                                  <Badge variant="secondary" className="text-xs">
                                    <MapPin className="size-3 mr-1" />
                                    In-Person
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <CardTitle className="text-lg">{event.title}</CardTitle>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="size-3" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="size-3" />
                              {event.location}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
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
                    <venue.icon className="size-5 text-accent" />
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
                          <CheckCircle className="size-3 text-accent mt-1" />
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
                    <MessageSquare className="size-4 text-accent mt-0.5" />
                    <span className="text-sm">{note}</span>
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
