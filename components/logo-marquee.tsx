"use client"

import React from "react"
import { Reveal } from "./fx/reveal"

const INSTITUTIONS = [
    "MIT", "Stanford", "Harvard", "YC S24", "Felafax.ai", "Stripe",
    "Waymap.xyz", "Meta", "Microsoft", "Apple", "Gusto", "Coinbase",
    "Anthropic", "IIT Bombay", "UC Berkeley", "OpenAI",
    "BrowserOS", "Mistral.ai", "Abbott", "Walgreens"
]

export function LogoMarquee() {
    return (
        <div className="w-full py-16 border-y border-white/5 bg-black overflow-hidden select-none">
            <div className="flex flex-col gap-10">
                <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
                    Industry Pioneers & Academic Excellence
                </p>

                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee flex flex-nowrap items-center">
                        {[...INSTITUTIONS, ...INSTITUTIONS, ...INSTITUTIONS, ...INSTITUTIONS].map((name, i) => (
                            <div
                                key={`${name}-${i}`}
                                className="flex items-center shrink-0"
                            >
                                <span className="text-lg md:text-2xl font-bold text-white/80 tracking-tighter uppercase px-12 md:px-20 hover:text-white transition-colors duration-300">
                                    {name}
                                </span>
                                <div className="h-4 w-px bg-white/10 shrink-0" />
                            </div>
                        ))}
                    </div>

                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
                </div>
            </div>
        </div>
    )
}
