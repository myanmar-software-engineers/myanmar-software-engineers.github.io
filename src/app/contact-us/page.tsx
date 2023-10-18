import Container from "@/components/Common/Container/Container";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact us | ${APP_CONFIG.title}`,
  description: APP_CONFIG.description,
};

const ContactUsPage: React.FC = async () => {
  return <Container> Contact Us Page </Container>;
};
export default ContactUsPage;
