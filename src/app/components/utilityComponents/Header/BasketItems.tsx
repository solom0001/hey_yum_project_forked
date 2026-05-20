"use client";

import { useEffect, useMemo, useState } from "react";

type BasketItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

type Props = {
  openBasket: boolean;
  setOpenBasket: React.Dispatch<React.SetStateAction<boolean>>;
};

const BasketItems = ({ openBasket, setOpenBasket }: Props) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  // Load basket
  useEffect(() => {
    const stored = localStorage.getItem("basket");
    if (stored) setBasket(JSON.parse(stored));
  }, [openBasket]);

  // Sync helper
  const updateStorage = (updated: BasketItem[]) => {
    setBasket(updated);
    localStorage.setItem("basket", JSON.stringify(updated));
  };

  // Remove item
  const removeItem = (id: string) => {
    const updated = basket.filter((item) => item.id !== id);
    updateStorage(updated);
  };

  // Total price
  const totalPrice = useMemo(() => {
    return basket.reduce((sum, item) => sum + item.price, 0);
  }, [basket]);

  return (
    <div
      className={`z-26 max-w-[400] w-full h-screen overflow-hidden fixed top-0 right-0 ${
        openBasket ? "" : "pointer-events-none"
      }`}
    >
      <div
        className={`max-w-[400] w-full h-screen absolute top-0 right-0 bg-(--white) grid grid-rows-[60px_1fr_80px] px-4
        transition-all duration-200 ease-in
        ${openBasket ? "translate-x-0" : "translate-x-full pointer-events-none"}`}
      >
        {/* Header */}
        <div className="grid">
          <h2
            onClick={() => setOpenBasket(false)}
            className="rotate-45 w-fit h-fit self-center ml-auto cursor-pointer"
          >
            +
          </h2>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-4 overflow-y-auto">
          {basket.length === 0 ? (
            <p className="text-center mt-10">Basket is empty</p>
          ) : (
            basket.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 items-center justify-between"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={item.image}
                    className="w-20 h-30 object-cover rounded"
                    alt={item.name}
                  />

                  <div className="flex flex-col justify-between h-30">
                    <h2 className="my- font-lilita text-[25px]!">
                      {item.name}
                    </h2>
                    <p className="mt-auto">Qty: {item.quantity}</p>
                    <p>{item.price} kr</p>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-(--orange) font-bold cursor-pointer hover:text-red-600 transition-all duration-200 ease-in"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Total */}
        <div className="border-t pt-4 flex justify-between items-center">
          <h3 className="font-bold">Total</h3>
          <p className="font-bold">{totalPrice} kr</p>
        </div>
      </div>
    </div>
  );
};

export default BasketItems;
