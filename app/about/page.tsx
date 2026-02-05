"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Education } from "@/constant/Education";
import { Work } from "@/constant/Work";
import { Certificate } from "@/constant/Certificate";
import { AboutPhotoGallery } from "@/constant/AboutPhotoGallery";
import Link from "next/link";
import Image from "next/image";
import EducationCard from "@/components/education-card";
import WorkCard from "@/components/work-card";
import { Marquee } from "@/components/magicui/marquee";
import Contact from "@/components/contact";

import CertificateCard from "@/components/ui/certificate-card";
import {
  Download,
  Heart,
  Lightbulb,
  Target,
  Zap,
  Camera,
  Gamepad2,
  Music,
  CoffeeIcon,
} from "lucide-react";
import React from "react";

const PhotoGalleryReverse = AboutPhotoGallery.toReversed();

const interests = [
  "Coding",
  "Gym & Fitness",
  "Learning",
  "Coffee",
  "Photography",
  "Gaming",
  "Music",
  "Travel",
];

const achievements = [
  { label: "Projects Completed", value: "15+", icon: Target },
  { label: "Technologies Learned", value: "20+", icon: Lightbulb },
  { label: "Years Experience", value: "2+", icon: Zap },
  {
    label: "Coffee Consumed",
    value: "900+",
    icon: CoffeeIcon,
  },
];

