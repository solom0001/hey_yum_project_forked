import Link from "next/link";
import Image from "next/image";
import HeaderOneComp from "../utilityComponents/HeaderOneComp";
import DetailsInfo from "../detailComponents/DeailsInfo";
import ProductionDetails from "./ProductionDetails";

type Props = {
  text: string;
};

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

const DetailedCards = async ({ text }: Props) => {
  const response = await fetch(
    "https://towbvljdqlfyzhysgbtd.supabase.co/rest/v1/products?select=*,product_tags(tags(*)),product_ingredients(ingredients(name)),product_nutrition(*)",
    {
      headers: {
        apikey: `sb_publishable_hQLCA1gMNkb9AcWu9-IHcA_WylH6nPP`,
        Authorization: `Bearer sb_publishable_hQLCA1gMNkb9AcWu9-IHcA_WylH6nPP`,
        "Content-Type": "application/json",
      },
    },
  );

  console.log(response.status);

  const products = (await response.json()) as ProductResponse[];

  console.log(products);

  return (
    <div className="ContentWitdh md:gap-8 gap-2 ">
      <HeaderOneComp text={text} />
      <div className="gap-16 grid justify-center overflow-hidden!">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col md:flex-row gap-8">
            <div className="relative w-full md:max-w-[330] h-full md:h-[500] overflow-hidden grid rounded-(--card_rounded) group">
              <Image
                src={product.card_imgs[0]}
                alt={product.name}
                loading="lazy"
                width={300}
                height={400}
                className="col-1 row-1 object-cover w-full h-full transition-transform duration-1200 ease-out group-hover:scale-110 "
              />

              <Image
                src={product.card_imgs[1]}
                alt={`${product.name}`}
                loading="lazy"
                width={300}
                height={400}
                className="
                    col-1 row-1 object-cover w-full h-full
                  transition-all duration-1200 ease-[cubic-bezier(0.25,1,0.5,1)]
                  [clip-path:circle(0%_at_50%_50%)] group-hover:scale-110
                  group-hover:[clip-path:circle(150%_at_50%_50%)]"
              />
            </div>

            <ProductionDetails productDetails={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedCards;
