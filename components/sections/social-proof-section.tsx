import { Container } from "@/components/layout/container"
import SocialProof from "@/components/bits-pro/social-proof"
import type { Testimonial } from "@/components/bits-pro/social-proof"

const testimonials: Testimonial[] = [
  {
    name: "Aidil",
    role: "President, MYTECC",
    content:
      "Professionally delivers all materials and work is done within given time.",
  },
  {
    name: "Syahreen",
    role: "President, Business Society",
    content:
      "Adha is very committed member and contributed greatly to the success of our merchandise and event.",
  },
  {
    name: "Norman Haikal",
    role: "IT Executive, Ableace Raakin Sdn. Bhd.",
    content:
      "Meticulously documented the organisation's system and built a web portal for the ground up. Thank you for your efforts.",
  },
]

export function SocialProofSection() {
  return (
    <section className="border-t border-border/50 py-20 md:py-28">
      <Container>
        <SocialProof testimonials={testimonials} />
      </Container>
    </section>
  )
}
