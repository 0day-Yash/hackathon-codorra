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
    id: "f0",
    title: "Hacking begins",
    description: "48-hour build window opens.",
    day: 0,
    startTime: { hour: 10, minute: 0 },
    endTime: { hour: 11, minute: 0 },
  },
  {
    id: "f1",
    title: "Opening Keynote",
    description: "Welcome, event overview & rules.",
    day: 0,
    startTime: { hour: 11, minute: 0 },
    endTime: { hour: 12, minute: 0 },
  },
  {
    id: "f2",
    title: "Official Kickoff",
    description: "Go build something.",
    day: 0,
    startTime: { hour: 12, minute: 0 },
    endTime: { hour: 13, minute: 0 },
  },
  {
    id: "f3",
    title: "Defensive AI in Regulated Industries: Production NLP and OCR at Scale",
    description: "30 min speaker session.",
    day: 0,
    startTime: { hour: 14, minute: 0 },
    endTime: { hour: 14, minute: 30 },
    slug: "speaker-session-1"
  },
  {
    id: "f4",
    title: "The Connected Vehicle Attack Surface: Cybersecurity in Software-Defined Vehicles",
    description: "30 min speaker session.",
    day: 0,
    startTime: { hour: 17, minute: 0 },
    endTime: { hour: 17, minute: 30 },
    slug: "speaker-session-2"
  },
  {
    id: "f5",
    title: "Event-Driven at Scale: Hardening Java Microservices and Kafka on AWS",
    description: "30 min speaker session.",
    day: 0,
    startTime: { hour: 20, minute: 0 },
    endTime: { hour: 20, minute: 30 },
    slug: "speaker-session-3"
  },
  {
    id: "f6",
    title: "Securing the Modern Data Stack: Governance and Access Control with Microsoft Fabric",
    description: "30 min speaker session.",
    day: 0,
    startTime: { hour: 23, minute: 0 },
    endTime: { hour: 23, minute: 30 },
    slug: "speaker-session-4"
  },
  {
    id: "s1",
    title: "AI in Medical Devices: Sensor Data, Digital Twins, and the Patient-Privacy Boundary",
    description: "30 min speaker session.",
    day: 1,
    startTime: { hour: 9, minute: 0 },
    endTime: { hour: 9, minute: 30 },
    slug: "speaker-session-5"
  },
  {
    id: "s2",
    title: "Enterprise CRM Under Attack: Securing Apex, LWC, and the Salesforce API Surface",
    description: "30 min speaker session.",
    day: 1,
    startTime: { hour: 13, minute: 0 },
    endTime: { hour: 13, minute: 30 },
    slug: "speaker-session-6"
  },
  {
    id: "s3",
    title: "Speaker Session 7 — Privacy, Crypto & Zero Trust",
    description: "30 min speaker session.",
    day: 1,
    startTime: { hour: 17, minute: 0 },
    endTime: { hour: 17, minute: 30 },
  },
  {
    id: "s4",
    title: "Speaker Session 8 — Founders & Operators AMA",
    description: "30 min speaker session.",
    day: 1,
    startTime: { hour: 21, minute: 0 },
    endTime: { hour: 21, minute: 30 },
  },
  {
    id: "su1",
    title: "Speaker Session 9 — Industry Leaders Panel",
    description: "30 min speaker session.",
    day: 2,
    startTime: { hour: 9, minute: 0 },
    endTime: { hour: 9, minute: 30 },
  },
  {
    id: "su2",
    title: "Speaker Session 10 — Pitching & Demo Day Tips",
    description: "30 min speaker session.",
    day: 2,
    startTime: { hour: 11, minute: 0 },
    endTime: { hour: 11, minute: 30 },
  },
  {
    id: "su3",
    title: "Speaker Session 11 — Careers in Cybersecurity & AI",
    description: "30 min speaker session.",
    day: 2,
    startTime: { hour: 13, minute: 0 },
    endTime: { hour: 13, minute: 30 },
  },
  {
    id: "su4",
    title: "Speaker Session 12 — The Global Security Ecosystem",
    description: "30 min speaker session.",
    day: 2,
    startTime: { hour: 15, minute: 0 },
    endTime: { hour: 15, minute: 30 },
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


