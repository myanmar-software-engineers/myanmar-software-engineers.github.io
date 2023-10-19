import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const strokeAnimation = {
  hidden: { strokeDashoffset: 650, strokeDasharray: 650 },
  visible: {
    strokeDashoffset: 0,
    strokeDasharray: 660,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
} as const;

const MsoTypo = () => {
  const containerRef = useRef<SVGSVGElement>(null);

  const isInView = useInView(containerRef, { amount: 0.5 });

  return (
    <motion.svg
      ref={containerRef}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="Layer_1"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      x={0}
      y={0}
      viewBox="0 0 572.3 144.6"
    >
      <style>
        {
          '.st0{display:none}.st2{display:inline}.st3{opacity:.1}.st4{fill:#fff}.st6{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round}.st8{display:inline;fill:#fff}.st10{fill:none;stroke:#fff;stroke-width:2}.st11{font-family:"PTMono-Bold"}.st12{font-size:110px}.st13{font-family:"PTMono-Regular"}.st14{font-size:46px}'
        }
      </style>
      <g id="TextGroup">
        <motion.text
          variants={strokeAnimation}
          className="st10 st11 st12"
          transform="translate(10.957 106.424)"
        >
          {"M"}
        </motion.text>
        <text className="st4 st13 st14" transform="translate(87.933 59.278)">
          {"yanmar"}
        </text>
        <text className="st4 st13 st14" transform="translate(340.562 108.983)">
          {"ngineers"}
        </text>
        <text
          className="st4 st13"
          style={{
            fontSize: 43,
          }}
          transform="translate(84.525 108.424)"
        >
          {"Softwar"}
        </text>
        <motion.text
          variants={strokeAnimation}
          className="st10 st11 st12"
          transform="translate(272.74 108.424)"
        >
          {"E"}
        </motion.text>
      </g>
    </motion.svg>
  );
};
export default MsoTypo;
