"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "../../anim/preLoaderAnim";

const words = [
  "Bonjour 🥂",
  "Hello 🍸",
  "Ciao 🍷",
  "Olà 🍹",
  "Hallå 🥃",
  "Guten tag 🍻",
  "Aloha 🧉",
];

const svgStyles = {
  position: "absolute",
  top: "0",
  width: "100%",
  height: "calc(100% + 300px)",
};

const Preloader = ({ visited }) => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;

    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );

    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen bg-black fixed  text-white z-50 flex justify-center items-center"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex text-white text-[42px] items-center absolute z-10"
          >
            <span className="block w-[10px] h-[10px] bg-white rounded-full mr-[10px]"></span>
            {words[index]}
          </motion.p>
          <svg style={svgStyles}>
            <motion.path
              d={initialPath}
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
