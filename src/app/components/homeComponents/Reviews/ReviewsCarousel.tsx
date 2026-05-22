"use client";

import { useEffect, useRef } from "react";

type Prop = {
  direction?: "right" | "";
  mask?: boolean;
};

const ReviewsCarousel = ({ direction, mask }: Prop) => {
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
      data-mask={mask}
      className="scroller w-full overflow-hidden "
    >
      <div
        className=" flex scroller_inner gap-4 md:h-[300] h-[240]
      *:p-4 *:h-full md:*:w-[300] *:w-[230] *:rounded-(--card_rounded)"
      >
        <div className="border-2 border-(--black) grid items-center ">
          <h2 className="mx-auto text-center text-[clamp(1.125rem,1.0227rem+0.4545vw,1.375rem)]! ">
            "Emballagen er fantastisk, og vingummierne er lækre. De har været et
            stort hit i vores butik." <br></br> - faire.com
          </h2>
        </div>
        <div className="border-2 border-(--black) grid items-center ">
          <h2 className="mx-auto text-center text-[clamp(1.125rem,1.0227rem+0.4545vw,1.375rem)]!">
            "Hurtig levering og perfekt emballage" <br></br> - faire.com
          </h2>
        </div>
        <div className="border-2 border-(--black) grid items-center ">
          <h2 className="mx-auto text-center text-[clamp(1.125rem,1.0227rem+0.4545vw,1.375rem)]!">
            "Elsker disse slik så meget!" <br></br> - faire.com
          </h2>
        </div>
        <div className="border-2 border-(--black) grid items-center ">
          <h2 className="mx-auto text-center text-[clamp(1.125rem,1.0227rem+0.4545vw,1.375rem)]!">
            "Hurtig levering og nem bestilling gør Hey Yum! til et oplagt valg."
            <br></br> -faire.com
          </h2>
        </div>
        <div className="border-2 border-(--black) grid items-center ">
          <h2 className="mx-auto text-center text-[clamp(1.125rem,1.0227rem+0.4545vw,1.375rem)]!">
            "Godt produkt" <br></br> - faire.com
          </h2>
        </div>
        <div className="border-2 border-(--black) grid items-center ">
          <h2 className="mx-auto text-center text-[clamp(1.125rem,1.0227rem+0.4545vw,1.375rem)]!">
            "Lækker produkt og perfekt sød emballage. Du kan ikke gå galt med
            Hey Yum!" <br></br> - faire.com
          </h2>
        </div>
        <div className="border-2 border-(--black) grid items-center ">
          <h2 className="mx-auto text-center text-[clamp(1.125rem,1.0227rem+0.4545vw,1.375rem)]!">
            "Jeg har allerede solgt Hey Yum, og de gik godt. Jeg kan anbefale
            det!" <br></br> - faire.com
          </h2>
        </div>
        <div className="border-2 border-(--black) grid items-center">
          <h2 className="mx-auto text-center text-[clamp(1.125rem,1.0227rem+0.4545vw,1.375rem)]!">
            "Yummy and fun!" <br></br> - faire.com
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
