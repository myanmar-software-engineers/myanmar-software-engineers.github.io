import React, { useState } from "react";
import { BiLogoGithub, BiLink } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { features, hobbies, info } from "./Data";
import { AiOutlineClose } from "react-icons/ai";

const DaGuGuGu = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState(null);
  return (
    <div className="flex justify-center my-10  w-full text-white ">
      <div className="max-w-[410px] relative align-self-center bg-black overflow-x-hidden rounded-md ">
        <img
          className="w-full h-[200px]"
          src="https://media0.giphy.com/media/RMwgs5kZqkRyhF24KK/giphy.gif?cid=ecf05e47xdckqv6kn5rc6of5baa793qgy7if69g574pn3sl2&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        />

        <img
          className="rounded-full mx-3 -mt-[50px] mb-3 bg-green-300 h-[100px] w-[100px] border-2 "
          src="https://avatars.githubusercontent.com/u/71760983?s=400&u=b3a7e019faf9f06d3f499ae0486d5dd397617f77&v=4"
        />
        <div className="mx-3">
          <h2 className="text-white  font-semibold ">Hein Htet Aung</h2>
          <p className="text-gray-300 text-xs">Keep It Real</p>

          <div className="flex gap-1 text-white my-3">
            <a
              href="https://github.com/Da-Gu-Gu-Gu"
              className="w-1/2 bg-gray-800  flex items-center h-[34px] justify-center gap-2  rounded-md"
            >
              <BiLogoGithub size={23} /> Git Hub
            </a>
            <a
              href="https://dagugugu.vercel.app/"
              className="w-1/2 bg-blue-500  flex items-center h-[34px] justify-center gap-2    rounded-md"
            >
              <BiLink size={23} /> Website
            </a>
          </div>
          <div className=" h-px w-full bg-gray-400" />
          <div className="my-3 flex flex-col gap-2">
            {info.map((data, index) => {
              return (
                <div key={index} className="flex  gap-1 text-sm items-center">
                  {data.icon}
                  <p>
                    {data.prefix}
                    <a href={data.link} className="font-bold cursor-pointer">
                      {data.info}
                    </a>
                  </p>
                </div>
              );
            })}
          </div>

          {/* hobbies */}
          <div className="my-3 flex flex-wrap gap-1 ">
            {hobbies.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-2 bg-gray-700 py-1 px-2 items-center rounded-md"
                >
                  {data.icon}
                  <span className="text-sm"> {data.label}</span>
                </div>
              );
            })}
          </div>

          {/* featured */}

          <div className="my-3 w-full flex gap-2 flex-wrap">
            {features.map((data, index) => {
              return (
                <div key={index} className="flex flex-col items-center ">
                  <div
                    onClick={() => {
                      setSelectedProjects(data.projects);
                      setShowModal(true);
                    }}
                    className="w-[100px] cursor-pointer h-[165px] bg-red-300 rounded-md overflow-hidden"
                  >
                    <img className="w-full h-full" src={data.thumbnail} />
                  </div>
                  {data.title}
                </div>
              );
            })}
          </div>
          {selectedProjects && (
            <Modal
              projects={selectedProjects}
              show={showModal}
              setShowModal={setShowModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DaGuGuGu;

const Modal = ({ projects, show, setShowModal }) => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  return (
    <div
      className={`absolute  transition-all ease-in-out bottom-0 left-0 ${
        show ? "h-full" : "h-0"
      } w-full overflow-hidden `}
    >
      <div
        className={`relative h-full w-full ${projects[current].backgroundColorClassName} p-5`}
      >
        <div className={`flex justify-end cursor-pointer    `}>
          <AiOutlineClose
            onClick={() => {
              setCurrent(0);
              setShowModal(false);
            }}
            size={33}
            className="text-white hover:rotate-180 transition-all rounded-full p-2 bg-gray-800"
          />
        </div>
        <p className="text-sm text-center">
          {current + 1} of {length}
        </p>
        <div
          className={`flex  transition-all ease-in-out delay-75  ${
            show ? "scale-1" : "scale-0"
          }  p-5 w-full justify-between items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <div
            onClick={() => setCurrent((prev) => prev - 1)}
            className={`${
              current + 1 >= length && length > 1 ? "visible" : "invisible"
            } p-2 rounded-full    bg-gray-800/50  cursor-pointer`}
          >
            <IoIosArrowBack size={20} className="text-gray-300" />
          </div>

          <img
            className={projects[current].imageClass}
            src={projects[current].image}
          />
          <div
            onClick={() => setCurrent((prev) => prev + 1)}
            className={`${
              current + 1 < length && length > 1 ? "visible" : "invisible"
            } p-2 rounded-full    bg-gray-800/50  cursor-pointer`}
          >
            <IoIosArrowForward size={20} className="text-gray-300" />
          </div>
        </div>
        <div className="absolute cursor-pointer bg-gray-800 px-4 py-1 rounded-md bottom-[25%] left-1/2 -translate-x-1/2">
          <a href={projects[current].link} className="flex gap-1">
            <BiLink size={23} /> View
          </a>
        </div>
      </div>
    </div>
  );
};
