"use client";

import HeroPrestaPhoto from "../../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../../components/prestation/HeroPrestaText";
import List from "../../components/prestation/List";
import ListContent from "../../components/prestation/ListContent";
import CardDemo from "../../ui/CardDemo";
import { HeroPrestaAtelier } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaAtelier } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaAtelierContent } from "../../content/Presta Page Content/prestaPageText";
import { GamesContent } from "../../content/Presta Page Content/prestaPageText";
import { PrestaTextGames } from "../../content/Presta Page Content/prestaPageText";

const Presta = () => {
  return (
    <main className="min-h-screen bg-black w-full overflow-x-hidden">
      <HeroPrestaPhoto
        src={HeroPrestaAtelier.src}
        alt={HeroPrestaAtelier.alt}
        info={false}
      />

      <div
        className="w-full h-auto flex justify-center bg-black items-center"
        id="compenent-text-container"
      >
        <HeroPrestaText
          title={HeroPrestaAtelier.title}
          text={HeroPrestaAtelier.text}
        />
      </div>
      <div
        className="w-full h-auto  bg-black items-center"
        id="compenent-text-container"
      >
        <List
          src={ListPrestaAtelier.src}
          title={ListPrestaAtelier.title}
          textArray={ListPrestaAtelier.text}
        />
      </div>
      <ListContent content={ListPrestaAtelierContent} show={true} />
      <div
        className="w-full h-auto   bg-black flex justify-center items-center"
        id="compenent-text-container"
      >
        <HeroPrestaText
          title={PrestaTextGames.title}
          text={PrestaTextGames.text}
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
            src={game.src} // Pass the src property
            initialX={index % 2 === 0 ? "-100%" : "100%"}
          />
        ))}
      </div>
    </main>
  );
};

export default Presta;
