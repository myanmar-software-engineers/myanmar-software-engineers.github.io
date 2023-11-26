"use client";

import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import Tag from "@/components/Common/Tag/Tag";
import TitleText from "@/components/Common/TitleText/TitleText";
import ProfileCardItem from "@/components/Profile/ProfileCardItem/ProfileCardItem";
import { opacityAnimation } from "@/data/animationVariants";
import { titleFont } from "@/fonts/fonts";
import useProfileHook from "@/hooks/profile/useProfileHook";
import { cn, generateColorArray } from "@/utils/index";
import { Profile } from "contentlayer/generated";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoPeople } from "react-icons/io5";

type TPropsProfileCardList = {
	profiles: Profile[];
};

const ProfileCardList = ({ profiles }: TPropsProfileCardList) => {
	const searchParams = useSearchParams();
	const initSearchTag = searchParams.get("tag") ?? "";
	const {
		searchTag,
		uniqueTagColors,
		uniqueTags,
		searchedTags,
		filteredProfiles,
		searchByName,
		handleSearchByName,
		handleSearchTag,
	} = useProfileHook(profiles, initSearchTag);

	return (
		<>
			<motion.div
				initial="hidden"
				animate="visible"
				transition={{ staggerChildren: 0.005 }}
				className="relative"
			>
				{uniqueTagColors?.length &&
					uniqueTags.map((tag, i) => (
						<motion.span
							key={tag}
							variants={opacityAnimation}
							className="inline-block"
						>
							<Tag
								tag={tag}
								searchTag={searchTag}
								bgColor={uniqueTagColors[i]}
								onClick={handleSearchTag}
							/>
						</motion.span>
					))}
			</motion.div>

			<div className="flex flex-col gap-3 md:flex-row mt-2 md:items-center">
				<input
					placeholder="Search by name..."
					className={cn(
						"rounded-xl outline-none py-1 inline-block px-3 text-black text-base md:min-w-[300px]",
						titleFont.className
					)}
					value={searchByName}
					onChange={handleSearchByName}
				/>
				<TitleText tag="h3" className="text-sm ">
					<IoPeople className="inline-block -top-[2px] ml-1 mr-2 relative" />
					Total Profiles :{filteredProfiles.length}
				</TitleText>

				{uniqueTagColors?.length &&
					searchedTags.map((tag, i) => (
						<Tag
							key={`distincted_${tag}`}
							tag={tag}
							searchTag={searchTag}
							bgColor={uniqueTagColors[i]}
							onClick={handleSearchTag}
						/>
					))}
			</div>

			<SpacingDivider size="lg" />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
				{filteredProfiles.map((profile) => (
					<ProfileCardItem
						key={profile._id}
						_id={profile._id}
						name={profile.name}
						image={profile.image}
						slugAsParams={profile.slugAsParams}
						description={profile.description}
						tags={profile.tags}
						searchTag={searchTag}
						handleSearchTag={handleSearchTag}
					/>
				))}
			</div>
		</>
	);
};
export default ProfileCardList;
