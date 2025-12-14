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
    { id: 0, name: "Friday", date: "June 5" },
    { id: 1, name: "Saturday", date: "June 6" },
    { id: 2, name: "Sunday", date: "June 7" },
  ]
  
  export const MOCK_EVENTS: Event[] = [
    // Friday - June 5
    {
      id: "f1",
      title: "Registration & Breakfast",
      description: "Check-in and breakfast",
      day: 0,
      startTime: { hour: 10, minute: 0 },
      endTime: { hour: 11, minute: 0 },
    },
    {
      id: "f2",
      title: "Opening Keynote",
      description: "Welcome and event overview",
      day: 0,
      startTime: { hour: 11, minute: 0 },
      endTime: { hour: 11, minute: 45 },
    },
    {
      id: "f3",
      title: "Team Presentations - Batch 1",
      description: "First 5 teams demo",
      day: 0,
      startTime: { hour: 12, minute: 0 },
      endTime: { hour: 13, minute: 30 },
    },
    {
      id: "f4",
      title: "Lunch Break",
      description: "Lunch and networking",
      day: 0,
      startTime: { hour: 13, minute: 30 },
      endTime: { hour: 14, minute: 30 },
    },
    {
      id: "f5",
      title: "Team Presentations - Batch 2",
      description: "Next 5 teams demo",
      day: 0,
      startTime: { hour: 14, minute: 30 },
      endTime: { hour: 16, minute: 0 },
    },
    {
      id: "f6",
      title: "Mentorship Sessions",
      description: "1-on-1 mentor meetings",
      day: 0,
      startTime: { hour: 16, minute: 0 },
      endTime: { hour: 17, minute: 30 },
    },
    {
      id: "f7",
      title: "Dinner & Networking",
      description: "Evening social event",
      day: 0,
      startTime: { hour: 18, minute: 0 },
      endTime: { hour: 20, minute: 0 },
    },
  
    // Saturday - June 6
    {
      id: "s1",
      title: "Breakfast",
      description: "Morning breakfast",
      day: 1,
      startTime: { hour: 9, minute: 0 },
      endTime: { hour: 10, minute: 0 },
    },
    {
      id: "s2",
      title: "Workshop - Security Best Practices",
      description: "Technical workshop",
      day: 1,
      startTime: { hour: 10, minute: 0 },
      endTime: { hour: 11, minute: 30 },
    },
    {
      id: "s3",
      title: "Team Presentations - Batch 3",
      description: "Next batch of demos",
      day: 1,
      startTime: { hour: 11, minute: 30 },
      endTime: { hour: 13, minute: 0 },
    },
    {
      id: "s4",
      title: "Lunch Break",
      description: "Catered lunch",
      day: 1,
      startTime: { hour: 13, minute: 0 },
      endTime: { hour: 14, minute: 0 },
    },
    {
      id: "s5",
      title: "Sponsor Showcase",
      description: "Meet company representatives",
      day: 1,
      startTime: { hour: 14, minute: 0 },
      endTime: { hour: 15, minute: 30 },
    },
    {
      id: "s6",
      title: "Expert Panel Discussion",
      description: "Q&A with industry experts",
      day: 1,
      startTime: { hour: 15, minute: 30 },
      endTime: { hour: 17, minute: 0 },
    },
    {
      id: "s7",
      title: "Casual Networking",
      description: "Free time for networking",
      day: 1,
      startTime: { hour: 17, minute: 0 },
      endTime: { hour: 20, minute: 0 },
    },
  
    // Sunday - June 7
    {
      id: "su1",
      title: "Breakfast",
      description: "Final day breakfast",
      day: 2,
      startTime: { hour: 9, minute: 0 },
      endTime: { hour: 10, minute: 0 },
    },
    {
      id: "su2",
      title: "Final Presentations",
      description: "Last batch of team demos",
      day: 2,
      startTime: { hour: 10, minute: 0 },
      endTime: { hour: 12, minute: 0 },
    },
    {
      id: "su3",
      title: "Judges Deliberation",
      description: "Final evaluation",
      day: 2,
      startTime: { hour: 12, minute: 0 },
      endTime: { hour: 13, minute: 30 },
    },
    {
      id: "su4",
      title: "Lunch Break",
      description: "Final lunch",
      day: 2,
      startTime: { hour: 13, minute: 30 },
      endTime: { hour: 14, minute: 30 },
    },
    {
      id: "su5",
      title: "Awards & Prize Ceremony",
      description: "Winner announcements",
      day: 2,
      startTime: { hour: 14, minute: 30 },
      endTime: { hour: 16, minute: 0 },
    },
    {
      id: "su6",
      title: "Closing Remarks & Networking",
      description: "Event conclusion",
      day: 2,
      startTime: { hour: 16, minute: 0 },
      endTime: { hour: 20, minute: 0 },
    },
  ]
  