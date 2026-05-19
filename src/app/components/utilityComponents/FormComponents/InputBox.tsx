type Colors = "--white" | "--black";
type ErrorState = {
  error?: Record<string, string[]>;
};

type InputProps<T extends ErrorState> = {
  dataInput: string;
  placeholder?: string;
  defaultValue?: string | number;
  state?: T;
  Optional?: boolean;
  color: Colors;
};

const Inputbox = <T extends ErrorState>({
  state,
  dataInput,
  placeholder,
  defaultValue,
  Optional = false,
  color,
}: InputProps<T>) => {
  const hasError = state?.error?.[dataInput];

  return (
    <textarea
      style={{
        borderColor: `var(${color})`,
        color: `var(${color})`,
      }}
      className={`w-full h-[300] px-4 py-2 border-2 rounded-[5] outline-none bg-transparent focus:ring-0
      ${hasError ? "border-(--red)" : "border-(--borderColor)"}`}
      name={dataInput}
      placeholder={placeholder}
      defaultValue={defaultValue ?? ""}
      required={!Optional}
    />
  );
};

export default Inputbox;
