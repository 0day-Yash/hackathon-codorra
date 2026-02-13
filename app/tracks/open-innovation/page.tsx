"use client"

import { Navbar, Footer } from "@/components/navigation"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { Banknote, Rocket, Globe, Lightbulb } from "lucide-react"

export default function OpenInnovationPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Open Innovation"
                description="For the projects that defy categorization."
            />
            <PageSection>
                <Container className="max-w-4xl">
                    <Reveal className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold italic tracking-tight">The Wildcard Track</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Have a revolutionary idea that doesn't fit into AI, Web, or Mobile specifically? This is your home. Whether it's humanitarian tech, a new way of visualizing data, or cross-domain innovation—we value impact above all else.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                                <div className="glass p-12 rounded-[50px] border-white/10 relative z-10 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <Rocket className="size-32 text-accent" />
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                { icon: Globe, t: "Global Scale", d: "Projects that can impact millions of users." },
                                { icon: Banknote, t: "Fintech", d: "Securing the future of money and transactions." },
                                { icon: Lightbulb, t: "Novelty", d: "Doing something that has never been done before." }
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

                        <div className="space-y-8 py-12 border-t border-white/5">
                            <h2 className="text-3xl font-bold italic text-center">Anything goes, as long as it's built to last.</h2>
                            <p className="text-center text-muted-foreground max-w-xl mx-auto">
                                We're looking for projects that demonstrate vision, technical depth, and a clear understanding of the problem they are solving.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold italic tracking-tight">Judging Criteria</h2>
                            <div className="grid gap-4">
                                {[
                                    { t: "Vision & Impact", d: "How significant is the problem being solved? What is the potential impact of the solution?" },
                                    { t: "Technical Execution", d: "How well is the idea translated into a working prototype? Is the implementation robust?" },
                                    { t: "Creativity", d: "Does the project show original thinking and a fresh perspective on the problem?" },
                                    { t: "Market Feasibility", d: "Does the project have a clear path to becoming a real-world product or tool?" }
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
