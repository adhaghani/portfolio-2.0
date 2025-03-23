"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Education, Work, Certificate } from "@/constant/constant";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import EducationCard from "@/components/education-card";
import WorkCard from "@/components/work-card";
import { Spotlight } from "@/components/ui/spotlight-new";
import CertificateCard from "@/components/ui/certificate-card";
import React from "react";
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
