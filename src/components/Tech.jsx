import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import Card from "./Card";

const Tech = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3.5 }}
      >
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div
        className="flex flex-row flex-wrap mt-10
  justify-center gap-10"
      >
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <Card title={technology.name} icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
