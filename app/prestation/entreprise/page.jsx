import PrestationTemplate from "../../components/prestation/PrestationTemplate";
import {
  HeroPrestaPro,
  ListPrestaPro,
  ListPrestaProContent,
} from "../../content/Presta Page Content/prestaPageText";

const Entreprise = () => (
  <PrestationTemplate
    heroSrc={HeroPrestaPro.src}
    heroAlt={HeroPrestaPro.alt}
    heroTitle={HeroPrestaPro.title}
    heroText="Soirées de gala, séminaires, inauguration ou même un simple cocktail apéritif, nos bars mobiles ainsi l’équipe, arrivent à s’adapter pour servir un grand nombre de convives."
    list={ListPrestaPro}
    listContent={ListPrestaProContent}
  />
);

export default Entreprise;
