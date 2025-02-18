import { BlurFade } from "@/components/magicui/blur-fade";
import { Text } from "@/components/ui/text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Ripple } from "@/components/magicui/ripple";
import { Badge } from "@/components/ui/badge";
export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="h-[90vh] grid place-items-center relative max-h-[1000px]">
        <div>
          <BlurFade delay={0.1}>
            <Text as="h1" className="text-center">
              Hello, I'm Ahmad Adha
            </Text>
          </BlurFade>
          <BlurFade delay={0.2}>
            <Text as="h1" className="text-center">
              <WordRotate
                className=""
                words={["Full-Time Student", "Tech Enthusiast"]}
              />
            </Text>
          </BlurFade>
        </div>
      </div>
      {/* About SImple */}
      <div>
        <Badge>About</Badge>
        <Text as="h2">About Me</Text>
      </div>
    </>
  );
}
