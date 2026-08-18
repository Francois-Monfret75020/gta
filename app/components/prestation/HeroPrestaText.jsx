"use client"
import React from "react";
import AniamtionText from "../../ui/AniamtionText"; // Assurez-vous que le chemin est correct



const HeroPrestaText = ({ title, text, }) => {



  
  return (
    <div
      id="text-container"
      className={`flex  bg-white text-black  w-full p-8  md:p-10 lg:p-8   md:mx-8 md:py-8 lg:mx-16 my-4 md:my-8 lg:my-2 h-auto  text-center justify-center items-center flex-col gap-y-4`}
    >
      <AniamtionText
        text={title}
        el="h1"
        className="title text-black  md:text-[33px] text-[22px] lg:w-[70%] uppercase font-nomral"
        once={true}
      />
      <div className="flex flex-col w-full items-center justify-center lg:w-[50vw] h-12 gap-y-0.5">
        <div className="flex lg:w-1/4 w-2/4 h-0.5 bg-black"></div>
        <div className="flex lg:w-1/4 w-2/4 h-0.5 bg-black"></div>
      </div>
      {text && (
        <div className="leading-10 p-4 text-[20px]  font-extralight lg:w-[50vw]">
         <p className="text-black">{text}</p>
        </div>
      )}
    </div>
  );
};

export default HeroPrestaText;