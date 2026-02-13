"use client"

import { Navbar, Footer } from "@/components/navigation"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { Smartphone, Layout, Zap, Layers } from "lucide-react"

export default function MobileTrackPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Mobile Development"
                description="Crafting the next generation of mobile experiences for iOS, Android, and beyond."
            />
            <PageSection>
                <Container className="max-w-4xl">
                    <Reveal className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold italic tracking-tight">Overview</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Mobile devices are the primary way the world interacts with digital services. This track focuses on building high-performance, user-centric mobile applications and tools that push the boundaries of what's possible on handheld devices.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-center">
                                <Smartphone className="size-32 text-white/20 animate-bounce-slow" />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                { icon: Layout, t: "UI/UX Innovation", d: "Creating stunning, intuitive interfaces and smooth user journeys." },
                                { icon: Zap, t: "Performance", d: "Optimizing apps for speed, battery life, and offline capabilities." },
                                { icon: Layers, t: "Cross-Platform", d: "Leveraging Flutter, React Native, or Kotlin Multiplatform for broad reach." }
                            ].map((item, i) => (
                                <div key={i} className="glass p-6 rounded-2xl border-white/10 space-y-4">
                                    <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary">
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
                                    "Consumer iOS & Android Apps",
                                    "Enterprise Mobility Solutions",
                                    "Mobile-First SaaS Platforms",
                                    "Innovative Mobile UI Components",
                                    "Mobile Security & Privacy Tools",
                                    "AR/VR Mobile Experiences"
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
                                    { t: "User Experience", d: "How intuitive and polished is the app? Does it feel like a premium product?" },
                                    { t: "Technical Execution", d: "Is the code well-structured? Does it follow mobile development best practices?" },
                                    { t: "Utility & Impact", d: "Does the app solve a real problem for users effectively?" },
                                    { t: "Design Aesthetics", d: "The visual appeal and consistency of the interface." }
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
