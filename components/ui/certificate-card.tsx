import React from "react";
import { BlurFade } from "../magicui/blur-fade";
import { LinkPreview } from "./link-preview";
import { Card, CardHeader, CardTitle } from "./card";
import { Text } from "./text";
import { Button } from "./button";
import { LinkIcon } from "lucide-react";

interface CertificateCardProps {
  PreviewLink: string;
  Name: string;
  Organization: string;
  Date: string;
}

const CertificateCard = ({
  data,
  key
}: {
  data: CertificateCardProps;
  key: number;
}) => {
  return (
    <BlurFade inView key={key} delay={key === 0 ? 0.2 : 0.2 * key}>
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
