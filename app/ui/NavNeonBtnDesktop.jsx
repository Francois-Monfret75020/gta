import React, { useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";


const NavNeonBtnDesktop = ({ text, event, href }) => {
  const pathname = usePathname();
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <Link
      href={href}
      className="w-[10rem] items-center flex justify-center  relative "
      onClick={handleClick}
    >
      <audio ref={audioRef} src="/sound.mp3" preload="auto" />
     
        <motion.div
          className="absolute inset-0 bg-transparent  border-2 border-neon neon-button-desktop rounded-md origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: pathname === href || event  ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="md:text-base lg:text-xl px-6 py-4">
     
            {text}

        </div>
    
    </Link>
  );
};

export default NavNeonBtnDesktop;