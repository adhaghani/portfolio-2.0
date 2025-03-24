import { BlurFade } from "@/components/magicui/blur-fade";
import { Text } from "@/components/ui/text";

import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { JSX } from "react";
import { motion } from "framer-motion";

interface TechCardProps {
  name: string;
  icon: JSX.Element;
}

const TechCard = ({ Data }: { Data: TechCardProps }) => {
  return (
    <BlurFade inView delay={0.2}>
      <Card>
        <CardHeader className="items-center">
          <CardTitle>
            <motion.div
              whileHover={{ rotate: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {Data.icon}
            </motion.div>
          </CardTitle>
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
