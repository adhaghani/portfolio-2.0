"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
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
      <Dialog>
        <Card className="h-full">
          <CardHeader className="h-fit">
            <CardTitle>
              {data.asset && data.asset.url ? (
                <>
                  <div className="w-full aspect-video dark:bg-neutral-900 bg-neutral-100 rounded grid place-items-center">
                    {data.asset && data.asset.url ? (
                      <div className="relative">
                        <Lens hovering={hovering} setHovering={setHovering}>
                          <img
                            className="aspect-video object-cover object-center"
                            src={data.asset.url}
                            alt={data.asset.alt}
                          />
                        </Lens>
                        <DialogTrigger
                          asChild
                          className="absolute top-1 right-1 z-30 cursor-pointer"
                        >
                          <Button variant={"secondary"} size="sm">
                            Read More
                          </Button>
                        </DialogTrigger>
                      </div>
                    ) : null}
                  </div>
                </>
              ) : (
                <div className="w-full aspect-video dark:bg-neutral-900 bg-neutral-100 rounded grid place-items-center relative">
                  <div>
                    <ImageIcon className="w-10 h-10 mx-auto text-gray-500 mb-3" />
                    <Text as="p" styleVariant="muted">
                      No Image Available
                    </Text>
                  </div>
                  <DialogTrigger
                    asChild
                    className="absolute top-1 right-1 z-30 cursor-pointer"
                  >
                    <Button variant={"secondary"} size="sm">
                      Read More
                    </Button>
                  </DialogTrigger>
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
        <DialogContent>
          {data.asset && data.asset.url ? (
            <DialogHeader>
              <div className="w-full aspect-video dark:bg-neutral-900 bg-neutral-100 rounded grid place-items-center">
                {data.asset && data.asset.url ? (
                  <div className="relative">
                    <img
                      className="aspect-video object-cover object-center"
                      src={data.asset.url}
                      alt={data.asset.alt}
                    />
                  </div>
                ) : null}
              </div>
            </DialogHeader>
          ) : null}
          <DialogTitle>{data.project_Name}</DialogTitle>
          <div className="space-y-3">
            <Text as="p" styleVariant="muted">
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
            <Text as="p" styleVariant="muted">
              {data.project_description}
            </Text>
            <div className="flex gap-3">
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
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </BlurFade>
  );
};

export default DevelopmentCard;
