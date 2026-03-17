"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BookOpen,
  Calendar,
  Code2,
  Eye,
  FileText,
  GitBranch,
  Hammer,
  Layers3,
  Mail,
  Sparkles,
  User,
} from "lucide-react";
import { DevelopmentProjects } from "@/constant/DevelopmentProjects";
import { BlogPost } from "@/utils/blog-search";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import DevelopmentCard from "@/components/ui/development-card";

const stats = [
  { label: "Years of Coding", value: "2+" },
  { label: "Shipped Projects", value: `${DevelopmentProjects.length}+` },
  { label: "Current Focus", value: "Web Systems" },
  { label: "Writing Track", value: "Build Notes" },
];

const valuePillars = [
  {
    icon: GitBranch,
    title: "Build In Public",
    description:
      "I document implementation decisions, trade-offs, and outcomes so teams can evaluate my process, not just the final screenshots.",
  },
  {
    icon: Hammer,
    title: "Ship With Constraints",
    description:
      "I prioritize maintainability, delivery speed, and user clarity while balancing technical debt against real product goals.",
  },
  {
    icon: Blocks,
    title: "System Thinking",
    description:
      "I treat interfaces, APIs, and content as one product surface. Development and blog are intentionally linked for context.",
  },
];

export default function Home() {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadRecent = async () => {
      try {
        const response = await fetch("/api/blog/recent?limit=6");
        const result = await response.json();
        if (result.success) {
          setRecentPosts(result.data);
        }
      } catch {
        setRecentPosts([]);
      }
    };

    loadRecent();
  }, []);

  const featuredProjects = useMemo(
    () =>
      DevelopmentProjects.filter((project) =>
        [
          "MDIT x DOSM Datathon 2025 Website",
          "CyberSafe - Cyber Crime Awareness and Facility Website",
          "Resume Review using AI",
        ].includes(project.project_Name),
      ),
    [],
  );

  return (
    <div className="mx-auto px-4 pb-20 pt-32 md:px-8">
      <section className="border-2 border-border bg-card p-6 md:p-10">
        <div className="mb-4 inline-flex items-center gap-2 border border-border bg-secondary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5" />
          Development Portfolio + Blog
        </div>
        <Text
          as="h1"
          className="text-4xl font-bold uppercase tracking-[0.03em] md:text-6xl"
        >
          Build. Explain. Improve.
        </Text>
        <Text
          as="p"
          styleVariant="muted"
          className="mt-4 max-w-3xl text-sm leading-relaxed md:text-base"
        >
          I build maintainable web products and publish the thinking behind each
          decision. This homepage is intentionally structured for fast technical
          evaluation by recruiters, engineering managers, and clients.
        </Text>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge variant="secondary">Monospace Interface</Badge>
          <Badge variant="secondary">Hard-Edge Minimalism</Badge>
          <Badge variant="secondary">Project-to-Post Linking</Badge>
          <Badge variant="secondary">Product-Driven Engineering</Badge>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-2 border-border bg-background p-4"
            >
              <Text
                as="p"
                className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
              >
                {item.label}
              </Text>
              <Text as="p" className="mt-1 text-2xl font-bold">
                {item.value}
              </Text>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Button asChild>
            <Link href="/project">
              <Code2 className="h-4 w-4" />
              Explore Development Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">
              <BookOpen className="h-4 w-4" />
              Read Blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              <Mail className="h-4 w-4" />
              Start a Conversation
            </Link>
          </Button>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {valuePillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Card key={pillar.title} className="border-2">
              <CardContent className="p-5">
                <div className="mb-3 inline-flex border border-border bg-secondary p-2">
                  <Icon className="h-4 w-4" />
                </div>
                <Text
                  as="h3"
                  className="text-lg font-semibold uppercase tracking-[0.03em]"
                >
                  {pillar.title}
                </Text>
                <Text
                  as="p"
                  styleVariant="muted"
                  className="mt-2 text-sm leading-relaxed"
                >
                  {pillar.description}
                </Text>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="mt-10 border-y-2 border-border py-3">
        <Text
          as="p"
          className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
        >
          Featured development projects: selected for product complexity and
          delivery impact
        </Text>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <DevelopmentCard key={i} data={project} />
        ))}
      </section>

      <section className="mt-14 border-y-2 border-border py-3">
        <Text
          as="p"
          className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
        >
          Recent writing: education journey, implementation notes, and lessons
          learned
        </Text>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.length > 0 ? (
          recentPosts.map((post) => (
            <Card key={post.id} className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.published_at
                      ? new Date(post.published_at).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          },
                        )
                      : "Draft"}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    {post.views}
                  </span>
                </div>
                <CardTitle>
                  <Text
                    as="h3"
                    className="line-clamp-2 text-xl font-semibold leading-tight"
                  >
                    {post.title}
                  </Text>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Text
                  as="p"
                  styleVariant="muted"
                  className="line-clamp-3 text-sm leading-relaxed"
                >
                  {post.excerpt ||
                    (post.content.length > 140
                      ? `${post.content.slice(0, 140)}...`
                      : post.content)}
                </Text>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.slug}`}>
                    <FileText className="h-4 w-4" />
                    Read Full Article
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="border-2 md:col-span-2">
            <CardContent className="p-8 text-center">
              <Text
                as="h3"
                className="text-xl font-semibold uppercase tracking-[0.03em]"
              >
                New writing is coming soon.
              </Text>
              <Text as="p" styleVariant="muted" className="mt-2 text-sm">
                Visit the blog index to browse all existing posts and archives.
              </Text>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/blog">Open Blog Archive</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-2">
        <Card className="border-2">
          <CardContent className="p-6">
            <Text
              as="h3"
              className="text-2xl font-semibold uppercase tracking-[0.03em]"
            >
              For Recruiters
            </Text>
            <Text
              as="p"
              styleVariant="muted"
              className="mt-3 text-sm leading-relaxed"
            >
              Start with development projects to review architecture decisions,
              code structure, and delivery scope. Then jump to the blog for
              implementation context and trade-off reasoning.
            </Text>
            <Button asChild className="mt-4 w-full">
              <Link href="/project">
                Open Project Index
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardContent className="p-6">
            <Text
              as="h3"
              className="text-2xl font-semibold uppercase tracking-[0.03em]"
            >
              For Clients
            </Text>
            <Text
              as="p"
              styleVariant="muted"
              className="mt-3 text-sm leading-relaxed"
            >
              Use the blog and snippets to evaluate communication clarity and
              engineering process. If you need a builder who can execute and
              explain, let&apos;s discuss your product goals.
            </Text>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button asChild variant="outline">
                <Link href="/blog">
                  <BookOpen className="h-4 w-4" />
                  Blog
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact">
                  <User className="h-4 w-4" />
                  Contact
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-14 border-2 border-border bg-card p-6 md:p-8">
        <Text
          as="p"
          className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
        >
          Suggested path through the portfolio
        </Text>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="border border-border bg-background p-4">
            <Text
              as="p"
              className="text-sm font-semibold uppercase tracking-[0.04em]"
            >
              01 Development
            </Text>
            <Text as="p" styleVariant="muted" className="mt-2 text-sm">
              Review selected projects for scope, architecture, and outcomes.
            </Text>
          </div>
          <div className="border border-border bg-background p-4">
            <Text
              as="p"
              className="text-sm font-semibold uppercase tracking-[0.04em]"
            >
              02 Blog
            </Text>
            <Text as="p" styleVariant="muted" className="mt-2 text-sm">
              Read detailed implementation notes and technical reflections.
            </Text>
          </div>
          <div className="border border-border bg-background p-4">
            <Text
              as="p"
              className="text-sm font-semibold uppercase tracking-[0.04em]"
            >
              03 Contact
            </Text>
            <Text as="p" styleVariant="muted" className="mt-2 text-sm">
              Reach out with your role, challenge, and timeline.
            </Text>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild variant="outline">
            <Link href="/project">
              <Layers3 className="h-4 w-4" />
              Start at Projects
            </Link>
          </Button>
          <Button asChild>
            <Link href="/contact">
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
