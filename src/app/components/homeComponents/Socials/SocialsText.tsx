import SocialLinks from "../../utilityComponents/SocialLinks";

const SocialText = () => {
  return (
    <div className="grid text-center gap-2 max-w-[600] px-4 mb:px-0">
      <h1>Our socials</h1>
      <h2>
        Follow us on instagram <br /> and Facebook
      </h2>
      <p className="text-[20px]!">
        Join Hey Yum! on Facebook and Instagram to get the latest updates,
        discover new events, and stay in the loop with everything we’re up to.
      </p>
      <div className="mx-auto mt-4">
        <SocialLinks color="--black" gap={45} size={55} />
      </div>
    </div>
  );
};

export default SocialText;
