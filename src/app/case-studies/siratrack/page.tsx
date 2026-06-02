import Link from "next/link";

export const metadata = {
  title: "SiraTrack — Case Study | Mohamed Yassin Yahyaoui",
  description: "Freelance portfolio case study for SiraTrack, showing product framing, implementation, and outcome.",
};

export default function SiraTrackCase() {
  return (
    <main className="min-h-screen py-28">
      <div className="container">
        <Link href="/" className="text-sm text-muted hover:underline">← Back</Link>

        <header className="mt-6 mb-12">
          <p className="section-eyebrow">Case study</p>
          <h1 className="mb-2 text-4xl font-semibold">SiraTrack</h1>
          <p className="section-copy max-w-2xl">A private discipline dashboard that demonstrates how I take a vague workflow need and turn it into a usable product experience.</p>
        </header>

        <section className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <article className="card p-6">
              <h2 className="mb-3 text-2xl font-semibold">Problem</h2>
              <p className="text-muted">The user needed a lightweight, private tool to track daily commitments, surface progress over time, and support weekly review without unnecessary complexity.</p>
            </article>

            <article className="card p-6">
              <h2 className="mb-3 text-2xl font-semibold">Solution</h2>
              <p className="text-muted">Built a Next.js app with Supabase, a focused UI, task update flows, and CSV export support to keep the product practical and easy to review.</p>
            </article>

            <article className="card p-6">
              <h2 className="mb-3 text-2xl font-semibold">Impact</h2>
              <p className="text-muted">Delivered a private, focused tool that improved accountability and created a clearer weekly reflection process.</p>
            </article>
          </div>

          <aside className="space-y-4">
            <div className="card p-6">
              <h3 className="font-semibold">My Role</h3>
              <p className="text-muted">Full-Stack Developer — architecture, frontend, backend, tests.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Tech</h3>
              <p className="text-muted">Next.js, TypeScript, Supabase, PostgreSQL, Vitest</p>
            </div>
          </aside>
        </section>

        <section className="mb-20">
          <h2 className="mb-4 text-2xl font-semibold">Screenshots</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="card h-64 bg-white/3">Screenshot placeholder</div>
            <div className="card h-64 bg-white/3">Screenshot placeholder</div>
          </div>
        </section>
      </div>
    </main>
  );
}
