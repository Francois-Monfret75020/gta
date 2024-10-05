"use client";

import HeroPrestaPhoto from "../../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../../components/prestation/HeroPrestaText";
import List from "../../components/prestation/List";
import ListContent from "../../components/prestation/ListContent";
import { HeroPrestaAtelier } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaAtelier } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaAtelierContent } from "../../content/Presta Page Content/prestaPageText";

const Presta = () => {
  return (
    <main className="min-h-screen bg-black w-full">
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
      <ListContent content={ListPrestaAtelierContent}
          show={true}  />
    </main>
  );
};

export default Presta;
