import type { Certificate } from "@/lib/supabase/types"

export type { Certificate }

export const certificates: Certificate[] = [
  {
    slug: "google-cloud-digital-leader",
    title: "Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "2025",
    description:
      "Foundational understanding of cloud concepts, Google Cloud products, and digital transformation.",
    url: "https://www.credly.com/badges/example-cloud-digital-leader",
    credentialId: "GCL-2025-0001",
  },
  {
    slug: "meta-frontend-developer",
    title: "Meta Front-End Developer Professional",
    issuer: "Meta · Coursera",
    date: "2025",
    description:
      "Advanced front-end development: React, UI testing, accessibility, and professional workflows.",
    url: "https://coursera.org/verify/professional-cert/example-frontend",
    credentialId: "META-FE-2025",
  },
  {
    slug: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Cloud fundamentals, AWS core services, security, architecture, and pricing models.",
    url: "https://www.credly.com/badges/example-aws-cp",
    credentialId: "AWS-CP-2024",
  },
  {
    slug: "cs50x",
    title: "CS50x — Introduction to Computer Science",
    issuer: "HarvardX · edX",
    date: "2024",
    description:
      "Computer science fundamentals: algorithms, data structures, memory, and software engineering.",
    url: "https://courses.edx.org/verify/example-cs50x",
    credentialId: "CS50X-2024",
  },
  {
    slug: "responsive-web-design",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    description:
      "HTML, CSS, flexbox, grid, and building accessible, responsive web pages from scratch.",
    url: "https://www.freecodecamp.org/certification/example/responsive-web-design",
    credentialId: "FCC-RWD-2023",
  },
  {
    slug: "javascript-algorithms",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    description:
      "Core JavaScript, ES6, functional programming, and classic algorithms and data structures.",
    url: "https://www.freecodecamp.org/certification/example/javascript-algorithms",
    credentialId: "FCC-JS-2023",
  },
]
