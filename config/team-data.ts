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
        name: "Tanishka",
        slug: "tanishka",
        role: "CMO",
        company: "FluidCrafts",
        hackathonRole: "Organizer & Speaker",
        image: "/avatars/tanishka.jpeg",
        category: "Organizing Committee",
        department: "Core Leadership",
        bio: "Being the CMO at FluidCrafts, Tanishka leads strategic brand development and creative growth, bridging the gap between technical solutions and market impact"
    },
    /*
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
    */
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
        name: "Nikita",
        slug: "nikita",
        role: "Marketing Lead",
        company: "CODORRA",
        hackathonRole: "Event Marketing & Social Media",
        image: "/avatars/nikita.jpeg",
        category: "Organizing Committee",
        department: "Marketing & Social Media",
        bio: "Hi, I’m Nikita. I’m into marketing, creativity and brand storytelling and I love mixing business, ideas, and a little bit of chaos to create things people genuinely connect with. She is handling event marketing and social media."
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
    },
    {
        name: "Srinidhi",
        slug: "srinidhi",
        role: "Event Coordinator",
        company: "Manipal Institute of Technology",
        hackathonRole: "Event Coordinator",
        image: "/avatars/srinidhi.jpeg",
        category: "Organizing Committee",
        department: "Core Leadership",
        bio: "Undergraduate at Manipal Institute of Technology studying Financial Technology. Interested in how data, technology, and finance combine to drive real-world decisions, and enjoys solving analytical and practical problems."
    },
    {
        name: "Hazim Hilal",
        slug: "hazim-hilal",
        role: "Technical Support Lead",
        company: "CODORRA",
        hackathonRole: "Technical Support Lead",
        image: "/avatars/hamid.jpeg",
        category: "Organizing Committee",
        department: "Operations",
        email: "hazimbhat2004@gmail.com",
        contact: "+91 70512 57198",
        bio: "I’m Hazim, a 21-year-old Bachelor of Technology student currently working as a Customer Success Team Lead. I am a passionate CSM, who loves to work and continuously strive to grow both personally and professionally. I have a strong interest in emerging technologies and love exploring electronic gadgets. About the hobbies, I enjoy playing games and watching cricket. I’m most of times curious, and always looking to improve my skills and learn something new."
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
        email: "prasenjit.s@gusto.com",
        contact: "+1 650-000-0000",
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
        email: "nikhil@browseros.com",
        contact: "+1 415-000-0000",
        bio: "Nikhil Sonti is the Co-Founder & CEO of BrowserOS and Co-Founder of Felafax (YC S24). A seasoned systems engineer, he developed core infrastructure for Instagram Reels and Facebook Feed Ranking at Meta, and led engineering initiatives at Microsoft. He specializes in distributed systems, ML infrastructure, and AI-native automation, with a strong focus on open-source impact and hardware efficiency."
    },
    {
        name: "Danil Matrosov",
        slug: "danil-matrosov",
        role: "CEO and Founder",
        company: "Parkout and Octery",
        image: "/avatars/danil.jpg",
        category: "Judges",
        email: "matrosovdani@gmail.com",
        contact: "79181301909",
        bio: "Danil Matrosov is a software engineer and startup founder specializing in AI-driven systems and high-load backend architecture. He is the Founder & CEO of ParkOut, an AI platform that predicts parking availability using real-time data and machine learning, and the Founder of Octery, an AI intake automation system for service businesses. Previously, he worked as a backend engineer on large-scale fintech systems, designing distributed microservices and optimizing high-throughput infrastructure. His expertise includes AI systems, data-driven platforms, and scalable backend architecture, with a focus on building production-ready products."
    },
    {
        name: "Nanda Lal Das",
        slug: "nanda-lal-das",
        role: "Full-stack Engineer",
        company: "Cyber Peak IT Solutions",
        image: "/avatars/avatar1.svg",
        category: "Judges",
        email: "tikludas01@gmail.com",
        contact: "+91 7044992445",
        bio: "I build things, ship them, and make them matter. Won MSME Hackathon 4.0 & walked away with ₹5 lakh in funding for a tech-driven solution. I’m a full-stack engineer comfortable across the entire spectrum. I don’t just write code, I take it to production. At Cyber Peak IT Solutions, I built modules of a live Project Management System from scratch, replacing spreadsheet workflows with real software. At Dev Launchers, I maintained shared components in a monorepo used by engineers worldwide. Outside of code, I founded MetaMorph Hackathon built it from zero to 3,000+ registrations across India."
    }
]

export const allPeople = [...judges, ...speakers, ...organizingCommittee]
