"use client";

import TitleText from "@/components/Common/TitleText/TitleText";
import SquareBox from "@/components/Ui/SquareBox/SquareBox";
import { cn, generateColor } from "@/utils";
import { Profile } from "contentlayer/generated";
import Link from "next/link";

const ProfileCardList = ({ profiles }: { profiles: Profile[] }) => {
  return (
    <>
      {profiles.map((profile) => {
        const bgColor = generateColor();

        return (
          <div key={profile._id}>
            <Link href={`/profile/${profile.slugAsParams}`}>
              <SquareBox
                className={cn(
                  "transition ease-out cursor-pointer hover:opacity-80 hover:-translate-y-1 bg-opacity-30 min-h-[130px]",
                  bgColor
                )}
              >
                <div className="flex flex-row items-center  mb-2 space-x-2">
                  <div
                    className={cn(
                      "flex justify-center items-center h-10 w-10 rounded-full",
                      bgColor
                    )}
                  >
                    {profile.name?.trim()?.[0]}
                  </div>
                  <TitleText tag="h4" className="text-base">
                    {profile.name}
                  </TitleText>
                </div>
                <TitleText tag="h4" className="text-sm">
                  {profile.description}
                </TitleText>
              </SquareBox>
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default ProfileCardList;
