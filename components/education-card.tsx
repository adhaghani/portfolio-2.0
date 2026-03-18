"use client";

import React from "react";
import { Text } from "./ui/text";
import { Badge } from "./ui/badge";
import { EducationCardProps } from "@/constant/types";

const EducationCard = ({ data }: { data: EducationCardProps }) => {
  return (
    <React.Fragment key={data.name}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="aspect-video bg-background shadow rounded-lg grid place-items-center min-w-64">
          {data.Logo}
        </div>

        <div className="w-full">
          <div className="flex gap-4 justify-between items-center">
            <Text as="h3">{data.name}</Text>
          </div>

          <Text as="h4" className="font-medium">
            {data.degree}
          </Text>

          <Text as="p" styleVariant="muted" className="font-medium">
            {data.duration}
          </Text>

          {data.grade && (
            <Text as="p" styleVariant="muted" className="font-medium">
              Grade : {data.grade}
            </Text>
          )}
        </div>
      </div>
      <div className="mt-5">
        <Text as="h4" className="font-medium">
          Related Coursework:
        </Text>

        <div className="flex flex-wrap gap-2 mt-2">
          {data.relatedCourses.map((course, i) => (
            <Badge key={i} variant={"secondary"}>
              {course}
            </Badge>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.activities &&
          data.activities.map((activity, i) => (
            <div key={i} className="mt-4">
              {activity.logo ? (
                <div className="flex gap-2 items-center">
                  <div className="w-fit h-fit ">{activity.logo}</div>
                  <Text as="h4" className="font-semibold">
                    {activity.title}
                  </Text>
                </div>
              ) : (
                <Text as="h4" className="font-semibold">
                  {activity.title}
                </Text>
              )}

              {activity.details?.map((detail, i) => (
                <div key={i} className="mt-2 ml-3">
                  {detail.logo ? (
                    <div className="flex gap-4 items-center ">
                      <div>{detail.logo}</div>
                      <div className="flex-col gap-2 ">
                        <Badge variant="secondary">{detail.role}</Badge>
                        <Text as="h4" className="font-semibold">
                          {detail.title}
                        </Text>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2 items-center flex-wrap">
                      <Text as="h4" className="font-semibold">
                        {detail.title}
                      </Text>

                      {detail.role && (
                        <Badge variant="secondary">{detail.role}</Badge>
                      )}
                    </div>
                  )}
                  {detail.date && (
                    <Text as="p" styleVariant="muted" className="my-1">
                      {detail.date}
                    </Text>
                  )}
                  {detail.description ? (
                    <Text as="p" styleVariant="muted">
                      {detail.description}
                    </Text>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default EducationCard;
