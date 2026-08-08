import { Hero } from "@/components/sections/hero"
import { Skills } from "@/components/sections/skills"
import { FeaturedPosts } from "@/components/sections/featured-posts"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { EducationTeaser } from "@/components/sections/education-teaser"
import { ContactCta } from "@/components/sections/contact-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedPosts />
      <SocialProofSection />
      <FeaturedProjects />
      <EducationTeaser />
      <ContactCta />
    </>
  )
}
