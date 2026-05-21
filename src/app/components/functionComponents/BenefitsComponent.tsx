import Image from "next/image";
import { IoIosLeaf } from "react-icons/io";

type BenefitIconProps = {
  children: React.ReactNode;
  text: string;
};

const Benefits = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 Textbox_width mx-auto">
      <div className="col-span-full">
        <h2 className="text-center mx-auto">Better for You</h2>
      </div>
      <BenefitIcon text="Less sugar">
        <Image
          src="/assets/svg/less-sugar.svg"
          alt="icon"
          width={100}
          height={100}
          className="object-center object-contain max-w-[80%] aspect-square min-w-[30]"
        />
      </BenefitIcon>
      <BenefitIcon text="Organic">
        <Image
          src="/assets/svg/Organic.svg"
          alt="icon"
          width={100}
          height={100}
          className="object-center object-contain max-w-[80%] aspect-square min-w-[30]"
        />
      </BenefitIcon>
      <BenefitIcon text="No artificial additives">
        <Image
          src="/assets/svg/no-artificial-additives.svg"
          alt="icon"
          width={100}
          height={100}
          className="object-center object-contain max-w-[80%] aspect-square min-w-[30]"
        />
      </BenefitIcon>
      <BenefitIcon text="Great taste">
        <Image
          src="/assets/svg/great-taste.svg"
          alt="icon"
          width={100}
          height={100}
          className="object-center object-contain max-w-[80%] aspect-square min-w-[30]"
        />
      </BenefitIcon>
    </div>
  );
};

const BenefitIcon = ({ children, text }: BenefitIconProps) => {
  return (
    <div className="flex flex-col w-full gap-4 items-center">
      <div className="p-2 flex justify-center overflow-hidden border-[--black] border-3 rounded-full w-fit aspect-square ">
        {/* <IoIosLeaf size={40} /> */}
        {children}
      </div>

      <p className="text-center">{text}</p>
    </div>
  );
};

export default Benefits;
