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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {content.map((item, index) => (
          <div
            key={index}
            className={`group relative mb-16 lg:mb-32 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-green-400/50 transition-all duration-700 hover:shadow-2xl hover:shadow-green-400/20 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } flex flex-col lg:flex-row items-stretch min-h-[600px] lg:min-h-[500px]`}
          >
            {/* Contenu Textuel */}
            <div className="flex-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative z-10">
              {/* Numéro */}
              {show && (
                <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
                  <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#01FE9B] to-[#01FE9B] text-black font-bold text-lg lg:text-2xl shadow-lg">
                    {index + 1}
                  </div>
                </div>
              )}

              {/* Titre */}
              <div className="mb-6 lg:mb-8 ">
                <AniamtionText
                  text={item.title}
                  el="h2"
                  className=" w-[250px] md:w-[600px] lg:w-[800px] text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight tracking-wide"
                  once={true}
                />

                {show && (
                  <div className="mt-6 flex items-center w-full flex-1">
                    <div className="h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex-1"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full mx-2 shadow-sm shadow-green-400/50"></div>
                  </div>
                )}
              </div>

              {/* Texte */}
              <div className="space-y-4">
                <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed font-light font-oswald">
                  {item.text}
                </p>
              </div>

              {/* Bouton CTA optionnel */}
              {/* <div className="mt-8 lg:mt-12">
                <button className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/40">
                  <span>En savoir plus</span>
                  <svg
                    className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div> */}
            </div>

            {/* Image */}
            <div className="flex-1 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-black/40 z-10"></div>
              <Image
                src={item.src}
                alt={item.title || "Prestation"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2}
              />

              {/* Overlay avec effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListContent;
