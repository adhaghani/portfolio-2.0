"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { QuoteIcon } from "lucide-react"

export interface Testimonial {
  name: string
  role: string
  content: string
  avatar?: string
}

interface SocialProofProps {
  testimonials: Testimonial[]
}

/**
 * A testimonials / social-proof section showcasing reviews and endorsements.
 * Designed for personal portfolios to build credibility.
 */
export default function SocialProof({ testimonials }: SocialProofProps) {
  if (testimonials.length === 0) return null

  return (
    <div className="mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-4"
      >
        <h2 className="max-w-3xl font-mono text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl md:text-4xl">
          What people say
        </h2>
        <p className="max-w-2xl font-mono text-sm leading-relaxed text-foreground/40">
          Kind words from colleagues, mentors, and collaborators I&apos;ve worked
          with over the years.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-5 md:grid-cols-3">
        {testimonials.slice(0, 3).map((t, i) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className="group relative flex cursor-default flex-col gap-5 border border-border/50 bg-card p-5 transition-colors hover:border-foreground/15 sm:p-6"
          >
            <QuoteIcon className="h-6 w-6 text-foreground/10" strokeWidth={2} />

            <p className="text-sm leading-relaxed text-foreground/50 italic">
              &ldquo;{t.content}&rdquo;
            </p>

            <div className="mt-auto flex items-center gap-3 border-t border-border/50 pt-4">
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-border/50 bg-muted font-mono text-xs text-foreground/30 uppercase">
                {t.avatar ? (
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="36px"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  t.name.charAt(0)
                )}
              </div>
              <div>
                <p className="font-mono text-xs font-semibold tracking-tight text-foreground">
                  {t.name}
                </p>
                <p className="font-mono text-[10px] tracking-wider text-foreground/25 uppercase">
                  {t.role}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
