"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[40vw] leading-none font-bold tracking-tighter text-foreground/2.5 select-none"
      >
        !
      </div>

      <p className="relative font-mono text-xs tracking-[0.25em] text-foreground/35 uppercase">
        Error
      </p>
      <h1 className="relative mt-3 font-mono text-4xl font-semibold tracking-tighter text-foreground md:text-6xl">
        Something went wrong
      </h1>
      <p className="relative mt-4 max-w-xs text-sm text-foreground/40">
        An unexpected error occurred. It has been logged — please try again.
      </p>
      <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 font-mono text-xs font-medium text-background transition-colors hover:bg-foreground/85"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-border/50 px-5 py-2.5 font-mono text-xs font-medium text-foreground transition-colors hover:bg-foreground/5"
        >
          Back home
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  )
}
