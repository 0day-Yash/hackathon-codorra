"use client"

import TimeAxis from "./time-axis"
import Swimlane from "./swimlane"
import { MOCK_EVENTS, DAYS } from "./schedule-data"

const PIXELS_PER_MINUTE = 1.5
const START_HOUR = 9
const END_HOUR = 21
const SWIMLANE_WIDTH = 320
const TIME_COL_WIDTH = 80 // w-20

export default function ScheduleGrid() {
  const totalMinutes = (END_HOUR - START_HOUR) * 60
  const totalHeight = totalMinutes * PIXELS_PER_MINUTE
  const totalWidth = TIME_COL_WIDTH + DAYS.length * SWIMLANE_WIDTH

  return (
    <div className="w-full">
      {/* Header - Days */}
      <div className="sticky top-0 z-20 border-b border-border/60 bg-gradient-to-b from-background/98 via-background/95 to-background/90 backdrop-blur-md shadow-sm">
        <div className="inline-flex" style={{ minWidth: `${totalWidth}px` }}>
          {/* Time column header */}
          <div className="w-20 flex-shrink-0 border-r border-border/60 p-4 bg-background/50">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest font-semibold">Time</p>
          </div>
          {/* Day headers */}
          <div className="inline-flex">
            {DAYS.map((day, index) => (
              <div
                key={day.id}
                className="border-r border-border/60 px-4 py-3 flex-shrink-0 bg-gradient-to-b from-background/50 to-transparent hover:from-background/70 transition-colors"
                style={{ width: `${SWIMLANE_WIDTH}px`, minWidth: `${SWIMLANE_WIDTH}px`, maxWidth: `${SWIMLANE_WIDTH}px` }}
              >
                <p className="text-sm font-semibold text-foreground">{day.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{day.date}, 2026</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="inline-flex bg-background/30" style={{ minWidth: `${totalWidth}px` }}>
        {/* Time Axis */}
        <div className="w-20 flex-shrink-0 border-r border-border/60 bg-background/40">
          <TimeAxis startHour={START_HOUR} endHour={END_HOUR} pixelsPerMinute={PIXELS_PER_MINUTE} />
        </div>

        {/* Day Swimlanes */}
        <div className="inline-flex">
          {DAYS.map((day) => (
            <Swimlane
              key={day.id}
              day={day}
              events={MOCK_EVENTS.filter((e) => e.day === day.id)}
              totalHeight={totalHeight}
              pixelsPerMinute={PIXELS_PER_MINUTE}
              startHour={START_HOUR}
              width={SWIMLANE_WIDTH}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

