"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Calendar,
  Clock3,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

const channels = [
  {
    label: "Email",
    value: "adhaahmadwork@gmail.com",
    href: "mailto:adhaahmadwork@gmail.com",
    icon: Mail,
    note: "Best for project briefs and hiring requests",
  },
  {
    label: "Phone",
    value: "+60 18-201 7884",
    href: "tel:+60182017884",
    icon: Phone,
    note: "Quick alignment call",
  },
  {
    label: "Location",
    value: "Selangor, Malaysia (GMT+8)",
    href: "https://maps.google.com/?q=Selangor,+Malaysia",
    icon: MapPin,
    note: "Remote collaboration worldwide",
  },
];

const workflow = [
  {
    step: "01",
    title: "Context",
    description:
      "Share your product goal, timeline, constraints, and current blockers.",
  },
  {
    step: "02",
    title: "Alignment",
    description:
      "I reply with fit, scope shape, and a practical build approach.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "We move into implementation with transparent progress and trade-off notes.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto px-4 pb-20 pt-32 md:px-8">
      <section className="border-2 border-border bg-card p-6 md:p-10">
        <div className="mb-4 inline-flex items-center gap-2 border border-border bg-secondary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          <MessageSquare className="h-3.5 w-3.5" />
          Contact
        </div>
        <Text
          as="h1"
          className="text-4xl font-bold uppercase tracking-[0.03em] md:text-6xl"
        >
          Let&apos;s Build Something Useful.
        </Text>
        <Text
          as="p"
          styleVariant="muted"
          className="mt-4 max-w-3xl text-sm leading-relaxed md:text-base"
        >
          If you&apos;re hiring for engineering roles, validating a product
          idea, or need implementation support, this page is optimized for fast
          outreach. Send a short brief and I&apos;ll respond with next steps.
        </Text>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge variant="secondary">Response window: &lt;24 hours</Badge>
          <Badge variant="secondary">Timezone: GMT+8</Badge>
          <Badge variant="secondary">Remote-first collaboration</Badge>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Button asChild>
            <Link href="mailto:adhaahmadwork@gmail.com?subject=Project%20Inquiry">
              <Send className="h-4 w-4" />
              Send Project Brief
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href="/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Briefcase className="h-4 w-4" />
              Open Resume
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">
              <BookOpen className="h-4 w-4" />
              Review Technical Writing
            </Link>
          </Button>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {channels.map((channel) => {
          const Icon = channel.icon;
          return (
            <Card key={channel.label} className="border-2">
              <CardContent className="p-5">
                <div className="mb-3 inline-flex border border-border bg-secondary p-2">
                  <Icon className="h-4 w-4" />
                </div>
                <Text
                  as="p"
                  className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
                >
                  {channel.label}
                </Text>
                <Link
                  href={channel.href}
                  target={
                    channel.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-1 block"
                >
                  <Text
                    as="p"
                    className="font-semibold leading-snug hover:text-primary"
                  >
                    {channel.value}
                  </Text>
                </Link>
                <Text
                  as="p"
                  styleVariant="muted"
                  className="mt-2 text-sm leading-relaxed"
                >
                  {channel.note}
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
          Recommended outreach format: role/context, objective, timeline, and
          success metric
        </Text>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {workflow.map((item) => (
          <Card key={item.step} className="border-2">
            <CardHeader>
              <Text
                as="p"
                className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
              >
                Step {item.step}
              </Text>
              <CardTitle>
                <Text
                  as="h3"
                  className="text-lg font-semibold uppercase tracking-[0.03em]"
                >
                  {item.title}
                </Text>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text
                as="p"
                styleVariant="muted"
                className="text-sm leading-relaxed"
              >
                {item.description}
              </Text>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>
              <Text
                as="h3"
                className="text-2xl font-semibold uppercase tracking-[0.03em]"
              >
                Availability
              </Text>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock3 className="h-4 w-4" />
              Monday to Friday, 9:00 AM to 6:00 PM (GMT+8)
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Async communication supported for global teams
            </div>
            <Button asChild className="mt-2 w-full">
              <Link href="mailto:adhaahmadwork@gmail.com?subject=Availability%20Check">
                Check Schedule
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>
              <Text
                as="h3"
                className="text-2xl font-semibold uppercase tracking-[0.03em]"
              >
                Professional Links
              </Text>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button
              asChild
              variant="outline"
              className="w-full justify-between"
            >
              <Link
                href="https://github.com/adhaghani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full justify-between"
            >
              <Link
                href="https://www.linkedin.com/in/adhaghani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full justify-between"
            >
              <Link href="/project">
                <span className="inline-flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Project Index
                </span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
