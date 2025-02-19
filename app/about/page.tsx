"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Text } from "@/components/ui/text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Ripple } from "@/components/magicui/ripple";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip";
import { MailIcon, ArrowRightIcon, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/magicui/marquee";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const technologies = [
  { name: "React", icon: "/tech/vercel.svg" },
  { name: "TypeScript", icon: "/tech/vercel.svg" },
  { name: "Next.js", icon: "/tech/vercel.svg" },
  { name: "Tailwind CSS", icon: "/tech/vercel.svg" },
  { name: "Node.js", icon: "/tech/vercel.svg" },
  { name: "Git", icon: "/tech/vercel.svg" }
];

const Education = [
  {
    name: "Universiti Teknologi MARA (UiTM)",
    logo: "/edu/uitm.svg",
    degree: "Diploma in Computer Science",
    duration: "October 2022 - February 2025",
    relatedCoursework: [
      "Object-Oriented Programming",
      "Data Structure",
      "Web and Mobile Development",
      "Database Design",
      "Information System Development",
      "Programming Paradigm",
      "Calculus",
      "Probability and Statistic",
      "Computer Organization",
      "Discrete Mathematics"
    ],
    grade: "3.68/4.00",
    activities: [
      {
        title: "Clubs Joined",
        detail: [
          {
            title: "MARA Youth Technology Computer Club (MYTECC)",
            date: "October 2023 - January 2025",
            description:
              "MYTECC is the Computer Science Faculty Club. Mainly organized activities for the student within the faculty. Program varies from prgoramming competition, to bonding program.",
            role: "Multimedia Bureau"
          },
          {
            title:
              "Malaysia Agroentrepreneurial Club for University Student (MyAgrosis)",
            date: "October 2023 - January 2025",
            description:
              "Entrepreneurship club that organized various activities aimed at achieving profit for every program. as lead graphic designer, my role is crucial to achieve our digital marketing goal.",
            role: "Lead Graphic Designer"
          },
          {
            title: "PhotoMedia Club (PMC)",
            date: "October 2023 - January 2025",
            description:
              "Club mainly focus on photography and videography. My role in the club is to shoot Photo and Video for club program, and outside of club programs.",
            role: "PhotoVideo Dision"
          }
        ]
      },
      {
        title: "Competitions Involvement",
        detail: [
          {
            title: "MYTECC Codevortex: C++ & Java",

            description:
              "Java & C++ Programming Competition, My team achieved First Place for Java Programming Category."
          },
          {
            title: "CodeAthon UiTM Se-Malaysia 2024",

            description:
              "C++ Programming Competition that my team achieved third-runner up placement."
          },
          {
            title: "i-CPROM 2023",
            description:
              "My first ever programming competition organized by UiTM, my team achieved 13th runner up in the competition."
          }
        ]
      },
      {
        title: "Volunteers",
        detail: [
          {
            title: "JPJPP 23-24 Election Committe",
            date: "January 2024",
            description:
              "Election Committee, Mainly Responsible to manage election season. As lead multimedia, i am responsible to manage and deliver content in a timely manner.",
            role: "Lead Mutlimedia Team"
          }
        ]
      }
    ]
  }
];

const Work = [
  {
    name: "AbleAce Raakin Sdn. Bhd.",
    logo: "/work/AAR.svg",
    duration: "September 2024 - February 2025",
    type: "Intenrship",
    role: "Junior IT Executive",
    Achievement: [
      "Designed, Developed and launched the company’s new website",
      "Streamlined Article publishing method for staff by developing a Content Management System for the website.",
      "Optimised website bandwidth allocation by up to 60%",
      "Redesigned and Optimised email footer imagery, 50% reduction in size.",
      "Utilised AWS Service Screener to detect potential cost saving measures and security risk for the Trading System.",
      "Conducted Excel Competency sessions, increasing excel competency by 30%"
    ]
  }
];

const Certificate = [{}, {}, {}, {}, {}, {}, {}, {}];

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
      <section id="Gallery" className="pb-20">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-5">
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
          <BlurFade inView>
            <Text as="h2" className="text-3xl font-bold ">
              Education
            </Text>
            <Text as="p" styleVariant="muted" className="mt-2 mb-8">
              My educational background
            </Text>
            {Education.map((edu, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="aspect-video rounded-lg bg-secondary grid place-items-center min-w-64">
                    <img src={edu.logo} alt={edu.name} />
                  </div>
                  <div className="w-full">
                    <div className="flex gap-4 justify-between items-centerr">
                      <Text as="h4">{edu.name}</Text>
                      <Button size={"sm"} variant={"ghost"}>
                        View Detail
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    <Text as="p" styleVariant="muted" className="font-medium">
                      {edu.degree}
                    </Text>
                    <Text as="p" styleVariant="muted" className="font-medium">
                      {edu.duration}
                    </Text>
                    <Text
                      as="p"
                      styleVariant="muted"
                      className="pt-2 font-medium"
                    >
                      Related Coursework:
                    </Text>
                    <Text as="p" styleVariant="muted" className="font-medium">
                      {edu.relatedCoursework.join(", ")}
                    </Text>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {edu.activities.map((activity, i) => (
                    <div key={i} className="mt-4">
                      <Text as="p" className="font-semibold">
                        {activity.title}
                      </Text>
                      {activity.detail.map((detail, i) => (
                        <div key={i} className="mt-2">
                          <div className="flex gap-2 flex-wrap">
                            <Text as="p" className="font-medium">
                              {detail.title}
                            </Text>
                            {detail?.role ? (
                              <Badge variant={"secondary"}>
                                {detail?.role}
                              </Badge>
                            ) : null}
                          </div>
                          {detail?.date ? (
                            <Text as="p" styleVariant="muted" className="my-1">
                              {detail?.date}
                            </Text>
                          ) : null}
                          {detail.description ? (
                            <Text as="p" styleVariant="muted">
                              {detail.description}
                            </Text>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </BlurFade>
        </div>
      </section>
      {/* Work */}
      <section id="work" className="py-20">
        <div className="container mx-auto">
          <BlurFade inView>
            <Text as="h2" className="text-3xl font-bold ">
              Work Experience
            </Text>
            <Text as="p" styleVariant="muted" className="mt-2 mb-8">
              My working experience
            </Text>
            {Work.map((work, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="aspect-video rounded-lg bg-secondary grid place-items-center min-w-64">
                    <img src={work.logo} alt={work.name} />
                  </div>
                  <div className="w-full">
                    <div className="flex gap-4 justify-between items-center">
                      <Text as="h4">{work.name}</Text>
                      <Button size={"sm"} variant={"ghost"}>
                        View Detail
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    <Text as="p" styleVariant="muted" className="font-medium">
                      {work.type}, {work.role}
                    </Text>
                    <Text as="p" styleVariant="muted" className="font-medium">
                      {work.duration}
                    </Text>
                  </div>
                </div>
                <ul className="mt-4">
                  <Text as="h4" className="font-semibold">
                    Contribution
                  </Text>
                  {work.Achievement.map((achievement, i) => (
                    <li key={i} className="mt-2 ml-5 list-disc">
                      <Text as="p">{achievement}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </BlurFade>
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
                          Certification Date
                        </Text>
                      </div>
                      <Text as="p" styleVariant="muted" className="font-medium">
                        Certification By
                      </Text>
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
