"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href)
}

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="group flex items-center gap-2">
          <span
            aria-hidden
            className="font-mono text-lg tracking-tighter text-foreground/60 transition-colors group-hover:text-foreground"
          >
            [~]
          </span>
          <span className="font-mono text-sm font-medium tracking-tight text-foreground">
            adhaghani
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-1.5 font-mono text-xs tracking-wide transition-colors",
                  active
                    ? "text-foreground"
                    : "text-foreground/45 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="ml-2 border-l border-border/50 pl-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Open menu">
                <MenuIcon className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-14">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav className="flex flex-col gap-1 px-2">
                {links.map((link) => {
                  const active = isActive(pathname, link.href)
                  return (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "rounded-md px-3 py-2.5 font-mono text-sm tracking-wide transition-colors",
                          active
                            ? "bg-foreground/6 text-foreground"
                            : "text-foreground/45 hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
