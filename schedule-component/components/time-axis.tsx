"use client"

interface TimeAxisProps {
  startHour: number
  endHour: number
  pixelsPerMinute: number
}

export default function TimeAxis({ startHour, endHour, pixelsPerMinute }: TimeAxisProps) {
  const hours = Array.from({ length: endHour - startHour }, (_, i) => startHour + i)
  const pixelsPerHour = 60 * pixelsPerMinute

  return (
    <div className="border-r border-border bg-background">
      {hours.map((hour) => {
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
        const period = hour >= 12 ? "PM" : "AM"

        return (
          <div
            key={hour}
            className="border-b border-border/50 px-3 py-2 text-right"
            style={{ height: `${pixelsPerHour}px` }}
          >
            <p className="text-xs font-mono text-muted-foreground">
              {displayHour}:00 {period}
            </p>
          </div>
        )
      })}
    </div>
  )
}
