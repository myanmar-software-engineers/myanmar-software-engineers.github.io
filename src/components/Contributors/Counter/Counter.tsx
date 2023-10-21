import SquareBox from "@/components/Ui/SquareBox/SquareBox";
import { useState } from "react";

const Counter = () => {
  const [counter, setState] = useState(0);
  return (
    <SquareBox className="bg-rose-500">
      <div className="cursor-pointer" onClick={() => setState((prev) => prev + 1)}>
        Click Me: {counter}
      </div>
    </SquareBox>
  );
};

export default Counter;
