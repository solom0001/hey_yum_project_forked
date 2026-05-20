import Image from "next/image";

export default function ParallaxSecTwo() {
  return (
    <section className="relative grid h-[65vh] max-h-[500] overflow-clip *:col-start-1 *:row-start-1 ">
      {/*Top layer*/}

      <Image src="/assets/svg/playfully-tasty.svg" alt="image" width={1000} height={500} className="w-full h-[50%] img" />

      {/*Bottomlayer*/}

      <Image src="/assets/svg/paralllax-colored-shapes.svg" alt="image" width={1000} height={500} className="w-full h-[50%] img" />
    </section>
  );
}
