import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { ProjectCard } from "@/components/sections/project-card"
import { getFeaturedProjects } from "@/lib/projects"

export async function FeaturedProjects() {
  const projects = (await getFeaturedProjects()).slice(0, 3)

  if (projects.length === 0) return null

  return (
    <section className="border-t border-border/50 py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/35 uppercase">
                <span aria-hidden className="h-px w-10 bg-foreground/15" />
                Selected work
              </p>
              <h2 className="mt-3 font-mono text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="group hidden items-center gap-1 font-mono text-xs text-foreground/35 transition-colors hover:text-foreground sm:inline-flex"
            >
              All projects
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-1 font-mono text-xs text-foreground/35 transition-colors hover:text-foreground sm:hidden"
          >
            All projects
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
