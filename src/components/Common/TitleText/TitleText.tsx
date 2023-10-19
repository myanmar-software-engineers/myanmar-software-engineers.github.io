import { titleFont, titleFontBold } from "@/fonts/fonts";
import { cn } from "@/utils";
import { PropsWithChildren } from "react";

type TTitleText = PropsWithChildren<{
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "p";
  isBold?: boolean;
}>;

const TitleText: React.FC<TTitleText> = ({
  className = "",
  children,
  tag = "h1",
  isBold = false,
}) => {
  const Component = tag;
  return (
    <Component
      className={cn(
        titleFont.className,
        "text-lg",
        isBold && titleFontBold.className,
        className
      )}
    >
      {children}
    </Component>
  );
};
export default TitleText;
