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
    department?: string
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
        department: "Core Leadership",
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
        department: "Core Leadership",
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
        department: "Core Leadership",
        bio: "Architecting secure and scalable platforms as the CTO of PurpleRain TechSafe. For CODORRA, Jenin manages the technical infrastructure, judging platforms, and developer experience."
    },
    {
        name: "Aditya Shaurya",
        slug: "aditya-shaurya",
        role: "Media & Creative Executive",
        company: "PurpleRain",
        hackathonRole: "Media & Creative Executive",
        image: "/avatars/aditya.jpeg",
        email: "aditya.exec0@gmail.com",
        contact: "+91 70797 62521",
        category: "Organizing Committee",
        department: "Marketing & Social Media",
        bio: "I'm Aditya Shaurya, a 15-year-old currently working with PurpleRain as a Media & Creative Executive, sharing my ideas and thoughts. While still figuring things out, I am following my passions for chess and amateur astrophotography."
    },
    {
        name: "Sharvesh",
        slug: "sharvesh",
        role: "Student",
        company: "PES University",
        hackathonRole: "Participant Outreach & Ground Coordinator",
        image: "/avatars/Sharvesh.jpeg",
        contact: "+91 80505 31082",
        category: "Organizing Committee",
        department: "Core Leadership",
        bio: "Sharvesh is a student at PES University who manages all participant outreach and serves as the ground manager for round 2 of the hackathon, ensuring a seamless experience for all attendees."
    },
    {
        name: "Pratham Shetty",
        slug: "pratham-shetty",
        role: "AIML Student",
        company: "MIT Manipal",
        hackathonRole: "Sponsorship and Partnership Dept",
        image: "/avatars/pratham.jpeg",
        category: "Organizing Committee",
        department: "Sponsorship & Partnership",
        bio: "Pratham Shetty is an AIML student passionate about technology and entrepreneurship. He takes active leadership roles in campus initiatives. He aims to build impactful solutions and grow consistently."
    },
    {
        name: "Aarush Goyal",
        slug: "aarush-goyal",
        role: "Computer Science Student",
        company: "MIT Manipal",
        hackathonRole: "Sponsorship and Partnership Dept",
        image: "/avatars/aarush.jpeg",
        category: "Organizing Committee",
        department: "Sponsorship & Partnership",
        bio: "Aarush Goyal is a Computer Science student at Manipal Institute of Technology (MIT), Manipal, with a strong interest in technology-driven startups, and problem-solving. He has experience in leadership, tech projects, and organizing large-scale initiatives."
    },
    {
        name: "Tejas",
        slug: "tejas",
        role: "Commerce Student",
        company: "MIT Manipal",
        hackathonRole: "Sponsorship and Partnership Dept",
        image: "/avatars/tejas.jpeg",
        category: "Organizing Committee",
        department: "Sponsorship & Partnership",
        bio: "Tejas is a commerce student combining a solid academic foundation with a deep interest in music and entrepreneurial ventures"
    },
    {
        name: "Mahashwin",
        slug: "mahashwin",
        role: "Electrical and Electronics Engineering Student",
        company: "MIT Manipal",
        hackathonRole: "Sponsorship and Partnership Dept",
        image: "/avatars/mahi.jpeg",
        category: "Organizing Committee",
        department: "Sponsorship & Partnership",
        bio: "Mahashwin is a student at MIT Manipal, Electrical and Electronics Engineering, and a Graphic designer."
    },
    {
        name: "Sonali",
        slug: "sonali",
        role: "Marketing & Management",
        company: "CODORRA",
        hackathonRole: "Marketing and Management",
        image: "/avatars/Sonali.jpeg",
        category: "Organizing Committee",
        department: "Marketing & Social Media",
        bio: "Sonali works in the domain of marketing and management, focusing on strategy, branding, and team coordination at CODORRA. She contributes to planning, communication, and execution to ensure impactful initiatives and structured growth."
    },
    {
        name: "Aastha",
        slug: "aastha",
        role: "Social Media Lead",
        company: "CODORRA",
        hackathonRole: "Social Media Lead",
        image: "/avatars/aastha.jpeg",
        category: "Organizing Committee",
        department: "Marketing & Social Media",
        bio: "Aastha leads the social media initiatives at CODORRA, managing content strategy, digital engagement, and online brand presence. She focuses on creating impactful campaigns and building strong audience connections across platforms."
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
        name: "Nikhil Sonti",
        slug: "nikhil-sonti",
        role: "Co-Founder & CEO",
        company: "BrowserOS",
        image: "/avatars/nikhil.png",
        category: "Judges",
        bio: "Nikhil Sonti is the Co-Founder & CEO of BrowserOS and Co-Founder of Felafax (YC S24). A seasoned systems engineer, he developed core infrastructure for Instagram Reels and Facebook Feed Ranking at Meta, and led engineering initiatives at Microsoft. He specializes in distributed systems, ML infrastructure, and AI-native automation, with a strong focus on open-source impact and hardware efficiency."
    }
]

export const allPeople = [...judges, ...speakers, ...organizingCommittee]
