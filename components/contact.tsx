"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Text } from "./ui/text";

import { useState } from "react";

const Contact = () => {
  return (
    <Card>
      <CardHeader className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-6 md:items-center flex-col md:flex-row md:flex-wrap ">
            <div className="flex md:items-center gap-4">
              <div className="size-14 bg-secondary grid place-items-center rounded-full">
                <PhoneIcon className="size-7" />
              </div>
              <div>
                <Text as="p" className="font-semibold">
                  Phone Number
                </Text>
                <a href={"tel:+60182017884"}>
                  <Text as="p" styleVariant="muted">
                    +6018-2017884
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex md:items-center gap-4">
              <div className="size-14 bg-secondary grid place-items-center rounded-full">
                <MailIcon className="size-7" />
              </div>
              <div>
                <Text as="p" className="font-semibold">
                  Email Address
                </Text>
                <a href={"mailto:adhaahmadwork@gmail.com"}>
                  <Text as="p" styleVariant="muted">
                    adhaahmadwork@gmail.com
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex md:items-center gap-4">
              <div className="size-14 bg-secondary grid place-items-center rounded-full">
                <MapPinIcon className="size-7" />
              </div>

              <div>
                <Text as="p" className="font-semibold">
                  Location
                </Text>
                <Text as="p" styleVariant="muted">
                  Bandar Baru Bangi, Selangor, Malaysia
                </Text>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
