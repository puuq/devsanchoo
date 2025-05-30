"use client";

import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { PixelButton, PixelCard } from "./PixelComponents";
import { motion } from "framer-motion";
import Link from "next/link";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <PixelCard
          className="overflow-hidden w-full h-full flex flex-col bg-card cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={cn(
                "object-cover transition-transform duration-500",
                isHovered && "scale-105"
              )}
            />
          </div>
          <div className="flex flex-col flex-grow p-4 md:p-6">
            <h3 className="pixel-text text-sm md:text-base font-bold tracking-wider mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="inline-flex items-center px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-sm pixel-corners">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </PixelCard>
      </motion.div>
    </Link>
  );
}