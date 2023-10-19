import Container from "@/components/Common/Container/Container";
import TitleText from "@/components/Common/TitleText/TitleText";
import SquareBox from "@/components/Ui/SquareBox/SquareBox";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact us | ${APP_CONFIG.title}`,
  description: APP_CONFIG.description,
};

const ContactUsPage: React.FC = async () => {
  return (
    <Container>
      <SquareBox>
        <TitleText>Contact Us Page</TitleText>
      </SquareBox>
    </Container>
  );
};
export default ContactUsPage;
