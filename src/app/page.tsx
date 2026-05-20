import Image from "next/image";
import Nav from "./components/utilityComponents/Header/Nav";
import FunctionSection from "./components/functionComponents/FunctionSection";
import Hero from "./components/homeComponents/Hero";
import ParallaxSecOne from "./components/parallaxComponents/ParallaxSecOne";
import SocialContent from "./components/homeComponents/Socials/SocialContent";
import Footer from "./components/utilityComponents/Footer";
import Passion from "./components/homeComponents/Passion";
import ParallaxSecTwo from "./components/parallaxComponents/ParallaxSecTwo";
import ProductsComponent from "./components/utilityComponents/Products/ProductsComponent";
import Where from "./components/homeComponents/Where/Where";
import ScrollOpenin from "./components/utilityComponents/ScrollOpenin";

export default function Home() {
  return (
    <div className="grid ">
      <main className="">
        <Hero />
        <div className=" mt-[-60]">
          <Nav page="home" />

          <ScrollOpenin />
          <ParallaxSecTwo />
          <div className="air w-full h-[140]"></div>

          <FunctionSection />
          <div className="air w-full h-[140]"></div>

          <ProductsComponent text="Our Products" />
          <div className="air w-full h-[140]"></div>

          <Passion page="home" />
          <div className="air w-full h-[140]"></div>

          <SocialContent />
          <div className="air w-full h-[140]"></div>
          <div className="grid overflow-hidden">
            <Where />
          </div>
        </div>
      </main>
    </div>
  );
}
