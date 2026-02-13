"use client"

import { Navbar, Footer } from "@/components/navigation"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { Shield, Lock, Search, Eye } from "lucide-react"

export default function CybersecurityTrackPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Cybersecurity"
                description="Defending digital assets and securing the future of the internet."
            />
            <PageSection>
                <Container className="max-w-4xl">
                    <Reveal className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-12 text-right">
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-center order-2 md:order-1">
                                <Shield className="size-32 text-accent animate-pulse" />
                            </div>
                            <div className="space-y-6 order-1 md:order-2">
                                <h2 className="text-3xl font-bold italic tracking-tight">Overview</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    In an era of increasing digital threats, cybersecurity is the bedrock of trust. This track focuses on building tools that detect, prevent, and respond to threats across applications, networks, and infrastructure.
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                { icon: Lock, t: "AppSec", d: "Securing applications through better code analysis and runtime protection." },
                                { icon: Search, t: "Threat Intel", d: "Tracking and analyzing adversary behavior to stay one step ahead." },
                                { icon: Eye, t: "Infrastructure", d: "Hardening cloud environments and critical network pipes." }
                            ].map((item, i) => (
                                <div key={i} className="glass p-6 rounded-2xl border-white/10 space-y-4">
                                    <div className="p-2 w-fit rounded-lg bg-accent/10 text-accent">
                                        <item.icon className="size-6" />
                                    </div>
                                    <h3 className="font-bold">{item.t}</h3>
                                    <p className="text-sm text-muted-foreground">{item.d}</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 bg-brand-gradient/5 p-8 rounded-3xl border border-white/5">
                            <h2 className="text-2xl font-bold">Sub-tracks & Themes:</h2>
                            <ul className="grid gap-4 sm:grid-cols-2">
                                {[
                                    "Network & Infrastructure Security",
                                    "Application Security (AppSec) Tools",
                                    "Zero Trust Architectures",
                                    "Cryptography & Privacy-Preserving Tech",
                                    "Bug Bounty & Vulnerability Research",
                                    "IDAM & Access Management"
                                ].map((note, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1.5 size-1.5 rounded-full bg-brand-gradient shrink-0" />
                                        <span className="text-muted-foreground">{note}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold italic tracking-tight">Judging Criteria</h2>
                            <div className="grid gap-4">
                                {[
                                    { t: "Efficacy", d: "How effectively does the solution mitigate the target threat?" },
                                    { t: "Practicality", d: "Is it deployable in a production environment without major friction?" },
                                    { t: "Technical Depth", d: "Understanding of underlying exploit vectors or security concepts." },
                                    { t: "Real-world Impact", d: "The potential to secure a significant number of users or systems." }
                                ].map((c, i) => (
                                    <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="text-2xl font-black text-white/10">{i + 1}</div>
                                        <div className="space-y-1">
                                            <h3 className="font-bold">{c.t}</h3>
                                            <p className="text-sm text-muted-foreground">{c.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </Container>
            </PageSection>
            <Footer />
        </main>
    )
}
