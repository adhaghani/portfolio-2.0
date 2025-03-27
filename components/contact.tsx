import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MailIcon, MapPinIcon } from "lucide-react";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import Link from "next/link";
const Contact = () => {
  const [isSending, setisSending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisSending(true);
    setTimeout(() => {
      setisSending(false);
    }, 10000);
  };
  return (
    <Card>
      <CardHeader className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CardTitle>Contact Information</CardTitle>
        <CardTitle className="hidden md:block">
          Let{`'`}s work together
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="size-14 bg-secondary grid place-items-center rounded-full">
              <MailIcon className="size-7" />
            </div>

            <div>
              <Text as="p" className="font-semibold">
                Email
              </Text>
              <a href={"mailto:adhaahmadwork@gmail.com"}>
                <Text as="p">adhaahmadwork@gmail.com</Text>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-14 bg-secondary grid place-items-center rounded-full">
              <MapPinIcon className="size-7" />
            </div>

            <div>
              <Text as="p" className="font-semibold">
                Location
              </Text>
              <Text as="p">Bandar Baru Bangi, Selangor, Malaysia</Text>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-3">
            <Button variant={"secondary"} asChild>
              <Link href={"https://www.github.com/adhaghani"}>Github</Link>
            </Button>
            <Button variant={"secondary"} asChild>
              <Link href={"https://www.linkedin.com/in/adhaghani"}>
                Linkedin
              </Link>
            </Button>
            <Button variant={"secondary"}>
              <a target="_BLANK" href={"/assets/Resume.pdf"}>
                resume
              </a>
            </Button>
            <Button variant={"secondary"} asChild>
              <Link href={"https://www.instagram.com/adhaghani"}>
                instagram
              </Link>
            </Button>
          </div>
        </div>
        <CardTitle className="md:hidden visible">
          Let{`'`}s work together
        </CardTitle>

        <form className="space-y-4">
          <Input type="text" placeholder="Your Name" disabled={isSending} />
          <Input type="email" placeholder="Your Email" disabled={isSending} />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Message Details" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">General</SelectItem>
              <SelectItem value="dark">Work Inquiry</SelectItem>
              <SelectItem value="system">Collaboration</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Your Message"
            className="w-full min-h-[100px]"
            disabled={isSending}
          />
          <Button
            type="button"
            className="w-full"
            disabled={isSending}
            onClick={() => handleSubmit}
          >
            {isSending ? "Sending Message..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;
