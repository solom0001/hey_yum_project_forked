"use client";

import LinkButton from "../utilityComponents/LinkButton";
import TextBox from "../utilityComponents/TextBox";
import Image from "next/image";
import useScrollReveal from "@/app/hooks/useScrollReveal";

const Passion = ({ page }: { page: string }) => {
  const ref = useScrollReveal();
  return (
    <div className="md:grid md:grid-cols-[1fr_minmax(0,1600px)_1fr] [&>*]:col-2">
      <div className="flex flex-col md:grid md:grid-cols-[2fr_3fr]">
        <div className="flex flex-col md:order-2">
          <div className="order-2 md:order-0 md:mx-auto">
            <TextBox tagheader="Passion" header="Hey Yum! Only the good">
              <div className="grid ">
                <div className=" flex flex-col gap-6 my-4">
                  <p>
                    We’re HEY YUM! and we make yummilicious ORGANIC candy
                    glowing with good vibes.
                  </p>
                  <p>
                    We’re a young Danish company on a journey to redefine candy
                    and offer the world an alternative – one that’s ORGANIC,
                    unjunked and just better.
                  </p>
                  <p>
                    It started with a sweet idea. We wanted to make a whimsical
                    universe of gummilicious magic. Something wonderfully soft
                    and wickedly chewy, free from artificial flavours, colours,
                    sweeteners and preservatives. So we got busy in the kitchen
                    and stirred up a tasty treat that’s flavoured with fruit and
                    mixed with sweet intentions.
                  </p>
                  <p className="mb-8">
                    Each bright kind of ORGANIC, juicy HEY YUM! candy is a
                    whimsical universe of gummilicious magic where everyone is
                    welcome.
                  </p>
                  {page === "home" && (
                    <LinkButton
                      color="--black"
                      link="aboutUs"
                      text="Read more"
                    />
                  )}
                </div>
              </div>
            </TextBox>
          </div>
          <div className="relative w-full h-[240] md:h-[660] order-1 ">
            <Image
              loading="eager"
              src="/assets/images/home/all_flavors_homeenv_shot.png"
              alt="Social Media image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover h-auto w-auto p-4"
            />
          </div>
        </div>
        <div className="flex md:flex-col md:gap-[40] p-4">
          <div className="relative w-full h-[167] md:h-full mt-auto">
            <Image
              loading="eager"
              src="/assets/images/home/basketOfYum.png"
              alt="Social Media image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover h-auto w-auto"
            />
          </div>
          <div className="relative w-full h-[204] md:h-full">
            <Image
              loading="eager"
              src="/assets/images/home/handOfGummies.png"
              alt="Social Media image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover h-auto w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passion;
