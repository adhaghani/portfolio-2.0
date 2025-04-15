"use client";

import { Text } from "@/components/ui/text";
import Link from "next/link";

const Footer = () => {
  const footerNavs = [
    {
      label: "Navigation",
      items: [
        {
          href: "/",
          name: "Home"
        },
        {
          href: "/about",
          name: "About Me"
        },
        {
          href: "/project",
          name: "Projects"
        }
      ]
    },
    {
      label: "Socials",
      items: [
        {
          href: "https://www.github.com/adhaghani",
          name: "Github"
        },
        {
          href: "https://www.linkedin.com/in/adhaghani/",
          name: "LinkedIn"
        },
        {
          href: "https://www.hackerrank.com/Adhaghani",
          name: "HackerRank"
        },
        {
          href: "https://www.instagram.com/adhaghani",
          name: "Instagram"
        }
      ]
    }
    // {
    //   label: "Explore",
    //   items: [
    //     // {
    //     //   href: "javascript:void()",
    //     //   name: "Blogs"
    //     // },
    //     {
    //       href: "javascript:void()",
    //       name: "My Resume"
    //     },
    //     // {
    //     //   href: "javascript:void()",
    //     //   name: "Games"
    //     // },
    //     {
    //       href: "javascript:void()",
    //       name: "Contacts"
    //     }
    //   ]
    // }
  ];

  return (
    <footer className="py-10 bg-background/80">
      <div className="max-w-6xl container mx-auto px-4 md:px-8 flex justify-between flex-wrap items-start gap-10">
        <div className="justify-between items-center gap-4 md:flex">
          <div className="md:grid md:place-items-center">
            <img src={"/assets/logo.svg"} alt="" className="size-12" />
          </div>
          <div className="flex-1 max-w-lg">
            <Text as="h2">Adhaghani</Text>
            <Text as="p" styleVariant="muted">
              Full-Time Student, Software Enthusiast
            </Text>
          </div>
        </div>
        <div className="space-y-6 gap-20 sm:flex md:space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <Text as="h4">{item.label}</Text>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <Link
                    href={el.href}
                    className="duration-150 hover:text-gray-400 cursor-pointer"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
