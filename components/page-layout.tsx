"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { OrnamentRings } from "@/components/ornament-rings"
import TargetCursor from "@/components/target-cursor"

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4", className)}>{children}</div>
}

export function PageHeader({ 
  title, 
  description, 
  className 
}: { 
  title: string
  description: string
  className?: string 
}) {
  return (
    <section className="relative border-b">
      <div className="pointer-events-none absolute inset-0 radial-mask bg-dots opacity-[0.2]" />
      <Container className="relative z-10 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl mb-6">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          </Reveal>
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

export function PageSection({ 
  children, 
  className,
  withCursor = true 
}: { 
  children: React.ReactNode
  className?: string
  withCursor?: boolean
}) {
  return (
    <section className={cn("section relative border-b", className)}>
      {withCursor && <TargetCursor spinDuration={2} hideDefaultCursor={true} />}
      <div className="pointer-events-none absolute inset-0 radial-mask opacity-[0.1]" />
      <Container className="relative z-10">
        {children}
      </Container>
    </section>
  )
}

export function TwoColumnLayout({ 
  left, 
  right, 
  className 
}: { 
  left: React.ReactNode
  right: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("grid items-start gap-8 md:grid-cols-2 lg:gap-12", className)}>
      <Reveal>{left}</Reveal>
      <Reveal delay={100}>{right}</Reveal>
    </div>
  )
}

export function CardGrid({ 
  children, 
  className,
  cols = 3 
}: { 
  children: React.ReactNode
  className?: string
  cols?: 2 | 3 | 4
}) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3", 
    4: "md:grid-cols-2 lg:grid-cols-4"
  }
  
  return (
    <div className={cn("grid gap-6", gridCols[cols], className)}>
      {children}
    </div>
  )
}
