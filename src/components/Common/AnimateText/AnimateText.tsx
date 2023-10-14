"use client";
import { Variants, motion } from "framer-motion";

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

const AnimateText = ({ text }: { text: string }) => {
  return text.split("").map((eachWord, index) => (
    <motion.span
      variants={textAnimation}
      className="inline-block"
      key={`each_word_${eachWord}_${index}`}
    >
      {eachWord}
    </motion.span>
  ));
};
export default AnimateText;
