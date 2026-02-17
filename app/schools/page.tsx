"use client"

import type React from "react"
import { useState } from "react"
import { Navbar, Footer } from "@/components/navigation"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { SectionHeader } from "@/components/section-header"
import { Reveal } from "@/components/fx/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { OrnamentRings } from "@/components/ornament-rings"
import { School, Users, GraduationCap, Building2, Send, CheckCircle2 } from "lucide-react"

export default function SchoolsPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const benefits = [
        {
            icon: GraduationCap,
            title: "Academic Excellence",
            desc: "Integrate real-world AI, Web, and Cybersecurity challenges into your curriculum."
        },
        {
            icon: Users,
            title: "Global Networking",
            desc: "Connect your students with a worldwide community of builders, mentors, and industry leads."
        },
        {
            icon: Building2,
            title: "Institutional Branding",
            desc: "Position your institution at the forefront of the global technological revolution."
        }
    ]

    const invitationPoints = [
        {
            title: "Direct Delegation",
            desc: "Register a cohort of students from your institution for priority screening and dedicated mentorship tracks."
        },
        {
            title: "Institutional Credits",
            desc: "Partner with us to provide academic credits or recognition for students participating in the 72-hour intensive."
        },
        {
            title: "Campus Ambassador Program",
            desc: "Appoint a student leader to represent Codorra 2026 on your campus and coordinate institutional efforts."
        }
    ]

    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHeader
                title="Institutional Invitation"
                description="An official invitation for Schools, Colleges, and Universities worldwide to participate in the CODORRA 2026 Global Hackathon. Empower your students with a global stage for innovation."
            />

            <PageSection>
                <Container className="max-w-4xl mx-auto text-center mb-16">
                    <Reveal>
                        <div className="p-8 md:p-12 border border-brand-gradient/20 glass rounded-[2rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
                                <OrnamentRings className="h-48 w-48" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter mb-6">The Official Call for Talent</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                As the digital landscape evolves, so must our academic institutions. CODORRA 2026 serves as a catalyst, bridging the gap between theoretical knowledge and real-world application. We invite your leadership to endorse and facilitate student participation in this 72-hour intensive.
                            </p>
                        </div>
                    </Reveal>
                </Container>

                <Container className="grid lg:grid-cols-2 gap-16 items-start">
                    <Reveal className="space-y-8">
                        <SectionHeader
                            eyebrow="The Invitation"
                            title="A Global Stage for Your Students"
                            desc="We cordially invite educational institutions to register their presence at Codorra 2026. This is more than a competition; it's a 72-hour journey of innovation, learning, and cross-border collaboration."
                            className="text-left"
                        />

                        <div className="grid gap-6">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl glass border-white/5 hover:border-brand-gradient/20 transition-colors">
                                    <div className="bg-brand-gradient text-white p-3 rounded-xl shrink-0 h-fit shadow-lg shadow-primary/20">
                                        <benefit.icon className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 italic text-white/90">{benefit.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/5 space-y-6">
                            <h3 className="text-xl font-bold italic">Institutional Tracks</h3>
                            <div className="grid gap-4">
                                {invitationPoints.map((point, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1.5 size-1.5 rounded-full bg-brand-gradient shrink-0" />
                                        <div>
                                            <span className="text-white font-semibold text-sm">{point.title}:</span>
                                            <span className="text-muted-foreground text-sm ml-2">{point.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <Card className="glass border-brand-gradient/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-brand-gradient/5 pointer-events-none" />
                            <CardHeader className="relative z-10">
                                <CardTitle className="text-2xl font-bold italic tracking-tight">Institutional Inquiry & Request</CardTitle>
                                <p className="text-sm text-muted-foreground font-medium">Request an official Invitation Pack and Institutional Registration Codes.</p>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                {submitted ? (
                                    <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                        <div className="bg-green-500/20 text-green-400 p-4 rounded-full w-fit mx-auto shadow-lg shadow-green-500/10">
                                            <CheckCircle2 className="size-12" />
                                        </div>
                                        <h4 className="text-2xl font-bold italic">Request Received</h4>
                                        <p className="text-muted-foreground max-w-xs mx-auto">Our Institutional Relations team will transmit the invitation pack within 48 hours.</p>
                                        <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-full mt-4 border-white/10">
                                            Submit Another Request
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="institution-name" className="text-xs uppercase tracking-widest text-muted-foreground">Institution Name</Label>
                                                <Input id="institution-name" placeholder="e.g. Oxford University" required className="bg-white/5 border-white/10 h-11" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="location" className="text-xs uppercase tracking-widest text-muted-foreground">City / Country</Label>
                                                <Input id="location" placeholder="e.g. New York, USA" required className="bg-white/5 border-white/10 h-11" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="type" className="text-xs uppercase tracking-widest text-muted-foreground">Institution Classification</Label>
                                            <select id="type" className="flex h-11 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none text-foreground" required>
                                                <option value="" disabled selected>Select classification...</option>
                                                <option value="university" className="bg-neutral-900">University / College</option>
                                                <option value="high-school" className="bg-neutral-900">High School</option>
                                                <option value="coding-bootcamp" className="bg-neutral-900">Vocational / Bootcamp</option>
                                                <option value="other" className="bg-neutral-900">Other Institution</option>
                                            </select>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="contact-person" className="text-xs uppercase tracking-widest text-muted-foreground">Official Representative</Label>
                                                <Input id="contact-person" placeholder="Full Name & Title" required className="bg-white/5 border-white/10 h-11" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Official Email</Label>
                                                <Input id="email" type="email" placeholder="dean@university.edu" required className="bg-white/5 border-white/10 h-11" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Partnership Intent</Label>
                                            <Textarea id="message" placeholder="Briefly describe your interest—e.g., sending a student delegation, hosting a local chapter, or faculty involvement..." className="bg-white/5 border-white/10 min-h-[120px]" />
                                        </div>
                                        <Button type="submit" className="w-full rounded-full bg-brand-gradient border-none h-14 text-white font-bold text-lg shadow-xl shadow-primary/20 hover:opacity-90 transition-all hover:scale-[1.02]">
                                            Request Invitation Pack <Send className="ml-2 size-4" />
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </Reveal>
                </Container>
            </PageSection>

            <div className="absolute left-[-10%] bottom-[10%] opacity-20 pointer-events-none">
                <OrnamentRings hue="primary" className="h-[400px] w-[400px]" />
            </div>

            <Footer />
        </main>
    )
}
