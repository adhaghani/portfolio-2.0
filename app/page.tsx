import { Suspense } from "react"
import { Hero } from "@/components/sections/hero"
import { Skills } from "@/components/sections/skills"
import { FeaturedPosts } from "@/components/sections/featured-posts"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { EducationTeaser } from "@/components/sections/education-teaser"
import { ContactCta } from "@/components/sections/contact-cta"
import { HomepageSectionSkeleton } from "@/components/sections/homepage-section-skeleton"

// Refresh Supabase-backed sections without requiring a new deployment.
export const revalidate = 60

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Suspense fallback={<HomepageSectionSkeleton />}>
        <FeaturedPosts />
      </Suspense>
      <SocialProofSection />
      <Suspense fallback={<HomepageSectionSkeleton />}>
        <FeaturedProjects />
      </Suspense>
      <Suspense fallback={<HomepageSectionSkeleton />}>
        <EducationTeaser />
      </Suspense>
      <ContactCta />
    </>
  )
}
