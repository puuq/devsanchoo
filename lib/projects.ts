export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [

  {
    id: "mailswayinc",
    title: "INTEGRATED MAILING & DATA SERVICES",
    description: "A professional B2B website developed for Mailsway Inc, a US-based direct mail and fulfillment company. The site highlights their comprehensive printing, data processing, and logistics services through a clean layout, service-driven content, and mobile-optimized design.",
    image: "/mailswayinc.png",
    tags: [  "MongoDB","Express.js","Node.js","React","JavaScript","Responsive Design","Direct Mail Services","SEO Optimization"],
    liveUrl: "https://www.mailswayinc.com/",
    // githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: "trinityremovals",
    title: "HOUSE & APARTMENT MOVING SERVICES",
    description: "Reliable and affordable moving solutions across Australia — specializing in home and apartment relocations with safe handling, timely delivery, and professional support.",
    image: "/trinity.png",
    tags: ["Django","JavaScript","Responsive Design","MongoDB","Admin Dashboard","CSS3",],
    // liveUrl: "https://example.com",
    githubUrl: "https://github.com/puuq/Trinity-Removals/tree/main",
  },
    {
    id: "perfectincense",
    title: "PERFECT INCENSE U+002d HOME & OFFICE CLEANING SERVICES",
    description: "A web platform built for Perfect Incense, enabling customers to book professional cleaning services for homes and workplaces. Designed with a user-friendly interface, responsive layout, and smooth booking flow to streamline service requests.",
    image: "/perfectincense.png",
    tags: ["Django","JavaScript","Responsive Design","PostgreSQL","HTML5","CSS3",],
    liveUrl: "https://perfectincense.com/",
    githubUrl: "https://github.com/puuq/perfectincense",
  },
  {
    id: "project4",
    title: "ENERGY EXPLORATION COMPANY WEBSITE",
    description: "A corporate website for Pacific Hunt Energy, showcasing their oil and gas operations, exploration activities, and sustainability initiatives. Built with a modern, responsive design to present their industry presence and partnerships.",
    image: "/pacifichunt.png",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design", "Static Export"],
    liveUrl: "https://pacific-hunt.vercel.app/",
    // githubUrl: "https://github.com/yourusername/project4",
  },
];
