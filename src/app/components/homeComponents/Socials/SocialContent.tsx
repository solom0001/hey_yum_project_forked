import Image from "next/image";
import SocialText from "./SocialsText";

const SocialContent = () => {
  return (
    <div className="grid grid-rows-2 md:gap-[40] max-h-[1020]">
      <div className="grid md:grid-cols-[1fr_1fr_2fr] gap-[20]">
        <div className="relative w-full h-[440] overflow-hidden  group hidden md:grid">
          <Image
            loading="eager"
            src="/assets/images/home/Social-img-1.png"
            alt="Social Media image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover col-1 row-1
            transition-all duration-300 ease-in
            group-hover:scale-105
            "
          />

          <Image
            loading="eager"
            src="/assets/svg/Mask_2.svg"
            alt="Mask"
            fill
            sizes="w-[431] h-[484]"
            className="object-cover col-1 row-1 scale-[3]
            transition-all duration-200 ease-in pointer-events-none
            group-hover:scale-105 w-auto h-auto"
          />
        </div>
        <div className="relative w-full h-[440] overflow-hidden  group hidden md:grid">
          <Image
            loading="eager"
            src="/assets/images/home/Social-img-2.png"
            alt="Social Media image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover col-1 row-1
            transition-all duration-200 ease-in
            group-hover:scale-105"
          />

          <Image
            loading="eager"
            src="/assets/svg/Mask_1.svg"
            alt="Mask"
            fill
            sizes="w-[431] h-[484]"
            className="object-cover col-1 row-1 scale-[3]
            transition-all duration-300 ease-in pointer-events-none
            group-hover:scale-105 w-auto h-auto"
          />
        </div>
        <div className="mx-auto self-center">
          <SocialText />
        </div>
      </div>
      <div className="grid md:grid-cols-[1fr_2fr_1fr] grid-cols-[3fr_2fr] gap-[20]">
        <div className="relative w-full h-[440] ml-auto overflow-hidden grid group md:col-2">
          <Image
            loading="eager"
            src="/assets/images/home/Social-img-3.png"
            alt="Social Media image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover col-1 row-1
            transition-all duration-200 ease-in
            group-hover:scale-105"
          />

          <Image
            loading="eager"
            src="/assets/svg/Mask_3.svg"
            alt="Mask"
            fill
            sizes="w-[431] h-[484]"
            className="object-cover col-1 row-1 scale-[3]
            transition-all duration-300 ease-in pointer-events-none
            group-hover:scale-105 w-auto h-auto"
          />
        </div>

        <div className="relative w-full h-[440px] overflow-hidden grid group md:col-3">
          <Image
            loading="eager"
            src="/assets/images/home/Social-img-4.png"
            alt="Social Media image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover col-1 row-1
            transition-all duration-200 ease-in
            group-hover:scale-105"
          />

          <Image
            loading="eager"
            src="/assets/svg/Mask_4.svg"
            alt="Mask"
            fill
            sizes="w-[431] h-[484]"
            className="object-cover col-1 row-1 scale-[3]
            transition-all duration-300 ease-in pointer-events-none
            group-hover:scale-105 w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialContent;
