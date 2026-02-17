"use client"

import type React from "react"
import TextPressure from "@/components/text-pressure"
import TargetCursor from "@/components/target-cursor"

import { Navbar, Footer } from "@/components/navigation"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ScheduleGrid from "@/components/schedule/schedule-grid"
import {
  MapPin,
  Clock,
  BookOpen,
  ArrowRight,
  Building2,
  Users,
  GitBranch,
  Code,
  MessageSquare,
  ShieldCheck,
  Trophy,
  Zap,
  Activity,
  BadgeCheck,
  Shield,
  BrainCircuit,
  Banknote,
  Sparkles,
  Smartphone,
  Globe,
  Monitor,
} from "lucide-react"
import Lightning from "@/components/lightning"

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4", className)}>{children}</div>
}



function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="absolute inset-0 bg-grid-white opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      <div className="absolute inset-0 radial-mask" />

      <Container className="relative z-10 flex flex-col items-center text-center gap-8">
        <div className="animate-in inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs text-accent backdrop-blur-md">
          <Sparkles className="size-3.5 fill-current" />
          <span className="font-semibold tracking-wide">72-Hour Intensive</span>
          <span className="h-3 w-px bg-accent/20" />
          <span className="text-white font-medium">Fully Online</span>
        </div>

        <h1 className="animate-in [animation-delay:200ms] text-balance text-5xl font-bold tracking-tighter md:text-8xl lg:text-9xl text-gradient">
          CODORRA 2026
        </h1>

        <p className="animate-in [animation-delay:400ms] text-pretty max-w-2xl text-foreground/80 text-lg md:text-xl leading-relaxed font-medium">
          The global cybersecurity and AI marathon. 48 hours of building, 24 hours of learning from industry pioneers.
        </p>

        <div className="animate-in [animation-delay:600ms] flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full h-12 px-10 bg-white text-black hover:bg-zinc-200 transition-all font-semibold shadow-xl shadow-white/5">
            <a href="https://codorra1.devpost.com/" target="_blank" rel="noopener" className="inline-flex items-center">
              Register on Devpost <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full h-12 px-10 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all font-semibold">
            <a href="https://discord.gg/9QpwAmX4Ke" target="_blank" rel="noopener" className="inline-flex items-center">
              <MessageSquare className="mr-2 size-4" /> Join Discord
            </a>
          </Button>
        </div>
      </Container>
    </section>
  )
}

