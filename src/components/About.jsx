import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="pt-10 xs:w-[250px] w-full ">
      <motion.div
        className="w-full green-pink-gradient p-[1px]
      rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5
        px-12 min-h-[220px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3
            className="text-white text-[20px] font-bold
          text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3.5 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="mt-4 text-secondary
      text-[17px] max-w-3xl leading-[30px] "
      >
        I'm a software developer specializing in building (and occasionally
        designing) exceptional digital experiences. I have a B.Sc in Computer
        Science with experience in javascript and react. I have developed
        Websites and Chatbots for various businesses. Currently am focused on
        building responsive web/mobile applications while learning blockchain
        technologies.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 pt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
