"use client"

import TimeAxis from "./time-axis"
import Swimlane from "./swimlane"
import { MOCK_EVENTS, DAYS } from "@/lib/schedule-data"

const PIXELS_PER_MINUTE = 1.5
const START_HOUR = 9
const END_HOUR = 21
const SWIMLANE_WIDTH = 320

export default function ScheduleGrid() {
  const totalMinutes = (END_HOUR - START_HOUR) * 60
  const totalHeight = totalMinutes * PIXELS_PER_MINUTE

  return (
    <div className="w-full overflow-hidden bg-background min-h-screen">
      {/* Header - Days */}
      <div className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex">
          {/* Time column header */}
          <div className="w-20 flex-shrink-0 border-r border-border p-4">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Time</p>
          </div>
          {/* Day headers */}
          <div className="flex">
            {DAYS.map((day) => (
              <div key={day.id} className="border-r border-border px-4 py-3" style={{ width: `${SWIMLANE_WIDTH}px` }}>
                <p className="text-sm font-semibold text-foreground">{day.name}</p>
                <p className="text-xs text-muted-foreground">{day.date}, 2026</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="flex overflow-x-auto">
        {/* Time Axis */}
        <div className="w-20 flex-shrink-0 border-r border-border">
          <TimeAxis startHour={START_HOUR} endHour={END_HOUR} pixelsPerMinute={PIXELS_PER_MINUTE} />
        </div>

        {/* Day Swimlanes */}
        <div className="flex">
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
