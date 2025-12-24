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
  Wifi,
  Users,
  GitBranch,
  Code,
  MessageSquare,
  ShieldCheck,
  Trophy,
  Presentation,
  Pizza,
  Coffee,
  BadgeCheck,
  Shield,
  BrainCircuit,
  Banknote,
  Sparkles,
} from "lucide-react"
import Lightning from "@/components/lightning"

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4", className)}>{children}</div>
}



function Hero() {
  return (
    <section className="relative border-b">
      <div className="pointer-events-none absolute inset-0 radial-mask bg-dots opacity-[0.2]" />

      <Container className="relative z-10 flex flex-col items-start gap-6 py-16 md:py-20">
        <div className="relative w-full h-[300px] md:h-[420px] overflow-hidden flex items-center justify-center">
          <TextPressure
            text="CODORRA"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] md:text-xs text-foreground/70">
          <MapPin className="size-3.5 opacity-70" />
          <span>Bengaluru + Online</span>
          <span className="mx-1.5 h-1 w-1 rounded-full bg-foreground/30" />
          <Clock className="size-3.5 opacity-70" />
          <span>Two-Phase Hackathon</span>
        </div>
        <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">CODORRA Hackathon 2026</h1>
        <p className="text-pretty max-w-2xl text-muted-foreground">
          Two-phase cybersecurity hackathon. Teams of 2–4. Build practical security tools and demo at Demo Day.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" variant="secondary" asChild className="rounded-full h-12 px-8 border-none bg-brand-gradient hover:opacity-90 text-white ring-glow min-w-[160px] font-bold">
            <a href="/apply" className="inline-flex items-center justify-center">Apply Now <ArrowRight className="ml-2 size-4" /></a>
          </Button>
          <Button size="lg" variant="ghost" asChild className="rounded-full h-12 px-8 text-foreground/85 hover:bg-white/10 min-w-[160px]">
            <a href="/criteria" className="inline-flex items-center justify-center"><BookOpen className="mr-2 size-4" /> Judging Criteria</a>
          </Button>
        </div>
      </Container>
      <div className="absolute -right-10 -top-10 md:-right-16">
        <OrnamentRings hue="accent" className="h-[260px] w-[260px]" />
      </div>
      <div className="absolute left-0 bottom-0 translate-x-[-40%] translate-y-[30%]">
        <OrnamentRings hue="primary" className="h-[220px] w-[220px]" opacity={0.18} />
      </div>
    </section>
  )
}

