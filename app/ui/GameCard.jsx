"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CtaBtn from "./CtaBtn";

const GameCard = ({ title, text, initialX, src }) => {
  const refCard = useRef(null);
  const isInView = useInView(refCard, { once: true });

  return (
    <motion.div
      ref={refCard}
      className="lg:w-[25%] w-[80%]"
      initial={{ x: initialX }}
      animate={isInView ? { x: 0 } : { x: initialX }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="relative w-full h-96 rounded-md overflow-hidden shadow-xl">
        <img
          src={src}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex top-0 left-0 items-center md:min-h-[7.5rem] right-0 p-4 bg-black bg-opacity-50 text-white">
          <div className="flex flex-col gap-y-4 w-[50%]">
            {" "}
            <h3 className="font-bold text-xl">{title}</h3>
            <p className="text-base font-roboto">{text}</p>
          </div>
          <div className="flex  justify-end items-center h-full w-[50%]">
            <CtaBtn text="CHOISIR" className="w-[10%]" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center"></div>
    </motion.div>
  );
};

export default GameCard;
