"use client";

import HeroPrestaPhoto from "../../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../../components/prestation/HeroPrestaText";
import List from "../../components/prestation/List";
import ListContent from "../../components/prestation/ListContent";
import { HeroPrestaPro } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaPro } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaProContent } from "../../content/Presta Page Content/prestaPageText";

const Presta = () => {
  return (
    <main className="min-h-screen bg-black w-full">
      <HeroPrestaPhoto
        src={HeroPrestaPro.src}
        alt={HeroPrestaPro.alt}
        info={false}
      />
      <div
        className="w-full h-auto flex justify-center items-center"
        id="compenent-text-container"
      >
        <HeroPrestaText title={HeroPrestaPro.title} text={HeroPrestaPro.text} />
      </div>
      <List
        src={ListPrestaPro.src}
        title={ListPrestaPro.title}
        textArray={ListPrestaPro.text}
      />
      <ListContent content={ListPrestaProContent} />
    </main>
  );
};

export default Presta;
