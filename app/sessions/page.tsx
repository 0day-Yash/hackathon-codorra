import Link from "next/link"
import { Navbar, Footer } from "@/components/navigation"
import { PageHeader, PageSection, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Globe } from "lucide-react"
import { SPEAKER_SESSIONS } from "@/config/session-data"

export default function SessionsPage() {
  const sessionsByDay = SPEAKER_SESSIONS.reduce<Record<string, typeof SPEAKER_SESSIONS>>((acc, session) => {
    const key = session.date
    if (!acc[key]) acc[key] = []
    acc[key].push(session)
    return acc
  }, {})

  return (
    <main>
      <Navbar />
      <PageHeader
        title="Speaker Sessions"
        description="All speaker sessions for CODORRA 2026, with topic overviews and placeholder host assignments."
      />

      <PageSection>
        <Container>
          <SectionHeader
            eyebrow="Session Guide"
            title="12 expert-led sessions"
            desc="Each speaker slot is scheduled and ready; hosts are currently placeholders and will be updated soon."
          />

          <div className="space-y-12">
            {Object.entries(sessionsByDay).map(([date, sessions]) => (
              <Reveal key={date} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">{date}</h2>
                  <p className="text-muted-foreground">All sessions below are scheduled in IST.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {sessions.map((session) => (
                    <Card key={session.slug} className="glass border-white/10">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Clock className="size-4" />
                          <span>{session.timeLabel}</span>
                        </div>
                        <CardTitle className="mt-4 text-xl">{session.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">{session.description}</p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Globe className="size-4" />
                            <span>{session.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="size-4" />
                            <span>Host: {session.host}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/sessions/${session.slug}`}>View session details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </PageSection>

      <Footer />
    </main>
  )
}
