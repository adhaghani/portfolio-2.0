"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, Trophy } from "lucide-react";
import { VisitorCounter } from "@/components/visitor-counter";
import { Text } from "@/components/ui/text";

const primaryNav = [
  { href: "/", name: "Home" },
  { href: "/blog", name: "Blog" },
  { href: "/project", name: "Development" },
  { href: "/snippets", name: "Snippets" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
];

const socialLinks = [
  { href: "https://www.github.com/adhaghani", name: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/adhaghani/",
    name: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:adhaghani@gmail.com", name: "Email", icon: Mail },
];

const quickLinks = [
  { href: "/assets/Resume.pdf", name: "Resume", external: true },
  { href: "/blog", name: "Latest Writing", external: false },
  { href: "/project", name: "Featured Builds", external: false },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border ">
      <div className="mx-auto bg-background container border-l border-r px-4 py-12 md:px-8">
        <div className="grid gap-10 border-2 border-border bg-card p-6 md:grid-cols-3 md:p-8">
          <section className="space-y-4">
            <Text
              as="h3"
              className="text-base font-semibold uppercase tracking-[0.1em]"
            >
              Adhaghani
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              Development-first portfolio and technical blog. Built for clear
              proof of work.
            </Text>
            <div className="flex items-center gap-3">
              <div className="border border-border px-3 py-1 text-xs uppercase tracking-[0.08em]">
                v2.0
              </div>
              <VisitorCounter />
            </div>
          </section>

          <section className="space-y-4">
            <Text
              as="h4"
              className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground"
            >
              Navigate
            </Text>
            <div className="grid grid-cols-2 gap-2">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-border px-3 py-2 text-xs uppercase tracking-[0.08em] transition-colors hover:bg-muted"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <Text
              as="h4"
              className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground"
            >
              External
            </Text>
            <div className="space-y-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-border px-3 py-2 text-xs uppercase tracking-[0.08em] transition-colors hover:bg-muted"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5" />
                      {item.name}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                );
              })}
            </div>

            <Text
              as="h4"
              className="pt-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground"
            >
              Quick Access
            </Text>
            <div className="space-y-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between border border-border px-3 py-2 text-xs uppercase tracking-[0.08em] transition-colors hover:bg-muted"
                >
                  {item.name}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border border-border px-4 py-3 text-xs text-muted-foreground">
          <Text as="p" className="text-xs uppercase tracking-[0.08em]">
            {currentYear} Ahmad Adha Ghani
          </Text>
          <button
            type="button"
            onClick={() => window.scrollTo?.({ top: 0, behavior: "smooth" })}
            className="border border-border px-3 py-1 uppercase tracking-[0.08em] transition-colors hover:bg-muted"
          >
            Back To Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
