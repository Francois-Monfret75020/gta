"use client";

import HeroPrestaText from "../components/prestation/HeroPrestaText";
import CardDemo from "../ui/CardDemo";
import { GamesContent } from "../content/Presta Page Content/prestaPageText";

const Bars = () => {
  return (
    <main className="h-screen lg:h-[70vh] w-screen bg-black overflow-x-hidden">
      <div
        className="w-full h-auto flex justify-center items-center lg:pt-16"
        id="compenent-text-container"
      >
        <HeroPrestaText
          title={"Choisissez votre bar "}
          text={
            "Faite vos choix parmis nos different bars, pour une prestation sur mesure"
          }
          type={"mariage"}
        />
      </div>

      <div
        id="card-container"
        className="w-full pb-10 lg:mt-[80px] flex flex-col lg:flex-row  px-4 bg-black justify-center gap-y-12 md:gap-x-20 items-center "
      >
        {GamesContent.map((game, index) => (
          <CardDemo
            key={index}
            title={game.title}
            text={game.text}
            src={game.src} // Pass the src property
            initialX={index % 2 === 0 ? "-100%" : "100%"}
          />
        ))}
      </div>
    </main>
  );
};

export default Bars;
