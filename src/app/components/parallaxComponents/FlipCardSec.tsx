import FlipCard from "./FlipCard";
import Image from "next/image";

const FlipCardSec = () => {
  return (
    <div className="grid grid-cols-3 md:flex flex-row gap-0 w-full h-[500] [&_h1]:text-[17rem]! *:flex *:text-center">
      <FlipCard
        front={
          <div className="w-full h-full relative">
            <Image src="/assets/svg/h.svg" alt="image" fill className="object-center object-cover" />
          </div>
        }
        back={
          <div className="aspect-square md:aspect-auto w-full h-full overflow-hidden">
            <Image src="/assets/images/aboutUs/lovespringflower.png" alt="image" width={500} height={500} className="object-center object-cover" />
          </div>
        }
      />
      <FlipCard
        front={
          <div className="w-full h-full relative">
            <Image src="/assets/svg/e.svg" alt="image" fill className="object-center object-cover" />
          </div>
        }
        back={
          <div className=" aspect-square md:aspect-auto w-full h-full overflow-hidden">
            <Image src="/assets/images/aboutUs/peak.png" alt="image" width={500} height={500} className="object-center object-cover" />
          </div>
        }
      />
      <FlipCard
        front={
          <div className="w-full h-full relative">
            <Image src="/assets/svg/y.svg" alt="image" fill className="object-center object-cover" />
          </div>
        }
        back={
          <div className="aspect-square md:aspect-auto w-full h-full overflow-hidden">
            <Image src="/assets/images/aboutUs/sowerSweets.png" alt="image" width={500} height={500} className="object-center object-cover" />
          </div>
        }
      />

      <FlipCard
        front={
          <div className="aspect-square md:aspect-auto w-full h-full overflow-hidden">
            <Image src="/assets/images/aboutUs/yellowRoom.png" alt="image" width={500} height={500} className="object-center object-cover" />
          </div>
        }
        back={
          <div className="w-full h-full relative">
            <Image src="/assets/svg/y2.svg" alt="image" fill className="object-center object-cover" />
          </div>
        }
      />
      <FlipCard
        back={
          <div className=" aspect-square md:aspect-auto w-full h-full overflow-hidden">
            <Image src="/assets/images/aboutUs/pinkcupboard.png" alt="image" width={500} height={500} className="object-center object-cover" />
          </div>
        }
        front={
          <div className="w-full h-full relative">
            <Image src="/assets/svg/u.svg" alt="image" fill className="object-center object-cover" />
          </div>
        }
      />

      <FlipCard
        back={
          <div className="aspect-square md:aspect-auto w-full h-full">
            <Image src="/assets/images/aboutUs/lovespringOpen.png" alt="image" width={500} height={500} className="object center object-cover" />
          </div>
        }
        front={
          <div className="w-full h-full relative">
            <Image src="/assets/svg/m.svg" alt="image" fill className="object-center object-cover" />
          </div>
        }
      />
    </div>
  );
};

export default FlipCardSec;
