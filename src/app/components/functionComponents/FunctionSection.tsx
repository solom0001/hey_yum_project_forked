"use client";

import Benefits from "./BenefitsComponent";
import Image from "next/image";
import useScrollReveal from "@/app/hooks/useScrollReveal";
import HeaderOneComp from "../utilityComponents/HeaderOneComp";

const FunctionSection = () => {
  const ref = useScrollReveal();

  return (
    <div className="flex flex-col gap-[4.5rem] w-full S_content_width">
      <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-10 items-center p-4">
        <div className="flex flex-col">
          <span className="w-fit flex flex-col gap-7.5">
            {/* <h1>TASTY BY NATURE</h1> */}
            <HeaderOneComp text="TASTY BY NATURE" />
            <p className="max-w-[600] leading-[130%] text-[2rem]!">Tasty, organic and cruelty free certified Candy to respect the environment and nature, obtained with energy produced from sources renewable</p>
          </span>
        </div>

        <Benefits />
      </div>
      <div ref={ref} className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-[1fr_1fr_1fr] scroll-reveal">
        <div className="relative col-span-full md:col-span-1 md:h-[450] reveal-item stagger-1">
          <Image loading="eager" src="/assets/images/home/loveSpring_sowerFlower_homeenv_shot.png" sizes="(max-width: 768px) 100vw, 50vw" fill alt="image of candy" className="object-center object-cover" />
        </div>

        <div className="relative sm:col-start-2 h-[250] md:h-[300] reveal-item stagger-3">
          <Image loading="eager" src="/assets/images/home/all_flavors_homeenv_shot.png" sizes="(max-width: 768px) 100vw, 50vw" fill alt="image of candy" className="object-bottom object-contain " />
        </div>
        <div className="relative h-[250] md:h-[450] reveal-item stagger-1">
          <Image loading="eager" src="/assets/images/home/triassicGarden_homeenv_shot.png" sizes="(max-width: 768px) 100vw, 50vw" fill alt="image of candy" className="object-center object-cover" />
        </div>
      </div>
    </div>
  );
};

export default FunctionSection;
