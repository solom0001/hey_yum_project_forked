import Image from "next/image";
import TextBox from "../utilityComponents/TextBox";

const ProdIntroSec = () => {
  return (
    <div className="S_Content_width">
      <div className="w-full flex flex-col md:grid grid-cols-2 gap-4 md:p-4">
        <TextBox header="Hey Yum! is award winning Yummilicious organic candy, infused with fruit, sweetened with sugar and honey, and mixed with love">
          <p>All HEY YUM! sweets are certified ORGANIC. It’s something we’re passionate about. We believe ORGANIC is best for the planet and best for people. Including people with a sweet tooth. All our sweets carry the EU organic logo. They are made from all natural and organic ingredients and without any artificial flavour or colour. All basic ingredients come from controlled organic farms.</p>
          <div className="w-full flex flex-col md:grid grid-cols-2 gap-4 mt-4">
            <span>
              <h3 className="mb-2.5 font-semibold!">Gluten Free</h3>
              <p>All our HEY YUM! products are gluten free (less than 20ppm).he regulatory check of the allergen management is basedon the requirements of HACCP.</p>
            </span>
            <span>
              <h3 className="mb-2.5 font-semibold!">Palm Oil Free</h3>
              <p>All our HEY YUM! products are palm oil free. The problem with palm oil is one of massive clearing of rainforest at a high envionmental cost. Our rainforests are key to our planet and a sustainable future.</p>
            </span>
          </div>
        </TextBox>

        <div className="relative h-[150] md:aspect-auto w-full md:h-auto overflow-hidden">
          <Image loading="eager" src="/assets/images/production/upclose_candyShot.png" alt="image" fill className="object-center object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ProdIntroSec;
