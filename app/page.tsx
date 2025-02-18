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
import { PaintbrushIcon, CodeIcon, BrushIcon } from "lucide-react";

const Service = [
  {
    icon: <PaintbrushIcon className="inline-block mr-2" />,
    title: "Web Design",
    description:
      "With experience using Adobe Figma, I am able to create a user interface that is intuitive and developer-friendly. Design ranged from website, webApps, Resume Website and others."
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
      "Using modern tools like canva, Adobe Photoshop, and Adobe Illustrator, I am able to create design elements that are up to client standard. Design ranged from logo, banner, and others."
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
      {/* About SImple */}
      <div className="py-20">
        <Text as="h2" className="mt-2">
          About Me
        </Text>
        <Text as="p" className="text-muted-foreground">
          a little bit about myself.
        </Text>
      </div>
      {/* Services */}
      <div className="py-20">
        <Text as="h2" className="mt-2">
          Services
        </Text>
        <Text as="p" className="text-muted-foreground">
          What do i mainly do.
        </Text>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
          {Service.map((service, i) => (
            <BlurFade inView key={i} delay={i === 0 ? 0.1 : 0.1 + i * 0.2}>
              <Card>
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
          Technology that i have been exposed with.
        </Text>
      </div>
      {/* Projects */}
      <div className="py-20">
        <Text as="h2" className="mt-2">
          Projects
        </Text>
        <Text as="p" className="text-muted-foreground">
          Some of my projects.
        </Text>
      </div>
    </>
  );
}
