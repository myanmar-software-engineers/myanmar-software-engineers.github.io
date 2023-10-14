import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import styles from "@/styles/styles";

type TSquareBox = PropsWithChildren<{}>;

const SquareBox = ({ children }: TSquareBox) => {
  return (
    <div
      className={cn(
        "relative bg-white bg-opacity-10 rounded-2xl py-5 overflow-hidden  max-w-[800px] mx-auto",
        styles.paddingHelper
      )}
    >
      <div className={cn(styles.squareAbsolute, styles.squareBackground)}></div>
      <div className="text-center">{children}</div>
    </div>
  );
};
export default SquareBox;
