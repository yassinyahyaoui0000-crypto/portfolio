"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's build something amazing together.</h2>
            <p className="text-foreground/70 text-lg mb-10 max-w-lg">
              Currently pursuing my BS in Computer Science at ISSAT Sousse while actively building and deploying full-stack web applications. 
              Always open to discussing product design, development, or tech opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-sm">Sousse, Tunisia</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Education</h4>
                  <p className="text-sm">ISSAT Sousse, BS in Computer Science</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Languages</h4>
                  <p className="text-sm">Arabic (Native), English (C1), French (B2)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Message</label>
                <textarea rows={4} placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-xl transition-colors mt-4">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
