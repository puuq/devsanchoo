"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import { Code2 } from "lucide-react";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0b1020] via-[#0e1425] to-[#0b1020]"
    >
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 opacity-[0.07] bg-[url('/grid.svg')] bg-center bg-repeat" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-80 h-80 bg-indigo-500/20 blur-[100px] top-10 left-10 rounded-full" />
        <div className="absolute w-96 h-96 bg-fuchsia-500/20 blur-[120px] bottom-10 right-10 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <Code2 className="text-indigo-400 w-6 h-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Projects</h2>
        </div>

        {/* Project list */}
        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block border border-[#1c2235] bg-[#0f1425]/60 backdrop-blur-md rounded-xl p-5 hover:border-indigo-400/40 hover:shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {project.shortDescription ||
                    project.description.slice(0, 150) + "..."}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
