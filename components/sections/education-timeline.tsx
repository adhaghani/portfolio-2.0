"use client"

import { Reveal } from "@/components/layout/reveal"
import type { EducationEntry } from "@/lib/supabase/types"

export function EducationTimeline({
  education,
}: {
  education: EducationEntry[]
}) {
  return (
    <ol className="relative ml-3 border-l border-border/50">
      {education.map((entry, index) => (
        <Reveal key={`${entry.institution}-${entry.degree}-${entry.startDate}`} delay={index * 0.08}>
          <li className="relative pb-14 pl-10 last:pb-0 md:pl-14">
            <span
              aria-hidden
              className="absolute top-1 -left-1.25 size-2.5 border border-foreground/20 bg-background"
            />

            <p className="font-mono text-[11px] tracking-[0.15em] text-foreground/30 uppercase">
              {entry.startDate} — {entry.endDate}
            </p>

            <h3 className="mt-1.5 font-mono text-xl font-semibold tracking-tight text-foreground">
              {entry.institution}
            </h3>

            <p className="mt-1 font-mono text-sm tracking-wide text-foreground/35">
              {entry.degree}
              {entry.field ? ` · ${entry.field}` : null}
            </p>

            {/* GPA */}
            {entry.gpa ? (
              <p className="mt-1.5 font-mono text-xs tracking-wider text-foreground/30 uppercase">
                GPA: {entry.gpa}
              </p>
            ) : null}

            <p className="mt-3 max-w-prose text-sm leading-relaxed text-foreground/50">
              {entry.description}
            </p>

            {/* Courses taken */}
            {entry.courses && entry.courses.length > 0 ? (
              <div className="mt-3">
                <p className="font-mono text-[10px] font-semibold tracking-wider text-foreground/30 uppercase">
                  Courses
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {entry.courses.map((course, i) => (
                    <span
                      key={`${course}-${i}`}
                      className="border border-border/50 px-2 py-0.5 font-mono text-[10px] tracking-wide text-foreground/35"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {entry.highlights && entry.highlights.length > 0 ? (
              <ul className="mt-4 space-y-1">
                {entry.highlights.map((highlight, i) => (
                  <li
                    key={`${highlight}-${i}`}
                    className="flex items-start gap-2 text-sm leading-relaxed text-foreground/45"
                  >
                    <span
                      aria-hidden
                      className="mt-1.75 size-1 shrink-0 bg-foreground/20"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        </Reveal>
      ))}
    </ol>
  )
}
