"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3, ShieldCheck } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(126,166,255,0.12),transparent_38%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-muted mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">Start with a project brief.</h2>
            <p className="text-foreground/72 text-lg mb-10 max-w-lg">
              If you need a portfolio, landing page, marketing site, or a focused frontend build, send the project details and I will reply with the next step.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="rounded-xl border border-white/8 bg-white/4 p-3 text-primary">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Primary CTA</h4>
                  <p className="text-sm text-foreground/68">Project brief review</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground/80">
                <div className="rounded-xl border border-white/8 bg-white/4 p-3 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">What I build</h4>
                  <p className="text-sm text-foreground/68">Conversion-focused sites and frontend experiences</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground/80">
                <div className="rounded-xl border border-white/8 bg-white/4 p-3 text-primary">
                  <Clock3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">How to start</h4>
                  <p className="text-sm text-foreground/68">Fill the form or email me with your brief</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.25em] text-muted mb-3">Response</p>
              <h3 className="text-2xl font-semibold">Get in touch</h3>
              <p className="mt-3 text-sm text-foreground/68">Share enough context for a fit check, scope estimate, and next-step recommendation.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80" htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80" htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="john@example.com" className="w-full px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80" htmlFor="project-type">Project type</label>
                <input id="project-type" type="text" placeholder="Portfolio, landing page, redesign, custom frontend..." className="w-full px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80" htmlFor="budget">Budget range</label>
                <input id="budget" type="text" placeholder="$1k-$3k / custom / monthly" className="w-full px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80" htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Tell me about the project goals, timing, and what success looks like." className="w-full resize-none px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <button type="submit" className="btn-primary mt-4 w-full font-semibold">
                Send Project Brief
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
