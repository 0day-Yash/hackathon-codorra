"use client"

import { Navbar, Footer } from "@/components/navigation"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { BrainCircuit, ShieldCheck, Target, Zap } from "lucide-react"

export default function AISecurityPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="AI + Security"
                description="Building defensive AI systems and securing the future of machine learning."
            />
            <PageSection>
                <Container className="max-w-4xl">
                    <Reveal className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold italic tracking-tight">Overview</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    As AI becomes integrated into every layer of our digital infrastructure, the need for robust security is paramount. This track focuses on the intersection of AI and Cybersecurity—both using AI to defend and securing AI itself from adversarial attacks.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-center">
                                <BrainCircuit className="size-32 text-white/20 animate-pulse" />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                { icon: ShieldCheck, t: "Defensive AI", d: "Systems that detect and respond to threats in real-time." },
                                { icon: Target, t: "Model Robustness", d: "Securing LLMs and ML models against prompt injection and data poisoning." },
                                { icon: Zap, t: "Automation", d: "Using AI to automate tedious security auditing and compliance tasks." }
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
                            <h2 className="text-2xl font-bold">What we're looking for:</h2>
                            <ul className="grid gap-4">
                                {[
                                    "Practical tools that solve real security problems using AI.",
                                    "Novel research into LLM security and jailbreaking prevention.",
                                    "Efficient monitoring systems for large-scale infrastructure.",
                                    "Seamless integration into existing developer workflows."
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
                                    { t: "Technical Sophistication", d: "How complex and well-engineered is the AI implementation? Does it move beyond simple API wrappers?" },
                                    { t: "Security Impact", d: "Does the project significantly improve the security posture of a system or model?" },
                                    { t: "Novelty", d: "How unique is the approach? Does it solve a problem in a way that hasn't been done before?" },
                                    { t: "Usability", d: "Can a security professional or developer actually use this tool in their daily work?" }
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
