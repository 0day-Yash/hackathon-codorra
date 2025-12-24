"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Reveal } from "@/components/fx/reveal"
import { OrnamentRings } from "@/components/ornament-rings"
import { ExternalLink } from "lucide-react"

export default function ApplyPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Apply to CODORRA"
        description="Register your team on Devpost to participate in the hackathon."
      />

      <PageSection>
        <Container className="max-w-2xl">
          <Reveal>
            <Card className="glass cursor-target">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Ready to register?</h2>
                    <p className="text-muted-foreground">
                      Join us on Devpost and start building the next big security solution.
                    </p>
                  </div>
                  <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90">
                    <a href="https://codorra1.devpost.com/" target="_blank" rel="noopener" className="flex items-center gap-2">
                      Register on Devpost
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>
                  <div className="pt-4 border-t border-white/10 w-full">
                    <p className="text-sm text-muted-foreground mb-3">Looking to partner with us instead?</p>
                    <Button asChild variant="link" className="text-accent hover:text-accent/80 p-0 h-auto">
                      <a href="/apply-as-sponsor">Apply as a Sponsor →</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </Container>
      </PageSection>

      <div className="absolute right-6 top-10">
        <OrnamentRings className="h-64 w-64" />
      </div>
      <Footer />
    </main>
  )
}
