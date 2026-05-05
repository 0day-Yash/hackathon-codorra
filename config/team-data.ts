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
/*
    {
        name: "Arham Akheel",
        slug: "arham-akheel",
        role: "Senior Solutions Architect",
        company: "Not specified",
        image: "",
        linkedin: "https://www.linkedin.com/in/sakheel/",
        category: "Speakers",
        experience: "13 years",
        bio: "Expert in development and deployment of advanced artificial intelligence and machine learning algorithms leveraging enhanced techniques in optical character recognition and natural language processing, with specific application in critical industries such as healthcare, insurance, and education."
    },
    {
        name: "Praween Kumar",
        slug: "praween-kumar",
        role: "System Architect",
        company: "TBD",
        image: "",
        linkedin: "http://linkedin.com/in/praween-kumar-8b115624",
        category: "Speakers",
        experience: "18 years",
        bio: "Expert in designing and delivering safety-critical embedded software for software-defined vehicles (SDV) and medical devices, with deep platform engineering across AAOS, AOSP, VHAL, HAL, CarService stack, and SoC bring-up — extending through VSS-based semantic abstraction, DDS/SOME/IP/J1939/ISOBUS protocol gateway design, and OEM-agnostic IVI platform development covering Android Auto, CarPlay, and multi-domain vehicle types (automotive, trucking, agriculture, mining). Brings hardware-grounded, real-time DSP and algorithm expertise — originally shaped by defense and space-grade signal processing for national research organizations — to SDV programs demanding ultra-reliable, low-latency software stacks that integrate complex ECU signal pipelines (DBC, ARXML, CAN-FD), connectivity, sensing, and HIL/SIL validation across automotive, medical, and radar systems."
    },
    {
        name: "Venkata Lakshmi Narasimha Kishore Vadapalli",
        slug: "kishore-vadapalli",
        role: "Senior Software Engineer",
        company: "PRO IT INC",
        image: "",
        linkedin: "https://www.linkedin.com/in/kishore-vadapalli-b1579014/",
        category: "Speakers",
        experience: "16 years",
        bio: "Expert in development and deployment of cloud native distributed enterprise platforms that modernize mission critical systems across banking, healthcare, and insurance through scalable Java microservices, event driven architectures, and automated DevOps pipelines. Specializes in transforming large legacy applications into high availability, real time ecosystems using AWS, Kafka based asynchronous processing, infrastructure as code, secure API design, and advanced performance engineering."
    },
    {
        name: "Sougandhika Tera",
        slug: "sougandhika-tera",
        role: "Data Engineer",
        company: "Prorsum Technologies",
        image: "",
        linkedin: "https://www.linkedin.com/in/sougandhika-t-08b9371a9?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        category: "Speakers",
        experience: "4 years",
        bio: "Microsoft Fabric specialist."
    },
    {
        name: "Suchitra Venkatesan",
        slug: "suchitra-venkatesan",
        role: "Production Data Associate Scientist",
        company: "Cepheid",
        image: "",
        linkedin: "https://www.linkedin.com/in/suchitra-venkatesan?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        category: "Speakers",
        experience: "6 years",
        bio: "Sensors, digital twin, healthcare sector."
    },
    {
        name: "Sai Saketh Sunkara",
        slug: "sai-saketh-sunkara",
        role: "Senior Technical Consultant",
        company: "Perficient Inc.",
        image: "",
        linkedin: "www.linkedin.com/in/sai-sunkara-652909270",
        category: "Speakers",
        experience: "7+ years",
        bio: "Specialize in Salesforce CRM, Sales Cloud, Service Cloud, Health Cloud, Commerce Cloud, Data Cloud Experience Cloud, AI, Advanced Apex, JavaScript, Lightning Web Components (LWC), REST/SOAP APIs and DevOps"
    },
    {
        name: "Naresh Lokiny",
        slug: "naresh-lokiny",
        role: "Sr DevOps Cloud Engineer",
        company: "Charter Communications",
        image: "",
        linkedin: "https://www.linkedin.com/in/nareshl/",
        category: "Speakers",
        experience: "10–12 years",
        bio: "DevOps, Kubernetes, Cloud Infrastructure & Distributed Systems"
    },
    {
        name: "Nitanshu Patel",
        slug: "nitanshu-patel",
        role: "Java Developer",
        company: "StoneX Group",
        image: "",
        linkedin: "https://www.linkedin.com/in/nitanshu-patel-39733b2a2/",
        category: "Speakers",
        experience: "7-8 years",
        bio: "Java Backend, Microservices & Financial Systems"
    },
    {
        name: "Parth Patel",
        slug: "parth-patel",
        role: "Frontend Engineer",
        company: "Telecommunications Platforms",
        image: "",
        linkedin: "https://www.linkedin.com/in/parth2973",
        category: "Speakers",
        experience: "6–9 years",
        bio: "Frontend Architecture, Web Systems & UI Engineering"
    },
    {
        name: "Pavan Kumar Mantha",
        slug: "pavan-kumar-mantha",
        role: "AVP, Principal Data Engineer Lead",
        company: "Synchrony",
        image: "",
        category: "Speakers",
        experience: "16 years",
        bio: "Fintech, data engineering"
    },
    {
        name: "Sandeep Nutakki",
        slug: "sandeep-nutakki",
        role: "Sr AI Engineer",
        company: "Auger",
        image: "",
        category: "Speakers",
        experience: "8 years",
        bio: "AI"
    },
    {
        name: "Uday Dhembare",
        slug: "uday-dhembare",
        role: "Data Engineering Manager",
        company: "Amazon",
        image: "",
        linkedin: "www.linkedin.com/in/uday-dhembare-298b7a39",
        category: "Speakers",
        experience: "12 years",
        bio: "Expert in development and deployment of large scale cross-border supply chain optimization and petabyte scale data engineering systems, specializing in real time transportation network design, mathematical & statistical modeling, and AI powered decision frameworks that operate across US, Canada, India and EU logistics ecosystems."
    },
    {
        name: "Tripatjeet Singh",
        slug: "tripatjeet-singh",
        role: "Senior Cloud Engineer",
        company: "UMB Bank",
        image: "",
        linkedin: "https://www.linkedin.com/in/tripatjeet-singh-7162606",
        category: "Speakers",
        experience: "15 years",
        bio: "Cloud architecture, DevOps, AWS, Fintech, Generative & Agentic AI"
    },
    {
        name: "Ekta Sojitra",
        slug: "ekta-sojitra",
        role: "Data Analytics and Data Science Engineer II",
        company: "PG&E",
        image: "",
        linkedin: "https://www.linkedin.com/in/ekta-sojitra-55905a106",
        category: "Speakers",
        experience: "8.5 years",
        bio: "Expert in industrial time series data engineering and large scale analytics platforms, with deep specialization in integrating OSIsoft PI historian data, engineering high volume ODI based pipelines, and delivering governed Power BI ecosystems that support predictive maintenance, asset health insights, operational intelligence, and enterprise reporting across utilities, electric power, and mining."
    },
    {
        name: "Jeyakumar Ramachandran",
        slug: "jeyakumar-ramachandran",
        role: "Senior Technical Specialist",
        company: "HCL Tech",
        image: "",
        linkedin: "https://www.linkedin.com/in/jeyakumar-ramachandran-3483b6124/",
        category: "Speakers",
        experience: "21 years 10 months",
        bio: "Cloud Architect , DevOps Engineer, Kubernetes Engineer, MicroServices & Full Stack Developer"
    },
    {
        name: "Venkata Sai Abhinav Piratla",
        slug: "venkata-sai-abhinav-piratla",
        role: "Senior Cybersecurity Specialist",
        company: "dae Inc.",
        image: "",
        linkedin: "https://www.linkedin.com/in/abhinav-piratla",
        category: "Speakers",
        experience: "6 years",
        bio: "Cybersecurity"
    },
    {
        name: "Hemalatha Murugesan",
        slug: "hemalatha-murugesan",
        role: "Lead Software Engineer",
        company: "Not specified",
        image: "",
        linkedin: "https://www.linkedin.com/in/hemalatha-murugesan-40885a181",
        category: "Speakers",
        experience: "14 years",
        bio: "Expert in development and deployment of advanced software algorithms leveraging enhanced techniques in contact center automation and migration, with specific application in critical industries such as banking and financial technology."
    }
*/

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
        name: "Vedika Saravanam",
        slug: "vedika-saravanam",
        role: "Software Developer (LLM Security)",
        company: "Apple (Previously) -> Now a new employer",
        image: "",
        linkedin: "https://www.linkedin.com/in/vedika-saravanan/",
        category: "Judges",
        experience: "5–7 years",
        bio: "AI, LLM Security & Advanced Computing, Quantum"
    },
]

export const allPeople = [...judges, ...speakers, ...organizingCommittee]
