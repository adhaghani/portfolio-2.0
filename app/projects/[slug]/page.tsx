import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ExternalLinkIcon, FolderGit2Icon } from "lucide-react"
import { notFound } from "next/navigation"

import { Container } from "@/components/layout/container"
import { MarkdownContent } from "@/components/markdown-content"
import { getProject, getProjects } from "@/lib/projects"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return { title: "Not found" }
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
      ...(project.coverImage ? { images: [project.coverImage] } : {}),
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <Container className="pt-32 pb-24 md:pt-40">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 font-mono text-xs text-foreground/35 transition-colors hover:text-foreground"
      >
        <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">←</span>
        Back to projects
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-foreground/30 uppercase">
            {project.year}
          </p>
          <h1 className="mt-2 font-mono text-3xl leading-[1.02] font-semibold tracking-tighter text-foreground md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/50">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-col justify-end gap-5 lg:items-end">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="border border-border/50 px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-foreground/35"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-foreground px-4 py-2 font-mono text-xs font-medium text-background transition-colors hover:bg-foreground/85"
              >
                Live site
                <ExternalLinkIcon className="size-3.5" />
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-border bg-background px-4 py-2 font-mono text-xs font-medium transition-colors hover:bg-muted"
              >
                Source
                <FolderGit2Icon className="size-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {project.coverImage ? (
        <div className="relative mt-14 aspect-video overflow-hidden border border-border/50 bg-muted">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="mt-16 max-w-3xl">
        <MarkdownContent source={project.description} />
      </div>

      {project.thinking.length > 0 ? (
        <section className="mt-20 max-w-3xl border-t border-border/50 pt-14">
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/30 uppercase">
            <span aria-hidden className="h-px w-10 bg-foreground/15" />
            The thinking
          </p>
          <h2 className="mt-3 font-mono text-2xl font-semibold tracking-tighter text-foreground">
            Process & trade-offs
          </h2>

          {project.thinking.map((block, index) => (
            <div key={block.heading} className="mt-10">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-foreground/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono text-lg font-semibold tracking-tight text-foreground">
                  {block.heading}
                </h3>
              </div>
              <MarkdownContent source={block.body} className="mt-4" />
            </div>
          ))}
        </section>
      ) : null}

      {project.results.length > 0 ? (
        <section className="mt-20 max-w-3xl border-t border-border/50 pt-14">
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/30 uppercase">
            <span aria-hidden className="h-px w-10 bg-foreground/15" />
            The results
          </p>
          <h2 className="mt-3 font-mono text-2xl font-semibold tracking-tighter text-foreground">
            Outcomes
          </h2>

          {project.results.map((block) => (
            <div key={block.heading} className="mt-10">
              <h3 className="font-mono text-lg font-semibold tracking-tight text-foreground">
                {block.heading}
              </h3>
              <MarkdownContent source={block.body} className="mt-4" />
            </div>
          ))}
        </section>
      ) : null}
    </Container>
  )
}
