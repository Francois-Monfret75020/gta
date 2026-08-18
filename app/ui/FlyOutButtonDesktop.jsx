"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const FlyOutButtonDesktop = ({ text, event }) => {
  const pathname = usePathname();
  const [basePath, setBasePath] = useState(`/${pathname.split("/")[1]}`);
  const href = "/prestation";

  useEffect(() => {
    setBasePath(`/${pathname.split("/")[1]}`);
  }, [pathname]);

  return (
    <div
      id="container"
      className="w-[12rem] md:w-[10rem] justify-center items-center flex relative z-50"
    >
      <motion.div
        className="absolute inset-0 bg-transparent border border-black/30 rounded-md origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: basePath === href || event ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <div href={href} className="md:text-base lg:text-lg px-6 py-4">
        {text}
      </div>
    </div>
  );
};

export default FlyOutButtonDesktop;
