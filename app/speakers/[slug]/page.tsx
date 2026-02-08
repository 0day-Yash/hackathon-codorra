"use client"

import type React from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PageSection, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { OrnamentRings } from "@/components/ornament-rings"
import {
    Linkedin,
    Twitter,
    ArrowLeft,
    Briefcase,
    GraduationCap,
    Globe,
    ExternalLink,
    Users,
    Mail,
    Phone,
} from "lucide-react"
import { allPeople } from "@/config/team-data"

export default function PersonProfilePage() {
    const params = useParams()
    const router = useRouter()
    const slug = params.slug as string

    const person = allPeople.find((p) => p.slug === slug)

    if (!person) {
        return (
            <main>
                <Navbar />
                <PageSection>
                    <Container>
                        <div className="text-center py-20">
                            <h1 className="text-4xl font-bold mb-4">Profile Not Found</h1>
                            <p className="text-muted-foreground mb-8">
                                The person you're looking for doesn't seem to exist.
                            </p>
                            <Button asChild>
                                <Link href="/speakers">Back to Team</Link>
                            </Button>
                        </div>
                    </Container>
                </PageSection>
                <Footer />
            </main>
        )
    }

    return (
        <main>
            <Navbar />

            <PageSection withCursor={false}>
                <Container>
                    <Reveal>
                        <Button
                            variant="ghost"
                            className="mb-8 hover:bg-white/5"
                            onClick={() => router.back()}
                        >
                            <ArrowLeft className="mr-2 size-4" />
                            Back to Team
                        </Button>
                    </Reveal>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Sidebar: Image & Quick Links */}
                        <div className="lg:col-span-4 space-y-8">
                            <Reveal delay={100}>
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2.5rem] blur-2xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 opacity-50" />
                                    <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl p-6 bg-white/5 backdrop-blur-sm">
                                        <Avatar className="w-full h-full rounded-2xl border border-white/10 shadow-inner overflow-hidden ring-1 ring-white/20">
                                            <AvatarImage
                                                src={person.image}
                                                alt={person.name}
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <AvatarFallback className="text-6xl bg-muted">
                                                {person.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={200}>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-3">
                                        {person.linkedin && (
                                            <Button variant="outline" className="flex-1 min-w-[120px] rounded-xl border-white/10 bg-white/5 hover:bg-white/10" asChild>
                                                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <Linkedin className="mr-2 size-4 text-[#0A66C2]" />
                                                    LinkedIn
                                                </a>
                                            </Button>
                                        )}
                                        {person.twitter && (
                                            <Button variant="outline" className="flex-1 min-w-[120px] rounded-xl border-white/10 bg-white/5 hover:bg-white/10" asChild>
                                                <a href={person.twitter} target="_blank" rel="noopener noreferrer">
                                                    <Twitter className="mr-2 size-4 text-[#1DA1F2]" />
                                                    Twitter
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={300}>
                                <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm space-y-4">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick Info</h4>
                                    <div className="space-y-3">
                                        {person.hackathonRole && (
                                            <div className="flex items-center gap-3 text-sm">
                                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                    <Users className="size-4" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-primary">Hackathon Assignment</p>
                                                    <p className="text-muted-foreground">{person.hackathonRole}</p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                                <Briefcase className="size-4" />
                                            </div>
                                            <div>
                                                <p className="font-medium">Original Role</p>
                                                <p className="text-muted-foreground">{person.role} at {person.company}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="p-2 rounded-lg bg-white/10 text-white">
                                                <Globe className="size-4" />
                                            </div>
                                            <div>
                                                <p className="font-medium">Category</p>
                                                <p className="text-muted-foreground">{person.category}</p>
                                            </div>
                                        </div>
                                        {person.email && (
                                            <div className="flex items-center gap-3 text-sm">
                                                <div className="p-2 rounded-lg bg-white/10 text-white">
                                                    <Mail className="size-4" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">Email</p>
                                                    <p className="text-muted-foreground text-[10px] sm:text-xs break-all">{person.email}</p>
                                                </div>
                                            </div>
                                        )}
                                        {person.contact && (
                                            <div className="flex items-center gap-3 text-sm">
                                                <div className="p-2 rounded-lg bg-white/10 text-white">
                                                    <Phone className="size-4" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">Contact</p>
                                                    <p className="text-muted-foreground text-xs">{person.contact}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Main Content: Bio & Details */}
                        <div className="lg:col-span-8 space-y-12">
                            <Reveal delay={200}>
                                <div className="space-y-4">
                                    <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary rounded-full px-4 py-1">
                                        {person.category}
                                    </Badge>
                                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                        {person.name}
                                    </h1>
                                    <p className="text-xl md:text-2xl text-muted-foreground font-medium flex flex-wrap items-center gap-x-3">
                                        {person.hackathonRole ? (
                                            <>
                                                <span className="text-primary">{person.hackathonRole}</span>
                                                <span className="hidden md:inline text-muted-foreground/30">|</span>
                                                <span className="text-lg md:text-xl opacity-80">{person.role} at {person.company}</span>
                                            </>
                                        ) : (
                                            <>{person.role} at <span className="text-foreground">{person.company}</span></>
                                        )}
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={300}>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold flex items-center gap-2">
                                        About
                                    </h3>
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            {person.bio || "No biography available at this time."}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={400}>
                                <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <OrnamentRings className="h-32 w-32" />
                                    </div>
                                    <div className="relative z-10 space-y-6">
                                        <h3 className="text-xl font-semibold">Interested in connecting?</h3>
                                        <p className="text-muted-foreground">
                                            Join us at CODORRA to learn from {person.name.split(' ')[0]} and other industry experts who are shaping the future of security.
                                        </p>
                                        <div className="flex flex-wrap gap-4 pt-2">
                                            <Button size="lg" className="rounded-xl px-8" asChild>
                                                <Link href="/apply">Register Now</Link>
                                            </Button>
                                            <Button size="lg" variant="outline" className="rounded-xl px-8 border-white/10 hover:bg-white/10" asChild>
                                                <a href="/schedule">View Schedule <ExternalLink className="ml-2 size-4" /></a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </PageSection>

            <div className="absolute right-0 top-1/4 -z-10 opacity-20">
                <OrnamentRings className="h-96 w-96 translate-x-1/2" />
            </div>

            <Footer />
        </main>
    )
}
