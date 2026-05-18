type Colors =
  | "--white"
  | "--black"
  | "--orange"
  | "--yellow"
  | "--green"
  | "--light_green"
  | "--blue"
  | "--magenta";

type Props = {
  text: string;
  color: Colors;
  pending?: boolean;
};

const SubmitButton = ({ text, color = "--black", pending }: Props) => {
  const colorMap: Record<Colors, Colors> = {
    "--black": "--white",
    "--white": "--black",
    "--orange": "--white",
    "--yellow": "--white",
    "--green": "--white",
    "--blue": "--white",
    "--light_green": "--white",
    "--magenta": "--white",
  };

  const antiColor = colorMap[color];

  return (
    <button
      type="submit"
      style={
        {
          "--btn-color": `var(${color})`,
          "--btn-anti": `var(${antiColor})`,
        } as React.CSSProperties
      }
      className={`
      w-[170] font-bold text-center rounded-[5] px-4 
      border-2 h-[40] border-(--btn-color) text-[16px]
      text-(--btn-anti) bg-(--btn-color) transition-all duration-200 
      hover:bg-(--btn-anti) hover:text-(--btn-color) cursor-pointer
      ${pending ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {pending ? "Sending..." : text}
    </button>
  );
};

export default SubmitButton;
