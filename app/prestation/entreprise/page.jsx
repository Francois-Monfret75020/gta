"use client";

import HeroPrestaPhoto from "../../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../../components/prestation/HeroPrestaText";
import List from "../../components/prestation/List";
import ListContent from "../../components/prestation/ListContent";
import CardDemo from "../../ui/CardDemo";
import { HeroPrestaPro } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaPro } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaProContent } from "../../content/Presta Page Content/prestaPageText";
import { GamesContent } from "../../content/Presta Page Content/prestaPageText";
import { PrestaTextGames } from "../../content/Presta Page Content/prestaPageText";

const Presta = () => {
  return (
    <main className="min-h-screen bg-black w-full overflow-x-hidden">
      <HeroPrestaPhoto
        src={HeroPrestaPro.src}
        alt={HeroPrestaPro.alt}
        info={false}
      />
      <div
        className="w-full h-auto flex justify-center items-center"
        id="compenent-text-container"
      >
        <HeroPrestaText
          title={HeroPrestaPro.title}
          text={
            "Soirées de gala, séminaires, inauguration ou même un simple cocktail apéritif, nos bars mobiles ainsi l’équipe, arrivent à s’adapter pour servir un grand nombre de convives."
          }
        />
      </div>
      <List
        src={ListPrestaPro.src}
        title={ListPrestaPro.title}
        textArray={ListPrestaPro.text}
      />
      <ListContent content={ListPrestaProContent} />
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
