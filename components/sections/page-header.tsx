import { cn } from "@/lib/utils"

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn("pt-36 pb-16 md:pb-20", className)}>
      <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/35 uppercase">
        <span aria-hidden className="h-px w-10 bg-foreground/15" />
        {eyebrow}
      </p>
      <h1 className="mt-4 font-mono text-4xl font-semibold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/45">
          {description}
        </p>
      ) : null}
    </div>
  )
}
