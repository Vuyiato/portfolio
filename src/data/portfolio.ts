import { Experience, Project, Skill } from "@/types";

export const portfolioData = {
  name: "Vuyisile Thato Shokane",
  title: "Full-Stack Web Developer",
  subtitle: "Building scalable digital solutions with clean, maintainable code",
  bio: "Graduate Computer Science student passionate about web development and solving complex problems. Experienced in designing and developing responsive, user-focused applications. Proven ability to work in teams, analyze requirements, and translate them into functional solutions. Background in IT support and AV systems strengthens my systems thinking and troubleshooting skills.",
  email: "vuyiato1@gmail.com",
  phone: "0723012788",
  github: "https://github.com/VUYIATO",
  linkedin: "https://www.linkedin.com/in/vuyisile-thato-shokane-21b101196/",
};

export const experiences: Experience[] = [
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
      "Strengthened full-stack development skills through hands-on implementation",
    ],
    skills: ["PHP", "MySQL", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Audio Visual Specialist (Freelance)",
    company: "Grace Bible Church",
    period: "February 2017 - Current",
    description: [
      "Managed production for 50+ large-scale virtual and hybrid events, supporting audiences of 500+ attendees",
      "Designed and implemented an improved AV system, reducing equipment failures by 30% and cutting setup time significantly",
      "Provided technical troubleshooting across hardware, software, and live-streaming platforms",
      "Collaborated with cross-functional teams, enhancing communication, planning, and delivery under pressure",
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
