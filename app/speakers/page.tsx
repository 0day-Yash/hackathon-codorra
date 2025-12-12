"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageSection, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { OrnamentRings } from "@/components/ornament-rings"
import {
  Linkedin,
  Twitter,
  Search,
  ExternalLink,
  Users,
} from "lucide-react"

type SpeakerCategory = "All" | "Speakers" | "Judges" | "Organizing Team" | "Volunteers"

interface Person {
  name: string
  role: string
  company: string
  image: string
  linkedin?: string
  twitter?: string
  category: SpeakerCategory
}

export default function SpeakersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<SpeakerCategory>("All")

  const categories: SpeakerCategory[] = ["All", "Speakers", "Judges", "Organizing Team", "Volunteers"]

  // Speakers
  const speakers: Person[] = [
    {
      name: "Aadil Ahmed",
      role: "SWE",
      company: "Solana Foundation",
      image: "/avatars/avatar1.svg",
      linkedin: "https://linkedin.com/in/aadilahmed",
      twitter: "https://twitter.com/aadilahmed",
      category: "Speakers"
    },
    {
      name: "Michael Chen",
      role: "Security Engineer",
      company: "TechStart",
      image: "/avatars/avatar7.svg",
      linkedin: "https://linkedin.com/in/michaelchen",
      category: "Speakers"
    },
    {
      name: "Sarah Johnson",
      role: "Security Architect",
      company: "CloudGuard",
      image: "/avatars/avatar8.svg",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      category: "Speakers"
    },
    {
      name: "James Wilson",
      role: "CTO",
      company: "BlockSecure",
      image: "/avatars/avatar1.svg",
      linkedin: "https://linkedin.com/in/jameswilson",
      category: "Speakers"
    },
    {
      name: "Lisa Park",
      role: "Head of Security",
      company: "FinTech Solutions",
      image: "/avatars/avatar2.svg",
      linkedin: "https://linkedin.com/in/lisapark",
      category: "Speakers"
    }
  ]

  // Judges
  const judges: Person[] = [
    {
      name: "David Kim",
      role: "Venture Partner",
      company: "SecureVentures",
      image: "/avatars/avatar8.svg",
      linkedin: "https://linkedin.com/in/davidkim",
      category: "Judges"
    },
    {
      name: "Emma Thompson",
      role: "Security Architect",
      company: "CloudGuard",
      image: "/avatars/avatar1.svg",
      linkedin: "https://linkedin.com/in/emmathompson",
      category: "Judges"
    },
    {
      name: "Robert Martinez",
      role: "Cybersecurity Consultant",
      company: "SecureNet",
      image: "/avatars/avatar2.svg",
      linkedin: "https://linkedin.com/in/robertmartinez",
      category: "Judges"
    },
    {
      name: "Dr. Ananya Patel",
      role: "Research Scientist",
      company: "AI Security Labs",
      image: "/avatars/avatar3.svg",
      linkedin: "https://linkedin.com/in/ananyapatel",
      category: "Judges"
    },
    {
      name: "Chris Anderson",
      role: "Security Lead",
      company: "TechGuard",
      image: "/avatars/avatar4.svg",
      linkedin: "https://linkedin.com/in/chrisanderson",
      category: "Judges"
    }
  ]

  // Organizing Team
  const organizingTeam: Person[] = [
    {
      name: "Rajesh Kumar",
      role: "Event Director",
      company: "CODORRA",
      image: "/avatars/avatar5.svg",
      linkedin: "https://linkedin.com/in/rajeshkumar",
      category: "Organizing Team"
    },

    {
      name: "Rohan Kapoor",
      role: "Logistics Coordinator",
      company: "CODORRA",
      image: "/avatars/avatar3.svg",
      linkedin: "https://linkedin.com/in/rohankapoor",
      category: "Organizing Team"
    },
    {
      name: "Kavya Iyer",
      role: "Content Lead",
      company: "CODORRA",
      image: "/avatars/avatar4.svg",
      linkedin: "https://linkedin.com/in/kavyaiyer",
      category: "Organizing Team"
    }
  ]

  // Volunteers
  const volunteers: Person[] = [
    {
      name: "Amit Shah",
      role: "Volunteer",
      company: "Student Volunteer",
      image: "/avatars/avatar5.svg",
      linkedin: "https://linkedin.com/in/amitshah",
      category: "Volunteers"
    },
    {
      name: "Divya Menon",
      role: "Volunteer",
      company: "Student Volunteer",
      image: "/avatars/avatar6.svg",
      linkedin: "https://linkedin.com/in/divyamenon",
      category: "Volunteers"
    },
    {
      name: "Karan Malhotra",
      role: "Volunteer",
      company: "Student Volunteer",
      image: "/avatars/avatar7.svg",
      linkedin: "https://linkedin.com/in/karanmalhotra",
      category: "Volunteers"
    },
    {
      name: "Meera Joshi",
      role: "Volunteer",
      company: "Student Volunteer",
      image: "/avatars/avatar8.svg",
      linkedin: "https://linkedin.com/in/meerajoshi",
      category: "Volunteers"
    },
    {
      name: "Nikhil Rao",
      role: "Volunteer",
      company: "Student Volunteer",
      image: "/avatars/avatar1.svg",
      linkedin: "https://linkedin.com/in/nikhilrao",
      category: "Volunteers"
    },
    {
      name: "Pooja Agarwal",
      role: "Volunteer",
      company: "Student Volunteer",
      image: "/avatars/avatar2.svg",
      linkedin: "https://linkedin.com/in/poojaagarwal",
      category: "Volunteers"
    },
    {
      name: "Rahul Verma",
      role: "Volunteer",
      company: "Student Volunteer",
      image: "/avatars/avatar3.svg",
      linkedin: "https://linkedin.com/in/rahulverma",
      category: "Volunteers"
    },
    {
      name: "Shreya Nair",
      role: "Volunteer",
      company: "Student Volunteer",
      image: "/avatars/avatar4.svg",
      linkedin: "https://linkedin.com/in/shreyanair",
      category: "Volunteers"
    }
  ]

  const allPeople = [...speakers, ...judges, ...organizingTeam, ...volunteers]

  const filteredPeople = allPeople.filter(person => {
    const matchesSearch = 
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.role.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = 
      selectedCategory === "All" || 
      person.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const groupedPeople = {
    Speakers: speakers,
    Judges: judges,
    "Organizing Team": organizingTeam,
    Volunteers: volunteers
  }

  return (
    <main>
      <Navbar />
      
      {/* Header Section */}
      <PageSection className="border-b" withCursor={false}>
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <Reveal>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  Meet the Team
                </h1>
                <p className="text-lg text-muted-foreground">
                  World-class speakers, expert judges, and dedicated organizers making CODORRA possible.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Button 
                variant="secondary" 
                className="rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
                asChild
              >
                <a href="/schedule">
                  See all programs
                  <ExternalLink className="ml-2 size-4" />
                </a>
              </Button>
            </Reveal>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <Reveal delay={50}>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name, company, role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-lg border-white/10 bg-white/5 focus:bg-white/10"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-lg ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Show grouped view when "All" is selected, otherwise show filtered */}
          {selectedCategory === "All" ? (
            <>
              {/* Speakers Section */}
              <div className="mb-16">
                <Reveal>
                  <h2 className="text-2xl font-bold mb-6">Speakers</h2>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {speakers.map((person, i) => (
                    <Reveal key={person.name} delay={i * 30}>
                      <Card className="group overflow-hidden border border-border/50 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-md hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative w-full aspect-square overflow-hidden">
                            <Avatar className="w-full h-full rounded-none">
                              <AvatarImage 
                                src={person.image} 
                                alt={person.name}
                                className="object-cover"
                              />
                              <AvatarFallback className="text-2xl bg-muted">
                                {person.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              {person.linkedin && (
                                <a
                                  href={person.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Linkedin className="size-4" />
                                </a>
                              )}
                              {person.twitter && (
                                <a
                                  href={person.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Twitter className="size-4" />
                                </a>
                              )}
                            </div>

                            <div className="absolute bottom-3 left-3">
                              <Badge className="bg-background/90 backdrop-blur-sm text-xs text-foreground border border-white/20 shadow-lg">
                                Speaker
                              </Badge>
                            </div>
                          </div>

                          <div className="p-4 space-y-1">
                            <h3 className="font-semibold text-lg leading-tight">
                              {person.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {person.role} · {person.company}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Judges Section */}
              <div className="mb-16">
                <Reveal>
                  <h2 className="text-2xl font-bold mb-6">Judges</h2>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {judges.map((person, i) => (
                    <Reveal key={person.name} delay={i * 30}>
                      <Card className="group overflow-hidden border border-border/50 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-md hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative w-full aspect-square overflow-hidden">
                            <Avatar className="w-full h-full rounded-none">
                              <AvatarImage 
                                src={person.image} 
                                alt={person.name}
                                className="object-cover"
                              />
                              <AvatarFallback className="text-2xl bg-muted">
                                {person.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              {person.linkedin && (
                                <a
                                  href={person.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Linkedin className="size-4" />
                                </a>
                              )}
                              {person.twitter && (
                                <a
                                  href={person.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Twitter className="size-4" />
                                </a>
                              )}
                            </div>

                            <div className="absolute bottom-3 left-3">
                              <Badge className="bg-background/90 backdrop-blur-sm text-xs text-foreground border border-white/20 shadow-lg">
                                Judge
                              </Badge>
                            </div>
                          </div>

                          <div className="p-4 space-y-1">
                            <h3 className="font-semibold text-lg leading-tight">
                              {person.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {person.role} · {person.company}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Organizing Team Section */}
              <div className="mb-16">
                <Reveal>
                  <h2 className="text-2xl font-bold mb-6">Organizing Team</h2>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {organizingTeam.map((person, i) => (
                    <Reveal key={person.name} delay={i * 30}>
                      <Card className="group overflow-hidden border border-border/50 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-md hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative w-full aspect-square overflow-hidden">
                            <Avatar className="w-full h-full rounded-none">
                              <AvatarImage 
                                src={person.image} 
                                alt={person.name}
                                className="object-cover"
                              />
                              <AvatarFallback className="text-2xl bg-muted">
                                {person.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              {person.linkedin && (
                                <a
                                  href={person.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Linkedin className="size-4" />
                                </a>
                              )}
                            </div>

                            <div className="absolute bottom-3 left-3">
                              <Badge className="bg-background/90 backdrop-blur-sm text-xs text-foreground border border-white/20 shadow-lg">
                                Organizer
                              </Badge>
                            </div>
                          </div>

                          <div className="p-4 space-y-1">
                            <h3 className="font-semibold text-lg leading-tight">
                              {person.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {person.role} · {person.company}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Volunteers Section */}
              <div className="mb-16">
                <Reveal>
                  <h2 className="text-2xl font-bold mb-6">Volunteers</h2>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {volunteers.map((person, i) => (
                    <Reveal key={person.name} delay={i * 30}>
                      <Card className="group overflow-hidden border border-border/50 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-md hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative w-full aspect-square overflow-hidden">
                            <Avatar className="w-full h-full rounded-none">
                              <AvatarImage 
                                src={person.image} 
                                alt={person.name}
                                className="object-cover"
                              />
                              <AvatarFallback className="text-2xl bg-muted">
                                {person.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              {person.linkedin && (
                                <a
                                  href={person.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Linkedin className="size-4" />
                                </a>
                              )}
                            </div>

                            <div className="absolute bottom-3 left-3">
                              <Badge className="bg-background/90 backdrop-blur-sm text-xs text-foreground border border-white/20 shadow-lg">
                                Volunteer
                              </Badge>
                            </div>
                          </div>

                          <div className="p-4 space-y-1">
                            <h3 className="font-semibold text-lg leading-tight">
                              {person.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {person.role} · {person.company}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Filtered View */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredPeople.map((person, i) => (
                <Reveal key={person.name} delay={i * 30}>
                  <Card className="group overflow-hidden border border-border/50 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-md hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative w-full aspect-square overflow-hidden">
                        <Avatar className="w-full h-full rounded-none">
                          <AvatarImage 
                            src={person.image} 
                            alt={person.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="text-2xl bg-muted">
                            {person.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {person.linkedin && (
                            <a
                              href={person.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin className="size-4" />
                            </a>
                          )}
                          {person.twitter && (
                            <a
                              href={person.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Twitter className="size-4" />
                            </a>
                          )}
                        </div>

                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-background/90 backdrop-blur-sm text-xs text-foreground border border-white/20 shadow-lg">
                            {person.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-4 space-y-1">
                        <h3 className="font-semibold text-lg leading-tight">
                          {person.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {person.role} · {person.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          )}

          {filteredPeople.length === 0 && selectedCategory !== "All" && (
            <Reveal>
              <div className="text-center py-16">
                <Users className="size-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground text-lg">
                  No results found matching your criteria.
                </p>
              </div>
            </Reveal>
          )}
        </Container>
      </PageSection>

      <div className="absolute right-6 top-10">
        <OrnamentRings className="h-64 w-64" />
      </div>
      <Footer />
    </main>
  )
}
