"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AniamtionText from "../../ui/AniamtionText";

const ListContent = ({ content, show }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {content.map((item, index) => {
          const isPortrait = item.orientation === "portrait";
          const isLandscape = !isPortrait;

          return (
            <div
              key={index}
              className={`group relative mb-16 lg:mb-32 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm border border-gray-200 hover:border-black/30 transition-all duration-700 hover:shadow-2xl hover:shadow-black/10 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col items-stretch min-h-[600px] lg:min-h-[500px]`}
            >
              {/* Contenu Textuel */}
              <div
                className={`flex-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative z-10 ${
                  isLandscape ? "lg:w-[45%] lg:flex-none" : ""
                }`}
              >
                {/* Titre */}
                <div className="mb-6 lg:mb-8 ">
                  <AniamtionText
                    text={item.title}
                    el="h2"
                    className="w-full text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-black leading-tight tracking-wide"
                    once={true}
                  />

                  {show && (
                    <div className="mt-6 flex items-center w-full flex-1">
                      <div className="h-0.5 bg-black/30 rounded-full flex-1"></div>
                      <div className="w-2 h-2 bg-black rounded-full mx-2 shadow-sm shadow-black/30"></div>
                    </div>
                  )}
                </div>

                {/* Texte */}
                <div className="space-y-4">
                  <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed font-light font-roboto">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div
                className={`flex-1 relative overflow-hidden ${
                  isPortrait
                    ? "min-h-[450px] sm:min-h-[550px] lg:min-h-[650px]"
                    : "min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
                } ${isLandscape ? "lg:w-[55%] lg:flex-none" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-black/40 z-10"></div>
                <Image
                  src={item.src}
                  alt={item.title || "Prestation"}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                    isPortrait ? "object-top" : ""
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />

                {/* Overlay avec effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListContent;
