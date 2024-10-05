"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import BgImgBtn from "./BgImgBtn";

const Card = ({ src, alt, description, buttonText, href }) => {
  const [linkEffect, setLinkEffect] = useState(false);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div
      id="card-container"
      className="flex flex-col w-full justify-center items-center mb-8"
    >
      <div
        ref={container}
        id="card"
        className="h-[400px] xl:[400px] w-4/5 flex justify-center"
      >
        <div
          id="image-container"
          className="w-full h-full flex relative overflow-hidden justify-center"
        >
          <motion.div
            id="iner"
            style={{ scale }}
            className="relative flex w-full h-full"
          >
            <Image
              src={src}
              alt={alt}
        fill
                 className="absolute inset-0 w-full h-full "
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30">
              <p className="text-white font-extralight text-2xl mb-8 text-center">
                {description}
              </p>
              <div
                onMouseEnter={() => setLinkEffect(true)}
                onMouseLeave={() => setLinkEffect(false)}
              >
                <BgImgBtn href={href} text={buttonText} event={linkEffect} className=""/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
