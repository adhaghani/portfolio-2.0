"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
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
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="size-14 bg-secondary grid place-items-center rounded-full">
                <PhoneIcon className="size-7" />
              </div>
              <div>
                <Text as="p" className="font-semibold">
                  Phone Number
                </Text>
                <a href={"tel:+60182017884"}>
                  <Text as="p">+6018-2017884</Text>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-14 bg-secondary grid place-items-center rounded-full">
                <MailIcon className="size-7" />
              </div>
              <div>
                <Text as="p" className="font-semibold">
                  Email Address
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
