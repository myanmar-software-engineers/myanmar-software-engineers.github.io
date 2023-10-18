import TitleText from "@/components/Common/TitleText/TitleText";
import MseLink from "../MseLink/MseLink";

const MseLogo = () => {
  return (
    <TitleText>
      <MseLink href="/">
        <TitleText tag="span" className="text-xl font-bold">
          MM
        </TitleText>
        <TitleText tag="span" className="text-md">
          SWE.com
        </TitleText>
      </MseLink>
    </TitleText>
  );
};
export default MseLogo;
