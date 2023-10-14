import { bodyFont } from "@/fonts/fonts";
import { cn } from "@/utils";
import { PropsWithChildren } from "react";

type TBodyText = PropsWithChildren<{
  className?: string;
  tag?: "p" | "span" | "div";
}>;

const BodyText: React.FC<TBodyText> = ({
  className = "",
  children,
  tag = "p",
}) => {
  const Component = tag;
  return (
    <Component className={cn(bodyFont.className, "text-sm", className)}>
      {children}
    </Component>
  );
};
export default BodyText;
