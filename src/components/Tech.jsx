import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div
      className="flex flex-row flex-wrap mt-10
  justify-center gap-10"
    >
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
