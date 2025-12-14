"use client"

import type { Event } from "@/lib/schedule-data"

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
      className="absolute left-3 right-3 rounded border border-border/40 bg-card/70 backdrop-blur-sm p-3 transition-all duration-200 hover:bg-card hover:border-border/80 hover:shadow-lg hover:shadow-black/20 cursor-pointer group"
      style={{
        top: `${topOffset}px`,
        height: `${height}px`,
        minHeight: "60px",
      }}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xs font-semibold text-foreground line-clamp-2 group-hover:text-accent-foreground transition-colors">
          {event.title}
        </h3>

        {height > 80 && (
          <>
            <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-tight">{event.description}</p>
            <div className="mt-auto pt-1">
              <p className="text-xs text-muted-foreground/80 font-mono">
                {formatTime(event.startTime.hour, event.startTime.minute)} —{" "}
                {formatTime(event.endTime.hour, event.endTime.minute)}
              </p>
            </div>
          </>
        )}

        {height <= 80 && (
          <p className="text-xs text-muted-foreground/80 font-mono mt-1">
            {formatTime(event.startTime.hour, event.startTime.minute)}
          </p>
        )}
      </div>
    </div>
  )
}
