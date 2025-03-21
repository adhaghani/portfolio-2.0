"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { BlurFade } from "../magicui/blur-fade";

const ProjectCard = () => {
  return (
    <BlurFade inView delay={0.2}>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="w-full aspect-video bg-gray-500 rounded grid place-items-center">
              image goes here
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>test</CardContent>
      </Card>
    </BlurFade>
  );
};

export default ProjectCard;
