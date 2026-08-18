import PrestationTemplate from "../../components/prestation/PrestationTemplate";
import {
  HeroPrestaAtelier,
  ListPrestaAtelier,
  ListPrestaAtelierContent,
} from "../../content/Presta Page Content/prestaPageText";

const Atelier = () => (
  <PrestationTemplate
    heroSrc={HeroPrestaAtelier.src}
    heroAlt={HeroPrestaAtelier.alt}
    heroTitle={HeroPrestaAtelier.title}
    heroText={HeroPrestaAtelier.text}
    list={ListPrestaAtelier}
    listContent={ListPrestaAtelierContent}
    showNumbers={true}
  />
);

export default Atelier;
