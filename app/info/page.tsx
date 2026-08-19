import HeroPresta from "../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../components/prestation/HeroPrestaText";
import Chiffre from "../components/info/chiffre";
import { infoData, infoData2 } from "../content/Info content/infoContent";
import ListContent from "../components/prestation/ListContent";

const Info = () => {
  return (
    <div className="h-auto bg-white flex flex-col w-full">

      <HeroPresta
        src={infoData.src}
        height={"100vh"}
        text={true}
        alt={infoData.alt}
        info={true}
        marriage={false}
      />
      <div className="h-auto w-full bg-white flex justify-center items-center py-12 lg:py-28">
      <HeroPrestaText title={infoData.heroTitlle} text={infoData.heroText} />
      </div>

      <div className="h-auto w-full bg-white border-t border-b border-black/10 flex justify-center items-center py-8 lg:py-12">
      <Chiffre />
      </div>
      <div className="h-auto w-full bg-white flex justify-center items-center py-12 lg:py-28">
      <HeroPrestaText title={infoData.title2} text={null} />
      </div>
      <ListContent content={infoData2} show={true} />
    </div>
  );
};

export default Info;
