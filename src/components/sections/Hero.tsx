import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  const heroSocials = [
    { label: "GitHub", url: config.hero.socialLinks.github },
    { label: "LinkedIn", url: config.hero.socialLinks.linkedin },
    { label: "Email", url: config.hero.socialLinks.email },
  ];

  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="relative z-10">
          <p className="text-white-100 mb-2 text-lg">{config.hero.role}</p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-4`}>
            {config.hero.heading}
          </p>
          <p className="text-white-100 mt-4 max-w-3xl text-[18px] leading-relaxed">
            {config.hero.subheading}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="bg-[#915EFF] text-white hover:bg-[#7c46ff] w-fit rounded-full px-8 py-3 text-[16px] font-semibold transition-colors"
            >
              {config.hero.ctaText}
            </a>
            <div className="flex flex-wrap gap-4 text-sm uppercase tracking-wide text-white-100">
              {heroSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
