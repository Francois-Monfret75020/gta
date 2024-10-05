"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BookingButton = ({ text }) => {
  const [opacity, setOpacity] = useState(1);
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 500, 0); // Ajustez la valeur 500 selon vos besoins
      setOpacity(newOpacity);

      scrollTimeout = setTimeout(() => {
        setOpacity(1);
      }, 300); // Ajustez le délai selon vos besoins
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (


    <Link href="/booking" passHref className="" >
      <motion.button
        initial={{ y: 0 }}
        animate={{ y: 5 }}
        exit={{ x: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
       
        className="px-6 py-2 flex justify-center text-sm w-24 border-2 text-white bg-black  transform  transition duration-400 border-neon font-thin neon-button-booking "
        style={{ opacity }}
      >
        {text}
      </motion.button>
    </Link>
  
  );
};

export default BookingButton;