"use client"

import { Navbar, Footer } from "@/components/navigation"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { Sparkles, Ghost, Laugh, Bomb } from "lucide-react"

export default function TomfooleryPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Tomfoolery"
                description="The unconventional, the absurd, and the brilliantly useless."
            />
            <PageSection>
                <Container className="max-w-4xl">
                    <Reveal className="space-y-12 text-center">
                        <div className="space-y-6 max-w-2xl mx-auto">
                            <div className="size-24 rounded-full bg-brand-gradient mx-auto flex items-center justify-center animate-bounce">
                                <Ghost className="size-12 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold italic tracking-tight">Stupid concept ≠ stupid execution.</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                This track is for the experiments that make us laugh but leave us impressed by the engineering behind them. We want to see over-engineered solutions to simple problems, funny hacking tools, and creative digital pranks.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 py-12">
                            <div className="glass p-8 rounded-3xl border-white/10 space-y-4">
                                <Laugh className="size-8 text-primary mx-auto" />
                                <h3 className="text-xl font-bold">Creative Pranks</h3>
                                <p className="text-muted-foreground">Digital interactions that are harmless but hilarious. Think 'screaming' CLI tools or browser extensions that swap every image with a cat.</p>
                            </div>
                            <div className="glass p-8 rounded-3xl border-white/10 space-y-4">
                                <Bomb className="size-8 text-accent mx-auto" />
                                <h3 className="text-xl font-bold">Over-Engineering</h3>
                                <p className="text-muted-foreground">A 10,000 line solution for a 'Hello World' app, or a hardware-based 'Useless Box' for the digital age.</p>
                            </div>
                        </div>

                        <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
                            <h3 className="text-xl font-bold italic mb-6">Guiding Principle:</h3>
                            <p className="text-2xl font-extrabold tracking-tighter italic text-white/40 uppercase">
                                "If it's stupid and it works, it's still stupid—but it's Tomfoolery."
                            </p>
                        </div>

                        <div className="space-y-8 text-left">
                            <h2 className="text-3xl font-bold italic tracking-tight">Judging Criteria</h2>
                            <div className="grid gap-4">
                                {[
                                    { t: "The Laugh Factor", d: "Does the project elicit a genuine laugh or an 'I can't believe they built this' reaction?" },
                                    { t: "Technical Irony", d: "How much effort was put into building something completely unnecessary?" },
                                    { t: "Craftsmanship", d: "Even if it's useless, is it well-made? Is the code surprisingly good for a silly project?" },
                                    { t: "Safely Stupid", d: "Is the prank or tool harmless? We want fun, not destructive hacking." }
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
