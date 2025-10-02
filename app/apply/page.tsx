"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import {
  Users,
  Building2,
  Mail,
  User,
  Users2,
  Award,
  MessageSquare,
  ExternalLink,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export default function ApplyPage() {
  const [participantForm, setParticipantForm] = useState({
    name: "",
    email: "",
    teamName: "",
    teamSize: "",
    experienceLevel: "",
    motivation: ""
  })

  const [sponsorForm, setSponsorForm] = useState({
    name: "",
    company: "",
    email: "",
    tier: "",
    message: ""
  })

  const handleParticipantSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle participant form submission
    console.log("Participant form submitted:", participantForm)
  }

  const handleSponsorSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sponsor form submission
    console.log("Sponsor form submitted:", sponsorForm)
  }

  const participantBenefits = [
    {
      icon: Users,
      title: "Team Formation",
      description: "Connect with like-minded developers and security enthusiasts"
    },
    {
      icon: Award,
      title: "Prizes & Recognition",
      description: "Win cash prizes, internships, and industry recognition"
    },
    {
      icon: CheckCircle,
      title: "Learning Experience",
      description: "Access to workshops, mentors, and cutting-edge tools"
    }
  ]

  const sponsorTiers = [
    {
      name: "Gold",
      price: "$2,000+",
      perks: [
        "Stage mentions + logo on hero",
        "Talk/workshop slot",
        "Booth + hiring access",
        "Custom challenge track"
      ]
    },
    {
      name: "Silver", 
      price: "$1,000+",
      perks: [
        "Logo on site + socials",
        "Workshop/lightning talk",
        "Shortlist access"
      ]
    },
    {
      name: "Community Partner",
      price: "$500+",
      perks: [
        "Logo in partners",
        "Social mentions",
        "Ticket discounts (optional)"
      ]
    }
  ]

  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Apply to CODORRA"
        description="Join us as a participant or partner with us as a sponsor to make this hackathon a success."
      />

      <PageSection>
        <SectionHeader
          eyebrow="Choose Your Path"
          title="How to Get Involved"
          desc="Whether you're building the next big security solution or supporting the community, there's a place for you at CODORRA."
          className="cursor-target"
        />
        
        <Tabs defaultValue="participant" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="participant" className="flex items-center gap-2">
              <Users className="size-4" />
              Join as Participant
            </TabsTrigger>
            <TabsTrigger value="sponsor" className="flex items-center gap-2">
              <Building2 className="size-4" />
              Apply as Sponsor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="participant" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <Reveal>
                  <h3 className="text-2xl font-bold">Participant Application</h3>
                  <p className="text-muted-foreground">
                    Ready to build something amazing? Join us for 48 hours of innovation and collaboration.
                  </p>
                </Reveal>

                <Card className="glass cursor-target">
                  <CardHeader>
                    <CardTitle>Why Participate?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {participantBenefits.map((benefit, i) => (
                      <Reveal key={benefit.title} delay={i * 100}>
                        <div className="flex items-start gap-3">
                          <div className="bg-accent/10 ring-accent/25 text-accent rounded-lg p-2 ring-1">
                            <benefit.icon className="size-4" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Reveal delay={100}>
                <Card className="glass cursor-target">
                  <CardHeader>
                    <CardTitle>Application Form</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleParticipantSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={participantForm.name}
                          onChange={(e) => setParticipantForm({...participantForm, name: e.target.value})}
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={participantForm.email}
                          onChange={(e) => setParticipantForm({...participantForm, email: e.target.value})}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="teamName">Team Name</Label>
                        <Input
                          id="teamName"
                          value={participantForm.teamName}
                          onChange={(e) => setParticipantForm({...participantForm, teamName: e.target.value})}
                          placeholder="Your team name (if you have one)"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="teamSize">Team Size</Label>
                        <Select value={participantForm.teamSize} onValueChange={(value) => setParticipantForm({...participantForm, teamSize: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Solo (1 person)</SelectItem>
                            <SelectItem value="2">2 people</SelectItem>
                            <SelectItem value="3">3 people</SelectItem>
                            <SelectItem value="4">4 people</SelectItem>
                            <SelectItem value="5">5 people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience Level</Label>
                        <Select value={participantForm.experienceLevel} onValueChange={(value) => setParticipantForm({...participantForm, experienceLevel: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="expert">Expert</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="motivation">Why do you want to participate?</Label>
                        <Textarea
                          id="motivation"
                          value={participantForm.motivation}
                          onChange={(e) => setParticipantForm({...participantForm, motivation: e.target.value})}
                          placeholder="Tell us about your interest in cybersecurity and what you hope to achieve..."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Submit Application
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <Card className="glass cursor-target">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="size-5" />
                    Alternative: Apply via Devpost
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    You can also apply directly through our Devpost page for a streamlined experience.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://devpost.com" target="_blank" rel="noopener">
                      Apply on Devpost
                      <ExternalLink className="ml-2 size-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          </TabsContent>

          <TabsContent value="sponsor" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <Reveal>
                  <h3 className="text-2xl font-bold">Sponsor Application</h3>
                  <p className="text-muted-foreground">
                    Partner with us to support the next generation of cybersecurity innovators and gain access to top talent.
                  </p>
                </Reveal>

                <div className="space-y-4">
                  {sponsorTiers.map((tier, i) => (
                    <Reveal key={tier.name} delay={i * 100}>
                      <Card className="glass cursor-target">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span>{tier.name} Partner</span>
                            <span className="text-accent font-bold">{tier.price}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {tier.perks.map((perk, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <CheckCircle className="size-4 text-accent mt-0.5" />
                                <span className="text-sm">{perk}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal delay={100}>
                <Card className="glass cursor-target">
                  <CardHeader>
                    <CardTitle>Sponsor Application Form</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSponsorSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="sponsorName">Contact Name *</Label>
                        <Input
                          id="sponsorName"
                          value={sponsorForm.name}
                          onChange={(e) => setSponsorForm({...sponsorForm, name: e.target.value})}
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization *</Label>
                        <Input
                          id="company"
                          value={sponsorForm.company}
                          onChange={(e) => setSponsorForm({...sponsorForm, company: e.target.value})}
                          placeholder="Your company name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sponsorEmail">Email Address *</Label>
                        <Input
                          id="sponsorEmail"
                          type="email"
                          value={sponsorForm.email}
                          onChange={(e) => setSponsorForm({...sponsorForm, email: e.target.value})}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tier">Sponsorship Tier Interest</Label>
                        <Select value={sponsorForm.tier} onValueChange={(value) => setSponsorForm({...sponsorForm, tier: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select sponsorship tier" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gold">Gold Partner ($2,000+)</SelectItem>
                            <SelectItem value="silver">Silver Partner ($1,000+)</SelectItem>
                            <SelectItem value="community">Community Partner ($500+)</SelectItem>
                            <SelectItem value="custom">Custom Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sponsorMessage">Additional Requirements or Questions</Label>
                        <Textarea
                          id="sponsorMessage"
                          value={sponsorForm.message}
                          onChange={(e) => setSponsorForm({...sponsorForm, message: e.target.value})}
                          placeholder="Tell us about your specific requirements, workshop topics, or any questions you have..."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Submit Sponsor Application
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <Card className="glass cursor-target">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="size-5" />
                    Direct Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Prefer to discuss sponsorship opportunities directly? Reach out to our team.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:team@codorra.dev?subject=Sponsor%20CODORRA%20Hackathon">
                      Email Our Team
                      <Mail className="ml-2 size-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          </TabsContent>
        </Tabs>
      </PageSection>

      <div className="absolute right-6 top-10">
        <OrnamentRings className="h-64 w-64" />
      </div>
      <Footer />
    </main>
  )
}
