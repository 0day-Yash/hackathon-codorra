"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/page-layout"

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
            <img src="/CODORRA.png" alt="CODORRA Logo" className="h-5 w-auto" />
            <span className="text-sm font-bold tracking-tighter uppercase">Codorra</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">About</a>
            <a href="/speakers" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Speakers</a>
            <a href="/sponsors" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Sponsors</a>
            <a href="/schedule" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Schedule</a>
            <a href="/faq" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:inline-flex rounded-full border-white/10 bg-white/5 hover:bg-white/10 px-6 h-9 text-xs font-bold"
            >
              <a href="https://codorra1.devpost.com/">Register</a>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <span className="sr-only">Menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 md:py-24 bg-black">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <img src="/CODORRA.png" alt="CODORRA" className="h-4 w-auto" />
              <span className="text-xs font-bold tracking-widest uppercase">Codorra</span>
            </a>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} Codorra. Built for the future of security.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a href="/faq" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">FAQ</a>
            <a href="/sponsors" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">Partners</a>
            <a href="/contact" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
