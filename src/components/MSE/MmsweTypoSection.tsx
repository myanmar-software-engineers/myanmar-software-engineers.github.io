"use client";
import MsoTypo from "../Animate/MseTypo/MseTypo";
import Container from "../Common/Container/Container";
import HorizontalWrapper from "../Common/HorizontalWrapper/HorizontalWrapper";

const MmsweTypoSection = ({
  bgColor = "bg-indigo-500",
}: {
  bgColor?: string;
}) => {
  return (
    <Container withPadding>
      <HorizontalWrapper horizontalDirection={-150} activeOpacity>
        <div className="relative -right-[150px] ">
          <MsoTypo bgColor={bgColor} />
        </div>
      </HorizontalWrapper>
    </Container>
  );
};

export default MmsweTypoSection;
