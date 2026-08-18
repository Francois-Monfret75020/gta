import HeroPrestaText from "../components/prestation/HeroPrestaText";
import GamesGrid from "../components/prestation/GamesGrid";

const Bars = () => {
  return (
    <main className="h-screen lg:h-[70vh] w-screen bg-white overflow-x-hidden">
      <div
        className="w-full h-auto flex justify-center items-center lg:pt-16"
        id="compenent-text-container"
      >
        <HeroPrestaText
          title={"Choisissez votre bar "}
          text={
            "Faite vos choix parmis nos different bars, pour une prestation sur mesure"
          }
        />
      </div>

      <GamesGrid className="w-full pb-10 lg:mt-[80px] flex flex-col lg:flex-row  px-4 bg-white justify-center gap-y-12 md:gap-x-20 items-center " />
    </main>
  );
};

export default Bars;
