// ---------------------------------------------------------------------------
// Tech stack / skills — grouped by category, displayed on the homepage
// ---------------------------------------------------------------------------

export interface SkillCategory {
  category: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Rest API"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "PostgreSQL", "SQLite", "Redis", "tRPC", "Oracle"],
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "Docker", "Google Cloud", "AWS", "WebSockets", "Claude Code"],
  },
]
