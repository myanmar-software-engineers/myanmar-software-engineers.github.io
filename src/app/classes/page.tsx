import PageTransitionWrapper from "@/components/Animate/PageTransitionWrapper/PageTransitionWrapper";
import APP_CONFIG from "@/config/config";
import { allClasses } from "contentlayer/generated";
import { Metadata } from "next";
import ClassesPageClient from "./ClassesPageClient";

export const metadata: Metadata = {
	title: `Classes | ${APP_CONFIG.title}`,
	description:
		"Explore verified tech classes in Myanmar curated by the MMSWE community.",
	openGraph: {
		title: `Classes | ${APP_CONFIG.title}`,
		description:
			"Explore verified tech classes in Myanmar curated by the MMSWE community.",
		images: "https://mmswe.com/images/mmswe-seo.png",
	},
};

const ClassesPage = async () => {
	const classes = [...allClasses].sort((a, b) => a.title.localeCompare(b.title));

	return (
		<PageTransitionWrapper>
			<ClassesPageClient classes={classes} />
		</PageTransitionWrapper>
	);
};

export default ClassesPage;
