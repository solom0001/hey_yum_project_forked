import { div } from "framer-motion/client";
import TextBox from "../utilityComponents/TextBox";
import HeaderOneComp from "../utilityComponents/HeaderOneComp";
import ParallaxSecOne from "../parallaxComponents/ParallaxSecOne";
import ParallaxSecThree from "../parallaxComponents/ParallaxSecThree";

const Manifesto = () => {
  return (
    <div className="w-full relative">
      <div className="S_Content_width h-auto md:p-8 p-4 md:gap-8 bg-(--black) text-(--white)">
        <div className="flex justify-center">
          <HeaderOneComp text="Meet our sweet manifesto" />
        </div>
        <div className="flex flex-nowrap overflow-x-auto s md:grid gap-4 grid-cols-3 *:min-w-[280px] md:[&>*]:min-w-0 *:grid ">
          <div>
            <TextBox header="Ace taste">
              <p>We create divine, mouthwatering, ecolicious sweets. Ours is candy without the makeup – natural in look and taste. And HEY! Turns out ingredients that are less harmful to the planet and our bodies also taste totally excellent. </p>
            </TextBox>
          </div>
          <div>
            <TextBox header="Balance is the boss">
              <p>We think that in life it’s not about perfection - its about balance. We’re not a superfood, we’re sweets - but we’re something naughty that’s made only of things that are nice. </p>
            </TextBox>
          </div>
          <div>
            <TextBox header="Mighty ethics">
              <p>Nothing that looks or tastes like an additive, preservative, artificial colour or flavour finds its crew in our packs. Instead, our candy is certified ORGANIC</p>
            </TextBox>
          </div>
        </div>
      </div>
      <ParallaxSecThree />
    </div>
  );
};

export default Manifesto;
