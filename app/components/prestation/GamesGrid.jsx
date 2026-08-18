import GameCard from "../../ui/GameCard";
import { GamesContent } from "../../content/Presta Page Content/prestaPageText";

const defaultClassName =
  "w-full h-auto pb-10 flex flex-col lg:flex-row  px-4 bg-white justify-center gap-y-12 md:gap-x-20 items-center ";

const GamesGrid = ({ games = GamesContent, className = defaultClassName }) => {
  return (
    <div id="card-container" className={className}>
      {games.map((game, index) => (
        <GameCard
          key={index}
          title={game.title}
          text={game.text}
          src={game.src}
          initialX={index % 2 === 0 ? "-100%" : "100%"}
        />
      ))}
    </div>
  );
};

export default GamesGrid;
