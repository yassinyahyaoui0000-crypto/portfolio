import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navigation could go here, but keeping it high-level and clean */}
      
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-foreground/50 text-sm">
        <p>© {new Date().getFullYear()} Mohamed Yassin Yahyaoui. All rights reserved.</p>
      </footer>
    </main>
  );
}
