import Image from "next/image"

import { educationGallery } from "@/content/education-gallery"

/**
 * Seamless horizontally-scrolling strip of education photos.
 * The track renders the gallery twice; translating -50% loops perfectly.
 * Pauses on hover, respects prefers-reduced-motion.
 */
export function EducationMarquee() {
  if (educationGallery.length === 0) return null

  // Duplicate for a seamless loop
  const items = [...educationGallery, ...educationGallery]

  return (
    <div
      data-slot="education-marquee"
      className="relative mt-16 overflow-hidden border-y border-border/50"
      aria-label="Photos from my education years"
    >
      {/* Left fade — blends into the page background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent sm:w-32"
      />
      {/* Right fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent sm:w-32"
      />

      <div className="marquee-track flex w-max gap-4 py-6">
        {items.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className="relative h-36 w-52 shrink-0 overflow-hidden border border-border/50 bg-muted sm:h-44 sm:w-64"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 208px, 256px"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-background/85 px-2.5 py-1.5 font-mono text-[10px] tracking-wider text-foreground/55 uppercase backdrop-blur-sm">
              <span className="truncate">{item.caption}</span>
              <span className="shrink-0 text-foreground/25">{item.year}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
