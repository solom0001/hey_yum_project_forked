"use client";

import Image from "next/image";
import LinkButton from "../utilityComponents/LinkButton";
import IngredientsSec from "../detailComponents/ingredientsDropDownComps/IngridientsSec";

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
type Props = {
  productDetails: ProductResponse;
};

const ProductionDetails = ({ productDetails }: Props) => {
  return (
    <div className="max-w-[650] h-full flex flex-col px-4 ">
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
      <div className="[&>*>*]:w-full mt-8 mb-8 cursor-pointer">
        <LinkButton
          color="--black"
          link={`detail/${productDetails.id}?id=${productDetails.id}`}
          text="See now"
        />
      </div>
      <IngredientsSec productDetails={productDetails} />
    </div>
  );
};

export default ProductionDetails;
