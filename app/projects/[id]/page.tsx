import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";


export async function generateStaticParams() {
  return PROJECTS.map(project => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    return (
      <section className="max-w-4xl mx-auto py-16 px-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p>ID: <code>{params.id}</code></p>
        <p>Available IDs: <code>{PROJECTS.map((p) => p.id).join(", ")}</code></p>
        <Link href="/#projects" className="mt-4 inline-block underline text-blue-400">
          ← Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-16 px-4 space-y-10">
        <Link
            href="/#projects"
            className="text-lg text-muted-foreground hover:underline"
            >
            ← Back to Projects
        </Link>


      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold pixel-text text-primary">
          {project.title}
        </h1>

        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg object-scale-down max-h-[400px] shadow-xl border border-border"
        />

        <p className="text-muted-foreground sm:text-lg">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded pixel-corners"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 flex items-center gap-2 rounded pixel-corners bg-primary text-black hover:bg-primary/90 transition"
            >
              <ExternalLink className="w-4 h-4" />
              Live Site
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 flex items-center gap-2 rounded pixel-corners bg-black text-white hover:bg-zinc-800 transition"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
