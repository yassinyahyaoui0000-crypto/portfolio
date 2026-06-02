import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Hero />
      <section className="border-y border-white/8 py-14">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ["Clear scope", "Brief-first intake keeps expectations aligned from the start."],
              ["Professional delivery", "The design system, copy, and code all support one standard."],
              ["Outcome-focused", "Messaging, interface, and implementation point to real business goals."],
              ["Low friction", "There is one obvious path from interest to project brief."],
            ].map(([title, desc]) => (
              <article key={title} className="card p-5">
                <h3 className="mb-2 text-base font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-foreground/72">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 border-y border-white/8">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-muted mb-4">Services</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Clear offers for clients who want a credible web presence.</h2>
            <p className="text-foreground/72 text-lg">I combine interface design, frontend implementation, and product thinking so the work looks polished, feels reliable, and supports the business outcome.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Launch package",
                desc: "A focused portfolio, landing page, or marketing site with strong positioning, clean content structure, and responsive buildout.",
              },
              {
                title: "Design + build sprint",
                desc: "A short engagement to redesign a key page or flow, then implement it with maintainable, production-ready code.",
              },
              {
                title: "Ongoing support",
                desc: "A flexible monthly arrangement for updates, new sections, performance work, and conversion improvements.",
              },
            ].map((service) => (
              <article key={service.title} className="card h-full p-6">
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="leading-relaxed text-foreground/72">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-muted mb-4">Trust</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">The portfolio is built to answer the questions clients ask before they commit.</h2>
            <p className="text-foreground/72 text-lg">That means visible services, proof of delivery, a clean intake flow, and enough context to judge fit before a call happens.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Reliable process",
                body: "A brief-first workflow keeps projects scoped, understandable, and easier to start.",
              },
              {
                title: "Relevant proof",
                body: "Case studies show how problems were framed, not just what was shipped.",
              },
              {
                title: "Easy next step",
                body: "The project brief reduces friction and helps separate serious leads from casual browsing.",
              },
            ].map((item) => (
              <article key={item.title} className="card p-6">
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="leading-relaxed text-foreground/72">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Projects />
      <Skills />
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-muted mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Common questions before we start.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              ["What kind of projects do you take?", "Portfolio sites, landing pages, redesigns, and frontend work with clear outcomes."],
              ["How do we begin?", "Submit the project brief. If it is a fit, I reply with scope and next steps."],
              ["Do you work on fixed packages?", "Yes. I can structure work as a fixed project, a sprint, or ongoing support."],
              ["Can you help with both design and build?", "Yes. That is the point of the portfolio: the visuals and implementation stay aligned."],
            ].map(([q, a]) => (
              <article key={q} className="card p-6">
                <h3 className="mb-2 text-lg font-semibold">{q}</h3>
                <p className="leading-relaxed text-foreground/72">{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
