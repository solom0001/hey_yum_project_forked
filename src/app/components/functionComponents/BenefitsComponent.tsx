import { IoIosLeaf } from "react-icons/io";

type BenefitIconProps = {
  children: React.ReactNode;
  text: string;
};

const Benefits = () => {
  return (
    <div className="grid grid-cols-4 gap-4 Textbox_width mx-auto">
      <div className="col-span-full">
        <h2 className="text-center mx-auto">Better for You</h2>
      </div>
      <BenefitIcon text="Less sugar">
        <IoIosLeaf size={40} />
      </BenefitIcon>
      <BenefitIcon text="Organic">
        <IoIosLeaf size={40} />
      </BenefitIcon>
      <BenefitIcon text="No artificial additives">
        <IoIosLeaf size={40} />
      </BenefitIcon>
      <BenefitIcon text="Great taste">
        <IoIosLeaf size={40} />
      </BenefitIcon>
    </div>
  );
};

const BenefitIcon = ({ children, text }: BenefitIconProps) => {
  return (
    <div className="flex flex-col w-full gap-4 items-center">
      <div className="p-2 border-[--black] border-2 rounded-full w-fit aspect-square">
        {/* <IoIosLeaf size={40} /> */}
        {children}
      </div>

      <p className="text-center">{text}</p>
    </div>
  );
};

export default Benefits;
