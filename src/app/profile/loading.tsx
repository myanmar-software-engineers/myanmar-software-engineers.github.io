import MseTypo from "@/components/Animate/MseTypo/MseTypo";
import TitleText from "@/components/Common/TitleText/TitleText";

const loading = () => {
  return (
    <div className="text-center">
      <div className="max-w-[380px] mx-auto">
        <MseTypo isWhite bgColor="bg-rose-500" />
      </div>
    </div>
  );
};
export default loading;
