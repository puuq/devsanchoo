"use client";

import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg hover:shadow-xl hover:border-indigo-400/50 transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-transform duration-700 ease-out",
            hovered && "scale-110 brightness-75"
          )}
        />
      </div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-5"
      >
        <h3 className="text-white text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2 mb-4">{project.description}</p>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="px-3 py-1 text-xs font-medium text-black bg-white rounded-md hover:bg-gray-200 transition"
            >
              Live
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="p-1 rounded-md bg-white/10 hover:bg-white/20 transition"
            >
              <Github className="w-4 h-4 text-white" />
            </Link>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="ml-auto text-sm font-medium text-indigo-300 hover:text-indigo-100 transition"
          >
            Read More →
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
