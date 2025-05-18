"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Text } from "@/components/ui/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Marquee } from "@/components/magicui/marquee";
import TechCard from "@/components/ui/tech-card";
import { PaintbrushIcon, CodeIcon, BrushIcon } from "lucide-react";
import Contact from "@/components/contact";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import DevelopmentCard from "@/components/ui/development-card";
import { BackgroundLines } from "@/components/ui/background-lines";
import {
  DevelopmentTech,
  DesignTech,
  OtherTech
} from "@/components/technology-stack-icon";
import Link from "next/link";
import { DevelopmentProjects } from "@/constant/constant";
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

const testimonials = [
  {
    title: "Outstanding Creativity and Dedication",
    quote:
      "Collaborating with Ahmad Adha has been a truly rewarding experience. Their creativity, professionalism, and consistent ability to deliver high-quality graphic design work played a significant role in elevating the visual appeal of our faculty projects. Whether it was event posters, social media content, or presentation materials, their designs always reflected excellence and aligned perfectly with our goals. I'm grateful for their support and dedication throughout our term.",
    name: "Syahreen",
    position:
      "Former President, Faculty of Business and Management, UiTM Pahang (Session 23/24)"
  },
  {
    title: "Great Collaboration",
    quote:
      "Working with adha is very enjoyable, and he has a great personality, especially in creating works that contribute to the growth of MYTECC while meeting the necessary criteria within the MYTECC organization.",
    name: "Aidiel Hussin",
    position: "Former President, MYTECC Pahang (session 23/24)"
  },
  {
    title: "Very Proffessional Ethic",
    quote:
      "Task that was given to adha exceeds our expectation, and he delivers all the work sooner than expected.",
    name: "Mazidah Merican",
    position: "IT Manager, AbleAce Raakin Sdn. Bhd."
  }
];

export default function Home() {
  const SelectedProjects = DevelopmentProjects.filter(
    (project) =>
      project.project_Name === "UniParcel" ||
      project.project_Name === "E-Commerce Platform" ||
      project.project_Name === "Personal Portfolio Website"
  );

  return (
    <>
      {/* Hero */}
      <BackgroundLines className="h-screen max-h-[1100px] flex items-center justify-center w-full flex-col px-4 bg-transparent">
        <Text
          as="h1"
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl lg:text-7xl py-2 md:py-10 tracking-tight"
        >
          hello Everyone, <br /> I{`'`}m Adha.
        </Text>
        <p className="max-w-xl mx-auto text-lg text-neutral-700 dark:text-neutral-400 text-center">
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
                  I{`'`}m a passionate tech enthusiast and full-time student,
                  deeply immersed in the world of software development and
                  design. With a keen eye for detail and a love for creating
                  intuitive user experiences, I specialize in building modern
                  web applications using cutting-edge technologies.
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
          My Technical Expertise
        </Text>
        <div className="relative grid grid-cols-1 gap-12 !overflow-hidden mt-5">
          <div>
            <Text as="h3" className="mb-12">
              Development Technologies
            </Text>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-3 gap-2">
              {DevelopmentTech.map((tech, i) => (
                <TechCard key={i} Data={tech} />
              ))}
            </div>
          </div>
          <div>
            <Text as="h3" className="mb-12">
              Design Technologies
            </Text>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-3 gap-2">
              {DesignTech.map((tech, i) => (
                <TechCard key={i} Data={tech} />
              ))}
            </div>
          </div>
          <div>
            <Text as="h3" className="mb-12">
              Others
            </Text>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-3 gap-2">
              {OtherTech.map((tech, i) => (
                <TechCard key={i} Data={tech} />
              ))}
            </div>
          </div>
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
          {SelectedProjects.map((project, i) => {
            return <DevelopmentCard key={i} data={project} />;
          })}
        </div>
        <BlurFade inView>
          <Link href={"project"}>
            <InteractiveHoverButton>View All Projects</InteractiveHoverButton>
          </Link>
        </BlurFade>
      </div>

      {/* Reviews */}
      <div className="py-20 px-4 ">
        <Text as="h2" className="mt-2">
          Reviews
        </Text>
        <Text as="p" className="text-muted-foreground mb-10">
          Here what my clients say about me.
        </Text>
        <div className="hidden md:block">
          <Marquee>
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="h-fit md:max-w-xl max-w-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    " {testimonial.title} "
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Text as="p">{testimonial.quote}</Text>
                </CardContent>
                <CardFooter>
                  <Text as="p" styleVariant="muted">
                    {testimonial.name} - {testimonial.position}
                  </Text>
                </CardFooter>
              </Card>
            ))}
          </Marquee>
        </div>
        <div className="space-y-6 visible md:hidden">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="h-fit max-w-xl">
              <CardHeader>
                <CardTitle className="text-2xl">
                  " {testimonial.title} "
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text as="p">{testimonial.quote}</Text>
              </CardContent>
              <CardFooter>
                <Text as="p" styleVariant="muted">
                  {testimonial.name} - {testimonial.position}
                </Text>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section - New Addition */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <BlurFade inView>
            <Text as="h2" className="text-3xl font-bold mb-8">
              Let{`'`}s Connect
            </Text>
            <Contact />
          </BlurFade>
        </div>
      </section>
    </>
  );
}
