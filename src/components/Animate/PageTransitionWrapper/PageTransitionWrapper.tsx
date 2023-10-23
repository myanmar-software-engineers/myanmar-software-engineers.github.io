"use client";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

type TPageTransitionWrapper = PropsWithChildren<{}>;

const PageTransitionWrapper: React.FC<TPageTransitionWrapper> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={cn("min-h-screenHeightWithoutHeader relative")}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
