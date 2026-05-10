"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Reveal({
  as: As = "div",
  delay = 0,
  className = "",
  children,
}: {
  as?: React.ElementType
  delay?: number
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Component = As as React.ElementType

  return (
    <Component ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Component>
  )
}
