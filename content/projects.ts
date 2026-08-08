import type { Project } from "@/lib/supabase/types"

export type { Project }

export const projects: Project[] = [
  {
    slug: "visual-algo",
    title: "VisualAlgo",
    tagline: "An interactive playground for understanding algorithms through animation.",
    description:
      "A web app that turns abstract data structures and algorithms into animated, step-by-step visualisations. Built for students who, like me, found whiteboards easier to trust than textbooks.",
    technologies: ["TypeScript", "React", "Canvas", "Web Workers"],
    year: "2025",
    coverImage: "/images/projects/visual-algo.png",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/visual-algo",
    featured: true,
    thinking: [
      {
        heading: "The problem",
        body: "Textbooks explain algorithms with static diagrams. The moment of insight — watching a pivot, a swap, a comparison — happens in motion, not in print. I wanted to capture that motion and let students drive it at their own pace.",
      },
      {
        heading: "Stepping through the work",
        body: "The core design constraint was **determinism**. An animation had to be a *trace* of a real execution, not a recreation. So each algorithm produces a recorded series of immutable snapshots — every swap, comparison and highlight is captured — and the renderer simply plays them back.\n\nThat decision paid off: scrubbing, slow-motion and replay all became free features, because there was no separate 'animation engine' to sync.",
      },
      {
        heading: "Trade-offs",
        body: "Recording snapshots is memory-hungry on large inputs. For arrays of thousands of elements I switched to a streaming generator that yields frames on demand, trading seek-ability for bounded memory. The playback engine got more complex, but the interaction model stayed honest.",
      },
    ],
    results: [
      {
        heading: "Outcome",
        body: "Over **1,400 weekly active users** in the first semester, with the university's data structures course linking it in their reading list. Sorting and graph-pathfinding were the most-used modules.",
      },
      {
        heading: "What I'd do differently",
        body: "I underestimated accessibility. Keyboard controls and `prefers-reduced-motion` support came late and had to be retrofitted. Next time, they're part of the first milestone, not the polish pass.",
      },
    ],
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    tagline: "A distraction-free journal that pairs markdown with local-first storage.",
    description:
      "A tiny writing app with one opinion: your words belong on your machine. Entries are plain markdown files on disk, synced only if you choose to.",
    technologies: ["Next.js", "SQLite", "Markdown", "tRPC"],
    year: "2024",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/field-notes",
    featured: true,
    thinking: [
      {
        heading: "The problem",
        body: "Most journal apps hold your writing hostage in a proprietary database. If the app dies, the words are effectively gone. I wanted the *experience* of a modern editor with the *permanence* of a folder of `.md` files.",
      },
      {
        heading: "Local-first as a constraint",
        body: "Making the filesystem the source of truth sounds simple, but it reshaped everything: no optimistic mutations without a file handle, no undo stack without a journal of writes. The database became a cache and index, not a store — an inversion that made the app both faster and safer.",
      },
    ],
    results: [
      {
        heading: "Outcome",
        body: "Shipped a v1 in eight weeks and dogfooded it daily for four months. The 'export' feature is literally `open the folder`. A few dozen writers adopted it, and the maintenance burden is near zero — exactly the point.",
      },
    ],
  },
  {
    slug: "pulseboard",
    title: "PulseBoard",
    tagline: "A real-time campus events board with presence indicators.",
    description:
      "A collaborative events board for student organisations — think 'who's going', but live. Presence and interest updates propagate in under a second.",
    technologies: ["React", "WebSockets", "PostgreSQL", "Redis"],
    year: "2024",
    coverImage: "/images/projects/pulseboard.png",
    repoUrl: "https://github.com/example/pulseboard",
    thinking: [
      {
        heading: "The problem",
        body: "Campus clubs advertised through group chats and posters. Attendance was a leap of faith. I wanted a single board where interest was visible and social — a small nudge that turns 'maybe' into 'I'm going'.",
      },
      {
        heading: "Real-time at small scale",
        body: "WebSockets are easy until they aren't. Reconnects, missed messages, and ordering forced me to think in terms of **event logs** rather than snapshots: the server broadcasts deltas, clients reconcile. Redis holds the ephemeral presence state; Postgres owns the durable truth.",
      },
    ],
    results: [
      {
        heading: "Outcome",
        body: "Used by five student organisations over two semesters, with over **3,000 RSVPs** tracked. Presence made the board feel alive — the detail users noticed most wasn't the fancy UI, it was seeing three other people viewing the same event.",
      },
    ],
  },
]
