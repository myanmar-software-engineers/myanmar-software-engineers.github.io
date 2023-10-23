import Tag from "@/components/Common/Tag/Tag";
import TitleText from "@/components/Common/TitleText/TitleText";
import SquareBox from "@/components/Ui/SquareBox/SquareBox";
import { cn, generateColor } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export type TProfileCardItem = {
  _id: string;
  slugAsParams: string;
  image?: string;
  name: string;
  tags?: string[];
  description?: string;
  searchTag?: string;
};
const ProfileCardItem = ({
  _id,
  slugAsParams,
  name,
  description,
  image,
  tags,
  searchTag,
}: TProfileCardItem) => {
  const bgColor = generateColor();

  return (
    <div key={_id} className="self-stretch animate-fadein">
      <Link href={`/profile/${slugAsParams}`}>
        <SquareBox
          className={cn(
            "w-full h-full transition ease-out cursor-pointer hover:opacity-80 hover:-translate-y-1 bg-opacity-40 min-h-[130px]",
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
              {!!image ? (
                <Image
                  src={image}
                  className="h-10 w-10 object-fit"
                  alt={name}
                  fill
                />
              ) : (
                name?.trim()?.[0]
              )}
            </div>
            <div className="flex-1">
              <TitleText tag="h4" className="text-base">
                {name}
              </TitleText>
            </div>
          </div>
          <div className="mb-2">
            {tags?.map((tag) => (
              <Tag
                key={tag}
                tag={tag}
                searchTag={searchTag ?? ""}
                bgColor={bgColor}
              />
            ))}
          </div>
          <TitleText
            tag="h4"
            className="text-sm  md:overflow-hidden md:text-ellipsis md:line-clamp-3"
          >
            {description}
          </TitleText>
        </SquareBox>
      </Link>
    </div>
  );
};
export default ProfileCardItem;
