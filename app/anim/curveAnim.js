export const menuSlide = {
  initial: { y: "-115%" },
  enter: { y: "0%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
  exit: { y: "-120%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
};

export const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const linkAnimation = {
    initial: { y: 0 },
    animate: { y: [0, 7, 0] },
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.8 }
  };


export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
