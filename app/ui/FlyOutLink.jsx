// FlyoutLink.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlyOutButtonDesktop from "./FlyOutButtonDesktop";

const FlyoutLink = ({ name, FlyOutContent, toggleOpen, href, isNavbarOpen }) => {
  const [isOpen, setOpen] = useState(false);

  const showFlyOut = FlyOutContent && isOpen;

  // Réinitialiser l'état du flyout quand la navbar mobile se ferme
  useEffect(() => {
    if (isNavbarOpen === false) {
      setOpen(false);
    }
  }, [isNavbarOpen]);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className=" h-fit w-fit relative  z-50"
      id="flyout-link"
    >
      <FlyOutButtonDesktop text={name} href={href} event={isOpen} />

      <AnimatePresence>
        {showFlyOut && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{ x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bg-white z-50 rounded-md -top-[-5rem]  md:-top-[-5rem] border border-black/10 shadow-xl left-[6rem] md:left-1/2   "
          >
            <div className="absolute -top-10 left-0 h-6 right-0 " />
            <FlyOutContent toggleOpen={toggleOpen} className="z-50" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;
