"use client";

import { Text } from "./ui/text";
import { LinkPreview } from "./ui/link-preview";
import { Button } from "./ui/button";
import { MonitorIcon } from "lucide-react";
import { WorkCardProps } from "@/constant/types";

const WorkCard = ({ data }: { data: WorkCardProps }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="aspect-video bg-background shadow rounded-lg grid place-items-center min-w-64">
          {data.Logo}
        </div>

        <div className="w-full">
          <div className="flex justify-between gap-2 items-center">
            <Text as="h3">{data.name}</Text>

            {data.website && (
              <LinkPreview url={data.website}>
                <Button size={"sm"} variant={"ghost"} className="mt-2">
                  <MonitorIcon className="w-5 h-5" />
                  Company Website
                </Button>
              </LinkPreview>
            )}
          </div>

          <Text as="h4" className="font-medium">
            {data.type}, {data.role}
          </Text>

          <Text as="p" styleVariant="muted" className="font-medium mt-2">
            {data.duration}
          </Text>
        </div>
      </div>
      <ul className="mt-4">
        <Text as="h4" className="font-semibold">
          Contribution
        </Text>

        {data.achievement.map((achievement, i) => (
          <li key={i} className="mt-2 ml-5 list-disc">
            <Text as="p">{achievement}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkCard;
