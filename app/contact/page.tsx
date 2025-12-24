"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PageHeader, PageSection, TwoColumnLayout, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Users,
  Building2,
  Globe,
  ExternalLink,
  ArrowRight,
} from "lucide-react"

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", contactForm)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "codorra@yahoo.com",
      description: "General inquiries and support",
      action: "mailto:codorra@yahoo.com"
    },
    {
      icon: MessageSquare,
      title: "Discord",
      value: "Join our community",
      description: "Real-time discussions and updates",
      action: "https://discord.gg/9QpwAmX4Ke"
    },
    {
      icon: Globe,
      title: "WhatsApp",
      value: "Quick updates",
      description: "Announcements and quick questions",
      action: "https://wa.me/codorra"
    }
  ]

  const teamMembers = [
    {
      name: "Yash Kulkarni",
      role: "Lead Organizer",
      email: "yash@codorra.dev",
      bio: "Leading the global strategy and overall direction of CODORRA 2026."
    },
    {
      name: "Jonathan Jaladi",
      role: "Operations Lead",
      email: "jonathan@codorra.dev",
      bio: "Managing core operations and ensuring a seamless experience for all participants."
    }
  ]

  const inquiryTypes = [
    "General Question",
    "Registration Support",
    "Sponsorship Inquiry",
    "Technical Issue",
    "Media/Press Inquiry",
    "Partnership Opportunity",
    "Other"
  ]

  const socialLinks = [
    {
      name: "Discord",
      url: "https://discord.gg/9QpwAmX4Ke",
      description: "Join our active community for discussions, updates, and networking"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/codorra",
      description: "Quick updates and announcements"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/codorra",
      description: "Follow us for event highlights and behind-the-scenes content"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/codorra",
      description: "Professional networking and industry updates"
    }
  ]

  return (
    <main>
      <Navbar />
      <PageHeader
        title="Contact Us"
        description="Get in touch with the CODORRA team for questions, support, or partnership opportunities."
      />

      <PageSection>
        <SectionHeader
          eyebrow="Get in Touch"
          title="Contact Information"
          desc="Multiple ways to reach our team and connect with the community."
          className="cursor-target"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.map((info, i) => (
            <Reveal key={info.title} delay={i * 100}>
              <Card className="glass cursor-target group hover:translate-y-[-2px] transition-all border-white/10">
                <CardHeader className="text-center">
                  <div className="bg-white/5 text-white/50 rounded-lg p-3 w-fit mx-auto mb-4 border border-white/10 group-hover:border-white/20 transition-colors">
                    <info.icon className="size-6" />
                  </div>
                  <CardTitle className="text-lg font-bold italic">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="font-semibold text-white/90">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                  <Button asChild size="sm" className="w-full bg-brand-gradient hover:opacity-90 transition-opacity border-none h-9 mt-4 text-white font-bold">
                    <a href={info.action} target="_blank" rel="noopener">
                      Contact
                      <ArrowRight className="ml-2 size-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Send a Message"
          title="Contact Form"
          desc="Have a specific question or inquiry? Fill out our contact form and we'll get back to you within 24 hours."
          className="cursor-target"
        />

        <TwoColumnLayout
          left={
            <Reveal>
              <Card className="glass cursor-target border-white/10">
                <CardHeader>
                  <CardTitle className="italic font-bold">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Your full name"
                        className="bg-white/5 border-white/10 focus:border-white/20 transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="bg-white/5 border-white/10 focus:border-white/20 transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType" className="text-xs uppercase tracking-widest text-muted-foreground">Inquiry Type</Label>
                      <Select value={contactForm.inquiryType} onValueChange={(value) => setContactForm({ ...contactForm, inquiryType: value })}>
                        <SelectTrigger className="bg-white/5 border-white/10 focus:ring-0">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-white/10">
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type} className="focus:bg-white/10">{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted-foreground">Subject *</Label>
                      <Input
                        id="subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        placeholder="Brief subject line"
                        className="bg-white/5 border-white/10 focus:border-white/20 transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                        className="bg-white/5 border-white/10 focus:border-white/20 transition-colors min-h-[150px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-brand-gradient hover:opacity-90 transition-opacity border-none h-11 text-white font-bold">
                      Send Message
                      <Send className="ml-2 size-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Reveal>
          }
          right={
            <Reveal delay={100}>
              <div className="space-y-6">
                <Card className="glass cursor-target border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 italic font-bold">
                      <Clock className="size-5 text-white/40" />
                      Response Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-brand-gradient shadow-[0_0_10px_rgba(192,38,211,0.5)]" />
                      <span className="text-sm text-muted-foreground">General: Within 24h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-brand-gradient shadow-[0_0_10px_rgba(192,38,211,0.5)]" />
                      <span className="text-sm text-muted-foreground">Technical: Within 12h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-brand-gradient shadow-[0_0_10px_rgba(192,38,211,0.5)]" />
                      <span className="text-sm text-muted-foreground">Urgent: Within 6h</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass cursor-target border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 italic font-bold">
                      <MapPin className="size-5 text-white/40" />
                      Event Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Venue:</strong> Bengaluru, India
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Round 1:</strong> Online (May 22-31)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Round 2:</strong> Bengaluru (June 5-7)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          }
        />
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Meet the Team"
          title="Core Organizers"
          desc="The leadership driving CODORRA 2026."
          className="cursor-target"
        />

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <Card className="glass border-white/10 h-full flex flex-col group overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-[0.02] transition-opacity" />
                <CardHeader className="text-center flex-grow p-8">
                  <CardTitle className="text-2xl italic font-bold mb-1">{member.name}</CardTitle>
                  <p className="text-gradient font-extrabold uppercase tracking-tighter text-sm mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardHeader>
                <CardContent className="p-8 pt-0 relative z-10">
                  <Button asChild size="sm" variant="outline" className="w-full border-white/10 hover:bg-white/5 h-10 text-white/70 hover:text-white transition-all">
                    <a href={`mailto:${member.email}`}>
                      <Mail className="mr-2 size-4" />
                      Email {member.name.split(' ')[0]}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <div className="absolute right-6 top-10 pointer-events-none">
        <OrnamentRings className="h-64 w-64" />
      </div>
      <Footer />
    </main>
  )
}
