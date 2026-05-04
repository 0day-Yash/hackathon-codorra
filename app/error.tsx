"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { ArrowLeft, AlertTriangle } from "lucide-react"

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main>
      <Navbar />
      <Container>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-6 py-24">
          <AlertTriangle className="size-16 text-red-400" />
          <div>
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <p className="mt-3 text-muted-foreground">An unexpected error occurred while loading the page.</p>
          </div>
          <Button asChild>
            <a href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="size-4" /> Back home
            </a>
          </Button>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
