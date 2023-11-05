import { FaHome, FaGraduationCap, FaGamepad } from "react-icons/fa";
import { MdHeadphones, MdWork } from "react-icons/md";
import { BsLaptopFill } from "react-icons/bs";
import { BiSolidCameraMovie } from "react-icons/bi";

export const info = [
  {
    prefix: "Worked at ",
    icon: <MdWork size={17} />,
    link: "https://marathonmyanmar.com/",
    info: "Marathon Myanmar",
  },
  {
    prefix: "Lives in ",
    icon: <FaHome size={17} />,
    link: "https://g.co/kgs/AroKR7",
    info: "Yangon",
  },
  {
    prefix: "Studied at ",
    icon: <FaGraduationCap size={17} />,
    link: "https://www.ucsy.edu.mm/",
    info: "Universtiy of Computer Studies, Yangon",
  },
];

export const hobbies = [
  {
    icon: <BsLaptopFill size={18} className="text-black" />,
    label: "Coding",
  },
  {
    icon: <BiSolidCameraMovie size={20} className="text-purple-400" />,
    label: "K-Drama",
  },
  {
    icon: <FaGamepad size={20} className="text-green-300" />,
    label: "Video Games",
  },
  {
    icon: <MdHeadphones size={20} className="text-yellow-300" />,
    label: "Listening to Music",
  },
];

export const features = [
  {
    thumbnail:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzZka2xhaG02OHk1Yndua2toY3R4ZXVsNTh3NGFsdXlsb2Z1YWc3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUPGcDip2TO0r4jiqA/giphy.gif",
    title: "Apps",
    projects: [
      {
        imageClass: "w-[127px] h-[247px] ",
        backgroundColorClassName:
          "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-lime-900 via-indigo-700 to-zinc-600",
        image: "https://dagugugu.vercel.app/matesat_mobile.png",
        link: "https://play.google.com/store/apps/details?id=com.mateset_rn&hl=en&gl=US",
      },
    ],
  },
  {
    thumbnail:
      "https://media2.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif?cid=ecf05e47hqcy5yklbttykzf9u3ur8q3agfn6q8uqwedfyvyn&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    title: "Webs",
    projects: [
      {
        imageClass: "w-[150px] ",
        backgroundColorClassName:
          "bg-gradient-to-tl from-red-300 via-purple-300 to-pink-300",
        image: "https://dagugugu.vercel.app/connectfour.png",
        link: "https://connect-four-seven-nu.vercel.app/",
      },
      {
        imageClass: "w-[150px] ",
        backgroundColorClassName:
          "bg-gradient-to-tl from-teal-300 via-indigo-300 to-sky-300",
        image: "https://dagugugu.vercel.app/rock-paper-scissor.png",
        link: "https://rock-paper-scissor-murex.vercel.app/",
      },
    ],
  },
];