function About() {
  const features = [
    { icon: Globe, k: "Location", v: "100% Online • Global" },
    { icon: Zap, k: "Digital Hub", v: "24/7 Discord Support" },
    { icon: Users, k: "Team", v: "Teams of 2–4 Builders" },
    { icon: GitBranch, k: "Submissions", v: "Devpost + GitHub" },
    { icon: MessageSquare, k: "Community", v: "Global Networking" },
    { icon: ShieldCheck, k: "Tracks", v: "AI, Web & Security" },
  ]
  return (
    <section id="about" className="section relative border-y border-white/5 bg-zinc-950/50">
      <Container className="grid items-start gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-12">
          <SectionHeader
            eyebrow="Mission"
            title="48h Build • 24h Learning"
            desc="Codorra 2026 is a globally distributed hackathon designed for builders who want to push the boundaries of security and intelligence."
            className="max-w-3xl mb-16"
          />
        </Reveal>

        <Reveal delay={100} className="lg:col-span-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.k} className="glass border-white/5 hover:border-accent/20 p-6 flex flex-col gap-4 group transition-all">
                <div className="p-2 w-fit rounded-lg bg-accent/5 text-accent/50 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                  <feature.icon className="size-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">{feature.k}</h3>
                  <p className="text-lg font-bold text-white tracking-tight">{feature.v}</p>
                </div>
              </Card>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-4 transition-all">
          <Card className="glass border-white/5 p-8 h-full flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Trophy className="size-5 text-white/40" />
                <h3 className="text-xl font-bold tracking-tight">Judging Criteria</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: BrainCircuit, t: "Idea quality & relevance" },
                  { icon: Code, t: "Technical execution" },
                  { icon: ShieldCheck, t: "Real-world impact" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <item.icon className="size-4 text-accent/60" />
                    <span className="text-[15px] font-medium">{item.t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-sm text-foreground/70 leading-relaxed italic">
                "Building the immune system for the future of the digital world."
              </p>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  )
}

function Tracks() {
  const mainTracks = [
    { title: "Mobile", icon: Smartphone, desc: "Building next-gen iOS/Android apps, cross-platform tools, and innovative mobile experiences." },
    { title: "AI", icon: BrainCircuit, desc: "Generative AI, LLMs, machine learning models, and AI-powered productivity tooling." },
    { title: "Web", icon: Globe, desc: "Scalable SaaS, Web3/Decentralized apps, and high-performance web architectures." },
    { title: "Cybersecurity", icon: Shield, desc: "Network security, AppSec, threat intelligence, and cryptographic privacy products." },
  ]
  const openInnovation = {
    title: "Open Innovation",
    icon: Sparkles,
    desc: "Have a unique idea that doesn't fit the specific categories? The Open Innovation track is for high-impact projects across any tech domain. We value creativity, utility, and raw technical brilliance above all else.",
  }

  return (
    <section id="tracks" className="section relative border-b border-white/5">
      <Container>
        <SectionHeader
          eyebrow="Explore"
          title="Tracks"
          desc="Pick one primary track for judging; crossover projects are welcome."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {/* Featured: Open Innovation */}
          <Reveal className="md:col-span-2">
            <a href="https://codorra1.devpost.com/" target="_blank" className="block group">
              <Card className="glass relative overflow-hidden p-8 md:p-12 border-white/5 hover:border-accent/20 transition-all">
                <div className="absolute -top-24 -right-24 size-96 bg-accent/5 blur-[100px] pointer-events-none" />
                <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                  <div className="bg-white text-black p-6 rounded-2xl shadow-xl group-hover:shadow-accent/5 transition-shadow">
                    <openInnovation.icon className="size-10" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">{openInnovation.title}</h3>
                    <p className="text-lg text-white/70 leading-relaxed max-w-2xl font-medium">{openInnovation.desc}</p>
                    <div className="flex items-center gap-2 text-white/90 font-bold uppercase tracking-widest text-xs group-hover:text-accent transition-colors">
                      <span>Register to participate</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          </Reveal>

          {/* Grid: Main Tracks */}
          {mainTracks.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <a href={`/tracks/${t.title.toLowerCase().replace(/ /g, '-')}`} className="block group h-full">
                <Card className="glass h-full p-8 flex flex-col gap-6">
                  <div className="size-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/50 transition-colors group-hover:bg-white/10 group-hover:text-white">
                    <t.icon className="size-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight">{t.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                    Details <ArrowRight className="size-4" />
                  </div>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Timeline() {
  return (
    <section id="timeline" className="section relative border-b border-white/5 bg-zinc-950/50">
      <Container>
        <SectionHeader eyebrow="Flow" title="Timeline" desc="From kickoff to demo day — your journey mapped out." />
        <Reveal>
          <div className="w-full rounded-2xl border border-white/5 overflow-hidden bg-black shadow-2xl">
            <div className="overflow-x-auto">
              <ScheduleGrid />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function Sponsors() {
  return (
    <section id="sponsors" className="section relative border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <Reveal className="flex-1 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gradient">
                Partner with Codorra
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Support the next generation of engineers. Gain access to global talent and showcase your platform to 1000+ builders.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full h-12 px-8 bg-white text-black hover:bg-zinc-200 transition-all font-semibold" asChild>
                <a href="/apply-as-sponsor">Become a Partner</a>
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full h-12 px-8 text-muted-foreground hover:text-white transition-all font-semibold" asChild>
                <a href="/sponsors">View all sponsors</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={200} className="w-full max-w-md">
            <Card className="glass border-white/10 p-10 flex flex-col items-center text-center gap-6">
              <div className="size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <ShieldCheck className="size-8 text-white/50" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight">Ecosystem Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Join our mission to secure the future. Reach out to our team at codorra@yahoo.com
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: "Who can participate?", a: "Open to students, professionals, and independent builders. Team size is 2–4." },
    { q: "What's the theme?", a: "Broad focus on Mobile, AI, Web, and Cybersecurity; open innovation is highly encouraged." },
    { q: "Where will it happen?", a: "The hackathon is 100% online. You can participate from anywhere in the world." },
    { q: "How are submissions handled?", a: "Submit your project through Devpost with a GitHub link and a video demo." },
    { q: "Judging criteria?", a: "Idea quality, technical execution, presentation, and impact." },
    { q: "Fees?", a: "The hackathon is completely free for everyone. No hidden costs." },
  ]
  return (
    <section id="faq" className="section border-b border-white/5 bg-zinc-950/50">
      <Container>
        <SectionHeader eyebrow="Support" title="FAQ" align="center" />
        <div className="mt-12 mx-auto max-w-3xl">
          <div className="rounded-2xl border border-white/5 bg-black/50 p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/5 last:border-0 px-4">
                  <AccordionTrigger className="text-left font-semibold text-foreground/90 py-4 hover:no-underline hover:text-white transition-colors">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  )
}

function RegisterCTA() {
  return (
    <section id="register" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      <div className="absolute inset-0 radial-mask" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl rounded-[3rem] border border-white/10 bg-zinc-900/50 p-12 md:p-24 text-center">
          <Reveal className="space-y-8">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-gradient">
              Ready to build?
            </h2>
            <p className="mx-auto max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join thousands of builders in the world's most intensive 72-hour marathon. Free forever.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="rounded-full h-12 px-10 bg-white text-black hover:bg-zinc-200 transition-all font-semibold shadow-xl shadow-white/10 w-full sm:w-auto">
                <a href="https://codorra1.devpost.com/" target="_blank" rel="noopener">Register on Devpost</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-10 border-white/10 bg-white/5 hover:bg-white/10 transition-all font-semibold w-full sm:w-auto">
                <a href="https://discord.gg/9QpwAmX4Ke" target="_blank" rel="noopener">Join community</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Sponsors />
      <FAQ />
      <RegisterCTA />
      <Footer />
    </main>
  )
}
