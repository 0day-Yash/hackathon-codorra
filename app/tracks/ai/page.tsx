"use client"

import { Navbar, Footer } from "@/components/navigation"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { BrainCircuit, Sparkles, MessageSquare, Box } from "lucide-react"

export default function AITrackPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Artificial Intelligence"
                description="Harnessing the power of AI to solve complex problems and create intelligent applications."
            />
            <PageSection>
                <Container className="max-w-4xl">
                    <Reveal className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold italic tracking-tight">Overview</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    AI is transforming every industry. This track is for builders creating applications that leverage Large Language Models (LLMs), Generative AI, or traditional Machine Learning to improve productivity, creativity, and decision-making.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-center">
                                <BrainCircuit className="size-32 text-primary animate-pulse" />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                { icon: Sparkles, t: "Generative AI", d: "Content generation, creative tools, and synthesis engines." },
                                { icon: MessageSquare, t: "NLP & agents", d: "Sophisticated chatbots, automated reasoning, and agentic workflows." },
                                { icon: Box, t: "ML Pipelines", d: "Custom model training, fine-tuning, and robust deployment pipelines." }
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
                                    "AI-Powered Productivity Tools",
                                    "Generative Media (Images, Video, Music)",
                                    "Custom LLM Fine-tuning & RAG",
                                    "AI for Social Good & Sustainability",
                                    "Explainable AI & Safety Tools",
                                    "MLOps & Data Visualization"
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
                                    { t: "Algorithmic Depth", d: "Beyond simple API calls—how is the AI truly integrated and optimized?" },
                                    { t: "Problem/Market Fit", d: "Does the AI solve a real pain point or create significant value?" },
                                    { t: "Creativity", d: "Novel use cases or unique ways to prompt and chain models." },
                                    { t: "Ethics & Reliability", d: "How does the project handle bias, hallucinations, and safety?" }
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
