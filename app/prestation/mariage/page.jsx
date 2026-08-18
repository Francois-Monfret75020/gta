import PrestationTemplate from "../../components/prestation/PrestationTemplate";
import {
  HeroPrestaMariage,
  ListPrestaMariage,
  ListPrestaMariageContent,
} from "../../content/Presta Page Content/prestaPageText";

const Mariage = () => (
  <PrestationTemplate
    heroSrc="/marriage3.jpg"
    heroAlt={HeroPrestaMariage.alt}
    heroTitle={HeroPrestaMariage.title}
    heroText="L’incontournable bar à cocktails avec barmans jongleurs cracheur de feu et des formules attractives tout inclus, de l’open bar ou bien un devis personnalisé, dites nous simplement le type d’événement, le lieux et le nombre d’invités pour commencer."
    marriage={true}
    list={ListPrestaMariage}
    listContent={ListPrestaMariageContent}
    showNumbers={true}
  />
);

export default Mariage;
