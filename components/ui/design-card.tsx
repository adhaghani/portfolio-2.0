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
import { Button } from "./button";
import { Lens } from "./lens";
import { MonitorIcon, DatabaseIcon, ImageIcon } from "lucide-react";
const DesignCard = ({ data }: { data: DesignProjectType }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <BlurFade inView delay={0.2}>
      <Card>
        <CardHeader>
          <CardTitle>
            <Lens hovering={hovering} setHovering={setHovering}>
              <div className="w-full aspect-video bg-neutral-900 rounded grid place-items-center">
                <ImageIcon className="w-10 h-10 text-neutral-100" />
              </div>
            </Lens>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Text as="h4" className="mb-1">
            Project Name
          </Text>
          <Text as="p" styleVariant="muted" className="mb-5">
            December 2025
          </Text>
          <div className="flex flex-wrap gap-2">
            <Badge variant={"secondary"}>React</Badge>
            <Badge variant={"secondary"}>TypeScript</Badge>

            <Badge variant={"secondary"}>SCSS</Badge>
            <Badge variant={"secondary"}>NextJS</Badge>
            <Badge variant={"secondary"}>Laravel</Badge>

            <Badge variant={"secondary"}>PHP</Badge>
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button className="w-full" variant={"secondary"}>
            <MonitorIcon className="w-5 h-5 mr-1" />
            Live Demo
          </Button>
          <Button className="w-full" variant={"outline"}>
            <DatabaseIcon className="w-5 h-5 mr-1" />
            Repository
          </Button>
        </CardFooter>
      </Card>
    </BlurFade>
  );
};

export default DesignCard;
