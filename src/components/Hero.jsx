import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Sam"],
    loop: true,
    delaySpeed: 2000,
  });

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
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-3xl">{text}</span>
            <Cursor cursorColor="#395BBF" />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            Am a full stack software developer{" "}
            <br className="sm:block hidden" />
            and Blockchain Enthusiast
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div
        className="absolute xs:bottom-10 bottom-20 w-full
      flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl
           border-4 border-secondary flex 
           justify-center items-center p-2 "
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
