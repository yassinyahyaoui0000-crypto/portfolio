"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "AccountantToolkit",
    role: "Founder & Developer",
    description: "Built and maintain a live affiliate publishing site with 63 production pages focusing on software reviews. Engineered SEO-led content architecture.",
    tech: ["HTML/CSS", "Cloudflare Pages", "GitHub CI/CD"],
    link: "https://accountanttoolkit.com",
    metrics: ["Live Production Site", "63+ Pages", "Custom Routing"],
  },
  {
    title: "SiraTrack",
    role: "Full-Stack Developer",
    description: "A private accountability dashboard with strict single-user discipline flows, streak scoring, recovery plans, and Vitest test coverage.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vitest"],
    metrics: ["Protected APIs", "Analytics Logic", "CSV Exports"],
  },
  {
    title: "Lead Generation Scraper",
    role: "Automation Engineer",
    description: "Modular scraper architecture with stealth plugins, user-agent rotation, and human-like interaction. Improved verified email coverage by 44%.",
    tech: ["TypeScript", "Playwright"],
    metrics: ["22% -> 67% Email Coverage", "100% Phone/Web Coverage", "Anti-detect"],
  },
  {
    title: "Nudge MVP",
    role: "Full-Stack Developer",
    description: "Behavioral finance application that generates psychological nudges based on spending patterns and subscription detection.",
    tech: ["Next.js App Router", "TypeScript", "Prisma", "Supabase Auth"],
    metrics: ["Transaction APIs", "Auth Flows", "Weekly Summaries"],
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
