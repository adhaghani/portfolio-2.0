import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Copy, FileDown, Mail } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { CopyEmailButton } from "@/components/sections/copy-email-button"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — email, social links, or download my resume.",
}

const email = "adhaahmadwork@gmail.com"

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/adhaghani",
    description: "Open-source projects and contributions",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/adhaghani",
    description: "Professional experience and connections",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero area — large, centered email as the focal point */}
      <section className="relative overflow-hidden pb-12 pt-36 md:pt-44">
        {/* Subtle background texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 halftone-dots text-foreground/[0.015]"
        />

        <Container>
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/35 uppercase">
                <span aria-hidden className="h-px w-8 bg-foreground/15" />
                Contact
              </p>

              <h1 className="mt-4 max-w-lg font-mono text-4xl font-semibold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                Say hello<span className="text-foreground/25">.</span>
              </h1>

              <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/45">
                Whether it&apos;s a project, collaboration, or just a conversation —
                I&apos;d love to hear from you.
              </p>

              {/* Email — prominent centerpiece */}
              <div className="mt-10 flex w-full max-w-lg flex-col items-center gap-5 border border-border/50 bg-card p-6 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center bg-foreground">
                  <Mail className="h-6 w-6 text-background" />
                </span>
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/70 sm:text-2xl"
                >
                  {email}
                </a>
                <p className="text-sm leading-relaxed text-foreground/40">
                  Drop me a line — I typically respond within 24 hours.
                </p>

                {/* Copy + CTA row */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-1.5 bg-foreground px-5 py-2.5 font-mono text-xs font-medium text-background transition-colors hover:bg-foreground/85"
                  >
                    Send email
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                  <CopyEmailButton email={email} />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Social links + Resume — side by side */}
      <section className="border-t border-border/50 py-20 md:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            {/* Social links */}
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/30 uppercase">
                <span aria-hidden className="h-px w-8 bg-foreground/15" />
                Find me on
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-border/30 py-5 transition-colors hover:border-foreground/20"
                  >
                    <div className="flex flex-col gap-0.5">
                      <p className="font-mono text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/80">
                        {social.label}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/35">
                        {social.description}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-2 font-mono text-xs text-foreground/20 transition-all group-hover:text-foreground group-hover:gap-3">
                      Visit
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Resume + Quick links */}
            <Reveal delay={0.1}>
              <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/30 uppercase">
                <span aria-hidden className="h-px w-8 bg-foreground/15" />
                Download
              </p>

              <a
                href="/files/Resume-AhmadAdhabinMohdGhani.pdf"
                download
                className="mt-8 flex items-center justify-between border border-border/50 p-6 transition-colors hover:border-foreground/20"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-foreground/5">
                    <FileDown className="h-6 w-6 text-foreground/50" />
                  </span>
                  <div>
                    <p className="font-mono text-base font-semibold tracking-tight text-foreground">
                      Resume
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/35">
                      PDF — work experience, education, and project highlights.
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="ml-4 h-5 w-5 shrink-0 text-foreground/15 transition-colors group-hover:text-foreground" />
              </a>

              {/* Quick site links */}
              <div className="mt-10">
                <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/30 uppercase">
                  <span aria-hidden className="h-px w-8 bg-foreground/15" />
                  Explore
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    { label: "Writing", href: "/blog" },
                    { label: "Projects", href: "/projects" },
                    { label: "Education", href: "/education" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 border border-border/50 px-4 py-2.5 font-mono text-xs font-medium text-foreground transition-colors hover:bg-foreground/5"
                    >
                      {link.label}
                      <span aria-hidden className="text-foreground/25">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
