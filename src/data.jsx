import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpg";
import Work4 from "./assets/project-4.jpg";
import NkazimuloImg from "./assets/nkazimulo-holdings.jpg";
import CodeOrbitImg from "./assets/codeorbit.jpg";
import AirVoucherImg from "./assets/airvoucher.jpg";
import WillPhinImg from "./assets/willphin.jpg";


import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  { id: 1, title: "First Name : ", description: "Kgaogelo" },
  { id: 2, title: "Last Name : ", description: "Tshabalala" },
  { id: 3, title: "Nationality : ", description: "South African" },
  { id: 4, title: "Availability : ", description: "Open to new roles" },
  { id: 5, title: "Location : ", description: "Midrand, Johannesburg" },
  { id: 6, title: "Phone : ", description: "073 283 1206" },
  { id: 7, title: "Email : ", description: "fortunatekgaogelo@gmail.com" },
  { id: 8, title: "Languages : ", description: "English, Sepedi, isiZulu" },
];

export const stats = [
  { id: 1, no: "2.5+", title: "Years of <br /> Experience" },
  { id: 2, no: "6", title: "Featured <br /> Projects" },
  { id: 3, no: "2+", title: "Freelance <br /> Clients" },
  { id: 4, no: "3+", title: "Certificates <br /> Completed" },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Oct 2025 - Present",
    title: "Software Development Consultant <span> Trappist Systems </span>",
    desc: "Deliver changes on AirVoucher, a payments and remittance platform: investigate defects and data discrepancies across QA and production, and support live transaction workflows. Translate operational requirements into scoped software changes, then implement, test and verify them. Also contributed to AutoVisa, an AI-assisted application workflow, and to UI improvements for The Gal in the Middle.",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Jul 2025 - Present",
    title: "Founder, Freelance Software Consulting <span> CodeOrbit </span>",
    desc: "Provide software development and technical support to small businesses and independent clients alongside my main role: requirements gathering, building web applications and websites, and resolving production issues.",
  },
  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "May 2024 - Jun 2025",
    title: "Junior Software Developer <span> TradeShield </span>",
    desc: "Built and maintained full-stack features for an AI-powered trade credit risk platform using Angular, TypeScript, C#, ASP.NET Core, Entity Framework and SQL Server. Built and consumed REST APIs, investigated production incidents, fixed defects and improved SQL query performance in an Agile fintech team.",
  },
  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "May 2026",
    title: "Data Analytics Winter Intern <span> Scrummy </span>",
    desc: "Cleaned, transformed and analysed rugby performance data with Python, pandas, NumPy, SQL and APIs, and presented findings with visualisations.",
  },
  {
    id: 5,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Oct 2023 - Feb 2024",
    title: "Junior Mechanical Engineer <span> HiNova </span>",
    desc: "Supported mechanical/HVAC design, diagnostics and technical documentation on client projects.",
  },
  {
    id: 6,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Jan 2022 - Dec 2023",
    title: "Academic Editor, Science & Technology <span> Cactus Communications </span>",
    desc: "Edited engineering and scientific manuscripts for clarity and technical accuracy, across electrical, mechanical, civil and manufacturing engineering, robotics and machine learning.",
  },
  {
    id: 7,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Feb 2021 - Nov 2021",
    title: "Academic Tutor: Engineering Drawing <span> Wits University </span>",
    desc: "Tutored first-year Engineering Drawing students through marked tutorials, feedback and online consultations, including Autodesk and Solid Edge.",
  },
  {
    id: 8,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Expected June 2027",
    title: "BSc Engineering (Mechanical) <span> University of the Witwatersrand </span>",
    desc: "Three modules outstanding, completed alongside full-time work. Research project: semantic segmentation for autonomous vehicles.",
  },
  {
    id: 9,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "The Complete Web Development Bootcamp <span> Udemy </span>",
    desc: "HTML, CSS, JavaScript, React, Node.js, Express, APIs, MongoDB and SQL.",
  },
  {
    id: 10,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Deep Learning for Image Segmentation with Python and PyTorch <span> Udemy </span>",
    desc: "Convolutional neural networks for semantic segmentation using Python and PyTorch.",
  },
];

