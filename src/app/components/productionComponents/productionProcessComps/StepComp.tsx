import Image from "next/image";

type Props={
    text:string;
    step:string;
    title:string;
    src:string;
}

const StepComp = ({text,step,title,src}:Props) => {
  return (
    <div className="flex flex-col gap-4 p-4 Textbox_width h-[500] ">
      <div className="w-full grid grid-cols-[1fr_2fr] md:grid-cols-2 h-fit">
        <span className="w-full flex flex-col justify-end ">
          <p className="text-[35px]!">{step}</p>
          <h3>{title}</h3>
        </span>

        <div className="relative aspect-square! md:aspect-auto w-full overflow-hidden">
          <Image loading="lazy" src={`/assets/images/production/${src}`} alt="image" fill className="object-center object-cover" />
        </div>
      </div>
<p>{text}</p>    
</div>
  );
};

export default StepComp;
