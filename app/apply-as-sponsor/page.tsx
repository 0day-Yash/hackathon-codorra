"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { OrnamentRings } from "@/components/ornament-rings"
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react"

export default function ApplyAsSponsorPage() {
    const infoRequired = [
        "Company / Organization Name",
        "Primary Goal (Hiring, Brand Awareness, API Adoption, etc.)",
        "Estimated Budget or Description of In-Kind Support",
        "Primary Contact Information"
    ]

    return (
        <main>
            <Navbar />
            <PageHeader
                title="Apply as a Sponsor"
                description="Partner with CODORRA 2026 to support the cybersecurity ecosystem and connect with top talent."
            />

            <PageSection>
                <Container className="max-w-4xl">
                    <div className="grid gap-8 md:grid-cols-2">
                        <Reveal>
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
                                    <p className="text-muted-foreground mb-4">
                                        To ensure the best experience for our partners, we provide custom quotes and tailored benefit packages for all sponsors.
                                    </p>
                                    <p className="text-muted-foreground">
                                        Please send an email to <span className="text-white font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">codorra@yahoo.com</span> with the following details, and our team will get back to you within 48 hours to discuss a custom arrangement.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-semibold text-foreground/90">Information to Include:</h3>
                                    <ul className="space-y-2">
                                        {infoRequired.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <div className="size-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button asChild size="lg" className="w-full bg-brand-gradient hover:opacity-90 transition-opacity border-none h-11 text-white font-bold">
                                    <a href="mailto:codorra@yahoo.com?subject=Sponsorship%20Inquiry%20-%20CODORRA%202026">
                                        <Mail className="mr-2 size-4" />
                                        Mail us to Apply
                                        <ArrowRight className="ml-2 size-4" />
                                    </a>
                                </Button>
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <Card className="glass h-full">
                                <CardHeader>
                                    <CardTitle>Why Partner with Us?</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-white/90">Custom Tailored Benefits</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            We don't believe in one-size-fits-all sponsorship. Whether you want to recruit talent, promote your new API, or build brand trust, we'll design a package that hits your KPIs.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-white/90">Direct Talent Pipeline</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            CODORRA attracts the brightest minds in security. As a sponsor, you get direct access to participants' projects and resumes.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-white/90">Meme-Tier to Enterprise</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            From serious defense tech to certified "tomfoolery", your brand will be associated with creativity and technical depth.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Reveal>
                    </div>
                </Container>
            </PageSection>

            <div className="absolute right-6 top-10 pointer-events-none">
                <OrnamentRings className="h-64 w-64" />
            </div>
            <Footer />
        </main>
    )
}
