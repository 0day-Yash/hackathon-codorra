export type SpeakerCategory = "All" | "Organizing Committee" | "Speakers" | "Judges"

export interface Person {
    name: string
    slug: string
    role: string
    company: string
    hackathonRole?: string
    image: string
    bio?: string
    linkedin?: string
    twitter?: string
    email?: string
    contact?: string
    category: SpeakerCategory
    experience?: string
}

export const organizingCommittee: Person[] = [
    {
        name: "Yash Kulkarni",
        slug: "yash-kulkarni",
        role: "Founder & CEO",
        company: "PurpleRain TechSafe",
        hackathonRole: "Co-founder & Lead Speaker",
        image: "/avatars/yash.png",
        linkedin: "https://www.linkedin.com/in/yashkulkarni08/",
        category: "Organizing Committee",
        bio: "Founder and CEO of PurpleRain TechSafe, leading innovation in the cybersecurity space. At CODORRA, Yash serves as the Co-founder and Lead Speaker, overseeing the vision and execution of the hackathon."
    },
    {
        name: "Jonathan Jaladi",
        slug: "jonathan-jaladi",
        role: "Head of Marketing",
        company: "PurpleRain TechSafe",
        hackathonRole: "Co-founder",
        image: "/avatars/jonathan.png",
        linkedin: "https://www.linkedin.com/in/jonathan-jaladi-173165216/",
        category: "Organizing Committee",
        bio: "Marketing strategist with a focus on building impactful tech brands. Jonathan is a Co-founder of CODORRA, responsible for the marketing campaigns and strategic outreach."
    },
    {
        name: "Jenin Sutradhar",
        slug: "jenin-sutradhar",
        role: "Chief Technology Officer",
        company: "PurpleRain TechSafe",
        hackathonRole: "CTO",
        image: "/avatars/jenin.png",
        linkedin: "https://www.linkedin.com/in/jenin-s-b50a2328a/",
        category: "Organizing Committee",
        bio: "Architecting secure and scalable platforms as the CTO of PurpleRain TechSafe. For CODORRA, Jenin manages the technical infrastructure, judging platforms, and developer experience."
    },
    {
        name: "Aditya Shaurya",
        slug: "aditya-shaurya",
        role: "Media & Creative Executive",
        company: "PurpleRain",
        hackathonRole: "Media & Creative Executive",
        image: "/avatars/avatar3.svg",
        email: "aditya.exec0@gmail.com",
        contact: "+91 70797 62521",
        category: "Organizing Committee",
        bio: "I'm Aditya Shaurya, a 15-year-old currently working with PurpleRain as a Media & Creative Executive, sharing my ideas and thoughts. While still figuring things out, I am following my passions for chess and amateur astrophotography."
    },
    {
        name: "Sharvesh",
        slug: "sharvesh",
        role: "Student",
        company: "PES University",
        hackathonRole: "Participant Outreach & Ground Coordinator",
        image: "/avatars/avatar6.svg",
        contact: "+91 80505 31082",
        category: "Organizing Committee",
        bio: "Sharvesh is a student at PES University who manages all participant outreach and serves as the ground manager for round 2 of the hackathon, ensuring a seamless experience for all attendees."
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
    }
]

export const allPeople = [...organizingCommittee, ...speakers, ...judges]
