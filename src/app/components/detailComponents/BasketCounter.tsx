"use client";

type Props = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const BasketCounter = ({ counter, setCounter }: Props) => {
  return (
    <div className="w-[155] h-[42] rounded-full border-3 border-(--black) flex justify-between text-center items-center px-4">
      <p
        onClick={() => {
          counter > 1 && setCounter(counter - 1);
        }}
        className="text-[25px]! mt-[-0.3rem] cursor-pointer hover:scale-110 active:scale-90
       transition-all duration-150 ease-in select-none"
      >
        -
      </p>
      <p className="font-bold! text-2xl!">{counter}</p>
      <p
        onClick={() => setCounter(counter + 1)}
        className="text-[25px]! mt-[-0.5rem] cursor-pointer hover:scale-110 active:scale-90
       transition-all duration-150 ease-in select-none"
      >
        +
      </p>
    </div>
  );
};

export default BasketCounter;
