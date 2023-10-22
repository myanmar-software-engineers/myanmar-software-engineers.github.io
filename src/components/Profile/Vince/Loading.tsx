
const Loading = () => {
  return (
    <div class=" absolute top-0 left-0 flex flex-col justify-center gap-0 items-center w-full h-screen loader-bg ">
      <div class=" flex flex-col relative  justify-center items-center w-full  ">
        <p class="loaderText absolute ">V</p>
        <span class="loader"></span>
      </div>
    </div>
  );
};

export default Loading;
