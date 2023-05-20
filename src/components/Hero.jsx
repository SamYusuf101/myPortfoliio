import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Computers } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0
      top-[120px] max-w-8xl mx-auto flex flex-row items-start
      gap-5`}
      >
        <div className="flex justify-center items-center flex-col mt-5">
          <div className="w-5 h-5 rounded-full bg-[#395BBF]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
