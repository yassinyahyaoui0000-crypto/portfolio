"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-40 w-full border-b border-white/8 bg-[#08111f]/78 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" aria-label="Home" className="inline-flex items-center gap-3 text-foreground no-underline">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 font-semibold tracking-[0.2em] text-sm">
            MY
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-none">Mohamed Yassin</p>
            <p className="text-xs text-muted">Freelance design + build</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/8 bg-white/4 p-2 text-sm text-muted">
          <Link href="/#services" className="rounded-full px-3 py-2 transition-colors hover:bg-white/6 hover:text-foreground">Services</Link>
          <Link href="/#projects" className="rounded-full px-3 py-2 transition-colors hover:bg-white/6 hover:text-foreground">Projects</Link>
          <Link href="/#process" className="rounded-full px-3 py-2 transition-colors hover:bg-white/6 hover:text-foreground">Process</Link>
          <Link href="/#contact" className="rounded-full px-3 py-2 transition-colors hover:bg-white/6 hover:text-foreground">Contact</Link>
        </nav>

        <Link href="/project-brief" className="btn-secondary text-sm font-semibold">
          Project brief
        </Link>
      </div>
    </header>
  );
}
