// ICONS
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoJava,
  BiLogoNodejs,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoGraphql,
  BiLogoSass,
  BiX,
} from "react-icons/bi";

import { SiVisualstudiocode } from "react-icons/si";
import { AiOutlineDown, AiOutlineFileText } from "react-icons/ai";
import { PiDotsThreeBold } from "react-icons/pi";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAltSmall,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
  VscChromeMinimize,
  VscChromeRestore,
  VscChromeClose,
} from "react-icons/vsc";

// COMPONENTS
import React from "react";

//DATA & UTILITIES
import { files } from "./files";

const HtutAungWai = () => {
  const handleIcon = (extension) => {
    switch (extension) {
      case "json":
        return <BiLogoNodejs className="text-emerald-600" />;
      case "js":
        return <BiLogoJavascript className="text-yellow-300 " />;

      case "ts":
        return <BiLogoTypescript className="text-blue-500 " />;

      case "java":
        return <BiLogoJava className="text-white" />;

      case "jsx":
        return <BiLogoReact className="text-blue-800" />;

      case "sass":
        return <BiLogoSass className="text-pink-600" />;

      case "css":
        return <BiLogoCss3 className="text-blue-400" />;

      case "html":
        return <BiLogoHtml5 className="text-orange-500" />;

      case "gql":
        return <BiLogoGraphql className="bg-pink-700" />;

      default:
        return <AiOutlineFileText className="text-gray-400" />;
    }
  };
  return (
    <main className="min-w-full min-h-screen w-full h-full relative rounded-lg overflow-hidden bg-[#1e1e1e] pt-8 pl-46 inconsolata flex md:max-h-screen max-w-screen">
      <div className="topbar bg-[#1e1e1e] w-full h-8 absolute top-0 left-0 flex items-center px-2  z-10 border-b-[1px] border-gray-600">
        <SiVisualstudiocode className="text-[#007acc] pr-2 text-2xl" />

        <div className="settings font-sans text-xs  text-center hidden md:flex gap-1 capitalize w-auto h-full items-center ">
          <div className="hover:bg-stone-700 ease-in-out px-1 py-1 cursor-default rounded-md text-gray-400">
            file
          </div>
          <div className="hover:bg-stone-700 ease-in-out px-1 py-1 cursor-default rounded-md text-gray-400">
            edit
          </div>
          <div className="hover:bg-stone-700 ease-in-out px-1 py-1 cursor-default rounded-md text-gray-400">
            selection
          </div>
          <div className="hover:bg-stone-700 ease-in-out px-1 py-1 cursor-default rounded-md text-gray-400">
            view
          </div>
          <div className="hover:bg-stone-700 ease-in-out px-1 py-1 cursor-default rounded-md text-gray-400">
            go
          </div>
          <div className="hover:bg-stone-700 ease-in-out px-1 py-1 cursor-default rounded-md text-gray-400">
            run
          </div>
          <div className="hover:bg-stone-700 ease-in-out px-1 py-1 cursor-default rounded-md text-gray-400">
            terminal
          </div>
          <div className="hover:bg-stone-700 ease-in-out px-1 py-1 cursor-default rounded-md text-gray-400">
            help
          </div>
        </div>

        <div className="ml-auto flex flex-row ">
          <div className="h-8 w-12 hover:bg-[#5d5d5d] flex items-center justify-center">
            <VscChromeMinimize className="text-[#aeaeae] min-h-full text-md" />
          </div>

          <div className="h-8 w-12 hover:bg-[#5d5d5d] flex items-center justify-center">
            <VscChromeRestore className="text-[#aeaeae]  text-md" />
          </div>

          <div className="h-8 w-12 hover:bg-red-600 flex items-center justify-center">
            <VscChromeClose
              color="white"
              className="text-[#ffffff]  text-md "
            />
          </div>
        </div>
      </div>

      <div className="sidebar w-24 min-w-full min-h-full  bg-[#1e1e1e] border-gray-600 border-r-[1px] flex flex-row overflow-x-hidden">
        <div className="statusbar flex flex-col h-full w-12 border-gray-600 border-r-[1px]">
          <div className="upper  w-full h-3/4 flex flex-col items-center gap-6 pt-4">
            <VscFiles className="text-xl   font-extrabold cursor-pointer text-gray-400 hover:text-white" />

            <VscSearch className="text-xl   font-extrabold cursor-pointer text-gray-400 hover:text-white" />

            <VscSourceControl className="text-xl   font-extrabold cursor-pointer text-gray-400 hover:text-white" />

            <VscDebugAltSmall className="text-xl   font-extrabold cursor-pointer text-gray-400 hover:text-white" />

            <VscExtensions className="text-xl   font-extrabold cursor-pointer text-gray-400 hover:text-white" />
          </div>

          <div className="lower w-full h-1/4 flex flex-col gap-6 items-center  pt-8">
            <VscAccount className="text-xl font-extrabold cursor-pointer text-gray-400 hover:text-white " />

            <VscSettingsGear className="text-xl font-extrabold cursor-pointer text-gray-400 hover:text-white" />
          </div>
        </div>

        <div className="explorer hidden md:flex border-gray-600 border-r-[1px] w-56 h-full relative">
          <div className="absolute top-0 left-0 right-0 max-h-fit w-full text-center text-xs  monospace uppercase  flex flex-col bg-[#1e1e1e]">
            <div className="uppercase h-5  w-full flex flex-row justify-around items-center text-gray-300 my-2">
              Explore
              <PiDotsThreeBold />
            </div>

            <div className="flex items-center text-gray-300 gap-1">
              <AiOutlineDown />
              <div className=" uppercase monospace text-bold ">
                Myanmar Software Engineers
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-x-hidden overflow-y-scroll custom-area">
            {/* Files and Folders */}
            <div className="files  monospace flex flex-col h-full w-full pt-14 gap-2">
              {/* importing from data */}

              {files.map(({ name, extension }) => {
                return (
                  <div
                    className="hover:bg-slate-800 w-full h-6 flex items-center pl-6 font-sans text-xs gap-2 cursor-pointer"
                    key={name}
                  >
                    {handleIcon(extension)}
                    {`${name}.${extension}`}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="body h-full w-auto grow relative ">
          <div className=" absolute w-full h-10 flex flex-row border-r-[0.5px] border-l-[0.5px]  border-t-[0.5px]  border-gray-600 text-sm inconsolata ">
            <div className="h-full min-w-24 border-red-50 px-3 border-l-[1px]  border-r-[1px]text-yellow-500 border-t-2 border-t-red-400 text-yellow-500 flex justify-around items-center gap-3">
              <BiLogoJavascript />
              <h5>htutaungwai.js</h5>
              <BiX className="text-white" />
            </div>
            <div className="h-full min-w-24 border-gray-600 px-3 border-[1px]  flex items-center justify-around gap-3">
              <h5 className="text-blue-400">index.html</h5>
              <BiLogoHtml5 className="text-orange-500" />
            </div>

            <div className="w-full h-full border-b-[0.5px] border-gray-600  flex-grow"></div>
          </div>
          <div className="mt-14 pl-20">
            <ol className="list-decimal leading-8 monospace text-lg text-gray-400">
              <li>
                <span className="text-blue-500">console</span>.
                <span className="text-purple-500">log</span>
                <span className="text-blue-300">("Hello 🌏")</span>;
              </li>
              <li>
                <span className="text-orange-500">var</span>{" "}
                <span className="text-gray-500">name</span> ={" "}
                <span className="text-blue-300">"Htut Aung Wai"</span>;
              </li>
              <li>
                <span className="text-orange-500">var</span>{" "}
                <span className="text-gray-500">tech_stack</span> ={" "}
                <span className="text-blue-300">["Node.js"</span>,{" "}
                <span className="text-blue-300">"React.js"</span>,{" "}
                <span className="text-blue-300">"Express.js"</span>,{" "}
                <span className="text-blue-300">"MongoDB"</span>,{" "}
                <span className="text-blue-300">"Nest.js"]</span>;
              </li>
              <li></li>

              <li>
                <span className="text-orange-500">const</span>{" "}
                <span className="text-blue-100">qualifications</span> ={" "}
                <span className="text-blue-300">{`{`}</span>
              </li>
              <li>
                <span className=" pl-4"> languages: </span>
                <span className="text-blue-300">["မြန်မာစာ"</span>,
                <span className="text-blue-300"> "English"</span>,
                <span className="text-blue-300"> "ไทย"]</span>,
              </li>
              <li>
                <span className=" pl-4"> programming: </span>
                <span className="text-blue-300">["C#"</span>,{" "}
                <span className="text-blue-300">"Javascript" </span>,{" "}
                <span className="text-blue-300"> "Typescript"]</span>,
              </li>
              <li>
                <span className=" pl-4"> education: </span>
                <span className="text-blue-300">{` {`}</span>
              </li>
              <li>
                <span className="text-blue-500 pl-8">2020</span>:{" "}
                <span className="text-orange-400">[</span>
                <span className="text-blue-300">
                  "Kyaukse Technological University"
                </span>
                <span className="text-orange-400">]</span>,
              </li>
              <li>
                <span className="text-blue-500 pl-8">2022</span>:{" "}
                <span className="text-orange-400">[</span>
                <span className="text-blue-300">
                  "วิทยาลัยเทคโนโลยีไออาร์พีซี(IRPCT)"
                </span>
                <span className="text-orange-400">]</span>,
              </li>
              <li>
                <span className="pl-4 text-blue-300">{"}"}</span>,
              </li>
              <li>
                <span className="text-blue-300">{"}"}</span>;
              </li>
              {/*  */}

              <li></li>
              <li>
                <span className="text-orange-500">function</span>{" "}
                <span className="text-purple-500">mySkills</span>
                <span className="text-blue-300"> {`() {`}</span>
              </li>
              <li>
                <span className="text-orange-500 pl-8">return</span>{" "}
                <span className="text-blue-300">"UX"</span>,{" "}
                <span className="text-blue-300">"UI"</span>,{" "}
                <span className="text-blue-300">"Frontend"</span>,{" "}
                <span className="text-blue-300">"Backend"</span>;
              </li>
              <li>{`}`}</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HtutAungWai;
