import { Translations } from "@/types/i18n";

export const en: Translations = {
  nav: {
    about: "About",
    experience: "Experience",
    work: "Work",
    skills: "Skills",
    contact: "Contact",
    letsTalk: "Let's talk",
  },
  hero: {
    availableBadge: "Available for opportunities",
    location: "Barcelona, Spain",
    role: "Frontend Developer",
    bio: {
      greeting: "Hi! I'm Ivette Sanjurjo Martínez, a ",
      passionate: "passionate",
      experience: "3 years hands-on experience",
      description:
        " front-end developer with hands-on experience. I love creating multiplatform apps that provide seamless user experiences across devices.",
    },
    viewWork: "View My Work",
    downloadCv: "Download CV",
    sideCard: {
      tagline: "Just a girl who loves coding and coffee.",
      description:
        "Passionate about building products that don’t just work well, but genuinely feel good to use.",
    },
    stats: {
      yearsOfExperience: "years of experience",
      projectsEndToEnd: "projects end to end",
      developmentTeam: "development team",
      leadValue: "Lead",
      coffeesConsumed: "coffees consumed",
    },
  },
  experience: {
    title: "My journey",
    subtitle: "Twentic & professional growth",
    intro:
      "Just a girl who loves coding and coffee. I´m a web and mobile app developer passionate about building products that don’t just work well, but genuinely feel good to use. I focus on creating meaningful digital experiences with accessibility and inclusion always in mind.",
    companyName: "Twentic",
    companyLocation: "Barcelona, Spain",
    companyPeriod: "October 2023 - Present",
    roles: [
      {
        title: "Delivery Specialist & AI Prompt Engineer",
        period: "June 2026 - Present",
        badge: "Current Role",
        badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/60",
        type: "Full-time - Hybrid",
        bullets: [
          "Strategic coordination and organization of digital projects, ensuring efficient team resource allocation and strict deadline adherence.",
          "Direct collaboration with Account Management, acting as a technical-operational liaison to ensure optimal deliverable execution and client satisfaction.",
          "Design, optimization, and evaluation of prompts for artificial intelligence models, integrating generative AI solutions to improve workflows and product interactivity.",
          "Supervision of development team capacity, internal process facilitation, and proactive resolution of operational blockers throughout the project lifecycle.",
        ],
        technologies: [
          "AI Prompt Engineering",
          "Generative AI",
          "Delivery",
          "Team Coordination",
          "Agile",
        ],
      },
      {
        title: "Frontend Developer",
        period: "October 2023 - June 2026",
        badge: "Previous Role",
        badgeColor: "bg-neutral-100 text-neutral-700 border-neutral-200/80 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700",
        type: "Full-time - Hybrid",
        description:
          "I have worked in significant projects for different clients, contributing to the development and maintenance of their applications. Learning and enforcing different frameworks and best practices has been a key part of my role.",
        technologies: [
          "React Native",
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "REST APIs",
          "Git",
        ],
      },
    ],
  },
  projects: {
    sectionTag: "Featured Case Studies",
    title: "My work",
    projects: [
      {
        id: "safinder",
        title: "Safinder",
        description:
          "A dating app designed exclusively for lesbian women and non-binary people. The app provides a safe and inclusive space for users to connect, share their experiences, and find meaningful relationships. I contributed to the development of the app, implementing key features and ensuring a smooth user experience. The app is currently live and available for download on the App Store and Google Play.",
        image: "/safinder.png",
        badges: ["In Production", "App Store", "Google Play"],
        badgeColor: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800/60",
        technologies: ["React Native", "TypeScript", "Firebase", "Tailwind CSS", "Mobile UX"],
        liveUrl: "https://safinder.es",
        ctaText: "Visit Safinder.es",
      },
      {
        id: "motia",
        title: "Motia",
        description:
          "An app that helps riders find rides and share their journeys. I contribute to the development of the app along with another great developer. The app is currently in private beta, but I'm excited to share it with the world soon!",
        image: "/motia-name.png",
        badges: ["Private Beta", "Mobile App"],
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
        technologies: ["React Native", "TypeScript", "Maps / GPS", "Node.js"],
        liveUrl: null,
      },
      {
        id: "findhome",
        title: "Find Home",
        description:
          "A modern real estate web platform developed for a real estate agency in Catalunya, featuring property sales and rentals catalogs along with an interactive multi-step property valuation questionnaire.",
        image: "/findhome-preview.png",
        imageCover: true,
        badges: ["In Production", "Web Platform"],
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Interactive Forms"],
        liveUrl: "https://www.find-home.cat/",
      },
      {
        id: "ranramen",
        title: "Ran Ramen",
        description:
          "A vibrant restaurant website crafted for an authentic Japanese ramen house in Vilanova i la Geltrú. Features an interactive menu showcasing 16-hour simmered broths, homemade curries, vegan dishes, and Google reviews integration.",
        image: "/ranramen-preview.png",
        imageCover: true,
        badges: ["In Production", "Web Platform"],
        badgeColor: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/60",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
        liveUrl: "https://ran-ramen-web.vercel.app/",
      },
    ],
  },
  skills: {
    sectionTag: "Technical Toolkit",
    title: "Skills & Tools",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
    },
  },
  contact: {
    badge: "Get in touch",
    title: "Get in touch",
    description:
      "Feel free to reach out to me via email or connect with me on LinkedIn. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    copyEmail: "Copy Email Address",
    emailCopied: "Email Copied to Clipboard!",
    directEmail: "Direct Email",
    resumePdf: "Resume (PDF)",
    location: "Barcelona, Spain",
    footerRights: "— Ivette Sanjurjo Martínez 2026.",
    footerCrafted: "Crafted with care, Next.js & Tailwind CSS",
  },
};
