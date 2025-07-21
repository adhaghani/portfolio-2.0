"use client";

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUp,
  Heart,
  FileText,
  Code2,
  Trophy,
  ExternalLink,
  Calendar,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavs = [
    {
      label: "Navigation",
      items: [
        {
          href: "/",
          name: "Home",
          icon: null,
          external: false,
        },
        {
          href: "/about",
          name: "About Me",
          icon: null,
          external: false,
        },
        {
          href: "/project",
          name: "Projects",
          icon: null,
          external: false,
        },
        {
          href: "/blog",
          name: "Blog",
          icon: null,
          external: false,
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "/assets/Resume.pdf",
          name: "My Resume",
          icon: FileText,
          external: true,
        },
        {
          href: "mailto:adhaghani@gmail.com",
          name: "Contact Me",
          icon: Mail,
          external: true,
        },
      ],
    },
    {
      label: "Connect",
      items: [
        {
          href: "https://www.github.com/adhaghani",
          name: "GitHub",
          icon: Github,
          external: true,
        },
        {
          href: "https://www.linkedin.com/in/adhaghani/",
          name: "LinkedIn",
          icon: Linkedin,
          external: true,
        },
        {
          href: "https://www.hackerrank.com/Adhaghani",
          name: "HackerRank",
          icon: Trophy,
          external: true,
        },
        {
          href: "https://www.instagram.com/adhaghani",
          name: "Instagram",
          icon: Instagram,
          external: true,
        },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-6xl container mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <img
                  src="/assets/logo.svg"
                  alt="Adhaghani Logo"
                  className="size-12 rounded-lg"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
              </div>
              <div>
                <Text
                  as="h3"
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  Adhaghani
                </Text>
                <Text as="p" styleVariant="muted" className="text-sm">
                  Portfolio 2.0
                </Text>
              </div>
            </div>

            <Text as="p" styleVariant="muted" className="mb-6 leading-relaxed">
              Full-Time Student & Software Enthusiast passionate about creating
              innovative solutions and sharing knowledge through code.
            </Text>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-card border rounded-lg">
                <Text as="p" className="text-lg font-bold text-blue-600">
                  {new Date().getFullYear() - 2022}+
                </Text>
                <Text as="p" styleVariant="muted" className="text-xs">
                  Years Coding
                </Text>
              </div>
              <div className="text-center p-3 bg-card border rounded-lg">
                <Text as="p" className="text-lg font-bold text-purple-600">
                  10+
                </Text>
                <Text as="p" styleVariant="muted" className="text-xs">
                  Projects Built
                </Text>
              </div>
            </div>

            {/* Theme Preferences */}
            <div className="p-4 bg-card border-2 rounded-lg">
              <Text as="p" className="font-medium mb-2">
                Theme Preferences
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm mb-3">
                Customize your viewing experience
              </Text>
              <div className="flex items-center justify-center">
                <ModeToggle />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {footerNavs.map((section, idx) => (
                <div key={idx}>
                  <Text as="h4" className="font-semibold mb-4 text-foreground">
                    {section.label}
                  </Text>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIdx) => {
                      const IconComponent = item.icon;
                      return (
                        <li key={itemIdx}>
                          <Link
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={
                              item.external ? "noopener noreferrer" : undefined
                            }
                            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1"
                          >
                            {IconComponent && (
                              <IconComponent className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                            )}
                            <span>{item.name}</span>
                            {item.external && (
                              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Text as="p" className="text-sm">
                © {currentYear} Ahmad Adha Ghani. Made with
              </Text>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <Text as="p" className="text-sm">
                using Next.js & TypeScript
              </Text>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-4">
              <Text
                as="p"
                styleVariant="muted"
                className="text-sm hidden sm:block"
              >
                Built with:
              </Text>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-muted rounded text-xs font-medium">
                  Next.js 15
                </div>
                <div className="px-2 py-1 bg-muted rounded text-xs font-medium">
                  TypeScript
                </div>
                <div className="px-2 py-1 bg-muted rounded text-xs font-medium">
                  Tailwind CSS
                </div>
              </div>
            </div>

            {/* Scroll to Top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-950/20"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              <span className="hidden sm:inline ml-2">Back to Top</span>
            </Button>
          </div>

          {/* Last Updated */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <Text as="p" className="text-xs">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Social Icons (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <div className="flex flex-col gap-2">
          <Button
            size="sm"
            variant="outline"
            className="w-10 h-10 rounded-full p-0 bg-card border-2"
            asChild
          >
            <Link href="https://github.com/adhaghani" target="_blank">
              <Github className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="w-10 h-10 rounded-full p-0 bg-card border-2"
            asChild
          >
            <Link href="https://linkedin.com/in/adhaghani" target="_blank">
              <Linkedin className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
