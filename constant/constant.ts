import AboutLogo from "@/components/about-logo";

const Testimonials = [
  {
    title: "Outstanding Creativity and Dedication",
    quote:
      "Collaborating with Ahmad Adha has been a truly rewarding experience. His creativity, professionalism, and consistent ability to deliver high-quality graphic design work played a significant role in elevating the visual appeal of our faculty projects. Whether it was event posters, social media content, or presentation materials, his designs always reflected excellence and aligned perfectly with our goals. I'm grateful for his support and dedication throughout our term.",
    name: "Syahreen",
    position:
      "Former President, Faculty of Business and Management, UiTM Pahang (Session 23/24)",
  },
  {
    title: "Great Collaboration",
    quote:
      "Working with adha is very enjoyable, and he has a great personality, especially in creating works that contribute to the growth of MYTECC while meeting the necessary criteria within the MYTECC organization.",
    name: "Aidiel Hussin",
    position: "Former President, MYTECC Pahang (session 23/24)",
  },
  {
    title: "Very Proffessional Ethic",
    quote:
      "Task that was given to adha exceeds our expectation, and he delivers all the work sooner than expected.",
    name: "Mazidah Merican",
    position: "IT Manager, AbleAce Raakin Sdn. Bhd.",
  },
];

const Education = [
  {
    name: "Universiti Teknologi MARA (UiTM)",
    degree: "Bachelors Degree in Computer Science With Honours",
    duration: "March 2025 - Present",
    Logo: AboutLogo.UiTM,
    relatedCourses: [
      "Software Engineering Principle",
      "Technology Entrepreneurship",
      "Algorithm Analysis and Design",
      "Parallel Processing",
      "Artificial Intelligence Algorithm",
      "Data Structures",
      "Principles of Compilers",
      "Software Project Management",
      "Introductory German Language",
      "Linear Algebra",
    ],
    activities: [
      {
        title: "Competitions Involvement",
        details: [
          {
            title: "PPKomp 2025",
            role: "Second Overall Group",
            date: "April 2025",
            description:
              "Pertandingan Pengaturcaraan Komputer 2025, held online for all students from higher studies all the way to primary school.",
          },
          {
            title: "Prosolve National 2025",
            role: "Third Runner Up",
            date: "April 2025",
            description:
              "Prosolve National 2025, a national-level programming competition involving public universities throughout malaysia, with more than 60 teams participating. my team manages to get an overall achievement of third runner up for the entire competition, and the only team from Universiti Teknologi MARA (UiTM) to make it to the top 5 of all the 60 teams participated.",
          },
        ],
      },
      {
        title: "Volunteers",
        details: [
          {
            logo: AboutLogo.SPM,
            title: "Sekretariat Parlimen Mahasiswa UiTM",
            date: "May 2025 - Present",
            description:
              "Parliamentary Secretariat, I am mainly responsible for managing the media sides of the parliament. Mainly taking photos and shooting videos of the entire parliamentary sessions. I am also involved with creating graphical posters, editing secretariat photos and lending a hand to other units in need.",
            role: "Multimedia and Publicity Unit",
          },
          {
            title: "Malaysia Inovation Data Talent 2025 (MIDT)",
            date: "July 2025 - Present",
            description:
              "The Malaysia Data Innovation Talent x DOSM Datathon 2025 is a premier national competition that brings together the brightest minds from universities across Malaysia to tackle real-world data challenges.",
            role: "Multimedia and Publicity Unit",
          },
        ],
      },
      {
        logo: AboutLogo.PWC,
        title: "PWC Trust Ambassador 2025/2026",
        details: [
          {
            title: "Selection Day",
            date: "July 2025",
            description:
              "A day where more than 70+ candidates from various institution across Malaysia gathers at PWC Malaysia HQ and solve a Case Study based around the topic of Artificial Intelligence.",
          },
          {
            title: "Ambassador Day",
            date: "July 2025",
            description:
              "Ambassador Day is the day where i was officialy recognized as PWC Trust Ambassador for 2025/2026. It is also the day where PWC Trust Ambassador 2024/2025 oficially graduates from their ambassadorship.",
          },
        ],
      },
    ],
  },
  {
    name: "Universiti Teknologi MARA (UiTM)",
    degree: "Diploma in Computer Science",
    duration: "October 2022 - February 2025",
    Logo: AboutLogo.UiTM,
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
      "Discrete Mathematics",
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
            role: "Multimedia Bureau",
          },
          {
            title:
              "Malaysia Agroentrepreneurial Club for University Student (MyAgrosis)",
            date: "October 2023 - January 2025",
            description:
              "Entrepreneurship club that organized various activities aimed at achieving profit for every program. as lead graphic designer, my role is crucial to achieve our digital marketing goal.",
            role: "Lead Graphic Designer",
          },
          {
            title: "PhotoMedia Club (PMC)",
            date: "October 2023 - January 2025",
            description:
              "Club mainly focus on photography and videography. My role in the club is to shoot Photo and Video for club program, and outside of club programs.",
            role: "PhotoVideo Dision",
          },
        ],
      },
      {
        title: "Competitions Involvement",
        details: [
          {
            title: "MYTECC Codevortex: C++ & Java",

            description:
              "Java & C++ Programming Competition, My team achieved First Place for Java Programming Category.",
          },
          {
            title: "CodeAthon UiTM Se-Malaysia 2024",

            description:
              "C++ Programming Competition that my team achieved third-runner up placement.",
          },
          {
            title: "i-CPROM 2023",
            description:
              "My first ever programming competition organized by UiTM, my team achieved 13th runner up in the competition.",
          },
        ],
      },
      {
        title: "Volunteers",
        details: [
          {
            title: "JPJPP 23-24 Election Committe",
            date: "January 2024",
            description:
              "Election Committee, Mainly Responsible to manage election season. As lead multimedia, i am responsible to manage and deliver content in a timely manner.",
            role: "Lead Mutlimedia Team",
          },
        ],
      },
    ],
  },
];

