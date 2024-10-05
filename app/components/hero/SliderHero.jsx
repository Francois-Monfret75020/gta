"use client";
import React, { useRef } from "react";
import { IKImage } from "imagekitio-next";
import { motion, useScroll, useTransform } from "framer-motion";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const slider1 = [
  "BarCocktail/medeBG2.jpeg?updatedAt=1724603759907",
  "BarCocktail/team2.jpg?updatedAt=1724603760554",
  "BarCocktail/medeService.jpeg?updatedAt=1724603760219",
  "BarCocktail/medeService.jpeg?updatedAt=1724603760219",
];
const slider2 = [
  "BarCocktail/medericFlame.jpeg?updatedAt=1724603760182",
  "BarCocktail/team2.jpg?updatedAt=1724603760554",
  "BarCocktail/WhatsApp%20Image%202024-08-26%20at%2020.17.45.jpeg?updatedAt=1724696378212",
  "BarCocktail/medeService.jpeg?updatedAt=1724603760219",
];

function SliderHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-800, 1000]);
  const x2 = useTransform(scrollYProgress, [0, 1], [400, -1000]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col relative z-[1] overflow-hidden"
      style={{ height: "200vh" }} // Ensure there's enough height to scroll
    >
      <motion.div
        style={{ x: x1 }}
        className="flex relative w-full"
      >
        {slider1.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-[50%] md:w-[33.33%] h-[50vh] flex justify-center items-center" // Adjusted width to fit all images
          >
            <div className="w-[90%] h-[90%] relative">
              <IKImage
                className="object-cover rounded-lg" // Added border-radius
                urlEndpoint={urlEndpoint}
                path={slide}
                alt="image"
                transformation={[
                  {
                    height: "800",
                    width: "600", // Increased width
                  },
                ]}
              />
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        style={{ x: x2 }}
        className="flex relative w-full mt-[3vw]"
      >
        {slider2.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-[50%] md:w-[33.33%] h-[50vh] flex justify-center items-center" // Adjusted width to fit all images
          >
            <div className="w-[90%] h-[90%] relative">
              <IKImage
                className="object-cover rounded-lg" // Added border-radius
                urlEndpoint={urlEndpoint}
                path={slide}
                alt="image"
                transformation={[
                  {
                    height: "800",
                    width: "600", // Increased width
                  },
                ]}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default SliderHero;