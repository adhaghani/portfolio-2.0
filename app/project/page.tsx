"use client";
import { Text } from "@/components/ui/text";
import { Spotlight } from "@/components/ui/spotlight-new";
import { BlurFade } from "@/components/magicui/blur-fade";
import DesignCard from "@/components/ui/design-card";
import DevelopmentCard from "@/components/ui/development-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  FilterIcon,
  CodeIcon,
  PaletteIcon,
  SearchIcon,
  FolderIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Contact from "@/components/contact";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DevelopmentProjects, DesignProjects } from "@/constant/constant";
import { DevelopmentProjectType } from "@/constant/types";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const page = () => {
  const [viewValue, setViewValue] = useState<string[]>([
    "Full-Stack",
    "Front-End",
    "Back-End",
    "Others",
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"development" | "design">(
    "development"
  );

  const handleFilterChange = (value: string[]) => {
    setViewValue(value);
  };

  // Filter development projects based on search and filter
  const filteredDevelopmentProjects = useMemo(() => {
    return DevelopmentProjects.filter((project) => {
      const matchesFilter = viewValue.some((value) =>
        project.development_Type.includes(value)
      );
      const matchesSearch =
        project.project_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.project_description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        project.project_Technologies.some((tech: string) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return matchesFilter && matchesSearch;
    });
  }, [viewValue, searchTerm]);

  // Filter design projects based on search
  const filteredDesignProjects = useMemo(() => {
    return DesignProjects.filter((project) => {
      return (
        project.project_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.project_description
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm]);

  const projectStats = {
    totalDev: DevelopmentProjects.length,
    totalDesign: DesignProjects.length,
    filtered:
      activeTab === "development"
        ? filteredDevelopmentProjects.length
        : filteredDesignProjects.length,
  };

  return (
    <>
      {/* Hero Section */}
      <Spotlight xOffset={0} />
      <div className="min-h-screen max-h-[1100px] flex items-center justify-center relative pt-16">
        <div className="w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
            <BlurFade inView>
              <div className="text-center space-y-6">
                <Text
                  as="h1"
                  className="text-4xl lg:text-7xl py-2 md:py-10 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  My Portfolio
                </Text>
                <Text
                  as="p"
                  styleVariant="muted"
                  className="mt-4 font-normal text-base lg:text-lg max-w-2xl mx-auto"
                >
                  A collection of development and design projects that showcase
                  my skills, creativity, and passion for building amazing
                  digital experiences.
                </Text>

                {/* Quick Stats */}
                <div className="flex justify-center gap-8 mt-8">
                  <div className="text-center">
                    <Text as="p" className="text-2xl font-bold text-blue-600">
                      {projectStats.totalDev}+
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Development Projects
                    </Text>
                  </div>
                  <div className="text-center">
                    <Text as="p" className="text-2xl font-bold text-purple-600">
                      {projectStats.totalDesign}+
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Design Projects
                    </Text>
                  </div>
                  <div className="text-center">
                    <Text as="p" className="text-2xl font-bold text-green-600">
                      2+
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Years Experience
                    </Text>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      {/* Navigation Tabs & Search */}
      <section className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <BlurFade inView>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Tab Navigation */}
              <div className="flex items-center gap-3">
                <Button
                  variant={activeTab === "development" ? "default" : "outline"}
                  onClick={() => setActiveTab("development")}
                  className="gap-2 text-base"
                  size="lg"
                >
                  <CodeIcon className="w-5 h-5" />
                  Development ({projectStats.totalDev})
                </Button>
                <Button
                  variant={activeTab === "design" ? "default" : "outline"}
                  onClick={() => setActiveTab("design")}
                  className="gap-2 text-base"
                  size="lg"
                >
                  <PaletteIcon className="w-5 h-5" />
                  Design ({projectStats.totalDesign})
                </Button>
              </div>

              {/* Search and Filter */}
              <div className="flex items-center gap-2 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-80">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {activeTab === "development" && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="gap-2">
                        <FilterIcon className="w-4 h-4" />
                        Filter
                        {viewValue.length < 4 && (
                          <Badge variant="secondary" className="ml-1">
                            {viewValue.length}
                          </Badge>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-4">
                        <Text as="h4" className="font-medium">
                          Filter by Type
                        </Text>
                        <ToggleGroup
                          type="multiple"
                          className="flex-col gap-2"
                          size="lg"
                          variant="outline"
                          value={viewValue}
                          onValueChange={handleFilterChange}
                        >
                          <ToggleGroupItem
                            value="Full-Stack"
                            className="w-full justify-start"
                          >
                            Full-Stack Development
                          </ToggleGroupItem>
                          <ToggleGroupItem
                            value="Front-End"
                            className="w-full justify-start"
                          >
                            Front-End Development
                          </ToggleGroupItem>
                          <ToggleGroupItem
                            value="Back-End"
                            className="w-full justify-start"
                          >
                            Back-End Development
                          </ToggleGroupItem>
                          <ToggleGroupItem
                            value="Others"
                            className="w-full justify-start"
                          >
                            Others
                          </ToggleGroupItem>
                        </ToggleGroup>
                        {viewValue.length === 0 && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() =>
                              setViewValue([
                                "Full-Stack",
                                "Front-End",
                                "Back-End",
                                "Others",
                              ])
                            }
                          >
                            Select All
                          </Button>
                        )}
                      </div>
                    </PopoverContent>
                  </Popover>
                )}
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <Text as="p">
                Showing {projectStats.filtered} of{" "}
                {activeTab === "development"
                  ? projectStats.totalDev
                  : projectStats.totalDesign}{" "}
                projects
              </Text>
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm("")}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear search
                </Button>
              )}
            </div>
          </BlurFade>
        </div>
      </section>
      {/* Development Projects */}
      {activeTab === "development" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <BlurFade inView>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <CodeIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <Text as="h2" className="text-3xl font-bold">
                      Development Projects
                    </Text>
                    <Text as="p" styleVariant="muted">
                      Full-stack applications, websites, and software solutions
                    </Text>
                  </div>
                </div>
              </div>

              {filteredDevelopmentProjects.length > 0 ? (
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {filteredDevelopmentProjects.map((project, i) => (
                    <BlurFade key={i} inView delay={0.1 * (i % 6)}>
                      <DevelopmentCard
                        data={project as DevelopmentProjectType}
                      />
                    </BlurFade>
                  ))}
                </div>
              ) : (
                <BlurFade inView delay={0.2}>
                  <Card className="py-16">
                    <CardContent className="text-center">
                      <div className="mx-auto w-24 h-24 bg-card border-2 rounded-full flex items-center justify-center mb-4">
                        <FolderIcon className="w-12 h-12 text-muted-foreground" />
                      </div>
                      <Text as="h3" className="text-xl font-semibold mb-2">
                        No projects found
                      </Text>
                      <Text as="p" styleVariant="muted" className="mb-6">
                        {searchTerm
                          ? `No projects match "${searchTerm}". Try adjusting your search or filters.`
                          : "No projects match the selected filters. Try selecting different categories."}
                      </Text>
                      <div className="flex gap-2 justify-center">
                        {searchTerm && (
                          <Button
                            variant="outline"
                            onClick={() => setSearchTerm("")}
                          >
                            Clear search
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          onClick={() =>
                            setViewValue([
                              "Full-Stack",
                              "Front-End",
                              "Back-End",
                              "Others",
                            ])
                          }
                        >
                          Reset filters
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              )}
            </BlurFade>
          </div>
        </section>
      )}

      {/* Design Projects */}
      {activeTab === "design" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <BlurFade inView>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <PaletteIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <Text as="h2" className="text-3xl font-bold">
                      Design Projects
                    </Text>
                    <Text as="p" styleVariant="muted">
                      UI/UX designs, branding, and visual identity work
                    </Text>
                  </div>
                </div>
              </div>

              {filteredDesignProjects.length > 0 ? (
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {filteredDesignProjects.map((project, i) => (
                    <BlurFade key={i} inView delay={0.1 * (i % 6)}>
                      <DesignCard data={project} />
                    </BlurFade>
                  ))}
                </div>
              ) : (
                <BlurFade inView delay={0.2}>
                  <Card className="py-16">
                    <CardContent className="text-center">
                      <div className="mx-auto w-24 h-24 bg-card border-2 rounded-full flex items-center justify-center mb-4">
                        <PaletteIcon className="w-12 h-12 text-muted-foreground" />
                      </div>
                      <Text as="h3" className="text-xl font-semibold mb-2">
                        No design projects found
                      </Text>
                      <Text as="p" styleVariant="muted" className="mb-6">
                        {searchTerm
                          ? `No design projects match "${searchTerm}". Try adjusting your search.`
                          : "No design projects available at the moment."}
                      </Text>
                      {searchTerm && (
                        <Button
                          variant="outline"
                          onClick={() => setSearchTerm("")}
                        >
                          Clear search
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </BlurFade>
              )}
            </BlurFade>
          </div>
        </section>
      )}
      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BlurFade inView>
            <div className="text-center mb-12">
              <Text
                as="h2"
                className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Let's Work Together
              </Text>
              <Text
                as="p"
                styleVariant="muted"
                className="text-lg max-w-2xl mx-auto"
              >
                Have a project in mind? Let's discuss how we can bring your
                ideas to life. I'm always excited to work on new challenges and
                create amazing digital experiences.
              </Text>
            </div>
            <Contact />
          </BlurFade>
        </div>
      </section>
    </>
  );
};

export default page;
