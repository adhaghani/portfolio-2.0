"use client"

import Link from "next/link"
import { motion } from "motion/react"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"

const LiquidAscii = dynamic(
  () => import("@/components/bits-pro/liquid-ascii"),
  { ssr: false }
)

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function LiquidAsciiBg() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white dark:bg-[oklch(0.11_0_0)]">
      <LiquidAscii
        width="110%"
        cellSize={16}
        gravity={-18}
        flipRatio={0.25}
        fillHeight={0.35}
        pressureIters={28}
        separationIters={2}
        overRelaxation={1.4}
        cursorRadius={0.22}
        cursorForce={55}
        speed={0.8}
        autoWave={true}
        characters=" .·-~=+*#@%"
        color={isDark ? "oklch(0.92 0 0)" : "oklch(0.08 0 0)"}
        backgroundColor="transparent"
        opacity={0.55}
        fontFamily="var(--font-mono), monospace"
        className="absolute inset-0 z-0 h-full w-full select-none"
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-svh w-full flex-col overflow-hidden">
      <LiquidAsciiBg />

      {/* Gradient fade at bottom for text readability */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-64 bg-linear-to-t from-background to-transparent"
      />

      <motion.div
        className="relative z-10 mx-auto mt-auto flex w-full max-w-5xl flex-col px-6 pt-32 pb-20 md:px-10"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.p
          variants={fadeUp}
          className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/50 uppercase"
        >
          <span aria-hidden className="h-px w-12 bg-foreground/30" />
          Portfolio · Est. 2025
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-mono text-[clamp(2.25rem,7vw,5.5rem)] leading-[0.95] font-semibold tracking-tighter text-foreground"
        >
          Ideas,
          <br />
          engineered
          <span className="text-foreground/30">.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-lg text-base leading-relaxed text-foreground/60"
        >
          A portfolio of software projects, long-form writing, and the education
          that shaped both. Built in the open — the good ideas and the messy
          ones.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-foreground px-6 py-2.5 font-mono text-sm font-medium text-background transition-colors hover:bg-foreground/85"
          >
            View projects
            <span aria-hidden className="text-xs">
              →
            </span>
          </Link>
          <a
            href="#recent-writing"
            className="group inline-flex items-center gap-2 font-mono text-sm text-foreground/50 transition-colors hover:text-foreground"
          >
            Recent writing
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex items-center gap-3"
        >
          <span className="relative flex size-2 shrink-0" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <p className="font-mono text-xs tracking-wide text-foreground/45">
            Currently: Building VisualAlgo · Final‑year CS · Open to work
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
