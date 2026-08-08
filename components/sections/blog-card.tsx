import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"

import type { BlogPost } from "@/lib/supabase/types"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col focus-visible:outline-none"
      >
        <div className="relative aspect-[16/10] overflow-hidden border border-border/50 bg-muted">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-6xl text-foreground/10">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
          {/* Halftone dot overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 halftone-dots text-foreground/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <div className="mt-4 flex items-center gap-2 font-mono text-[11px] tracking-wider text-foreground/35 uppercase">
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMM d, yyyy")}
          </time>
          <span aria-hidden className="select-none">·</span>
          <span>{post.readingTime} min read</span>
        </div>

        <h3 className="mt-2 font-mono text-lg leading-snug font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/70">
          {post.title}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-foreground/45">
          {post.excerpt}
        </p>
      </Link>
    </article>
  )
}