export const skills = [
  { id: 1, title: "Backend", items: ["C#", ".NET / ASP.NET Core", "Entity Framework Core", "REST APIs", "Python"] },
  { id: 2, title: "Frontend", items: ["Angular", "TypeScript", "JavaScript", "React / Next.js", "HTML & CSS"] },
  { id: 3, title: "Data", items: ["SQL Server", "PostgreSQL", "Azure SQL", "SQLite"] },
  { id: 4, title: "Cloud & Tools", items: ["Azure", "Git & GitHub", "GitHub Actions", "Docker", "Postman"] },
];

export const portfolio = [
  {
    id: 1,
    img: NkazimuloImg,
    title: "Nkazimulo Holdings",
    category: "Web Applications",
    description:
      "Student accommodation platform for Braamfontein with apartments, studios and shared rooms, per-room and per-bed pricing, map search and an owner dashboard.",
    technologies: ["Angular 20", "ASP.NET Core 8", "PostgreSQL", "Tailwind CSS"],
    link: "https://www.nkazimuloproperties.co.za",
    linkLabel: "Live Site",
    details: [
      {
        title: "Focus",
        desc: "Listing search and filters, owner listing management and admin approval.",
      },
      {
        title: "Role",
        desc: "Full-stack development and product implementation.",
      },
    ],
  },
  {
    id: 2,
    img: AirVoucherImg,
    title: "AirVoucher",
    category: "Web Applications",
    description:
      "Prepaid airtime, data and voucher platform for South African retailers, with point-of-sale terminals, retailer sign-up and an admin portal for inventory, commissions and funds.",
    technologies: ["Next.js 15", "TypeScript", "AWS Lambda", "Aurora PostgreSQL"],
    link: "https://retailer.arv-shop.com/signup?from=terminal",
    linkLabel: "Live Site",
    details: [
      {
        title: "Focus",
        desc: "Supplier integrations, terminal sales, retailer onboarding and admin tooling.",
      },
      {
        title: "Role",
        desc: "Full-stack development across the terminal, admin portal and serverless API.",
      },
    ],
  },
  {
    id: 3,
    img: Work1,
    title: "Semantic Segmentation Research",
    category: "Data & AI",
    description:
      "Research into how changing illumination conditions affect semantic segmentation for autonomous vehicle applications.",
    technologies: ["Python", "Deep Learning", "OpenCV", "Jupyter"],
    link: "https://github.com/Kgaogelo072/Deep-Learning-Python-Research",
    linkLabel: "Code",
    details: [
      {
        title: "Focus",
        desc: "Model robustness under different lighting conditions.",
      },
      {
        title: "Application",
        desc: "Computer vision for autonomous vehicle perception.",
      },
    ],
  },
  {
    id: 4,
    img: CodeOrbitImg,
    title: "CodeOrbit",
    category: "Other",
    description:
      "Animated marketing site for a software consultancy, presenting services and pricing with a contact form that sends enquiries by email.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
    link: "https://www.codeorbit.co.za",
    linkLabel: "Live Site",
    details: [
      {
        title: "Focus",
        desc: "Service positioning, responsive design and lead generation.",
      },
      {
        title: "Role",
        desc: "Design, development and deployment.",
      },
    ],
  },
  {
    id: 5,
    img: WillPhinImg,
    title: "WillPhin",
    category: "Other",
    description:
      "Website for a bookkeeping, accounting, payroll and VAT firm, with client-editable services, testimonials and an invite-only client review flow.",
    technologies: ["WordPress", "PHP", "ACF", "JavaScript"],
    link: "https://willphin.co.za",
    linkLabel: "Live Site",
    details: [
      {
        title: "Focus",
        desc: "Custom theme, content the client can manage in wp-admin, and lead generation.",
      },
      {
        title: "Role",
        desc: "Theme design, development and ongoing maintenance.",
      },
    ],
  },
  {
    id: 6,
    img: Work4,
    title: "Eminence Books",
    category: "E-commerce",
    description:
      "Online bookstore experience designed around a clean product catalogue, intuitive browsing and streamlined purchasing.",
    technologies: ["WordPress", "WooCommerce", "Elementor", "Payments"],
    link: "https://github.com/Kgaogelo072/Eminence",
    linkLabel: "Code",
    details: [
      {
        title: "Focus",
        desc: "Book discovery, catalogue presentation and e-commerce flow.",
      },
      {
        title: "Role",
        desc: "Store setup, interface design and implementation.",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
