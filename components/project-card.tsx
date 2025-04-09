import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProjectCard {
  title: string;
  description: string;
  link: string;
  image: {
    src: string;
    alt: string;
  };
  technologies: string[];
}

const ProjectCard = ({ data }: { data: ProjectCard }) => {
  return (
    <Card className="overflow-hidden">
      <Image
        className="object-cover object-center"
        src={data.image.src}
        alt={data.image.alt}
        quality={100}
        width={300}
        height={300}
      />
      <CardHeader className="space-y-4">
        <CardTitle>
          <Text as="h3">{data.title}</Text>
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          {data.technologies.map((tech: string, i: number) => (
            <Badge className="w-fit" variant={"secondary"} key={i}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <Text as="p">{data.description}</Text>
        </CardDescription>
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <Button className="mt-4">View Project</Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
