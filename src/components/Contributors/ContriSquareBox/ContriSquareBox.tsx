import SquareBox from "@/components/Ui/SquareBox/SquareBox";
import { cn, generateColor } from "@/utils";
import { PropsWithChildren } from "react";

type TContriSquareBox = PropsWithChildren<{}>;
const ContriSquareBox: React.FC<TContriSquareBox> = ({ children }) => {
  return <SquareBox className={cn(generateColor())}>{children}</SquareBox>;
};
export default ContriSquareBox;
