import Image from "next/image";
import TextBox from "../utilityComponents/TextBox";

type Props = {
  text: string;
  header: string;
  src: string;
};

const ProdIntroSec = ({ text, header, src }: Props) => {
  return (
    <div className="S_Content_width">
      <div className="w-full flex flex-col md:grid grid-cols-2 gap-4 md:p-4">
        <TextBox header={header}>
          <p>{text}</p>
        </TextBox>

        <div className="relative h-[150] md:aspect-auto w-full md:h-auto overflow-hidden">
          <Image loading="eager" src={`/assets/images/production/${src}`} alt="image" fill className="object-center object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ProdIntroSec;
