import TitleText from "@/components/Common/TitleText/TitleText";
import { cn } from "@/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";

type TMesLink = PropsWithChildren<{
  href: string;
  className?: string;
}>;

const MseLink: React.FC<TMesLink> = ({ children, href, className }) => {
  return (
    <Link href={href} className={cn(className)}>
      <TitleText tag="span">{children}</TitleText>
    </Link>
  );
};
export default MseLink;
