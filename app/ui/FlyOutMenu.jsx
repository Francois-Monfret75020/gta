"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { prestaData } from "../content/Presta Hero content/prestationContent";

const FlyOutMenu = ({ toggleOpen, variant = "mobile" }) => {
  const [data, setData] = useState([]);
  const pathname = usePathname();
  const isMobile = variant === "mobile";

  useEffect(() => {
    setData(prestaData);
  }, []);

  const handleItemClick = () => {
    if (isMobile) {
      setTimeout(toggleOpen, 2500);
    }
  };

  return (
    <div
      className={
        isMobile
          ? "flex flex-col h-auto p-6 shadow-xl gap-x-6"
          : "flex flex-col h-[25rem] p-10 shadow-xl justify-center gap-y-4"
      }
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="relative mb-4 w-full flex justify-around gap-y-3"
          onClick={handleItemClick}
        >
          <Link href={item.link} onClick={isMobile ? toggleOpen : undefined}>
            <div className="flex flex-col items-center justify-center relative cursor-pointer h-full">
              <span
                className={clsx(
                  "top-12 text-center bg-opacity-50 text-black hover:opacity-70 p-1",
                  isMobile ? "" : "md:text-base lg:text-lg",
                  {
                    [`bg-black text-white rounded-md px-2 ${isMobile ? "py-2" : ""}`]:
                      pathname === item.link,
                  }
                )}
              >
                {item.navTitlle}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FlyOutMenu;
