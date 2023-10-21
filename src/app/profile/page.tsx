import Container from "@/components/Common/Container/Container";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";

import ProfileCardList from "@/components/Profile/ProfileCardList/ProfileCardList";
import { allProfiles } from "contentlayer/generated";
import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import { profileHelperService } from "@/utils/profileHelper";

export const metadata: Metadata = {
  title: `Profile List | ${APP_CONFIG.title}`,
  description: APP_CONFIG.description,
};

const getAllProfileList = async () => {
  return allProfiles;
};

const ProfileListPage = async () => {
  const profiles = await getAllProfileList();

  return (
    <Container>
      <ProfileCardList profiles={profiles} />
      <SpacingDivider size="lg" />
    </Container>
  );
};
export default ProfileListPage;
