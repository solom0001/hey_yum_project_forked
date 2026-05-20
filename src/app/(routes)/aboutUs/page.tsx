import AwardsSec from "@/app/components/aboutUsComponents/AwardsSec";
import Manifesto from "@/app/components/aboutUsComponents/Manifesto";
import MyStorySec from "@/app/components/aboutUsComponents/MyStorySec";
import QualitySec from "@/app/components/aboutUsComponents/QualitySec";
import Passion from "@/app/components/homeComponents/Passion";
import FlipCardSec from "@/app/components/parallaxComponents/FlipCardSec";
import ParallaxSecOne from "@/app/components/parallaxComponents/ParallaxSecOne";
import ParallaxSecTwo from "@/app/components/parallaxComponents/ParallaxSecTwo";
import Nav from "@/app/components/utilityComponents/Header/Nav";

export default function Aboutus() {
  return (
    <div className="grid gap-16 h-fit">
      <Nav page="aboutUs" />
      <Passion page="" />
      <FlipCardSec />
      <AwardsSec />
      <Manifesto />
      <QualitySec />
      <MyStorySec />
      <div className="h-[1000]"></div>
    </div>
  );
}
