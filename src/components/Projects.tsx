"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";

type ProjectCard = {
  title: string;
  role: string;
  description: string;
  tech: string[];
  link?: string;
  metrics: string[];
};

const projects: ProjectCard[] = [
  {
    title: "SiraTrack",
    role: "Product Design + Build",
    description: "Private discipline dashboard showing how I structure a product from workflow, to interface, to working delivery.",
    tech: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Vitest"],
    link: "https://siratrack.vercel.app/",
    metrics: ["Workflow-first UX", "Private dashboard", "Exportable history"],
  },
  {
    title: "Lead Generation Scraper",
    role: "Automation Build",
    description: "A production-ready workflow that supports lead capture, enrichment, and repeatable outreach operations.",
    tech: ["TypeScript", "Playwright", "Node.js", "Yelp Fusion API", "OpenStreetMap"],
    metrics: ["Reliable automation", "Retry handling", "CSV export pipeline"],
  },
  {
    title: "AccountantToolkit",
    role: "Content Site Build",
    description: "A high-volume static content site that shows how I handle information architecture, SEO structure, and maintainable publishing.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js Scripts"],
    link: "https://accountanttoolkit.com",
    metrics: ["40+ pages", "SEO structure", "Static deployment"],
  },
  {
    title: "LeadGenerator.0.2",
    role: "Utility Build",
    description: "A lightweight Python utility that supports lead workflows with template-driven automation.",
    tech: ["Python", "Markdown Templates"],
    metrics: ["CLI workflow", "Template automation", "Cross-platform setup"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-muted mb-4">Work</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Selected work that supports a credible freelance offer.</h2>
          <p className="text-foreground/72 text-lg">The examples below show the kind of projects I can ship: structured, practical, and aligned with a clear business purpose.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card group flex h-full flex-col p-8 transition-all hover:-translate-y-0.5 hover:border-white/14 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="mb-1 text-2xl font-semibold">
                    {project.title === "SiraTrack" ? (
                      <Link href="/case-studies/siratrack" className="hover:underline">{project.title}</Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-muted">{project.role}</p>
                </div>
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} in new tab`} className="rounded-full border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>

              <p className="mb-6 flex-grow leading-relaxed text-foreground/72">
                {project.description}
              </p>

              <div className="mb-6 space-y-2">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs font-medium text-foreground/88">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
