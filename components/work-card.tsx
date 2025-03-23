"use client";

import React from "react";
import { BlurFade } from "./magicui/blur-fade";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

interface WorkProps {
  name: string;
  type: string;
  role: string;
  duration: string;
  Logo: any;
  achievement: string[];
}

const WorkCard = ({ data }: { data: WorkProps }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <BlurFade inView delay={0.2}>
          <div className="aspect-video bg-background shadow rounded-lg grid place-items-center min-w-64">
            {data.Logo}
          </div>
        </BlurFade>
        <div className="w-full">
          <BlurFade inView delay={0.2}>
            <Text as="h3">{data.name}</Text>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <Text as="h4" className="font-medium">
              {data.type}, {data.role}
            </Text>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <Text as="p" styleVariant="muted" className="font-medium">
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
