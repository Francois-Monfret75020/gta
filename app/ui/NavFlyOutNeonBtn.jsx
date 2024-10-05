"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { TbTriangleFilled } from "react-icons/tb";

const NavFlyOutNeonBtn = ({ text, event ,onClick, nav }) => {
  const pathname = usePathname();
  const initialBasePath = `/${pathname.split("/")[1]}`;
  const [basePath, setBasePath] = useState(initialBasePath);
  const href = "/prestation";

  console.log("nav", nav);
  


  return (
    <div id="container" className="w-auto items-center gap-x-3 flex relative" >
      {pathname === href && (
        <TbTriangleFilled
          className="absolute text-neon"
          size={15} // Adjust the size as needed
          style={{
            top: "50%",
            left: "10%",
            transform: "translateY(-50%) rotate(90deg)", // Rotate 90 degrees to the right
          }}
        />
      )}
      <div
        className={clsx(
          "relative p-2 flex justify-center items-center w-[12rem]  md:min-w-[6rem] lg:min-w-[8rem] max-w-[13rem]  cursor-pointer bg-transparent overflow-hidden text-neon  lg:py-1 px-1 text-lg  font-thin ",
          { "border-2 rounded-md border-neon neon-button": pathname === href }
        )}
        onClick={onClick}
      >
        <motion.div
          className="absolute inset-0 bg-transparent  border-2 border-neon  rounded-md origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: event ? 1 : 0 }}
          transition={{ duration: 0.5 }}
       
        />
        <div href={href} className="md:text-[11px] lg:text-lg ">
          <motion.span
            className="relative "
            initial={{ color: "white" }}
            animate={{ color: event ? "white" : "white" }}
            transition={{ duration: 0.5 }}
          >
            {text}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default NavFlyOutNeonBtn;