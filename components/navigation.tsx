"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/page-layout"

export function Navbar() {
  return (
    <header className="sticky top-3 z-50">
      <Container>
        <div className="mx-auto flex h-14 items-center justify-between rounded-full border border-white/10 bg-background/70 px-4 shadow-sm backdrop-blur-xl">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight text-foreground/90">
            <span className="text-sm md:text-[15px]">CODORRA · 2026</span>
          </a>
          <nav className="hidden gap-1.5 md:flex text-[13px]">
            <a href="/about" className="px-3 py-1.5 rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors">About</a>
            <a href="/apply" className="px-3 py-1.5 rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors">Apply</a>
            <a href="/judges" className="px-3 py-1.5 rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors">Judges</a>
            <a href="/sponsors" className="px-3 py-1.5 rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors">Sponsors</a>
            <a href="/schedule" className="px-3 py-1.5 rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors">Schedule</a>
            <a href="/faq" className="px-3 py-1.5 rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
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

export function Footer() {
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
