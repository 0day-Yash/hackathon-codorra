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
  meetLink?: string
  meetPin?: string
  dialNumber?: string
  morePhoneNumbers?: string
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
    takeaways: ["Event goals and expectations", "How to submit", "Judging criteria overview", "Track structure and resources", "Tips for rapid prototyping", "Team alignment for the first 48 hours"],
    meetLink: "https://meet.google.com/ywe-zitc-dqq",
    meetPin: "671 289 455 5064",
    dialNumber: "(IT) +39 02 8734 8723",
    morePhoneNumbers: "https://tel.meet/ywe-zitc-dqq?pin=6712894555064"
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
    takeaways: ["Multi-cloud security strategy", "AI/ML infrastructure operations", "DevSecOps transformation and resilience"],
    meetLink: "https://meet.google.com/rpg-zikt-zup",
    meetPin: "825 911 165 6285",
    dialNumber: "(IT) +39 02 8734 8723",
    morePhoneNumbers: "https://tel.meet/rpg-zikt-zup?pin=8259111656285"
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
    takeaways: ["Agentforce AI agents with custom Apex actions", "Data Cloud integration and unified data architecture", "AppSec best practices — OAuth 2.0, Named Credentials, Shield Platform Encryption"],
    meetLink: "https://meet.google.com/ksp-iqot-sym",
    meetPin: "250 471 938 3806",
    dialNumber: "(IT) +39 02 8734 8723",
    morePhoneNumbers: "https://tel.meet/ksp-iqot-sym?pin=2504719383806"
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
    takeaways: ["Pipeline observability and anomaly detection", "Automated remediation strategies", "Operational automation for regulated industries"],
    meetLink: "https://meet.google.com/rqq-fnij-eyw",
    meetPin: "513 937 913 1097",
    dialNumber: "(IT) +39 02 8734 8723",
    morePhoneNumbers: "https://tel.meet/rqq-fnij-eyw?pin=5139379131097"
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
    takeaways: ["Winner recognition", "Final wrap-up", "Next steps for participants"],
    meetLink: "https://meet.google.com/vkq-phmv-tiy",
    meetPin: "976 467 478 1548",
    dialNumber: "(IT) +39 02 8734 8723",
    morePhoneNumbers: "https://tel.meet/vkq-phmv-tiy?pin=9764674781548"
  }
]

export const SPEAKER_SESSIONS = SCHEDULE_EVENTS.filter((event) => event.type === "speaker")
export const SESSION_SLUGS = SPEAKER_SESSIONS.map((event) => event.slug).filter(Boolean) as string[]
