import Link from "next/link";

type Props = {
  text: string;
  link: string;
};

const AnimatedBtn = ({ text, link }: Props) => {
  return (
    <Link href={`/${link}`}>
      <div className="w-[170] font-bold text-center border-3 border-(--black) rounded-full px-4 py-2 animated-btn hover:text-(--white)! active:scale-95 active:text-(--white) transition-transform duration-100">
        <div className="fill" />
        <span className="relative z-10">{text}</span>
      </div>
    </Link>
  );
};

export default AnimatedBtn;
