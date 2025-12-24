"use client"

import type React from "react"
import TextPressure from "@/components/text-pressure"
import TargetCursor from "@/components/target-cursor"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ScheduleGrid from "@/components/schedule/schedule-grid"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import {
  MapPin,
  Clock,
  BookOpen,
  ArrowRight,
  Building2,
  Wifi,
  Users,
  GitBranch,
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

function Navbar() {
  return (
    <header className="sticky top-3 z-50">
      <Container>
        <div className="mx-auto flex h-14 items-center justify-between rounded-lg border border-white/10 bg-background/70 px-4 shadow-sm backdrop-blur-xl">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight text-foreground/90">
            <span className="text-sm md:text-[15px]">CODORRA · 2026</span>
          </a>
          <nav className="hidden gap-1.5 md:flex text-[13px]">
            <a href="/about" className="px-3 py-1.5 rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors">About</a>
            <a href="/speakers" className="px-3 py-1.5 rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors">Speakers</a>
            <a href="/sponsors" className="px-3 py-1.5 rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors">Sponsors</a>
            <a href="/schedule" className="px-3 py-1.5 rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors">Schedule</a>
            <a href="/contact" className="px-3 py-1.5 rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-block h-6 w-px bg-white/10" />
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="rounded-full h-10 px-5 border border-white/10 bg-white/5 hover:bg-white/10 text-foreground/90"
            >
              <a href="/apply">Register Now</a>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
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
          <Button size="lg" variant="secondary" asChild className="rounded-full h-11 px-6 border border-white/15 bg-white/10 hover:bg-white/15 text-foreground ring-glow">
            <a href="/apply" className="inline-flex items-center">Apply Now <ArrowRight className="ml-2 size-4" /></a>
          </Button>
          <Button size="lg" variant="ghost" asChild className="rounded-full h-11 px-6 text-foreground/85 hover:bg-white/10">
            <a href="/criteria" className="inline-flex items-center"><BookOpen className="mr-2 size-4" /> Judging Criteria</a>
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
      <Container className="grid items-start gap-8 md:grid-cols-2 lg:gap-12">
        <Reveal>
          <div>
            <SectionHeader
              eyebrow="Two-phase format"
              title="Round 1: Online • Round 2: Demo Day"
              desc="Round 1 is fully online and free. Submit via Devpost + GitHub. Finalists invited to Round 2 Demo Day in Bengaluru (or present virtually). Coordination on Discord + WhatsApp."
              className="cursor-target"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((s) => (
                <Card key={s.k} className="glass cursor-target">
                  <CardHeader className="pb-2 flex items-center gap-2">
                    <s.icon className="size-4 text-accent" />
                    <CardTitle className="text-sm text-muted-foreground">{s.k}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-lg font-semibold">{s.v}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-4">
            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle>Judging</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="grid gap-3 text-sm">
                  <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                    <Trophy className="mt-0.5 size-4 text-accent" />
                    <span>Idea quality & relevance to cybersecurity</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                    <Presentation className="mt-0.5 size-4 text-accent" />
                    <span>Technical execution & code quality</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                    <ShieldCheck className="mt-0.5 size-4 text-accent" />
                    <span>Presentation clarity</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                    <BadgeCheck className="mt-0.5 size-4 text-accent" />
                    <span>Real-world applicability & impact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass cursor-target">
              <CardHeader>
                <CardTitle>Ops & Perks</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="grid gap-3 text-sm">
                  <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                    <Pizza className="mt-0.5 size-4 text-accent" />
                    <span>Food: simple pizza twice a day</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                    <Coffee className="mt-0.5 size-4 text-accent" />
                    <span>Coffee on tap</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                    <ShieldCheck className="mt-0.5 size-4 text-accent" />
                    <span>Security: ID checks; venue open overnight</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                    <BadgeCheck className="mt-0.5 size-4 text-accent" />
                    <span>Swag: T‑shirts, stickers, certificates (shipping for online)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tracks.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <Card className="group glass cursor-target transition-all hover:translate-y-[-2px] hover:shadow-md hover:ring-1 hover:ring-accent/30">
                <CardHeader className="pb-2 flex items-center gap-3">
                  <div className={`${t.hue === "accent" ? "bg-accent/10 ring-accent/25 text-accent" : "bg-primary/10 ring-primary/25 text-primary"} rounded-lg p-2 ring-1`}>
                    <t.icon className="size-4" />
                  </div>
                  <CardTitle className="text-lg">{t.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {t.desc}
                </CardContent>
              </Card>
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
    <section id="sponsors" className="section relative border-b">
      <Container>
        <SectionHeader
          eyebrow="Partners"
          title="Sponsors & Community"
          desc="We're seeking partners to support the cybersecurity ecosystem. Run workshops, host challenges, and access hiring opportunities. Email codorra@yahoo.com."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Global Partner", perks: ["Stage mentions + logo on hero", "Talk/workshop slot", "Booth + hiring access", "Custom challenge track"] },
            { name: "Regional Partner", perks: ["Logo on site + socials", "Workshop/lightning talk", "Shortlist access"] },
            { name: "Community Partner", perks: ["Logo in partners", "Social mentions", "Brand visibility"] },
          ].map((t) => (
            <Card key={t.name} className="glass overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">{t.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="grid gap-2">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="flex-1 text-left">{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Button size="lg" variant="secondary" className="rounded-full h-11 px-6 border border-white/15 bg-white/10 hover:bg-white/15" asChild>
            <a href="/apply-as-sponsor">Apply as Sponsor</a>
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full h-11 px-6" asChild>
            <a href="mailto:codorra@yahoo.com?subject=Sponsor%20CODORRA%20Hackathon">Email Us</a>
          </Button>
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
            <Button asChild size="lg" className="group h-11 rounded-full bg-accent px-6 text-[15px] transition-colors hover:bg-accent/90">
              <a href="https://codorra1.devpost.com/" target="_blank" rel="noopener" className="flex items-center gap-2">
                Register on Devpost
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="group h-11 rounded-full border-white/10 bg-white/5 px-6 text-[15px] hover:bg-white/10">
              <a href="https://discord.gg/9QpwAmX4Ke" target="_blank" rel="noopener" className="flex items-center gap-2">
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

function Footer() {
  return (
    <footer className="py-12">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} CODORRA</div>
        <div className="flex items-center gap-6">
          <a href="/faq" className="hover:text-primary">
            FAQ
          </a>
          <a href="/sponsors" className="hover:text-primary">
            Sponsors
          </a>
          <a href="/contact" className="hover:text-primary">
            Contact
          </a>
        </div>
      </Container>
    </footer>
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
