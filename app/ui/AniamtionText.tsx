import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AniamtionTextProps = {
  text: string | string[];
  el: keyof JSX.IntrinsicElements;
  className: string;
  once?: boolean;
  left?: boolean;
  right?: boolean;
};

const defaultAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1 },
    ease: [0.76, 0, 0.24, 1],
  },
};

const AniamtionText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
}: AniamtionTextProps) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: once });



  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        aria-hidden="true"
      >
        {textArray.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                variants={defaultAnimation}
                style={{ display: "inline-block" }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AniamtionText;
