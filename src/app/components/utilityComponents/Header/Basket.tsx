"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type BasketItem = {
  id: string;
};

type Props = {
  openBasket: boolean;
  setOpenBasket: React.Dispatch<React.SetStateAction<boolean>>;
};

const Basket = ({ openBasket, setOpenBasket }: Props) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("basket");
    if (stored) setBasket(JSON.parse(stored));
  }, [openBasket]);

  const hasItems = basket.length > 0;

  return (
    <div
      onClick={() => setOpenBasket(!openBasket)}
      className="max-h-[50%] aspect-square relative cursor-pointer"
    >
      <Image
        src="/assets/svg/basket.svg"
        alt="basket"
        width={100}
        height={100}
        className="hover:scale-110 transition-all duration-100"
      />

      {hasItems && (
        <span className="absolute top-0 right-[-4] w-4 h-4 bg-(--orange) rounded-full text-[10px] flex items-center justify-center text-white"></span>
      )}
    </div>
  );
};

export default Basket;
