# @cucu/media

Music links for apps that store tracks from YouTube, SoundCloud and Bandcamp
and play them back in one queue.

| Entry point | What it does | Runs on |
| --- | --- | --- |
| `@cucu/media/core` | Provider detection (`detectProvider`), URL parsing and canonicalisation (`parseUrl`, `normalizeUrl`), shared types | anywhere |
| `@cucu/media/server` | Reading a pasted link: oEmbed for YouTube/SoundCloud, release pages and fresh stream URLs for Bandcamp (`readMedia`, `fetchRelease`, `resolveBandcampStream`) | server |
| `@cucu/media/react` | Headless player (`MediaEngine`, an invisible react-player) and queue/transport hook (`usePlayerQueue`) — bring your own controls | client |

Nothing here imports app code: network access (`fetch`) and Bandcamp rate
limiting (`throttle`) are injected. Keep Bandcamp requests ≥2s apart across
everything that shares a host — the throttle is the caller's job.

## Install

```bash
pnpm add github:walidvb/diggers-utils#v0.1.1 react-player@2.16.1
```

`react`, `react-dom` and `react-player` are peer dependencies. react-player is
pinned to **v2**: v3 dropped SoundCloud and the other non-YouTube providers.

The package ships TypeScript source (no build step), so the consumer's bundler
must compile it. In Next.js:

```ts
// next.config.ts
const nextConfig = { transpilePackages: ["@cucu/media"] };
```

## Develop

```bash
pnpm install
pnpm typecheck
pnpm test
```

Tests run against saved Bandcamp pages in `test/fixtures` and never touch the
network.
