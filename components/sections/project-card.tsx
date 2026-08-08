import Link from "next/link"
import Image from "next/image"
import { ArrowUpRightIcon } from "lucide-react"

import type { Project } from "@/lib/supabase/types"

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project
  index?: number
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-border/50 bg-card transition-colors hover:border-foreground/20">
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col focus-visible:outline-none"
      >
        <div className="relative aspect-video overflow-hidden bg-muted">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-5xl text-foreground/8">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          )}
          {/* Halftone overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 halftone-dots text-foreground/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.15em] text-foreground/35 uppercase">
              {project.year}
            </span>
            <ArrowUpRightIcon className="size-3.5 text-foreground/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground/50" />
          </div>

          <h3 className="mt-2.5 font-mono text-lg font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>

          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-foreground/45">
            {project.tagline}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="border border-border/50 px-2 py-0.5 font-mono text-[10px] tracking-wide text-foreground/35"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}
