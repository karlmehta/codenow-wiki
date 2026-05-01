# CodeNow Wiki

The user guide, get-started flow, and agent concepts for **[CodeNow](https://codenow.pro)** — the dual-mode IDE for shipping apps and AI agents.

Live at **[wiki.codenow.pro](https://wiki.codenow.pro)**.

## Why this is a separate repo

The CodeNow IDE source lives at [karlmehta/codenow](https://github.com/karlmehta/codenow). This wiki is a separate repo so:

- Community can contribute via PRs without exposing the IDE internals
- Wiki content can have its own license (see below) independent of the IDE
- The `wiki.codenow.pro` Vercel project deploys this repo cleanly without pulling Electron build deps

## Tech stack

- [Nextra 4](https://nextra.site/) — Vercel-friendly Next.js docs framework
- Next.js 15 (App Router) + React 19
- MDX with built-in Mermaid diagram support

## Local dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Contributing

PRs welcome. Each page has an "Edit this page →" link at the bottom that takes you straight to GitHub.

Particularly looking for help on:
- Screenshots / GIFs for the Get Started flow
- Step-by-step walkthroughs in `content/build/`
- Translations of `content/concepts/agents.mdx`
- Real connector deep-dives in `content/connect/`

## License

Original CodeNow content is MIT. Where pages adapt material from open-source sources (e.g. [Agentic Design Patterns](https://github.com/evoiz/Agentic-Design-Patterns) by Evoiz), the original license applies to the adapted portions and is cited in-line.
