"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,166,255,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(155,209,255,0.08),transparent_26%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for select freelance projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="display mt-6 max-w-2xl font-semibold text-foreground"
        >
          I design and build websites that feel credible, calm, and ready to convert.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lead mt-6 max-w-2xl text-foreground/78 font-normal"
        >
          Freelance sites need more than visual polish. They need a clear offer, strong proof, and a delivery process that makes clients feel safe starting the work.
        </motion.h2>

        <div className="mt-8 flex flex-wrap gap-3 text-sm text-foreground/80">
          <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5">Positioning + interface design</span>
          <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5">Frontend build</span>
          <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5">Brief-first process</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
        >
          <a href="#contact" className="btn-primary font-semibold group">
            Start a project brief
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#projects" className="btn-secondary font-semibold">
            View selected work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col gap-6 border-t border-white/8 pt-8"
        >
          <p className="max-w-2xl text-foreground/72">The portfolio is structured to answer the client’s first questions quickly: what you do, how you work, and how to start without friction.</p>
          <a href="mailto:yassinyahyaoui0000@gmail.com" className="btn-secondary font-semibold w-fit">
            <Mail className="w-4 h-4" />
            Email me directly
          </a>
        </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="glass-card p-6 md:p-8"
        >
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/8 bg-white/4 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">Trust signals</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  ["Clear scope", "Every brief starts with goals, constraints, and next steps."],
                  ["Calm delivery", "Design and implementation stay aligned throughout."],
                  ["Useful proof", "Case studies focus on the problem, solution, and outcome."],
                ].map(([title, body]) => (
                  <div key={title}>
                    <h3 className="text-base font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-foreground/68 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["Focus", "Portfolio + landing pages"],
                ["Approach", "Design, build, and refine"],
                ["Entry point", "Project brief first"],
                ["Style", "Clean, credible, production-ready"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-white/4 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
                  <p className="mt-2 text-sm font-medium text-foreground/90">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
