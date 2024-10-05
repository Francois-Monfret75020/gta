import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { prestaData } from "../content/Presta Hero content/prestationContent";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // Import clsx

const FlyOutMenu = ({ toggleOpen }) => {
  const [data, setData] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    // Simulate fetching data
    setData(prestaData);
  }, []);

  return (
    <div className="flex flex-col h-auto p-6 shadow-xl gap-x-6 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative mb-4 w-full flex justify-around gap-y-3"
        >
          <Link href={item.link} onClick={toggleOpen}>
            <div className="flex flex-col items-center justify-center relative cursor-pointer h-full">
              <span
                className={clsx(
                  "top-12 text-center bg-opacity-50 text-neon-white hover:text-glow p-1",
                  { "bg-neon rounded-md px-2": pathname === item.link } // Classe conditionnelle
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