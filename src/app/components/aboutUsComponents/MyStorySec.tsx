import HeaderOneComp from "../utilityComponents/HeaderOneComp";
import TextBox from "../utilityComponents/TextBox";
import Image from "next/image";

const MyStorySec = () => {
  return (
    <section className="S_Content_width mb-16">
      <div className="col-start-2 grid gap-4 grid-cols-[minmax(0,900px)] justify-center ">
        <div className="flex justify-center">
          <HeaderOneComp text="My Story" />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 ">

          <div className="order-2 md:order-1">

          <TextBox header="It all started with a sweet idea...">
            <p>
              In 2016 I created HEY YUM! with the intention to redefine candy
              and offer the world an alternative – one that’s ORGANIC, unjunked
              and just better.
              <br />
              <br />
              I went from designing digital solutions for Scandinavia’s largest
              bank to dreaming up flavours for HEY YUM!’s organic range of
              sweets – all becauce my son had been diagnosed with ADHD.
              <br />
              <br />I was looking for different ways to stabilize my son, and
              organic food ended up working for us. I live just outside
              Copenhagen, the Danish capitol, where organic food flourishes in
              multiple spots from small grocery stores to all the major
              supermarked. That is, until you hit the aisle with sweets…
            </p>
          </TextBox>
          </div>
          <div className="w-full h-[350] md:h-full relative overflow-hidden pt-4 order-1 ">
            <Image
              src="/assets/images/home/HEY-YUM-og-Henriette.png"
              alt="image"
              fill
              className="object-cover py-4 top-30 left-[40] "
            />
          </div>
          <div className="w-[100%] px-4 col-span-2 order-3">
            <p>
              I started looking in other shoppers baskets and noticed that
              people buy a great deal of organic products, but then they go to
              the confectionary section and have no other choice than to go for
              conventional candy. That’s really when the idea started growing on
              me: I wanted to make organic sweets – free from all the artificial
              stuff, my son couldn’t eat, and at the same time really great
              tasting and with the perfect bite too. Also, I wanted to create a
              colourful and playfull look.
              <br />
              <br />
              I started with cooking candy lessons and the first thing I leaned
              was that gummy sweets are a very simple product that can easily be
              organic and great-tasting, as there are great flavours and colours
              in Nature such as berries, spirulina, and turmeric – why would you
              ever use anything else?
              <br />
              <br />
              My wish is to bring you candy that is a little better for you, and
              a little better for our planet. I know that it’s not a super food,
              but it’s something naughty that’s made only of things that are
              nice
              <br />
              <br />
              Warmly
              <br />
              <br />
              Henriette
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyStorySec;
