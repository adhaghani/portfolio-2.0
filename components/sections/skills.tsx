import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { skillCategories } from "@/content/skills"

export function Skills() {
  return (
    <section className="border-t border-border/50 py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/35 uppercase">
                <span aria-hidden className="h-px w-10 bg-foreground/15" />
                Tech stack
              </p>
              <h2 className="mt-3 font-mono text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                Tools I work with
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div>
                <h3 className="font-mono text-xs tracking-[0.15em] text-foreground/30 uppercase">
                  {group.category}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="border border-border/50 px-2.5 py-1 font-mono text-xs tracking-wide text-foreground/55"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
