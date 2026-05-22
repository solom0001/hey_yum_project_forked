"use client";

import Image from "next/image";
import SubmitButton from "../utilityComponents/SubmitButton";
import BasketCounter from "./BasketCounter";
import IngredientsSec from "./ingredientsDropDownComps/IngridientsSec";
import { useState } from "react";

type ProductResponse = {
  id: string;
  name: string;
  card_imgs: string[];
  details_imgs: string[];
  description: string;

  product_tags: {
    tags: {
      name: string;
      tag_icons: string;
    };
  }[];

  product_ingredients: {
    ingredients: {
      name: string;
    };
  }[];

  product_nutrition: {
    fat: number;
    salt: number;
    sugars: number;
    protein: number;
    energy_kj: number;
    saturates: number;
    per_amount: string;
    energy_kcal: number;
    carbohydrates: number;
  }[];
};
type BasketItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
};
type Props = {
  productDetails: ProductResponse;
};

const DetailsInfo = ({ productDetails }: Props) => {
  const [counter, setCounter] = useState(1);

  const basketSave = () => {
    const stored = localStorage.getItem("basket");

    const basket: BasketItem[] = stored ? JSON.parse(stored) : [];

    const existingIndex = basket.findIndex(
      (item: BasketItem) => item.id === productDetails.id,
    );

    const PRODUCT_PRICE = 250;

    if (existingIndex !== -1) {
      basket[existingIndex].quantity += counter;
    } else {
      basket.push({
        id: productDetails.id,
        name: productDetails.name,
        image: productDetails.card_imgs[0],
        quantity: counter,
        price: PRODUCT_PRICE,
      });
    }

    localStorage.setItem("basket", JSON.stringify(basket));
  };
  return (
    <div className="max-w-[650] h-fit flex flex-col px-4 sticky top-0  md:pt-[6rem]">
      <h3 className="">10 poser, 100g (1kg)</h3>
      <div className="flex">
        <h2 className="mb-2.5">{productDetails.name}</h2>
        <Image
          loading="lazy"
          src={`/assets/images/details/eu-organic-logo-600x400_0-300x200 2.png`}
          width={300}
          height={150}
          alt={"eu-organic-logo"}
          className=" h-[45] w-[63] rounded-(--std_rounded) ml-auto"
        />
      </div>
      <p>{productDetails.description}</p>
      <div className="mt-8 flex gap-[20]">
        {productDetails.product_tags.map((tag, index) => (
          <div key={tag.tags.name} className="flex flex-col">
            <img
              src={tag.tags.tag_icons}
              alt={tag.tags.name}
              className="object-cover md:h-[70] h-[45] w-[45] md:w-[70] mx-auto"
            />
            <span className="text-center font-semibold!" key={tag.tags.name}>
              {tag.tags.name}
            </span>
          </div>
        ))}
      </div>
      <p className="font-normal! md:text-[40px]! text-[1.5rem]! uppercase my-8">
        250 kr
      </p>
      <BasketCounter counter={counter} setCounter={setCounter} />
      <div
        onClick={() => {
          basketSave();
        }}
        className="*:w-full mt-4 mb-8 cursor-pointer"
      >
        <SubmitButton color="--orange" text="Add to cart" />
      </div>
      <IngredientsSec productDetails={productDetails} />
    </div>
  );
};

export default DetailsInfo;
