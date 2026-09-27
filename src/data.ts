// All site content lives here — edit this file, not the components.
import chestxrayai from './assets/chestxrayai.webp';
import clickk from './assets/clickk.webp';
import deepfake from './assets/deepfake.webp';
import enpointe from './assets/enpointe.png';
import scheduler from './assets/scheduler.webp';

export const profile = {
  name: 'Yash Sali',
  role: 'Machine Learning Engineer',
  location: 'Mumbai, India',
  quote: { text: 'The best way to predict the future is to invent it.', by: 'Alan Kay' },
  tagline:
    'I build production ML and GenAI systems — from training and evaluating models to shipping the APIs they run behind.',
  email: 'salirajesh7@gmail.com',
  github: 'https://github.com/YASHSALI2005',
  githubUser: 'YASHSALI2005',
  linkedin: 'https://www.linkedin.com/in/yashsali05',
  // Bump ?v= whenever the PDF is replaced, so browsers don't keep showing a cached old copy.
  resume: '/Yash-Sali-Resume.pdf?v=2026-09-26',
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
      'Owning work end to end — from data and model development to the APIs that serve models.',
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
      'Automated data extraction and preprocessing for training datasets, and worked with the full-stack team to take models to production APIs.',
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
  grade: 'CGPA 8.20',
  school: 'A. C. Patil College of Engineering, Navi Mumbai',
  date: 'Graduated 2026',
  highlights: [
    {
      text: 'IEEE paper: “Clickk: An AI-Powered Code Editor for Intelligent Debugging and Automated Error Resolution”, presented at IC3ET 2026',
      href: 'https://ieeexplore.ieee.org/document/11467195',
    },
    { text: 'HACKUP 2026 — NeuralWatch, real-time UPI fraud detection; top 45 of 250+ teams' },
  ],
  schooling: [
    {
      title: 'HSC (12th Grade)',
      school: 'D. G. Tatkare College, Kolad, Maharashtra',
      date: '2022',
    },
    {
      title: 'SSC (10th Grade)',
      school: 'D. G. Tatkare College, Kolad, Maharashtra',
      date: '2020',
    },
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
    accent: 'from-cyan-300 via-sky-500 to-blue-700',
    source: 'https://github.com/YASHSALI2005/CLICKK',
    live: 'https://clickk-frontend.onrender.com/',
    paper: 'https://ieeexplore.ieee.org/document/11467195',
  },
  {
    // Client work at EnPointe — private repo, so no code/live link and no client names or figures.
    name: 'AI Movie Scheduler',
    tagline: 'Production ML for cinema scheduling',
    description:
      'Predicts the next day’s show schedule for a cinema chain: LightGBM occupancy and quantile models score candidate sessions, and a worker pipeline (extract → score → schedule → publish) serves them through a multi-tenant API that each cinema pulls from.',
    tags: ['LightGBM', 'Forecasting', 'FastAPI', 'PostgreSQL', 'Python'],
    image: scheduler,
    badge: '▶ 91% predicted occupancy',
    accent: 'from-indigo-300 via-violet-500 to-fuchsia-700',
  },
  {
    name: 'Deepfake Detection',
    tagline: '92% accuracy on manipulated faces',
    description:
      'Flags deepfake video by analysing faces frame by frame. OpenCV extracts and prepares frames; an EfficientNet CNN built on pre-trained weights classifies them, reaching 92% accuracy. Served through a web app.',
    tags: ['Deep learning', 'EfficientNet', 'CNN', 'OpenCV', 'Python'],
    image: deepfake,
    badge: '● FAKE · 92% accuracy',
    accent: 'from-violet-300 via-indigo-500 to-indigo-800',
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
    accent: 'from-emerald-300 via-teal-500 to-slate-800',
    source:
      'https://github.com/YASHSALI2005/Chest-X-Ray-Multi-Label-Disease-Classification-using-Deep-Learning',
    live: 'https://chest-x-ray-multi-label-disease.onrender.com/',
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
