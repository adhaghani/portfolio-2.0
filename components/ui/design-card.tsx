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
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { ScrollArea } from "./scroll-area";
import React, { useState } from "react";
import { BlurFade } from "../magicui/blur-fade";
import { Text } from "./text";
import { DesignProjectType } from "@/constant/types";
import { Badge } from "./badge";
import { Lens } from "./lens";
import { ImageIcon } from "lucide-react";
import { Button } from "./button";
const DesignCard = ({ data }: { data: DesignProjectType }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <BlurFade inView delay={0.2}>
      <Dialog>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>
              <div className="w-full aspect-square dark:bg-neutral-900 bg-neutral-100 rounded grid place-items-center">
                {data.asset && data.asset.url ? (
                  <div className="relative">
                    <Lens hovering={hovering} setHovering={setHovering}>
                      <img
                        className="object-cover object-center"
                        src={data.asset.url}
                        alt={data.asset.alt}
                      />
                    </Lens>
                    <DialogTrigger
                      asChild
                      className="absolute top-1 right-1 z-30 cursor-pointer"
                    >
                      {data.asset.image_bundle && (
                        <Button variant={"secondary"} size="sm">
                          Photo Gallery
                        </Button>
                      )}
                    </DialogTrigger>
                  </div>
                ) : (
                  <ImageIcon className="w-10 h-10 text-gray-500" />
                )}
              </div>
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
        <DialogContent>
          {data.asset && data.asset.url ? (
            <DialogHeader>
              {data.asset?.image_bundle ? (
                <ScrollArea className="aspect-square">
                  {data.asset.image_bundle.map((image, i) => {
                    return (
                      <div
                        key={i}
                        className="w-full mb-4 dark:bg-neutral-900 bg-neutral-100 rounded-lg overflow-hidden grid place-items-center"
                      >
                        <Lens>
                          <img
                            className=" object-cover  object-center"
                            src={image.url}
                          />
                        </Lens>
                      </div>
                    );
                  })}
                </ScrollArea>
              ) : (
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
              )}
            </DialogHeader>
          ) : null}
          <DialogTitle>{data.project_Name} Photo Gallery</DialogTitle>
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
          </div>
        </DialogContent>
      </Dialog>
    </BlurFade>
  );
};

export default DesignCard;
