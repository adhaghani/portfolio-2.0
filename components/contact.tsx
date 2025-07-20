"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  CopyIcon,
  CheckIcon,
  ExternalLinkIcon,
  ClockIcon,
  CalendarIcon,
  MessageCircleIcon,
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
} from "lucide-react";
import { Text } from "./ui/text";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const contactInfo = [
    {
      id: "phone",
      icon: PhoneIcon,
      title: "Phone Number",
      value: "+6018-2017884",
      href: "tel:+60182017884",
      copyable: true,
      description: "Available 9 AM - 6 PM MYT",
      color:
        "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      id: "email",
      icon: MailIcon,
      title: "Email Address",
      value: "adhaahmadwork@gmail.com",
      href: "mailto:adhaahmadwork@gmail.com",
      copyable: true,
      description: "Professional inquiries welcome",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      id: "location",
      icon: MapPinIcon,
      title: "Location",
      value: "Bandar Baru Bangi, Selangor, Malaysia",
      href: "https://maps.google.com/?q=Bandar+Baru+Bangi,+Selangor,+Malaysia",
      copyable: true,
      description: "GMT+8 Timezone",
      color:
        "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/adhaghani/",
      color: "hover:text-blue-600",
      description: "Professional network",
    },
    {
      name: "GitHub",
      icon: GithubIcon,
      href: "https://github.com/adhaghani",
      color: "hover:text-gray-600 dark:hover:text-gray-400",
      description: "Code repositories",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: "https://www.instagram.com/adhaghani",
      color: "hover:text-pink-600",
      description: "Personal updates",
    },
  ];

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Kuala_Lumpur",
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isBusinessHours = () => {
    const now = new Date();
    const malaysiaTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" })
    );
    const hour = malaysiaTime.getHours();
    return hour >= 9 && hour < 18;
  };
  return (
    <div className="space-y-6 w-full">
      {/* Main Contact Card */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-card border-b-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact Information
              </CardTitle>
              <Text as="p" styleVariant="muted" className="mt-2">
                Let's connect and build something amazing together
              </Text>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ClockIcon className="w-4 h-4" />
                <span>{getCurrentTime()} MYT</span>
              </div>
              <Badge
                variant={isBusinessHours() ? "default" : "secondary"}
                className="mt-1"
              >
                {isBusinessHours() ? "Available" : "After Hours"}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item) => {
              const IconComponent = item.icon;
              const isCopied = copiedItem === item.id;

              return (
                <div
                  key={item.id}
                  className="group relative p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                        item.color
                      )}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <Text as="h3" className="font-semibold mb-1">
                        {item.title}
                      </Text>

                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block group/link"
                      >
                        <Text
                          as="p"
                          styleVariant="muted"
                          className="break-words group-hover/link:text-primary transition-colors"
                        >
                          {item.value}
                        </Text>
                      </a>

                      <Text
                        as="p"
                        className="text-xs text-muted-foreground mt-1"
                      >
                        {item.description}
                      </Text>
                    </div>
                  </div>

                  {/* Copy Button */}
                  {item.copyable && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => copyToClipboard(item.value, item.id)}
                    >
                      {isCopied ? (
                        <CheckIcon className="w-4 h-4 text-green-600" />
                      ) : (
                        <CopyIcon className="w-4 h-4" />
                      )}
                    </Button>
                  )}

                  {/* External Link Indicator */}
                  {item.href.startsWith("http") && (
                    <ExternalLinkIcon className="absolute bottom-2 right-2 w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Social Media & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Social Media Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircleIcon className="w-5 h-5" />
              Social Media
            </CardTitle>
            <Text as="p" styleVariant="muted">
              Follow me on social platforms
            </Text>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-border hover:bg-accent transition-all duration-300 group"
                  >
                    <IconComponent
                      className={cn("w-5 h-5 transition-colors", social.color)}
                    />
                    <div className="flex-1">
                      <Text
                        as="p"
                        className="font-medium group-hover:text-primary transition-colors"
                      >
                        {social.name}
                      </Text>
                      <Text as="p" styleVariant="muted" className="text-sm">
                        {social.description}
                      </Text>
                    </div>
                    <ExternalLinkIcon className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Quick Actions
            </CardTitle>
            <Text as="p" styleVariant="muted">
              Get in touch quickly
            </Text>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              asChild
              className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="mailto:adhaahmadwork@gmail.com?subject=Project Inquiry">
                <MailIcon className="w-4 h-4 mr-2" />
                Send Project Inquiry
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full justify-start hover:bg-green-50 hover:border-green-200 dark:hover:bg-green-950/20"
            >
              <Link href="tel:+60182017884">
                <PhoneIcon className="w-4 h-4 mr-2" />
                Call for Quick Chat
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full justify-start hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-950/20"
            >
              <Link
                href="https://www.linkedin.com/in/adhaghani/"
                target="_blank"
              >
                <LinkedinIcon className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Link>
            </Button>

            <div className="pt-3 mt-3 border-t border-border">
              <Text
                as="p"
                className="text-sm text-muted-foreground text-center"
              >
                📍 Response time: Usually within 24 hours
              </Text>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Availability Notice */}
      <Card className="bg-card border-2 border-green-200 dark:border-green-800">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <Text
                as="p"
                className="font-medium text-green-800 dark:text-green-200"
              >
                Currently available for new projects
              </Text>
              <Text
                as="p"
                className="text-sm text-green-600 dark:text-green-300"
              >
                Accepting freelance work and collaboration opportunities
              </Text>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
