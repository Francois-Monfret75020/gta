"use client";
import { animate, KeyframeOptions, useInView } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import React from "react";

type AnimatedCunterProps = {
  from: number;
  to: number;
  animationOption?: KeyframeOptions;

};

const AnimatedCunter = ({
  from,
  to,
  animationOption,

}: AnimatedCunterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount:1, once: true });



  useLayoutEffect(() => {
   const element = ref.current;

    if (!element) return;

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 1.5,
      ease: [0.45, 0, 0.55, 1],
      delay: 0.2,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });
  }, [ref, isInView]);

  return <span className="w-[4rem] h-8 flex justify-center items-center" ref={ref} />;
};

export default AnimatedCunter;