const Work = [
  {
    name: "AbleAce Raakin Sdn. Bhd.",
    Logo: AboutLogo.AAR,
    duration: "September 2024 - February 2025",
    website: "https://ableaceraakin.com",
    type: "Intenrship",
    role: "Junior IT Executive",
    achievement: [
      "Designed, Developed and launched the company’s new website",
      "Streamlined Article publishing method for staff by developing a Content Management System for the website.",
      "Optimised website bandwidth allocation by up to 60%",
      "Redesigned and Optimised email footer imagery, 50% reduction in size.",
      "Utilised AWS Service Screener to detect potential cost saving measures and security risk for the Trading System.",
      "Conducted Excel Competency sessions, increasing excel competency by 30%",
    ],
  },
];

const Certificate = [
  {
    PreviewLink:
      "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/f8ddf63e-cd6e-495b-ae09-04b56fb5538e-ahmad-adha-e8fe37a4-541b-4438-806f-fb1c46eea8c9-certificate.pdf",
    Name: "MongoDB and the Document Model",
    Organization: "MongoDB",
    Date: "July 2025",
  },
  {
    PreviewLink:
      "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/f8ddf63e-cd6e-495b-ae09-04b56fb5538e-ahmad-adha-c91395c4-71a5-485c-a9d9-c23f4a573930-certificate.pdf",
    Name: " MongoDB CRUD Operations: Insert and Find Documents",
    Organization: "MongoDB",
    Date: "July 2025",
  },
  {
    PreviewLink:
      "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/f8ddf63e-cd6e-495b-ae09-04b56fb5538e-ahmad-adha-de9eb04c-115a-4af8-8d1b-2bbc23cbe699-certificate.pdf",
    Name: "MongoDB CRUD Operations in Node.js",
    Organization: "MongoDB",
    Date: "July 2025",
  },
  {
    PreviewLink:
      "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/f8ddf63e-cd6e-495b-ae09-04b56fb5538e-ahmad-adha-20de5535-7d18-4d64-a0e5-da3499d4ff0d-certificate.pdf",
    Name: " MongoDB Indexes",
    Organization: "MongoDB",
    Date: "July 2025",
  },
  {
    PreviewLink:
      "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/f8ddf63e-cd6e-495b-ae09-04b56fb5538e-ahmad-adha-bc7a7df5-c482-44af-a827-4f42b0103740-certificate.pdf",
    Name: " MongoDB Aggregation",
    Organization: "MongoDB",
    Date: "July 2025",
  },
  {
    PreviewLink:
      "https://www.linkedin.com/learning/certificates/ad7e82da17938e49141a34db201226dc362d16e99fa7f05ea032f84045636e0d",
    Name: "Career Essential in Software Development",
    Organization: "Microsoft and LinkeIn",
    Date: "31 May 2024",
  },
  {
    PreviewLink:
      "https://www.linkedin.com/learning/certificates/e52b623331097035f309a9e19c9d6acb38eab3e81136091ea569f9e788e8713a",

    Name: "Communication Foundation (2018)",
    Organization: "LinkedIn",
    Date: "20 March 2024",
  },
  {
    PreviewLink:
      "https://www.linkedin.com/learning/certificates/63076d243318f10e3583c5c1b905705bc2b767d141d81f8869914e4e941235f7",

    Name: "Programming Foundations: Fundamentals",
    Organization: "LinkedIn",
    Date: "31 May 2024",
  },
  {
    PreviewLink:
      "https://www.linkedin.com/learning/certificates/5e5ce44882537dd66f8bac4586eb4b035a8bfcf8190019c8d6419939f1a857f5",

    Name: "What is Generative Ai?",
    Organization: "LinkedIn",
    Date: "20 March 2024",
  },
  {
    PreviewLink: "https://www.hackerrank.com/certificates/9c6976cbd36a",

    Name: "CSS (Basic)",
    Organization: "HackerRank",
    Date: "24 March 2024",
  },
  {
    PreviewLink: "https://www.hackerrank.com/certificates/34cb146483f9",

    Name: "Java (Basic)",
    Organization: "HackerRank",
    Date: "4 June 2024",
  },
  {
    PreviewLink: "https://www.hackerrank.com/certificates/7a93cbba13ae",

    Name: "JavaScript (Intermediate)",
    Organization: "HackerRank",
    Date: "24 March 2024",
  },
  {
    PreviewLink: "https://www.hackerrank.com/certificates/bafdfd44e1bb",

    Name: "Problem Solving (Basic)",
    Organization: "HackerRank",
    Date: "10 May 2024",
  },
  {
    PreviewLink: "https://www.hackerrank.com/certificates/0a3a2bdd4111",

    Name: "React (Basic)",
    Organization: "HackerRank",
    Date: "15 June 2024",
  },
  {
    PreviewLink: "https://www.hackerrank.com/certificates/016e6df5a9dc",

    Name: "SQL (Basic)",
    Organization: "HackerRank",
    Date: "10 May 2024",
  },
  {
    PreviewLink: "https://www.mygreatlearning.com/certificate/KINBERIP",

    Name: "OOPs in Java",
    Organization: "Great Learning",
    Date: "May 2024",
  },
  {
    PreviewLink:
      "https://www.freecodecamp.org/certification/fcc7a453df0-121a-4d0a-be81-01abcc14ef1d/responsive-web-design",

    Name: "Responsive Web Design",
    Organization: "FreeCodeCamp",
    Date: "21 March 2024",
  },
];

