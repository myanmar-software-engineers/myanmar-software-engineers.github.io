import { cn } from "@/utils";
import TitleText from "../TitleText/TitleText";
import { IoClose } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { checkIsFoundTag } from "@/utils/profileHelper";
import { MouseEvent, useCallback } from "react";

const Tag = ({
  tag,
  searchTag,
  bgColor,
  isShowClose = false,
}: {
  tag: string;
  searchTag: string;
  bgColor: string;
  isShowClose?: boolean;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isTagActive = checkIsFoundTag(tag, searchTag);

  const onClickTag = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      const tmpSearchParam = new URLSearchParams(searchParams.toString());

      tmpSearchParam.set("tag", !isTagActive ? tag : "");

      router.push(`/profile?${tmpSearchParam.toString()}`);
    },
    [isTagActive, router, searchParams, tag]
  );

  return (
    <TitleText
      onClick={onClickTag}
      className={cn(
        "inline-block cursor-pointer text-[10px] px-2 py-1 rounded-full mb-1 mr-[5px] bg-opacity-70 hover:bg-opacity-90",
        bgColor,
        isTagActive &&
          "bg-green-600 bg-opacity-100 outline-dashed outline-2 outline-offset-2 relative"
      )}
      key={tag}
      tag="span"
    >
      {tag}
      {isShowClose ? <IoClose /> : null}
    </TitleText>
  );
};

export default Tag;
