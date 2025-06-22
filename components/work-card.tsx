"use client";

import React from "react";
import { BlurFade } from "./magicui/blur-fade";
import { Text } from "./ui/text";
import { LinkPreview } from "./ui/link-preview";
import { Button } from "./ui/button";
import { MonitorIcon } from "lucide-react";
import { WorkCardProps } from "@/constant/types";

const WorkCard = ({ data }: { data: WorkCardProps }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <BlurFade inView delay={0.2}>
          <div className="aspect-video bg-background shadow rounded-lg grid place-items-center min-w-64">
            {data.Logo}
          </div>
        </BlurFade>
        <div className="w-full">
          <div className="flex justify-between gap-2 items-center">
            <BlurFade inView delay={0.2}>
              <Text as="h3">{data.name}</Text>
            </BlurFade>
            {data.website && (
              <BlurFade inView delay={0.2}>
                <LinkPreview url={data.website}>
                  <Button size={"sm"} variant={"ghost"} className="mt-2">
                    <MonitorIcon className="w-5 h-5" />
                    Company Website
                  </Button>
                </LinkPreview>
              </BlurFade>
            )}
          </div>
          <BlurFade inView delay={0.2}>
            <Text as="h4" className="font-medium">
              {data.type}, {data.role}
            </Text>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <Text as="p" styleVariant="muted" className="font-medium mt-2">
              {data.duration}
            </Text>
          </BlurFade>
        </div>
      </div>
      <ul className="mt-4">
        <BlurFade inView delay={0.2}>
          <Text as="h4" className="font-semibold">
            Contribution
          </Text>
        </BlurFade>
        {data.achievement.map((achievement, i) => (
          <BlurFade key={i} inView delay={0.2}>
            <li className="mt-2 ml-5 list-disc">
              <Text as="p">{achievement}</Text>
            </li>
          </BlurFade>
        ))}
      </ul>
    </div>
  );
};

export default WorkCard;
