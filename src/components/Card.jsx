import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, icon }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3.5 }}
        className="items-center justify-center m-5 sm:m-0 text-center  "
      >
        <img src={icon} alt="icon" />
        <p className="text-white">{title}</p>
      </motion.div>
    </div>
  );
};

export default Card;
