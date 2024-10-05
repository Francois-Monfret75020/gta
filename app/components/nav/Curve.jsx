import React from "react";
import { motion } from "framer-motion";

const Curve = () => {
  const initialPath = `M0 0 L${window.innerWidth} 0 Q${
    window.innerWidth / 2
  } 130 0 0`;
  const targetPath = `M0 0 L${window.innerWidth} 0 Q${
    window.innerWidth / 2
  } 0 0 0`;
  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1]},
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <svg className="absolute bottom-[-79px] h-[80px] w-full   stroke-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
        d={initialPath}
        fill="black"
      ></motion.path>
    </svg>
  );
};

export default Curve;
