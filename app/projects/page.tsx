import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/sections/page-header"
import ProjectShowcase from "@/components/bits-pro/project-showcase"
import { getProjects } from "@/lib/projects"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects, each documented with the thinking behind it and the results it produced.",
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <Container className="pb-24 md:pb-32">
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        description="Every project here comes with the thinking behind it and what actually happened when it shipped."
      />

      <ProjectShowcase projects={projects} />
    </Container>
  )
}
