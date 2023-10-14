import Link from "next/link";
import { PropsWithChildren } from "react";

type TMesLink = PropsWithChildren<{
  href: string;
}>;

const MseLink: React.FC<TMesLink> = ({ children, href }) => {
  return <Link href={href}>{children}</Link>;
};
export default MseLink;
