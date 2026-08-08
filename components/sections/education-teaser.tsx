import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { getCertificates } from "@/lib/certificates"
import { getEducation } from "@/lib/education"

export async function EducationTeaser() {
  const education = await getEducation()
  const certificates = await getCertificates()

  const latest = education[0]
  const topCerts = certificates.slice(0, 3)

  if (!latest) return null

  return (
    <section className="border-t border-border/50 py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/35 uppercase">
                <span aria-hidden className="h-px w-10 bg-foreground/15" />
                Education
              </p>
              <h2 className="mt-3 font-mono text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                Where I studied
              </h2>
            </div>
            <Link
              href="/education"
              className="group hidden items-center gap-1 font-mono text-xs text-foreground/35 transition-colors hover:text-foreground sm:inline-flex"
            >
              Full education
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          {/* Education card */}
          <Reveal>
            <div className="border border-border/50 bg-card p-6 md:p-8">
              <p className="font-mono text-[11px] tracking-[0.15em] text-foreground/30 uppercase">
                {latest.startDate} — {latest.endDate}
              </p>

              <h3 className="mt-2 font-mono text-xl font-semibold tracking-tight text-foreground">
                {latest.institution}
              </h3>

              <p className="mt-1 font-mono text-sm tracking-wide text-foreground/35">
                {latest.degree}
                {latest.field ? ` · ${latest.field}` : null}
              </p>

              {latest.gpa ? (
                <p className="mt-2 font-mono text-xs tracking-wider text-foreground/30 uppercase">
                  GPA: {latest.gpa}
                </p>
              ) : null}

              <p className="mt-4 max-w-prose text-sm leading-relaxed text-foreground/50">
                {latest.description}
              </p>

              {/* Courses */}
              {latest.courses && latest.courses.length > 0 ? (
                <div className="mt-4">
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-foreground/25 uppercase">
                    Courses
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {latest.courses.slice(0, 6).map((course, i) => (
                      <span
                        key={`${course}-${i}`}
                        className="border border-border/50 px-2 py-0.5 font-mono text-[10px] tracking-wide text-foreground/40"
                      >
                        {course}
                      </span>
                    ))}
                    {latest.courses.length > 6 ? (
                      <span className="px-2 py-0.5 font-mono text-[10px] tracking-wide text-foreground/25">
                        +{latest.courses.length - 6} more
                      </span>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {latest.highlights && latest.highlights.length > 0 ? (
                <ul className="mt-4 space-y-1">
                  {latest.highlights.slice(0, 2).map((h, i) => (
                    <li
                      key={`${h.slice(0, 20)}-${i}`}
                      className="flex items-start gap-2 text-sm leading-relaxed text-foreground/45"
                    >
                      <span
                        aria-hidden
                        className="mt-1.75 size-1 shrink-0 bg-foreground/20"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Reveal>

          {/* Certificate highlights — side column on desktop, full-width below on mobile */}
          {topCerts.length > 0 ? (
            <Reveal delay={0.1}>
              <div className="lg:w-64">
                <p className="font-mono text-xs tracking-[0.15em] text-foreground/30 uppercase">
                  Certificates
                </p>
                <ul className="mt-3 space-y-2">
                  {topCerts.map((cert) => (
                    <li key={cert.slug}>
                      <div className="border border-border/50 bg-card px-4 py-3 transition-colors hover:border-foreground/15">
                        <p className="font-mono text-xs leading-snug font-semibold tracking-tight text-foreground">
                          {cert.title}
                        </p>
                        <p className="mt-0.5 font-mono text-[10px] tracking-wider text-foreground/30 uppercase">
                          {cert.issuer} · {cert.date}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/education"
                  className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] tracking-wider text-foreground/25 uppercase transition-colors hover:text-foreground"
                >
                  All credentials
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          ) : null}
        </div>

        {/* Mobile link to full education */}
        <Reveal>
          <Link
            href="/education"
            className="mt-8 inline-flex items-center gap-1 font-mono text-xs text-foreground/35 transition-colors hover:text-foreground sm:hidden"
          >
            Full education
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
