"use client";

import TitleText from "@/components/Common/TitleText/TitleText";
import SquareBox from "@/components/Ui/SquareBox/SquareBox";
import { cn, generateColor } from "@/utils";
import { Profile } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

type TPropsProfileCardList = {
  profiles: Profile[];
};

const ProfileCardList = ({ profiles }: TPropsProfileCardList) => {
  return (
    <>
      {profiles.map((profile) => {
        const bgColor = generateColor();

        return (
          <div key={profile._id} className="self-stretch">
            <Link href={`/profile/${profile.slugAsParams}`}>
              <SquareBox
                className={cn(
                  "w-full h-full transition ease-out cursor-pointer hover:opacity-80 hover:-translate-y-1 bg-opacity-30 min-h-[130px]",
                  bgColor
                )}
              >
                <div className="flex flex-row items-center mb-2 space-x-2">
                  <div
                    className={cn(
                      "flex justify-center items-center h-10 w-10 rounded-full overflow-hidden relative",
                      bgColor
                    )}
                  >
                    {!!profile.image ? (
                      <Image
                        src={profile.image}
                        className="h-10 w-10 object-fit"
                        alt={profile.name}
                        fill
                      />
                    ) : (
                      profile.name?.trim()?.[0]
                    )}
                  </div>
                  <div className="flex-1">
                    <TitleText tag="h4" className="text-base">
                      {profile.name}
                    </TitleText>
                  </div>
                </div>
                <div className="mb-2">
                  {profile.tags?.slice(0, 8)?.map((tag) => (
                    <TitleText
                      className={cn(
                        "inline-block text-[10px] px-2 py-1 rounded-full mb-1 mr-[4px] bg-opacity-50 hover:bg-opacity-80",
                        bgColor
                      )}
                      key={tag}
                      tag="span"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(tag);
                      }}
                    >
                      {tag}
                    </TitleText>
                  ))}
                </div>
                <TitleText
                  tag="h4"
                  className="text-sm  md:overflow-hidden md:text-ellipsis md:line-clamp-3"
                >
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
