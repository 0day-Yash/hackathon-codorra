export type SpeakerCategory = "All" | "Organizing Committee" | "Speakers" | "Volunteers" | "Judges"

export interface Person {
    name: string
    slug: string
    role: string
    company: string
    image: string
    bio?: string
    linkedin?: string
    twitter?: string
    category: SpeakerCategory
    experience?: string
}

export const organizingCommittee: Person[] = [
    {
        name: "Yash Kulkarni",
        slug: "yash-kulkarni",
        role: "Founder & CEO",
        company: "PurpleRain TechSafe",
        image: "/avatars/yash.png",
        linkedin: "https://www.linkedin.com/in/yashkulkarni08/",
        category: "Organizing Committee",
        bio: "Founder and CEO of PurpleRain TechSafe, leading innovation in the cybersecurity space."
    },
    {
        name: "Jonathan Jaladi",
        slug: "jonathan-jaladi",
        role: "Head of Marketing",
        company: "PurpleRain TechSafe",
        image: "/avatars/jonathan.png",
        linkedin: "https://www.linkedin.com/in/jonathan-jaladi-173165216/",
        category: "Organizing Committee",
        bio: "Marketing strategist with a focus on building impactful tech brands."
    },
    {
        name: "Jenin Sutradhar",
        slug: "jenin-sutradhar",
        role: "Chief Technology Officer",
        company: "PurpleRain TechSafe",
        image: "/avatars/jenin.png",
        linkedin: "https://www.linkedin.com/in/jenin-s-b50a2328a/",
        category: "Organizing Committee",
        bio: "Architecting secure and scalable platforms as the CTO of PurpleRain TechSafe."
    }
]

export const speakers: Person[] = []

export const judges: Person[] = [
    {
        name: "Prasenjit Sinha",
        slug: "prasenjit-sinha",
        role: "Lead iOS Engineer",
        company: "Gusto",
        image: "/avatars/Prasenjit.png",
        linkedin: "https://www.linkedin.com/in/prasenjit-sinha-b6395759/",
        category: "Judges",
        experience: "17+ years in iOS/macOS engineering",
        bio: "Lead software iOS/MacOS engineer and researcher specializing in mobile platform architecture, application performance engineering, and concurrency-safe software design. 17+ years of experience working at Apple, BlueJeans by Verizon, and Gusto."
    },
    {
        name: "David Kim",
        slug: "david-kim",
        role: "Venture Partner",
        company: "SecureVentures",
        image: "/avatars/avatar8.svg",
        linkedin: "https://linkedin.com/in/davidkim",
        category: "Judges",
        bio: "Venture capitalist specializing in early-stage cybersecurity startups."
    },
    {
        name: "Emma Thompson",
        slug: "emma-thompson",
        role: "Security Architect",
        company: "CloudGuard",
        image: "/avatars/avatar1.svg",
        linkedin: "https://linkedin.com/in/emmathompson",
        category: "Judges",
        bio: "Expert in cloud security infrastructure and threat modeling."
    }
]

export const volunteers: Person[] = []

export const allPeople = [...organizingCommittee, ...speakers, ...judges, ...volunteers]
