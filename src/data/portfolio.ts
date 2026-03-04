import { Experience, Project, Skill } from "@/types";

export const portfolioData = {
  name: "Vuyisile Thato Shokane",
  title: "Full-Stack Developer & Founder",
  subtitle: "I build purpose-driven software that automates operations, scales businesses, and solves real problems. Founder of ContentWall Systems.",
  bio: "Computer Science graduate and founder of ContentWall Systems - a software company that engineers integrated systems for businesses across South Africa. I specialize in building scalable web platforms, field service automation tools, and enterprise workflow systems. My background spans full-stack development, systems design, and AV production engineering.",
  email: "vuyiato1@gmail.com",
  phone: "0723012788",
  github: "https://github.com/VUYIATO",
  linkedin: "https://www.linkedin.com/in/vuyisile-thato-shokane-21b101196/",
  contentwall: "https://contentwall-systems.vercel.app/",
};

export const experiences: Experience[] = [
  {
    title: "Founder & Lead Developer",
    company: "ContentWall Systems",
    period: "2025 - Present",
    description: [
      "Founded a software company that engineers purpose-built systems for businesses that take their operations seriously",
      "Architected and delivered custom field service automation, corporate workflow, and web platform solutions for clients across HVAC, property management, and professional services",
      "Reduced client admin overhead by 60% and cut missed appointments by 73% through intelligent scheduling and GPS fleet tracking",
      "Built enterprise-grade platforms with security-first architecture, scalable infrastructure, and ongoing support partnerships",
    ],
    skills: ["Next.js", "React", "TypeScript", "Node.js", "System Architecture", "Business Strategy"],
  },
  {
    title: "Final-Year Project - Web Developer & Systems Analyst",
    company: "Eduvos University",
    period: "July 2025 - December 2025",
    description: [
      "Led a 3-member development team in designing a digital health mobile application for a dermatology clinic",
      "Conducted requirements gathering and workflow analysis, translating clinical processes into functional system requirements",
      "Designed a secure, data-driven solution to streamline appointment booking, client communication, and payments",
      "Produced comprehensive technical documentation, system diagrams, and stakeholder presentations",
    ],
    skills: ["Flutter", "Firebase", "Requirements Analysis", "Team Leadership"],
  },
  {
    title: "Freelance Web Developer",
    company: "Arthaus E-Commerce Platform",
    period: "February 2025 - June 2025",
    description: [
      "Designed and developed a responsive e-commerce website with dynamic product listings and user-focused navigation",
      "Implemented backend integration using PHP, MySQL, and XAMPP for data persistence and content management",
      "Applied iterative development and stakeholder feedback to improve usability and performance",
    ],
    skills: ["PHP", "MySQL", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Audio Visual Specialist (Freelance)",
    company: "Grace Bible Church",
    period: "February 2017 - Present",
    description: [
      "Managed production for 50+ large-scale virtual and hybrid events, supporting audiences of 500+ attendees",
      "Designed and implemented an improved AV system, reducing equipment failures by 30%",
      "Provided technical troubleshooting across hardware, software, and live-streaming platforms",
    ],
    skills: ["Technical Support", "Problem-Solving", "Systems Design", "Team Collaboration"],
  },
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript/TypeScript", "HTML5", "CSS3", "SQL", "C++", "C#"],
  },
  {
    category: "Web Development",
    items: ["React", "Next.js", "Front-end Development", "Responsive Design", "Backend Development", "RESTful APIs"],
  },
  {
    category: "Frameworks & Platforms",
    items: ["Flutter", "Firebase", "PHP"],
  },
  {
    category: "Databases & Tools",
    items: ["MySQL", "Git & GitHub", "Visual Studio Code", "XAMPP", "Eclipse"],
  },
  {
    category: "Software Engineering",
    items: ["Object-Oriented Programming", "Data Structures", "Agile/Scrum", "Systems Design", "Technical Documentation"],
  },
];

export const projects: Project[] = [
  {
    title: "ContentWall Systems",
    description: "Founded and built a software company that engineers purpose-built systems for businesses across South Africa. Delivered field service automation, corporate workflow engines, and custom web platforms with enterprise-grade security and scalable architecture.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "Vercel"],
    featured: true,
    link: "https://contentwall-systems.vercel.app/",
  },
  {
    title: "Healthcare Mobile Application",
    description: "Cross-platform healthcare solution for a dermatology clinic featuring real-time appointment scheduling, secure document sharing, and data-driven patient triage. Led development of a 3-member team with comprehensive requirements analysis and system design.",
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Firestore"],
    featured: true,
    demo: "https://portal.dermaglare.co.za/",
    admin: "https://admin.dermaglare.co.za/",
    link: "https://dermaglare.co.za/",
  },
  {
    title: "Arthaus E-Commerce Platform",
    description: "Full-stack responsive e-commerce website with dynamic product listings, user authentication, shopping cart, and payment integration. Implemented secure backend with PHP and MySQL for data persistence.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "XAMPP"],
    featured: true,
  },
  {
    title: "University Projects",
    description: "Multiple academic projects demonstrating software engineering principles including database design, system analysis, and application development across various technologies.",
    technologies: ["Java", "Python", "MySQL", "OOP", "Data Structures"],
    featured: false,
    github: "https://github.com/VUYIATO",
  },
];

export const education = {
  school: "Eduvos University",
  degree: "Bachelor of Science in Computer Science",
  gpa: "3.7",
  graduationYear: "2025",
  coursework: [
    "Software Engineering",
    "Database Management",
    "Systems Analysis & Design",
    "Application Development",
    "Data Structures",
    "Object-Oriented Programming",
  ],
};
