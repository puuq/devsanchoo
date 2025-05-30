"use client";

import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/lib/projects";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 pixel-grid">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="space-y-4 text-center">
          <motion.h2
            className="pixel-text text-xl sm:text-2xl font-bold tracking-wider"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            MY PROJECTS
          </motion.h2>
          <p className="text-muted-foreground max-w-[42rem] mx-auto">
            Here are some of the projects I have worked on. Each project showcases different skills and technologies from my full-stack toolkit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}