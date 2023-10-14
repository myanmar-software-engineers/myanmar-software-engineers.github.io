import { cn } from "@/lib/utils";
import styles from "@/styles/styles";
import { PropsWithChildren } from "react";

type TContainerProps = PropsWithChildren<{
  className?: string;
}>;

const Container: React.FC<TContainerProps> = ({ children, className = "" }) => {
  return (
    <section className={cn(styles.container, className)}>{children}</section>
  );
};
export default Container;
