import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollDownIcon from "../../ui/ScrolldownIcon";

const VideoHero = () => {
  const [loading, setLoading] = useState(false);

  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      bgVideoRef.current?.play();
      mainVideoRef.current?.play();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden flex-shrink-0 h-screen w-screen relative bg-black">
      {/* Fond flouté pour remplir les côtés sur grand écran */}
      <video
        ref={bgVideoRef}
        playsInline
        loop
        muted
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-md opacity-40"
      >
        <source src="/heroVideo.mp4" type="video/mp4" />
      </video>
      {/* Vidéo principale centrée, ratio naturel préservé */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={mainVideoRef}
          playsInline
          loop
          muted
          className="h-full w-auto max-w-none"
        >
          <source src="/heroVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <motion.div
          ref={textRef}
          className="text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 3.2 }}
        >
          <h1 className="text-6xl font-thin font-montserrat tracking-wide">
            Class Cocktails
          </h1>
          <p className="text-lg font-thin mt-4  font-roboto">
            Les spécialistes du bar mobile événementiel
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-12 lg:bottom-14 left-1/2 transform -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </div>
  );
};

export default VideoHero;
