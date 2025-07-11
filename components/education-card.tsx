"use client";

import { BlurFade } from "./magicui/blur-fade";
import { Text } from "./ui/text";
import { Badge } from "./ui/badge";
import { EducationCardProps } from "@/constant/types";

const EducationCard = ({ data }: { data: EducationCardProps }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <BlurFade inView delay={0.2}>
          <div className="aspect-video bg-background shadow rounded-lg grid place-items-center min-w-64">
            {data.Logo}
          </div>
        </BlurFade>
        <div className="w-full">
          <div className="flex gap-4 justify-between items-centerr">
            <BlurFade inView delay={0.2}>
              <Text as="h3">{data.name}</Text>
            </BlurFade>
          </div>
          <BlurFade delay={0.2} inView>
            <Text as="h4" className="font-medium">
              {data.degree}
            </Text>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <Text as="p" styleVariant="muted" className="font-medium">
              {data.duration}
            </Text>
          </BlurFade>
          {data.grade && (
            <BlurFade delay={0.2} inView>
              <Text as="p" styleVariant="muted" className="font-medium">
                Grade : {data.grade}
              </Text>
            </BlurFade>
          )}
        </div>
      </div>
      <div className="mt-5">
        <BlurFade delay={0.2}>
          <Text as="h4" className="font-medium">
            Related Coursework:
          </Text>
        </BlurFade>
        <div className="flex flex-wrap gap-2 mt-2">
          {data.relatedCourses.map((course, i) => (
            <BlurFade key={i} inView delay={0.2}>
              <Badge variant={"secondary"}>{course}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.activities &&
          data.activities.map((activity, i) => (
            <div key={i} className="mt-4">
              <BlurFade inView delay={0.2}>
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
              </BlurFade>
              {activity.details?.map((detail, i) => (
                <div key={i} className="mt-2 ml-3">
                  {detail.logo ? (
                    <BlurFade inView delay={0.2}>
                      <div className="flex gap-4 items-center ">
                        <div>{detail.logo}</div>
                        <div className="flex-col gap-2 ">
                          <Badge variant="secondary">{detail.role}</Badge>
                          <Text as="h4" className="font-semibold">
                            {detail.title}
                          </Text>
                        </div>
                      </div>
                    </BlurFade>
                  ) : (
                    <div className="flex gap-2 items-center flex-wrap">
                      <BlurFade inView delay={0.2}>
                        <Text as="h4" className="font-semibold">
                          {detail.title}
                        </Text>
                      </BlurFade>

                      {detail.role && (
                        <BlurFade inView delay={0.2}>
                          <Badge variant="secondary">{detail.role}</Badge>
                        </BlurFade>
                      )}
                    </div>
                  )}
                  {detail.date && (
                    <BlurFade inView delay={0.2}>
                      <Text as="p" styleVariant="muted" className="my-1">
                        {detail.date}
                      </Text>
                    </BlurFade>
                  )}
                  {detail.description ? (
                    <BlurFade inView delay={0.2}>
                      <Text as="p" styleVariant="muted">
                        {detail.description}
                      </Text>
                    </BlurFade>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default EducationCard;
