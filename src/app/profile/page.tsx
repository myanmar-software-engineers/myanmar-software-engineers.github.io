import Container from "@/components/Common/Container/Container";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";

import { allProfiles } from "contentlayer/generated";
import BodyText from "@/components/Common/BodyText/BodyText";
import SquareBox from "@/components/Ui/SquareBox/SquareBox";
import TitleText from "@/components/Common/TitleText/TitleText";
import Link from "next/link";
import { cn, generateColor } from "@/utils";

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
                      {profile.name?.[0]}
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
      </div>
    </Container>
  );
};
export default ProfileListPage;