const DesignProjects = [
  {
    asset: {
      url: "/assets/images/design/LanyardSPM.webp",
      alt: "Lanyard SPM 24/25",
    },

    project_Name: "Lanyard Sekretariat Parlimen Mahasiswa UiTM",
    project_Timeline: "May 2025",
    project_Technologies: ["PhotoShop", "Illustrator", "Figma", "Canva"],
    project_description:
      "I created and designed the lanyard for Sekretariat Parlimen Mahasiswa 24/25 Sessions.",
  },
  {
    asset: {
      url: "/assets/images/design/FPPPolo.png",
      alt: "QR Code Generator",
      image_bundle: [
        {
          url: "/assets/images/design/FPPPolo.png",
        },
        {
          url: "/assets/images/design/FPPPolo/IMG_01.png",
        },
        {
          url: "/assets/images/design/FPPPolo/IMG_02.png",
        },
      ],
    },
    project_Name: "Business Society Activity Jersey",
    project_Timeline: "April 2024",
    project_Technologies: ["PhotoShop", "Illustrator", "Figma"],
    project_description:
      "Transforming from a 2D Mock-Ups given into 3D Mock-Ups.",
  },
  {
    asset: {
      url: "/assets/images/design/BSCorporateShirt.png",
      alt: "QR Code Generator",
    },
    project_Name: "Business Society Corporate Shirt",
    project_Timeline: "April 2024",
    project_Technologies: ["PhotoShop", "Illustrator"],
    project_description:
      "Designed and created mockup for Business Society's new Corporate Shirt.",
  },
  {
    asset: {
      url: "/assets/images/design/MPPLanyard.png",
      alt: "Programme Lanyard",
    },
    project_Name: "Programme Lanyard",
    project_Timeline: "June 2024",
    project_Technologies: ["PhotoShop", "Illustrator", "Figma", "Canva"],
    project_description:
      "A Lanyard to be used by Student Representative of UiTM Pahang 2023-2024 Session for an international Programme.",
  },
  {
    asset: {
      url: "/assets/images/design/MYTECCJersey.png",
      alt: "Mytecc Activity Jersey",
      image_bundle: [
        {
          url: "/assets/images/design/MYTECCJersey.png",
        },
        {
          url: "/assets/images/design/MAJ/IMG_01.png",
        },
        {
          url: "/assets/images/design/MAJ/IMG_02.png",
        },
      ],
    },
    project_Name: "Mytecc Activity Jersey",
    project_Timeline: "March 2024",
    project_Technologies: ["Photoshop", "Illustrator", "Figma", "Canva"],
    project_description:
      "Designed a Retro-Like jersey as a commercial Project to be sold by MYTECC UiTM Raub 2023-2024 Session.",
  },
  {
    asset: {
      url: "/assets/images/design/NFRRunner.png",
      alt: "NFR Runner Jersey",
      image_bundle: [
        {
          url: "/assets/images/design/NFRRunner.png",
        },
        {
          url: "/assets/images/design/NFRRunner/IMG_01.png",
        },
        {
          url: "/assets/images/design/NFRRunner/IMG_02.png",
        },
        {
          url: "/assets/images/design/NFRRunner/IMG_03.png",
        },
        {
          url: "/assets/images/design/NFRRunner/IMG_04.png",
        },
        {
          url: "/assets/images/design/NFRRunner/IMG_05.png",
        },
      ],
    },
    project_Name: "NFR Runner Jersey",
    project_Timeline: "February 2024",
    project_Technologies: ["PhotoShop", "Illustrator", "Figma", "Canva"],
    project_description:
      "Runner jersey to be wear by runner during Neon Fun Run: Raya Edition organized by MyAgrosis UiTM Raub and Business Society UiTM Raub.",
  },
  {
    asset: {
      url: "/assets/images/design/NFRCommittee.png",
      alt: "NFR Committee Jersey",
    },

    project_Name: "NFR Committee Jersey",
    project_Timeline: "February 2024",
    project_Technologies: ["PhotoShop", "Illustrator", "Figma", "Canva"],
    project_description:
      "Committee jersey to be wear by Committee during Neon Fun Run: Raya Edition organized by MyAgrosis UiTM Raub and Business Society UiTM Raub.",
  },
];

