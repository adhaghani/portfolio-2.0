"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 border border-border/50 px-5 py-2.5 font-mono text-xs font-medium text-foreground transition-colors hover:bg-foreground/5"
    >
      {copied ? (
        <>
          Copied
          <Check className="h-3.5 w-3.5 text-foreground/50" />
        </>
      ) : (
        <>
          Copy
          <Copy className="h-3.5 w-3.5 text-foreground/30" />
        </>
      )}
    </button>
  )
}
