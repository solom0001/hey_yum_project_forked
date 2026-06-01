import ProdIntroSec from "@/app/components/productionComponents/ProductionIntroSec";
import ProductionProcess from "@/app/components/productionComponents/productionProcessComps/ProductionProcess";
import StepComp from "@/app/components/productionComponents/productionProcessComps/StepComp";
import Nav from "@/app/components/utilityComponents/Header/Nav";

export default function Contact() {
  return (
    <div className="grid gap-12">
      <Nav page="production" />
      <ProdIntroSec/>
      <ProductionProcess/>
    </div>
  );
}
