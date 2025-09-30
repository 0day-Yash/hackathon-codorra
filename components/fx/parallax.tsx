"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Parallax({
  speed = 0.15,
  className = "",
  children,
}: {
  speed?: number // 0..1, positive = moves slower than scroll
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [y, setY] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const tick = () => {
      const rect = el.getBoundingClientRect()
      const offset = (window.innerHeight - rect.top) * speed
      setY(offset)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(0, ${y.toFixed(2)}px, 0)` }}>
      {children}
    </div>
  )
}
