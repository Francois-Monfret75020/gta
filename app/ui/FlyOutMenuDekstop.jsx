import React, { useEffect, useState, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import { prestaData } from "../content/Presta Hero content/prestationContent";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // Import clsx

const FlyOutMenu = ({ toggleOpen }) => {
  const [data, setData] = useState([]);
  const pathname = usePathname();
  const audioRef = useRef(null);

  useEffect(() => {
    // Simulate fetching data
    setData(prestaData);
  }, []);

  const combinedClickHandler = () => {
    if (audioRef.current) {
      audioRef.current.play();

   
   
    }
  };

  return (
    <div className="flex flex-col h-[25rem] p-10 shadow-xl justify-center gap-y-4  ">
          <audio ref={audioRef} src="/sound.mp3" preload="auto" />
      {data.map((item, index) => (
        <div
          key={index}
          className="relative mb-4 w-full flex justify-around gap-y-3"
          onClick={combinedClickHandler}
        >
          <Link href={item.link} >
            <div className="flex flex-col items-center justify-center relative cursor-pointer h-full">
              <span
                className={clsx(
                  "top-12 text-center bg-opacity-50 text-neon-white hover:text-glow p-1 md:text-base lg:text-lg",
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