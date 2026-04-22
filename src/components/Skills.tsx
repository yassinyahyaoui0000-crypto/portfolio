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
    <section id="skills" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center"
            >
              <div className="p-4 bg-white/5 rounded-2xl mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-white/5 rounded-md text-foreground/80 border border-white/5">
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
