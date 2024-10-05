"use client";
import React, { useRef } from "react";
import HeroPresta from "../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../components/prestation/HeroPrestaText";
import Chiffre from "../components/info/chiffre";
import { infoData, infoData2 } from "../content/Info content/infoContent";
import ListContent from "../components/prestation/ListContent";

const Info = () => {
  return (
    <div className="h-auto bg-black flex flex-col w-full">

      <HeroPresta
        src={infoData.src}
        height={"100vh"}
        text={true}
        alt={infoData.alt}
        info={true}
      />
      <div className="h-auto w-full bg-black flex justify-center items-center">
      <HeroPrestaText title={infoData.heroTitlle} text={infoData.heroText} />
      </div>

      <div className="h-auto w-full bg-black border-t-2 border-b-2 border-neon flex justify-center items-center">
      <Chiffre />
      </div>
      <div className="h-auto w-full bg-black flex justify-center items-center">
      <HeroPrestaText title={infoData.title2} text={null} />
      </div>
      <ListContent content={infoData2} show={true} />
    </div>
  );
};

export default Info;
