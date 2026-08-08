import type { EducationEntry, Activity, ActivityType } from "@/lib/supabase/types"

export type { EducationEntry, Activity, ActivityType }

export const educationHistory: EducationEntry[] = [
  {
    institution: "University of Example",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2022",
    endDate: "2026",
    description:
      "Focused on software engineering and human–computer interaction. Graduated with first-class honours.",
    highlights: [
      "Graduation project: VisualAlgo — an animated algorithm playground",
      "Teaching assistant for Data Structures & Algorithms",
      "Dean's List, three consecutive years",
    ],
    gpa: "3.87 / 4.0",
    courses: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Human–Computer Interaction",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "Machine Learning",
      "Web Development",
    ],
  },
  {
    institution: "Example High School",
    degree: "Science Stream",
    field: "Pure & Applied Sciences",
    startDate: "2019",
    endDate: "2022",
    description:
      "Specialised in mathematics and computer science fundamentals. Co-founded the school's first coding club.",
    highlights: ["Head of Coding Club", "National Olympiad finalist — Informatics"],
    gpa: "3.95 / 4.0",
    courses: [
      "Mathematics",
      "Further Mathematics",
      "Physics",
      "Computer Science",
      "English Literature",
    ],
  },
]

export const activities: Activity[] = [
  {
    title: "Google Developer Student Club — Core Team",
    organization: "Google × University of Example",
    type: "ambassadorship",
    startDate: "2024",
    endDate: "2026",
    description:
      "Organised workshops and a 24-hour hackathon reaching 400+ students. Acted as the campus liaison for Google's developer programs.",
    contributions: [
      "Organised 12 technical workshops covering cloud, Android, and AI/ML topics",
      "Coordinated a 24-hour hackathon with 400+ participants and 8 industry mentors",
      "Managed a team of 6 core members and 20 volunteers across the academic year",
      "Built relationships with 5 tech companies for sponsorship and speaker sessions",
    ],
    takeaway:
      "This role taught me how to lead without authority — coordinating volunteers, managing vendor relationships, and keeping a large event on track when things go wrong. I also learned to communicate technical concepts to non-technical audiences.",
  },
  {
    title: "Mentor, Algorithms Study Group",
    organization: "University of Example",
    type: "involvement",
    startDate: "2025",
    endDate: "2026",
    description:
      "Mentored a group of 12 junior students through competitive programming fundamentals, from recursion to graph theory.",
    contributions: [
      "Designed a 12-week curriculum covering recursion, dynamic programming, and graph algorithms",
      "Led weekly 2-hour sessions with 12 junior students, adapting pacing based on group progress",
      "Created a bank of 80+ practice problems with difficulty tiers and solution walkthroughs",
      "Three mentees qualified for the national programming competition",
    ],
    takeaway:
      "Teaching is the fastest way to deepen your own understanding. Breaking down complex algorithms into explainable steps forced me to confront gaps in my own mental models. The most rewarding moment was seeing a student independently solve a problem they'd struggled with for weeks.",
  },
  {
    title: "Student Ambassador",
    organization: "Women Who Code (Volunteer)",
    type: "ambassadorship",
    startDate: "2023",
    endDate: "2024",
    description:
      "Ran beginner-friendly intro-to-coding sessions and supported the community's mentorship pairings for underrepresented students.",
    contributions: [
      "Ran 6-month intro-to-coding series covering HTML, CSS, and basic JavaScript",
      "Supported 30+ mentorship pairings and tracked progress each semester",
      "Hosted monthly community meetups with guest speakers from industry",
    ],
    takeaway:
      "Creating a welcoming environment matters more than the curriculum itself. Many attendees came in nervous and left with enough confidence to apply for internships. Representation and belonging in tech isn't optional — it's foundational.",
  },
  {
    title: "Coordinator, University Open Day",
    organization: "Student Union",
    type: "program",
    startDate: "2023",
    endDate: "2023",
    description:
      "Planned the faculty showcase — schedules, volunteer rosters and the demo stations for prospective students and their families.",
    contributions: [
      "Designed the faculty demo zone layout with 8 interactive stations",
      "Scheduled and briefed 30+ student volunteers across a full-day event",
      "Built a real-time attendance dashboard for tracking visitor flow",
    ],
    takeaway:
      "Logistics is the invisible half of any public event. A smooth schedule looks effortless from the outside but only works when every handoff is rehearsed. I learned to plan for failure modes — what happens when a demo crashes or a volunteer doesn't show up.",
  },
  {
    title: "Founding Member, Campus Makerspace",
    organization: "Engineering Society",
    type: "involvement",
    startDate: "2022",
    endDate: "2024",
    description:
      "Helped set up a shared workshop and organise build nights. Co-led a semester-long hardware course pairing microcontrollers with web dashboards.",
    contributions: [
      "Co-founded the makerspace with 4 other students, securing university funding and 200 sq ft of workshop space",
      "Co-led a semester-long course: 'Microcontrollers + Web' — Arduino sensors feeding real-time dashboards",
      "Organised 16 build nights averaging 25 attendees per session",
      "Built an inventory tracking system for shared tools and components",
    ],
    takeaway:
      "Building a community from scratch is harder than building software. The makerspace taught me that the physical spaces we create shape the work that happens within them. The best projects came out of the collision between students from different disciplines who wouldn't have met otherwise.",
  },
]
