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
import { PaintbrushIcon, CodeIcon, BrushIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const technologies = [
  { name: "React", icon: "/tech/react.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "Next.js", icon: "/tech/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg" },
  { name: "Git", icon: "/tech/git.svg" }
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS",
    image: "/projects/portfolio.png",
    link: "https://github.com/yourusername/portfolio"
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Admin dashboard for managing online store inventory and orders",
    image: "/projects/dashboard.png",
    link: "https://github.com/yourusername/dashboard"
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    image: "/projects/weather.png",
    link: "https://github.com/yourusername/weather-app"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="h-[99vh] grid place-items-center relative max-h-[1000px]">
        <div>
          <BlurFade delay={0.1}>
            <Text as="h1" className="text-center">
              Hello, I'm Ahmad Adha
            </Text>
          </BlurFade>
          <BlurFade delay={0.2}>
            <Text as="h1" className="text-center">
              <WordRotate
                className=""
                words={["Full-Time Student", "Tech Enthusiast"]}
              />
            </Text>
          </BlurFade>
          <Ripple mainCircleSize={350} className="z-[5]" />
        </div>
      </div>
      {/* About */}
      <div className="py-20">
        <Text as="h2" className="mt-2">
          About Me
        </Text>
        <Text as="p" className="text-muted-foreground max-w-2xl mt-4">
          I'm a passionate tech enthusiast and full-time student, deeply
          immersed in the world of web development and design. With a keen eye
          for detail and a love for creating intuitive user experiences, I
          specialize in building modern web applications using cutting-edge
          technologies.
        </Text>
        <Text as="p" className="text-muted-foreground max-w-2xl mt-4">
          Currently pursuing my degree, I balance my academic pursuits with
          hands-on project work, constantly learning and adapting to new
          technologies in the ever-evolving tech landscape.
        </Text>
      </div>

      {/* Services */}
      <div className="py-20">
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
      <div className="py-20">
        <Text as="h2" className="mt-2">
          Technology
        </Text>
        <Text as="p" className="text-muted-foreground">
          Technologies I work with.
        </Text>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">
          {technologies.map((tech, i) => (
            <BlurFade inView key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-card hover:bg-accent transition-colors">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 mb-2"
                />
                <Text as="p" className="font-medium">
                  {tech.name}
                </Text>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="py-20">
        <Text as="h2" className="mt-2">
          Projects
        </Text>
        <Text as="p" className="text-muted-foreground">
          Some of my recent work.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, i) => (
            <BlurFade inView key={i} delay={i * 0.1}>
              <Card className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>
                    <Text as="h3">{project.title}</Text>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <Text as="p">{project.description}</Text>
                  </CardDescription>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="mt-4">View Project</Button>
                  </a>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="py-20">
        <Text as="h2" className="mt-2">
          Get in Touch
        </Text>
        <Text as="p" className="text-muted-foreground">
          Let's work together on your next project.
        </Text>
        <div className="mt-8 flex justify-center">
          <a href="mailto:your.email@example.com">
            <Button className="flex items-center gap-2">
              <MailIcon className="w-4 h-4" />
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
