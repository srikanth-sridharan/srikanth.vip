import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Namaste!",
  introduction:
    "I’m Srikanth Sridharan, Highly motivated and results-oriented Full Stack JavaScript Developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js).",
  description:
    "Seeking a challenging role in a dynamic environment where I can contribute my expertise and make a meaningful impact.",
  resumeLinkText: "Download Resume",
  resumeLink: "https://drive.google.com/file/d/1eOuY5_IU6JOgsFawz8JDIRV6hpVWryyN/view?usp=sharing",
};

export const PROJECTS = [
  {
    name: "Streamerzz",
    description: "Live stream management tool for content creators",
    image: projects1,
    link: "https://github.com/srikanth-sridharan",
  },
  {
    name: "NutriTrack",
    description: "Track your meals and calories with smart AI suggestions",
    image: projects2,
    link: "https://github.com/srikanth-sridharan",
  },
  {
    name: "HairRevive",
    description: "A platform for hair regrowth solutions powered by science",
    image: projects3,
    link: "https://github.com/srikanth-sridharan",
  },
  {
    name: "DevDeck",
    description:
      "Interactive dashboard for developers to track coding activity",
    image: projects4,
    link: "https://github.com/srikanth-sridharan",
  },
  {
    name: "FitConnect",
    description: "Fitness social network to connect athletes and trainers",
    image: projects5,
    link: "https://github.com/srikanth-sridharan",
  },
  {
    name: "WellNest",
    description: "A wellness app for mental and physical health improvement",
    image: projects6,
    link: "https://github.com/srikanth-sridharan",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a full-stack JavaScript developer with 9 years of experience in crafting engaging and user-friendly web applications. My journey began as a freelance developer, honing my skills in front-end technologies. I progressed to senior front-end roles, where I gained expertise in React.js and other cutting-edge frameworks.",
    "I am proficient in the MERN stack, leveraging MongoDB for data storage, Express.js for backend logic, React.js for dynamic user interfaces, and Node.js for server-side operations. I am also passionate about the emerging field of prompt engineering, exploring the potential of AI to enhance development workflows and create innovative solutions.",
    "I am a dedicated problem-solver with a strong work ethic and a continuous drive to learn and improve. I am eager to contribute my skills and experience to a challenging and rewarding role.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2023 — Now",
    title: "Senior Frontend Developer at Nvish Solutions Pvt. Ltd.",
    location: "Remote",
    description: [
      "Developing and maintaining high-performance, user-friendly applications using Gatsby.js and React.",
 "Building reusable UI components and libraries following best practices for maintainability and scalability.",
 "Integrating with GraphQL APIs and backend services to deliver seamless data fetching and updates.",
 "Ensuring code quality and maintainability through thorough testing, code reviews, and adherence to coding standards.",
 "Contributing to the development of accessibility-focused applications that meet WCAG guidelines.",
    ],
  },
  {
    yearRange: "2022 — 2023",
    title: "Frontend Developer at Megam Systems LLP",
    location: "Remote",
    description: [
      "Built and maintained high-quality, reusable UI components, adhering to best practices and industry standards.",
      "Successfully diagnosed and resolved complex front-end issues, ensuring the stability and reliability of Attune's banking platform.",
      "Actively participated in code reviews and knowledge sharing sessions to improve team development processes.",
    ],
  },
  {
    yearRange: "2015 — 2022",
    title: "Freelance Web Developer",
    location: "Remote",
    description: [
      "Successfully designed and developed visually appealing and functional websites using HTML, CSS, JavaScript, WordPress, and Shopify, ensuring optimal user experience and meeting client requirements.",
      "Effectively managed client relationships, proactively addressed technical issues, and provided timely support to ensure client satisfaction and website uptime.",
      "Effectively managed project timelines, resources, and client expectations, ensuring timely delivery of high-quality websites while adhering to project budgets and client specifications.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Kenzo Tanaka",
    title: "Lead Engineer, Silicon Valley Startup",
    feedback: "Srikanth Sridharan is a highly skilled and motivated full-stack developer. I was impressed by his ability to quickly grasp complex requirements and translate them into elegant and efficient code. His contributions to our project, particularly in building the backend API with Node.js and Express, were instrumental in our successful launch. He's a strong communicator and a valuable team player.",
    image: person1,
  },
  {
    name: "Oliver Davies",
    title: "CTO, Fintech Company",
    feedback:"I was fortunate to work with Srikanth on a critical project to modernize our legacy systems. His proficiency in MERN stack, especially his expertise in React for frontend development and MongoDB for data management, was crucial in delivering a robust and scalable solution. He consistently exceeded expectations with his dedication, problem-solving abilities, and proactive approach to challenges.",
    image: person2,
  },
  {
    name: "Matt Wither",
    title: "Lead Developer, The Amigo",
    feedback:"I had the pleasure of collaborating with Sri on a challenging e-commerce project. His expertise in MERN stack was invaluable. He demonstrated a strong understanding of React, Node.js, Express, and MongoDB, and effectively implemented solutions that improved user experience and system performance. His dedication and problem-solving skills made him a valuable asset to the team.",
    image: person3,
  },
  
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "hello@srikanth.vip",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/srikanth-sridharan/",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/devsrikanthsridharan/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Srikanth Sridharan. All rights reserved.`,
};
