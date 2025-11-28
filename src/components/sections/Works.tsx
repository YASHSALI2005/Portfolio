import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveDemoLink,
}) => {
  const openInNewTab = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
          <div
            className="relative w-full"
            style={{ aspectRatio: "16 / 9", minHeight: "230px" }}
          >
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-contain bg-black/30"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex items-start justify-end gap-2">
              {liveDemoLink && (
                <button
                  type="button"
                  onClick={() => openInNewTab(liveDemoLink)}
                  className="bg-white/10 text-white hover:bg-white/20 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors backdrop-blur"
                >
                  Live
                </button>
              )}
              <button
                type="button"
                onClick={() => openInNewTab(sourceCodeLink)}
                className="black-gradient flex h-10 w-10 items-center justify-center rounded-full"
                aria-label={`${name} source code`}
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </button>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
