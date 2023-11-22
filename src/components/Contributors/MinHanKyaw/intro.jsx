
import { SuitCase, Pin, HomeAlt, Hat } from "./icons";

export default function Intro() {
  return (
    <div className="rounded-lg w-full bg-white p-4">
      <div className="text-xl font-bold text-black">Intro</div>
      <div className="mt-4 flex items-center">
        <div><SuitCase /></div>
        <div className="text-black ml-2 text-sm">
          Software Engineer at <b>TASTYSOT Software CO., Ltd</b>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <div><Hat /></div>
        <div className="text-black text-sm ml-2">Studies at <b>University of the People</b></div>
      </div>
      <div className="mt-4 flex items-center">
        <div><HomeAlt /></div>
        <div className="text-black text-sm ml-2">
          Lives in <b>Mandalay</b>{' '}
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <div><Pin /></div>
        <div className="text-black text-sm ml-2">
          From <b>Mogok</b>{' '}
        </div>
      </div>
    </div>
  );
}
