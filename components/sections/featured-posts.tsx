import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { BlogCard } from "@/components/sections/blog-card"
import { getBlogPosts } from "@/lib/blog"

export async function FeaturedPosts() {
  const posts = (await getBlogPosts()).slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section id="recent-writing" className="scroll-mt-16 py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/35 uppercase">
                <span aria-hidden className="h-px w-10 bg-foreground/15" />
                Writing
              </p>
              <h2 className="mt-3 font-mono text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                Recent notes
              </h2>
            </div>
            <Link
              href="/blog"
              className="group hidden items-center gap-1 font-mono text-xs text-foreground/35 transition-colors hover:text-foreground sm:inline-flex"
            >
              All writing
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.1}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-1 font-mono text-xs text-foreground/35 transition-colors hover:text-foreground sm:hidden"
          >
            All writing
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
