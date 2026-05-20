"use client";

import { useEffect, useRef } from "react";

type Prop = {
  direction?: "right" | "";
};

const Carousel = ({ direction }: Prop) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(
        ".scroller_inner",
      ) as HTMLElement | null;

      if (!scrollerInner) return;

      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;

        duplicatedItem.setAttribute("aria-hidden", "true");

        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);
  return (
    <div
      ref={scrollerRef}
      data-direction={direction}
      className="scroller w-full overflow-hidden"
    >
      <div className="border border-(--black) flex scroller_inner">
        <div className="border border-(--black) grid items-center w-[325] h-[190] ">
          <h2 className="mx-auto text-center text-[30px]!">Erewhon</h2>
        </div>
        <div className="border border-(--black) grid items-center w-[325] h-[190]">
          <h2 className="mx-auto text-center text-[30px]!">Illums Bolighus</h2>
        </div>
        <div className="border border-(--black) grid items-center w-[325] h-[190]">
          <h2 className="mx-auto text-center text-[30px]!">Dean & DeLuca</h2>
        </div>
        <div className="border border-(--black) grid items-center w-[325] h-[190]">
          <h2 className="mx-auto text-center text-[30px]!">Salling</h2>
        </div>
        <div className="border border-(--black) grid items-center w-[325] h-[190]">
          <h2 className="mx-auto text-center text-[30px]!">
            Louisiana Museum of Modern Art
          </h2>
        </div>
        <div className="border border-(--black) grid items-center w-[325] h-[190]">
          <h2 className="mx-auto text-center text-[30px]!">Le Bon Marché</h2>
        </div>
        <div className="border border-(--black) grid items-center w-[325] h-[190]">
          <h2 className="mx-auto text-center text-[30px]!">
            ARKEN Museum of Contemporary Art
          </h2>
        </div>
        <div className="border border-(--black) grid items-center w-[325] h-[190]">
          <h2 className="mx-auto text-center text-[30px]!">
            Designmuseum Danmark
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
