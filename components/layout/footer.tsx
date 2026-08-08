import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import { Container } from "@/components/layout/container"

const socials = [
  { label: "GitHub", href: "https://github.com/adhaghani" },
  { label: "LinkedIn", href: "https://linkedin.com/in/adhaghani" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-sm font-medium tracking-tight text-foreground">
            Portfolio
          </p>
          <p className="mt-1 font-mono text-xs text-foreground/40">
            © {new Date().getFullYear()}. Crafted with care.
          </p>
        </div>
        <div className="flex items-center gap-1">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 rounded-md px-2.5 py-1 font-mono text-xs text-foreground/40 transition-colors hover:text-foreground"
            >
              {social.label}
              <ArrowUpRightIcon className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  )
}
