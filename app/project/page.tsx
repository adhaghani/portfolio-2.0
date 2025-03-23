"use client";
import { Text } from "@/components/ui/text";
import { Spotlight } from "@/components/ui/spotlight-new";
import { BlurFade } from "@/components/magicui/blur-fade";
import DesignCard from "@/components/ui/design-card";
import DevelopmentCard from "@/components/ui/development-card";
import { FilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Contact from "@/components/contact";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { DevelopmentProjects, DesignProjects } from "@/constant/constant";
import { DevelopmentProjectType } from "@/constant/types";
const page = () => {
  return (
    <>
      {/* Hero */}
      <Spotlight />
      <div className="h-screen max-h-[1100px] flex items-center justify-center relative pt-16">
        <div className=" w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <Text
              as="h1"
              className="text-center text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 tracking-tight"
            >
              All of my Projects
            </Text>
            <Text
              as="p"
              styleVariant="muted"
              className="mt-4 font-normal text-base max-w-lg text-center mx-auto"
            >
              All projects i previously worked on.
            </Text>
          </div>
        </div>
      </div>
      {/* Coding Projects */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <BlurFade inView>
            <div className="flex justify-between items-center gap-4 mb-8">
              <Text as="h2" className="text-3xl font-bold">
                Development Projects
              </Text>
              <Popover>
                <PopoverTrigger asChild>
                  <Button size={"lg"} variant="secondary">
                    <FilterIcon className="h-5 w-5" />
                    Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="m-4">
                  Place content for the popover here.
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Put all Coding projects here */}
              {DevelopmentProjects.map((project, i) => (
                <DevelopmentCard
                  key={i}
                  data={project as DevelopmentProjectType}
                />
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      {/* Design Projects */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <BlurFade inView>
            <Text as="h2" className="text-3xl font-bold mb-8">
              Design Projects
            </Text>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Put all Coding projects here */}
              {DesignProjects.map((project, i) => (
                <DesignCard key={i} data={project} />
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      {/* Contact Section - New Addition */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <BlurFade inView>
            <Text as="h2" className="text-3xl font-bold mb-8">
              Let's Connect
            </Text>
            <Contact />
          </BlurFade>
        </div>
      </section>
    </>
  );
};

export default page;
