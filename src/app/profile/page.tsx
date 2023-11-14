import Container from "@/components/Common/Container/Container";
import APP_CONFIG from "@/config/config";
import { allProfiles } from "contentlayer/generated";
import { Metadata } from "next";

import PageTransitionWrapper from "@/components/Animate/PageTransitionWrapper/PageTransitionWrapper";
import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import ProfileCardList from "@/components/Profile/ProfileCardList/ProfileCardList";

export const metadata: Metadata = {
	title: `Profile List | ${APP_CONFIG.title}`,
	description: APP_CONFIG.description,
	openGraph: {
		title: `Profile List | ${APP_CONFIG.title}`,
		description: APP_CONFIG.description,
		images: "https://mmswe.com/images/landing/galaxy.jpg",
	},
};

const getAllProfileList = async () => {
	return allProfiles;
};

const ProfileListPage = async () => {
	const profiles = await getAllProfileList();

	return (
		<PageTransitionWrapper>
			<Container>
				<ProfileCardList profiles={profiles} />
				<SpacingDivider size="lg" />
			</Container>
		</PageTransitionWrapper>
	);
};
export default ProfileListPage;
