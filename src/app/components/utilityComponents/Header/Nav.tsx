"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Basket from "./Basket";
import BasketItems from "./BasketItems";

type Page = "home" | "products" | "aboutUs" | "contact";

type Props = {
  page: Page;
};

const Nav = ({ page }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll); //efter visible for førstegange, fjernede event listener
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.4s ease" }}
      className="grid fixed top-0 left bg-(--white) z-100 border-b-3 border-(--black) w-full ContentWitdh"
    >
      <nav className="flex justify-between h-[60] *:my-auto">
        <Link href={"/"}>
          <Image
            src="/assets/images/home/Logo.svg"
            alt="image"
            width={100}
            height={100}
            className="object-center w-[120] h-auto object-cover hover:scale-110 transition-all duration-100 ease-in"
          />
        </Link>
        <div className="w-fit h-full flex gap-6 justify-between items-center">
          <Link href={"/productList"} className="flex flex-col">
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "products" && "font-bold! "} `}
            >
              Products
            </p>
            {page === "products" && (
              <div className="h-0.5 w-full bg-(--black)"></div>
            )}
          </Link>
          <Link href={"/aboutUs"} className="flex flex-col">
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "aboutUs" && "font-bold!"} `}
            >
              About us
            </p>
            {page === "aboutUs" && (
              <div className="h-0.5 w-full bg-(--black)"></div>
            )}
          </Link>
          <Link href={"/contact"} className="flex flex-col">
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "contact" && "font-bold!"} `}
            >
              Contact
            </p>
            {page === "contact" && (
              <div className="h-0.5 w-full bg-(--black)"></div>
            )}
          </Link>
        </div>
        <Basket openBasket={openBasket} setOpenBasket={setOpenBasket} />
      </nav>
      <BasketItems openBasket={openBasket} setOpenBasket={setOpenBasket} />
      <div
        onClick={() => setOpenBasket(!openBasket)}
        className={`z-20 absolute top-0 right-0 w-screen h-screen
            transition-all duration-200 ease-in  ${openBasket === true ? "bg-black/30" : "bg-bg-black/0 pointer-events-none"}`}
      ></div>
    </div>
  );
};

export default Nav;
