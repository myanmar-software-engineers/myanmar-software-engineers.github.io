"use client";
import MseLink from "@/components/Ui/MseLink/MseLink";
import MseLogo from "@/components/Ui/MseLogo/MseLogo";
import { cn } from "@/utils";
import Container from "@/components/Common/Container/Container";
import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const linkList = [
  { label: "Home", href: "/" },
  { label: "Profiles", href: "/profile" },
  { label: "BLog", href: "/blog" },
];

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className={cn("w-full py-5 mb-2")}>
      <Container withPadding className={cn("flex flex-row justify-between")}>
        {/* ---- Logo: Start ---- */}
        <div className="flex-1">
          <MseLogo />
        </div>
        {/* ---- Logo: Finish ---- */}

        {/* ---- Links: Start ---- */}
        <div className="hidden lg:flex flex-1 flex-row space-x-8 justify-around min-w-[300px]">
          {linkList.map((link) => (
            <MseLink key={link.label} href={link.href} className="relative">
              {path === link.href ? (
                <motion.span
                  layoutId="underlined"
                  className={cn(
                    "absolute border-b border-white left-0 top-full w-full"
                  )}
                />
              ) : null}
              {link.label}
            </MseLink>
          ))}
        </div>
        {/* ---- Links: Finish ---- */}

        {/* ---- DarkMode: Start ---- */}
        <div className="hidden lg:flex flex flex-1 justify-end">
          <MseLink href="/">...</MseLink>
        </div>
        {/* ---- DarkMode: Finish ---- */}
      </Container>

      <SpacingDivider />
    </nav>
  );
};
export default Navbar;
