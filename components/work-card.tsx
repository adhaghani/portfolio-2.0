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
  image: {
    src: string;
    alt: string;
  };
  achievement: string[];
}

const WorkCard = ({ data }: { data: WorkProps }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <BlurFade inView delay={0.1}>
          <div className="aspect-video rounded-lg bg-secondary grid place-items-center min-w-64">
            <img src={data.image.src} alt={data.image.alt} />
          </div>
        </BlurFade>
        <div className="w-full">
          <BlurFade inView delay={0.2}>
            <div className="flex gap-4 justify-between items-center">
              <Text as="h4">{data.name}</Text>
              <Button size={"sm"} variant={"ghost"}>
                View Detail
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </BlurFade>
          <BlurFade inView delay={0.3}>
            <Text as="p" styleVariant="muted" className="font-medium">
              {data.type}, {data.role}
            </Text>
          </BlurFade>
          <BlurFade inView delay={0.3}>
            <Text as="p" styleVariant="muted" className="font-medium">
              {data.duration}
            </Text>
          </BlurFade>
        </div>
      </div>
      <ul className="mt-4">
        <BlurFade inView delay={0.3}>
          <Text as="h4" className="font-semibold">
            Contribution
          </Text>
        </BlurFade>
        {data.achievement.map((achievement, i) => (
          <BlurFade inView delay={i === 0 ? 0.3 : i * 0.3}>
            <li key={i} className="mt-2 ml-5 list-disc">
              <Text as="p">{achievement}</Text>
            </li>
          </BlurFade>
        ))}
      </ul>
    </>
  );
};

export default WorkCard;
