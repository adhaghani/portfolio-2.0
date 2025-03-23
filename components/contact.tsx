import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MailIcon, MapPinIcon } from "lucide-react";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { useState } from "react";
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
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="size-14 bg-secondary grid place-items-center rounded-full">
              <MailIcon className="size-7" />
            </div>

            <div>
              <Text as="p" className="font-semibold">
                Email
              </Text>
              <Text as="p">adhaahmadwork@gmail.com</Text>
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
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded-md border bg-background"
              disabled={isSending}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md border bg-background"
              disabled={isSending}
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 rounded-md border bg-background min-h-[100px]"
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
    </div>
  );
};

export default Contact;
