import DetailedCards from "@/app/components/productionComponents/DetailedCards";
import IngredientsComp from "@/app/components/productionComponents/IngredientsComp";
import ProdIntroSec from "@/app/components/productionComponents/ProductionIntroSec";
import ProductionProcess from "@/app/components/productionComponents/productionProcessComps/ProductionProcess";
import StepComp from "@/app/components/productionComponents/productionProcessComps/StepComp";
import Nav from "@/app/components/utilityComponents/Header/Nav";

export default function Contact() {
  return (
    <div className="grid gap-12">
      <Nav page="production" />
      <ProdIntroSec />
      <div className="air w-full md:h-[70] h-[30]"></div>

      <ProductionProcess />
      <div className="air w-full md:h-[70] h-[30]"></div>

      <IngredientsComp />
      <div className="air w-full md:h-[70] h-[30]"></div>

      <DetailedCards text="Detail for out products" />
      <div className="air w-full md:h-[70] h-[30]"></div>
    </div>
  );
}