const AboutPhotoGallery = [
  {
    image: {
      src: "/assets/images/photoGallery/image1.png",
      alt: "",
    },
    tooltipMessage: "",
  },
  {
    image: {
      src: "/assets/images/photoGallery/image2.png",
      alt: "",
    },
    tooltipMessage: "",
  },
  {
    image: {
      src: "/assets/images/photoGallery/image3.png",
      alt: "",
    },
    tooltipMessage: "",
  },
  {
    image: {
      src: "/assets/images/photoGallery/image4.png",
      alt: "",
    },
    tooltipMessage: "",
  },
  {
    image: {
      src: "/assets/images/photoGallery/image5.png",
      alt: "",
    },
    tooltipMessage: "",
  },
  {
    image: {
      src: "/assets/images/photoGallery/image6.png",
      alt: "",
    },
    tooltipMessage: "",
  },
  {
    image: {
      src: "/assets/images/photoGallery/image7.png",
      alt: "",
    },
    tooltipMessage: "",
  },
  {
    image: {
      src: "/assets/images/photoGallery/image8.png",
      alt: "",
    },
    tooltipMessage: "",
  },
  {
    image: {
      src: "/assets/images/photoGallery/image9.png",
      alt: "",
    },
    tooltipMessage: "",
  },
  {
    image: {
      src: "/assets/images/photoGallery/image10.png",
      alt: "",
    },
    tooltipMessage: "",
  },
  {
    image: {
      src: "/assets/images/photoGallery/image11.jpg",
      alt: "",
    },
    tooltipMessage: "",
  },
  {
    image: {
      src: "/assets/images/photoGallery/image12.jpg",
      alt: "",
    },
    tooltipMessage: "",
  },
];

