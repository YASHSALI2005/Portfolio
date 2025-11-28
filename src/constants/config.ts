type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    role: string;
    heading: string;
    subheading: string;
    ctaText: string;
    socialLinks: {
      github: string;
      linkedin: string;
      email: string;
    };
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Yash Sali — Full-Stack Developer",
    fullName: "Yash Sali",
    email: "salirajesh7@gmail.com",
  },
  hero: {
    name: "Yash Sali",
    role: "Full-Stack Developer & IT Engineering Student",
    heading: "I build web apps, AI projects, and smart systems.",
    subheading:
      "I'm a final year IT engineering student and full-stack developer intern, focused on creating responsive web apps, real-time experiences, and intelligent systems using Next.js, Node.js, and AI/ML.",
    ctaText: "View my work",
    socialLinks: {
      github: "https://github.com/YASHSALI2005",
      linkedin: "https://www.linkedin.com/in/yashsali05",
      email: "mailto:salirajesh7@gmail.com",
    },
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm Yash Sali, a final-year IT engineering student and full-stack developer
      passionate about building meaningful digital products. I enjoy turning ideas into
      interactive and functional solutions—from scalable web apps and PWAs, to AI/ML systems
      and IoT projects. Recent work includes Clickk, a typing-driven productivity experience
      inspired by Cursor workflows, a deepfake detection model, a smart home automation
      system, and real-time WebSocket applications. I thrive across the stack: UI/UX,
      frontend architecture, backend services, APIs, databases, deployment, and workflow
      refinement.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
