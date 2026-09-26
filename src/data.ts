// All site content lives here — edit this file, not the components.
import chestxrayai from "./assets/chestxrayai.png";
import clickk from "./assets/clickk.jpg";
import deepfake from "./assets/deepfake.jpg";
import smartHome from "./assets/smart.webp";
import travelplanner from "./assets/travelplanner.png";

export const profile = {
  name: "Yash Sali",
  role: "Full-Stack Developer",
  location: "India",
  email: "salirajesh7@gmail.com",
  github: "https://github.com/YASHSALI2005",
  githubUser: "YASHSALI2005",
  linkedin: "https://www.linkedin.com/in/yashsali05",
  about: [
    "Final-year IT engineering student and full-stack developer intern.",
    "I build web apps, AI/ML systems and IoT projects — from UI and APIs to databases and deployment.",
    "Currently shipping features with Next.js, Node.js and SQL.",
  ],
};

export const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "Six-Month Internship",
    date: "2025 — Present",
    points: [
      "Developing and maintaining full-stack features with Next.js, Node.js, and SQL backends.",
      "Designing and documenting APIs that connect responsive frontends with backend services.",
      "Building reusable components, elevating UI/UX, and improving performance across modules.",
    ],
  },
];

export const projects = [
  {
    name: "Clickk",
    tagline: "AI-powered code editor",
    description:
      "A command-style editor that keeps your hands on the keyboard — type natural instructions, trigger workflows, and manage your workspace without clicking.",
    tags: ["React", "TypeScript", "Zustand", "shadcn/ui"],
    image: clickk,
    source: "https://github.com/YASHSALI2005/CLICKK",
    live: "https://clickk-frontend.onrender.com/",
  },
  {
    name: "Chest X-Ray AI",
    tagline: "Multi-label disease classification",
    description:
      "Upload a chest X-ray and a PyTorch DenseNet121 model flags likely conditions, with an interactive preview and threshold control.",
    tags: ["React", "PyTorch", "Python"],
    image: chestxrayai,
    source:
      "https://github.com/YASHSALI2005/Chest-X-Ray-Multi-Label-Disease-Classification-using-Deep-Learning",
    live: "https://chest-x-ray-multi-label-disease.onrender.com/",
  },
  {
    name: "Deepfake Detection",
    tagline: "Video forensics pipeline",
    description:
      "Inspects uploaded video frames, extracts features and flags likely deepfakes through a streamlined web interface.",
    tags: ["Python", "Machine Learning"],
    image: deepfake,
    source: "https://github.com/YASHSALI2005/DEEPFAKE-DETECTION-MODEL",
    live: "https://deepfake-detection-model-frontendd.onrender.com/",
  },
  {
    name: "TravelPlanner",
    tagline: "Trip discovery & booking",
    description:
      "Explore destinations, compare packages and send trip inquiries, backed by a Node.js + MongoDB API.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: travelplanner,
    source: "https://github.com/YASHSALI2005/Travel-Planner-Website",
    live: "https://travel-planner-websitefrontend.vercel.app/",
  },
  {
    name: "Smart Home Dashboard",
    tagline: "IoT automation",
    description:
      "Control lights, fans and appliances from one dashboard with automation rules, telemetry and real-time device feedback.",
    tags: ["React", "Node.js", "MongoDB", "IoT"],
    image: smartHome,
    source: "https://github.com/YASHSALI2005/SMART-HOME-AUTOMATION",
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ["TypeScript", "JavaScript", "React", "Next.js", "Redux", "Tailwind CSS", "Three.js"],
  Backend: ["Node.js", "Express", "MongoDB", "SQL", "Python"],
  "AI / ML": ["PyTorch", "Machine Learning"],
  Tools: ["Git", "Docker", "Figma"],
};