const DevelopmentProjects = [
  {
    asset: {
      url: "/assets/images/project/appliTrack.png",
      alt: "AppliTrack",
    },
    development_Type: ["Front-End"],
    project_Name: "AppliTrack",
    project_Timeline: "July 2025",
    project_Technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Vercel",
    ],
    project_description:
      "Web-based application that allows users to track their job applications, including details like company name, position, application date, and status.",
    project_DemoLink: "https://applitrack-kappa.vercel.app/",
    project_RepoLink: "https://github.com/adhaghani/applitrack",
  },
  {
    asset: {
      url: "/assets/images/project/resumeBuilder.png",
      alt: "Resume Builder",
    },
    development_Type: ["Front-End"],
    project_Name: "Resume Builder",
    project_Timeline: "July 2025",
    project_Technologies: ["Next.js", "ShadCN UI", "Tailwind CSS", "Vercel"],
    project_description:
      "A web-based application that allows users to create and manage their resumes easily.",
    project_DemoLink: "https://resume-builder-eight-virid.vercel.app/",
    project_RepoLink: "https://github.com/adhaghani/resume-builder",
  },
  {
    asset: {
      url: "/assets/images/project/Boatly.png",
      alt: "Boatly Puzzle Game",
    },
    development_Type: ["Front-End"],
    project_Name: "Boatly - The Puzzle Game",
    project_Timeline: "July 2025",
    project_Technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    project_description:
      "A Simple boat puzzle game where user have to guessed the details of a cargo ship based on all the clues given.",
    project_DemoLink: "https://adhaghani.github.io/boatgame/",
    project_RepoLink: "https://github.com/adhaghani/boatgame",
  },
  {
    asset: {
      url: "/assets/images/project/Portfolio.png",
      alt: "Personal Portfolio Website",
    },
    development_Type: ["Front-End"],
    project_Name: "Personal Portfolio Website",
    project_Timeline: "July 2025",
    project_Technologies: [
      "Next.js",
      "ShadCN UI",
      "Tailwind CSS",
      "Vercel",
      "Supabase",
    ],
    project_description:
      "personal portfolio websites to showcase my front-end development skills. The site also contains all my previous project either in design or development.",
    project_DemoLink: "https://www.adhaghani.com/",
    project_RepoLink: "https://github.com/adhaghani/Portfolio",
  },
  {
    asset: {
      url: "/assets/images/project/UniParcel.png",
      alt: "UniParcel",
    },
    development_Type: ["Full-Stack", "Front-End", "Back-End"],
    project_Name: "UniParcel",
    project_Timeline: "February 2025",
    project_Technologies: [
      "React",
      "TypeScript",
      "Axios",
      "Laravel",
      "MySQL",
      "ShadCN UI",
    ],
    project_description:
      "A Full-Stack Web-Based Parcel Management System that tracks parcel movement in an institution/office. Include feature like payment, parcel tracking, staff management.",
    project_DemoLink: "https://uniparcel.my/",
  },
  {
    asset: {
      url: "/assets/images/project/Qrcode.png",
      alt: "QR Code Generator",
    },
    development_Type: ["Front-End"],
    project_Name: "QR Code Generator",
    project_Timeline: "August 2024",
    project_Technologies: ["React.js", "SCSS", "QRcode.react", "HTML2Canvas"],
    project_description:
      "A simple QR Code generated that generate a link to a given url. User's are able to download the QR code generated. Simple, fast, efficient, and no ads.",
    project_DemoLink: "https://adhaghani.github.io/qrcodegen/",
    project_RepoLink: "https://github.com/adhaghani/qrcodegen",
  },

  {
    asset: {
      url: "/assets/images/project/aar.png",
      alt: "AbleAce Raakin Website",
    },
    development_Type: ["Front-End"],
    project_Name: "AbleAce Raakin Website",
    project_Timeline: "January 2025",
    project_Technologies: ["React.js", "SCSS", "Motion", "PHP", "MySQL"],
    project_description:
      "A website developed to replace the company's old website. This is my internship project, where I am responsible to design, develop and launch the website. The website is developed using React.js and SCSS, with a focus on performance and user experience.",
    project_DemoLink: "https://ableaceraakin.com/",
  },
  // {
  //   asset: {
  //     url: "/assets/project/Todo.png",
  //     alt: "To-Do List"
  //   },
  //   development_Type: "Front-End",
  //   project_Name: "To-Do List Application",
  //   project_Timeline: "August 2024",
  //   project_Technologies: ["React.js", "SCSS "],
  //   project_description:
  //     "A simple Todo-List utilizing localstorage to store data. User's are able to keep track of the progress in Todo-List",
  //   project_DemoLink: "https://adhaghani.github.io/todo-list/",
  //   project_RepoLink: "https://github.com/adhaghani/todo-list"
  // },
  // {
  //   asset: {
  //     url: "/assets/project/notification.png",
  //     alt: "Notification Page"
  //   },
  //   development_Type: "Front-End",
  //   project_Name: "Notification Page",
  //   project_Timeline: "August 2024",
  //   project_Technologies: ["React.js", "SCSS", "framer-motion"],
  //   project_description:
  //     "A Simple notification page showcasing various development_Types of notification in a resuable react component with smooth animation.",
  //   project_DemoLink: "https://adhaghani.github.io/notificationpage/",
  //   project_RepoLink: "https://github.com/adhaghani/notificationpage"
  // },
  // {
  //   asset: {
  //     url: "/assets/project/advice.png",
  //     alt: "Advice Generator"
  //   },
  //   development_Type: "Front-End",
  //   project_Name: "NewsLetter Subscription Form",
  //   project_Timeline: "August 2024",
  //   project_Technologies: ["React.js", "SCSS", "framer-motion"],
  //   project_description:
  //     "A Newsletter subscription form that verifies the given email and update the users when subscribed.",
  //   project_DemoLink: "https://adhaghani.github.io/newslettersubs/",
  //   project_RepoLink: "https://github.com/adhaghani/newslettersubs"
  // },
  // {
  //   asset: {
  //     url: "/assets/project/advice.png",
  //     alt: "Advice Generator"
  //   },
  //   development_Type: "Front-End",
  //   project_Name: "FAQs Accordion",
  //   project_Timeline: "August 2024",
  //   project_Technologies: ["React.js", "SCSS", "framer-motion"],
  //   project_description:
  //     "A Frequently Asked Question Accordion Using reusable react component and framer motion for smooth animation.",
  //   project_DemoLink: "https://adhaghani.github.io/faqaccordion/",
  //   project_RepoLink: "https://github.com/adhaghani/faqaccordion"
  // },
  {
    asset: {
      url: "/assets/images/project/Room.png",
      alt: "Room E-Commerce",
    },
    development_Type: ["Full-Stack", "Front-End", "Back-End"],
    project_Name: "E-Commerce Platform",
    project_Timeline: "July 2024",
    project_Technologies: ["React.js", "PHP", "SCSS", "MySQL", "Chart.JS"],
    project_description:
      "An E-Commerce platform that showcases basic shopping features like checkout, adding product to card and many mores. Developed during my 4th semester for an assignment.",
    project_RepoLink: "https://github.com/adhaghani/roomecommerce",
  },

  {
    asset: {
      url: "/assets/images/project/Bank.png",
      alt: "Simple Bank System",
    },
    development_Type: ["Others"],
    project_Name: "Simple Bank System",
    project_Timeline: "December 2023",
    project_Technologies: [
      "JAVA",
      "Object Oriented Programming",
      "Data Structure",
    ],
    project_description:
      "A simple Banking application developed to demonstrate my abilities with handling Object Oriented Programming using Java. User are able to create account and do basic transaction like deposit, withdraw and transfer.",
    project_RepoLink: "https://github.com/adhaghani/SimpleBankingApplication",
  },
  {
    asset: {
      url: "/assets/images/project/SunnySide.png",
      alt: "SunnySide Landing Page",
    },
    development_Type: ["Front-End"],
    project_Name: "SunnySide Landing Page",
    project_Timeline: "June 2024",
    project_Technologies: ["HTML", "CSS", "JavaScript", "React.js", "SCSS "],
    project_description:
      "A simple landing page completed for task by FrontEnd Mentor. Showcasing my abilities to developed basic Landing Page for companies.",
    project_DemoLink: "https://adhaghani.github.io/SunnySideLandingPage/",
    project_RepoLink: "https://github.com/adhaghani/SunnySideLandingPage",
  },
  {
    asset: {
      url: "/assets/images/project/starbucks.png",
      alt: "Starbucks Landing Page",
    },
    development_Type: ["Front-End"],
    project_Name: "Starbucks Landing Page",
    project_Timeline: "December 2022",
    project_Technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Web Design",
    ],
    project_description:
      "My first ever Landing Page project, a copy of starbucks landing page. Developed to learn and understand the basics and fundamental of HTML, CSS and Javasript languages, which greatly helps me in the long run.",
    project_DemoLink: "https://adhaghani.github.io/starbuck-lp.github.io/",
    project_RepoLink: "https://github.com/adhaghani/starbuck-lp.github.io",
  },
  {
    project_Name: "Car DealerShip Application",
    development_Type: ["Others"],
    project_Timeline: "June 2023",
    project_Technologies: [
      "Java",
      "Object Oriented Programming",
      "Java Foundation",
    ],
    project_description:
      "A Car Dealership Application developed to increase understanding of OOP concepts. Contain objects like car, dealership and buyer.",
    project_RepoLink:
      "https://github.com/adhaghani/SimpleCarDealershipApplication",
  },
];
export {
  AboutPhotoGallery,
  Education,
  Work,
  Certificate,
  DesignProjects,
  DevelopmentProjects,
  Testimonials,
};
