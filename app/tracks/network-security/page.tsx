"use client"

import { Navbar, Footer } from "@/components/navigation"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { Shield, Network, Lock, Server } from "lucide-react"

export default function NetworkSecurityPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Network Security"
                description="Securing the backbone of the internet and beyond."
            />
            <PageSection>
                <Container className="max-w-4xl">
                    <Reveal className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-12 text-right">
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-center order-2 md:order-1">
                                <Network className="size-32 text-white/20" />
                            </div>
                            <div className="space-y-6 order-1 md:order-2">
                                <h2 className="text-3xl font-bold italic tracking-tight">Focus Areas</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Network security is the first line of defense. This track invites participants to build software that hardens infrastructure, optimizes protocol security, and provides visibility into network traffic at scale.
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                { icon: Lock, t: "Zero Trust", d: "Implementing 'never trust, always verify' architectures." },
                                { icon: Server, t: "Infrastructure", d: "Tools for securing cloud workloads and containerized systems." },
                                { icon: Shield, t: "Protocol Hardening", d: "Improvements to TLS, DNS, and other core internet protocols." }
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

                        <div className="space-y-6 border-t border-white/5 pt-12">
                            <h2 className="text-2xl font-bold">Submission Ideas:</h2>
                            <div className="grid gap-4 md:grid-cols-2">
                                {[
                                    "Custom IDS/IPS systems for niche protocols.",
                                    "Tools for automated network topology mapping and risk assessment.",
                                    "Privacy-preserving network monitoring solutions.",
                                    "Blockchain-based decentralized identity for network access.",
                                    "Hardened VPN/Overlay network implementations.",
                                    "IoT device security managers."
                                ].map((idea, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="size-2 rounded-full bg-accent flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{idea}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold italic tracking-tight">Judging Criteria</h2>
                            <div className="grid gap-4">
                                {[
                                    { t: "Practicality", d: "Is the tool deployable in a real-world network environment? Does it handle scale?" },
                                    { t: "Protocol Depth", d: "Does the project demonstrate a deep understanding of network protocols and their vulnerabilities?" },
                                    { t: "Innovation", d: "Does it offer a new way to solve old networking problems or tackle emerging ones?" },
                                    { t: "Reliability", d: "How robust is the code? Does it fail gracefully under network stress?" }
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
