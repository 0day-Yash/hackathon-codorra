"use client"

import type { Event } from "./schedule-data"

interface EventBlockProps {
  event: Event
  topOffset: number
  height: number
}

export default function EventBlock({ event, topOffset, height }: EventBlockProps) {
  const formatTime = (hour: number, minute: number) => {
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
    const period = hour >= 12 ? "PM" : "AM"
    return `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`
  }

  return (
    <div
      className="absolute left-3 right-3 rounded-lg border border-border/50 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-md p-3 transition-all duration-300 hover:bg-card hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 cursor-pointer group overflow-hidden"
      style={{
        top: `${topOffset}px`,
        height: `${height}px`,
        minHeight: "60px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
      }}
    >
      <div className="relative flex flex-col h-full">
        <div className="flex-grow overflow-hidden">
          <h3 className="text-xs font-semibold text-foreground group-hover:text-accent transition-colors whitespace-normal break-words">
            {event.title}
          </h3>

          <p className="text-[11px] text-muted-foreground mt-1 leading-tight whitespace-normal break-words">
            {event.description}
          </p>
        </div>

        <div className="mt-auto pt-1">
          <p className="text-[10px] text-muted-foreground/80 font-mono">
            {formatTime(event.startTime.hour, event.startTime.minute)} — {formatTime(event.endTime.hour, event.endTime.minute)}
          </p>
        </div>
      </div>
    </div>
  )
}

