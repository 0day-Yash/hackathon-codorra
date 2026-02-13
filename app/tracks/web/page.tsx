"use client"

import { Navbar, Footer } from "@/components/navigation"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { Globe, Code2, Rocket, Cpu } from "lucide-react"

export default function WebTrackPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Web Development"
                description="Building the future of the open web with scalable, high-performance applications."
            />
            <PageSection>
                <Container className="max-w-4xl">
                    <Reveal className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-12 text-right">
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-center order-2 md:order-1">
                                <Globe className="size-32 text-white/20 animate-spin-slow" />
                            </div>
                            <div className="space-y-6 order-1 md:order-2">
                                <h2 className="text-3xl font-bold italic tracking-tight">Overview</h2>
                                <p className="text-muted-foreground leading-relaxed text-right">
                                    The web is the ultimate platform for reach and accessibility. This track focuses on next-gen frameworks, scalable SaaS architectures, and innovative web experiences that push the boundaries of what a browser can do.
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                { icon: Code2, t: "Modern Frameworks", d: "Using Next.js, Remix, or Astro to build lightning-fast applications." },
                                { icon: Rocket, t: "Scalable SaaS", d: "Architecting multi-tenant systems with robust backend integrations." },
                                { icon: Cpu, t: "Edge Computing", d: "Deploying logic closer to users for ultra-low latency experiences." }
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
                                    "Next-gen SaaS Platforms",
                                    "E-commerce & Fintech Solutions",
                                    "Web3 & Decentralized Apps (dApps)",
                                    "DevTools & DX Enhancements",
                                    "Accessibility & Inclusive Design",
                                    "Progressive Web Apps (PWAs)"
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
                                    { t: "Scalability", d: "How well is the application architected for growth?" },
                                    { t: "Web Performance", d: "Loading speeds, Core Web Vitals, and overall responsiveness." },
                                    { t: "Creative Tooling", d: "Use of modern web APIs and innovative integration of services." },
                                    { t: "Developer Experience", d: "Cleanliness of the codebase and documentation." }
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
