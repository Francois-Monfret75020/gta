"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const HeroPresta = ({ src, height, text, alt, info }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);


  return (
    <div ref={ref} className="relative h-[70vh]" style={{ height: height }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        priority
        quality={100}
      />
      {info && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
      {text && (
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute flex flex-col items-center justify-center gap-y-10 text-center h-full w-full -bottom-5"
          style={{
            textShadow:
              "0.5px 0.5px 0 gray, -0.5px -0.5px 0 gray, 0.5px -0.5px 0 gray, -0.5px 0.5px 0 gray",
          }}
        >
          <h2 className="title-info">Bar cocktails Event</h2>
          <h3 className="text-info">Les spécialistes du bar mobile événementiel</h3>
        </motion.div>
      )}
    </div>
  );
};

export default HeroPresta;