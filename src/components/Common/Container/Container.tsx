import { cn } from "@/utils";
import styles from "@/styles/styles";
import { PropsWithChildren } from "react";

type TContainerProps = PropsWithChildren<{
  className?: string;
  withPadding?: boolean;
}>;

const Container: React.FC<TContainerProps> = ({
  children,
  className = "",
  withPadding = false,
}) => {
  return (
    <section
      className={cn(
        styles.container,
        withPadding && styles.paddingHelper,
        className
      )}
    >
      {children}
    </section>
  );
};
export default Container;
