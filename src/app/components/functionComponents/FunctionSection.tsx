"use client";

import Benefits from "./BenefitsComponent";
import Image from "next/image";
import useScrollReveal from "@/app/hooks/useScrollReveal";
import HeaderOneComp from "../utilityComponents/HeaderOneComp";
import LinkButton from "../utilityComponents/LinkButton";
import AnimatedBtn from "../utilityComponents/AnimatedBtn";

const FunctionSection = () => {
  const ref = useScrollReveal();

  return (
    <div className="flex flex-col gap-18">
      <div className="flex flex-col justify-center md:grid md:grid-cols-[2fr_1fr] gap-10 items-center">
        <div className="flex flex-col items-center md:ml-8">
          <span className="w-full flex flex-col md:gap-6 gap-2">
            {/* <h1>TASTY BY NATURE</h1> */}
            <div className="md:px-0 px-4">
              <HeaderOneComp text="TASTY BY NATURE" />
            </div>
            <p className="max-w-[600] leading-[130%] text-[clamp(1.375rem,1.1193rem+1.1364vw,2rem)]! px-4 md:px-0 mb-8">
              Tasty, organic and cruelty free certified Candy to respect the
              environment and nature, obtained with energy produced from sources
              renewable
            </p>
            <div className="px-4 md:px-0">
              <AnimatedBtn link={`production`} text="Read more" />
            </div>
          </span>
        </div>

        <Benefits />
      </div>
      <div
        ref={ref}
        className="grid grid-cols-2 gap-0! md:grid-cols-[1fr_1fr_1fr] scroll-reveal items-end"
      >
        <div className="relative col-span-full md:col-span-1 md:h-[450] reveal-item stagger-1">
          <Image
            loading="lazy"
            src="/assets/images/home/lovespri_sowerfl_glamb_pic.png"
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            alt="image of candy"
            className="object-center object-cover"
          />
        </div>

        <div className="relative row-start-2 md:row-start-1 col-start-2 h-[250] md:h-[300] reveal-item stagger-3">
          <Image
            loading="lazy"
            src="/assets/images/home/YumlikePopCorn.png"
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            alt="image of candy"
            className="object-bottom object-cover "
          />
        </div>
        <div className="relative h-[250] md:h-[450] reveal-item stagger-1">
          <Image
            loading="lazy"
            src="/assets/images/home/triassic_magicGa_glamb_pic.png"
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            alt="image of candy"
            className="object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FunctionSection;
