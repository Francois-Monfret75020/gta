import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TbTriangleFilled } from "react-icons/tb";

const MobileNavButton = ({ text, href, toggleOpen }) => {
  const pathname = usePathname();

  const combinedClickHandler = () => {
    setTimeout(() => {
      toggleOpen();
    }, 1500);
  };

  return (
    <div
      className="w-auto items-center gap-x-3 flex relative "
      onClick={combinedClickHandler}
    >
      {pathname === href && (
        <TbTriangleFilled
          className="absolute text-black"
          size={20}
          style={{
            top: "50%",
            left: "-40px",
            transform: "translateY(-50%) rotate(90deg)",
          }}
        />
      )}
      <div
        className={clsx(
          "relative p-2 flex justify-center items-center w-[12rem] md:min-w-[6rem] lg:min-w-[8rem] max-w-[13rem] cursor-pointer bg-transparent overflow-hidden lg:py-1 px-1 text-lg font-thin",
          { "border border-black/30 rounded-md": pathname === href }
        )}
      >
        <Link href={href} className="md:text-[15px] lg:text-[15px]">
          {text}
        </Link>
      </div>
    </div>
  );
};

export default MobileNavButton;
