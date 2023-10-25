"use client";
import { useState, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import skillsData from "./skills";

const AungKoKo = () => {
  const [skills, setSkills] = useState(skillsData);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 700 });
  }, [parent]);

  useEffect(() => {
    setTimeout(() => {
      const juggled = [...skills];
      juggled.push(juggled.shift());
      setSkills(juggled);
    }, 1000);
  }, [skills]);

  return (
    <div className="container font-sans mx-auto flex flex-col md:flex-row items-center justify-center min-h-[75vh]">
      <div className="basis-1/2">
        <div className="flex flex-col items-start gap-1">
          <span className="font-bold text-xl">
            <span className="text-2xl">👋</span>I'm
          </span>
          <h2 className="text-5xl font-bold">Aung Ko Ko</h2>
          <p className="text-xl font-semibold text-white/80">
            A self-motivated frontend web developer
          </p>
          <a
            className={`mt-3 px-5 py-3 inline-block group relative text-black select-none bg-[#0ebeff] font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all cursor-pointer`}
            href="https://aungkoko.vercel.app/"
            target="_blank"
          >
            My Portfolio
            <div
              className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine animate-infinite_shine`}
            />
          </a>
        </div>
      </div>
      {/** Skills Octagon */}
      <div className="basis-1/2 flex justify-center mt-20 md:mt-0">
        <div className="relative octagon">
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <img src="/aungkoko/octagon.svg" className="" alt="" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <img
              src="/aungkoko/thinking.png"
              className="w-20 h-20"
              alt="icon by lordicon"
            />
          </div>
          <div ref={parent} className="w-full h-full">
            {skills.map(({ iconUrl, name }) => (
              <div
                key={name}
                className={`corner rounded-lg border shadow-lg shadow-cyan-500/50`}
              >
                <img
                  src={iconUrl}
                  alt={`${name} icon`}
                  className="object-cover rounded-lg border border-cyan-500 shadow-lg shadow-cyan-500/50"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AungKoKo;
