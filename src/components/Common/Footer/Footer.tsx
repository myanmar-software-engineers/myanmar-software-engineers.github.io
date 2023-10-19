import styles from "@/styles/styles";
import { cn } from "@/utils";
import Container from "../Container/Container";
import TitleText from "../TitleText/TitleText";

const Footer = () => {
  return (
    <div className={cn(styles.glassomophic, "py-2 px-2")}>
      <Container withPadding className="text-left">
        <TitleText className="text-sm flex items-center flex-1 h-16">
          Empowering Software Engineers to Innovate and Collaborate, One Line of
          Code at a Time.
        </TitleText>
      </Container>
    </div>
  );
};
export default Footer;
