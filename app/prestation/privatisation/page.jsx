"use client";

import HeroPrestaPhoto from "../../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../../components/prestation/HeroPrestaText";
import List from "../../components/prestation/List";
import ListContent from "../../components/prestation/ListContent";
import { HeroPrestaPrivate } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaPrivate } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaPrivateContent } from "../../content/Presta Page Content/prestaPageText";

const Presta = () => {
  return (
    <main className="min-h-screen bg-black w-full">
      <HeroPrestaPhoto
        src={HeroPrestaPrivate.src}
        alt={HeroPrestaPrivate.alt}
        info={false}
      />

      <div
        className="w-full h-auto flex justify-center items-center"
        id="compenent-text-container"
      >
        <HeroPrestaText
          title={HeroPrestaPrivate.title}
          text={HeroPrestaPrivate.text}
        />
      </div>
      <List
        src={ListPrestaPrivate.src}
        title={ListPrestaPrivate.title}
        textArray={ListPrestaPrivate.text}
      />

      <ListContent content={ListPrestaPrivateContent} />
    </main>
  );
};

export default Presta;
