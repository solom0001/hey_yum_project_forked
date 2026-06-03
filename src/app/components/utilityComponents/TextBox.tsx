type TextProps = {
  tagheader?: string;
  header: string;
  children: React.ReactNode;
  className?:string;
};

const TextBox = ({ tagheader, header, children,className }: TextProps) => {
  return (
    <div className={`Textbox_width flex flex-col p-4 ${className}`}>
      <h3 className="">{tagheader}</h3>
      <h2 className="mb-2.5">{header}</h2>
      {children}
    </div>
  );
};

export default TextBox;
