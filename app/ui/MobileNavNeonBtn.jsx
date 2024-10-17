import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TbTriangleFilled } from "react-icons/tb"; // Assurez-vous d'importer l'icône

const NavNeonBtn = ({ text, event, href, toggleOpen, OnClickNav }) => {
  const pathname = usePathname();
  const audioRef = useRef(null);

  const combinedClickHandler = () => {
    if (audioRef.current) {
      audioRef.current.play();

      if (OnClickNav) {
        OnClickNav(); // Appel de la fonction de rappel passée par le parent
      }
      setTimeout(() => {
        toggleOpen();
      }, 1500); // Délai de 1.5 secondes (1500 millisecondes)
    }
  };

  return (
    <div
      className="w-auto items-center gap-x-3 flex relative "
      onClick={combinedClickHandler}
    >
      {pathname === href && (
        <TbTriangleFilled
          className="absolute text-neon"
          size={20} // Adjust the size as needed
          style={{
            top: "50%",
            left: "-40px",
            transform: "translateY(-50%) rotate(90deg)", // Rotate 90 degrees to the right
          }}
        />
      )}
      <audio ref={audioRef} src="/sound.mp3" preload="auto" />
      <div
        className={clsx(
          "relative p-2 flex justify-center items-center w-[12rem] md:min-w-[6rem] lg:min-w-[8rem] max-w-[13rem] cursor-pointer bg-transparent overflow-hidden t lg:py-1 px-1 text-lg font-thin",
          { "border-2 border-neon neon-button rounded-md": pathname === href }
        )}
      >
      
        <Link href={href} className="md:text-[15px] lg:text-[15px]">
          {text}
        </Link>
      </div>
    </div>
  );
};

export default NavNeonBtn;
