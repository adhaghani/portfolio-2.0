"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Coffee,
  Download,
  GraduationCap,
  Camera,
  Gamepad2,
  Heart,
  Music,
  Sparkles,
} from "lucide-react";

import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EducationCard from "@/components/education-card";
import WorkCard from "@/components/work-card";
import CertificateCard from "@/components/ui/certificate-card";

import { Education } from "@/constant/Education";
import { Work } from "@/constant/Work";
import { Certificate } from "@/constant/Certificate";
import { AboutPhotoGallery } from "@/constant/AboutPhotoGallery";

const interests = [
  "System Design",
  "Fitness",
  "Continuous Learning",
  "Coffee",
  "Photography",
  "Games",
  "Music",
  "Travel",
];

const stats = [
  { label: "Years of Building", value: "2+" },
  { label: "Work Experiences", value: `${Work.length}` },
  { label: "Education Entries", value: `${Education.length}` },
  { label: "Certifications", value: `${Certificate.length}` },
];

export default function AboutPage() {
  return (
    <div className="mx-auto px-4 pb-20 pt-32 md:px-8">
      <section className="border-2 border-border bg-card p-6 md:p-10">
        <div className="mb-4 inline-flex items-center gap-2 border border-border bg-secondary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5" />
          Developer Profile
        </div>
        <Text
          as="h1"
          className="text-4xl font-bold uppercase tracking-[0.03em] md:text-6xl"
        >
          Build clearly. Learn continuously.
        </Text>
        <Text
          as="p"
          styleVariant="muted"
          className="mt-4 max-w-3xl text-sm leading-relaxed md:text-base"
        >
          I am a developer focused on maintainable product systems and
          thoughtful interfaces. This page summarizes how I work, what I have
          shipped, and the learning path behind it.
        </Text>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge variant="secondary">Product-Minded Engineering</Badge>
          <Badge variant="secondary">Design + Development</Badge>
          <Badge variant="secondary">Documentation-Driven Growth</Badge>
          <Badge variant="secondary">Execution Under Constraints</Badge>
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
              View Project Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href="/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              <Briefcase className="h-4 w-4" />
              Start a Conversation
            </Link>
          </Button>
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <Card className="border-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>
              <Text
                as="h3"
                className="text-2xl font-semibold uppercase tracking-[0.03em]"
              >
                Journey and Working Style
              </Text>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Text
              as="p"
              styleVariant="muted"
              className="text-sm leading-relaxed md:text-base"
            >
              I bridge product thinking, UI craft, and implementation detail.
              Over the last two years, I have focused on building systems that
              are easy to maintain, clear to use, and fast to iterate.
            </Text>
            <Text
              as="p"
              styleVariant="muted"
              className="text-sm leading-relaxed md:text-base"
            >
              Balancing academic commitments with real project delivery taught
              me disciplined execution, transparent communication, and practical
              trade-off decisions.
            </Text>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border border-border bg-background p-4">
                <Text
                  as="p"
                  className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
                >
                  Core Principle
                </Text>
                <Text as="p" className="mt-2 text-sm font-medium">
                  Clarity first, then scale.
                </Text>
              </div>
              <div className="border border-border bg-background p-4">
                <Text
                  as="p"
                  className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
                >
                  Daily Stack
                </Text>
                <Text as="p" className="mt-2 text-sm font-medium">
                  Next.js, TypeScript, Supabase, Tailwind CSS
                </Text>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>
              <Text
                as="h3"
                className="text-2xl font-semibold uppercase tracking-[0.03em]"
              >
                Personal Interests
              </Text>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge key={interest} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="inline-flex border border-border bg-secondary p-1.5">
                  <Camera className="h-4 w-4" />
                </div>
                Photography for visual sensitivity
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex border border-border bg-secondary p-1.5">
                  <Gamepad2 className="h-4 w-4" />
                </div>
                Games for systems and strategy
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex border border-border bg-secondary p-1.5">
                  <Music className="h-4 w-4" />
                </div>
                Music for focus and recovery
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex border border-border bg-secondary p-1.5">
                  <Coffee className="h-4 w-4" />
                </div>
                Coffee and long build sessions
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10 border-y-2 border-border py-3">
        <Text
          as="p"
          className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
        >
          Process snapshots: field notes from shipping, learning, and
          documenting
        </Text>
      </section>

      <section className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {AboutPhotoGallery.slice(0, 6).map((photo, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden border-2 border-border bg-muted"
          >
            <Image
              src={photo.image.src}
              alt={photo.image.alt}
              width={500}
              height={500}
              className="h-full w-full object-cover"
              quality={90}
            />
          </div>
        ))}
      </section>

      <section className="mt-14 border-y-2 border-border py-3">
        <Text
          as="p"
          className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
        >
          Education and certifications: formal training and practical proof of
          skill
        </Text>
      </section>

      <section className="mt-8 space-y-6">
        <div className="inline-flex items-center gap-2 border border-border bg-secondary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          <GraduationCap className="h-3.5 w-3.5" />
          Education
        </div>
        <div className="space-y-4">
          {Education.map((edu, i) => (
            <EducationCard key={i} data={edu} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <Text
          as="p"
          className="mb-4 text-xs uppercase tracking-[0.08em] text-muted-foreground"
        >
          Certifications
        </Text>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Certificate.map((cert, i) => (
            <CertificateCard key={i} data={cert} i={i} />
          ))}
        </div>
      </section>

      <section className="mt-14 border-y-2 border-border py-3">
        <Text
          as="p"
          className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
        >
          Work experience: professional roles and product delivery outcomes
        </Text>
      </section>

      <section className="mt-8 space-y-4" id="work">
        {Work.map((work, i) => (
          <WorkCard key={i} data={work} />
        ))}
      </section>

      <section className="mt-14 border-2 border-border bg-card p-6 md:p-8">
        <Text
          as="h2"
          className="text-3xl font-semibold uppercase tracking-[0.03em] md:text-5xl"
        >
          Let&apos;s Build Something Useful.
        </Text>
        <Text
          as="p"
          styleVariant="muted"
          className="mt-3 max-w-2xl text-sm leading-relaxed md:text-base"
        >
          If your team needs someone who can design, ship, and explain technical
          decisions clearly, I am open to product-focused collaboration.
        </Text>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild>
            <Link href="/project">View Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              <Heart className="h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
