import TitleText from "@/components/Common/TitleText/TitleText";
import Link from "next/link";
import { PropsWithChildren } from "react";

type TMesLink = PropsWithChildren<{
  href: string;
}>;

const MseLink: React.FC<TMesLink> = ({ children, href }) => {
  return (
    <Link href={href}>
      <TitleText tag="span">{children}</TitleText>
    </Link>
  );
};
export default MseLink;
