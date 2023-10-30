import React from "react";
import { IoLogoFacebook, IoLogoGithub } from "react-icons/io5";

import { motion } from "framer-motion";

const Nyeinminhtet = () => {
  return (
    <main className="flex gap-5">
      <div className="flex gap-2 font-semibold ">
        <div className="flex items-end">
          <motion.h1
            animate={{ rotate: 360, color: "red" }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl"
          >
            N
          </motion.h1>
          <span className="text-3xl">yein</span>
        </div>
        <div className="flex items-center">
          <motion.h1
            animate={{ rotate: 360, color: "red" }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl"
          >
            M
          </motion.h1>
          <span className="text-3xl">in</span>
        </div>

        <div className="flex items-center">
          <motion.h1
            animate={{ rotate: 360, color: "red" }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl"
          >
            H
          </motion.h1>
          <span className="text-3xl">tet</span>
        </div>
      </div>

      <div className="flex flex-row gap-3">
        <a href="https://www.facebook.com/nminnhtet/" target="_blank">
          <IoLogoFacebook size={40} />
        </a>
        <a href="https://github.com/nyeinminhtet" target="_blank">
          <IoLogoGithub size={40} />
        </a>
        <a href="https://www.nyeinminhtet.com" target="_blank">
          <img
            src="https://avatars.githubusercontent.com/u/95125660?v=4"
            alt="portfolio_photo"
            className=" w-10 h-10 rounded-full object-contain"
          />
        </a>
      </div>
    </main>
  );
};

export default Nyeinminhtet;
