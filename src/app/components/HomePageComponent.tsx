"use client";

import Container from "@/components/Common/Container/Container";
import OverflowContainer from "@/components/Common/Container/OverflowContainer";
import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import HomeSection from "@/components/MSE/HomeSection";
import JoinSection from "@/components/MSE/JoinSection";
import LanguageIconSection from "@/components/MSE/LanguageIconSection";
import MmsweTypoSection from "@/components/MSE/MmsweTypoSection";
import PlatformSection from "@/components/MSE/PlatformSection";
import { generateColor } from "@/utils";

export default function HomePageComponent() {
  const color = generateColor();
  const bgColor = `${color} bg-opacity-[0.35]`;

  return (
    <>
      <Container withPadding>
        {/* Home Section: Start */}
        <HomeSection bgColor={bgColor} />
        {/* Home Section: Finished */}

        <SpacingDivider />

        {/* Joined Section: Start */}
        <JoinSection bgColor={bgColor} />
        {/* Joined Section: Finished */}

        <SpacingDivider size="lg" />
      </Container>

      <OverflowContainer>
        {/* LanguageIcon Section: Start */}
        <SpacingDivider size="sm" />

        <LanguageIconSection bgColor={bgColor} />
        {/* LanguageIcon Section: Finished */}

        <SpacingDivider size="sm" />

        {/* Typo Sectino: Start */}
        <MmsweTypoSection bgColor={bgColor} />
        {/* Typo Sectino: Finished */}
        <SpacingDivider size="sm" />
      </OverflowContainer>

      <Container withPadding>
        {/* Platform Section: Start */}
        <PlatformSection bgColor={bgColor} />
        {/* Platform Section: Start */}
      </Container>
    </>
  );
}
