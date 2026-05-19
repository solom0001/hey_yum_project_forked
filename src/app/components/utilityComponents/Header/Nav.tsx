"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type Page = "home" | "products" | "aboutUs" | "contact";

type Props = {
  page: Page;
};

const Nav = ({ page }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <div style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.4s ease" }} className="grid fixed top-0 left bg-(--white) z-100 border-b-3 border-(--black) w-full ContentWitdh">
      <nav className="flex justify-between h-[60] *:my-auto">
        <Link href={"/"}>
          <Image src="/assets/images/home/Logo.svg" alt="image" width={100} height={100} className="object-center w-[120] h-auto object-cover hover:scale-110 transition-all duration-100 ease-in" />
        </Link>
        <div className="w-fit hidden md:flex h-full  gap-6 justify-between items-center">
          <Link href={"/productList"}>
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "products" && "font-semibold"} `}
            >
              Products
            </p>
          </Link>
          <Link href={"/aboutUs"}>
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "aboutUs" && "font-semibold"} `}
            >
              About us
            </p>
          </Link>
          <Link href={"/contact"}>
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "contact" && "font-semibold"} `}
            >
              Contact
            </p>
          </Link>
        </div>
        <div className=" flex flex-nowrap gap-8 h-full w-auto items-center">
          <div className=" max-h-[50%] aspect-square block">
            <Image src="/assets/svg/basket.svg" alt="image" width={100} height={100} className="object-center object-cover hover:scale-110 hover:cursor-pointer transition-all duration-100 ease-in" />
          </div>

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
    </div>
  );
};

export default Nav;
