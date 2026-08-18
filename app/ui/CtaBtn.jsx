import React from "react";
import Link from "next/link";

const CtaBtn = ({ text }) => {
  return (
    <Link
      href="/booking"
      passHref
      className="bg-white text-black font-roboto text-[12px] py-4 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200"
    >
      {text}
    </Link>
  );
};

export default CtaBtn;
