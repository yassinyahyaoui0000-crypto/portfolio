# Portfolio

Personal portfolio built with Next.js App Router and TypeScript.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Where To Update Projects

Project cards are defined in:

- `src/components/Projects.tsx`

Each card uses this shape:

```ts
type ProjectCard = {
	title: string;
	role: string;
	description: string;
	tech: string[];
	link?: string;
	metrics: string[];
};
```

### Rules For Project Updates

- Use factual copy backed by each project's README.
- Keep descriptions concise and outcome-focused.
- If a project has no public URL, omit `link` so no external-link CTA is rendered.
- Keep `metrics` specific and verifiable.

## Quality Checks

Run these before shipping:

```bash
npm run lint
npm run build
```

## Current Featured Projects

- SiraTrack
- Lead Generation Scraper
- AccountantToolkit
- LeadGenerator.0.2
