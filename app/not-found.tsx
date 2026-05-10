import { Container } from "@/components/page-layout"
import { Navbar, Footer } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { SearchCircle } from "lucide-react"

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <Container>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-6 py-24">
          <SearchCircle className="size-16 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Page not found</h1>
            <p className="mt-3 text-muted-foreground">The page you are looking for does not exist or may have been moved.</p>
          </div>
          <Button asChild>
            <a href="/" className="inline-flex items-center gap-2">
              Go back home
            </a>
          </Button>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
