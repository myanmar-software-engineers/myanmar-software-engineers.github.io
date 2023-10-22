import React, { useState } from "react";
import Contact from "./Contact";

const Project = () => {
  const [project, setProject] = useState<any>(false);

  return (
    <div class=" relative  mt-[-125px] z-[99] bg-blur w-full flex flex-col items-center h-screen  ">
      <div class="  w-full h-[60px] border-b-2 border-[#1212] flex justify-between items-center gap-3 ">
        <a
          target="_blank"
          href="https://themoviedb-org.vercel.app/"
          class=" text-xl aa rounded-tr-3xl bg-cyan-700 flex justify-center items-center  h-full w-[200px] cursor-pointer "
        >
          <h1>TMDB Clone</h1>
        </a>

        <div class="flex h-full justify-center items-center  rounded-t-3xl  ">
          <div
            onClick={() => setProject(true)}
            class="flex h-full w-[100px]   border-r justify-center items-center px-[1rem] cursor-pointer loader-bg "
          >
            <p>Project</p>
          </div>
          <div
            onClick={() => setProject(false)}
            class="flex h-full  w-[100px]  justify-center items-center px-[1rem] cursor-pointer loader-bg "
          >
            <p>Me</p>
          </div>
        </div>

        <a
          target="_blank"
          href="https://anynote-m.vercel.app/"
          class=" text-xl rounded-tl-3xl bg-cyan-700 flex justify-center items-center  h-full w-[200px] cursor-pointer "
        >
          <h1>Facebook Clone</h1>
        </a>
      </div>

      {project ? (
        <iframe
          class=" w-[100%] h-[600px] "
          src="https://themoviedb-org.vercel.app/"
          frameborder="0"
        />
      ) : (
        <Contact />
      )}
    </div>
  );
};

export default Project;
