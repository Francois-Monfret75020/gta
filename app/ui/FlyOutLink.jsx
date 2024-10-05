// FlyoutLink.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavFlyOutNeonBtn from "../ui/NavFlyOutNeonBtn";

const FlyoutLink = ({ name, FlyOutContent, toggleOpen, pathname, href, onClick }) => {
  const [isOpen, setOpen] = useState(false);

  const showFlyOut = FlyOutContent && isOpen;

  

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(true)}
      className="md:min-w-[5rem] h-fit w-fit relative z-50 "
      id="flyout-link"
    >
      <NavFlyOutNeonBtn text={name} href={href} pathname={pathname} event={isOpen} onClick={onClick} />
      
      <AnimatePresence>
        {showFlyOut && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{ x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bg-blacko rounded-md -top-[-4rem] md:-top-[-4.3rem] border-2   border-neon left-[6rem] md:left-1/2"
          >
            <div className="absolute -top-6 left-0 h-6 right-0 text-black" />
            <FlyOutContent toggleOpen={toggleOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;