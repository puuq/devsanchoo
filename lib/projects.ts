export interface Project {
  id: string;
  title: string;
  shortDescription?: string;
  description: string;
  image?: string;
  tags: string[];
  category: "frontend" | "backend" | "ai" | "mobile" | "other";
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "sgtproductions",
    title: "SGT PRODUCTIONS",
    shortDescription:
      "A full-stack film-production website designed, built, and deployed from scratch for an Australian client.",
    description:
      "A production-ready website for an Australian film company focused on co-productions and international markets. I handled the complete lifecycle: UI/UX, responsive frontend, backend features, authentication, forms, image uploads, database integration, and deployment.",
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "SQLite",
      "JWT",
      "Zod",
      "Framer Motion",
    ],
    category: "frontend",
    liveUrl: "https://sgtproductions.com",
  },
  {
    id: "nepfaceproduction",
    title: "NEPFACE PRODUCTION",
    shortDescription:
      "A responsive marketing and portfolio website for a Kathmandu-based creative media studio.",
    description:
      "Designed, built, and deployed from scratch for a paid client. The site combines a filterable work portfolio, video interactions, smooth scrolling, validated contact forms, responsive layouts, and technical SEO.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "React Hook Form",
      "Zod",
      "Technical SEO",
    ],
    category: "frontend",
    liveUrl: "https://nepfaceproduction.com",
  },
  {
    id: "billing-dashboard",
    title: "MULTI-BRANCH BILLING DASHBOARD",
    shortDescription:
      "A private production dashboard used by two clothing-company branches to manage bills, advances, and profit calculations.",
    description:
      "An independently designed, developed, and deployed business application for a clothing company. It supports authenticated users, branch-aware role permissions, pending and historical bill tracking, advance payments, and profit calculations. Client data and access remain private.",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Authentication",
      "Role-based Access",
      "Cloudflare",
      "Business Operations",
    ],
    category: "backend",
  },
  {
    id: "mailswayinc",
    title: "INTEGRATED MAILING & DATA SERVICES",
    shortDescription:
      "Professional B2B website for Mailsway Inc, showcasing their direct mail and fulfillment services with a clean, service-driven design.",
    description:
      "A professional B2B website developed for Mailsway Inc, a US-based direct mail and fulfillment company. The site highlights their comprehensive printing, data processing, and logistics services through a clean layout, service-driven content, and mobile-optimized design.",
    image: "/mailswayinc.png",
    tags: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "React",
      "JavaScript",
      "Responsive Design",
      "Direct Mail Services",
      "SEO Optimization",
    ],
    category: "frontend",
    liveUrl: "https://www.mailswayinc.com/",
  },
  {
    id: "gameplan",
    title: "GAMEPLAN - AI-POWERED MATCH ANALYTICS DASHBOARD",
    shortDescription:
      "An interactive web dashboard for real-time football analytics using AI and computer vision technologies like YOLO and OpenCV.",
    description:
      "An interactive React + Node.js web interface for visualizing real-time football analytics powered by YOLO and OpenCV. The dashboard displays player tracking, team heatmaps, and performance insights streamed from a FastAPI backend. Designed with smooth data synchronization, modular components, and responsive visuals for a professional analytics experience.",
    image: "/gameplan.png",
     tags: [
    "React.js",
    "Node.js",
    "FastAPI",
    "YOLO",
    "OpenCV",
    "AI Analytics",
    "Computer Vision",
    "Data Visualization",
    "Sports Tech"
    ],
    category: "frontend",
    liveUrl: "https://game-plan-eight.vercel.app/",
    // githubUrl: "https://github.com/puuq/GamePlan",
  },
  {
    id: "trinityremovals",
    title: "HOUSE & APARTMENT MOVING SERVICES",
    shortDescription:
      "A full-featured web platform for Trinity Removals, offering moving services across Australia with booking, quotes, and service details.",
    description:
      "A responsive website for an Australian moving company, presenting home and apartment relocation services with clear calls to action and service information.",
    image: "/trinity.png",
    tags: [
      "Django",
      "Responsive Design",
      "HTML5",
      "CSS3",
    ],
    category: "backend",
    githubUrl: "https://github.com/puuq/Trinity-Removals/tree/main",
  },
  {
    id: "perfectincense",
    title: "PERFECT INCENSE - HOME & OFFICE CLEANING SERVICES",
    shortDescription:
      "A web platform built for Perfect Incense, enabling customers to book professional cleaning services for homes and workplaces.",
    description:
      "A web platform built for Perfect Incense, enabling customers to book professional cleaning services for homes and workplaces. Designed with a user-friendly interface, responsive layout, and smooth booking flow to streamline service requests.",
    image: "/perfectincense.png",
    tags: [
      "React",
      "Node.js",
      "Responsive Design",
      "HTML5",
      "CSS3",
    ],
    category: "backend",
    liveUrl: "https://perfectincense.com/",
    githubUrl: "https://github.com/puuq/perfectincense",
  },
  {
    id: "pacifichunt",
    title: "ENERGY EXPLORATION COMPANY WEBSITE",
    shortDescription:
      "A corporate website for Pacific Hunt Energy, showcasing their oil and gas operations, exploration activities, and sustainability initiatives.",
    description:
      "A corporate website for Pacific Hunt Energy, showcasing their oil and gas operations, exploration activities, and sustainability initiatives. Built with a modern, responsive design to present their industry presence and partnerships.",
    image: "/pacifichunt.png",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design", "Static Export"],
    category: "frontend",
    liveUrl: "https://pacific-hunt.vercel.app/",
  },
  {
    id: "agrimart",
    title: "AGRIMART BACKEND API",
    shortDescription:
      "A scalable Node.js + Express backend built for an agricultural e-commerce platform. It powers user authentication, product management, delivery tracking, and payment integration.",
    description:
      "A scalable Node.js + Express backend built for an agricultural e-commerce platform. It powers user authentication, product management, delivery tracking, and payment integration.",
    image: "https://cdn-icons-png.flaticon.com/512/2885/2885452.png",
    tags: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST API",
    "Authentication",
    "CORS",
    "Dotenv",
    "Backend Development",
    ],
    category: "backend",
    githubUrl: "https://github.com/puuq/Agrimart",
  },

];
