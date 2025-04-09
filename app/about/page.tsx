"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Text } from "@/components/ui/text";

import {
  Education,
  Work,
  Certificate,
  AboutPhotoGallery
} from "@/constant/constant";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EducationCard from "@/components/education-card";
import WorkCard from "@/components/work-card";
import { Marquee } from "@/components/magicui/marquee";
import Contact from "@/components/contact";
import { Spotlight } from "@/components/ui/spotlight-new";
import CertificateCard from "@/components/ui/certificate-card";
import React from "react";

const PhotoGalleryReverse = AboutPhotoGallery.toReversed();
const page = () => {
  return (
    <>
      {/* Hero */}

      <Spotlight xOffset={0} />

      <div className="h-screen max-h-[1100px] flex items-center justify-center relative pt-16">
        <div className=" w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <Text
              as="h1"
              className="text-center text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 tracking-tight"
            >
              About me, <br /> my experience, <br /> and education.
            </Text>
            <Text
              as="p"
              styleVariant="muted"
              className="mt-4 font-normal text-base max-w-lg text-center mx-auto"
            >
              More detailed version of what i do, what i learn, and what i
              actually am.
            </Text>
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
                <BlurFade inView delay={0.2} key={index}>
                  <Image
                    className="aspect-video object-cover max-w-xl rounded-lg object-center"
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
                <BlurFade inView delay={0.2} key={index}>
                  <Image
                    className="aspect-video object-cover max-w-xl rounded-lg object-center"
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
                  I{`'`}m a tech enthusiast and full-time student, deeply
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
                  to new technologies in the ever-evolving tech landscape. Oh
                  and other than coding and studying, i also love going to the
                  gym.
                </Text>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      {/* Education */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <Text as="h2" className="text-3xl font-bold ">
            Education
          </Text>
          <Text as="p" styleVariant="muted" className="mt-2 mb-8">
            My educational background
          </Text>
          {Education.map((edu, i) => (
            <div key={i} className="mb-24">
              <EducationCard data={edu} />
            </div>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section id="CTA" className="py-20 px-4">
        <div className="bg-primary-foreground p-10 rounded-lg shadow flex justify-between gap-4 flex-wrap flex-col lg:flex-row lg:items-center">
          <div className="text-center lg:text-start">
            <Text as="h2">While you{`'`}re here, View my projects</Text>
            <Text as="p" styleVariant="muted" className="mt-2 text-md">
              for further service, contact me
            </Text>
          </div>
          <div className="flex gap-3 items-center mx-auto lg:mx-0">
            <Button asChild>
              <Link href={"/project"}>View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Work */}
      <section id="work" className="py-20 px-4">
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
      <section id="work" className="py-20 px-4">
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
                <React.Fragment key={i}>
                  <CertificateCard data={cert} i={i} />
                </React.Fragment>
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
              Let{`'`}s Connect
            </Text>
            <Contact />
          </BlurFade>
        </div>
      </section>
    </>
  );
};

export default page;
