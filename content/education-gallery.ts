// ---------------------------------------------------------------------------
// Education gallery — photos from my education years, shown in a marquee
// below the school timeline on the Education page.
//
// Drop your own photos into public/images/education/ and reference them here.
// Each entry renders as a card in the scrolling strip with a caption + year.
// ---------------------------------------------------------------------------

export interface EducationGalleryItem {
  src: string
  alt: string
  caption: string
  year: string
}

export const educationGallery: EducationGalleryItem[] = [
  {
    src: "/images/projects/visual-algo.png",
    alt: "VisualAlgo project screenshot",
    caption: "Graduation project",
    year: "2025",
  },
  {
    src: "/images/projects/pulseboard.png",
    alt: "PulseBoard project screenshot",
    caption: "Hackathon",
    year: "2024",
  },
  {
    src: "/images/blog/algorithms.png",
    alt: "Algorithms notes",
    caption: "Study notes",
    year: "2023",
  },
  {
    src: "/images/blog/notebook.png",
    alt: "Notebook notes",
    caption: "Field notes",
    year: "2022",
  },
  {
    src: "/images/projects/visual-algo.png",
    alt: "VisualAlgo project screenshot",
    caption: "Data structures",
    year: "2024",
  },
  {
    src: "/images/blog/notebook.png",
    alt: "Notebook notes",
    caption: "Coding club",
    year: "2023",
  },
]
