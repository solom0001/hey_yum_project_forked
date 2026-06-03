import DetailedCards from "@/app/components/productionComponents/DetailedCards";
import IngredientsComp from "@/app/components/productionComponents/IngredientsComp";
import ProdIntroSec from "@/app/components/productionComponents/ProductionIntroSec";
import ProductionProcess from "@/app/components/productionComponents/productionProcessComps/ProductionProcess";
import StepComp from "@/app/components/productionComponents/productionProcessComps/StepComp";
import Nav from "@/app/components/utilityComponents/Header/Nav";

export default function Contact() {
  return (
    <div className="grid gap-4">
      <Nav page="production" />
      <h1 className="mx-auto text-center m-4">How It's Made</h1>
      <ProdIntroSec
        header="Yummilicious Organic Candy"
        text="All Hey Yum! sweets are certified ORGANIC. It’s something we’re passionate about. We believe ORGANIC is best for the planet and best for people. Including people with a sweet tooth. All our sweets carry the EU organic logo. They are made from all natural and organic ingredients and without any artificial flavour or colour. All basic ingredients come from controlled organic farms."
        src="upclose_candyShot.png"
      />
      <div className="air w-full md:h-[70] h-[30]"></div>

      <ProdIntroSec
        header="Recyclable Packaging"
        reverse
        text="The foil we use for HEY YUM! is type (pp). It is suitable for recycling and comply with EU food regulations. Please make sure to recycle the empty foil bag by placing it the waste containers for recyclable soft plast. In that way together we can reduce the consumption of non-renewable raw materials."
        src="threePackonBg.png"
      />
      <div className="air w-full md:h-[70] h-[30]"></div>
      <ProductionProcess />

      <div className="air w-full md:h-[70] h-[30] md:last:order-1!"></div>
      <IngredientsComp />
      <div className="air w-full md:h-[70] h-[30]"></div>
      <DetailedCards text="Detail for our products" />
      <div className="air w-full md:h-[70] h-[30]"></div>
    </div>
  );
}
