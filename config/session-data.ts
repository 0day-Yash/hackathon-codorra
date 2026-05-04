export interface SessionEvent {
  id: string
  slug?: string
  title: string
  description: string
  day: 0 | 1 | 2
  date: string
  startTime: string
  endTime?: string
  timeLabel: string
  location: string
  type: "keynote" | "kickoff" | "speaker" | "deadline" | "ceremony" | "build" | "community"
  host: string
  takeaways?: string[]
}

export const SCHEDULE_DAYS = [
  { id: 0, name: "Day 1", date: "Friday, May 29" },
  { id: 1, name: "Day 2", date: "Saturday, May 30" },
  { id: 2, name: "Day 3", date: "Sunday, May 31" },
] as const

export const SCHEDULE_EVENTS: SessionEvent[] = [
  {
    id: "f0",
    title: "Hacking Begins",
    description: "The 48-hour build window opens for all teams.",
    day: 0,
    date: "Friday, May 29",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    timeLabel: "10:00 AM - 11:00 AM",
    location: "Global",
    type: "build",
    host: "CODORRA Team",
    takeaways: ["Start building immediately", "Use Discord for support", "Track progress with your team"]
  },
  {
    id: "f1",
    slug: "opening-keynote",
    title: "Opening Keynote",
    description: "Welcome, event overview, and rules for the hackathon.",
    day: 0,
    date: "Friday, May 29",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    timeLabel: "11:00 AM - 12:00 PM",
    location: "Live Stream",
    type: "keynote",
    host: "Not decided",
    takeaways: ["Event goals and expectations", "How to submit", "Judging criteria overview"]
  },
  {
    id: "f2",
    slug: "official-kickoff",
    title: "Official Kickoff",
    description: "Go build something — the challenge begins.",
    day: 0,
    date: "Friday, May 29",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    timeLabel: "12:00 PM - 1:00 PM",
    location: "Live Stream",
    type: "kickoff",
    host: "Not decided",
    takeaways: ["Track structure and resources", "Tips for rapid prototyping", "Team alignment for the first 48 hours"]
  },
  {
    id: "f3",
    slug: "speaker-session-1",
    title: "Defensive AI in Regulated Industries: Production NLP and OCR at Scale",
    description: "How applied NLP and OCR systems harden document and decision pipelines across healthcare, insurance, and education.",
    day: 0,
    date: "Friday, May 29",
    startTime: "2:00 PM",
    endTime: "2:30 PM",
    timeLabel: "2:00 PM - 2:30 PM",
    location: "Live Stream",
    type: "speaker",
    host: "Arham Akheel",
    takeaways: ["AI attack vectors", "Emerging risk patterns", "How security teams are adapting"]
  },
  {
    id: "f4",
    slug: "speaker-session-2",
    title: "The Connected Vehicle Attack Surface: Cybersecurity in Software-Defined Vehicles",
    description: "How modern vehicle software stacks - from AAOS and the in-vehicle network up to OTA channels - are designed, attacked, and defended in production SDV platforms.",
    day: 0,
    date: "Friday, May 29",
    startTime: "5:00 PM",
    endTime: "5:30 PM",
    timeLabel: "5:00 PM - 5:30 PM",
    location: "Live Stream",
    type: "speaker",
    host: "Praween Kumar",
    takeaways: ["Smart contract risk", "Decentralized trust models", "Practical security guardrails"]
  },
  {
    id: "f5",
    slug: "speaker-session-3",
    title: "Event-Driven at Scale: Hardening Java Microservices and Kafka on AWS",
    description: "Patterns for securing high-throughput event-driven Java systems on AWS, drawn from banking, healthcare, and insurance workloads.",
    day: 0,
    date: "Friday, May 29",
    startTime: "8:00 PM",
    endTime: "8:30 PM",
    timeLabel: "8:00 PM - 8:30 PM",
    location: "Live Stream",
    type: "speaker",
    host: "Kishore Vadapalli",
    takeaways: ["Resilient infrastructure patterns", "Scaling securely", "Cloud security tradeoffs"]
  },
  {
    id: "f6",
    slug: "speaker-session-4",
    title: "Securing the Modern Data Stack: Governance and Access Control with Microsoft Fabric",
    description: "How modern data platforms enforce governance and access control at the foundation, before pipelines reach the application layer.",
    day: 0,
    date: "Friday, May 29",
    startTime: "11:00 PM",
    endTime: "11:30 PM",
    timeLabel: "11:00 PM - 11:30 PM",
    location: "Live Stream",
    type: "speaker",
    host: "Sougandhika Tera",
    takeaways: ["Community-driven security tooling", "Integrating open source safely", "Observability and automation"]
  },
  {
    id: "s1",
    slug: "speaker-session-5",
    title: "AI in Medical Devices: Sensor Data, Digital Twins, and the Patient-Privacy Boundary",
    description: "Where AI and IoT meet the most sensitive data category, and what defensive design looks like in clinical hardware.",
    day: 1,
    date: "Saturday, May 30",
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    timeLabel: "9:00 AM - 9:30 AM",
    location: "Live Stream",
    type: "speaker",
    host: "Suchitra Venkatesan",
    takeaways: ["LLM vulnerability patterns", "Safety controls", "Responsible deployment"]
  },
  {
    id: "s2",
    slug: "speaker-session-6",
    title: "Enterprise CRM Under Attack: Securing Apex, LWC, and the Salesforce API Surface",
    description: "AppSec patterns across the Salesforce ecosystem - Sales, Service, Health, Data Cloud - and the enterprise integration layer.",
    day: 1,
    date: "Saturday, May 30",
    startTime: "1:00 PM",
    endTime: "1:30 PM",
    timeLabel: "1:00 PM - 1:30 PM",
    location: "Live Stream",
    type: "speaker",
    host: "Sai Saketh Sunkara",
    takeaways: ["Threat data in incident response", "AppSec testing strategies", "Securing the software delivery lifecycle"]
  },
  {
    id: "s3",
    slug: "speaker-session-7",
    title: "Speaker Session 7 — Privacy, Crypto & Zero Trust",
    description: "Privacy-first design, cryptography, and zero-trust principles.",
    day: 1,
    date: "Saturday, May 30",
    startTime: "5:00 PM",
    endTime: "5:30 PM",
    timeLabel: "5:00 PM - 5:30 PM",
    location: "Live Stream",
    type: "speaker",
    host: "Not decided",
    takeaways: ["Privacy engineering basics", "Crypto for modern systems", "Zero trust adoption patterns"]
  },
  {
    id: "s4",
    slug: "speaker-session-8",
    title: "Speaker Session 8 — Founders & Operators AMA",
    description: "Founders and operators answer live questions on building secure teams and products.",
    day: 1,
    date: "Saturday, May 30",
    startTime: "9:00 PM",
    endTime: "9:30 PM",
    timeLabel: "9:00 PM - 9:30 PM",
    location: "Live Stream",
    type: "speaker",
    host: "Not decided",
    takeaways: ["Building for security from day one", "Operations at scale", "Founder lessons from the front line"]
  },
  {
    id: "su1",
    slug: "speaker-session-9",
    title: "Speaker Session 9 — Industry Leaders Panel",
    description: "A panel discussion on the global security landscape.",
    day: 2,
    date: "Sunday, May 31",
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    timeLabel: "9:00 AM - 9:30 AM",
    location: "Live Stream",
    type: "speaker",
    host: "Not decided",
    takeaways: ["Security industry trends", "Market and threat outlook", "Career advice from leaders"]
  },
  {
    id: "su2",
    slug: "speaker-session-10",
    title: "Speaker Session 10 — Pitching & Demo Day Tips",
    description: "Practical guidance for compelling pitches and demo preparation.",
    day: 2,
    date: "Sunday, May 31",
    startTime: "11:00 AM",
    endTime: "11:30 AM",
    timeLabel: "11:00 AM - 11:30 AM",
    location: "Live Stream",
    type: "speaker",
    host: "Not decided",
    takeaways: ["Storytelling for judges", "Demo polish tips", "Common pitch mistakes to avoid"]
  },
  {
    id: "su3",
    slug: "speaker-session-11",
    title: "Speaker Session 11 — Careers in Cybersecurity & AI",
    description: "Pathways and opportunities across security and artificial intelligence.",
    day: 2,
    date: "Sunday, May 31",
    startTime: "1:00 PM",
    endTime: "1:30 PM",
    timeLabel: "1:00 PM - 1:30 PM",
    location: "Live Stream",
    type: "speaker",
    host: "Not decided",
    takeaways: ["Emerging roles in AI and security", "Skills hiring managers want", "Building a standout profile"]
  },
  {
    id: "su4",
    slug: "speaker-session-12",
    title: "Speaker Session 12 — The Global Security Ecosystem",
    description: "How the worldwide security ecosystem is evolving today.",
    day: 2,
    date: "Sunday, May 31",
    startTime: "3:00 PM",
    endTime: "3:30 PM",
    timeLabel: "3:00 PM - 3:30 PM",
    location: "Live Stream",
    type: "speaker",
    host: "Not decided",
    takeaways: ["Global collaboration trends", "Policy and governance updates", "Ecosystem-level security initiatives"]
  },
  {
    id: "su5",
    title: "Submission Deadline",
    description: "Project must be submitted on Devpost before 4:00 PM IST.",
    day: 2,
    date: "Sunday, May 31",
    startTime: "4:00 PM",
    timeLabel: "4:00 PM",
    location: "Devpost",
    type: "deadline",
    host: "CODORRA Team",
    takeaways: ["Final checks before submission", "Make sure all links work", "Submit before the deadline"]
  },
  {
    id: "su6",
    title: "Closing Ceremony & Prizes",
    description: "Winner announcements and event wrap-up.",
    day: 2,
    date: "Sunday, May 31",
    startTime: "6:00 PM",
    endTime: "7:30 PM",
    timeLabel: "6:00 PM - 7:30 PM",
    location: "Live Stream",
    type: "ceremony",
    host: "CODORRA Team",
    takeaways: ["Winner recognition", "Final wrap-up", "Next steps for participants"]
  }
]

export const SPEAKER_SESSIONS = SCHEDULE_EVENTS.filter((event) => event.type === "speaker")
export const SESSION_SLUGS = SPEAKER_SESSIONS.map((event) => event.slug).filter(Boolean) as string[]
