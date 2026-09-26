// All site content lives here — edit this file, not the components.
import chestxrayai from './assets/chestxrayai.webp';
import clickk from './assets/clickk.webp';
import deepfake from './assets/deepfake.webp';
import enpointe from './assets/enpointe.png';
import smartHome from './assets/smart.webp';
import travelplanner from './assets/travelplanner.webp';

export const profile = {
  name: 'Yash Sali',
  role: 'Machine Learning Engineer',
  location: 'Mumbai',
  quote: { text: 'The best way to predict the future is to invent it.', by: 'Alan Kay' },
  tagline:
    'I build production ML and GenAI systems — from training and evaluating models to shipping the APIs they run behind.',
  email: 'salirajesh7@gmail.com',
  github: 'https://github.com/YASHSALI2005',
  githubUser: 'YASHSALI2005',
  linkedin: 'https://www.linkedin.com/in/yashsali05',
  resume: '/resume.pdf', // PDF link (e.g. /resume.pdf in public/ or a Google Drive link); nav link appears once set
};

export const experiences = [
  {
    title: 'Machine Learning Engineer',
    company: 'EnPointe IT Services Pvt. Ltd.',
    logo: enpointe,
    date: 'Jun 2026 — Present',
    points: [
      'Full-time role offered on the strength of my internship work.',
      'Building AI / ML and Generative AI solutions for production use.',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'EnPointe IT Services Pvt. Ltd.',
    logo: enpointe,
    date: 'Feb 2026 — Jun 2026',
    points: [
      'Built and fine-tuned custom ML models, including wake-word detection and time-series forecasting.',
      'Built and deployed RAG pipelines that bring LLMs into existing web applications.',
      'Automated data extraction and preprocessing to build training and validation datasets.',
      'Worked with the full-stack team to take models from research to production APIs.',
    ],
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'EnPointe IT Services Pvt. Ltd.',
    logo: enpointe,
    date: 'Jun 2025 — Jan 2026',
    points: [
      'Built the website side of the Vrott Dashboard and helped take it live.',
      'Developed full-stack features with Next.js, React, Node.js and Express, and designed the REST APIs behind them.',
      'Built reusable components and improved UI/UX and performance across modules.',
    ],
  },
];

export const education = {
  degree: 'B.E. Information Technology',
  school: 'A. C. Patil College of Engineering, Navi Mumbai',
  date: 'Graduated 2026',
  highlights: [
    {
      text: 'IEEE paper: “Clickk: An AI-Powered Code Editor for Intelligent Debugging and Automated Error Resolution”, presented at IC3ET 2026',
      href: 'https://ieeexplore.ieee.org/document/11467195',
    },
    { text: 'HACKUP 2026 — NeuralWatch, real-time UPI fraud detection; top 45 of 250+ teams' },
  ],
};

// Ordered strongest ML/AI work first; web projects last.
export const projects = [
  {
    name: 'Clickk',
    tagline: 'AI debugging assistant · IEEE published',
    description:
      'Finds bugs and proposes fixes inside the editor. Static analysis (file-structure parsing and AST checks) locates syntax and logic errors; an LLM — Llama 3.2 via Ollama — explains them and suggests context-aware fixes. Published at IEEE IC3ET 2026.',
    tags: ['LLMs', 'Llama 3.2', 'Ollama', 'AST analysis', 'React', 'Node.js'],
    image: clickk,
    badge: '$ clickk fix --ai',
    source: 'https://github.com/YASHSALI2005/CLICKK',
    live: 'https://clickk-frontend.onrender.com/',
    paper: 'https://ieeexplore.ieee.org/document/11467195',
  },
  {
    name: 'Deepfake Detection',
    tagline: '92% accuracy on manipulated faces',
    description:
      'Flags deepfake video by analysing faces frame by frame. OpenCV extracts and prepares frames; an EfficientNet CNN built on pre-trained weights classifies them, reaching 92% accuracy. Served through a web app.',
    tags: ['Deep learning', 'EfficientNet', 'CNN', 'OpenCV', 'Python'],
    image: deepfake,
    badge: '● FAKE · 92% accuracy',
    source: 'https://github.com/YASHSALI2005/DEEPFAKE-DETECTION-MODEL',
    live: 'https://deepfake-detection-model-frontendd.onrender.com/',
  },
  {
    name: 'Chest X-Ray AI',
    tagline: 'Multi-label disease classification',
    description:
      'Flags several possible conditions in one chest X-ray. DenseNet121 fine-tuned on CheXpert-style labels with a BCE-with-logits loss and evaluated with macro-F1; the web app exposes the decision threshold so you can trade recall for precision.',
    tags: ['PyTorch', 'DenseNet121', 'Multi-label', 'Python', 'React'],
    image: chestxrayai,
    badge: 'DenseNet121 · threshold 0.50',
    source:
      'https://github.com/YASHSALI2005/Chest-X-Ray-Multi-Label-Disease-Classification-using-Deep-Learning',
    live: 'https://chest-x-ray-multi-label-disease.onrender.com/',
  },
  {
    name: 'TravelPlanner',
    tagline: 'Full-stack trip discovery',
    description:
      'Destination search, package comparison and trip inquiries, backed by a REST API on Node.js, Express and MongoDB.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: travelplanner,
    badge: '✈ BOM → GOI',
    source: 'https://github.com/YASHSALI2005/Travel-Planner-Website',
    live: 'https://travel-planner-websitefrontend.vercel.app/',
  },
  {
    name: 'Smart Home Dashboard',
    tagline: 'IoT automation',
    description:
      'One dashboard to control lights, fans and appliances, with automation rules, telemetry and real-time device feedback.',
    tags: ['IoT', 'React', 'Node.js', 'MongoDB'],
    image: smartHome,
    badge: '● 6 lights on',
    source: 'https://github.com/YASHSALI2005/SMART-HOME-AUTOMATION',
  },
];

// Grouped by what I can do, with the concrete techniques behind each — not a tool list.
export const skills: Record<string, string[]> = {
  'Machine learning': [
    'PyTorch',
    'CNNs (EfficientNet, DenseNet)',
    'Time-series forecasting',
    'Wake-word detection',
    'Fine-tuning',
    'Evaluation (F1, accuracy)',
    'OpenCV',
  ],
  'GenAI & LLMs': [
    'RAG pipelines',
    'LLM integration',
    'Llama 3.2 / Ollama',
    'AST-based code analysis',
  ],
  Data: ['Python', 'Data extraction', 'Preprocessing & dataset building', 'MySQL', 'MongoDB'],
  Shipping: [
    'Flask',
    'REST APIs',
    'Node.js / Express',
    'React / Next.js',
    'Docker',
    'Git',
    'Vercel / Render',
  ],
};
