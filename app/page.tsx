"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Text } from "@/components/ui/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/magicui/marquee";
import TechCard from "@/components/ui/tech-card";
import {
  PaintbrushIcon,
  CodeIcon,
  BrushIcon,
  ArrowRight,
  Download,
  Github,
  Mail,
  MapPin,
  Calendar,
  Star,
  Users,
  Trophy,
  Zap,
  Eye,
  Heart,
  CoffeeIcon,
} from "lucide-react";
import Contact from "@/components/contact";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import DevelopmentCard from "@/components/ui/development-card";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BlogPost } from "@/utils/blog-search";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  DevelopmentTech,
  DesignTech,
  OtherTech,
} from "@/components/technology-stack-icon";
import { DevelopmentProjects, Testimonials } from "@/constant/constant";

const Service = [
  {
    icon: <PaintbrushIcon className="w-6 h-6" />,
    title: "Web Design",
    description:
      "Creating intuitive and visually stunning user interfaces with modern design principles, ensuring seamless user experiences across all devices.",
    features: ["UI/UX Design", "Responsive Design", "Design Systems"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <CodeIcon className="w-6 h-6" />,
    title: "Web Development",
    description:
      "Building robust, scalable web applications using cutting-edge technologies and frameworks for optimal performance and user engagement.",
    features: [
      "Frontend Development",
      "Backend Integration",
      "Performance Optimization",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <BrushIcon className="w-6 h-6" />,
    title: "Graphic Design",
    description:
      "Crafting compelling visual identities and marketing materials that effectively communicate your brand message and captivate your audience.",
    features: ["Brand Identity", "Marketing Materials", "Digital Assets"],
    color: "from-green-500 to-emerald-500",
  },
];

const stats = [
  { icon: Trophy, value: "15+", label: "Projects Completed" },
  { icon: Users, value: "8+", label: "Happy Clients" },
  { icon: CoffeeIcon, value: "900+", label: "Coffee Consumed" },
  { icon: Zap, value: "2+", label: "Years in coding" },
];

export default function Home() {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch("/api/blog/recent?limit=3");
        const result = await response.json();

        if (result.success) {
          setRecentPosts(result.data);
        } else {
          console.error("Error fetching recent posts:", result.error);
        }
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  const SelectedProjects = DevelopmentProjects.filter(
    (project) =>
      project.project_Name === "MDIT x DOSM Datathon 2025 Website" ||
      project.project_Name === "AppliTrack" ||
      project.project_Name === "Personal Portfolio Website"
  );

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <BackgroundLines className="min-h-fit py-24 sm:py-32  max-h-[700px] flex items-center justify-center w-full flex-col px-4 bg-transparent">
          <BlurFade inView>
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Available for new projects
                </Badge>
                <Text
                  as="h1"
                  className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl lg:text-7xl py-2 md:py-6 tracking-tight font-bold"
                >
                  Hello Everyone, <br /> I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Adha
                  </span>
                </Text>
              </div>

              <div className="space-y-6">
                <Text
                  as="p"
                  className="max-w-2xl mx-auto text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed"
                >
                  A passionate <strong>Student Developer</strong> and{" "}
                  <strong>UI/UX Designer</strong> crafting digital experiences
                  that blend creativity with functionality.
                </Text>
                <Text as="p" styleVariant="muted" className="text-lg">
                  Transforming ideas into beautiful, responsive web
                  applications—one line of code at a time.
                </Text>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
                {stats.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <BlurFade key={index} inView delay={0.1 * index}>
                      <Card className="text-center hover:shadow-lg transition-all h-full duration-300 hover:-translate-y-1">
                        <CardContent className="p-4">
                          <IconComponent className="w-8 h-8 mx-auto mb-2 text-primary" />
                          <Text
                            as="p"
                            className="text-2xl font-bold text-primary"
                          >
                            {achievement.value}
                          </Text>
                          <Text as="p" styleVariant="muted" className="text-sm">
                            {achievement.label}
                          </Text>
                        </CardContent>
                      </Card>
                    </BlurFade>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center flex-wrap pt-6">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/project">
                    View My Work
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/assets/Resume.pdf" target="_blank">
                    <Download className="w-4 h-4" />
                    Download CV
                  </Link>
                </Button>
              </div>

              {/* Quick Links */}
              <div className="flex gap-4 justify-center pt-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com/adhaghani" target="_blank">
                    <Github className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="#contact">
                    <Mail className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/about">
                    <MapPin className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </BackgroundLines>
      </div>
      {/* About Section */}
      <section id="about" className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <BlurFade inView>
            <div className="text-center mb-20">
              <Text as="h2" className="text-4xl lg:text-6xl font-bold mb-6">
                About Me
              </Text>
              <Text
                as="p"
                styleVariant="muted"
                className="text-xl max-w-2xl mx-auto"
              >
                Passionate about creating digital experiences that make a
                difference
              </Text>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <BlurFade inView delay={0.2}>
                <div className="space-y-8">
                  <Text as="p" className="text-lg leading-relaxed">
                    I'm a passionate tech enthusiast and full-time student,
                    deeply immersed in the world of software development and
                    design. With a keen eye for detail and a love for creating
                    intuitive user experiences, I specialize in building modern
                    web applications using cutting-edge technologies.
                  </Text>
                  <Text as="p" styleVariant="muted" className="leading-relaxed">
                    Currently pursuing my degree, I balance my academic pursuits
                    with hands-on project work, constantly learning and adapting
                    to new technologies in the ever-evolving tech landscape.
                  </Text>
                  <div className="pt-6">
                    <Button asChild variant="outline" size="lg">
                      <Link href="/about">
                        Learn More About Me
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </BlurFade>

              <BlurFade inView delay={0.4}>
                <Card>
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl">Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-card border-2 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <Text as="p">Based in Malaysia</Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-card border-2 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <Text as="p">2+ Years of Experience</Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-card border-2 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <Text as="p">8+ Happy Clients</Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-card border-2 flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-primary" />
                      </div>
                      <Text as="p">15+ Projects Completed</Text>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <BlurFade inView>
            <div className="text-center mb-20">
              <Text as="h2" className="text-4xl lg:text-6xl font-bold mb-6">
                What I Do
              </Text>
              <Text
                as="p"
                styleVariant="muted"
                className="text-xl max-w-2xl mx-auto"
              >
                Specialized services to bring your digital vision to life
              </Text>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {Service.map((service, i) => (
              <BlurFade inView key={i} delay={0.1 * i}>
                <Card className="h-full">
                  <CardHeader className="pb-6">
                    <div className="w-16 h-16 rounded-2xl bg-card border-2 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-sm px-3 py-1"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <BlurFade inView>
            <div className="text-center mb-20">
              <Text as="h2" className="text-4xl lg:text-6xl font-bold mb-6">
                Technology Stack
              </Text>
              <Text
                as="p"
                styleVariant="muted"
                className="text-xl max-w-2xl mx-auto"
              >
                Cutting-edge tools and technologies I use to build exceptional
                digital experiences
              </Text>
            </div>
          </BlurFade>

          <div className="space-y-20">
            <BlurFade inView delay={0.2}>
              <div>
                <Text as="h3" className="text-3xl font-bold mb-12 text-center">
                  Development Technologies
                </Text>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {DevelopmentTech.map((tech, i) => (
                    <div
                      key={i}
                      className="transform hover:scale-110 transition-transform duration-300"
                    >
                      <TechCard Data={tech} />
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.4}>
              <div>
                <Text as="h3" className="text-3xl font-bold mb-12 text-center">
                  Design Technologies
                </Text>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {DesignTech.map((tech, i) => (
                    <div
                      key={i}
                      className="transform hover:scale-110 transition-transform duration-300"
                    >
                      <TechCard Data={tech} />
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.6}>
              <div>
                <Text as="h3" className="text-3xl font-bold mb-12 text-center">
                  Other Tools
                </Text>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {OtherTech.map((tech, i) => (
                    <div
                      key={i}
                      className="transform hover:scale-110 transition-transform duration-300"
                    >
                      <TechCard Data={tech} />
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <BlurFade inView>
            <div className="text-center mb-20">
              <Text as="h2" className="text-4xl lg:text-6xl font-bold mb-6">
                Featured Projects
              </Text>
              <Text
                as="p"
                styleVariant="muted"
                className="text-xl max-w-2xl mx-auto"
              >
                A showcase of my recent work and creative solutions
              </Text>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SelectedProjects.map((project, i) => (
              <BlurFade key={i} inView delay={0.1 * i}>
                <div className="group">
                  <DevelopmentCard data={project} />
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade inView delay={0.5}>
            <div className="text-center mt-16">
              <Link href="/project">
                <InteractiveHoverButton className="text-xl px-10 py-5">
                  <span className="flex items-center gap-3">
                    View All Projects
                  </span>
                </InteractiveHoverButton>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <BlurFade inView>
            <div className="text-center mb-20">
              <Text as="h2" className="text-4xl lg:text-6xl font-bold mb-6">
                Client Testimonials
              </Text>
              <Text
                as="p"
                styleVariant="muted"
                className="text-xl max-w-2xl mx-auto"
              >
                What my clients say about working with me
              </Text>
            </div>
          </BlurFade>

          {/* Desktop Marquee */}
          <div className="hidden md:block">
            <Marquee className="py-4">
              {Testimonials.map((testimonial, i) => (
                <Card
                  key={i}
                  className="mx-2 h-fit max-w-lg hover:border-primary/20 transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      "{testimonial.title}"
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text as="p" className="leading-relaxed text-lg">
                      {testimonial.quote}
                    </Text>
                  </CardContent>
                  <CardFooter>
                    <div>
                      <Text as="p" className="font-medium text-lg">
                        {testimonial.name}
                      </Text>
                      <Text as="p" styleVariant="muted" className="text-sm">
                        {testimonial.position}
                      </Text>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </Marquee>
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden space-y-8">
            {Testimonials.map((testimonial, i) => (
              <BlurFade key={i} inView delay={0.1 * i}>
                <Card className="bg-card border-2">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <CardTitle className="text-xl">
                      "{testimonial.title}"
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text as="p" className="text-lg">
                      {testimonial.quote}
                    </Text>
                  </CardContent>
                  <CardFooter>
                    <div>
                      <Text as="p" className="font-medium text-lg">
                        {testimonial.name}
                      </Text>
                      <Text as="p" styleVariant="muted" className="text-sm">
                        {testimonial.position}
                      </Text>
                    </div>
                  </CardFooter>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <BlurFade inView>
            <div className="text-center mb-20">
              <Text as="h2" className="text-4xl lg:text-6xl font-bold mb-6">
                Latest Blog Posts
              </Text>
              <Text
                as="p"
                styleVariant="muted"
                className="text-xl max-w-2xl mx-auto mb-8"
              >
                Stay updated with my latest thoughts, tutorials, and insights
                about web development and technology.
              </Text>
              <Button variant="outline" asChild>
                <Link href="/blog" className="group">
                  View All Posts
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {isLoading ? (
              // Loading skeleton
              [...Array(3)].map((_, index) => (
                <BlurFade key={index} inView delay={0.1 * index}>
                  <Card className="h-full bg-card border-2">
                    <div className="aspect-video bg-card border rounded-t-lg animate-pulse"></div>
                    <CardHeader>
                      <div className="h-6 bg-card border rounded animate-pulse mb-2"></div>
                      <div className="h-4 bg-card border rounded animate-pulse w-3/4"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="h-4 bg-card border rounded animate-pulse"></div>
                        <div className="h-4 bg-card border rounded animate-pulse w-5/6"></div>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))
            ) : recentPosts.length > 0 ? (
              recentPosts.map((post, index) => (
                <BlurFade key={post.id} inView delay={0.1 * index}>
                  <Card className="h-full group transition-all duration-300 hover:-translate-y-2 bg-card border-2">
                    {/* Cover Image */}
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      {post.cover_image_url ? (
                        <Image
                          src={post.cover_image_url}
                          alt={post.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-card border flex items-center justify-center">
                          <div className="text-center">
                            <CodeIcon className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                            <Text
                              as="p"
                              styleVariant="muted"
                              className="text-sm"
                            >
                              No Cover Image
                            </Text>
                          </div>
                        </div>
                      )}
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(
                            post.published_at || post.created_at
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <div className="flex items-center gap-4 ml-auto">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      {post.excerpt && (
                        <CardDescription className="line-clamp-2">
                          {post.excerpt}
                        </CardDescription>
                      )}
                    </CardHeader>

                    <CardContent>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.tags.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Button
                        variant="outline"
                        className="w-full group"
                        asChild
                      >
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </BlurFade>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <CodeIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <Text as="h3" className="text-xl font-semibold mb-2">
                  No Blog Posts Yet
                </Text>
                <Text as="p" styleVariant="muted">
                  I'm working on some exciting content. Check back soon!
                </Text>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="container mx-auto">
          <BlurFade inView>
            <div className="text-center mb-20">
              <Text as="h2" className="text-4xl lg:text-6xl font-bold mb-6">
                Let's Work Together
              </Text>
              <Text
                as="p"
                styleVariant="muted"
                className="text-xl max-w-2xl mx-auto"
              >
                Ready to bring your ideas to life? Let's discuss your next
                project and create something amazing together.
              </Text>
            </div>
            <Contact />
          </BlurFade>
        </div>
      </section>
    </>
  );
}
