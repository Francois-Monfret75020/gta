import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollDownIcon from "../../ui/ScrolldownIcon";

const VideoHero = () => {
  const [loading, setLoading] = useState(false);

  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <div className="overflow-hidden flex-shrink-0 h-screen w-screen relative">
      <video
        autoPlay
        playsInline
        loop
        muted
        className="w-full h-full object-none"
      >
        <source src="/heroVideo.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 flex items-center justify-center">
        <motion.div
          ref={textRef}
          className="text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 3.2 }}
        >
          <h1 className="text-6xl font-thin neon-title-white">Cocktails Events</h1>
          <p className="text-lg font-thin mt-4 neon-text-white">Les spécialistes du bar mobile événementiel</p>
        </motion.div>
      </div>
      <div className="absolute bottom-12 lg:bottom-14 left-1/2 transform -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </div>
  );
};

export default VideoHero;