import Image from "next/image";
import HeaderOneComp from "../utilityComponents/HeaderOneComp";

const featuresLeft = [
  {
    title: "Purely Natural",
    text: "Made with carefully selected ingredients and no unnecessary additives. Just pure, natural goodness.",
  },
  {
    title: "Earth-Friendly",
    text: "Sustainability guides everything we do. Better choices for you and the planet.",
  },
  {
    title: "Gluten Free",
    text: "All HEY YUM! products are gluten free (<20 ppm) and produced according to HACCP standards.",
  },
];

const featuresRight = [
  {
    title: "Palm Oil Free",
    text: "Our products contain no palm oil, helping support a more sustainable future.",
  },
  {
    title: "Organic Fruit Juice",
    text: "Made with organic fruit juice, plant concentrates, and natural aromas for authentic fruity flavour.",
  },
  {
    title: "Carefully Crafted Texture",
    text: "Love Spring uses plant-based pectin, while our other gummies use organic gelatine for their classic chew.",
  },
];

type IngredientFeatureProps = {
  title: string;
  text: string;
};

const IngredientFeature = ({ title, text }: IngredientFeatureProps) => (
  <div className="text-center">
    <h2 className="text-[27px]! mb-2 font-heyyum">{title}</h2>
    <p className="max-w-[30ch] mx-auto ">{text}</p>
  </div>
);

const IngredientsComp = () => {
  return (
    <section className="grid">
      <div className="*:mx-auto md:mb-12">
        <HeaderOneComp text="The Ingredients in Hey Yum!" />
      </div>

      <div
        className="
          mx-auto
          px-6 md:px-8
          grid 
          gap-10 md:gap-0
          md:grid-cols-[minmax(0,350px)_minmax(0,550px)_minmax(0,350px)]
          items-center 
        "
      >
        <div className="hidden md:grid grid-rows-3 gap-12 justify-between h-full ml-auto">
          {featuresLeft.map((feature) => (
            <IngredientFeature
              key={feature.title}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>

        <Image
          src="/assets/images/production/Ingredients_img.png"
          alt="Ingredients image"
          width={1000}
          height={800}
          loading="lazy"
          className="
            mx-auto
            w-full
            h-auto
            md:max-w-[700px]
            [mask-image:linear-gradient(to_bottom,black_94%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,black_94%,transparent_100%)]
          "
        />

        <div className="hidden md:grid grid-rows-3 gap-12  justify-between h-full">
          {featuresRight.map((feature) => (
            <IngredientFeature
              key={feature.title}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>

        <div className="md:hidden  grid grid-cols-2 gap-8">
          {[...featuresLeft, ...featuresRight].map((feature) => (
            <IngredientFeature
              key={feature.title}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsComp;
