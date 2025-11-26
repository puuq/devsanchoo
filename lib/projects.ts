export interface Project {
  id: string;
  title: string;
  shortDescription?: string;
  description: string;
  image: string;
  tags: string[];
  category: "frontend" | "backend" | "ai" | "mobile" | "other";
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
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
    title: "GAMEPLAN – AI-POWERED MATCH ANALYTICS DASHBOARD",
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
      "Reliable and affordable moving solutions across Australia — specializing in home and apartment relocations with safe handling, timely delivery, and professional support.",
    image: "/trinity.png",
    tags: [
      "Django",
      "JavaScript",
      "Responsive Design",
      "MongoDB",
      "Admin Dashboard",
      "CSS3",
    ],
    category: "backend",
    githubUrl: "https://github.com/puuq/Trinity-Removals/tree/main",
  },
  {
    id: "perfectincense",
    title: "PERFECT INCENSE – HOME & OFFICE CLEANING SERVICES",
    shortDescription:
      "A web platform built for Perfect Incense, enabling customers to book professional cleaning services for homes and workplaces.",
    description:
      "A web platform built for Perfect Incense, enabling customers to book professional cleaning services for homes and workplaces. Designed with a user-friendly interface, responsive layout, and smooth booking flow to streamline service requests.",
    image: "/perfectincense.png",
    tags: [
      "Django",
      "JavaScript",
      "Responsive Design",
      "PostgreSQL",
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
