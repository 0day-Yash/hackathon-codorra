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
  slug?: string
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
  {
    id: "f1",
    title: "Opening Keynote & Official Kickoff",
    description: "Welcome, event overview & rules.",
    day: 0,
    startTime: { hour: 11, minute: 0 },
    endTime: { hour: 13, minute: 0 },
    slug: "opening-keynote"
  },
  {
    id: "f3",
    title: "Securing the AI Cloud: Defending Modern Multi-Cloud Platforms",
    description: "30 min speaker session with Naresh Lokiny.",
    day: 0,
    startTime: { hour: 23, minute: 0 },
    endTime: { hour: 23, minute: 30 },
    slug: "speaker-session-1"
  },
  {
    id: "s1b",
    title: "Balancing Innovation and Compliance in Cloud-Native Systems",
    description: "30 min speaker session with Kishore Vadapalli.",
    day: 1,
    startTime: { hour: 17, minute: 0 },
    endTime: { hour: 17, minute: 30 },
    slug: "speaker-session-2b"
  },
  {
    id: "s1",
    title: "Building Intelligent, Secure Salesforce Applications",
    description: "30 min speaker session with Sai Saketh Sunkara.",
    day: 1,
    startTime: { hour: 21, minute: 0 },
    endTime: { hour: 21, minute: 30 },
    slug: "speaker-session-2"
  },
  {
    id: "s2",
    title: "Quiet Failures, Loud Breaches: Observability and Auto Remediation",
    description: "30 min speaker session with Gowtham Reddy Pappula.",
    day: 2,
    startTime: { hour: 9, minute: 0 },
    endTime: { hour: 9, minute: 30 },
    slug: "speaker-session-3"
  },
  {
    id: "su5",
    title: "Submission deadline",
    description: "Project must be submitted on Devpost before 4 PM IST.",
    day: 2,
    startTime: { hour: 16, minute: 0 },
    endTime: { hour: 16, minute: 15 },
  },
  {
    id: "su6",
    title: "Closing ceremony & prizes",
    description: "Winner announcements.",
    day: 2,
    startTime: { hour: 18, minute: 0 },
    endTime: { hour: 19, minute: 30 },
  },
]


