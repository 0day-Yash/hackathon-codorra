export interface TimeSlot {
  hour: number
  minute: number
}

export interface Event {
  id: string
  title: string
  description: string
  day: 0 | 1 | 2 // 0 = Friday, 1 = Saturday, 2 = Sunday
  startTime: TimeSlot
  endTime: TimeSlot
}

export interface Day {
  id: number
  name: string
  date: string // "June 5", "June 6", "June 7"
}

export const DAYS: Day[] = [
  { id: 0, name: "Friday", date: "May 29" },
  { id: 1, name: "Saturday", date: "May 30" },
  { id: 2, name: "Sunday", date: "May 31" },
]

export const MOCK_EVENTS: Event[] = [
  // Friday - May 29: Speaker Sessions & Kickoff
  {
    id: "f1",
    title: "Opening Keynote",
    description: "Welcome and event overview",
    day: 0,
    startTime: { hour: 9, minute: 0 },
    endTime: { hour: 10, minute: 0 },
  },
  {
    id: "f2",
    title: "Speaker Session 1",
    description: "Future of AI & Web3",
    day: 0,
    startTime: { hour: 10, minute: 0 },
    endTime: { hour: 11, minute: 30 },
  },
  {
    id: "f3",
    title: "Workshop: Cloud Infrastructure",
    description: "Scaling your hackathon project",
    day: 0,
    startTime: { hour: 12, minute: 0 },
    endTime: { hour: 13, minute: 30 },
  },
  {
    id: "f4",
    title: "Lunch & Networking",
    description: "Meet the speakers and mentors",
    day: 0,
    startTime: { hour: 13, minute: 30 },
    endTime: { hour: 14, minute: 30 },
  },
  {
    id: "f5",
    title: "Speaker Session 2",
    description: "Cybersecurity in 2026",
    day: 0,
    startTime: { hour: 14, minute: 30 },
    endTime: { hour: 16, minute: 0 },
  },
  {
    id: "f6",
    title: "Hackathon Kickoff & Rules",
    description: "Official start of the 48h coding window",
    day: 0,
    startTime: { hour: 17, minute: 0 },
    endTime: { hour: 18, minute: 0 },
  },
  {
    id: "f7",
    title: "Hacking Begins!",
    description: "Start building your projects",
    day: 0,
    startTime: { hour: 18, minute: 0 },
    endTime: { hour: 21, minute: 0 },
  },

  // Saturday - May 30: 48h Coding - Day 1
  {
    id: "s1",
    title: "Morning Standup",
    description: "Quick progress check on Discord",
    day: 1,
    startTime: { hour: 9, minute: 0 },
    endTime: { hour: 10, minute: 0 },
  },
  {
    id: "s2",
    title: "Mentorship Office Hours",
    description: "Get help from our technical experts",
    day: 1,
    startTime: { hour: 10, minute: 0 },
    endTime: { hour: 13, minute: 0 },
  },
  {
    id: "s3",
    title: "Lunch Break",
    description: "Refuel and keep building",
    day: 1,
    startTime: { hour: 13, minute: 0 },
    endTime: { hour: 14, minute: 0 },
  },
  {
    id: "s4",
    title: "Afternoon Hacking",
    description: "Deep work session",
    day: 1,
    startTime: { hour: 14, minute: 0 },
    endTime: { hour: 18, minute: 0 },
  },
  {
    id: "s5",
    title: "Evening Sync",
    description: "Day 1 wrap-up and announcements",
    day: 1,
    startTime: { hour: 18, minute: 0 },
    endTime: { hour: 19, minute: 0 },
  },
  {
    id: "s6",
    title: "Night Hacking",
    description: "Continuous development",
    day: 1,
    startTime: { hour: 19, minute: 0 },
    endTime: { hour: 21, minute: 0 },
  },

  // Sunday - May 31: 48h Coding - Day 2 & Demos
  {
    id: "su1",
    title: "Final Countdown",
    description: "Last hours to polish your projects",
    day: 2,
    startTime: { hour: 9, minute: 0 },
    endTime: { hour: 12, minute: 0 },
  },
  {
    id: "su2",
    title: "Submission Deadline",
    description: "Project links must be on Devpost",
    day: 2,
    startTime: { hour: 12, minute: 0 },
    endTime: { hour: 13, minute: 0 },
  },
  {
    id: "su3",
    title: "Lunch Break",
    description: "Final break before presentations",
    day: 2,
    startTime: { hour: 13, minute: 0 },
    endTime: { hour: 14, minute: 0 },
  },
  {
    id: "su4",
    title: "Demo Presentations",
    description: "Top teams present virtually",
    day: 2,
    startTime: { hour: 14, minute: 0 },
    endTime: { hour: 17, minute: 0 },
  },
  {
    id: "su5",
    title: "Judging Deliberation",
    description: "Panel review",
    day: 2,
    startTime: { hour: 17, minute: 0 },
    endTime: { hour: 18, minute: 30 },
  },
  {
    id: "su6",
    title: "Awards & Closing Ceremony",
    description: "Winner announcements and event wrap-up",
    day: 2,
    startTime: { hour: 19, minute: 0 },
    endTime: { hour: 20, minute: 30 },
  },
]


