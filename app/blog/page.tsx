import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/sections/page-header"
import BlogShowcase from "@/components/bits-pro/blog-showcase"
import { getBlogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Long-form notes on the projects I build, the tools I use, and the thinking behind both.",
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <Container className="pb-24 md:pb-32">
      <PageHeader
        eyebrow="Writing"
        title="Thoughts in public"
        description="Long-form essays on software, design, and the lessons I pick up along the way."
      />

      <BlogShowcase posts={posts} />
    </Container>
  )
}
