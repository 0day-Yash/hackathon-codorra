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
    id: "f1",
    slug: "opening-keynote",
    title: "Opening Keynote & Official Kickoff",
    description: "Welcome to CODORRA 2026! Event overview, rules, judging criteria, and the official start of the 48-hour build window. Go build something — the challenge begins.",
    day: 0,
    date: "Friday, May 29",
    startTime: "11:00 AM",
    endTime: "1:00 PM",
    timeLabel: "11:00 AM - 1:00 PM",
    location: "Live Stream",
    type: "keynote",
    host: "CODORRA Team",
    takeaways: ["Event goals and expectations", "How to submit", "Judging criteria overview", "Track structure and resources", "Tips for rapid prototyping", "Team alignment for the first 48 hours"]
  },
  {
    id: "f3",
    slug: "speaker-session-1",
    title: "Securing the AI Cloud: Defending Modern Multi-Cloud Platforms Against Emerging Cyber Threats",
    description: "Multi-cloud platform engineering, DevSecOps transformation, and AI/ML infrastructure security. Building resilient, scalable, and secure infrastructure operations against evolving cyber threats and large-scale operational challenges.",
    day: 0,
    date: "Friday, May 29",
    startTime: "11:00 PM",
    endTime: "11:30 PM",
    timeLabel: "11:00 PM - 11:30 PM",
    location: "Live Stream",
    type: "speaker",
    host: "Naresh Lokiny",
    takeaways: ["Multi-cloud security strategy", "AI/ML infrastructure operations", "DevSecOps transformation and resilience"]
  },
  {
    id: "s1",
    slug: "speaker-session-2",
    title: "Building Intelligent, Secure Salesforce Applications with Agentforce & Data Cloud",
    description: "Architecting Agentforce AI agents with custom Apex actions and Prompt Builder for real-world business workflows. Best practices for Data Cloud integration, AppSec implementation with OAuth 2.0, Named Credentials, and Shield Platform Encryption.",
    day: 1,
    date: "Saturday, May 30",
    startTime: "9:00 PM",
    endTime: "9:30 PM",
    timeLabel: "9:00 PM - 9:30 PM",
    location: "Live Stream",
    type: "speaker",
    host: "Sai Saketh Sunkara",
    takeaways: ["Agentforce AI agents with custom Apex actions", "Data Cloud integration and unified data architecture", "AppSec best practices — OAuth 2.0, Named Credentials, Shield Platform Encryption"]
  },
  {
    id: "s2",
    slug: "speaker-session-3",
    title: "Quiet Failures, Loud Breaches: Observability and Auto Remediation for Regulated Industry Data Pipelines",
    description: "Practical approaches to building observable, resilient, and self-healing data platforms using modern cloud and data engineering practices. Pipeline observability, anomaly detection, automated remediation strategies, and lessons learned from enterprise-scale environments.",
    day: 2,
    date: "Sunday, May 31",
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    timeLabel: "9:00 AM - 9:30 AM",
    location: "Live Stream",
    type: "speaker",
    host: "Gowtham Reddy Pappula",
    takeaways: ["Pipeline observability and anomaly detection", "Automated remediation strategies", "Operational automation for regulated industries"]
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
