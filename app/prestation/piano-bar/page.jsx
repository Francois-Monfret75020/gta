"use client";

import HeroPrestaPhoto from "../../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../../components/prestation/HeroPrestaText";
import List from "../../components/prestation/List";
import ListContent from "../../components/prestation/ListContent";
import { HeroPrestaPiano } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaPiano } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaAtelierContent } from "../../content/Presta Page Content/prestaPageText";

const Presta = () => {
  return (
    <main className="min-h-screen bg-black w-full">
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
    </main>
  );
};

export default Presta;
