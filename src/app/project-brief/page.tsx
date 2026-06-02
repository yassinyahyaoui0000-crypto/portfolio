import Link from "next/link";

export const metadata = {
  title: "Project Brief | Mohamed Yassin Yahyaoui",
  description: "Brief form for freelance projects, website builds, and frontend engagements.",
};

export default function ProjectBriefPage() {
  return (
    <main className="min-h-screen py-28">
      <div className="container max-w-4xl">
        <Link href="/" className="text-sm text-muted hover:underline">← Back to portfolio</Link>

        <header className="mt-6 mb-10">
          <p className="section-eyebrow">Project Brief</p>
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold mb-4">Tell me what you need and I&apos;ll reply with next steps.</h1>
          <p className="section-copy max-w-3xl">Use this page to qualify the project before a call. The more context you provide, the faster I can tell you whether I&apos;m the right fit and how I would approach the work.</p>
        </header>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form className="card space-y-5 rounded-3xl p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground/80">Name</span>
                <input className="w-full px-4 py-3" type="text" placeholder="Your name" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground/80">Email</span>
                <input className="w-full px-4 py-3" type="email" placeholder="you@company.com" />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground/80">Project type</span>
                <input className="w-full px-4 py-3" type="text" placeholder="Portfolio, landing page, redesign..." />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground/80">Timeline</span>
                <input className="w-full px-4 py-3" type="text" placeholder="This month / next month / flexible" />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-foreground/80">Budget range</span>
              <input className="w-full px-4 py-3" type="text" placeholder="$1k-$3k / custom / retainer" />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-foreground/80">Project details</span>
              <textarea className="w-full px-4 py-3 min-h-45 resize-y" placeholder="What do you need built, what should it achieve, and what does success look like?" />
            </label>

            <button type="submit" className="btn-primary font-semibold px-5 py-3">Send brief</button>
          </form>

          <aside className="space-y-6">
            <article className="card rounded-3xl p-6">
              <h2 className="mb-3 text-2xl font-semibold">What happens next</h2>
              <ol className="list-inside space-y-3 list-decimal text-foreground/72">
                <li>I review the brief and check fit.</li>
                <li>I reply with a short recommendation and next step.</li>
                <li>If it is a fit, we move to scope, timeline, and delivery.</li>
              </ol>
            </article>

            <article className="card rounded-3xl p-6">
              <h2 className="mb-3 text-2xl font-semibold">Good fit for</h2>
              <ul className="space-y-2 text-foreground/72">
                <li>• Portfolio sites</li>
                <li>• Freelance marketing pages</li>
                <li>• Product landing pages</li>
                <li>• Frontend refreshes</li>
              </ul>
            </article>
          </aside>
        </section>
      </div>
    </main>
  );
}