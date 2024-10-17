import React from "react";
import Link from "next/link";

const CtaBtn = ({ text }) => {
  return (
    <Link
      href="/booking"
      passHref
      className="bg-neon text-blacko font-montserrat text-[12px] py-4 px-4 rounded-md shadow-lg hover:neon-button transition duration-300 ease-in-out transform hover:scale-105"
    >
      {text}
    </Link>
  );
};

export default CtaBtn;
