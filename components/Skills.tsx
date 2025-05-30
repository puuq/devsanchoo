"use client";

import { motion } from "framer-motion";
import { PixelCard } from "./PixelComponents";
import { Database, Globe, Server, Layout, Code, Layers, Cpu, ArrowRight } from "lucide-react";

interface Skill {
  icon: React.ReactNode;
  category: string;
  items: string[];
}

const SKILLS: Skill[] = [
  {
    icon: <Globe className="h-8 w-8" />,
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "HTML5", "CSS3/SASS", "JavaScript", "TypeScript"]
  },
  {
    icon: <Server className="h-8 w-8" />,
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Python", "Django", "PHP",]
  },
  {
    icon: <Database className="h-8 w-8" />,
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase",]
  },
  {
    icon: <Layout className="h-8 w-8" />,
    category: "UI/UX",
    items: ["Tailwind CSS", "Material UI", "Styled Components", "Figma", "Responsive Design"]
  },
  // {
  //   icon: <Code className="h-8 w-8" />,
  //   category: "Testing & Tools",
  //   items: ["Jest", "React Testing Library", "Cypress", "Git", "GitHub Actions", "CI/CD"]
  // },
  // {
  //   icon: <Layers className="h-8 w-8" />,
  //   category: "Architecture",
  //   items: ["RESTful APIs", "GraphQL", "Microservices", "Serverless", "Docker", "AWS"]
  // },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/50 pixel-dots">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="pixel-text text-xl sm:text-2xl font-bold tracking-wider">
            MY TECH STACK
          </h2>
          <p className="text-muted-foreground max-w-[42rem] mx-auto">
            These are the technologies and tools I work with to build modern, scalable web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PixelCard className="h-full">
                <div className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center p-2 bg-primary/10 rounded-sm">
                    {skill.icon}
                  </div>
                  
                  <h3 className="pixel-text text-base font-bold mb-4">
                    {skill.category}
                  </h3>
                  
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2 text-[hsl(var(--pixel-primary))]" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}