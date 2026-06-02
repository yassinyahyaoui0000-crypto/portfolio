"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Python", "SQL", "PL/pgSQL"],
  },
  {
    title: "Frameworks & Tools",
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ["Next.js", "React", "Tailwind CSS", "Playwright", "Prisma", "Supabase", "Cloudflare Pages"],
  },
  {
    title: "Database & Backend",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["PostgreSQL", "REST APIs", "Authentication"],
  },
  {
    title: "Workflow",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    skills: ["Git", "GitHub", "CI/CD", "Testing (Vitest)"],
  },
];

export default function Skills() {
  return (
    <section id="process" className="border-y border-white/8 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-muted mb-4">Process</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">A simple way to move from brief to launch.</h2>
          <p className="text-foreground/72 max-w-2xl">The stack matters, but it is there to support a bigger promise: clear messaging, strong interface design, reliable frontend delivery, and a process clients can understand quickly.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card flex flex-col items-center text-center p-6"
            >
              <div className="mb-6 rounded-2xl border border-white/8 bg-white/4 p-4" aria-hidden="true">
                {category.icon}
              </div>
              <h3 className="mb-6 text-xl font-semibold">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-sm text-foreground/82">
                    {skill}
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