const page = () => {
  return (
    <>
      {/* Hero Section */}

      <div className="min-h-screen max-h-[1100px] flex items-center justify-center relative pt-16">
        <div className="w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
            <BlurFade inView>
              <div className="text-center space-y-6">
                <Text
                  as="h1"
                  className="text-4xl lg:text-7xl py-2 md:py-10 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  About Me
                </Text>
                <Text
                  as="p"
                  styleVariant="muted"
                  className="mt-4 font-normal text-base lg:text-lg max-w-3xl mx-auto"
                >
                  Passionate developer, lifelong learner, and creative problem
                  solver. Here&apos;s my journey, skills, and what drives me every
                  day.
                </Text>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <BlurFade key={index} inView delay={0.1 * index}>
                        <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                          <CardContent className="p-4">
                            <IconComponent className="w-8 h-8 mx-auto mb-2 text-primary" />
                            <Text
                              as="p"
                              className="text-2xl font-bold text-primary"
                            >
                              {achievement.value}
                            </Text>
                            <Text
                              as="p"
                              styleVariant="muted"
                              className="text-sm"
                            >
                              {achievement.label}
                            </Text>
                          </CardContent>
                        </Card>
                      </BlurFade>
                    );
                  })}
                </div>

                {/* Download Resume Button */}
                <div className="pt-8">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/assets/Resume.pdf" target="_blank">
                      <Download className="w-4 h-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
      {/* Photo gallery */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          <Marquee>
            {AboutPhotoGallery.map((photo, index) => {
              return (
                <BlurFade className="w-1/2" inView delay={0.2} key={index}>
                  <Image
                    className="aspect-video object-cover md:max-w-xl max-w-[200px] w-full rounded-lg object-center"
                    src={photo.image.src}
                    alt={photo.image.alt}
                    quality={100}
                    width={500}
                    height={200}
                  />
                </BlurFade>
              );
            })}
          </Marquee>
          <Marquee reverse>
            {PhotoGalleryReverse.map((photo, index) => {
              return (
                <BlurFade className="w-1/2" inView delay={0.2} key={index}>
                  <Image
                    className="aspect-video object-cover md:max-w-xl max-w-[200px] w-full rounded-lg object-center"
                    src={photo.image.src}
                    alt={photo.image.alt}
                    quality={100}
                    width={500}
                    height={200}
                  />
                </BlurFade>
              );
            })}
          </Marquee>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <BlurFade inView>
          <div className="text-center mb-20">
            <Text as="h2" className="text-4xl lg:text-6xl font-bold mb-6">
              Skills & Expertise
            </Text>
            <Text
              as="p"
              styleVariant="muted"
              className="text-xl max-w-2xl mx-auto"
            >
              Technologies and tools I work with, constantly learning and
              improving
            </Text>
          </div>
        </BlurFade>

        <div className="grid">
          {/* Interests and Hobbies */}
          <BlurFade inView delay={0.4}>
            <Card className="p-8 bg-card border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Heart className="w-6 h-6" />
                  Interests & Hobbies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default text-sm px-4 py-2"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-card border-2 flex items-center justify-center">
                      <Camera className="w-5 h-5" />
                    </div>
                    <span className="text-lg">
                      Photography enthusiast capturing moments and memories
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-card border-2 flex items-center justify-center">
                      <Gamepad2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg">
                      Gaming for creativity and strategic thinking
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-card border-2 flex items-center justify-center">
                      <Music className="w-5 h-5" />
                    </div>
                    <span className="text-lg">
                      Music lover exploring various genres and artists
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <BlurFade inView>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Text as="h2" className="text-4xl lg:text-5xl font-bold">
                  My Journey
                </Text>
                <Text as="p" className="text-xl leading-relaxed">
                  I&apos;m a passionate web developer and designer with over 2 years
                  of experience creating digital experiences. With a keen eye
                  for detail and a love for creating intuitive user experiences,
                  I specialize in building modern web applications using
                  cutting-edge technologies.
                </Text>
                <Text as="p" className="text-lg" styleVariant="muted">
                  Currently pursuing my degree, I balance my academic pursuits
                  with hands-on project work, constantly learning and adapting
                  to new technologies in the ever-evolving tech landscape. Oh
                  and other than coding and studying, i also love going to the
                  gym.
                </Text>
              </div>

              {/* Photo Gallery Preview */}
              <div className="space-y-6">
                <Text as="h3" className="text-2xl font-semibold">
                  Life in Pictures
                </Text>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-xl overflow-hidden border-2">
                    <Image
                      src={"/assets/images/photoGallery/image1.png"}
                      alt={"Personal photo 1"}
                      quality={100}
                      width={500}
                      height={200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border-2">
                    <Image
                      src={"/assets/images/photoGallery/image2.png"}
                      alt={"Personal photo 2"}
                      quality={100}
                      width={500}
                      height={200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border-2">
                    <Image
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      src={"/assets/images/photoGallery/image3.png"}
                      alt={"Personal photo 3"}
                      quality={100}
                      width={500}
                      height={200}
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border-2">
                    <Image
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      src={"/assets/images/photoGallery/image10.png"}
                      alt={"Personal photo 10"}
                      quality={100}
                      width={500}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <BlurFade inView>
            <div className="text-center mb-16">
              <Text as="h2" className="text-3xl lg:text-5xl font-bold mb-4">
                Education & Certifications
              </Text>
              <Text
                as="p"
                styleVariant="muted"
                className="text-lg max-w-2xl mx-auto"
              >
                My academic journey and professional certifications that shape
                my expertise
              </Text>
            </div>
          </BlurFade>

          <div className="space-y-12">
            {/* Education Cards */}
            <div className="space-y-8">
              {Education.map((edu, i) => (
                <BlurFade key={i} inView delay={0.1 * i}>
                  <EducationCard data={edu} />
                </BlurFade>
              ))}
            </div>

            {/* Certifications Grid */}
            <BlurFade inView delay={0.4}>
              <div className="mt-16">
                <Text as="h3" className="text-2xl font-bold mb-8 text-center">
                  Professional Certifications
                </Text>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Certificate.map((cert, i) => (
                    <BlurFade key={i} inView delay={0.1 * i}>
                      <CertificateCard data={cert} i={i} />
                    </BlurFade>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      {/* Work Experience Section */}
      <section id="work" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <BlurFade inView>
            <div className="text-center mb-16">
              <Text as="h2" className="text-3xl lg:text-5xl font-bold mb-4">
                Work Experience
              </Text>
              <Text
                as="p"
                styleVariant="muted"
                className="text-lg max-w-2xl mx-auto"
              >
                Professional experience and contributions that have shaped my
                career
              </Text>
            </div>
          </BlurFade>

          <div className="space-y-8">
            {Work.map((work, i) => (
              <BlurFade key={i} inView delay={0.1 * i}>
                <WorkCard data={work} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="CTA" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <BlurFade inView>
            <Card>
              <CardContent className="p-10 text-center">
                <div className="space-y-6">
                  <Text as="h2" className="text-3xl lg:text-4xl font-bold">
                    Let&apos;s Build Something Amazing Together
                  </Text>
                  <Text
                    as="p"
                    styleVariant="muted"
                    className="text-lg max-w-2xl mx-auto"
                  >
                    Ready to turn your ideas into reality? Let&apos;s discuss your
                    next project and create something extraordinary.
                  </Text>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <Button asChild size="lg">
                      <Link href="/project">View My Projects</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="#contact">Get In Touch</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <BlurFade inView>
            <div className="text-center mb-12">
              <Text as="h2" className="text-3xl lg:text-5xl font-bold mb-4">
                Let&apos;s Connect
              </Text>
              <Text as="p" styleVariant="muted" className="text-lg">
                Ready to start a conversation? I&apos;d love to hear from you.
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
