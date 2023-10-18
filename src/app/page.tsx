import Container from "@/components/Common/Container/Container";
import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import HomeSection from "@/components/MSE/HomeSection";
import JoinSection from "@/components/MSE/JoinSection";
import LanguageIconSection from "@/components/MSE/LanguageIconSection";
import MmsweTypoSection from "@/components/MSE/MmsweTypoSection";
import PlatformSection from "@/components/MSE/PlatformSection";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home | ${APP_CONFIG.title}`,
  description: APP_CONFIG.description,
};

export default function HomePage() {
  return (
    <>
      <Container withPadding>
        <SpacingDivider />

        {/* Home Section: Start */}
        <HomeSection />
        {/* Home Section: Finished */}

        <SpacingDivider />

        {/* Joined Section: Start */}
        <JoinSection />
        {/* Joined Section: Finished */}

        <SpacingDivider size="lg" />

        {/* LanguageIcon Section: Start */}
        <LanguageIconSection />
        {/* LanguageIcon Section: Finished */}

        <SpacingDivider size="lg" />

        {/* Typo Sectino: Start */}
        <MmsweTypoSection />
        {/* Typo Sectino: Finished */}
        <SpacingDivider size="lg" />

        {/* Platform Section: Start */}
        <PlatformSection />
        {/* Platform Section: Start */}

        <SpacingDivider size="lg" />
        <SpacingDivider size="lg" />
      </Container>
    </>
  );
}
