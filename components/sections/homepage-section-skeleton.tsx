import { Container } from "@/components/layout/container"

/**
 * Skeleton placeholder for async homepage sections (posts, projects, education).
 * Matches the section layout so the page doesn't jump when data resolves.
 */
export function HomepageSectionSkeleton() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        {/* Eyebrow line */}
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-10 bg-foreground/8" />
          <div className="h-3 w-20 animate-pulse bg-foreground/5" />
        </div>
        {/* Title */}
        <div className="mt-3 h-9 w-48 animate-pulse bg-foreground/5" />
        {/* Card grid — 3 columns */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-72 animate-pulse border border-border/50 bg-foreground/[0.02]"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
