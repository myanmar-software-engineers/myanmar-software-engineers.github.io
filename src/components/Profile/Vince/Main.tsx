import Project from "./Project";

const Main = () => {
  return (
    <div class=" trn-4 flex w-full flex-col h-auto ">
      <div class=" gap-[2rem] rounded-3xl flex  justify-between items-center w-full h-[250px] bg-blur ">
        <div class=" flex w-[40%] name gap-1 p-[1rem] h-full  justify-center ">
          <h1>V</h1>
          <h1>i</h1>
          <h1>n</h1>
          <h1>c</h1>
          <h1>e</h1>
        </div>
        <div class="trn-4 cursor-pointer w-[200px] h-[200px] flex justify-center items-center pf-shadow bg-transparent hover:bg-cyan-500 rounded-full  ">
          <img
            class=" trn-4 rounded-full hover:w-[80%] hover:mt-[-150px] hover:h-[80%] w-[100%] h-[100%] hover:rounded-full "
            src="https://avatars.githubusercontent.com/u/74085442?v=4"
            alt=""
          />
        </div>

        <div class=" h-full flex justify-start mt-[2.4rem] w-[40%] p-[1rem] text-3xl  ">
          <h1>Front End Developer</h1>
        </div>
      </div>

      <Project />
    </div>
  );
};

export default Main;
