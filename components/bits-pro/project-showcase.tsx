"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { useMemo, useState } from "react"
import { ArrowUpRight, Search } from "lucide-react"

import type { Project } from "@/lib/supabase/types"

interface ProjectShowcaseProps {
  projects: Project[]
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    if (!query.trim()) return projects
    const q = query.toLowerCase()
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
    )
  }, [query, projects])

  if (projects.length === 0) {
    return (
      <div className="border border-dashed border-border py-24 text-center font-mono text-sm text-foreground/30">
        No projects yet — check back soon.
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-col gap-5"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-foreground/30 uppercase">
          Selected Work
        </span>
        <h2 className="max-w-3xl font-mono text-3xl leading-[1.05] font-semibold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
          Quiet craft, shipped for real use.
        </h2>
      </motion.div>

      {/* Search bar */}
      <div className="mb-10 flex items-center gap-3 border-b border-border/50 pb-3">
        <Search className="h-4 w-4 shrink-0 text-foreground/25" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, tech, or description…"
          className="w-full bg-transparent font-mono text-sm text-foreground placeholder:text-foreground/25 focus:outline-none"
        />
        {filtered.length !== projects.length && (
          <span className="shrink-0 font-mono text-[10px] tracking-wider text-foreground/25 uppercase">
            {filtered.length} of {projects.length}
          </span>
        )}
      </div>

      {/* Grid — 3 cols, bigger cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                  mass: 0.8,
                },
                opacity: { duration: 0.25, ease: "easeOut" },
              }}
              whileHover="hover"
              className="group flex flex-col gap-3"
            >
              <Link
                href={`/projects/${p.slug}`}
                className="flex flex-col gap-3 focus-visible:outline-none"
              >
                {/* Image — larger */}
                <div className="relative aspect-video overflow-hidden border border-border/50 bg-muted">
                  {p.coverImage ? (
                    <motion.div
                      variants={{ hover: { scale: 1.05 } }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </motion.div>
                  ) : (
                    /* Symbol placeholder — no image, no error */
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-mono text-6xl font-semibold text-foreground/6">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[9px] tracking-[0.3em] text-foreground/15 uppercase">
                          Project
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Halftone overlay */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 halftone-dots text-foreground/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* Arrow */}
                  <motion.div
                    variants={{ hover: { opacity: 1, y: 0 } }}
                    initial={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-3 right-3 grid h-8 w-8 place-items-center border border-border/50 bg-background text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>

                  {/* Tech tags */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="border border-border/50 bg-background/95 px-2 py-0.5 font-mono text-[10px] tracking-widest text-foreground/60 uppercase backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content — more space */}
                <div className="flex flex-col gap-1.5 px-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="truncate font-mono text-base font-semibold tracking-tight text-foreground">
                      {p.title}
                    </h3>
                    <span className="shrink-0 font-mono text-[10px] tracking-[0.12em] text-foreground/20">
                      {p.year}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-relaxed text-foreground/40">
                    {p.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && query.trim() && (
        <p className="mt-16 text-center font-mono text-sm text-foreground/25">
          Nothing matched &ldquo;{query}&rdquo;. Try a different search.
        </p>
      )}
    </div>
  )
}
