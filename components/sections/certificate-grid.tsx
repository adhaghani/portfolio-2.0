"use client"

import * as React from "react"
import { ArrowUpRight } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { StaggerItem } from "@/components/layout/reveal"
import type { Certificate } from "@/lib/supabase/types"

/**
 * Text-only certificate cards. Clicking opens a dialog with details
 * and a link to the issuer's verification page.
 */
export function CertificateGrid({
  certificates,
}: {
  certificates: Certificate[]
}) {
  const [selected, setSelected] = React.useState<Certificate | null>(null)
  const [open, setOpen] = React.useState(false)

  if (certificates.length === 0) return null

  const openDetails = (cert: Certificate) => {
    setSelected(cert)
    setOpen(true)
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <StaggerItem key={cert.slug} index={index} className="h-full">
            <button
              type="button"
              onClick={() => openDetails(cert)}
              className="group flex h-full w-full cursor-pointer flex-col border border-border/50 bg-card p-5 text-left transition-colors hover:border-foreground/15 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30"
              aria-haspopup="dialog"
            >
              {/* Issuer + date */}
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] tracking-wider text-foreground/30 uppercase">
                  {cert.date}
                </span>
                <span className="flex items-center gap-1 font-mono text-[10px] tracking-wider text-foreground/25 uppercase transition-colors group-hover:text-foreground">
                  View
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>

              <h3 className="mt-2 font-mono text-sm leading-snug font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/70">
                {cert.title}
              </h3>

              <p className="mt-1 font-mono text-xs tracking-wide text-foreground/35">
                {cert.issuer}
              </p>

              {cert.credentialId ? (
                <p className="mt-auto pt-3 font-mono text-[10px] tracking-wider text-foreground/20 uppercase">
                  ID: {cert.credentialId}
                </p>
              ) : (
                <div className="mt-auto pt-3" />
              )}
            </button>
          </StaggerItem>
        ))}
      </div>

      {/* Certificate details dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        {selected ? (
          <DialogContent showCloseButton>
            <DialogHeader>
              <DialogTitle className="font-mono text-lg font-semibold tracking-tight text-foreground">
                {selected.title}
              </DialogTitle>
              <DialogDescription className="font-mono text-xs tracking-wide text-foreground/35">
                {selected.issuer} · {selected.date}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-3">
              {selected.description ? (
                <p className="text-sm leading-relaxed text-foreground/50">
                  {selected.description}
                </p>
              ) : null}

              {selected.credentialId ? (
                <p className="font-mono text-[10px] tracking-wider text-foreground/25 uppercase">
                  Credential ID: {selected.credentialId}
                </p>
              ) : null}

              <a
                href={selected.url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 self-start border border-border/50 px-4 py-2 font-mono text-xs font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                Verify certificate
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  )
}
