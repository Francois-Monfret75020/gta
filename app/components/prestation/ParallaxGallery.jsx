"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const sizeClasses = [
  "h-[260px] md:h-[320px]",
  "h-[360px] md:h-[440px]",
  "h-[300px] md:h-[360px]",
  "h-[400px] md:h-[480px]",
  "h-[280px] md:h-[340px]",
];

const PARALLAX_PX = 40;

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
    <Link
      ref={ref}
      href={item.link}
      className={`group relative mb-4 block w-full overflow-hidden rounded-md break-inside-avoid md:mb-6 ${
        sizeClasses[index % sizeClasses.length]
      }`}
    >
      <motion.div
        style={{ y, top: -PARALLAX_PX, height: `calc(100% + ${PARALLAX_PX * 2}px)` }}
        className="absolute left-0 right-0"
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/30 px-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-xl font-extralight text-white">{item.description}</p>
        <span className="border border-white px-4 py-2 text-sm uppercase tracking-wide text-white">
          {item.buttonText}
        </span>
      </div>
    </Link>
  );
};

const ParallaxGallery = ({ data }) => {
  return (
    <div className="mx-auto w-full max-w-[1200px] columns-2 gap-4 overflow-hidden py-10 md:columns-3 md:gap-6">
      {data.map((item, index) => (
        <ParallaxCard key={item.link} item={item} index={index} />
      ))}
    </div>
  );
};

export default ParallaxGallery;
