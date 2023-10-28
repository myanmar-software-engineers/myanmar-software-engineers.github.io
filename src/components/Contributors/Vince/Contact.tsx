/* eslint-disable @next/next/no-img-element */

const Contact = () => {
  return (
    <div className=" w-full h-auto items-center flex-wrap flex-col flex gap-4 p-[1rem]  ">
      <div className=" flex justify-center p-[1rem] bg-[#1a1b27] text-[#6899eb] border rounded w-full items-center ">
        <p>This developer is too lazy to descripe himself!</p>
      </div>

      <div>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=lizzy-km&layout=compact&hide_progress=false&theme=tokyonight"
          alt=""
        />
      </div>

      <div>
        <img
          src="https://github-readme-stats.vercel.app/api?username=lizzy-km&show_icons=true&theme=tokyonight"
          alt=""
        />
      </div>

      <div className="felx p-[1rem] bg-[#1a1b27] text-[#6899eb] border rounded w-full ">
        <ul>
          <li>
            <a href="https://github.com/lizzy-km">GitHub - lizzy-km</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vincexoy/">
              Linkedin - Kaung Myat Soe
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/dev.lizzy">
              Facebook - Kaung Myat Soe
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
