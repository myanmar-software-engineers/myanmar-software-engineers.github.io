import React from "react";

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center gap-0 items-center w-full h-screen loader-bg lg-rounded">
      <div className="flex flex-col relative  justify-center items-center w-full  ">
        <p className="loaderText absolute ">P</p>
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loading;
