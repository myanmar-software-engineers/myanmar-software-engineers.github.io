/* eslint-disable @next/next/no-img-element */
// import Image from '../icons/image';
// import Feeling from '../icons/feeling';
// import Tag from '../icons/tag';
import { Image,Feeling,Tag } from "./icons";

export default function CreatePost() {
  return (
    <div>
      <div className="w-full rounded-lg bg-white p-4">
        <div className="flex space-x-2">
          <img
            src="https://drive.google.com/uc?export=view&id=1N1-Wu9SeVi5Mscl3elGopCnLDq3j_dNZ"
            alt="img"
            className="h-10 w-10 rounded-full object-cover"
          />
          <input
            className="bg-gray-200 bg-opacity-80 px-4 py-3 w-full focus:outline-none rounded-full"
            placeholder="Write something to ko kyaw gyi ..."
          />
        </div>
        {/* <div className="border border-fGray border-opacity-10 mt-4" /> */}
        <div className="flex justify-between">
          <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <Image alt="Image" />
            <div className="text-gray-500 text-sm ml-2">
              Photo/Video
            </div>
          </button>
          <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <Tag />
            <div className="text-gray-500 text-sm ml-2">
              Tag Friends
            </div>
          </button>
          <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <Feeling />
            <div className="text-gray-500 text-sm ml-2">
              Feelling/Activity
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
