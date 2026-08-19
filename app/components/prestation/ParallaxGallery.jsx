"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const PARALLAX_PX = 20;

const ParallaxCard = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const direction = index % 2 === 0 ? 1 : -1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_PX * direction, -PARALLAX_PX * direction]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="group relative mb-4 block w-full overflow-hidden rounded-md break-inside-avoid md:mb-6"
    >
      <Image
        src={item.src}
        alt={item.alt}
        placeholder="blur"
        sizes="(max-width: 768px) 50vw, 33vw"
        className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
      />
    </motion.div>
  );
};

const ParallaxGallery = ({ images }) => {
  return (
    <div className="mx-auto w-full max-w-[1200px] columns-2 gap-4 overflow-hidden py-10 md:columns-3 md:gap-6">
      {images.map((item, index) => (
        <ParallaxCard key={item.src.src} item={item} index={index} />
      ))}
    </div>
  );
};

export default ParallaxGallery;
