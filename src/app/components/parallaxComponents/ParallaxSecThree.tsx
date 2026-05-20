"use client";

import Image from "next/image";

export default function ParallaxSecThree() {
  return (
    <section className="h-[45vh] bg-(--black) col-span-full">
      {/*Top layer*/}
      <div className="z-20 flex w-full h-full">
        <img src="/assets/images/home/para_three.svg" alt="product" className="img" />
      </div>
    </section>
  );
}
