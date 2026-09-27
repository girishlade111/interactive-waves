# Interactive Waves

An **interactive canvas waves playground** — a full-screen animated wave field rendered on HTML canvas with Perlin-noise-driven motion that reacts to your cursor. Includes a control panel (sliders for speed, amplitude, spacing, friction, tension) and named presets like "Ocean Waves". Built with Next.js and shadcn-style UI.

> Built by Girish Lade — https://ladestack.in

## What it does

- Full-viewport **canvas wave animation** powered by a custom Perlin-noise engine (`components/Waves.tsx`)
- Waves **react to cursor movement** (springy physics: friction, tension, max cursor move)
- **Control panel** with live sliders for:
  - line color, background color
  - wave speed (X / Y), amplitude (X / Y)
  - line spacing (xGap / yGap)
  - physics: friction, tension, max cursor move
- **Presets** — one-click wave configurations (e.g. "Ocean Waves")

All client-side, no backend, no login.

## Features

- Custom Perlin noise + spring-physics wave renderer on `<canvas>`
- Mouse-reactive wave deformation
- Live config sliders (shadcn Slider)
- Preset system
- Responsive full-screen canvas
- Dark-mode-ready theming

## Tech stack

- **Framework:** Next.js 15 (App Router) — static export (`output: 'export'`)
- **UI:** React 19, Tailwind CSS 3.4, Radix UI, shadcn-style components
- **Icons:** lucide-react
- **Language:** TypeScript

## Quick start

### Prerequisites

- Node.js 18+ (20 recommended)
- npm, pnpm, or yarn

### Install & run

```bash
npm install        # or: pnpm install
npm run dev
```

Open http://localhost:3000 — the waves demo is the home page.

### Build (static)

```bash
npm run build
```

Static output goes to `out/`:

```bash
npx serve out
```

## Project structure

```
app/
├── page.tsx                 # waves demo page (controls + presets)
├── layout.tsx / globals.css
components/
├── Waves.tsx                # canvas renderer: Perlin noise + spring physics
├── Waves.css                # canvas styles
└── ui/                      # shadcn-style primitives (button, card, slider)
lib/
└── utils.ts
public/                      # static assets
```

## Tweaking the waves

The wave engine lives in `components/Waves.tsx`. Key knobs in the `config` state on `app/page.tsx`:

| Prop | Effect |
|---|---|
| `waveSpeedX / waveSpeedY` | animation speed per axis |
| `waveAmpX / waveAmpY` | wave height per axis |
| `xGap / yGap` | spacing between wave lines |
| `friction / tension` | spring physics of cursor reaction |
| `maxCursorMove` | how far the cursor can displace waves |
| `lineColor / backgroundColor` | styling |

## Environment variables

None required. Fully static — no secrets, no backend services.

## Deployment

Any static host: GitHub Pages, Cloudflare Pages, Netlify, Vercel.

This repo ships as a static export on GitHub Pages — see the repo's Website field.

> Note: `next.config.mjs` uses `basePath: '/interactive-waves'` for the GitHub Pages subpath deploy. Remove it for root-domain or Vercel deploys.

## Notes

- Generated originally with v0.app and refined for static hosting.
- Next.js 15.2.8 (patched against CVE-2025-55182 / React2Shell).

---

Built with ❤ by [Girish Lade](https://github.com/girishlade111) — [ladestack.in](https://ladestack.in)
