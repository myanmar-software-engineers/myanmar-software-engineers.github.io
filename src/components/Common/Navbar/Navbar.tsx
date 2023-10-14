import MseLink from "@/components/Ui/MseLink/MseLink";
import { cn } from "@/lib/utils";
import styles from "@/styles/styles";
import Container from "../Container/Container";
import MseLogo from "@/components/Ui/MseLogo/MseLogo";

const Navbar = () => {
  return (
    <nav className={cn("w-full py-5")}>
      <Container
        className={cn("flex flex-row justify-between", styles.paddingHelper)}
      >
        {/* ---- Logo: Start ---- */}
        <div className="flex-1">
          <MseLogo />
        </div>
        {/* ---- Logo: Finish ---- */}

        {/* ---- Links: Start ---- */}
        <div className="hidden lg:flex flex-1 flex-row space-x-8 justify-around min-w-[300px]">
          <MseLink href="/">Home</MseLink>
          <MseLink href="/profile">Profiles</MseLink>
          <MseLink href="/blog">Blogs</MseLink>
        </div>
        {/* ---- Links: Finish ---- */}

        {/* ---- DarkMode: Start ---- */}
        <div className="hidden lg:flex flex flex-1 justify-end">
          <MseLink href="/">Contact Us</MseLink>
        </div>
        {/* ---- DarkMode: Finish ---- */}
      </Container>
    </nav>
  );
};
export default Navbar;
