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
  {
    id: 1,
    title: "First Name : ",
    description: "Kgaogelo",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Tshabala",
  },

  {
    id: 3,
    title: "Age : ",
    description: "31 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "South Africa",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Midrand, Johannesburg",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "072 8945 924",
  },

  {
    id: 8,
    title: "Email : ",
    description: "Fortunatekgaogelo@gmail.com",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "English, Sepedi, isiZulu",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "3+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "2+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "3+",
    title: " Certifactes <br /> completed",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "May 2024 - June 2025",
    title: "Junior Software Developer <span> Tradeshield </span>",
    desc: "Contributing to the development of an AI-powered trade credit risk platform, helping businesses automate risk evaluations and reduce bad debt.Collaborating in cross-functional Agile teams with data scientists, engineers, and credit experts to deliver intelligent features and UI components.Supporting improvements in trade credit processes that led to measurable outcomes such as 75% faster credit approvals and 120% sales growth in the manufacturing sector. Gaining experience in full-stack development with a focus on Angular, .NET Core, and REST APIs within a fast-paced fintech startup. Part of a team funded by Vumela and Edge Growth, which secured $822K in seed funding to scale its AI platform.",
  },
    {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: " July 2025 - Present",
    title: "Founder - Softwarer Development Consulting<span>Code Orbit </span>",
    desc: "I provide software consulting and technical support services to small businesses and independent clients, delivering reliable and scalable solutions tailored to their needs. My role involves investigating and resolving production issues through SQL queries, log analysis, debugging tools, and API trace inspection to ensure system stability and performance. I also design and develop scalable applications using Angular, .NET, SQL Server, and Azure services, while conducting requirements-gathering sessions to translate business needs into clear, actionable technical tasks that drive effective implementation and measurable outcomes.",
  },
  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Sep 2021 - Sep 2023",
    title: "Editor of Science and Technology <span> Cactus Communications </span>",
    desc: "Editing of Scientific manuscripts from world class authors and academic journals for grammar and logic. Subject matter areas: Electrical engineering and electronics, manufacturing, robotics, mechanical engineering, civil engineering, and machine learning",
  },

  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Feb 2021 - Nov 2021",
    title: "Academic Tutor: Engineering drawing <span> Wits University </span>",
    desc: "Served as an Academic Tutor for Engineering Drawing at Wits University, supporting first-year students through marked tutorials, detailed academic feedback, and structured online consultations. Assisted students in developing a strong foundation in technical drawing concepts and industry-standard tools, including Autodesk and Solid Edge, while improving their problem-solving skills, accuracy, and overall academic performance.",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2026",
    title: "BSc Mechanical Engineering <span> University of the Witwatersrand </span>",
    desc: "Application of mechanicanics, thermodynamics, engineering mathematics, fluid mechanicals, and mechatronics principles to solve complex, open-ended problems. Completed nearly all course requirements; only 3 modules outstanding due to financial challenges.",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Complete Web Development Bootcamp Certificate of Completion <span> Udemy </span>",
    desc: "Online courses and projects using HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, APIs, C#, entity framework, Angular, Express.js, MongoDB, and SQL",
  },

  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Deep Learning for Image Segmentation with Python and Pytorch <span> Udemy </span>",
    desc: "Application of Convolutional Neural Networks for Semantic Segmentation Applications using Python and Pytorch",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "70",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "70",
  },

  {
    id: 3,
    title: "Css",
    percentage: "70",
  },

  {
    id: 4,
    title: "Angular",
    percentage: "70",
  },

  {
    id: 5,
    title: "React",
    percentage: "70",
  },

  {
    id: 6,
    title: "C#",
    percentage: "80",
  },

  {
    id: 7,
    title: ".Net",
    percentage: "60",
  },

  {
    id: 8,
    title: "Node.js",
    percentage: "40",
  },

  {
    id: 9,
    title: "Express.js",
    percentage: "40",
  },

  {
    id: 10,
    title: "SQL",
    percentage: "60",
  },

  {
    id: 11,
    title: "Python",
    percentage: "60",
  },
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
