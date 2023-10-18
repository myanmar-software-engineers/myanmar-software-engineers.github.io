"use client";
import { PropsWithChildren, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type THorizontalWrapper = PropsWithChildren<{
  horizontalDirection: number;
  activeOpacity?: boolean;
}>;

const HorizontalWrapper: React.FC<THorizontalWrapper> = ({
  children,
  horizontalDirection,
  activeOpacity = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, horizontalDirection]
  );

  const opacityTransforom = useTransform(
    scrollYProgress,
    [0, 0.01, 1],
    [0, 0, 1]
  );

  return (
    <div ref={containerRef}>
      <motion.div
        className="relative z-10"
        style={{
          translateX: xTransform,
          opacity: activeOpacity ? opacityTransforom : 1,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default HorizontalWrapper;
