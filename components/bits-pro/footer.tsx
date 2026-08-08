"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const footerLinks = [
  { label: "Writing", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
]

const socials = [
  { label: "GitHub", href: "https://github.com/adhaghani" },
  { label: "LinkedIn", href: "https://linkedin.com/in/adhaghani" },
  { label: "Email", href: "mailto:adhaahmadwork@gmail.com" },
]

export default function Footer4() {
  return (
    <footer className="w-full border-t border-border/50 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Headline */}
          <div className="py-12">
            <h2 className="font-mono text-2xl leading-tight font-medium tracking-tighter text-foreground sm:text-3xl md:text-4xl">
              Let&apos;s build
              <br />
              something together.
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Link columns */}
      <div className="border-y border-border/50">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-0 lg:flex-row">
            {/* CTA to contact */}
            <div className="border-b border-border/50 py-8 lg:border-r lg:border-b-0 lg:w-2/5 lg:py-8 lg:pr-8">
              <h3 className="mb-4 font-mono text-base font-medium tracking-tight text-foreground sm:text-lg">
                Want to work together?
              </h3>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border bg-muted px-5 py-2.5 font-mono text-xs text-foreground transition-colors hover:bg-foreground/10"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 text-foreground/50" />
              </Link>

              <p className="mt-4 font-mono text-[10px] text-foreground/30">
                Available for freelance, contract, and full-time opportunities.
              </p>
            </div>

            {/* Navigation links */}
            <div className="flex flex-wrap gap-x-16 gap-y-6 py-8 lg:flex-1 lg:py-8 lg:pl-10">
              {/* Site links */}
              <div className="flex flex-col gap-3">
                <p className="font-mono text-[10px] tracking-[0.2em] text-foreground/25 uppercase">
                  Site
                </p>
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-mono text-sm tracking-tight text-foreground/40 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Social links */}
              <div className="flex flex-col gap-3">
                <p className="font-mono text-[10px] tracking-[0.2em] text-foreground/25 uppercase">
                  Connect
                </p>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 font-mono text-sm tracking-tight text-foreground/40 transition-colors hover:text-foreground"
                  >
                    {social.label}
                    <ArrowUpRight className="h-3 w-3 text-foreground/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="mb-3">
            <h2 className="font-mono text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              adhaghani
            </h2>
          </div>

          <div className="flex flex-col gap-2 font-mono text-[10px] tracking-wider text-foreground/25 sm:flex-row sm:items-center sm:gap-4">
            <p>© {new Date().getFullYear()}</p>
            <span className="transition-colors">
              Crafted with care
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
