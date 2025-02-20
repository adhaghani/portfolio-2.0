import { BlurFade } from "./magicui/blur-fade";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface ActivityDetails {
  title: string;
  role?: string;
  date?: string;
  description?: string;
}

interface EducationActivites {
  title: string;
  role?: string;
  date?: string;
  description?: string;
  details?: ActivityDetails[];
}

interface EducationProp {
  name: string;
  degree: string;
  duration: string;
  grade: string;
  image: {
    src: string;
    alt: string;
  };
  relatedCourses: string[];
  activities: EducationActivites[];
}

const EducationCard = ({ data }: { data: EducationProp }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <BlurFade inView delay={0.1}>
          <div className="aspect-video rounded-lg bg-secondary grid place-items-center min-w-64">
            <img src={data.image.src} alt={data.image.alt} />
          </div>
        </BlurFade>
        <div className="w-full">
          <div className="flex gap-4 justify-between items-centerr">
            <BlurFade inView delay={0.2}>
              <Text as="h3">{data.name}</Text>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <Button size={"sm"} variant={"ghost"}>
                View Detail
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </BlurFade>
          </div>
          <BlurFade delay={0.3} inView>
            <Text as="h4" className="font-medium">
              {data.degree}
            </Text>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <Text as="p" styleVariant="muted" className="font-medium">
              {data.duration}
            </Text>
          </BlurFade>
        </div>
      </div>
      <div className="mt-5">
        <BlurFade delay={0.4}>
          <Text as="h4" className="font-medium">
            Related Coursework:
          </Text>
        </BlurFade>
        <div className="flex flex-wrap gap-2 mt-2">
          {data.relatedCourses.map((course, i) => (
            <BlurFade inView delay={0.45}>
              <Badge variant={"secondary"}>{course}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.activities.map((activity, i) => (
          <div key={i} className="mt-4">
            <BlurFade inView delay={i === 0 ? 0.2 : 0.2 * i}>
              <Text as="h4" className="font-semibold">
                {activity.title}
              </Text>
            </BlurFade>
            {activity.details?.map((detail, i) => (
              <div key={i} className="mt-2 ml-3">
                <div className="flex gap-2 flex-wrap">
                  <BlurFade inView delay={i === 0 ? 0.3 : i * 0.3}>
                    <Text as="p" className="font-medium">
                      {detail.title}
                    </Text>
                  </BlurFade>

                  {detail.role && (
                    <BlurFade inView delay={0.3 + i * 0.1}>
                      <Badge variant="secondary">{detail.role}</Badge>
                    </BlurFade>
                  )}
                </div>
                {detail.date && (
                  <BlurFade inView delay={0.3 + i * 0.1}>
                    <Text as="p" styleVariant="muted" className="my-1">
                      {detail.date}
                    </Text>
                  </BlurFade>
                )}
                {detail.description ? (
                  <BlurFade inView delay={i === 0 ? 0.3 : i * 0.3}>
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
