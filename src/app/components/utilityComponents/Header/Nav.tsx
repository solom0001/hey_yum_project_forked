"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Basket from "./Basket";
import BasketItems from "./BasketItems";

type Page = "home" | "production" | "products" | "aboutUs" | "contact" | "";

type Props = {
  page: Page;
};

const Nav = ({ page }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);

  return (
    <div className="grid sticky top-0 left bg-(--white) z-100 border-b-3 border-t-3 border-(--black) w-full ContentWitdh">
      <nav className="flex justify-between h-[60] *:my-auto">
        <Link href={"/"}>
          <Image loading="eager" src="/assets/images/home/Logo.svg" alt="image" width={100} height={100} className="object-center w-[120] h-auto object-cover hover:scale-110 transition-all duration-100 ease-in" />
        </Link>
        <div className="w-fit hidden md:flex h-full  gap-6 justify-between items-center">
          <Link href={"/productList"}>
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "products" && "font-bold! "} `}
            >
              Products
            </p>
            {page === "products" && <div className="h-0.5 w-full bg-(--black)"></div>}
          </Link>
          <Link href={"/production"}>
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "production" && "font-bold! "} `}
            >
              Production
            </p>
            {page === "production" && <div className="h-0.5 w-full bg-(--black)"></div>}
          </Link>
          <Link href={"/aboutUs"} className="flex flex-col">
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "aboutUs" && "font-bold!"} `}
            >
              About us
            </p>
            {page === "aboutUs" && <div className="h-0.5 w-full bg-(--black)"></div>}
          </Link>
          <Link href={"/contact"} className="flex flex-col">
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "contact" && "font-bold!"} `}
            >
              Contact
            </p>
            {page === "contact" && <div className="h-0.5 w-full bg-(--black)"></div>}
          </Link>
        </div>

        <div className=" flex flex-nowrap gap-8 h-full w-auto items-center">
          <Basket openBasket={openBasket} setOpenBasket={setOpenBasket} />

          <div onClick={() => setIsOpen(!isOpen)} className="flex relative z-0 md:hidden h-full w-fit flex-col gap-2 justify-center transition-all duration-300 ease-in-out ">
            <span className={`block w-8 h-[2] rounded-2xl bg-(--black) transition-all duration-300  ${isOpen ? "translate-y-[10px] rotate-45" : ""}`}></span>
            <span className={` w-8 h-[2] rounded-2xl bg-(--black) transition-all duration-300  ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block w-8 h-[2] rounded-2xl bg-(--black) transition-all duration-300  ${isOpen ? "-translate-y-[10px] -rotate-45" : ""}`}></span>

            <div className={`absolute flex flex-col gap-8 *:max-h-[35] z-10 top-full right-0  h-[40vh]  w-[40vw] p-4 bg-(--black) text-(--white)! transition-all duration-300  ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
              <Link href={"/productList"}>
                <p
                  className={`  py-2 border-b-2 active:scale-[1.05] active:font-bold! transition-scale
            ${page === "products" && "font-semibold"} `}
                >
                  Products
                </p>
              </Link>
              <Link href={"/production"}>
                <p
                  className={`  py-2 border-b-2 active:scale-[1.05] active:font-bold! transition-scale
            ${page === "production" && "font-semibold"} `}
                >
                  Production
                </p>
              </Link>
              <Link href={"/aboutUs"}>
                <p
                  className={`  py-2 border-b-2 active:scale-[1.05] active:font-bold! transition-scale
            ${page === "aboutUs" && "font-semibold"} `}
                >
                  About us
                </p>
              </Link>
              <Link href={"/contact"}>
                <p
                  className={` py-2 border-b-2 active:scale-[1.05] active:font-bold! transition-scale
            ${page === "contact" && "font-semibold"} `}
                >
                  Contact
                </p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <BasketItems openBasket={openBasket} setOpenBasket={setOpenBasket} />
      <div
        onClick={() => setOpenBasket(!openBasket)}
        className={`z-25 fixed top-0 right-0 w-screen h-screen
            transition-all duration-200 ease-in  ${openBasket === true ? "bg-black/30" : "bg-bg-black/0 pointer-events-none"}`}
      ></div>
    </div>
  );
};

export default Nav;
