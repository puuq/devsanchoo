"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import type { Project } from "./ProjectCard";

interface CategoryTileProps {
  name: string;
  icon: React.ReactNode;
  projects: Project[];
}

export default function CategoryTile({ name, icon, projects }: CategoryTileProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.5, type: "spring" } }}
      className="w-full bg-[#0d1222]/60 backdrop-blur-md border border-[#1e263a] rounded-2xl overflow-hidden shadow-md hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300"
    >
      {/* Category Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-6 py-5 hover:bg-zinc-800/60 transition"
      >
        <div className="flex items-center gap-3 text-white text-lg font-semibold tracking-wide">
          <span className="text-2xl">{icon}</span>
          {name}
        </div>
        {open ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
      </button>

      {/* Projects Timeline */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="px-8 pb-8 max-h-[380px] overflow-y-auto divide-y divide-zinc-800/70"

          >
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="relative pl-6 border-l border-zinc-700 group py-4 first:pt-2 last:pb-0"

              >
                {/* Timeline dot */}
                <div className="absolute left-[-0.4rem] top-2 w-3 h-3 bg-indigo-500 rounded-full group-hover:scale-110 transition-transform" />
                <Link href={`/projects/${p.id}`}>
                  <h3 className="text-white font-medium text-base mb-1 group-hover:text-indigo-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-snug">{p.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
