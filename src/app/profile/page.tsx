import Container from "@/components/Common/Container/Container";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Profile List - ${APP_CONFIG.title}`,
  description: APP_CONFIG.description,
};

const ProfileListPage = () => {
  return <Container>ProfileListPage</Container>;
};
export default ProfileListPage;
