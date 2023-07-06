import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import React from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_code_link1,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 3.5 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#002C35] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 gap-1 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="blue1-gradient w-10 h-10 rounded-full
flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                slt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link1, "_blank")}
              className="blue1-gradient w-10 h-10 rounded-full
flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                slt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3.5 }}
      >
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}> Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="mt-3 text-secondary text-[17px]
max-w-3xl leading-[30px]"
        >
          This Projects showcase my skills and experience through real world
          example of my work. Each project is described with links to code
          repositories and live demos in it.
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

export default SectionWrapper(Works, "projects");
