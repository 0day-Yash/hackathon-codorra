import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar, Footer } from "@/components/navigation"
import { PageSection, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Globe, Users, MapPin, ArrowLeft } from "lucide-react"
import { SPEAKER_SESSIONS } from "@/config/session-data"

export default function SessionDetailPage({ params }: { params: { slug: string } }) {
  const session = SPEAKER_SESSIONS.find((item) => item.slug === params.slug)

  if (!session) {
    notFound()
  }

  return (
    <main>
      <Navbar />
      <PageSection>
        <Container>
          <Reveal>
            <Button variant="ghost" className="mb-8 hover:bg-white/5" asChild>
              <Link href="/sessions">
                <ArrowLeft className="mr-2 size-4" />
                Back to Sessions
              </Link>
            </Button>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Session Detail"
                title={session.title}
                desc={session.description}
              />
              <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="space-y-6">
                  <Card className="glass border-white/10">
                    <CardHeader>
                      <CardTitle>What this session covers</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        This session will explore the topic in a practical, beginner-friendly way while preparing teams for secure design decisions during the hackathon.
                      </p>
                      <ul className="space-y-3 list-inside list-disc text-sm text-muted-foreground">
                        {session.takeaways?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="glass border-white/10">
                    <CardHeader>
                      <CardTitle>Session logistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="size-4" />
                        <span>{session.timeLabel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4" />
                        <span>{session.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="size-4" />
                        <span>Host: {session.host}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="glass border-white/10 p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Globe className="size-5" />
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">Virtual attendance</h3>
                          <p className="text-sm">Join the session live online in IST.</p>
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <h4 className="text-sm font-semibold text-foreground">Join checklist</h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                          <li>Open Discord and the live stream link</li>
                          <li>Keep your team aware of the speaker timeline</li>
                          <li>Note any follow-up ideas for your project</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </PageSection>
      <Footer />
    </main>
  )
}
