import Image from "next/image";
import StepComp from "./StepComp";
import { div } from "framer-motion/client";

const ProductionProcess = () => {
  return (
    <div className="ContentWitdh">
      <div className="flex flex-col md:grid grid-cols-2 gap-8 bg-(--black) text-(--white)! p-8">
        {/*Sticky image */}
        <div className="relative w-full h-full bg-[url(/assets/images/production/rainbow_bg.svg)] -mt-9 bg-contain bg-center bg-no-repeat">
          <div className="sticky top-[17%] aspect-square! md:aspect-auto w-[70%] mx-auto overflow-hidden grid *:col-1! *:row-1">
            <h1 className="mt-4 text-[2.5rem]! text-(--black) relative z-10 text-center">The making of Hey Yum!</h1>
            <div className="relative w-full aspect-square">
              <Image loading="lazy" src="/assets/images/production/heyyum_monster.png" alt="image" fill className="object-center object-cover" />
            </div>
          </div>
        </div>
        {/*Steps */}
        <div className="flex flex-col h-full gap-12">
          <StepComp title="Heating" src="prod_step1.png" step="1" text="Sugar, glucose syrup and gelling agent is carefully heated until gelling. Then citric acid is added becauce it brings richness to the fruity flavours. Then we add organic fruit and plant juice concentrates and high-quality natural flavourings and extracts." />
          <StepComp title="Molding" src="prod_step1.png" step="2" text=" A board of molds is pressed into wooden trays. The liquid mass then gets filled in those small wells created by the moulds. The gummy candies are then lying flat on their bellies until they get dry and keep their shape. In this way, six different colored fruit gums can be made at the same time." />
          <StepComp title="Coating" src="prod_step_3.jpg" step="3" text="When the the fruit gums are dry, they are taken out of their bed. The finished gummy candies are either coated with plant-based carnauba wax to give them a shiny appearance and prevent them from sticking together or they are coated with a sour sugar crystals like Sour Flower." />
        </div>
      </div>
    </div>
  );
};

export default ProductionProcess;
