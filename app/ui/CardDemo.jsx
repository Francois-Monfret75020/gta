import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { IKVideo } from "imagekitio-next";
import { cn } from "../lib/utils";

export function CardDemo({ title, text, url }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // L'animation se déclenche lorsque l'élément entre dans la vue

  const backgroundImage = url[0];
  const hoverBackgroundImage = url[2];

  return (
    <div className="max-w-xs w-full">
     <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://ik.imagekit.io/xgjpkseg3/BarCocktail/bao-truong-hYrnz92-bpY-unsplash.jpg?updatedAt=1727706189607)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://ik.imagekit.io/xgjpkseg3/BarCocktail/ezgif.com-effects.gif?updatedAt=1727706113114)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://ik.imagekit.io/xgjpkseg3/BarCocktail/ezgif.com-effects.gif?updatedAt=1727706113114)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h3 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h3>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDemo;
