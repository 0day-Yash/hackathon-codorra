"use client"

import EventBlock from "./event-block"
import type { Event, Day } from "@/lib/schedule-data"

interface SwimlaneProps {
  day: Day
  events: Event[]
  totalHeight: number
  pixelsPerMinute: number
  startHour: number
  width: number
}

export default function Swimlane({ day, events, totalHeight, pixelsPerMinute, startHour, width }: SwimlaneProps) {
  const timeToPixels = (minutes: number) => minutes * pixelsPerMinute

  return (
    <div
      className="relative border-r border-border flex-shrink-0"
      style={{
        width: `${width}px`,
        height: `${totalHeight}px`,
        backgroundImage: `repeating-linear-gradient(
          0deg,
          hsl(var(--muted) / 0.3) 1px,
          transparent 1px
        )`,
        backgroundSize: `100% ${pixelsPerMinute * 60}px`,
      }}
    >
      {events.map((event) => {
        const startMinutes = (event.startTime.hour - startHour) * 60 + event.startTime.minute
        const durationMinutes =
          (event.endTime.hour - event.startTime.hour) * 60 + (event.endTime.minute - event.startTime.minute)

        return (
          <EventBlock
            key={event.id}
            event={event}
            topOffset={timeToPixels(startMinutes)}
            height={timeToPixels(durationMinutes)}
          />
        )
      })}
    </div>
  )
}
