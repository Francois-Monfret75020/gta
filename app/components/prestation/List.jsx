"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ListItem = ({ text, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.a
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? "-100%" : "100%" }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : index % 2 === 0 ? "-100%" : "100%",
      }}
      transition={{ duration: 0.5 }}
      href={`#title-text-and-image-container${index + 1}`}
      className="flex items-center w-[19rem] md:w-[35rem] bg-white text-center h-[5.5rem] p-2 border border-gray-200 hover:bg-black hover:text-white hover:border-black rounded-md transition-colors"
    >
      <div className="text-2xl font-thin flex items-center justify-center w-12 md:w-32 h-12">
        {index + 1}
      </div>
      <div className="flex justify-center md:justify-center items-center w-full text-[15px] md:text-[19px] font-medium p-4">
        <p className="text flex">{text}</p>
      </div>
    </motion.a>
  );
};

const List = ({ title, textArray, src }) => {
  return (
    <div className="relative flex-col bg-white flex items-center justify-center p-3">
      <div className="relative flex flex-col p-4 h-full w-full items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <div className="bg-black p-6 h-auto sm:h-[100px] sm:w-[800px] md:w-[600px] md:text-[25px] text-[22px] uppercase font-normal text-center flex items-center justify-center relative mb-10 rounded-sm">
            <h2 className="text-white sub-title">{title}</h2>
          </div>
        </div>

        <div
          id="sub-container"
          className="flex flex-col w-full justify-center items-center h-full md:items-center relative mx-auto gap-y-4"
        >
          {textArray.map((text, index) => (
            <ListItem key={index} text={text} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
