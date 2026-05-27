"use client";

import { motion } from "framer-motion";
import TextBox from "../utilityComponents/TextBox";
import HeaderOneComp from "../utilityComponents/HeaderOneComp";
import Image from "next/image";
const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" as any },
  },
};

const QualitySec = () => {
  return (
    <section className="S_Content_width">
      <motion.div
        initial="hidden"
        className="grid grid-cols-1 md:grid-cols-[1fr_1fr] md:auto-rows-auto gap-x-10 gap-y-16 mx-auto col-start-2"
      >
        <div className="grid col-span-full items-center justify-center w-full max-h-[230px]!">
          <HeaderOneComp text="Quality" />
        </div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=""
        >
          <TextBox header="High quality is our baseline">
            <p>
              When sourcing high-quality raw materials, we ensure compliance
              with the strict EU organic requirements along the entire supply
              chain. Regular external controls according to international
              standards prove the strict compliance with the EU organic
              guidelines as well as IFS and HACCP standards at “higher level”.
            </p>
            <div className="grid grid-cols-[1fr_1fr] gap-5 mt-4">
              <Image
                loading="lazy"
                src="/assets/images/home/eu-organic-logo.png"
                alt="image"
                width={500}
                height={500}
                className="object-fill object-center"
              />
              <Image
                loading="lazy"
                src="/assets/images/home/ifs-logo-1.png"
                alt="image"
                width={500}
                height={500}
                className="object-fill object-center"
              />
            </div>
          </TextBox>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:mt-[50%] overflow-hidden"
        >
          <TextBox header="Organic matters: here’s why">
            <p>
              Organic is more than just a label—we believe it’s a commitment to
              environmental stewardship, and responsible food production. We
              belive organic is better for the planet and better for people.
              Including people with a sweet tooth
            </p>
            <ul className="*:mt-4 list-disc px-4">
              <li>
                <p>
                  Organic Foods are grown without the use of synthetic
                  herbicides, pesticides, and fertilizers
                </p>
              </li>
              <li>
                <p>
                  Organic Farming is Better for Nature. Organic farming
                  practices may reduce pollution, conserve water, reduce soil
                  erosion, increase soil fertility, and use less energy. Farming
                  without synthetic pesticides is also better for nearby birds
                  and animals as well as people who live close to farms.
                </p>
              </li>
              <li>
                <p>
                  Organic Farming is better for Animal Welfare. The animals must
                  be raised in living conditions accommodating their natural
                  behaviors (such as the ability to graze on pasture) and fed
                  organic feed and forage
                </p>
              </li>
              <li>
                <p>
                  No Genetically Modified Ingredients. GMOs or genetically
                  engineered (GE) foods are plants whose DNA has been altered in
                  ways that cannot occur in nature or in traditional
                  crossbreeding, most commonly in order to be resistant to
                  pesticides or produce an insecticide.
                </p>
              </li>
            </ul>
          </TextBox>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:-mt-[280px]!   "
        >
          <TextBox header="Member of organic Denmark">
            <p>
              As a member of Organic Denmark, we support an organization that
              has been transforming the organic sector for nearly 35 years.
              Organic Denmark is a pioneering lobbyist working to shape policies
              that drive organic market growth and turn the food sector into a
              catalyst for green development.
              <br />
              <br />
              Recognized by the UN Future Policy Award in 2018, they have helped
              Denmark become a world leader in organic agriculture, with goals
              like introducing 60 percent organic food in public kitchens and
              integrating organic farming into climate and biomotion.diversity
              strategies. At Sweet Intentions, we are committed to a vision of
              food production that gives more back to our planet than it
              takes—protecting nature, water, and ensuring animals live good,
              natural lives.
              <br />
              <br />
              Our membership in Organic Denmark is a commitment to a healthier
              planet, happier animals, and more fertile soil.
            </p>
            <div className="w-full mt-4">
              <Image
                loading="lazy"
                src="/assets/images/home/logo-organic-denmark-1.png"
                alt="image"
                width={500}
                height={500}
                className="object-fill object-center"
              />
            </div>
          </TextBox>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-h-[500px] md:mt-[50%]"
        >
          <TextBox header="Sustainable carnauba wax">
            <p>
              We use the organic glazing agent carnauba wax on our candy. The
              carnauba wax is exclusively from sustainable sources and part of
              the social project ‘Sustainable Carnauba’ – an organisation who
              works with companies to foster a responsible carnauba production,
              both improving working conditions and preserving
              biomotion.diversity. Futhermore, our supplier is certified in
              accordance with SEDEX ETICAL TRADE AUDIT (SMETA) and a member of
              UN GLOBAL COMPACT and comitted to their principles regarding human
              rights, working conditions, environment and anti-corruption.
            </p>
          </TextBox>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="h-fit"
        >
          <TextBox header="Commitment to global good via Oxfam">
            <p>
              As part of our commitment to sustainability, Sweet Intentions
              supports Oxfam Denmark through regular donations. Their work in
              fighting poverty and promoting sustainable development worldwide
              aligns with our values. Through this partnership, we contribute to
              creating lasting change in communities across the globe. Every
              time you choose our products, you’re not just making a sweet
              choice – you’re helping us support initiatives that make a real
              difference in people’s lives.
            </p>
          </TextBox>
          <div className="w-full">
            <Image
              loading="lazy"
              src="/assets/images/home/oxfam-logo.png"
              alt="image"
              width={500}
              height={500}
              className="object-fill object-center"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default QualitySec;
