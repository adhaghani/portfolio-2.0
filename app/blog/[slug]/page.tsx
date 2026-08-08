import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { notFound } from "next/navigation"

import { ArticleContainer } from "@/components/layout/container"
import { MarkdownContent } from "@/components/markdown-content"
import { getBlogPost, getBlogSlugs } from "@/lib/blog"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return { title: "Not found" }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <ArticleContainer className="pt-32 pb-24 md:pt-40">
      <Link
        href="/blog"
        className="group inline-flex items-center gap-2 font-mono text-xs text-foreground/35 transition-colors hover:text-foreground"
      >
        <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">←</span>
        Back to writing
      </Link>

      <h1 className="mt-6 font-mono text-3xl leading-[1.05] font-semibold tracking-tighter text-foreground md:text-5xl">
        {post.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs text-foreground/30">
        <time dateTime={post.date}>
          {format(new Date(post.date), "MMMM d, yyyy")}
        </time>
        <span aria-hidden className="select-none">·</span>
        <span>{post.readingTime} min read</span>
      </div>

      {post.coverImage ? (
        <div className="relative mt-10 aspect-video overflow-hidden border border-border/50 bg-muted">
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      ) : null}

      <MarkdownContent source={post.content} className="mt-12" />

      {post.tags.length > 0 ? (
        <div className="mt-14 flex flex-wrap gap-2 border-t border-border/50 pt-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border/50 px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-foreground/35"
            >
              #{tag}
            </span>
          ))}
        </div>
      ) : null}
    </ArticleContainer>
  )
}
