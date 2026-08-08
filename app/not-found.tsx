import Link from "next/link"

export default function NotFound() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[40vw] leading-none font-bold tracking-tighter text-foreground/2.5 select-none"
      >
        404
      </div>

      <p className="relative font-mono text-xs tracking-[0.25em] text-foreground/35 uppercase">
        Error 404
      </p>
      <h1 className="relative mt-3 font-mono text-4xl font-semibold tracking-tighter text-foreground md:text-6xl">
        Page drifted off
      </h1>
      <p className="relative mt-4 max-w-xs text-sm text-foreground/40">
        The page you&apos;re looking for has moved on. It may have been
        relocated, renamed, or never existed at all.
      </p>
      <Link
        href="/"
        className="group relative mt-8 inline-flex items-center gap-2 bg-foreground px-5 py-2.5 font-mono text-xs font-medium text-background transition-colors hover:bg-foreground/85"
      >
        <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">←</span>
        Back home
      </Link>
    </div>
  )
}
