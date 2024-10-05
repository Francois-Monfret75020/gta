"use client";
import React, { useEffect, useRef, useState } from "react";
import { experienceArray } from "../../content/Info content/infoContent";
import { useInView } from "framer-motion";
import AnimatedCunter from "@/app/ui/AnimatedCunter";

const Chiffre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartAnimation(true);
    }
  }, [isInView]);

  return (
    <div
      id="chiffre-containeur"
      className="flex flex-col w-full info:h-[30vh]  h-[400px] bg-black border-red-800  justify-center info:justify-evenly items-center text-sm"
      ref={ref}
    >
      <div className="grid grid-cols-2 info:grid-cols-3  w-full">
        {experienceArray.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-4 "
          >
            <div className="flex relative justify-center w-full items-center">
              <div className="flex w-full font-bold neon-text text-xl font-mono justify-center items-center">
                <div className="relative -left-[2rem] text-gray-500 font-bold text-xl">
                  +
                </div>
                <div className="h-10 w-4 flex justify-center items-center">
                  {startAnimation && (
                    <AnimatedCunter
                      from={0}
                      to={item.yearsOfExperience}
                      isInView={isInView}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center min-w-4 neon-text-white text-center">
              {item.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chiffre;