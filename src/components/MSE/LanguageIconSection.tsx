"use client";
import { motion } from "framer-motion";
import HorizontalWrapper from "../Common/HorizontalWrapper/HorizontalWrapper";
import { iconListData } from "@/data/IconList";
import { opacityAnimation } from "@/data/animationVariants;";
import SquareBox from "../Ui/SquareBox/SquareBox";

const LanguageIconSection = () => {
  return (
    <div className="ovflow-x-auto">
      <HorizontalWrapper horizontalDirection={400}>
        <motion.div
          initial="hidden"
          animate={"visible"}
          className="flex flex-row gap-4 relative -left-[400px]"
        >
          {iconListData.map((item, index) => (
            <motion.div
              variants={{
                hidden: {
                  ...opacityAnimation.hidden,
                  y: -12,
                },
                visible: {
                  ...opacityAnimation.visible,
                  transition: {
                    delay: 0.7 + (index ? 0.03 * index : 0.03),
                  },
                },
              }}
              key={item.title}
            >
              <div className="hover:rotate-[45deg] duration-300 transition ease-out cursor-pointer">
                <SquareBox className="min-w-[65px] min-h-[65px] rounded-full flex justify-center items-center px-0 py-0">
                  <item.icon className="text-white w-5 h-5" />
                </SquareBox>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </HorizontalWrapper>
    </div>
  );
};
export default LanguageIconSection;
