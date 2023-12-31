"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BodyText from "../Common/BodyText/BodyText";
import SquareBox from "../Ui/SquareBox/SquareBox";
import TitleText from "../Common/TitleText/TitleText";
import APP_CONFIG from "@/config/config";
import { cn } from "@/utils";
import FacebookArrows from "../Ui/Arrows/FacebookArrows";
import Link from "next/link";

const JoinSection = ({ bgColor = "bg-indigo-500" }: { bgColor?: string }) => {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
        className="w-full relative min-h-[240px] rounded-2xl overflow-hidden backdrop-filter "
      >
        <Image
          src={"/images/landing/galaxy.jpg"}
          className="relative object-cover object-bottom opacity-60"
          alt="Join our Community"
          fill
        />
        <div className="absolute inset-0 min-h-[240px] relative p-10 flex justify-center items-center">
          <Link href="https://www.facebook.com/groups/myanmarsoftwareengineers">
            <BodyText className="text-center w-full backdrop-blur hover:backdrop-blur-lg cursor-pointer transition linear duration-100 border border-white p-10 rounded-2xl">
              Join Our Facebook Community Now
            </BodyText>
          </Link>
        </div>

        <motion.div
          className="w-[70px] hidden lg:block absolute bottom-[18px] right-[15px]"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 0.7, x: 0, transition: { delay: 1 } }}
        >
          <FacebookArrows />
        </motion.div>
      </motion.div>

      {/* Description Section: Start */}
      <motion.div
        className="flex"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
      >
        <SquareBox
          className={cn(
            "mx-auto text-center flex flex-col justify-center items-center",
            bgColor
          )}
        >
          <TitleText className="mb-5 relative lg:-top-5">
            {APP_CONFIG.community}
          </TitleText>
          <BodyText>{APP_CONFIG.description}</BodyText>
        </SquareBox>
      </motion.div>
      {/* Description Section: Finished */}
    </motion.div>
  );
};
export default JoinSection;
