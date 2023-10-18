"use client";
import { cn } from "@/utils";
import TitleText from "../Common/TitleText/TitleText";
import BodyText from "../Common/BodyText/BodyText";

const PlatformSection = () => {
  return (
    <div className={cn("max-w-[860px] text-center mx-auto px-5")}>
      <TitleText tag="h2" className="text-3xl mb-5">
        Not Only for Web-Developers
      </TitleText>
      <BodyText className="text-base">
        This platform welcomes all software engineers. While web development
        often takes center stage with HTML and CSS, we are here to support a
        wide array of disciplines. Whether you are into desktop, web, mobile, or
        cloud engineering, this is your space to connect, learn, and share.
        Let&apos;s grow together as versatile software engineers!
      </BodyText>
    </div>
  );
};
export default PlatformSection;
