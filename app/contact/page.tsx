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
      value: "team@codorra.dev",
      description: "General inquiries and support",
      action: "mailto:team@codorra.dev"
    },
    {
      icon: MessageSquare,
      title: "Discord",
      value: "Join our community",
      description: "Real-time discussions and updates",
      action: "https://discord.gg/codorra"
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
      name: "Sarah Johnson",
      role: "Event Director",
      email: "sarah@codorra.dev",
      bio: "Leading the overall event coordination and community engagement."
    },
    {
      name: "Alex Chen",
      role: "Technical Lead",
      email: "alex@codorra.dev", 
      bio: "Managing technical infrastructure and participant support."
    },
    {
      name: "Priya Sharma",
      role: "Sponsor Relations",
      email: "priya@codorra.dev",
      bio: "Handling sponsor partnerships and business development."
    },
    {
      name: "Marcus Rodriguez",
      role: "Community Manager",
      email: "marcus@codorra.dev",
      bio: "Managing online communities and participant engagement."
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
      url: "https://discord.gg/codorra",
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
              <Card className="glass cursor-target group hover:translate-y-[-2px] transition-all">
                <CardHeader className="text-center">
                  <div className="bg-accent/10 ring-accent/25 text-accent rounded-lg p-3 ring-1 w-fit mx-auto mb-4">
                    <info.icon className="size-6" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="font-semibold">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
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
              <Card className="glass cursor-target">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={contactForm.inquiryType} onValueChange={(value) => setContactForm({...contactForm, inquiryType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        placeholder="Brief subject line"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
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
                <Card className="glass cursor-target">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="size-5 text-primary" />
                      Response Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-accent" />
                      <span className="text-sm">General inquiries: Within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-accent" />
                      <span className="text-sm">Technical support: Within 12 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-accent" />
                      <span className="text-sm">Urgent matters: Within 6 hours</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass cursor-target">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="size-5 text-accent" />
                      Event Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Main Venue:</strong> Bengaluru, India
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Online Track:</strong> Global participation
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Date:</strong> March 15-17, 2026
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
          title="Our Team"
          desc="The people behind CODORRA 2026 - dedicated to making this hackathon an unforgettable experience."
          className="cursor-target"
        />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <Card className="glass cursor-target">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-accent font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <a href={`mailto:${member.email}`}>
                      <Mail className="mr-2 size-3" />
                      Contact
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
          eyebrow="Stay Connected"
          title="Social Media & Community"
          desc="Follow us on social media and join our community channels for updates, discussions, and networking."
          className="cursor-target"
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          {socialLinks.map((social, i) => (
            <Reveal key={social.name} delay={i * 100}>
              <Card className="glass cursor-target group hover:translate-y-[-2px] transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{social.name}</span>
                    <ExternalLink className="size-4 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{social.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={social.url} target="_blank" rel="noopener">
                      Follow Us
                      <ArrowRight className="ml-2 size-4" />
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
          eyebrow="Quick Links"
          title="Common Inquiries"
          desc="Quick access to frequently requested information and resources."
          className="cursor-target"
        />
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="size-5 text-primary" />
                  Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Questions about registration, team formation, or eligibility?
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="/apply">Apply Now</a>
                </Button>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="size-5 text-accent" />
                  Sponsorship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Interested in sponsoring or partnering with us?
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="/sponsors">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={200}>
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="size-5 text-primary" />
                  FAQ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Find answers to common questions about the event.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="/faq">View FAQ</a>
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
