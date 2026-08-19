import HeroPrestaPhoto from "./HeroPrestaPhoto";
import HeroPrestaText from "./HeroPrestaText";
import List from "./List";
import ListContent from "./ListContent";
import GamesGrid from "./GamesGrid";
import { PrestaTextGames } from "../../content/Presta Page Content/prestaPageText";

const PrestationTemplate = ({
  heroSrc,
  heroAlt,
  heroTitle,
  heroText,
  marriage,
  list,
  listContent,
  showNumbers,
  games,
}) => {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <div className="w-full xl:max-w-[1600px] xl:mx-auto">
        <HeroPrestaPhoto
          src={heroSrc}
          alt={heroAlt}
          info={false}
          marriage={marriage}
        />
      </div>

      <div
        className="w-full h-auto flex justify-center items-center bg-white py-12 lg:py-24"
        id="compenent-text-container"
      >
        <HeroPrestaText title={heroTitle} text={heroText} />
      </div>

      <List src={list.src} title={list.title} textArray={list.text} />
      <ListContent content={listContent} show={showNumbers} />

      <div
        className="w-full h-auto bg-white flex justify-center items-center"
        id="compenent-text-container"
      >
        <HeroPrestaText title={PrestaTextGames.title} text={PrestaTextGames.text} />
      </div>

      <GamesGrid games={games} />
    </main>
  );
};

export default PrestationTemplate;
