"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

const FEATURED_IDS = [
  "sgtproductions",
  "nepfaceproduction",
  "billing-dashboard",
  "gameplan",
  "mailswayinc",
];

const featured = FEATURED_IDS.map((id) => PROJECTS.find((item) => item.id === id)).filter(
  Boolean
) as typeof PROJECTS;

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [travel, setTravel] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!sectionRef.current || window.innerWidth < 768) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const distance = sectionRef.current.offsetHeight - window.innerHeight;
      const next = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      if (trackRef.current && viewportRef.current) {
        setTravel(
          Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth)
        );
      }
      setProgress(next);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="project-scroll-section">
      <div className="project-scroll-sticky">
        <div className="project-scroll-layout">
          <aside className="project-scroll-intro">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
              Projects built for real users.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              A selection of client platforms and production systems I designed,
              developed, and shipped across frontend, backend, data, and deployment.
            </p>
          </aside>

          <div ref={viewportRef} className="project-scroll-viewport">
            <div
              ref={trackRef}
              className="project-scroll-track"
              style={{ transform: `translate3d(${-progress * travel}px, 0, 0)` }}
            >
              {featured.map((project, index) => (
              <article key={project.id} className="project-scroll-card group">
                <div className="project-scroll-visual">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 88vw, 54vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      priority={index < 2}
                    />
                  ) : (
                    <div className="dashboard-preview" aria-hidden="true">
                      <div className="dashboard-sidebar" />
                      <div className="dashboard-content">
                        <div className="dashboard-line" />
                        <div className="dashboard-cards">
                          <span /><span /><span />
                        </div>
                        <div className="dashboard-chart" />
                      </div>
                      <LockKeyhole className="absolute bottom-5 right-5 h-5 w-5 text-sky-300" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-indigo-300">
                        {project.liveUrl ? "Live client work" : "Private production system"}
                      </p>
                      <h3 className="text-lg font-semibold leading-tight text-white">
                        {project.title}
                      </h3>
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      aria-label={`View ${project.title} case study`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-white transition hover:border-indigo-300 hover:bg-indigo-400 hover:text-slate-950"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                    {project.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
