"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Slider from "./components/hero/VideoHero";
import { prestaData } from "./content/Presta Hero content/prestationContent";
import Card from "./ui/Card"; // Assurez-vous que le chemin est correct
import Preloader from "./components/preloader/preloader";
import HeroPrestaText from "./components/prestation/HeroPrestaText";

const Home = () => {
  const [isLoaded, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="relative bg-black">
        <AnimatePresence mode="wait">
          {isLoaded && <Preloader />}
        </AnimatePresence>
        <section className="h-screen">
          <Slider />
        </section>

        <div
          id="prestation-container"
          className="flex h-auto flex-col justify-evenly mb-20 mt-20"
        >
             <div
        className="w-full h-auto flex justify-center items-center"
        id="compenent-text-container"
      >
        <HeroPrestaText
          title={"Nos Prestations : "}
          text={""}
          type={"mariage"}
        />
      </div>
          {prestaData.map((prestaData, index) => {
            return <Card key={index} {...prestaData} href={prestaData.link} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
