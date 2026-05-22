"use client";

import Image from "next/image";

export default function ParallaxSecOne() {
  return (
    <section className="parallaxSection h-[60vh] bg-(--black)">
      {/*Top layer*/}
      <div className="parallaxLayer speed-slow z-20 flex w-full justify-around ">
        <img
          src="/assets/images/home/star.svg"
          alt="product"
          className="w-[150px] aspect-square"
        />
        <img
          src="/assets/images/home/rectangle.svg"
          alt="product"
          className="w-[30px]"
        />
      </div>
      {/*Mid layer*/}
      <div className="parallaxLayer speed-fast  z-10 max-w-[400px] max-h-[100%] mx-auto  ">
        <Image
          loading="lazy"
          src="/assets/images/home/trassic-garden.png"
          alt="product"
          width={500}
          height={500}
          className="w-[100%] object-contain object-center rotate-45"
        />
      </div>
      {/*Bottomlayer*/}
      <div className="z-0">
        <h1 className="text-[14rem]! leading-[1.1] text-center text-(--white)">
          SWEET GOUEY NATTY
        </h1>
      </div>
    </section>
  );
}
