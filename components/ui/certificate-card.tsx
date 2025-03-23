import React from "react";
import { BlurFade } from "../magicui/blur-fade";
import { LinkPreview } from "./link-preview";
import { Card, CardHeader, CardTitle } from "./card";
import { Text } from "./text";
import { Button } from "./button";
import { LinkIcon } from "lucide-react";
import { CertificateCardProps } from "@/constant/types";

const CertificateCard = ({
  data,
  i
}: {
  data: CertificateCardProps;
  i: number;
}) => {
  return (
    <BlurFade inView key={i} delay={0.2}>
      <LinkPreview url={data.PreviewLink}>
        <Card>
          <CardHeader>
            <div className="flex justify-between gap-2">
              <CardTitle>{data.Name}</CardTitle>
              <Text as="p" styleVariant="muted" className="w-fit font-medium">
                {data.Date}
              </Text>
            </div>
            <div className="flex justify-between gap-4 items-center">
              <Text as="p" styleVariant="muted" className="font-medium">
                Certification By {data.Organization}
              </Text>
              <Button size={"sm"} variant={"secondary"}>
                <LinkIcon /> Credentials
              </Button>
            </div>
          </CardHeader>
        </Card>
      </LinkPreview>
    </BlurFade>
  );
};

export default CertificateCard;
