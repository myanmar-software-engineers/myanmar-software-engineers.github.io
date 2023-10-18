import { cn } from "@/utils";
import { PropsWithChildren } from "react";

type TSpacingDivider = PropsWithChildren<{
  size?: "sm" | "base" | "lg";
}>;

const SpacingDivider: React.FC<TSpacingDivider> = ({ size = "base" }) => {
  return (
    <div
      className={cn(
        "w-full h-10",
        size === "base" && "lg:h-10",
        size === "lg" && "lg:h-14",
        size === "sm" && "lg:h-8"
      )}
    ></div>
  );
};
export default SpacingDivider;
