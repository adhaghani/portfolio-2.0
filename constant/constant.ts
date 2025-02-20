const technologies = [
  { name: "React", icon: "/tech/vercel.svg" },
  { name: "TypeScript", icon: "/tech/vercel.svg" },
  { name: "Next.js", icon: "/tech/vercel.svg" },
  { name: "Tailwind CSS", icon: "/tech/vercel.svg" },
  { name: "Node.js", icon: "/tech/vercel.svg" },
  { name: "Git", icon: "/tech/vercel.svg" }
];

const Education = [
  {
    name: "Universiti Teknologi MARA (UiTM)",
    degree: "Diploma in Computer Science",
    duration: "October 2022 - February 2025",
    image: {
      src: "/education/uitm.svg",
      alt: "UiTM Logo"
    },
    relatedCourses: [
      "Object-Oriented Programming",
      "Data Structure",
      "Web and Mobile Development",
      "Database Design",
      "Information System Development",
      "Programming Paradigm",
      "Calculus",
      "Probability and Statistic",
      "Computer Organization",
      "Discrete Mathematics"
    ],
    grade: "3.68/4.00",
    activities: [
      {
        title: "Clubs Joined",
        details: [
          {
            title: "MARA Youth Technology Computer Club (MYTECC)",
            date: "October 2023 - January 2025",
            description:
              "MYTECC is the Computer Science Faculty Club. Mainly organized activities for the student within the faculty. Program varies from prgoramming competition, to bonding program.",
            role: "Multimedia Bureau"
          },
          {
            title:
              "Malaysia Agroentrepreneurial Club for University Student (MyAgrosis)",
            date: "October 2023 - January 2025",
            description:
              "Entrepreneurship club that organized various activities aimed at achieving profit for every program. as lead graphic designer, my role is crucial to achieve our digital marketing goal.",
            role: "Lead Graphic Designer"
          },
          {
            title: "PhotoMedia Club (PMC)",
            date: "October 2023 - January 2025",
            description:
              "Club mainly focus on photography and videography. My role in the club is to shoot Photo and Video for club program, and outside of club programs.",
            role: "PhotoVideo Dision"
          }
        ]
      },
      {
        title: "Competitions Involvement",
        details: [
          {
            title: "MYTECC Codevortex: C++ & Java",

            description:
              "Java & C++ Programming Competition, My team achieved First Place for Java Programming Category."
          },
          {
            title: "CodeAthon UiTM Se-Malaysia 2024",

            description:
              "C++ Programming Competition that my team achieved third-runner up placement."
          },
          {
            title: "i-CPROM 2023",
            description:
              "My first ever programming competition organized by UiTM, my team achieved 13th runner up in the competition."
          }
        ]
      },
      {
        title: "Volunteers",
        details: [
          {
            title: "JPJPP 23-24 Election Committe",
            date: "January 2024",
            description:
              "Election Committee, Mainly Responsible to manage election season. As lead multimedia, i am responsible to manage and deliver content in a timely manner.",
            role: "Lead Mutlimedia Team"
          }
        ]
      }
    ]
  }
];

const Work = [
  {
    name: "AbleAce Raakin Sdn. Bhd.",
    image: {
      src: "/work/ableace.svg",
      alt: "AbleAce Logo"
    },
    duration: "September 2024 - February 2025",
    type: "Intenrship",
    role: "Junior IT Executive",
    achievement: [
      "Designed, Developed and launched the company’s new website",
      "Streamlined Article publishing method for staff by developing a Content Management System for the website.",
      "Optimised website bandwidth allocation by up to 60%",
      "Redesigned and Optimised email footer imagery, 50% reduction in size.",
      "Utilised AWS Service Screener to detect potential cost saving measures and security risk for the Trading System.",
      "Conducted Excel Competency sessions, increasing excel competency by 30%"
    ]
  }
];

const Certificate = [{}, {}, {}, {}, {}, {}, {}, {}];

export { technologies, Education, Work, Certificate };
