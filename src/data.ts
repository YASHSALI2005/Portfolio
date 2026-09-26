// All site content lives here — edit this file, not the components.
import chestxrayai from './assets/chestxrayai.png';
import clickk from './assets/clickk.jpg';
import deepfake from './assets/deepfake.jpg';
import smartHome from './assets/smart.webp';
import travelplanner from './assets/travelplanner.png';

export const profile = {
  name: 'Yash Sali',
  role: 'Machine Learning Engineer',
  location: 'Mumbai',
  tagline: 'I build intelligent systems, end to end — from models to the apps around them.',
  email: 'salirajesh7@gmail.com',
  github: 'https://github.com/YASHSALI2005',
  githubUser: 'YASHSALI2005',
  linkedin: 'https://www.linkedin.com/in/yashsali05',
  about: [
    'Machine Learning Engineer at EnPointe IT Services, building AI and Generative AI solutions.',
    'Started out in full-stack web development, so I ship models end to end — from data and training to APIs and UI.',
    'IT engineering graduate, A. C. Patil College of Engineering. Co-author of an IEEE paper on AI-assisted debugging.',
  ],
};

export const experiences = [
  {
    title: 'Machine Learning Engineer',
    company: 'EnPointe IT Services Pvt. Ltd.',
    date: 'Jun 2026 — Present',
    points: [
      'Full-time role offered on the strength of my internship work.',
      'Building AI / ML and Generative AI solutions for production use.',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'EnPointe IT Services Pvt. Ltd.',
    date: 'Feb 2026 — Jun 2026',
    points: ['Worked on real-world, data-driven ML projects with the AI team.'],
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'EnPointe IT Services Pvt. Ltd.',
    date: '2025',
    points: [
      'Built the website side of the Vrott Dashboard and helped take it live.',
      'Developed full-stack features with Next.js, Node.js and SQL backends, and documented the APIs behind them.',
      'Built reusable components and improved UI/UX and performance across modules.',
    ],
  },
];

export const education = {
  degree: 'B.E. Information Technology',
  school: 'A. C. Patil College of Engineering, Navi Mumbai',
  date: 'Graduated 2026',
  highlights: [
    'Academic Excellence Award — 3rd rank in IT department (2024–25).',
    'IEEE paper: “Clickk: An AI-Powered Code Editor for Intelligent Debugging and Automated Error Resolution”, presented at IC3ET 2026.',
    'HACKUP 2026 — NeuralWatch, real-time UPI fraud detection; top 45 of 250+ teams.',
  ],
};

export const projects = [
  {
    name: 'Clickk',
    tagline: 'AI-powered code editor',
    description:
      'A command-style editor that keeps your hands on the keyboard — type natural instructions, trigger workflows, and manage your workspace without clicking.',
    tags: ['React', 'TypeScript', 'Zustand', 'shadcn/ui'],
    image: clickk,
    source: 'https://github.com/YASHSALI2005/CLICKK',
    live: 'https://clickk-frontend.onrender.com/',
  },
  {
    name: 'Chest X-Ray AI',
    tagline: 'Multi-label disease classification',
    description:
      'Upload a chest X-ray and a PyTorch DenseNet121 model flags likely conditions, with an interactive preview and threshold control.',
    tags: ['React', 'PyTorch', 'Python'],
    image: chestxrayai,
    source:
      'https://github.com/YASHSALI2005/Chest-X-Ray-Multi-Label-Disease-Classification-using-Deep-Learning',
    live: 'https://chest-x-ray-multi-label-disease.onrender.com/',
  },
  {
    name: 'Deepfake Detection',
    tagline: 'Video forensics pipeline',
    description:
      'Inspects uploaded video frames, extracts features and flags likely deepfakes through a streamlined web interface.',
    tags: ['Python', 'Machine Learning'],
    image: deepfake,
    source: 'https://github.com/YASHSALI2005/DEEPFAKE-DETECTION-MODEL',
    live: 'https://deepfake-detection-model-frontendd.onrender.com/',
  },
  {
    name: 'TravelPlanner',
    tagline: 'Trip discovery & booking',
    description:
      'Explore destinations, compare packages and send trip inquiries, backed by a Node.js + MongoDB API.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: travelplanner,
    source: 'https://github.com/YASHSALI2005/Travel-Planner-Website',
    live: 'https://travel-planner-websitefrontend.vercel.app/',
  },
  {
    name: 'Smart Home Dashboard',
    tagline: 'IoT automation',
    description:
      'Control lights, fans and appliances from one dashboard with automation rules, telemetry and real-time device feedback.',
    tags: ['React', 'Node.js', 'MongoDB', 'IoT'],
    image: smartHome,
    source: 'https://github.com/YASHSALI2005/SMART-HOME-AUTOMATION',
  },
];

export const skills: Record<string, string[]> = {
  'AI / ML': ['Python', 'PyTorch', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Flask'],
  Frontend: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Redux', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Java'],
  Tools: ['Git', 'Docker', 'Figma'],
};
