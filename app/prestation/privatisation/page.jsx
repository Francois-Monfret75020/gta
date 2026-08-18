import PrestationTemplate from "../../components/prestation/PrestationTemplate";
import {
  HeroPrestaPrivate,
  ListPrestaPrivate,
  ListPrestaPrivateContent,
} from "../../content/Presta Page Content/prestaPageText";

const Privatisation = () => (
  <PrestationTemplate
    heroSrc={HeroPrestaPrivate.src}
    heroAlt={HeroPrestaPrivate.alt}
    heroTitle={HeroPrestaPrivate.title}
    heroText={HeroPrestaPrivate.text}
    list={ListPrestaPrivate}
    listContent={ListPrestaPrivateContent}
  />
);

export default Privatisation;
