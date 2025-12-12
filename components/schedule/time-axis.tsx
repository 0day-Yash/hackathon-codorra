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
    <div className="border-r border-border/60 bg-background/40">
      {hours.map((hour) => {
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
        const period = hour >= 12 ? "PM" : "AM"

        return (
          <div
            key={hour}
            className="border-b border-border/40 px-3 py-2 text-right hover:bg-background/60 transition-colors"
            style={{ height: `${pixelsPerHour}px` }}
          >
            <p className="text-xs font-mono text-muted-foreground font-medium">
              {displayHour}:00 {period}
            </p>
          </div>
        )
      })}
    </div>
  )
}

