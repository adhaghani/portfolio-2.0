import { BlurFade } from "@/components/magicui/blur-fade";
import { Text } from "@/components/ui/text";

import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

interface TechCardProps {
  name: string;
  icon: any;
}

const TechCard = ({ Data }: { Data: TechCardProps }) => {
  return (
    <BlurFade inView delay={0.2}>
      <Card>
        <CardHeader className="items-center">
          <CardTitle>{Data.icon}</CardTitle>
        </CardHeader>
        <CardFooter className="items-center justify-center">
          <Text as="p" styleVariant="muted">
            {Data.name}
          </Text>
        </CardFooter>
      </Card>
    </BlurFade>
  );
};

export default TechCard;
