"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { ScrollRef } from "next/dist/shared/lib/app-router-types";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

type ProductResponse = {
  id: string;
  details_imgs: string[];
  name: string;
  card_imgs: string[];
};

type Props = {
  productDetails: ProductResponse;
};

const DetailsImg = ({ productDetails }: Props) => {
  const [index, setIndex] = useState(-1);

  const slides = [
    { src: productDetails.card_imgs[0] },
    { src: productDetails.details_imgs[1] },
    { src: productDetails.details_imgs[2] },
    { src: productDetails.details_imgs[1] },
  ];

  //dot indicators to carousel
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const index = Math.round(
      scrollRef.current.scrollLeft / scrollRef.current.offsetWidth,
    );
    setCurrent(index);
  };

  return (
    <div className="max-w-[530] flex-col flex gap-[20] md:pt-[6rem] overflow-hidden">
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Fullscreen]}
      />
      <div className="relative w-full max-h-[750px] overflow-hidden hidden md:grid rounded-(--card_rounded) group">
        {/* Base image */}
        <img
          src={productDetails.card_imgs[0]}
          alt={productDetails.name}
          className="col-1 row-1 object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110 "
        />

        {/* Reveal image */}
        <img
          src={productDetails.card_imgs[1]}
          alt={productDetails.name}
          className="col-1 row-1 object-cover w-full h-full
                  transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]
                  [clip-path:circle(0%_at_50%_50%)] group-hover:scale-110
                  group-hover:[clip-path:circle(150%_at_50%_50%)]"
        />
      </div>
      <div className="relative w-full hidden md:grid max-h-[700] overflow-hidden rounded-(--card_rounded) group">
        <img
          loading="eager"
          src={productDetails.details_imgs[1]}
          alt={productDetails.name}
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
      <div className="hidden md:grid grid-cols-2 gap-[20]">
        <div className="relative w-full h-[340] overflow-hidden rounded-(--card_rounded) group grid">
          <img
            loading="eager"
            src={productDetails.details_imgs[2]}
            alt={productDetails.name}
            className="object-cover col-1 row-1 w-full h-full
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
        <div className="relative w-full max-h-[340] overflow-hidden rounded-(--card_rounded) group grid">
          <img
            loading="eager"
            src={productDetails.details_imgs[3]}
            alt={productDetails.name}
            className="object-cover w-full h-full
          transition-all duration-200 ease-in
          group-hover:scale-105"
          />

          <Image
            loading="eager"
            src="/assets/svg/Mask_2.svg"
            alt="Mask"
            fill
            sizes="w-[431] h-[484]"
            className="object-cover col-1 row-1 scale-[3]
          transition-all duration-300 ease-in pointer-events-none
          group-hover:scale-105 w-auto h-auto"
          />
        </div>
      </div>

      {/*mobile */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-[45vh] w-full snap-center"
              onClick={() => setIndex(i)}
            >
              <img
                loading="eager"
                src={slide.src}
                alt={productDetails.name}
                className="object-center h-full w-full object-cover "
              />
            </div>
          ))}
        </div>
      </div>
      {/*dots/indicators */}
      <div className="flex md:hidden justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full border-[0.5]  transition-all duration-300 ${i === current ? "w-6 bg-(--black)" : "w-1.5 bg-(--white)"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsImg;
