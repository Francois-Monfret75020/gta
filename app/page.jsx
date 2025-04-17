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
      <main className="relative bg-black overflow-x-hidden flex flex-col">
        {/* <AnimatePresence mode="wait">
          {isLoaded && <Preloader />}
        </AnimatePresence> */}
        <section className="h-screen">
          <Slider />
        </section>

        <div
          id="prestation-container "
          className="flex h-auto flex-col justify-evenly mb-20 mt-20"
        >
          <div
            className="w-full h-auto flex flex-col justify-center items-center"
            id="compenent-text-container"
          >
            <HeroPrestaText
              title={
                "Cocktails & Performances : Le Bar Événementiel qui Fait le Show"
              }
              text={
                "Spécialistes du bar mobile événementiel, nous sommes une équipe de mixologues et flair bartender (barman jongleur, cracheur de feu) créant ainsi une véritable animation. Nous proposons un service de bar à cocktail sur mesure, à thèmes, utilisant des produits frais, notamment un large choix de purées de fruits exotiques 100% fruit, ainsi que des jus et sirops maison."
              }
              type={"mariage"}
            />
            <HeroPrestaText
              title={"Nos Prestations : "}
              text={""}
              type={"mariage"}
            />
          </div>
          <div className="w-full max-w-[1200px] mx-auto flex flex-wrap justify-center gap-8 py-10">
            {prestaData.map((prestaData, index) => (
              <div key={index} className="w-full lg:w-[500px]">
                <Card {...prestaData} href={prestaData.link} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
