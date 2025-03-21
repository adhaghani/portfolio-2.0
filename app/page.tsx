"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Text } from "@/components/ui/text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Ripple } from "@/components/magicui/ripple";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip";
import { PaintbrushIcon, CodeIcon, BrushIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/magicui/marquee";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import ProjectCard from "@/components/project-card";
import TechStackIcon from "@/components/technology-stack-icon";
import Link from "next/link";
import { BackgroundLines } from "@/components/ui/background-lines";
const Service = [
  {
    icon: <PaintbrushIcon className="inline-block mr-2" />,
    title: "Web Design",
    description:
      "With experience using Adobe Figma, I am able to create a user interface that is intuitive and developer-friendly."
  },
  {
    icon: <CodeIcon className="inline-block mr-2" />,
    title: "Web Development",
    description:
      "Using Typescript, Tailwind, and others Front-end Library, I am capable of creating a modern, responsive and interactive landing page, resume site, portfolio site and others."
  },
  {
    icon: <BrushIcon className="inline-block mr-2" />,
    title: "Graphic Design",
    description:
      "Using modern tools like canva, Adobe Photoshop, and Adobe Illustrator, I am able to create design elements that are up to client standard."
  }
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS",
    image: {
      src: "/projects/portfolio.png",
      alt: "Portfolio Website"
    },
    link: "https://github.com/yourusername/portfolio",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI"
    ]
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Admin dashboard for managing online store inventory and orders",
    image: {
      src: "/projects/portfolio.png",
      alt: "Portfolio Website"
    },
    link: "https://github.com/yourusername/dashboard",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI"
    ]
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    image: {
      src: "/projects/portfolio.png",
      alt: "Portfolio Website"
    },
    link: "https://github.com/yourusername/weather-app",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI"
    ]
  }
];

export default function Home() {
  const shuffleArray = (array: typeof TechStackIcon) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const firstMarqueeIcons = shuffleArray(TechStackIcon);
  const secondMarqueeIcons = shuffleArray(TechStackIcon);

  return (
    <>
      {/* Hero */}
      <BackgroundLines className="h-screen max-h-[1100px] flex items-center justify-center w-full flex-col px-4 bg-transparent">
        <Text
          as="h1"
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 tracking-tight"
        >
          hello Everyone, <br /> I'm Adha.
        </Text>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Coding changes line by line, and sipping coffee whenever i can.
        </p>
      </BackgroundLines>
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

      {/* Services */}
      <div className="py-20 px-4 ">
        <Text as="h2" className="mt-2">
          Services
        </Text>
        <Text as="p" className="text-muted-foreground">
          What I mainly do.
        </Text>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
          {Service.map((service, i) => (
            <BlurFade inView key={i} delay={i === 0 ? 0.1 : 0.1 + i * 0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>
                    <Text as="h3">
                      {service.icon}
                      {service.title}
                    </Text>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <Text as="p">{service.description}</Text>
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Tech */}
      <div className="py-20 px-4 !overflow-hidden">
        <Text as="h2" className="mt-2">
          Technology
        </Text>
        <Text as="p" className="text-muted-foreground">
          Technologies I work with.
        </Text>
        <div className="relative flex flex-col items-center justify-center !overflow-hidden mt-5">
          <Marquee className="[--duration:20s] !overflow-hidden">
            <TooltipProvider delayDuration={0}>
              {firstMarqueeIcons.map((tech, i) => (
                <BlurFade key={i} inView delay={0.5}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="p-4 aspect-square size-24 grid place-items-center bg-background border shadow rounded-lg">
                        {tech.icon}
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
          <Marquee reverse className="[--duration:20s] !overflow-hidden">
            <TooltipProvider delayDuration={0}>
              {secondMarqueeIcons.map((tech, i) => (
                <BlurFade key={i} inView delay={0.5}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="p-4 aspect-square size-24 grid place-items-center bg-background border shadow rounded-lg">
                        {tech.icon}
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
      </div>

      {/* Projects */}
      <div className="py-20 px-4 ">
        <Text as="h2" className="mt-2">
          Projects
        </Text>
        <Text as="p" className="text-muted-foreground">
          Some of my recent work.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {projects.map((project, i) => (
            <BlurFade inView key={i} delay={i * 0.1}>
              <ProjectCard data={project} />
            </BlurFade>
          ))}
        </div>
        <BlurFade inView>
          <InteractiveHoverButton>View All Projects</InteractiveHoverButton>
        </BlurFade>
      </div>

      {/* Contact Section - New Addition */}
      <section id="contact" className="py-20 px-4">
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
}
