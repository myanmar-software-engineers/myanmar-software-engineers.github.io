import SquareBox from "@/components/Ui/SquareBox/SquareBox";
import { generateColor } from "@/utils";
import { useState } from "react";

const Counter = () => {
  const [counter, setState] = useState(0);
  return (
    <SquareBox className={generateColor()}>
      <div
        className="cursor-pointer"
        onClick={() => setState((prev) => prev + 1)}
      >
        Counter with JS: {counter}
      </div>
    </SquareBox>
  );
};

export default Counter;
