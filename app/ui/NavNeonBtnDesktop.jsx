import React, { useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TbTriangleFilled } from "react-icons/tb"; // Assurez-vous d'importer l'icône

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
      className="w-auto items-center gap-x-3 flex relative"
      onClick={handleClick}

    >
      <audio ref={audioRef} src="/sound.mp3" preload="auto" />
      <div
        className={clsx(
          "relative p-2 flex justify-center items-center w-[9rem] cursor-pointer bg-transparent overflow-visible lg:py-1 px-1 text-lg font-thin",
          { "neon-button-desktop rounded-md border-2 border-neon ": pathname === href }
        )}
      >
        {pathname === href && (
          <TbTriangleFilled
            className="absolute z-10"
            size={15} // Adjust the size as needed
            style={{
              top: "50%",
              left: "-20%",
              transform: "translateY(-50%) rotate(90deg)", // Rotate 90 degrees to the right
              color: "#00fe9b",
            }}
          />
        )}
         {text}
        </div>
     
    </Link>
  );
};

export default NavNeonBtnDesktop;