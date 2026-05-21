import HeaderOneComp from "../HeaderOneComp";
import Link from "next/link";

type Props = {
  text: string;
};

type ProductResponse = {
  id: string;
  name: string;
  card_imgs: string[];
  product_tags: {
    tags: {
      name: string;
    };
  }[];
};

const ProductsComponent = async ({ text }: Props) => {
  const response = await fetch(
    "https://towbvljdqlfyzhysgbtd.supabase.co/rest/v1/products?select=*,product_tags(tags(name))",
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
      <div className="gap-4 grid grid-cols-2 md:grid-cols-4 justify-center overflow-hidden!">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/detail/${product.id}?id=${product.id}`}
          >
            <div className="max-w-[250] w-full md:max-w-[400] flex flex-col gap-1">
              <div className="relative w-full max-h-[500px] overflow-hidden grid rounded-(--card_rounded) group">
                {/* Base image */}
                <img
                  src={product.card_imgs[0]}
                  alt={product.name}
                  className="col-1 row-1 object-cover w-full h-full transition-transform duration-1200 ease-out group-hover:scale-110 "
                />

                {/* Reveal image */}
                <img
                  src={product.card_imgs[1]}
                  alt={product.name}
                  className="col-1 row-1 object-cover w-full h-full
                  transition-all duration-1200 ease-[cubic-bezier(0.25,1,0.5,1)]
                  [clip-path:circle(0%_at_50%_50%)] group-hover:scale-110
                  group-hover:[clip-path:circle(150%_at_50%_50%)]"
                />
              </div>
              <h2 className="text-center font-lilita truncate">
                {product.name}
              </h2>

              <div className=" gap-1 flex flex-wrap justify-center max-h-[50] md:max-h-[fit] w-full">
                {product.product_tags.map((tag, index) => (
                  <div key={tag.tags.name} className="flex w-fit truncate">
                    <p className="text-[10px]! truncate w-fit">
                      {tag.tags.name}
                      {index !== product.product_tags.length - 1 && (
                        <span className="text-[10px]!"> /</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-center font-[400]! text-[1.5rem]! md:text-[1.6rem]! lg:text-[2rem]! uppercase mt-1">
                250 kr / kg
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
