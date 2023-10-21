"use client";

import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import Tag from "@/components/Common/Tag/Tag";
import TitleText from "@/components/Common/TitleText/TitleText";
import ProfileCardItem from "@/components/Profile/ProfileCardItem/ProfileCardItem";
import { titleFont } from "@/fonts/fonts";
import { cn, generateColorArray } from "@/utils/index";
import { profileHelperService } from "@/utils/profileHelper";
import { Profile } from "contentlayer/generated";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { IoPeople } from "react-icons/io5";
import { motion } from "framer-motion";
import { opacityAnimation } from "@/data/animationVariants";

type TPropsProfileCardList = {
  profiles: Profile[];
};

const ProfileCardList = ({ profiles }: TPropsProfileCardList) => {
  const searchParams = useSearchParams();
  const searchTag = searchParams.get("tag") ?? "";
  const { uniqueTags, foundProfiles, searchedTags } = profileHelperService(
    profiles,
    searchTag
  );

  const [searchByName, setSearchByName] = useState<string>("");
  const [uniqueTagColors] = useState<string[]>(() => {
    return generateColorArray(uniqueTags.length);
  });

  const filteredProfiles = useMemo(() => {
    if (!!searchByName.trim().length) {
      return foundProfiles.filter((profile) =>
        profile.name.toLowerCase().includes(searchByName.toLowerCase())
      );
    }
    return foundProfiles;
  }, [foundProfiles, searchByName]);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.005 }}
        className="relative"
      >
        {uniqueTags.map((tag, i) => (
          <motion.span
            key={tag}
            variants={opacityAnimation}
            className="inline-block"
          >
            <Tag tag={tag} searchTag={searchTag} bgColor={uniqueTagColors[i]} />
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
          onChange={(e) => setSearchByName(e.target.value)}
        />
        <TitleText tag="h3" className="text-sm ">
          <IoPeople className="inline-block -top-[2px] ml-1 mr-2 relative" />
          Total Profiles :{filteredProfiles.length}
        </TitleText>

        {searchedTags.map((tag, i) => (
          <Tag
            key={`distincted_${tag}`}
            tag={tag}
            searchTag={searchTag}
            bgColor={uniqueTagColors[i]}
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
          />
        ))}
      </div>
    </>
  );
};
export default ProfileCardList;
