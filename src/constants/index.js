import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bar_ilan,
  dcentralab,
  school,
  crypto_jungle,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "BlockChain Developer",
    icon: web,
  },
  {
    title: "Solidity Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web3 Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Applied Mathematics Degree",
    company_name: "Bar-Ilan University",
    icon: bar_ilan,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2025",
    points: [
      "Completed 144 academic credits in Applied Mathematics with an 82 average at Bar-Ilan University.",
      "Built 30+ efficient algorithms for dynamic programming, pathfinding and optimization problems.",
      "I studied many areas in math, computer science, physics, statistics, probability and related subjects.",
    ],
  },
  {
    title: "Blockchain Expert Certificate",
    company_name: "Crypto Jungle & BDCC",
    icon: crypto_jungle,
    iconBg: "#383E56",
    date: "Jan 2024 - Nov 2024",
    points: [
      "Completed a 10-month course on Blockchain and Crypto technologies, led by top industry figures.",
      "Researched and reported a 24-page document analyzing company fundamentals in the industry.",
      "Got a perfect final score of 100 on both the test and research assignments – the highest in the class.",
    ],
  },
  {
    title: "Physics & Computer Science Bagrut",
    company_name: "Shimon Ben Zvi High School",
    icon: school,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Sep 2024",
    points: [
      "Scored 100 in mathematics and specialized in Physics and Computer Science in the last 4 years.",
      "I volunteered to teach students in 9th-12th grade mathematics, physics and computer science for free.",
    ],
  },
  {
    title: "Junior Backend & Blockchain Developer",
    company_name: "DcentraLab",
    icon: dcentralab,
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Refactored the smart contracts and backend repositories to increase the product efficiency by +40%.",
      "Responsible for developing, maintaining, and testing functions in Python, Solidity and JavaScript.",
      "Optimized AWS Lambda functions and DB operations, leading to saving company time & money.",
      "Worked with over 900 AWS Lambda functions, 40+ S3 buckets, and 150+ large database tables.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Last Tank Standing",
    description:
      "A fully working game in 1 file with Python using PyGame, I built the whole game without using AI, filled it with music, UI, animations, sandbox and level design tools and more.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Game Design",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/OmerKarp/Last_Tank_Standing/",
  },
  {
    name: "LUCK Token",
    description:
      "Fully working casino based on my token 'LUCK', with smart contracts deployed on the Ethereum testnet, integrated with Chainlink VRF to ensure randomness in casino games.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/OmerKarp/LuckToken/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
