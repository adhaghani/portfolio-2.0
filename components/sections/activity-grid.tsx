"use client"

import * as React from "react"
import Image from "next/image"
import { Maximize2Icon } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { StaggerItem } from "@/components/layout/reveal"
import type { ActivityType } from "@/lib/supabase/types"
import { cn } from "@/lib/utils"

const typeStyles: Record<ActivityType, string> = {
  program: "bg-foreground/5 text-foreground/60 border border-foreground/10",
  ambassadorship:
    "bg-foreground/5 text-foreground/60 border border-foreground/10",
  involvement:
    "bg-foreground/5 text-foreground/60 border border-foreground/10",
}

const typeLabels: Record<ActivityType, string> = {
  program: "Program",
  ambassadorship: "Ambassadorship",
  involvement: "Involvement",
}

interface Activity {
  title: string
  organization: string
  type: ActivityType
  startDate: string
  endDate?: string
  description: string
  contributions?: string[]
  takeaway?: string
  image?: string
}

export function ActivityGrid({ activities }: { activities: Activity[] }) {
  const [selected, setSelected] = React.useState<Activity | null>(null)
  const [open, setOpen] = React.useState(false)

  const openDetails = (activity: Activity) => {
    setSelected(activity)
    setOpen(true)
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, index) => (
          <StaggerItem key={`${activity.title}-${activity.organization}-${activity.startDate}`} index={index} className="h-full">
            <button
              type="button"
              onClick={() => openDetails(activity)}
              className="group flex h-full w-full cursor-pointer flex-col border border-border/50 bg-card p-5 text-left transition-colors hover:border-foreground/15 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30"
              aria-haspopup="dialog"
              aria-expanded={open && selected === activity}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase",
                    typeStyles[activity.type]
                  )}
                >
                  {typeLabels[activity.type]}
                </span>
                <span className="flex items-center gap-1 font-mono text-[10px] tracking-wider text-foreground/25 uppercase transition-colors group-hover:text-foreground">
                  Details
                  <Maximize2Icon className="h-3 w-3 transition-transform group-hover:scale-110" />
                </span>
              </div>

              <h3 className="mt-3 font-mono text-sm leading-snug font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/70">
                {activity.title}
              </h3>

              <p className="mt-1 font-mono text-xs tracking-wide text-foreground/35">
                {activity.organization}
              </p>

              <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-foreground/45">
                {activity.description}
              </p>

              <p className="mt-auto pt-3 font-mono text-[10px] tracking-wider text-foreground/25 uppercase">
                {activity.startDate}
                {activity.endDate ? ` — ${activity.endDate}` : " — present"}
              </p>
            </button>
          </StaggerItem>
        ))}
      </div>

      {/* Full details dialog — wider, with image, contributions & takeaway */}
      <Dialog open={open} onOpenChange={setOpen}>
        {selected ? (
          <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto" showCloseButton>
            <DialogHeader>
              <span
                className={cn(
                  "self-start px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase",
                  typeStyles[selected.type]
                )}
              >
                {typeLabels[selected.type]}
              </span>
              <DialogTitle className="mt-2 font-mono text-lg font-semibold tracking-tight text-foreground">
                {selected.title}
              </DialogTitle>
              <DialogDescription className="font-mono text-xs tracking-wide text-foreground/35">
                {selected.organization}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-5">
              {/* Optional image */}
              {selected.image ? (
                <div className="relative aspect-video w-full overflow-hidden border border-border/50 bg-muted">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 576px"
                    className="object-cover"
                  />
                </div>
              ) : null}

              {/* Date range */}
              <p className="font-mono text-[10px] tracking-wider text-foreground/25 uppercase">
                {selected.startDate}
                {selected.endDate ? ` — ${selected.endDate}` : " — present"}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed text-foreground/55">
                {selected.description}
              </p>

              {/* Contributions */}
              {selected.contributions && selected.contributions.length > 0 ? (
                <div>
                  <p className="font-mono text-xs font-semibold tracking-tight text-foreground">
                    What I did
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {selected.contributions.map((item, i) => (
                      <li
                        key={`${item.slice(0, 20)}-${i}`}
                        className="flex items-start gap-2 text-sm leading-relaxed text-foreground/50"
                      >
                        <span aria-hidden className="mt-1.75 size-1 shrink-0 bg-foreground/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {/* Takeaway */}
              {selected.takeaway ? (
                <div className="border-t border-border/50 pt-4">
                  <p className="font-mono text-xs font-semibold tracking-tight text-foreground">
                    My takeaway
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/45 italic">
                    {selected.takeaway}
                  </p>
                </div>
              ) : null}
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  )
}
