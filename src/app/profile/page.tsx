import Container from "@/components/Common/Container/Container";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";

import ProfileCardList from "@/components/Profile/ProfileCardList/ProfileCardList";
import { allProfiles } from "contentlayer/generated";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <ProfileCardList profiles={profiles} />
      </div>
    </Container>
  );
};
export default ProfileListPage;
