"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Code2,
  Filter,
  Layers3,
  Palette,
  Search,
  ArrowUpRight,
} from "lucide-react";
import DevelopmentCard from "@/components/ui/development-card";
import DesignCard from "@/components/ui/design-card";
import { DevelopmentProjects } from "@/constant/DevelopmentProjects";
import { DesignProjects } from "@/constant/DesignProjects";
import { DevelopmentProjectType } from "@/constant/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

const ALL_TYPES = ["Full-Stack", "Front-End", "Back-End", "Others"];

export default function ProjectPage() {
  const [tab, setTab] = useState<"development" | "design">("development");
  const [search, setSearch] = useState("");
  const [activeTypes, setActiveTypes] = useState<string[]>(ALL_TYPES);

  const filteredDevelopment = useMemo(() => {
    return DevelopmentProjects.filter((project) => {
      const matchesType = activeTypes.some((type) =>
        project.development_Type.includes(type),
      );
      const query = search.toLowerCase();
      const matchesSearch =
        project.project_Name.toLowerCase().includes(query) ||
        project.project_description.toLowerCase().includes(query) ||
        project.project_Technologies.some((tech: string) =>
          tech.toLowerCase().includes(query),
        );
      return matchesType && matchesSearch;
    });
  }, [activeTypes, search]);

  const filteredDesign = useMemo(() => {
    const query = search.toLowerCase();
    return DesignProjects.filter(
      (project) =>
        project.project_Name.toLowerCase().includes(query) ||
        project.project_description.toLowerCase().includes(query),
    );
  }, [search]);

  const toggleType = (type: string) => {
    setActiveTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type],
    );
  };

  const visibleCount =
    tab === "development" ? filteredDevelopment.length : filteredDesign.length;
  const totalCount =
    tab === "development" ? DevelopmentProjects.length : DesignProjects.length;

  return (
    <div className="mx-auto px-4 pb-20 pt-36 md:px-8">
      <section className="border-2 border-border bg-card p-6 md:p-8">
        <div className="mb-4 inline-flex items-center border border-border bg-secondary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          Project Index
        </div>
        <Text
          as="h1"
          className="text-4xl font-bold uppercase tracking-[0.03em] md:text-6xl"
        >
          Development
        </Text>
        <Text
          as="p"
          styleVariant="muted"
          className="mt-4 max-w-3xl text-sm leading-relaxed md:text-base"
        >
          Build logs, shipped apps, and production experiments. The portfolio is
          organized for fast technical evaluation.
        </Text>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Card className="border-2">
            <CardContent className="p-4">
              <Text
                as="p"
                className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
              >
                Development
              </Text>
              <Text as="p" className="mt-1 text-3xl font-bold">
                {DevelopmentProjects.length}
              </Text>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4">
              <Text
                as="p"
                className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
              >
                Design
              </Text>
              <Text as="p" className="mt-1 text-3xl font-bold">
                {DesignProjects.length}
              </Text>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4">
              <Text
                as="p"
                className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
              >
                Blog Context
              </Text>
              <Button asChild variant="outline" className="mt-2 w-full">
                <Link href="/blog">
                  Open Blog
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-8 border-2 border-border bg-card p-4 md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid grid-cols-2 gap-2 sm:flex">
            <Button
              variant={tab === "development" ? "default" : "outline"}
              onClick={() => setTab("development")}
            >
              <Code2 className="h-4 w-4" />
              Development
            </Button>
            <Button
              variant={tab === "design" ? "default" : "outline"}
              onClick={() => setTab("design")}
            >
              <Palette className="h-4 w-4" />
              Design
            </Button>
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects, technologies, or context"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 border-2 pl-10"
            />
          </div>
        </div>

        {tab === "development" && (
          <div className="mt-4 border-t-2 border-border pt-4">
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
              <Filter className="h-3.5 w-3.5" />
              Filter by architecture role
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_TYPES.map((type) => (
                <Badge
                  key={type}
                  variant={activeTypes.includes(type) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleType(type)}
                >
                  {type}
                </Badge>
              ))}
              {activeTypes.length === 0 && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setActiveTypes(ALL_TYPES)}
                >
                  Reset Filters
                </Button>
              )}
            </div>
          </div>
        )}
      </section>

      <section className="mt-6 border-y-2 border-border py-3">
        <Text
          as="p"
          className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
        >
          Showing {visibleCount} of {totalCount} {tab} projects
        </Text>
      </section>

      {tab === "development" ? (
        filteredDevelopment.length > 0 ? (
          <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDevelopment.map((project, i) => (
              <DevelopmentCard
                key={i}
                data={project as DevelopmentProjectType}
              />
            ))}
          </section>
        ) : (
          <section className="mt-8 border-2 border-border bg-card p-12 text-center">
            <Layers3 className="mx-auto mb-3 h-9 w-9 text-muted-foreground" />
            <Text as="h3" className="text-xl font-semibold">
              No development projects match this filter.
            </Text>
            <Text as="p" styleVariant="muted" className="mt-2 text-sm">
              Adjust your search query or re-enable all architecture filters.
            </Text>
          </section>
        )
      ) : filteredDesign.length > 0 ? (
        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDesign.map((project, i) => (
            <DesignCard key={i} data={project} />
          ))}
        </section>
      ) : (
        <section className="mt-8 border-2 border-border bg-card p-12 text-center">
          <Layers3 className="mx-auto mb-3 h-9 w-9 text-muted-foreground" />
          <Text as="h3" className="text-xl font-semibold">
            No design projects match this query.
          </Text>
          <Text as="p" styleVariant="muted" className="mt-2 text-sm">
            Try a broader keyword or switch back to development projects.
          </Text>
        </section>
      )}
    </div>
  );
}
