"use client";

import React from "react";
import Link from "next/link";
import {
  DatabaseIcon,
  ExternalLink,
  ImageIcon,
  MonitorIcon,
} from "lucide-react";
import { DevelopmentProjectType } from "@/constant/types";
import { Text } from "./text";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const DevelopmentCard = ({ data }: { data: DevelopmentProjectType }) => {
  return (
    <Dialog key={data.project_Name}>
      <Card className="flex h-full flex-col border-2">
        <CardHeader className="p-0">
          {data.asset?.url ? (
            <div className="relative aspect-video overflow-hidden border-b-2 border-border bg-muted">
              <img
                className="h-full w-full object-cover object-center"
                src={data.asset.url}
                alt={data.asset.alt}
              />
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute right-2 top-2"
                >
                  Details
                </Button>
              </DialogTrigger>
            </div>
          ) : (
            <div className="relative grid aspect-video place-items-center border-b-2 border-border bg-muted">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                <Text
                  as="p"
                  styleVariant="muted"
                  className="text-xs uppercase tracking-[0.08em]"
                >
                  No preview
                </Text>
              </div>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute right-2 top-2"
                >
                  Details
                </Button>
              </DialogTrigger>
            </div>
          )}
        </CardHeader>

        <CardContent className="flex-1 space-y-4 pt-5">
          <CardTitle>
            <Text as="h3" className="text-lg font-semibold leading-tight">
              {data.project_Name}
            </Text>
          </CardTitle>
          <Text
            as="p"
            styleVariant="muted"
            className="text-xs uppercase tracking-[0.08em]"
          >
            {data.project_Timeline}
          </Text>
          <Text
            as="p"
            styleVariant="muted"
            className="line-clamp-3 text-sm leading-relaxed"
          >
            {data.project_description}
          </Text>
          <div className="flex flex-wrap gap-2">
            {data.project_Technologies?.slice(0, 5).map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="mt-auto grid grid-cols-1 gap-2 border-t-2 border-border pt-4 sm:grid-cols-2">
          {data.project_DemoLink && (
            <Button asChild variant="secondary">
              <Link
                href={data.project_DemoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MonitorIcon className="mr-1 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {data.project_RepoLink && (
            <Button asChild variant="outline">
              <Link
                href={data.project_RepoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DatabaseIcon className="mr-1 h-4 w-4" />
                Repository
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>

      <DialogContent className="max-w-3xl border-2">
        <DialogHeader>
          <DialogTitle>{data.project_Name}</DialogTitle>
        </DialogHeader>

        {data.asset?.url ? (
          <div className="aspect-video overflow-hidden border-2 border-border bg-muted">
            <img
              className="h-full w-full object-cover object-center"
              src={data.asset.url}
              alt={data.asset.alt}
            />
          </div>
        ) : null}

        <div className="space-y-4">
          <Text
            as="p"
            styleVariant="muted"
            className="text-xs uppercase tracking-[0.08em]"
          >
            {data.project_Timeline}
          </Text>
          <Text as="p" styleVariant="muted" className="text-sm leading-relaxed">
            {data.project_description}
          </Text>
          <div className="flex flex-wrap gap-2">
            {data.project_Technologies?.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {data.project_DemoLink && (
              <Button asChild variant="secondary">
                <Link
                  href={data.project_DemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Open Demo
                </Link>
              </Button>
            )}
            {data.project_RepoLink && (
              <Button asChild variant="outline">
                <Link
                  href={data.project_RepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DatabaseIcon className="mr-1 h-4 w-4" />
                  Open Repository
                </Link>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DevelopmentCard;
