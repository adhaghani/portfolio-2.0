"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Text } from "@/components/ui/text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Ripple } from "@/components/magicui/ripple";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip";
import { MailIcon, ArrowRightIcon, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/magicui/marquee";
import { Badge } from "@/components/ui/badge";
import {
  technologies,
  Certificate,
  Work,
  Education
} from "@/constant/constant";
import EducationCard from "@/components/education-card";
import WorkCard from "@/components/work-card";

const page = () => {
  return (
    <>
      {/* Hero */}
      <div className="h-screen max-h-[1100px] flex items-center justify-center relative pt-16">
        <div className="container mx-auto px-4 text-center">
          <BlurFade delay={0.1}>
            <Text as="h1" className="text-4xl md:text-6xl font-bold mb-4">
              A little bit about me
            </Text>
          </BlurFade>
          <BlurFade delay={0.2}>
            <Text
              as="h2"
              className="text-2xl md:text-4xl text-muted-foreground mb-8"
            >
              <WordRotate
                words={[
                  "Full-Time Student",
                  "Tech Enthusiast",
                  "Volunteer Activities"
                ]}
              />
            </Text>
          </BlurFade>
          <Ripple className="z-[5]" />
        </div>
      </div>
      {/* Photo Gallery */}
      <section id="Gallery" className="pb-20 w-full !overflow-hidden">
        <div className="relative flex w-full flex-col items-center justify-center !overflow-hidden mt-5">
          <Marquee className="[--duration:20s]">
            <TooltipProvider delayDuration={0}>
              {technologies.map((tech, i) => (
                <BlurFade inView delay={i === 0 ? 0.2 : 0.2 * i}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="p-4 aspect-video min-h-40 grid place-items-center border shadow rounded-lg">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-12 h-12 mx-2"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <Text as="p">{tech.name}</Text>
                    </TooltipContent>
                  </Tooltip>
                </BlurFade>
              ))}
            </TooltipProvider>
          </Marquee>
          <Marquee reverse className="[--duration:20s]">
            <TooltipProvider delayDuration={0}>
              {technologies.map((tech, i) => (
                <BlurFade inView delay={i === 0 ? 0.2 : 0.2 * i}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="p-4 aspect-video min-h-40 grid place-items-center border shadow rounded-lg">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-12 h-12 mx-2"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <Text as="p">{tech.name}</Text>
                    </TooltipContent>
                  </Tooltip>
                </BlurFade>
              ))}
            </TooltipProvider>
          </Marquee>
          <Marquee className="[--duration:20s]">
            <TooltipProvider delayDuration={0}>
              {technologies.map((tech, i) => (
                <BlurFade inView delay={i === 0 ? 0.2 : 0.2 * i}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="p-4 aspect-video min-h-40 grid place-items-center border shadow rounded-lg">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-12 h-12 mx-2"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <Text as="p">{tech.name}</Text>
                    </TooltipContent>
                  </Tooltip>
                </BlurFade>
              ))}
            </TooltipProvider>
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <BlurFade inView>
            <Text as="h2" className="text-3xl font-bold mb-8">
              About Me
            </Text>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Text as="p" className="text-md" styleVariant="muted">
                  I'm a passionate tech enthusiast and full-time student, deeply
                  immersed in the world of software development and design. With
                  a keen eye for detail and a love for creating intuitive user
                  experiences, I specialize in building modern web applications
                  using cutting-edge technologies.
                </Text>
              </div>
              <div>
                <Text as="p" className="text-md" styleVariant="muted">
                  Currently pursuing my degree, I balance my academic pursuits
                  with hands-on project work, constantly learning and adapting
                  to new technologies in the ever-evolving tech landscape.
                </Text>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      {/* Education */}
      <section id="education" className="py-20">
        <div className="container mx-auto">
          <Text as="h2" className="text-3xl font-bold ">
            Education
          </Text>
          <Text as="p" styleVariant="muted" className="mt-2 mb-8">
            My educational background
          </Text>
          {Education.map((edu, i) => (
            <div key={i}>
              <EducationCard data={edu} />
            </div>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section id="CTA" className="py-20">
        <div className="bg-secondary p-10 rounded-lg shadow flex justify-between gap-4 flex-wrap flex-col lg:flex-row lg:items-center">
          <div className="text-center lg:text-start">
            <Text as="h2">While you're here, View my projects</Text>
            <Text as="p" styleVariant="muted" className="mt-2 text-md">
              for further service, contact me
            </Text>
          </div>
          <div className="flex gap-3 items-center mx-auto lg:mx-0">
            <Button>View Projects</Button>
            <Button variant={"outline"}>Contact Me</Button>
          </div>
        </div>
      </section>
      {/* Work */}
      <section id="work" className="py-20">
        <div className="container mx-auto">
          <Text as="h2" className="text-3xl font-bold ">
            Work Experience
          </Text>
          <Text as="p" styleVariant="muted" className="mt-2 mb-8">
            My working experience
          </Text>
          {Work.map((work, i) => (
            <div key={i}>
              <WorkCard data={work} />
            </div>
          ))}
        </div>
      </section>
      {/* Certificate */}
      <section id="work" className="py-20">
        <div className="container mx-auto">
          <BlurFade inView>
            <Text as="h2" className="text-3xl font-bold ">
              Certificate
            </Text>
            <Text as="p" styleVariant="muted" className="mt-2 mb-8">
              Certificates i obtained
            </Text>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {Certificate.map((cert, i) => (
                <BlurFade inView key={i} delay={i === 0 ? 0.2 : 0.2 * i}>
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between gap-2">
                        <CardTitle>Certificate Name</CardTitle>
                        <Text
                          as="p"
                          styleVariant="muted"
                          className="w-fit font-medium"
                        >
                          June 2024
                        </Text>
                      </div>
                      <div className="flex justify-between gap-4 items-center">
                        <Text
                          as="p"
                          styleVariant="muted"
                          className="font-medium"
                        >
                          Certification By Microsoft and LinkedIn
                        </Text>
                        <Button size={"sm"} variant={"secondary"}>
                          <LinkIcon /> Credentials
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      {/* Contact Section - New Addition */}
      <section id="contact" className="py-20">
        <div className="container mx-auto">
          <BlurFade inView>
            <Text as="h2" className="text-3xl font-bold mb-8">
              Let's Connect
            </Text>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-5 w-5" />
                    <Text as="p">email@example.com</Text>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline">Github</Button>
                    <Button variant="outline">lindkedin</Button>
                    <Button variant="outline">Resume</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                    <textarea
                      placeholder="Your Message"
                      className="w-full p-2 rounded-md border bg-background min-h-[100px]"
                    />
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
};

export default page;
