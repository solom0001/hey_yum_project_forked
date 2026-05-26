import Facebook from "@/app/assests/icons/Facebook";
import Instagram from "@/app/assests/icons/Instagram";
import Link from "next/link";

type Colors = "--black" | "--white";

type Props = {
  color: Colors;
  size: number;
  gap: number;
};

const SocialLinks = ({ color, size, gap }: Props) => {
  const colorMap: Record<Colors, Colors> = {
    "--black": "--white",
    "--white": "--black",
  };

  const antiColor = colorMap[color];

  return (
    <div className={`flex`} style={{ gap: `${gap}px` }}>
      <Link
        href={"/"}
        aria-label="Follow us on Instagram"
        style={
          {
            "--socialsbtn-color": `var(${color})`,
            "--socialsbtn-anti": `var(${antiColor})`,
          } as React.CSSProperties
        }
        className="grid
        [&>*]:text-[var(--socialsbtn-color)] hover:[&>*]:text-[var(--socialsbtn-anti)]
        [&>span]:bg-[var(--socialsbtn-anti)]  hover:[&>span]:bg-[var(--socialsbtn-color)]"
      >
        <Instagram
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
          className=" col-1 row-1 z-2 transition-all duration-200 ease-in"
        />
        <span
          style={{
            width: `calc(${size}px - 4px)`,
            height: `calc(${size}px - 4px)`,
          }}
          className="col-1 row-1 z-1 rounded-full mx-auto self-center transition-all duration-200 ease-in"
        ></span>
      </Link>
      <Link
        href={"/"}
        aria-label="Follow us on Facebook"
        style={
          {
            "--socialsbtn-color": `var(${color})`,
            "--socialsbtn-anti": `var(${antiColor})`,
          } as React.CSSProperties
        }
        className="grid
        [&>*]:text-[var(--socialsbtn-color)] hover:[&>*]:text-[var(--socialsbtn-anti)]
        [&>span]:bg-[var(--socialsbtn-anti)]  hover:[&>span]:bg-[var(--socialsbtn-color)]"
      >
        <Facebook
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
          className=" col-1 row-1 z-2 transition-all duration-200 ease-in"
        />
        <span
          style={{
            width: `calc(${size}px - 4px)`,
            height: `calc(${size}px - 4px)`,
          }}
          className={`col-1 row-1 z-1 rounded-full mx-auto self-center transition-all duration-200`}
        ></span>
      </Link>
    </div>
  );
};

export default SocialLinks;
