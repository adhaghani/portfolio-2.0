"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { useMemo, useState } from "react"
import { ArrowUpRight, Search } from "lucide-react"
import { format } from "date-fns"

import type { BlogPost } from "@/lib/supabase/types"

interface BlogShowcaseProps {
  posts: BlogPost[]
}

export default function BlogShowcase({ posts }: BlogShowcaseProps) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    if (!query.trim()) return posts
    const q = query.toLowerCase()
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }, [query, posts])

  if (posts.length === 0) {
    return (
      <div className="border border-dashed border-border py-24 text-center font-mono text-sm text-foreground/30">
        No posts yet — check back soon.
      </div>
    )
  }

  return (
    <div>
      {/* Search bar */}
      <div className="mb-12 flex items-center gap-3 border-b border-border/50 pb-3">
        <Search className="h-4 w-4 shrink-0 text-foreground/25" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, topic, or tag…"
          className="w-full bg-transparent font-mono text-sm text-foreground placeholder:text-foreground/25 focus:outline-none"
        />
        {filtered.length !== posts.length && (
          <span className="shrink-0 font-mono text-[10px] tracking-wider text-foreground/25 uppercase">
            {filtered.length} of {posts.length}
          </span>
        )}
      </div>

      {/* Grid — 3 cols, bigger cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((post, i) => (
            <motion.article
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                layout: { type: "spring", stiffness: 260, damping: 30 },
                opacity: { duration: 0.25, ease: "easeOut" },
                y: { duration: 0.25, ease: "easeOut" },
                delay: (i % 3) * 0.04,
              }}
              whileHover="hover"
              className="group relative flex cursor-pointer flex-col overflow-hidden border border-border/50 bg-card"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col focus-visible:outline-none"
              >
                {/* Image — larger aspect ratio */}
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  {post.coverImage ? (
                    <motion.div
                      variants={{ hover: { scale: 1.05 } }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full w-full"
                    >
                      <Image
                        src={post.coverImage}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </motion.div>
                  ) : (
                    /* Numbered placeholder — no image, no error */
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-mono text-6xl font-semibold text-foreground/6">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[9px] tracking-[0.3em] text-foreground/15 uppercase">
                          Essay
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Halftone overlay on hover */}
                  <div
                    aria-hidden
                    className="halftone-dots pointer-events-none absolute inset-0 text-foreground/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* Tag pill */}
                  {post.tags[0] && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center border border-border/50 bg-background/90 px-2.5 py-1 font-mono text-[10px] tracking-wider text-foreground/60 uppercase backdrop-blur">
                        {post.tags[0]}
                      </span>
                    </div>
                  )}

                  {/* Arrow */}
                  <motion.div
                    variants={{ hover: { opacity: 1, y: 0 } }}
                    initial={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-3 right-3 grid h-8 w-8 place-items-center border border-border/50 bg-background text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </div>

                {/* Content — more space */}
                <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
                  <div className="font-mono text-[10px] tracking-wider text-foreground/30 uppercase">
                    {format(new Date(post.date), "MMM d, yyyy")}
                    <span className="mx-1.5 select-none">·</span>
                    {post.readingTime} min read
                  </div>
                  <h3 className="font-mono text-base leading-snug font-semibold tracking-tight text-foreground">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-foreground/40">
                    {post.excerpt}
                  </p>

                  {/* Tags row */}
                  {post.tags.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] tracking-wider text-foreground/20 uppercase"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.article>
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
