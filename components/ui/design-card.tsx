"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import React, { useState } from "react";
import { BlurFade } from "../magicui/blur-fade";
import { Text } from "./text";
import { DesignProjectType } from "@/constant/types";
import { Badge } from "./badge";
import { Lens } from "./lens";
import { ImageIcon } from "lucide-react";
const DesignCard = ({ data }: { data: DesignProjectType }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <BlurFade inView delay={0.2}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>
            <Lens hovering={hovering} setHovering={setHovering}>
              <div className="w-full aspect-square dark:bg-neutral-900 bg-neutral-100 rounded grid place-items-center">
                {data.asset && data.asset.url ? (
                  <img src={data.asset.url} alt={data.asset.alt} />
                ) : (
                  <ImageIcon className="w-10 h-10 text-gray-500" />
                )}
              </div>
            </Lens>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Text as="h4" className="mb-1">
            {data.project_Name}
          </Text>
          <Text as="p" styleVariant="muted" className="mb-5">
            {data.project_Timeline}
          </Text>
          <div className="flex flex-wrap gap-2">
            {data.project_Technologies &&
              data.project_Technologies.map((tech, index) => {
                return (
                  <Badge key={index} variant={"secondary"}>
                    {tech}
                  </Badge>
                );
              })}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Text as="p" styleVariant="muted">
            {data.project_description}
          </Text>
        </CardFooter>
      </Card>
    </BlurFade>
  );
};

export default DesignCard;
