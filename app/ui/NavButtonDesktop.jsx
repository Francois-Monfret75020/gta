import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavButtonDesktop = ({ text, event, href }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className="w-[10rem] items-center flex justify-center relative "
    >
      <motion.div
        className="absolute inset-0 bg-transparent border border-black/30 rounded-md origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: pathname === href || event ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <div className="md:text-base lg:text-xl px-6 py-4">{text}</div>
    </Link>
  );
};

export default NavButtonDesktop;
