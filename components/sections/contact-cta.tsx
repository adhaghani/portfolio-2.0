import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"

export function ContactCta() {
  return (
    <section className="border-t border-border/50 py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/35 uppercase">
              <span aria-hidden className="h-px w-8 bg-foreground/15" />
              Get in touch
            </p>
            <h2 className="mt-4 max-w-xl font-mono text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-4 max-w-md text-base text-foreground/45">
              Whether it&apos;s a project, collaboration, or just a conversation —
              I&apos;d love to hear from you.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-foreground px-8 py-3 font-mono text-sm font-medium text-background transition-colors hover:bg-foreground/85"
              >
                Contact me
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
