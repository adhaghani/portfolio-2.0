import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { ActivityGrid } from "@/components/sections/activity-grid"
import { CertificateGrid } from "@/components/sections/certificate-grid"
import { EducationTimeline } from "@/components/sections/education-timeline"
import { PageHeader } from "@/components/sections/page-header"
import { getActivities, getEducation } from "@/lib/education"
import { getCertificates } from "@/lib/certificates"

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education history and the programs, ambassadorships and involvements that shaped it.",
}

export default async function EducationPage() {
  const education = await getEducation()
  const activities = await getActivities()
  const certificates = await getCertificates()

  return (
    <Container>
      <PageHeader
        eyebrow="Education"
        title="Where I studied & grew"
        description="The formal education and the programmes, ambassadorships and involvements that ran alongside it."
      />

      {/* Formal education timeline */}
      <section className="pb-24 md:pb-32">
        <EducationTimeline education={education} />
      </section>

      {/* Activities — click to open details */}
      <section className="border-t border-border/50 py-24 md:py-32">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/35 uppercase">
            <span aria-hidden className="h-px w-10 bg-foreground/15" />
            Beyond the classroom
          </p>
          <h2 className="mt-3 max-w-2xl font-mono text-2xl font-semibold tracking-tighter text-foreground md:text-3xl">
            Programs, ambassadorships & involvement
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/40">
            Click any card to see the full details.
          </p>
        </Reveal>

        <div className="mt-10">
          <ActivityGrid activities={activities} />
        </div>
      </section>

      {/* Certificates — click to open issuer site */}
      <section className="border-t border-border/50 py-24 md:py-32">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-foreground/35 uppercase">
            <span aria-hidden className="h-px w-10 bg-foreground/15" />
            Credentials
          </p>
          <h2 className="mt-3 max-w-2xl font-mono text-2xl font-semibold tracking-tighter text-foreground md:text-3xl">
            Certificates & certifications
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/40">
            Click a certificate to view it on the issuer&apos;s site.
          </p>
        </Reveal>

        <div className="mt-10">
          <CertificateGrid certificates={certificates} />
        </div>
      </section>
    </Container>
  )
}
