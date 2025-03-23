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
import Link from "next/link";
import { Badge } from "./badge";
import { Button } from "./button";
import { Lens } from "./lens";
import { DevelopmentProjectType } from "@/constant/types";
import { MonitorIcon, DatabaseIcon, ImageIcon } from "lucide-react";
const DevelopmentCard = ({ data }: { data: DevelopmentProjectType }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <BlurFade inView delay={0.2}>
      <Card className="h-full">
        <CardHeader className="h-fit">
          <CardTitle>
            {data.asset && data.asset.url ? (
              <Lens hovering={hovering} setHovering={setHovering}>
                <div className="w-full aspect-video dark:bg-neutral-900 bg-neutral-100 rounded grid place-items-center">
                  {data.asset && data.asset.url ? (
                    <img
                      className="aspect-video object-cover object-center"
                      src={data.asset.url}
                      alt={data.asset.alt}
                    />
                  ) : (
                    <div>
                      <ImageIcon className="w-10 h-10 mx-auto text-gray-500 mb-3" />
                      <Text as="p" styleVariant="muted">
                        No Image Available
                      </Text>
                    </div>
                  )}
                </div>
              </Lens>
            ) : (
              <div className="w-full aspect-video dark:bg-neutral-900 bg-neutral-100 rounded grid place-items-center">
                <div>
                  <ImageIcon className="w-10 h-10 mx-auto text-gray-500 mb-3" />
                  <Text as="p" styleVariant="muted">
                    No Image Available
                  </Text>
                </div>
              </div>
            )}
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
        <CardFooter className="gap-2 ">
          {data.project_DemoLink && (
            <Button className="w-full" variant={"secondary"} asChild>
              <Link href={data.project_DemoLink}>
                <MonitorIcon className="w-5 h-5 mr-1" />
                Live Demo
              </Link>
            </Button>
          )}
          {data.project_RepoLink && (
            <Button className="w-full" variant={"outline"} asChild>
              <Link href={data.project_RepoLink}>
                <DatabaseIcon className="w-5 h-5 mr-1" />
                Repository
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </BlurFade>
  );
};

export default DevelopmentCard;
