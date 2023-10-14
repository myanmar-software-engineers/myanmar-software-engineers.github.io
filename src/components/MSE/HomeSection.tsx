"use client";
import { titleFont } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import { Variants, motion, useInView } from "framer-motion";
import Link from "next/link";
import { ReactNode, useRef } from "react";
import { DiCode } from "react-icons/di";
import { ImBlogger } from "react-icons/im";
import AnimateText from "../Common/AnimateText/AnimateText";
import BodyText from "../Common/BodyText/BodyText";
import TitleText from "../Common/TitleText/TitleText";
import TopArrow from "../Ui/Arrows/TopArrows";
import SquareBox from "../Ui/SquareBox/SquareBox";

const title = ["Myanmar", "Software", "Engineers"];

const textAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Card = ({
  title,
  body,
  icon,
  link,
}: {
  title: string;
  body: string;
  icon?: ReactNode;
  link: string;
}) => {
  return (
    <motion.div
      variants={textAnimation}
      transition={{ staggerChildren: 0.017 }}
      className="relative flex"
    >
      <Link href={link} className="relative flex">
        <SquareBox className="hover:-translate-y-1 duration-300 transition ease-out">
          <TitleText tag="p" className="text-sm mb-5">
            {icon}
            <AnimateText text={title} />
          </TitleText>
          <motion.div variants={textAnimation}>
            <BodyText>{body}</BodyText>
          </motion.div>
        </SquareBox>
      </Link>
    </motion.div>
  );
};

const HomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.015 }}
      className="flex flex-col lg:flex-row"
    >
      <div
        className={cn(
          titleFont.className,
          "flex-1 text-center lg:text-left text-5xl"
        )}
      >
        {title.map((title, index) => (
          <motion.h2 key={`${title}_hero_title`} className={cn("mb-5 w-8/12 -rotate-[8deg]")}>
            <AnimateText text={title} />
          </motion.h2>
        ))}
      </div>
      <motion.div className="relative flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 mt-5 lg:mt-0">
        <Card
          icon={<DiCode className="inline-block mr-3" />}
          title="Dev-Profiles"
          body={
            "You can easily create a profile on our website, and it serves as a platform to showcase your work. Additionally, you can explore the profiles of other developers to connect and collaborate within our community."
          }
          link="/profile"
        />
        <Card
          icon={<ImBlogger className="inline-block mr-3" />}
          title="Read-Articles"
          body={
            "Feel free to contribute to our developer community by creating your own articles and blogs. You can also easily access and read the content shared by others to enhance your knowledge."
          }
          link="/blog"
        />
        <motion.div
          className="w-[130px] hidden lg:block absolute bottom-0 -left-[138px]"
          initial={{ opacity: 0, y: 8, x: -4 }}
          animate={{ opacity: 1, y: 0, x: 0, transition: { delay: 0.7 } }}
        >
          <TopArrow />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;
