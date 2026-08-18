import PrestationTemplate from "../../components/prestation/PrestationTemplate";
import {
  HeroPrestaPiano,
  ListPrestaPiano,
  ListPrestaPianoContent,
  GamesContent,
} from "../../content/Presta Page Content/prestaPageText";

const PianoBar = () => (
  <PrestationTemplate
    heroSrc={HeroPrestaPiano.src}
    heroAlt={HeroPrestaPiano.alt}
    heroTitle={HeroPrestaPiano.title}
    heroText={HeroPrestaPiano.text}
    list={ListPrestaPiano}
    listContent={ListPrestaPianoContent}
    showNumbers={true}
    games={GamesContent.slice(0, -1)}
  />
);

export default PianoBar;
