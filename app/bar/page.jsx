"use client";

import HeroPrestaText from "../components/prestation/HeroPrestaText";
import CardDemo from "../ui/CardDemo";
import { GamesContent } from "../content/Presta Page Content/prestaPageText";


const Bars = () => {
  return (
    <main className="h-full w-screen bg-black overflow-x-hidden">
     
      <div
        className="w-full h-auto flex justify-center items-center"
        id="compenent-text-container"
      >
        <HeroPrestaText
          title={"Choisissez votre bar "}
          text={"Faite vos choix parmis nos different bars, pour une prestation sur mesure"}
          type={"mariage"}
        />
      </div>
   
  
      <div
        id="card-container"
        className="w-full h-auto pb-10 flex flex-col lg:flex-row  px-4 bg-black justify-center gap-y-12 md:gap-x-20 items-center "
      >
        {GamesContent.map((game, index) => (
          <CardDemo
            key={index}
            title={game.title}
            text={game.text}
            url={game.url} // Pass the entire array of URLs
            initialX={index % 2 === 0 ? '-100%' : '100%'} 
          />
        ))}
      </div>
    </main>
  );
};

export default Bars;