function About() {
  const features = [
    { icon: Building2, k: "Venue", v: "Bengaluru • 24/7 access (Round 2)" },
    { icon: Wifi, k: "Infra", v: "Fiber + backup 4G routers" },
    { icon: Users, k: "Team", v: "Teams of 2–4" },
    { icon: GitBranch, k: "Submissions", v: "Devpost + GitHub links" },
    { icon: MessageSquare, k: "Comms", v: "Discord + WhatsApp" },
    { icon: ShieldCheck, k: "Theme", v: "Cybersecurity focus" },
  ]
  return (
    <section id="about" className="section relative border-b">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <div className="pointer-events-none absolute inset-0 radial-mask opacity-[0.1]" />
      <Container className="grid items-start gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-12">
          <SectionHeader
            eyebrow="Two-phase format"
            title="Round 1: Online • Round 2: Demo Day"
            desc="Round 1 is fully online and free. Submit via Devpost + GitHub. Finalists invited to Round 2 Demo Day in Bengaluru (or present virtually). Coordination on Discord + WhatsApp."
            className="cursor-target max-w-3xl mb-12"
          />
        </Reveal>

        <Reveal delay={100} className="lg:col-span-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((s, idx) => (
              <Card key={s.k} className={cn(
                "glass cursor-target border-white/5 hover:border-white/10 transition-colors",
                idx === 0 || idx === 3 ? "sm:col-span-2" : ""
              )}>
                <CardHeader className="pb-2 flex flex-row items-center gap-2">
                  <div className="p-2 rounded-lg bg-white/5">
                    <s.icon className="size-4 text-white/50" />
                  </div>
                  <CardTitle className="text-sm font-bold tracking-widest uppercase text-muted-foreground/60">{s.k}</CardTitle>
                </CardHeader>
                <CardContent className="text-xl font-bold italic tracking-tight">{s.v}</CardContent>
              </Card>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-4 space-y-6">
          <Card className="glass cursor-target border-white/5 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 italic">
                <Trophy className="size-5 text-brand-gradient" />
                Judging & Ops
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-8">
              <ul className="grid gap-4 text-sm">
                {[
                  { icon: BrainCircuit, t: "Idea quality & relevance" },
                  { icon: Code, t: "Technical execution" },
                  { icon: ShieldCheck, t: "Real-world impact" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="mt-1 size-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                    <span className="group-hover:text-foreground transition-colors">{item.t}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground/50">
                  <BadgeCheck className="size-4" />
                  Venue & Perks
                </div>
                <p className="text-xs leading-relaxed">24/7 Access • High-speed WiFi • Pizza & Coffee on tap • Swag & Certificates</p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </Container>
      <div className="absolute right-6 top-10">
        <OrnamentRings className="h-64 w-64" />
      </div>
    </section>
  )
}

function Tracks() {
  const tracks = [
    { title: "AI + Security", icon: BrainCircuit, hue: "primary" as const, desc: "Defensive AI systems, AI-assisted monitoring, model safety, robustness tooling." },
    { title: "Network Security", icon: Shield, hue: "accent" as const, desc: "Software, infrastructure, networking tools, protocol security products." },
    { title: "Tomfoolery", icon: Sparkles, hue: "primary" as const, desc: "Useless, funny, absurd ideas — but they must work. Stupid concept ≠ stupid execution." },
    { title: "Open Innovation", icon: Banknote, hue: "accent" as const, desc: "Any high-impact security project that doesn't fit neatly into the above categories." },
  ]
  return (
    <section id="tracks" className="section relative border-b">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Container>
        <SectionHeader
          eyebrow="Choose your arena"
          title="Tracks"
          desc="Pick one primary track for judging; crossover projects are welcome."
          className="cursor-target"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {tracks.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <a href={`/tracks/${t.title.toLowerCase().replace(/ \+ /g, '-').replace(/ /g, '-')}`} className="block group h-full">
                <Card className="glass cursor-target h-full transition-all group-hover:bg-white/5 border-white/10 group-hover:border-white/20 p-4 md:p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="bg-white/5 border border-white/10 text-white/40 rounded-2xl p-4 shrink-0 transition-transform group-hover:scale-110 group-hover:text-white/60 shadow-xl shadow-black/20">
                      <t.icon className="size-8 md:size-10" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-2xl md:text-3xl font-extrabold italic tracking-tight">{t.title}</CardTitle>
                        <ArrowRight className="size-5 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-white/30" />
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {t.desc}
                      </p>
                      <div className="pt-4">
                        <Button variant="outline" size="sm" className="rounded-full h-9 px-5 border-white/10 group-hover:border-white/20 group-hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-wider">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>

      <div className="absolute -left-16 -top-8">
        <OrnamentRings hue="primary" className="h-[300px] w-[300px]" opacity={0.18} />
      </div>
    </section>
  )
}

// function Prizes() {
//   const tiers = [
//     { name: "Overall Winner", info: "Cash + Credits + Internships + Gadgets" },
//     { name: "Second Place", info: "Cash + Credits + Internships" },
//     { name: "Third Place", info: "Cash + Credits" },
//     { name: "Best Online", info: "Cash + Credits" },
//     { name: "Best Offline", info: "Cash + Credits" },
//   ]
//   return (
//     <section id="prizes" className="section relative overflow-hidden border-b">
//       <TargetCursor spinDuration={2} hideDefaultCursor={true} />
//       {/* Full-bleed lightning with smooth fade into content */}
//       <div className="pointer-events-none absolute inset-0 hidden md:block">
//         <Lightning hue={220} center={0.7} xOffset={0} speed={1} intensity={0.9} size={1.1} />
//         <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/40 to-transparent" />
//       </div>
//       <Container className="relative z-10">
//         <div className="md:w-1/2">
//           <SectionHeader
//             eyebrow="Meaningful rewards"
//             title="Prizes"
//             desc="Budget-conscious yet impactful — cash, credits, internships, and more."
//             className="cursor-target"
//           />
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {tiers.map((p, i) => (
//               <Reveal key={p.name} delay={i * 80}>
//                 <Card className="glass relative overflow-hidden cursor-target">
//                   <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/15 blur-xl" />
//                   <CardHeader>
//                     <CardTitle className="text-xl">{p.name}</CardTitle>
//                   </CardHeader>
//                   <CardContent className="text-muted-foreground">{p.info}</CardContent>
//                 </Card>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   )
// }

function Timeline() {
  return (
    <section id="timeline" className="section relative border-b overflow-hidden">
      <div className="pointer-events-none absolute inset-0 radial-mask opacity-[0.08]" />
      <Container>
        <SectionHeader eyebrow="Flow" title="Timeline" desc="From kickoff to demo day — your journey mapped out." />
        <Reveal>
          <div className="w-full rounded-xl border border-border/50 overflow-hidden bg-background/50 backdrop-blur-sm shadow-2xl shadow-black/20">
            <div className="overflow-x-auto">
              <ScheduleGrid />
            </div>
          </div>
        </Reveal>
      </Container>
      <div className="absolute left-[10%] top-6">
        <OrnamentRings hue="primary" className="h-64 w-64" opacity={0.18} />
      </div>
    </section>
  )
}

function Sponsors() {
  return (
    <section id="sponsors" className="section relative border-b py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <Reveal className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-extrabold italic tracking-tighter text-balance">
                Partner with the Build Squad
              </h2>
              <p className="max-w-xl text-xl text-muted-foreground leading-relaxed">
                Join industry leaders in supporting the next generation of cybersecurity innovators. Run workshops, host challenges, and access unique hiring opportunities.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 grayscale opacity-40">
              {['Diamond', 'Gold', 'Silver', 'Bronze'].map(tier => (
                <div key={tier} className="flex flex-col items-center gap-3">
                  <div className="h-px w-full bg-white/10" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{tier}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <Button size="lg" variant="secondary" className="rounded-full h-14 px-10 border-none bg-brand-gradient hover:opacity-90 text-white font-extrabold text-lg min-w-[220px] shadow-2xl shadow-primary/20" asChild>
                <a href="/apply-as-sponsor">Apply as Sponsor</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-10 border-white/10 bg-white/5 hover:bg-white/10 font-bold min-w-[180px]" asChild>
                <a href="/sponsors">See All Partners</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gradient opacity-10 blur-[120px] animate-pulse" />
              <div className="glass p-12 rounded-[40px] border-white/10 relative z-10 text-center space-y-4">
                <div className="size-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="size-10 text-white/40" />
                </div>
                <h3 className="text-2xl font-bold italic">Immune System for the Future</h3>
                <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">Help us secure what matters most. Contact our partnerships lead.</p>
                <Button variant="ghost" className="text-white/40 hover:text-white" asChild>
                  <a href="mailto:codorra@yahoo.com">codorra@yahoo.com</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: "Who can participate?", a: "Open to students, professionals, and independent builders. Team size is 2–4." },
    { q: "What's the theme?", a: "Cybersecurity focus; open innovation allowed if high impact." },
    { q: "Where will it happen?", a: "Round 1: Fully online. Round 2: Bengaluru venue (finalists only) with hybrid option." },
    { q: "How are submissions handled?", a: "Round 1: Devpost + GitHub links (mandatory). Finalists present at Round 2 Demo Day." },
    { q: "Judging criteria?", a: "Idea quality & relevance, technical execution & code quality, presentation clarity, real-world applicability & impact." },
    { q: "Fees?", a: "The hackathon is completely free for everyone. There are no registration or participation fees for any round." },
  ]
  return (
    <section id="faq" className="section border-b">
      <Container>
        <SectionHeader eyebrow="Good to know" title="FAQ" align="center" />
        <div className="mt-6">
          <div className="mx-auto max-w-2xl"> {/* control width here */}
            <div className="rounded-xl border glass p-2 md:p-3">
              <Accordion type="single" collapsible>
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="secondary" className="rounded-full h-10 px-6 border border-white/15 bg-white/10 hover:bg-white/15">
            <a href="/faq">See Full FAQ</a>
          </Button>
        </div>

      </Container>
    </section>
  )
}

function RegisterCTA() {
  return (
    <section id="register" className="section relative border-b">
      <Container className="relative">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/70">
            Join the build
          </div>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Ready to register?</h2>

          <p className="mx-auto mt-4 max-w-[540px] text-base text-muted-foreground">
            Round 1 is completely free. Assemble your 2–4 person team and submit via Devpost.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group h-11 rounded-full bg-brand-gradient border-none px-8 text-[15px] transition-opacity hover:opacity-90 text-white font-bold min-w-[200px]">
              <a href="https://codorra1.devpost.com/" target="_blank" rel="noopener" className="flex items-center justify-center gap-2">
                Register on Devpost
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="group h-11 rounded-full border-white/10 bg-white/5 px-8 text-[15px] hover:bg-white/10 min-w-[180px]">
              <a href="https://discord.gg/9QpwAmX4Ke" target="_blank" rel="noopener" className="flex items-center justify-center gap-2">
                Join Discord
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            The hackathon is completely free for everyone. No registration or participation fees.
          </p>
        </div>
      </Container>
    </section>
  )
}



export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      {/* <Prizes /> */}
      <Timeline />
      <Sponsors />
      <FAQ />
      <RegisterCTA />
      <Footer />
    </main>
  )
}
