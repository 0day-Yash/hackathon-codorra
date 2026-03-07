"use client"

import type React from "react"
import { useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Navbar, Footer } from "@/components/navigation"
import { PageSection, Container } from "@/components/page-layout"
import { Reveal } from "@/components/fx/reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { OrnamentRings } from "@/components/ornament-rings"
import {
    ArrowLeft,
    Send,
    ShieldCheck,
    Lock,
    Mail,
    Phone
} from "lucide-react"

function RevealContent() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const name = searchParams.get("name") || "this judge"
    const type = searchParams.get("type") || "contact info"
    const slug = searchParams.get("slug")

    const [reason, setReason] = useState("")
    const [email, setUserEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Construct mailto link
        const subject = encodeURIComponent(`Access Request: ${type} for ${name}`)
        const body = encodeURIComponent(
            `I would like to request access to the ${type} for ${name}.\n\n` +
            `My Email: ${email}\n` +
            `Reason: ${reason}\n\n` +
            `Please review my request.`
        )

        window.location.href = `mailto:codorra@yahoo.com?subject=${subject}&body=${body}`
        setIsSubmitted(true)
    }

    return (
        <div className="max-w-2xl mx-auto py-12">
            <Reveal>
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-8 hover:bg-white/5"
                >
                    <ArrowLeft className="mr-2 size-4" />
                    Back
                </Button>
            </Reveal>

            <Reveal delay={100}>
                <div className="space-y-4 mb-12">
                    <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                        <Lock className="size-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Request Access
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        For security and privacy, {name}&apos;s {type} is restricted.
                        Please provide a valid reason for your request. Our team will review and facilitate the connection.
                    </p>
                </div>
            </Reveal>

            <Reveal delay={200}>
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/80">Your Email Address</label>
                            <Input
                                required
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="rounded-xl border-white/10 bg-black/40 h-12 focus:ring-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/80">Reason for Request</label>
                            <Textarea
                                required
                                placeholder="Why do you need this information? (e.g., mentorship, partnership, specific technical question)"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                className="min-h-[150px] rounded-xl border-white/10 bg-black/40 focus:ring-primary"
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full rounded-xl h-14 bg-white text-black hover:bg-zinc-200 font-bold text-lg">
                            Request Reveal
                            <Send className="ml-2 size-4" />
                        </Button>

                        <p className="text-xs text-center text-muted-foreground opacity-60">
                            By submitting, you agree to our privacy policy regarding data handling.
                        </p>
                    </form>
                ) : (
                    <div className="text-center p-12 rounded-[2rem] border border-primary/20 bg-primary/5 backdrop-blur-md">
                        <div className="size-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
                            <ShieldCheck className="size-10" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Request Initiated</h2>
                        <p className="text-muted-foreground mb-8">
                            Your email client should have opened with the request details.
                            Please send the email to complete your request.
                        </p>
                        <Button variant="outline" onClick={() => router.back()} className="rounded-xl border-white/10 hover:bg-white/10">
                            Return to Profile
                        </Button>
                    </div>
                )}
            </Reveal>
        </div>
    )
}

export default function RevealPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageSection withCursor={false}>
                <Container>
                    <Suspense fallback={
                        <div className="flex items-center justify-center h-[60vh]">
                            <div className="animate-pulse flex flex-col items-center gap-4">
                                <div className="size-12 rounded-full bg-white/10" />
                                <div className="h-4 w-32 bg-white/10 rounded" />
                            </div>
                        </div>
                    }>
                        <RevealContent />
                    </Suspense>
                </Container>
            </PageSection>

            <div className="absolute right-0 top-1/4 -z-10 opacity-20">
                <OrnamentRings className="h-96 w-96 translate-x-1/2" />
            </div>

            <Footer />
        </main>
    )
}
