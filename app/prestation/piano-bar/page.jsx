"use client";

import HeroPrestaPhoto from "../../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../../components/prestation/HeroPrestaText";
import List from "../../components/prestation/List";
import ListContent from "../../components/prestation/ListContent";
import CardDemo from "../../ui/CardDemo";
import { HeroPrestaPiano } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaPiano } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaAtelierContent } from "../../content/Presta Page Content/prestaPageText";
import { GamesContent } from "../../content/Presta Page Content/prestaPageText";
import { PrestaTextGames } from "../../content/Presta Page Content/prestaPageText";

const Presta = () => {

  const show = true; // Assuming show is true
  const gamesToDisplay = show ? GamesContent.slice(0, -1) : GamesContent;
  // Conditionally exclude the last element if show is true
  return (
    <main className="min-h-screen bg-black w-full overflow-x-hidden">
      <HeroPrestaPhoto
        src={HeroPrestaPiano.src}
        alt={HeroPrestaPiano.alt}
        info={false}
      />

      <div
        className="w-full h-auto flex justify-center items-center"
        id="compenent-text-container"
      >
        <HeroPrestaText
          title={HeroPrestaPiano.title}
          text={HeroPrestaPiano.text}
        />
      </div>
      <List
        src={ListPrestaPiano.src}
        title={ListPrestaPiano.title}
        textArray={ListPrestaPiano.text}
      />
      <ListContent show={true} content={ListPrestaAtelierContent} />
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
        {gamesToDisplay.map((game, index) => (
          <CardDemo
            key={index}
            show={true}
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

export default Presta;
