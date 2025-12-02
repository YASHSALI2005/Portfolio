import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
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
  meta,
  smartHome,
  deepfake,
  clickk,
  travelplanner,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "Full-Stack Developer Intern",
    companyName: "Six-Month Internship",
    icon: meta,
    iconBg: "#383E56",
    date: "2025 – Present",
    points: [
      "Developing and maintaining full-stack features with Next.js, Node.js, and SQL backends.",
      "Designing and documenting APIs that connect responsive frontends with backend services.",
      "Building reusable components, elevating UI/UX, and improving performance across modules.",
      "Reviewing code, collaborating with teammates, and following best practices for version control.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Smart Home Automation Dashboard",
    description:
      "Control lights, fans, and appliances from one responsive dashboard with automation rules, telemetry, and real-time device feedback.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "iot", color: "orange-text-gradient" },
    ],
    image: smartHome,
    sourceCodeLink: "https://github.com/YASHSALI2005/SMART-HOME-AUTOMATION",
  },
  {
    name: "Deepfake Detection System",
    description:
      "An AI/ML pipeline that inspects uploaded video frames, extracts features, and flags potential deepfakes through a streamlined web interface.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machine-learning", color: "green-text-gradient" },
      // { name: "opencv", color: "pink-text-gradient" },
    ],
    image: deepfake,
    sourceCodeLink: "https://github.com/YASHSALI2005/DEEPFAKE-DETECTION-MODEL",
    liveDemoLink: "https://deepfake-detection-model-frontendd.onrender.com/",
  },
  {
    name: "TravelPlanner",
    description:
      "Responsive travel experience where users explore destinations, compare packages, and submit trip inquiries backed by a Node.js + MongoDB stack.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "pink-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
    ],
    image: travelplanner,
    sourceCodeLink: "https://github.com/YASHSALI2005/Travel-Planner-Website",
    liveDemoLink: "https://travel-planner-websitefrontend.vercel.app/",
  },
  {
    name: "Clickk — AI Powered Code Editor",
    description:
      "Clickk is an AI-powered command-style code editor that keeps your hands on the keyboard—type natural instructions, trigger workflows, and manage your workspace without traditional UI clicking.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "zustand", color: "pink-text-gradient" },
      { name: "shadcn-ui", color: "orange-text-gradient" },
    ],
    image: clickk,
    sourceCodeLink: "https://github.com/YASHSALI2005/CLICKK",
    liveDemoLink: "https://clickk-frontend.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
