import DropDown from "./DropDown";

type Props = {
  productDetails: {
    product_ingredients: {
      ingredients: { name: string };
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
};

export default function IngredientsSec({ productDetails }: Props) {
  return (
    <section className="grid border-b-2">
      <DropDown header="Ingredients">
        <p>
          {productDetails.product_ingredients
            .map((item) => item.ingredients.name)
            .join(", ")}
        </p>
      </DropDown>

      <DropDown header="Nutrition">
        <div className="grid gap-2">
          {productDetails.product_nutrition.map((item, index) => (
            <div key={index}>
              <p>Energy (kj): {item.energy_kj}</p>
              <p>Fat: {item.fat}</p>
              <p>Carbohydrates: {item.carbohydrates}</p>
              <p>Protein: {item.protein}</p>
              <p>Saturates: {item.saturates}</p>
              <p>Sugars: {item.sugars}</p>
              <p>Salt: {item.salt}</p>
              <p>Per amount: {item.per_amount}</p>
            </div>
          ))}
        </div>
      </DropDown>
    </section>
  );
}
