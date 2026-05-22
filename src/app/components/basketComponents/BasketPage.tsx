"use client";

import { useEffect, useMemo, useState } from "react";
import SubmitButton from "../utilityComponents/SubmitButton";

type BasketItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

const BasketPage = () => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");

    if (storedBasket) {
      setBasket(JSON.parse(storedBasket));
    }
  }, []);

  const updateBasket = (updatedBasket: BasketItem[]) => {
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const removeItem = (id: string) => {
    const updatedBasket = basket.filter((item) => item.id !== id);
    updateBasket(updatedBasket);
  };

  const totalPrice = useMemo(() => {
    return basket.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [basket]);

  return (
    <section className="min-h-screen bg-(--white) px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-5xl">Your Basket</h1>
          <p className="mt-2 opacity-70">Review your items before checkout.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-10 items-start ○">
          <div className="flex flex-col gap-4 py-4 border-2 rounded-(--card_rounded)">
            {basket.length === 0 ? (
              <div className=" p-10 text-center">
                <p className="text-lg">Your basket is empty.</p>
              </div>
            ) : (
              basket.map((item) => (
                <div
                  key={item.id}
                  className=" px-4 flex flex-col sm:flex-row gap-4 justify-between "
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 object-cover rounded-xl"
                    />

                    <div className="flex flex-col">
                      <h2 className="font-lilita text-2xl">{item.name}</h2>

                      <p className="mt-2 opacity-70">
                        Quantity: {item.quantity}
                      </p>

                      <p className="mt-auto font-bold">
                        {item.price * item.quantity} kr
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="cursor-pointer font-bold text-(--orange) hover:opacity-70 transition-all duration-200"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="border-2 rounded-(--card_rounded) p-6 sticky top-10">
            <h2 className=" text-3xl mb-6">Order Summary</h2>

            <div className="flex justify-between items-center mb-6">
              <p className="font-bold">Total</p>
              <p className="font-bold text-xl">{totalPrice} kr</p>
            </div>
            <div className="*:w-full">
              <SubmitButton color="--black" text="Buy now" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketPage;
