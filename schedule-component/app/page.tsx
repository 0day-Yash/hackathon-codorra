import ScheduleGrid from "@/components/schedule-grid"

export const metadata = {
  title: "Hackathon Schedule",
  description: "Multi-track conference schedule timeline",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScheduleGrid />
    </div>
  )
}
