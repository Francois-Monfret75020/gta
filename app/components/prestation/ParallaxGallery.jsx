"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ParallaxCard = ({ item, index }) => {
  const wrapRef = useRef(null);
  const revealRef = useRef(null);

  useGSAP(
    () => {
      const direction = index % 2 === 0 ? 1 : -1;
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { isMobile } = context.conditions;
          // Kept well under the vertical gap between cards so drifting
          // cards can never visually overlap their neighbours.
          const amount = isMobile ? 6 + (index % 3) * 3 : 18 + (index % 3) * 8;

          gsap.fromTo(
            wrapRef.current,
            { y: amount * direction },
            {
              y: -amount * direction,
              ease: "none",
              scrollTrigger: {
                trigger: wrapRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      );

      gsap.fromTo(
        revealRef.current,
        { autoAlpha: 0, y: 30, scale: 1.04 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: wrapRef, dependencies: [index] }
  );

  return (
    <div
      ref={wrapRef}
      className="mb-8 block w-full break-inside-avoid md:mb-10"
    >
      <div className="group relative overflow-hidden rounded-md">
        <div ref={revealRef}>
          <Image
            src={item.src}
            alt={item.alt}
            placeholder="blur"
            sizes="(max-width: 768px) 50vw, 33vw"
            className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

const ParallaxGallery = ({ images }) => {
  return (
    <div className="mx-auto w-full max-w-[1200px] columns-2 gap-6 overflow-hidden px-4 py-10 md:columns-3 md:gap-8 md:px-0">
      {images.map((item, index) => (
        <ParallaxCard key={item.src.src} item={item} index={index} />
      ))}
    </div>
  );
};

export default ParallaxGallery;
