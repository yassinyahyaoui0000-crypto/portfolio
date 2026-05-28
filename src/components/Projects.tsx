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
    role: "Full-Stack Developer",
    description: "Private single-user discipline dashboard for strict daily accountability with weekly commitments, recovery plans, and 30-day history.",
    tech: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Vitest"],
    link: "https://siratrack.vercel.app/",
    metrics: ["10+ API Routes", "CSV Exports", "Streak + Weekly Scoring"],
  },
  {
    title: "Lead Generation Scraper",
    role: "Automation Engineer",
    description: "Production-ready modular scraper with anti-detection behavior, retry controls, and enrichment/export pipeline for outreach workflows.",
    tech: ["TypeScript", "Playwright", "Node.js", "Yelp Fusion API", "OpenStreetMap"],
    metrics: ["Stealth + UA Rotation", "Exponential Backoff", "JSON/CSV Export + Enrichment"],
  },
  {
    title: "AccountantToolkit",
    role: "Founder & Developer",
    description: "Static publishing site with comparison guides and tool reviews for freelancers and bookkeepers, supported by SEO and content-maintenance scripts.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js Scripts"],
    link: "https://accountanttoolkit.com",
    metrics: ["40+ Content Pages", "Static Deploy", "Sitemap + Redirect Rules"],
  },
  {
    title: "LeadGenerator.0.2",
    role: "Python Developer",
    description: "Lightweight Python utility that generates outreach leads and template-based personalized email content from lead data.",
    tech: ["Python", "Markdown Templates"],
    metrics: ["Template Placeholder Substitution", "CLI Workflow", "Cross-Platform Setup"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 flex flex-col h-full group hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm font-medium text-primary mb-4">{project.role}</p>
                </div>
                {project.link && (
                  <Link href={project.link} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>

              <p className="text-foreground/70 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6 space-y-2">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-foreground/90 border border-white/10">
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
